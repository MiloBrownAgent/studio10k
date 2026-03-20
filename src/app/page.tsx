"use client";

import { useState } from "react";

const DEMOS = [
  {
    name: "Norblom Plumbing",
    type: "Plumber",
    location: "Minneapolis, MN",
    color: "#1E3A5F",
    slug: "norblom-plumbing",
    tagline: "Serving Twin Cities Families Since 1923.",
  },
  {
    name: "Weld & Sons Plumbing",
    type: "Plumber",
    location: "Minneapolis, MN",
    color: "#7C3AED",
    slug: "weld-and-sons",
    tagline: "Family Plumbing. Minneapolis Made.",
  },
  {
    name: "Erik Nelson Plumbing",
    type: "Plumber",
    location: "South Minneapolis, MN",
    color: "#0F766E",
    slug: "erik-nelson-plumbing",
    tagline: "South Minneapolis' Trusted Plumber.",
  },
  {
    name: "Ron the Sewer Rat",
    type: "Sewer & Drain",
    location: "Minneapolis, MN",
    color: "#B45309",
    slug: "ron-the-sewer-rat",
    tagline: "The Twin Cities' Sewer Expert.",
  },
  {
    name: "Gopher Sewer & Drain",
    type: "Plumber",
    location: "Columbia Heights, MN",
    color: "#166534",
    slug: "gopher-sewer-drain",
    tagline: "Honest Work. Fair Price. Every Time.",
  },
  {
    name: "St. Paul Pipeworks",
    type: "Plumber",
    location: "St. Paul, MN",
    color: "#1D4ED8",
    slug: "st-paul-pipeworks",
    tagline: "Trusted St. Paul Plumbing.",
  },
];

