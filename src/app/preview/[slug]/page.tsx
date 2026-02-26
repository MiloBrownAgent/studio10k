"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import PLUMBERS, { PlumberConfig } from "@/lib/plumbers";

function getPlumber(slug: string): PlumberConfig | undefined {
  return PLUMBERS.find((p) => p.slug === slug);
}

// ─────────────────────────────────────────────
// SVG Icon Library
// ─────────────────────────────────────────────
const Icons = {
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
    </svg>
  ),
  phoneSm: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2zm-1.5 13.5l-3-3 1.06-1.06 1.94 1.93 4.44-4.43 1.06 1.06-5.5 5.5z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  starSm: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  ),
  medal: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 15a6 6 0 100-12 6 6 0 000 12zm0-10a4 4 0 110 8 4 4 0 010-8zm-1 9.93V23l1-1 1 1v-8.07A6.978 6.978 0 0112 15a6.978 6.978 0 01-1-.07z" />
    </svg>
  ),
  checkCircle: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" />
    </svg>
  ),
  thumbsUp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32a1.5 1.5 0 00-.44-1.06L14.17 1 7.59 7.59A1.994 1.994 0 007 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 3l1.45 3.22L17 7.5l-2.55 2.48.6 3.52L12 11.77l-3.05 1.73.6-3.52L7 7.5l3.55-.28L12 3zM5 13l.73 1.62L7.5 15l-1.77 1.38.39 2.12L5 17.5l-2.12 1 .39-2.12L1.5 15l1.77-.38L4 13H5zm14 0l.73 1.62L21.5 15l-1.77 1.38.39 2.12L18 17.5l-2.12 1 .39-2.12L14.5 15l1.77-.38L17 13h2z" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12.016 3s.208 2.688-1.952 4.608C7.888 9.52 6.4 11.44 6.4 13.68c0 3.12 2.496 5.648 5.616 5.648s5.616-2.528 5.616-5.648c0-5.168-5.616-10.68-5.616-10.68zm0 15.28c-1.76 0-3.2-1.44-3.2-3.2 0-1.28.752-2.288 1.744-3.072.208 1.2.928 2.192 1.936 2.848.256-.832.272-1.664.064-2.464 1.184.784 1.888 2.064 1.888 3.44 0 .656-.16 1.28-.432 1.824-.24.064-.488.096-.752.096a3.187 3.187 0 01-.752-.096c-.272-.544-.432-1.168-.432-1.824h-.064z" />
    </svg>
  ),
  gas: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.5" fill="white" />
    </svg>
  ),
  pipe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 12h20M2 8h4v8H2M18 8h4v8h-4" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  bathtub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M7 5c0-1.1.9-2 2-2s2 .9 2 2H7zm-4 9v2h18v-2c0-1.65-1.35-3-3-3H6c-1.65 0-3 1.35-3 3zm2 4l-1 4h2l.5-2h11l.5 2h2l-1-4H5zm1-8v5h1V10H6zm11 0v5h1V10h-1z" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
    </svg>
  ),
  toilet: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M19 5H5C3.9 5 3 5.9 3 7v4c0 3.86 2.74 7.07 6.41 7.79L8 21h8l-1.41-2.21C18.26 18.07 21 14.86 21 11V7c0-1.1-.9-2-2-2zm-7 9c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z" />
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <polyline points="17 7 12 2 7 7" />
      <polyline points="7 17 12 22 17 17" />
      <polyline points="2 7 7 12 2 17" />
      <polyline points="22 17 17 12 22 7" />
    </svg>
  ),
  thermometer: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M15 13V5a3 3 0 00-6 0v8a5 5 0 106 0zm-3 7a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
    </svg>
  ),
  sewer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  ),
  emergency: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  pump: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="14" width="10" height="7" rx="1" />
      <path d="M12 17.5h4a2 2 0 000-4H12M7 14V8a5 5 0 0110 0v6" />
    </svg>
  ),
} as const;

