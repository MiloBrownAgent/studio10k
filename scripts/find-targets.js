#!/usr/bin/env node

/**
 * Find local business targets using Google Places API.
 *
 * Usage: node scripts/find-targets.js <city> <business_type>
 * Example: node scripts/find-targets.js "Minneapolis" "plumber"
 *
 * Requires GOOGLE_PLACES_API_KEY environment variable.
 * Results saved to targets/[city]-[type]-[date].json
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const city = process.argv[2];
const businessType = process.argv[3];

if (!city || !businessType) {
  console.error("Usage: node scripts/find-targets.js <city> <business_type>");
  console.error('Example: node scripts/find-targets.js "Minneapolis" "plumber"');
  process.exit(1);
}

const apiKey = process.env.GOOGLE_PLACES_API_KEY;

if (!apiKey) {
  console.log("\n------------------------------------------");
  console.log("  GOOGLE_PLACES_API_KEY not set.");
  console.log("------------------------------------------\n");
  console.log("To use this script, you need a Google Places API key.\n");
  console.log("1. Go to https://console.cloud.google.com/apis/credentials");
  console.log("2. Create a project (or select one)");
  console.log("3. Enable the Places API");
  console.log("4. Create an API key\n");
  console.log("Then run:");
  console.log(`  GOOGLE_PLACES_API_KEY=your_key node scripts/find-targets.js "${city}" "${businessType}"\n`);
  console.log("Or add it to your .env file:\n");
  console.log("  GOOGLE_PLACES_API_KEY=your_key_here\n");
  process.exit(0);
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error("Failed to parse API response"));
        }
      });
      res.on("error", reject);
    });
  });
}

async function getPlaceDetails(placeId) {
  const fields = "name,formatted_address,formatted_phone_number,website,business_status,rating,user_ratings_total";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;
  const data = await fetch(url);
  return data.result || {};
}

async function main() {
  const query = encodeURIComponent(`${businessType} in ${city}`);
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

  console.log(`\nSearching for "${businessType}" in "${city}"...\n`);

  const searchData = await fetch(url);

  if (searchData.status !== "OK") {
    console.error(`API error: ${searchData.status}`);
    if (searchData.error_message) {
      console.error(searchData.error_message);
    }
    process.exit(1);
  }

  const results = searchData.results || [];
  console.log(`Found ${results.length} results. Fetching details...\n`);

  const businesses = [];

  for (const place of results) {
    try {
      const details = await getPlaceDetails(place.place_id);
      businesses.push({
        name: details.name || place.name,
        address: details.formatted_address || place.formatted_address,
        phone: details.formatted_phone_number || null,
        website: details.website || null,
        rating: details.rating || place.rating || null,
        totalReviews: details.user_ratings_total || place.user_ratings_total || 0,
        status: details.business_status || place.business_status || "UNKNOWN",
        placeId: place.place_id,
      });
    } catch (e) {
      // Skip places that fail to fetch details
      businesses.push({
        name: place.name,
        address: place.formatted_address,
        phone: null,
        website: null,
        rating: place.rating || null,
        totalReviews: place.user_ratings_total || 0,
        status: place.business_status || "UNKNOWN",
        placeId: place.place_id,
      });
    }
  }

  // Summary
  const noWebsite = businesses.filter((b) => !b.website);
  console.log(`Total businesses: ${businesses.length}`);
  console.log(`Without a website: ${noWebsite.length} (prime targets)\n`);

  businesses.forEach((b, i) => {
    const tag = b.website ? "   " : " * ";
    console.log(`${tag}${i + 1}. ${b.name}`);
    console.log(`      ${b.address}`);
    if (b.phone) console.log(`      Phone: ${b.phone}`);
    console.log(`      Website: ${b.website || "NONE"}`);
    if (b.rating) console.log(`      Rating: ${b.rating}/5 (${b.totalReviews} reviews)`);
    console.log();
  });

  // Save to file
  const date = new Date().toISOString().split("T")[0];
  const slug = `${city.toLowerCase().replace(/\s+/g, "-")}-${businessType.toLowerCase().replace(/\s+/g, "-")}`;
  const targetsDir = path.join(__dirname, "..", "targets");
  if (!fs.existsSync(targetsDir)) {
    fs.mkdirSync(targetsDir, { recursive: true });
  }

  const filename = `${slug}-${date}.json`;
  const filepath = path.join(targetsDir, filename);

  const output = {
    query: { city, businessType },
    date,
    totalResults: businesses.length,
    noWebsiteCount: noWebsite.length,
    businesses,
  };

  fs.writeFileSync(filepath, JSON.stringify(output, null, 2));
  console.log(`Results saved to targets/${filename}`);
  console.log(`\n* = No website (prime target for outreach)`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
