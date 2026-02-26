import Link from "next/link";

export const metadata = {
  title: "Thank You — Studio10k",
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-navy text-cream flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">&#10003;</div>
        <h1 className="text-4xl font-bold mb-4">You&apos;re all set.</h1>
        <p className="text-slate text-lg mb-8">
          Payment received. We&apos;ll send you everything you need to get your
          new site live — domain setup, hosting details, and next steps. Check
          your email within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block bg-electric text-white font-semibold px-8 py-4 rounded-lg hover:bg-electric/90 transition"
        >
          Back to Studio10k
        </Link>
      </div>
    </main>
  );
}