// ─────────────────────────────────────────────
// Service Icon Mapper
// ─────────────────────────────────────────────
function getServiceIcon(title: string, iconStr: string): React.ReactNode {
  const s = (title + " " + iconStr).toLowerCase();

  if (s.includes("emergency") || s.includes("urgent") || s.includes("🚨")) return Icons.emergency;
  if (s.includes("sewer") && (s.includes("camera") || s.includes("video") || s.includes("inspect") || s.includes("📷"))) return Icons.camera;
  if (s.includes("camera") || s.includes("video") || s.includes("inspect") || s.includes("📷")) return Icons.camera;
  if (s.includes("gas") || s.includes("🔴")) return Icons.flame;
  if (s.includes("water heater") || s.includes("boiler") || s.includes("🔥")) return Icons.flame;
  if (s.includes("drain") || s.includes("🔧")) return Icons.droplet;
  if (s.includes("sewer") || s.includes("main line") || s.includes("🏗️")) return Icons.sewer;
  if (s.includes("bathroom") || s.includes("bath") || s.includes("🛁")) return Icons.bathtub;
  if (s.includes("backflow") || s.includes("🛡️")) return Icons.shield;
  if (s.includes("toilet") || s.includes("🚽")) return Icons.toilet;
  if (s.includes("pipe") || s.includes("repiping") || s.includes("🔩")) return Icons.pipe;
  if (s.includes("fixture") || s.includes("🚿")) return Icons.wrench;
  if (s.includes("water line") || s.includes("💧")) return Icons.water;
  if (s.includes("kitchen") || s.includes("🍳")) return Icons.home;
  if (s.includes("commercial") || s.includes("🏢")) return Icons.building;
  if (s.includes("pump") || s.includes("sump")) return Icons.pump;
  if (s.includes("hvac") || s.includes("furnace") || s.includes("🌡️")) return Icons.thermometer;
  if (s.includes("cooling") || s.includes("ac") || s.includes("❄️")) return Icons.snowflake;
  if (s.includes("root") || s.includes("🌳")) return Icons.droplet;
  if (s.includes("remodel")) return Icons.bathtub;
  if (s.includes("old home") || s.includes("vintage") || s.includes("🏚️")) return Icons.home;
  if (s.includes("hydro") || s.includes("🌊")) return Icons.water;
  if (s.includes("inspection") || s.includes("📋")) return Icons.clipboard;
  return Icons.wrench; // fallback
}

