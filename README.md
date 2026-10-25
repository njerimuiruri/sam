# Sam Doe & Associates — Law Firm Website

A clean, white‑and‑blue single‑page site for a solo advocate, built with
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## Where to edit content

**Almost everything lives in one file:** [`src/data/site.ts`](src/data/site.ts).
Change the name, tagline, contact details, practice areas, testimonials, stats,
and the map embed there. Use verified firm details and approved client
testimonials; the testimonials section stays hidden until testimonials are added.

## Sam's photos

1. **Main portrait (hero):** replace `public/portrait.svg` with a real image.
   Easiest: add `public/portrait.jpg`, then in
   [`src/components/Hero.tsx`](src/components/Hero.tsx) change
   `src="/portrait.svg"` to `src="/portrait.jpg"`. Portrait orientation, ~1000×1250px.
2. **Secondary photo (About section):** an empty framed slot is in
   [`src/components/About.tsx`](src/components/About.tsx) — drop an `<Image>` in
   where the placeholder box is (a candid or office shot works well).

## Sections

| Section | File | Anchor |
| --- | --- | --- |
| Sticky header + mobile menu | `components/Header.tsx` | — |
| Hero + stats strip | `components/Hero.tsx` | `#top` |
| About / profile | `components/About.tsx` | `#about` |
| Practice areas | `components/PracticeAreas.tsx` | `#practice` |
| Approach (navy band) | `components/Approach.tsx` | `#approach` |
| Testimonials | `components/Testimonials.tsx` | `#testimonials` |
| Contact form + map | `components/Contact.tsx` | `#contact` |
| Footer + legal disclaimer | `components/Footer.tsx` | — |

## Colours

Defined in [`tailwind.config.ts`](tailwind.config.ts): `navy` (primary brand
blue), `accent` (brighter blue for buttons/links), `gold` (fine flourish lines),
`cream` (off‑white section backgrounds).

## Notes before going live

- **Contact form** currently opens the visitor's email client (`mailto:`). For
  real submissions, wire it to a form service (Formspree, Resend, a Next.js API
  route, etc.) in `components/Contact.tsx`.
- **Map** uses a generic OpenStreetMap embed — replace `mapEmbedSrc` in
  `site.ts` with a real Google Maps "Embed a map" URL for the office.
- Fill in the **Privacy Policy / Terms / Disclaimer** links in the footer.
- Have a lawyer review the disclaimer wording for the correct jurisdiction.
