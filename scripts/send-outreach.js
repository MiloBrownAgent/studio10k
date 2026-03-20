#!/usr/bin/env node
/**
 * Studio10k Outreach Email Sender
 * 
 * Reads /outreach/emails/[slug].md, parses subject + body,
 * matches recipient email from plumbers.ts data, sends via Gmail SMTP.
 * 
 * Usage:
 *   DRY RUN (default):    node scripts/send-outreach.js
 *   SEND FOR REAL:        node scripts/send-outreach.js --send
 *   SINGLE TEST:          node scripts/send-outreach.js --test-to your@email.com
 *   SINGLE PLUMBER:       node scripts/send-outreach.js --slug norblom-plumbing --send
 * 
 * Required env vars:
 *   GMAIL_APP_PASSWORD    — 16-char App Password from myaccount.google.com/apppasswords
 * 
 * SMTP: smtp.gmail.com:587 (STARTTLS)
 * From: milobrownagent@gmail.com (displays as "Alex from Studio10k" <hello@studio10k.com>)
 */

const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

// ─── Config ───────────────────────────────────────────────────────────────────

const GMAIL_USER = "milobrownagent@gmail.com";
const FROM_ADDRESS = '"Alex from Studio10k" <hello@studio10k.com>';
const EMAILS_DIR = path.join(__dirname, "../outreach/emails");

// Slug → recipient email map (from plumbers.ts)
const RECIPIENT_MAP = {
  "norblom-plumbing":         "info@norblomplumbing.com",
  "weld-and-sons":            "info@weldandsons.com",
  "spetz-plumbing":           "service@spetzplumbing.com",
  "erik-nelson-plumbing":     "info@eriknelsonplumbing.com",
  "ron-the-sewer-rat":        "service@ronthesewerrat.com",
  "plumb-right":              "service@callplumbright.com",
  "gopher-sewer-drain":       "service@gopherseweranddrain.com",
  "st-paul-pipeworks":        "info@stpaulpipeworks.com",
  "northern-lights-plumbing": "info@northernlightsplumbing.com",
  "kelly-plumbing-heating":   "info@kellyplumbinginc.com",
  "fish-plumbing":            "info@fishplumbingutilities.com",
  "metro-plumbing-drains":    "info@callmetroplumbing.com",
  "aqua-city-plumbing":       "info@aquacityplumbing.com",
  "grabow-plumbing":          "info@grabowplumbing.com",
  "loch-monster-plumbing":    "info@lochmonsterplumbing.com",
  "focus-plumbing":           "focusplumbingservicesllc@gmail.com",
  "blaylock-plumbing":        "info@blaylockplumbing.com",
  "master-plumbing-services": "info@mnmps.com",
  "aqualine-mechanical":      "info@aqualinemechanical.com",
  "bonfe-plumbing":           "info@bonfe.com",
  "soderlin-plumbing":        "info@soderlin.com",
  "msp-plumbing":             "service@mspplumbingheatingair.com",
  "hero-plumbing":            "service@callhero.com",
  "cities-1-plumbing":        "service@cities1plumbing.com",
  "polar-plumbing":           "service@polarplumbing.com",
  "twin-cities-premier":      "service@twincitiespremierplumbing.com",
  "edwards-plumbing":         "info@mikeedwardsplumbinginc.com",
  "kens-sewer":               "info@kensewer.com",
  "cities-plumbing-heating":  "service@citiesplumbingheating.com",
  "johns-sewer-drain":        "info@johnsdrains.com",
};

// ─── Parse args ───────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const DRY_RUN = !args.includes("--send");
const TEST_TO = (() => {
  const idx = args.indexOf("--test-to");
  return idx !== -1 ? args[idx + 1] : null;
})();
const SINGLE_SLUG = (() => {
  const idx = args.indexOf("--slug");
  return idx !== -1 ? args[idx + 1] : null;
})();

// ─── Parse email markdown ──────────────────────────────────────────────────────

function parseEmail(mdContent) {
  // Extract subject line
  const subjectMatch = mdContent.match(/\*\*Subject:\*\*\s*(.+)/);
  const subject = subjectMatch ? subjectMatch[1].trim() : null;

  // Extract body: everything after the "---" separator and the Subject line
  const bodyStart = mdContent.indexOf("\n\nHi,");
  if (!subject || bodyStart === -1) return null;

  const body = mdContent.substring(bodyStart).trim();
  return { subject, body };
}