// ─────────────────────────────────────────────
// Urgency Bar
// ─────────────────────────────────────────────
function UrgencyBar({ b }: { b: PlumberConfig }) {
  const msg = b.availability ?? "Same-Day & Emergency Service Available";
  return (
    <div
      className="w-full text-white text-center text-sm py-2 px-4 font-medium flex items-center justify-center gap-2"
      style={{ backgroundColor: b.primaryColor }}
    >
      <span className="inline-flex opacity-90">{Icons.lightning}</span>
      <span>
        {msg} — Call{" "}
        <a
          href={`tel:${b.phone.replace(/\D/g, "")}`}
          className="underline font-bold hover:opacity-80 transition"
        >
          {b.phone}
        </a>
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────
function Nav({ b }: { b: PlumberConfig }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-xl leading-tight" style={{ color: b.primaryColor }}>
            {b.name}
          </span>
          {b.established && (
            <span className="text-xs text-gray-400 leading-tight">Est. {b.established}</span>
          )}
        </div>
        <a
          href={`tel:${b.phone.replace(/\D/g, "")}`}
          className="flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition hover:opacity-90 shadow"
          style={{ backgroundColor: b.primaryColor }}
        >
          <span className="hidden sm:inline-flex">{Icons.phoneSm}</span>
          {b.phone}
        </a>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────
function Hero({ b }: { b: PlumberConfig }) {
  return (
    <section
      className="relative overflow-hidden text-white py-32 md:py-48"
      style={{
        background: `linear-gradient(135deg, #0a0d12 0%, #111827 50%, ${b.primaryColor}18 100%)`,
      }}
    >
      {/* Subtle radial glow using brand color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${b.primaryColor}28 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Founded badge */}
        {b.established && (
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1 mb-6 border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            Serving the Twin Cities Since {b.established}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{b.name}</h1>

        {/* Thin separator */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-16 bg-white/30" />
          <span className="text-white/50 text-xs uppercase tracking-widest">Licensed &amp; Insured</span>
          <div className="h-px w-16 bg-white/30" />
        </div>

        <p className="text-xl md:text-2xl mb-2 font-semibold" style={{ color: b.accentColor }}>
          {b.tagline}
        </p>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">{b.subTagline}</p>

        {/* Primary CTA */}
        <a
          href={`tel:${b.phone.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-3 text-white text-xl md:text-2xl font-bold px-10 md:px-14 py-5 rounded-full transition hover:opacity-90 shadow-xl shadow-black/40"
          style={{ backgroundColor: b.primaryColor }}
        >
          {Icons.phone}
          Call Now: {b.phone}
        </a>

        {/* Trust micro-copy */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-300">
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">{Icons.checkCircle}</span>
            Licensed &amp; Insured
          </span>
          {b.responseTime && (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircle}</span>
              {b.responseTime}
            </span>
          )}
          {b.googleRating && b.reviewCount ? (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircle}</span>
              {b.googleRating} Star Google ({b.reviewCount} reviews)
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircle}</span>
              5-Star Rated
            </span>
          )}
          {b.badgeHighlight && (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircle}</span>
              {b.badgeHighlight}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Trust Badges
// ─────────────────────────────────────────────
function TrustBadges({ b }: { b: PlumberConfig }) {
  const ratingBadge = b.googleRating
    ? {
        icon: Icons.star,
        title: `${b.googleRating} Star Google Rating`,
        desc: b.reviewCount ? `${b.reviewCount} verified reviews` : "Highly rated by neighbors",
      }
    : { icon: Icons.star, title: "5-Star Rated", desc: "Trusted by your neighbors" };

  const availBadge = b.responseTime
    ? { icon: Icons.lightning, title: b.responseTime, desc: b.availability ?? "Fast response, every time" }
    : { icon: Icons.lightning, title: "Same-Day Service", desc: "Fast response, every time" };

  const specialBadge = b.badgeHighlight
    ? { icon: Icons.medal, title: b.badgeHighlight, desc: "A trusted local business" }
    : null;

  const badges = [
    { icon: Icons.shield, title: "Licensed & Insured", desc: `License #${b.licenseNumber}` },
    availBadge,
    { icon: Icons.clipboard, title: "Upfront Pricing", desc: "No surprises on your bill" },
    ratingBadge,
    ...(specialBadge ? [specialBadge] : []),
  ];

  return (
    <section className="py-14 bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid grid-cols-2 gap-8 ${badges.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
          {badges.map((badge) => (
            <div key={badge.title} className="text-center flex flex-col items-center">
              {/* Colored icon container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${b.primaryColor}26` }}
              >
                <span style={{ color: b.primaryColor }}>{badge.icon}</span>
              </div>
              <h3 className="font-bold text-base mb-1 text-white">{badge.title}</h3>
              <p className="text-gray-400 text-sm">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────
function Services({ b }: { b: PlumberConfig }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          From small fixes to major repairs — we handle it all, done right the first time.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {b.services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Icon container */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${b.primaryColor}1a` }}
              >
                <span style={{ color: b.primaryColor }}>
                  {getServiceIcon(s.title, s.icon)}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA in services */}
        <div className="text-center mt-12">
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-4 rounded-full transition hover:opacity-90 shadow-lg"
            style={{ backgroundColor: b.primaryColor }}
          >
            {Icons.phoneSm}
            Call for a Free Estimate: {b.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Why Us
// ─────────────────────────────────────────────
function WhyUs({ b }: { b: PlumberConfig }) {
  const reasons = [
    {
      icon: Icons.home,
      title: "Local Experts",
      desc: "We know the Twin Cities — its neighborhoods, its older homes, and what its plumbing needs.",
    },
    {
      icon: Icons.phone,
      title: "Real People Answer",
      desc: "Call us and talk to a real person — not a call center, not a bot, not a voicemail.",
    },
    {
      icon: Icons.sparkles,
      title: "We Clean Up After",
      desc: "We treat your home with respect. Shoe covers, drop cloths, no mess left behind.",
    },
    {
      icon: Icons.clipboard,
      title: "Price We Quote = Price You Pay",
      desc: "The estimate we give you is the final bill. No hidden fees, ever.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading + context */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: b.primaryColor }}>
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why {b.serviceAreaList[0]} Trusts {b.name}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{b.specialties}</p>

            <a
              href={`tel:${b.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition hover:opacity-90 shadow"
              style={{ backgroundColor: b.primaryColor }}
            >
              {Icons.phoneSm}
              {b.phone}
            </a>
          </div>

          {/* Right: Feature list */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex flex-col gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${b.primaryColor}1a` }}
                >
                  <span style={{ color: b.primaryColor }}>{r.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Reviews
// ─────────────────────────────────────────────
function Reviews({ b }: { b: PlumberConfig }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          What Your Neighbors Say
        </h2>
        {b.googleRating && b.reviewCount && (
          <p className="text-center text-lg font-semibold mb-2" style={{ color: b.primaryColor }}>
            {b.googleRating} Star Google Rating &bull; {b.reviewCount} Reviews
          </p>
        )}
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Real reviews from real homeowners in the {b.serviceAreaList[0]} area.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {b.reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <div className="flex gap-0.5 text-yellow-400 mb-4">
                {Icons.starSm}{Icons.starSm}{Icons.starSm}{Icons.starSm}{Icons.starSm}
              </div>
              <p className="text-gray-600 mb-5 italic text-base leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: b.primaryColor }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.neighborhood}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Service Area
// ─────────────────────────────────────────────
function ServiceArea({ b }: { b: PlumberConfig }) {
  return (
    <section className="relative py-20 text-white overflow-hidden" style={{ backgroundColor: b.primaryColor }}>
      {/* Radial gradient texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Proudly Serving the Twin Cities Metro
        </h2>
        <p className="mb-8 text-lg opacity-80">{b.serviceArea}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-10">
          {b.serviceAreaList.map((city) => (
            <span key={city} className="flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 bg-white/15 font-medium backdrop-blur-sm">
              <span className="text-green-300 flex-shrink-0">{Icons.checkCircle}</span>
              {city}
            </span>
          ))}
        </div>
        <a
          href={`tel:${b.phone.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-3 bg-white font-bold text-lg px-10 py-4 rounded-full hover:opacity-95 transition shadow-lg"
          style={{ color: b.primaryColor }}
        >
          {Icons.phoneSm}
          Call {b.phone}
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Contact Form
// ─────────────────────────────────────────────
function ContactForm({ b }: { b: PlumberConfig }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Get a Free Estimate
        </h2>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Describe your issue and we&apos;ll get back to you within the hour — or call us now for immediate help.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Describe your plumbing issue..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full text-white font-semibold py-4 rounded-full text-lg transition hover:opacity-90 disabled:opacity-50 shadow"
            style={{ backgroundColor: b.primaryColor }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent — We'll Call You Soon!"
              : "Request Free Estimate"}
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Prefer to talk? Call us directly:{" "}
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="font-bold hover:opacity-80 transition"
            style={{ color: b.primaryColor }}
          >
            {b.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
function Footer({ b }: { b: PlumberConfig }) {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white font-bold text-lg">{b.name}</span>
            {b.established && (
              <span className="text-gray-500 text-sm ml-2">Est. {b.established}</span>
            )}
            <p className="text-sm mt-1">
              {b.address} &bull; License #{b.licenseNumber}
            </p>
            {b.badgeHighlight && (
              <p className="text-xs mt-1 text-gray-500">{b.badgeHighlight}</p>
            )}
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-sm">
            <a
              href={`tel:${b.phone.replace(/\D/g, "")}`}
              className="text-white hover:opacity-80 transition font-semibold"
            >
              {b.phone}
            </a>
            <a href={`mailto:${b.email}`} className="hover:text-white transition">
              {b.email}
            </a>
            {b.googleRating && b.reviewCount && (
              <span className="text-yellow-500 text-xs">
                {b.googleRating} Star Google ({b.reviewCount} reviews)
              </span>
            )}
            {b.website && (
              <span className="text-gray-600 text-xs">{b.website}</span>
            )}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          &copy; 2026 {b.name}. All rights reserved. &bull; Licensed &amp; Insured in Minnesota
          {b.established && ` · Serving the Twin Cities since ${b.established}`}
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function PreviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const plumber = getPlumber(params.slug);

  if (!plumber) {
    notFound();
  }

  // Fire view tracking on page load — notifies Dave via Telegram
  useEffect(() => {
    fetch(`/api/track/${plumber!.slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: plumber!.name }),
    }).catch(() => {
      // silently ignore tracking errors
    });
  }, [plumber]);

  return (
    <main className="bg-white">
      <UrgencyBar b={plumber} />
      <Nav b={plumber} />
      <Hero b={plumber} />
      <TrustBadges b={plumber} />
      <Services b={plumber} />
      <WhyUs b={plumber} />
      <Reviews b={plumber} />
      <ServiceArea b={plumber} />
      <ContactForm b={plumber} />
      <Footer b={plumber} />
    </main>
  );
}
