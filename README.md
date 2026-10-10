# Ayyappa Naik — Attractive Multi-page Portfolio

A dark navy, blue, and cyan portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Pages
- `/` — Home, intro, featured projects
- `/projects` — All seven resume projects
- `/projects/studytrack`, `/projects/beerboard`, `/projects/utilstop`
- `/projects/app-health-monitor`
- `/projects/10mins-guru-website`
- `/projects/10mins-guru-mobile`
- `/projects/osan-grows`
- `/experience` — Work history
- `/about` — Summary, skills, education, languages
- `/contact` — WhatsApp, email, and contact information

## Run locally
Requires Node.js 20.9+.

```bash
npm install
```

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=91YOURMOBILENUMBER
```

Use your number in international digits-only format, then run:

```bash
npm run dev
```

Open http://localhost:3000.

Only StudyTrack's public URL and GitHub URL were provided in the resume. Other project links are not invented. Please verify all content and contact details before publishing.
