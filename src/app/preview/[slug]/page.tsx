"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import PLUMBERS, { PlumberConfig } from "@/lib/plumbers";

function getPlumber(slug: string): PlumberConfig | undefined {
  return PLUMBERS.find((p) => p.slug === slug);
}

// ─────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────
function Nav({ b }: { b: PlumberConfig }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl" style={{ color: b.primaryColor }}>
          {b.name}
        </span>
        <a
          href={`tel:${b.phone.replace(/\D/g, "")}`}
          className="text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition hover:opacity-90"
          style={{ backgroundColor: b.primaryColor }}
        >
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
    <section className="bg-dark text-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{b.name}</h1>
        <p className="text-xl md:text-2xl mb-2" style={{ color: b.accentColor }}>
          {b.tagline}
        </p>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">{b.subTagline}</p>
        <a
          href={`tel:${b.phone.replace(/\D/g, "")}`}
          className="inline-block text-white text-xl font-bold px-10 py-5 rounded-xl transition hover:opacity-90 shadow-lg"
          style={{ backgroundColor: b.primaryColor }}
        >
          Call Now: {b.phone}
        </a>
        <p className="text-gray-500 text-sm mt-4">
          Licensed &bull; Insured &bull; Available 24/7
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Trust Badges
// ─────────────────────────────────────────────
function TrustBadges({ b }: { b: PlumberConfig }) {
  const badges = [
    { icon: "🛡️", title: "Licensed & Insured", desc: `License #${b.licenseNumber}` },
    { icon: "⚡", title: "Same-Day Service", desc: "Fast response, every time" },
    { icon: "💰", title: "Upfront Pricing", desc: "No surprises on your bill" },
    { icon: "⭐", title: "5-Star Rated", desc: "Trusted by your neighbors" },
  ];

  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="text-center">
              <span className="text-4xl mb-3 block">{badge.icon}</span>
              <h3 className="font-bold text-base mb-1">{badge.title}</h3>
              <p className="text-gray-500 text-sm">{badge.desc}</p>
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
          From small fixes to major repairs — we handle it all.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {b.services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <span className="text-3xl mb-3 block">{s.icon}</span>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
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
      icon: "🏠",
      title: "Local Experts",
      desc: `We know the Twin Cities — its neighborhoods, its older homes, and what its plumbing needs.`,
    },
    {
      icon: "📞",
      title: "We Actually Answer",
      desc: "Call us and talk to a real person — not a call center, not a bot.",
    },
    {
      icon: "🧹",
      title: "We Clean Up After",
      desc: "We treat your home with respect. No mess left behind, ever.",
    },
    {
      icon: "📋",
      title: "Honest Quotes",
      desc: "The price we quote is the price you pay. Always.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose {b.name}?
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          {b.specialties}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <span className="text-4xl mb-3 block">{r.icon}</span>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm">{r.desc}</p>
            </div>
          ))}
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Your Neighbors Say
        </h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Real reviews from real customers in the {b.serviceAreaList[0]} area.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {b.reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-gray-400 text-xs">{r.neighborhood}</p>
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
    <section className="py-20 text-white" style={{ backgroundColor: b.primaryColor }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Serving the Twin Cities Metro
        </h2>
        <p className="mb-8 text-lg opacity-80">{b.serviceArea}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {b.serviceAreaList.map((city) => (
            <span key={city} className="rounded-lg py-2 px-4 bg-white/15">
              {city}
            </span>
          ))}
        </div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get a Free Estimate
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Describe your issue and we&apos;ll get back to you within the hour.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone number"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Describe your plumbing issue..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full text-white font-semibold py-4 rounded-lg text-lg transition hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: b.primaryColor }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "✓ Message Sent!"
              : "Request Free Estimate"}
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Or call us directly:{" "}
          <a
            href={`tel:${b.phone.replace(/\D/g, "")}`}
            className="font-semibold"
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
    <footer className="bg-dark text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white font-bold text-lg">{b.name}</span>
            <p className="text-sm mt-1">
              {b.address} &bull; License #{b.licenseNumber}
            </p>
            {b.established && (
              <p className="text-xs mt-1 text-gray-500">
                Serving the Twin Cities since {b.established}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-sm">
            <a
              href={`tel:${b.phone.replace(/\D/g, "")}`}
              className="text-white hover:opacity-80 transition"
            >
              {b.phone}
            </a>
            <a href={`mailto:${b.email}`} className="hover:text-white transition">
              {b.email}
            </a>
            {b.website && (
              <span className="text-gray-600 text-xs">{b.website}</span>
            )}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          &copy; 2026 {b.name}. All rights reserved. &bull; Licensed &amp; Insured in Minnesota
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

  return (
    <main className="bg-white">
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
