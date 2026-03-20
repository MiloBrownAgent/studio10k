"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import PLUMBERS, { PlumberConfig } from "@/lib/plumbers";

function getPlumber(slug: string): PlumberConfig | undefined {
  return PLUMBERS.find((p) => p.slug === slug);
}

// ─────────────────────────────────────────────
// Hero Image Assignment
// ─────────────────────────────────────────────
function getHeroImage(b: PlumberConfig): string {
  const s = b.slug;
  const services = b.services.map((sv) => sv.title.toLowerCase()).join(" ");
  const specialties = b.specialties.toLowerCase();

  // Slug-specific overrides for known specialists
  const sewerDrainSlugs = [
    "ron-the-sewer-rat",
    "gopher-sewer-drain",
    "kens-sewer",
    "johns-sewer-drain",
    "fish-plumbing",
    "polar-plumbing",
  ];
  const drainSlugs = ["metro-plumbing-drains", "gopher-sewer-drain"];
  const waterHeaterSlugs = ["spetz-plumbing", "bonfe-plumbing"];
  const bathroomSlugs = [
    "grabow-plumbing",
    "aqualine-mechanical",
    "kelly-plumbing-heating",
    "cities-plumbing-heating",
  ];
  const emergencySlugs = [
    "plumb-right",
    "loch-monster-plumbing",
    "master-plumbing-services",
    "hero-plumbing",
  ];
  const utilitySlugs = [
    "weld-and-sons",
    "northern-lights-plumbing",
    "blaylock-plumbing",
    "cities-1-plumbing",
  ];
  const toolsSlugs = [
    "st-paul-pipeworks",
    "focus-plumbing",
    "msp-plumbing",
    "edwards-plumbing",
  ];

  if (drainSlugs.includes(s)) return "/hero-drain.jpg";
  if (sewerDrainSlugs.includes(s)) return "/hero-sewer.jpg";
  if (waterHeaterSlugs.includes(s)) return "/hero-water-heater.jpg";
  if (bathroomSlugs.includes(s)) return "/hero-bathroom.jpg";
  if (emergencySlugs.includes(s)) return "/hero-emergency.jpg";
  if (utilitySlugs.includes(s)) return "/hero-utility.jpg";
  if (toolsSlugs.includes(s)) return "/hero-tools.jpg";

  // Keyword fallback
  if (specialties.includes("sewer") || specialties.includes("drain")) return "/hero-sewer.jpg";
  if (specialties.includes("water heater") || specialties.includes("tankless")) return "/hero-water-heater.jpg";
  if (specialties.includes("bathroom") || specialties.includes("remodel")) return "/hero-bathroom.jpg";
  if (services.includes("emergency") && specialties.includes("24/7")) return "/hero-emergency.jpg";

  // Default rotation for remaining (norblom, erik-nelson, soderlin, twin-cities-premier, aqua-city)
  const defaultImages = ["/hero-pipes.jpg", "/hero-utility.jpg", "/hero-tools.jpg"];
  const idx = Math.abs(s.charCodeAt(0) + s.charCodeAt(s.length - 1)) % defaultImages.length;
  return defaultImages[idx];
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
  phoneXs: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2zm-1.5 13.5l-3-3 1.06-1.06 1.94 1.93 4.44-4.43 1.06 1.06-5.5 5.5z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  starSm: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
  checkCircleXs: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
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
      <path d="M12 2c0 0 .208 2.688-1.952 4.608C7.888 8.52 6.4 10.44 6.4 12.68c0 3.12 2.496 5.648 5.616 5.648s5.616-2.528 5.616-5.648c0-5.168-5.616-11.68-5.616-11.68z" />
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
  mapPin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
} as const;

// ─────────────────────────────────────────────
// Service Icon Mapper
// ─────────────────────────────────────────────
function getServiceIcon(title: string, iconStr: string): React.ReactNode {
  const s = (title + " " + iconStr).toLowerCase();
  if (s.includes("emergency") || s.includes("urgent") || s.includes("🚨")) return Icons.emergency;
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
  if (s.includes("furnace") || s.includes("🌡️")) return Icons.thermometer;
  if (s.includes("cooling") || s.includes("ac") || s.includes("❄️")) return Icons.snowflake;
  if (s.includes("root") || s.includes("🌳")) return Icons.droplet;
  if (s.includes("remodel") || s.includes("🏚️")) return Icons.bathtub;
  if (s.includes("hydro") || s.includes("🌊")) return Icons.water;
  if (s.includes("inspection") || s.includes("📋")) return Icons.clipboard;
  return Icons.wrench;
}

