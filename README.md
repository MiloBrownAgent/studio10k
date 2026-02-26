# Studio10k

We build websites for local businesses. They see it before they pay. $799 and it's theirs.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Stripe (checkout)

## Setup

```bash
npm install
cp .env.example .env  # Add your Stripe key
npm run dev
```

## API Routes

- `POST /api/contact` — Saves name, email, message to `contacts.json`
- `POST /api/stripe-checkout` — Creates a Stripe checkout session for $799

## Scripts

- `scripts/find-targets.js` — Find local businesses via Google Places API
- `scripts/outreach-email-template.md` — Cold email templates (3 variations)

## Deploy

Deployed to Vercel. To point `studio10k.com`:

1. In GoDaddy DNS, set A record to `76.76.21.21`
2. In Vercel, add `studio10k.com` as a custom domain

## Environment Variables

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key for checkout |
| `GOOGLE_PLACES_API_KEY` | Google Places API key (for find-targets script) |
