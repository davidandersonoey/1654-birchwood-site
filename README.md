# 43 Ballacaine Drive — Sunnylea, Etobicoke

A single-property luxury real-estate microsite for **43 Ballacaine
Drive, Sunnylea, Etobicoke, Toronto, Ontario** — a David Small Designs custom
modern home (built 2021) in West Toronto's discreet Sunnylea enclave.

Listed by **David Anderson Oey**, Harvey Kalles Real Estate Ltd.,
Brokerage — co-listed with Adea Sasso. MLS® **W13029896**.

The site is structured as a long-scroll editorial — the home and the
Sunnylea neighbourhood are presented together, in the spirit of weese-road.com
(its sister project, the 690 Weese Road microsite).

---

## Status: PRE-LAUNCH SCAFFOLD

This codebase was cloned from `weese-road/` and rewritten for 43
Ballacaine on 2026-05-18 against TREB MLS data (PropTx PDF).

### What's done

- Property facts populated from MLS W13029896 (price, taxes, lot, beds,
  baths, sqft, year built, room dimensions, features list).
- Twelve room cards under "The Residence" chapter, drawn from the MLS
  room schedule.
- Sunnylea neighbourhood content fully written: Parks, Restaurants,
  Pubs, Shopping, Recreation, Schools, Worship, TTC — plus a History
  block (Faludi 1942 garden suburb, Smalls family farmland, Parkin
  school) and a Profile stats block modeled on realosophy.com.
- Three Sunnylea YouTube embeds wired (rFXNbGXWono, XZDxIG4csHQ,
  ykhfyLRcrXs).
- Toronto Life "Chase" press card with a placeholder URL — replace
  with the actual article URL when you have it.
- EN/FR translations updated for the new navigation, hero copy, and
  CTAs.
- Header brand → "43 Ballacaine Drive". Footer + contact metadata
  updated. Contact API route updated for the new property.

### What's pending — needs your input

1. **Photography.** Drop the Dropbox/desktop photo set into
   `public/gallery/ballacaine/` using the filenames referenced in
   `lib/property.ts` (`01-aerial.jpg`, `03-exterior.jpg`, etc.) and
   in `lib/sunnylea.ts` (`humber-marshes.jpg`, `vibo.jpg`, etc.). Run
   `node scripts/build-gallery.mjs` to regenerate `lib/gallery-imported.ts`
   from the actual files.
2. **Drone video — compression.** The raw clip at
   `public/43 Ballacaine Drive.mp4` is 945 MB — too large to deploy
   (Vercel rejects static files > 50 MB). Compress with HandBrake
   using the same preset that worked for weese-road: **RF 26, 1080p
   target**. The compressed file should be 80–100 MB. Replace the
   raw file in place; the code already references the same filename.
   Once compressed, measure the exact intro-text length and update
   `droneVideoIntroEndsAt` in `lib/property.ts` (currently set to 10s).
3. **Toronto Life article URL.** Update `PRESS_MENTIONS[0].linkUrl` in
   `lib/sunnylea.ts` with the exact Chase article URL when you have it.
4. **GPS verification (optional).** Postal `M8Y 4B1` is from the MLS.
   GPS coordinates are an approximate Sunnylea centre; replace with the
   exact parcel coordinates if you want pin-accurate maps later.
5. **Ambient audio.** Replace `public/ambient.mp3` with the production
   track once chosen.
6. **One-time cleanup.** Run `bash scripts/cleanup-clone.sh` once to
   remove stale weese-road photos and floor plans from the clone.

### What's done since the initial scaffold

- ✅ **Floor plans wired.** All 9 plates from the December 1, 2016
  David Small Designs DD package (`43 BALLACAINE - DD - 01DEC16.pdf`)
  extracted and rendered: Site Plan, Ground Floor, Second Floor,
  Basement, Roof, and four Elevations (front, Ballacaine, left, rear).
  The full PDF is also linked under the floor-plans block.
- ✅ **Drone video filename wired.** Code references
  `/43 Ballacaine Drive.mp4` directly — no rename needed.

### What's set up but unused (safe to delete after move)

- `lib/county.ts` — empty stub (the old PEC content lives in the
  weese-road project; deleted on this site).
- `components/CountyMap.tsx` — empty stub (the PEC map is unused here;
  could be replaced by a Sunnylea/Etobicoke map in a later pass).

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deploy

Same pattern as weese-road and davidoey-site:

1. Create a private GitHub repo (`davidandersonoey/43-ballacaine-site`).
2. Push the project.
3. Import into Vercel; deploy.
4. Add custom domain (`ubertoronto.com` per current plan, eventually
   ubertoronto.com/43-ballacaine when the umbrella brand goes live).
5. GoDaddy DNS: A `@` → `216.198.79.1`, CNAME `www` → the host shown
   by Vercel after adding the domain.
6. Add `RESEND_API_KEY` env var on Vercel for the contact form.

## Stack

- Next.js 14.2.5 (App Router) · TypeScript · Tailwind utility scaffolding
- Cormorant Garamond + Inter via `next/font/google`
- Resend for the contact form (Resend's onboarding sender — no domain
  verification required)
- Vercel hosting

---

## Project location

This project lives at `/Users/oeytunes/Desktop/43 Ballacaine/`. The
folder also contains the MLS reference PDF (`43 Ballacaine Dr _ REALM.pdf`)
and a Sunnylea map screenshot — both kept here as design references.

Drop photography, drone video, and floor-plan files into the
`public/` sub-directories as described above.