// ─────────────────────────────────────────────
// Urgency Bar
// ─────────────────────────────────────────────
function UrgencyBar({ b }: { b: PlumberConfig }) {
  const msg = b.availability ?? "Same-Day & Emergency Service Available";
  return (
    <div
      className="w-full text-white text-center text-sm py-2.5 px-4 font-medium flex items-center justify-center gap-2"
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
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-xl leading-tight tracking-tight" style={{ color: b.primaryColor }}>
            {b.name}
          </span>
          {b.established && (
            <span className="text-xs text-gray-400 leading-tight">Est. {b.established}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            Free Estimate
          </a>
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition hover:opacity-90 shadow-md"
            style={{ backgroundColor: b.primaryColor }}
          >
            <span className="inline-flex">{Icons.phoneXs}</span>
            {b.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// Hero — full viewport, AI background image
// ─────────────────────────────────────────────
function Hero({ b }: { b: PlumberConfig }) {
  const heroImage = getHeroImage(b);
  const yearsInBusiness = b.established
    ? (2026 - parseInt(b.established)).toString()
    : null;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Multi-stop gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        {/* Established badge */}
        {b.established && (
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest rounded-full px-5 py-1.5 border border-white/25 bg-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Serving the Twin Cities Since {b.established}
            </span>
          </div>
        )}

        {/* Company name — large, serif feel via tracking-tight */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl leading-none">
          {b.name}
        </h1>

        {/* Accent divider */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: b.accentColor, opacity: 0.6 }} />
          <span className="text-xs uppercase tracking-[0.25em] text-white/60">Licensed &amp; Insured · Minneapolis</span>
          <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: b.accentColor, opacity: 0.6 }} />
        </div>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-bold mb-3 tracking-tight"
          style={{ color: b.accentColor }}
        >
          {b.tagline}
        </p>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          {b.subTagline}
        </p>

        {/* Primary CTA — large pill, brand color */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-3 text-white text-xl font-bold px-10 py-5 rounded-full transition hover:opacity-90 shadow-2xl shadow-black/50"
            style={{ backgroundColor: b.primaryColor }}
          >
            {Icons.phone}
            Call Now: {b.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white/90 text-base font-semibold px-8 py-5 rounded-full border border-white/30 hover:bg-white/10 transition backdrop-blur-sm"
          >
            Free Estimate →
          </a>
        </div>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">{Icons.checkCircleXs}</span>
            Licensed &amp; Insured
          </span>
          {b.responseTime && (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircleXs}</span>
              {b.responseTime}
            </span>
          )}
          {b.googleRating && b.reviewCount ? (
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-400">{Icons.starSm}</span>
              {b.googleRating} Google ({b.reviewCount} reviews)
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircleXs}</span>
              5-Star Rated
            </span>
          )}
          {b.badgeHighlight && (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircleXs}</span>
              {b.badgeHighlight}
            </span>
          )}
          {yearsInBusiness && (
            <span className="flex items-center gap-1.5">
              <span className="text-green-400">{Icons.checkCircleXs}</span>
              {yearsInBusiness}+ Years in Business
            </span>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/50" />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Stats Bar
// ─────────────────────────────────────────────
function StatsBar({ b }: { b: PlumberConfig }) {
  const yearsInBusiness = b.established
    ? (2026 - parseInt(b.established)).toString() + "+"
    : "10+";

  const stats = [
    {
      value: yearsInBusiness,
      label: "Years in Business",
    },
    {
      value: b.googleRating ? `${b.googleRating} ★` : "5.0 ★",
      label: b.reviewCount ? `${b.reviewCount} Google Reviews` : "Google Rating",
    },
    {
      value: b.responseTime?.split(" ")[0] ?? "Same",
      label: b.responseTime ? b.responseTime.split(" ").slice(1).join(" ") || "Day Response" : "Day Response",
    },
    {
      value: `${b.serviceAreaList.length}+`,
      label: "Cities Served",
    },
  ];

  return (
    <section className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-800">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 px-6 text-center">
              <div
                className="text-3xl font-bold tracking-tight mb-1"
                style={{ color: b.accentColor !== "#DBEAFE" && b.accentColor !== "#E0F2FE" && b.accentColor !== "#CCFBF1" && b.accentColor !== "#DCFCE7" && b.accentColor !== "#D1FAE5" ? b.accentColor : "white" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: b.primaryColor }}>
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            From small fixes to major repairs — handled by licensed plumbers, done right the first time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {b.services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-default"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
            >
              {/* Icon in full-color circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: b.primaryColor }}
              >
                <span className="text-white">
                  {getServiceIcon(s.title, s.icon)}
                </span>
              </div>
              {/* Bottom accent line on hover */}
              <div
                className="h-0.5 w-0 group-hover:w-10 transition-all duration-300 mb-4 rounded-full"
                style={{ backgroundColor: b.primaryColor }}
              />
              <h3 className="font-bold text-lg mb-2 tracking-tight">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-4 rounded-full transition hover:opacity-90 shadow-lg"
            style={{ backgroundColor: b.primaryColor }}
          >
            {Icons.phoneSm}
            Call for a Free Estimate: {b.phone}
          </a>
          <p className="mt-3 text-gray-400 text-sm">Licensed &amp; insured · No surprise fees</p>
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
      desc: "We know Twin Cities neighborhoods, older homes, and what local plumbing systems need.",
    },
    {
      icon: Icons.phoneSm,
      title: "Real People Answer",
      desc: "Call us and talk to a real person — not a call center, not a bot, not a voicemail.",
    },
    {
      icon: Icons.sparkles,
      title: "We Clean Up After",
      desc: "Shoe covers, drop cloths, no mess left behind. We treat your home with respect.",
    },
    {
      icon: Icons.clipboard,
      title: "Price We Quote = Price You Pay",
      desc: "The estimate we give you is the final bill. No hidden fees, no surprises. Ever.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: b.primaryColor }}>
              Why Choose Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why {b.serviceAreaList[0]}<br />Trusts {b.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{b.specialties}</p>
            <a
              href={`tel:${b.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition hover:opacity-90 shadow-lg"
              style={{ backgroundColor: b.primaryColor }}
            >
              {Icons.phoneSm}
              {b.phone}
            </a>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 border border-gray-100"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: b.primaryColor }}
                >
                  <span className="text-white">{r.icon}</span>
                </div>
                <h3 className="font-bold text-base mb-2 tracking-tight">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Reviews — premium design
// ─────────────────────────────────────────────
function Reviews({ b }: { b: PlumberConfig }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with Google badge */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: b.primaryColor }}>
            Customer Reviews
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Your Neighbors Say
          </h2>
          {b.googleRating && b.reviewCount && (
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 mt-2">
              <div className="flex gap-0.5 text-yellow-400">
                {Icons.starSm}{Icons.starSm}{Icons.starSm}{Icons.starSm}{Icons.starSm}
              </div>
              <span className="font-bold text-gray-900">{b.googleRating}</span>
              <span className="text-gray-500 text-sm">{b.reviewCount} Google Reviews</span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {b.reviews.map((r) => (
            <div
              key={r.name}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
            >
              {/* Giant decorative quote mark */}
              <div
                className="absolute top-4 right-6 text-8xl font-serif leading-none select-none pointer-events-none"
                style={{ color: b.primaryColor, opacity: 0.08 }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 text-yellow-400 mb-5">
                {Icons.starSm}{Icons.starSm}{Icons.starSm}{Icons.starSm}{Icons.starSm}
              </div>

              {/* Review text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">&ldquo;{r.text}&rdquo;</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: b.primaryColor }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm tracking-tight">{r.name}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{r.neighborhood}</p>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_rgba(0,0,0,0)_70%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-70">Coverage Area</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Proudly Serving the Twin Cities Metro
        </h2>
        <p className="mb-8 text-lg opacity-75">{b.serviceArea}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mb-10">
          {b.serviceAreaList.map((city) => (
            <span
              key={city}
              className="flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 bg-white/10 font-medium backdrop-blur-sm border border-white/10"
            >
              <span className="text-green-300 flex-shrink-0">{Icons.checkCircleXs}</span>
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
// Final CTA Section
// ─────────────────────────────────────────────
function FinalCTA({ b }: { b: PlumberConfig }) {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: b.accentColor !== "#DBEAFE" && b.accentColor !== "#E0F2FE" && b.accentColor !== "#CCFBF1" && b.accentColor !== "#DCFCE7" ? b.accentColor : "#a3e635" }}>
          Ready to Get Started?
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Get It Fixed Today
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Call now for immediate help, or fill out the form below and we&apos;ll call you back within the hour.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-3 text-white font-bold text-xl px-10 py-5 rounded-full transition hover:opacity-90 shadow-xl"
            style={{ backgroundColor: b.primaryColor }}
          >
            {Icons.phone}
            Call Now: {b.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gray-300 font-semibold text-base px-8 py-5 rounded-full border border-gray-700 hover:border-gray-500 hover:text-white transition"
          >
            Get Free Estimate →
          </a>
        </div>
        <p className="text-gray-600 text-sm flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">{Icons.checkCircleXs}</span>
            Licensed &amp; Insured
          </span>
          <span className="text-gray-700">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">{Icons.checkCircleXs}</span>
            Background-Checked Techs
          </span>
          <span className="text-gray-700">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">{Icons.checkCircleXs}</span>
            Upfront Pricing
          </span>
        </p>
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
    const data = new FormData(form);
    try {
      const res = await fetch("/api/preview-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          businessName: b.name,
          slug: b.slug,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: b.primaryColor }}>
            Contact Us
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-3">Get a Free Estimate</h2>
          <p className="text-gray-600 text-lg">
            Describe your issue and we&apos;ll call you back within the hour — or call us now for immediate help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400"
              style={{ "--tw-ring-color": b.primaryColor } as React.CSSProperties}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400"
              style={{ "--tw-ring-color": b.primaryColor } as React.CSSProperties}
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400"
            style={{ "--tw-ring-color": b.primaryColor } as React.CSSProperties}
          />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Describe your plumbing issue..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 text-gray-900 placeholder-gray-400 resize-none"
            style={{ "--tw-ring-color": b.primaryColor } as React.CSSProperties}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full text-white font-semibold py-4 rounded-full text-lg transition hover:opacity-90 disabled:opacity-50 shadow-lg"
            style={{ backgroundColor: b.primaryColor }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "✓ Message Sent — We'll Call You Soon!"
              : status === "error"
              ? "Something went wrong — call us directly"
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
// Footer — dark, 3-column, professional
// ─────────────────────────────────────────────
function Footer({ b }: { b: PlumberConfig }) {
  const serviceSlice = b.services.slice(0, 5);

  return (
    <footer className="bg-black text-gray-400">
      {/* Top border accent */}
      <div className="h-0.5 w-full" style={{ backgroundColor: b.primaryColor }} />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Col 1 — Company info */}
          <div>
            <span className="text-white font-bold text-xl tracking-tight block mb-1">{b.name}</span>
            {b.established && (
              <span className="text-gray-500 text-sm">Est. {b.established}</span>
            )}
            <p className="text-sm mt-4 leading-relaxed text-gray-500">{b.address}</p>
            {b.googleRating && b.reviewCount && (
              <div className="flex items-center gap-1.5 mt-3">
                <span className="text-yellow-500">{Icons.star}</span>
                <span className="text-white text-sm font-semibold">{b.googleRating}</span>
                <span className="text-gray-500 text-sm">({b.reviewCount} Google reviews)</span>
              </div>
            )}
            {b.badgeHighlight && (
              <div
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: `${b.primaryColor}22`, color: b.primaryColor }}
              >
                {Icons.checkCircleXs}
                {b.badgeHighlight}
              </div>
            )}
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceSlice.map((s) => (
                <li key={s.title} className="text-sm text-gray-500 hover:text-gray-300 transition cursor-default flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: b.primaryColor }} />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`tel:${b.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-white font-bold hover:opacity-80 transition"
              >
                <span style={{ color: b.primaryColor }}>{Icons.phoneXs}</span>
                {b.phone}
              </a>
              <a
                href={`mailto:${b.email}`}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition"
              >
                <span style={{ color: b.primaryColor }}>{Icons.mail}</span>
                {b.email}
              </a>
              {b.website && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span style={{ color: b.primaryColor }}>{Icons.globe}</span>
                  {b.website}
                </div>
              )}
              <div className="pt-2 text-xs text-gray-600">
                <p>License #{b.licenseNumber}</p>
                {b.established && <p>Serving the Twin Cities since {b.established}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 text-center text-xs text-gray-700">
          &copy; 2026 {b.name}. All rights reserved. Licensed &amp; Insured in Minnesota.
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

  useEffect(() => {
    fetch(`/api/track/${plumber!.slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: plumber!.name }),
    }).catch(() => {});
  }, [plumber]);

  return (
    <main className="bg-white">
      <UrgencyBar b={plumber} />
      <Nav b={plumber} />
      <Hero b={plumber} />
      <StatsBar b={plumber} />
      <Services b={plumber} />
      <WhyUs b={plumber} />
      <Reviews b={plumber} />
      <ServiceArea b={plumber} />
      <FinalCTA b={plumber} />
      <ContactForm b={plumber} />
      <Footer b={plumber} />
    </main>
  );
}
