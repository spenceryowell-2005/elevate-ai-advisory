
# Elevate AI Advisory — Website

Single-page marketing site built with Next.js 14 (App Router) + Tailwind + framer-motion + lucide-react.

## Quick Start

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a new project on https://vercel.com and import this repo.
2. No build settings needed (framework = Next.js). Vercel auto-detects.
3. (Optional) Set environment variables if you wire /api/contact to a mail provider.

## Custom Domain

- In Vercel, add your domain (e.g., elevateaiadvisory.com) under **Domains**.
- Update DNS at your registrar: add the CNAME/A records Vercel provides.
- Wait for DNS to propagate, then **Set as Primary**.

## Contact Form

- The API route currently logs submissions to the server (`/api/contact`). Replace with your preferred email service:
  - **Resend**: https://resend.com (simple email API)
  - **Mailgun**: https://www.mailgun.com
  - **AWS SES**: https://aws.amazon.com/ses/

Add your code inside `app/api/contact/route.ts`.

## Extras

- Analytics: add Vercel Analytics or Google Analytics.
- Privacy/Terms: link your policies in the footer.
- Favicon/logo: replace `public/favicon.ico`.
