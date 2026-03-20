import PLUMBERS from "@/lib/plumbers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewIndex() {
  return (
    <main className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Studio10k — Internal Preview
          </p>
          <h1 className="text-4xl font-bold mb-3">Minneapolis Plumber Previews</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            10 spec sites built for real Minneapolis plumbing companies. Each one is
            customized with their real info, colors, and service area.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLUMBERS.map((p) => (
            <Link
              key={p.slug}
              href={`/preview/${p.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition"
            >
              {/* Color swatch */}
              <div
                className="h-2"
                style={{ backgroundColor: p.primaryColor }}
              />
              <div className="p-5">
                <h2 className="font-bold text-lg mb-1 group-hover:text-white transition">
                  {p.name}
                </h2>
                <p className="text-gray-400 text-sm mb-3 italic">{p.tagline}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.serviceAreaList.slice(0, 3).map((city) => (
                    <span
                      key={city}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400"
                    >
                      {city}
                    </span>
                  ))}
                  {p.serviceAreaList.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500">
                      +{p.serviceAreaList.length - 3} more
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500 space-y-0.5">
                  <p>{p.phone}</p>
                  <p className="text-xs">{p.address}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: p.primaryColor }}
                  >
                    View Preview →
                  </span>
                  <span className="text-xs text-gray-600">/{p.slug}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Each preview is live at <code className="text-gray-400">studio10k.com/preview/[slug]</code></p>
          <p className="mt-1">Do not share publicly — for outreach review only.</p>
        </div>
      </div>
    </main>
  );
}