// ─── Create transporter ───────────────────────────────────────────────────────

function createTransporter(appPassword) {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: GMAIL_USER,
      pass: appPassword,
    },
  });
}

// ─── Send single email ────────────────────────────────────────────────────────

async function sendEmail(transporter, { to, subject, text, slug }) {
  const info = await transporter.sendMail({
    from: FROM_ADDRESS,
    to,
    subject,
    text,
    // Reply-to goes to hello@studio10k.com (received via ImprovMX → milobrownagent@gmail.com)
    replyTo: "hello@studio10k.com",
    headers: {
      // Help prevent threading with other outreach tools
      "X-Mailer": "Studio10k Outreach v1",
    },
  });
  return info;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  
  if (!appPassword && !DRY_RUN) {
    console.error("❌ GMAIL_APP_PASSWORD env var is required for real sends.");
    console.error("   Get it at: https://myaccount.google.com/apppasswords");
    process.exit(1);
  }

  console.log(`\n🚀 Studio10k Outreach Sender`);
  console.log(`   Mode: ${DRY_RUN ? "DRY RUN (no emails sent)" : "LIVE SEND"}`);
  if (TEST_TO) console.log(`   Test target: ${TEST_TO}`);
  if (SINGLE_SLUG) console.log(`   Single slug: ${SINGLE_SLUG}`);
  console.log();

  // Read all email markdown files
  const emailFiles = fs.readdirSync(EMAILS_DIR)
    .filter(f => f.endsWith(".md"))
    .sort();

  // Filter to single slug if specified
  const targetFiles = SINGLE_SLUG
    ? emailFiles.filter(f => f === `${SINGLE_SLUG}.md`)
    : emailFiles;

  if (targetFiles.length === 0) {
    console.error(`❌ No email file found${SINGLE_SLUG ? ` for slug: ${SINGLE_SLUG}` : ""}`);
    process.exit(1);
  }

  const transporter = appPassword ? createTransporter(appPassword) : null;

  // Verify SMTP connection before looping
  if (transporter && !DRY_RUN) {
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified\n");
    } catch (err) {
      console.error("❌ SMTP connection failed:", err.message);
      process.exit(1);
    }
  }

  let sent = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of targetFiles) {
    const slug = file.replace(".md", "");
    const filePath = path.join(EMAILS_DIR, file);
    const mdContent = fs.readFileSync(filePath, "utf-8");
    const parsed = parseEmail(mdContent);

    if (!parsed) {
      console.warn(`⚠️  Could not parse ${file} — skipping`);
      skipped++;
      continue;
    }

    const recipientEmail = TEST_TO || RECIPIENT_MAP[slug];
    if (!recipientEmail) {
      console.warn(`⚠️  No recipient email for slug: ${slug} — skipping`);
      skipped++;
      continue;
    }

    const { subject, body } = parsed;

    console.log(`📧 [${slug}]`);
    console.log(`   To:      ${recipientEmail}`);
    console.log(`   Subject: ${subject}`);

    if (DRY_RUN) {
      console.log(`   Body preview: ${body.substring(0, 80).replace(/\n/g, " ")}...`);
      console.log(`   → DRY RUN — not sending`);
      sent++;
    } else {
      try {
        const info = await sendEmail(transporter, {
          to: recipientEmail,
          subject,
          text: body,
          slug,
        });
        console.log(`   ✅ Sent — Message ID: ${info.messageId}`);
        sent++;

        // Throttle: 2-second delay between sends to avoid rate limits
        if (targetFiles.indexOf(file) < targetFiles.length - 1) {
          await new Promise(r => setTimeout(r, 2000));
        }
      } catch (err) {
        console.error(`   ❌ Failed: ${err.message}`);
        failed++;
      }
    }
    console.log();
  }

  console.log("─".repeat(50));
  console.log(`Results: ${sent} ${DRY_RUN ? "queued (dry run)" : "sent"}, ${skipped} skipped, ${failed} failed`);
  
  if (DRY_RUN && !TEST_TO) {
    console.log("\nTo send for real:  node scripts/send-outreach.js --send");
    console.log("To test first:     node scripts/send-outreach.js --test-to you@gmail.com --send");
    console.log("Single plumber:    node scripts/send-outreach.js --slug norblom-plumbing --send");
  }
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