const FAQS = [
  {
    q: "What if I don't like the site?",
    a: "No hard feelings. You owe us nothing. We move on and offer it to someone else in your area.",
  },
  {
    q: "Can I make changes before I buy?",
    a: "Absolutely. One round of revisions is included. After that, changes are billed hourly or covered under the $99/month plan.",
  },
  {
    q: "Do I own the site after I pay?",
    a: "Yes. You get full ownership of the code, design, domain setup — everything. It's yours.",
  },
  {
    q: "What's included in the $99/month plan?",
    a: "Hosting, SSL, monthly backups, content updates, Google Business profile optimization, and priority support.",
  },
  {
    q: "How long does it take to build my site?",
    a: "We typically have a site ready to preview in 48–72 hours. You'll get an email with a live link.",
  },
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-cream font-bold text-xl tracking-tight">
          Studio<span className="text-electric">10k</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate">
          <a href="#how" className="hover:text-cream transition">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-cream transition">
            Pricing
          </a>
          <a href="#work" className="hover:text-cream transition">
            Sample Work
          </a>
          <a href="#faq" className="hover:text-cream transition">
            FAQ
          </a>
        </div>
        <a
          href="#contact"
          className="bg-electric text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-electric/90 transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-navy text-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-electric text-sm font-semibold tracking-widest uppercase mb-6">
          Zero cost until you say yes
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          We build your business a{" "}
          <span className="text-electric">professional website.</span>{" "}
          You only pay if you want it.
        </h1>
        <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto mb-10">
          We research your business, build a complete site using your real info,
          and send you a live link. No meetings. No deposits. No contracts.
          If you love it — it&apos;s $799. If not, no hard feelings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="bg-electric text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-electric/90 transition"
          >
            See Live Examples
          </a>
          <a
            href="#contact"
            className="border-2 border-cream/30 text-cream font-semibold px-8 py-4 rounded-lg text-lg hover:border-cream/60 transition"
          >
            Get My Free Preview
          </a>
        </div>
        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate">
          <span className="flex items-center gap-2">
            <span className="text-electric font-bold">20+</span> sites built for MN businesses
          </span>
          <span className="text-slate/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-electric font-bold">$0</span> upfront — ever
          </span>
          <span className="text-slate/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-electric font-bold">72hr</span> turnaround
          </span>
          <span className="text-slate/30">|</span>
          <span className="flex items-center gap-2">
            <span className="text-electric font-bold">100%</span> ownership when you buy
          </span>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "We Build It",
      desc: "We find your business, research your services, and build a professional website using your real info. No input needed from you.",
    },
    {
      num: "02",
      title: "You See It",
      desc: "We email you a live link to your brand-new site. Browse it on your phone, show your crew, take your time.",
    },
    {
      num: "03",
      title: "You Pay $799 — Or We Move On",
      desc: "Love it? Pay once and it's yours. Not interested? No hard feelings. We'll offer it to another business in your area.",
    },
  ];

  return (
    <section id="how" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-slate text-center mb-16 max-w-xl mx-auto">
          Three steps. No meetings. No deposits. No BS.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 shadow-sm">
              <span className="text-electric text-4xl font-bold">{s.num}</span>
              <h3 className="text-xl font-bold mt-4 mb-3">{s.title}</h3>
              <p className="text-slate leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const features = [
    { icon: "📱", title: "Mobile-First Design", desc: "Looks perfect on every phone, tablet, and desktop." },
    { icon: "📝", title: "Contact Form", desc: "Leads go straight to your email. Never miss a customer." },
    { icon: "📍", title: "Google Maps", desc: "Your service area front and center so locals find you." },
    { icon: "🔧", title: "Service Pages", desc: "Dedicated pages for each service you offer." },
    { icon: "⭐", title: "Reviews Section", desc: "Show off your best reviews to build instant trust." },
    { icon: "🔒", title: "Fast Hosting + SSL", desc: "Lightning-fast load times. Secure. Reliable." },
  ];

  return (
    <section className="py-20 md:py-28 bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What You Get
        </h2>
        <p className="text-slate text-center mb-16 max-w-xl mx-auto">
          Everything a local business needs to look legit and get leads online.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-slate text-center mb-16 max-w-xl mx-auto">
          No hidden fees. No long-term contracts. Pick what works for you.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-transparent">
            <h3 className="text-lg font-semibold text-slate mb-2">One-Time</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold">$799</span>
            </div>
            <p className="text-slate mb-6">Pay once. Own it forever.</p>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Custom-built website
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Mobile responsive
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Contact form + Google Maps
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Full code ownership
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                One round of revisions
              </li>
            </ul>
            <a
              href="#contact"
              className="block text-center bg-navy text-cream font-semibold px-6 py-3 rounded-lg hover:bg-navy/90 transition"
            >
              Get Started
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-electric relative">
            <span className="absolute -top-3 right-6 bg-electric text-white text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </span>
            <h3 className="text-lg font-semibold text-slate mb-2">Monthly</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-slate">/month</span>
            </div>
            <p className="text-slate mb-6">
              We host, maintain, and grow your site.
            </p>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Everything in One-Time
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Fast hosting + SSL included
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Monthly content updates
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Google Business optimization
              </li>
              <li className="flex gap-2">
                <span className="text-electric font-bold">&#10003;</span>
                Priority support
              </li>
            </ul>
            <a
              href="#contact"
              className="block text-center bg-electric text-white font-semibold px-6 py-3 rounded-lg hover:bg-electric/90 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SampleWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Sample Work
        </h2>
        <p className="text-slate text-center mb-16 max-w-xl mx-auto">
          Real sites we built for real Minneapolis plumbers. Click to see a live preview.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {DEMOS.map((d) => (
            <a
              key={d.name}
              href={`/preview/${d.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-white/30 transition block"
            >
              <div
                className="h-48 flex items-center justify-center relative"
                style={{ backgroundColor: d.color + "25" }}
              >
                <div className="text-center px-4">
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: d.color }}
                  >
                    {d.name}
                  </div>
                  <div className="text-slate text-sm mb-2">{d.location}</div>
                  <div className="text-xs opacity-60 italic">{d.tagline}</div>
                </div>
                <span className="absolute top-3 right-3 bg-electric text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                  View →
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-electric uppercase tracking-wider">
                  {d.type} &bull; {d.location}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-2">{d.name}</h3>
                <p className="text-slate text-sm">
                  Custom site with services, reviews, service area map, and contact form — ready to hand over.
                </p>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-slate text-sm mt-10">
          We have <span className="text-electric font-semibold">20+</span> Twin Cities plumber previews live and ready to see.{" "}
          <a href="#contact" className="text-electric hover:underline">
            Request one for your business →
          </a>
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
              >
                <span className="font-semibold">{f.q}</span>
                <span className="text-electric text-xl shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
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
    <section id="contact" className="py-20 md:py-28 bg-navy text-cream">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ready to See Your Site?
        </h2>
        <p className="text-slate text-center mb-12">
          Drop us your info and we&apos;ll build your preview site within 72
          hours. Zero cost. Zero commitment.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-electric"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-electric"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Your phone number"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-electric"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your business (optional)"
            className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-electric resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-electric text-white font-semibold py-4 rounded-lg text-lg hover:bg-electric/90 transition disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent!"
              : "Get My Free Preview"}
          </button>
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Email us at hello@studio10k.com instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10 text-sm">
          <div>
            <div className="font-bold text-cream text-lg mb-2">
              Studio<span className="text-electric">10k</span>
            </div>
            <p className="text-slate leading-relaxed">
              We build websites for local service businesses. You only pay if you love it.
            </p>
            <p className="text-slate mt-2">Minneapolis, MN</p>
          </div>
          <div>
            <div className="font-semibold text-cream mb-3">Quick Links</div>
            <ul className="space-y-2 text-slate">
              <li><a href="#work" className="hover:text-cream transition">See Examples</a></li>
              <li><a href="#pricing" className="hover:text-cream transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-cream transition">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cream transition">Get a Free Preview</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-cream mb-3">Contact</div>
            <ul className="space-y-2 text-slate">
              <li>
                <a href="mailto:hello@studio10k.com" className="hover:text-cream transition">
                  hello@studio10k.com
                </a>
              </li>
              <li>Minneapolis, MN</li>
              <li className="text-xs text-slate/60 mt-4">
                We typically respond within a few hours.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate/50">
          <span>&copy; 2026 Studio10k. All rights reserved.</span>
          <span>Built in Minneapolis &bull; Serving local businesses across the Twin Cities</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <Pricing />
      <SampleWork />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
