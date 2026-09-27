# Moirai — Restoring Dignity, Rebuilding Lives

A production-ready, premium nonprofit website for **Moirai**, a Kenyan
organization working to restore dignity, provide care and support vulnerable
incarcerated communities and families affected by incarceration.

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for purposeful, cinematic animation
- **Lucide React** for icons
- **React Router DOM** for client-side routing
- **Netlify Functions** for server-side payment processing
- **Netlify Deployment** (free tier compatible)

## Features

- Premium editorial nonprofit aesthetic with deep charcoal, warm ivory, and
  earthy accent tones
- Responsive, mobile-first design (320px to 1440px+)
- Cinematic hero with scroll storytelling
- Animated impact counters that count up on scroll
- Interactive donation modal with predefined and custom amounts
- M-Pesa and PayPal payment architecture (server-side credentials, mock mode
  in development)
- Accessible semantic HTML with keyboard navigation and reduced-motion support
- SEO metadata, OpenGraph, Twitter cards, structured data, sitemap, robots.txt
- Structured content files for easy updates
- Lazy-loaded images and code splitting for performance

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 9

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values.

```bash
cp .env.example .env
```

### M-Pesa Setup

1. Go to the [Safaricom Developer Portal](https://developer.safaricom.co.ke/)
2. Create an app to get `MPESA_CONSUMER_KEY` and `MPESA_CONSUMER_SECRET`
3. Set `MPESA_SHORTCODE` (use `174479` for sandbox)
4. Generate a passkey and set `MPESA_PASSKEY`
5. Set `MPESA_CALLBACK_URL` to your Netlify function URL
6. Set `MPESA_ENVIRONMENT` to `sandbox` or `production`

### PayPal Setup

1. Go to the [PayPal Developer Dashboard](https://developer.paypal.com/)
2. Create a sandbox app to get `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET`
3. Set `PAYPAL_ENVIRONMENT` to `sandbox` or `production`

**Note:** When credentials are not configured, the payment system operates in
mock/sandbox mode so development can proceed without production secrets.

## Content Management

All website content is stored in structured TypeScript files under
`src/data/`:

- `impact.ts` — impact figures and statistics
- `programs.ts` — program descriptions
- `team.ts` — team member profiles
- `stories.ts` — stories and updates
- `faq.ts` — frequently asked questions
- `donationPackages.ts` — giving packages
- `navigation.ts` — navigation links and contact info

Update these files to change content without modifying component logic.

## Payment Architecture

```
React Frontend
    ↓
Netlify Function (mpesa-initiate / paypal-create-order)
    ↓
Payment Provider (Safaricom M-Pesa / PayPal)
```

**NEVER expose** API keys, consumer secrets, access tokens, PayPal secrets, or
M-Pesa credentials in frontend code. All secrets are stored as Netlify
environment variables.

## Deployment

### Netlify

1. Push the repository to GitHub
2. Connect the repository in the Netlify dashboard
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Add environment variables in the Netlify dashboard

The `netlify.toml` file is pre-configured with redirects, security headers,
and function settings.

## Project Structure

```
moirai/
├── public/                 # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── netlify/
│   └── functions/          # Serverless functions
│       ├── mpesa-initiate.ts
│       ├── mpesa-callback.ts
│       ├── paypal-create-order.ts
│       └── paypal-capture-order.ts
├── src/
│   ├── components/         # Reusable UI components
│   ├── data/               # Structured content files
│   ├── pages/              # Route components
│   ├── services/           # Payment service abstractions
│   └── index.css           # Global styles
├── .env.example
├── netlify.toml
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md