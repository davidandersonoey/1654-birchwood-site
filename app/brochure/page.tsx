import type { Metadata } from "next";
import Link from "next/link";
import { PROPERTY, PHOTOS, ROOMS, FLOOR_PLANS, FEATURES } from "@/lib/property";

// -------------------------------------------------------------------------
//  /brochure — an online reproduction of the 1654 Birchwood presentation
//  booklet. A single scrolling document intended to replace the printed
//  PDF, rebuilt with only the approved photography set from
//  lib/gallery-imported.ts. Editorial layout: cover, narrative intro,
//  room-by-room spreads, floor plans, features, closing contact.
// -------------------------------------------------------------------------

const SITE_URL = "https://www.uberhomes.com";

export const metadata: Metadata = {
  title: "1654 Birchwood Drive — Presentation Booklet",
  description:
    "The full presentation of 1654 Birchwood Drive — a contemporary zen residence in Lorne Park, Mississauga. Room by room, floor by floor, feature by feature.",
  alternates: { canonical: `${SITE_URL}/brochure` },
  robots: { index: true, follow: true },
};

// Pull specific hero shots out of the ordered gallery. Kept simple so
// the file can be re-pointed to different photos if the approved set
// changes — just swap the src values.
const COVER_IMG = PHOTOS[0]?.src ?? "/gallery/birchwood/001-1900x-photo.jpg";
const INTRO_IMG = "/gallery/birchwood/002-1900x-photo.jpg";
const REAR_ELEV = "/gallery/birchwood/118-1900x-photo.jpg";

export default function BrochurePage() {
  return (
    <>
      {/* =================================================================
          COVER — full-viewport hero with editorial frame
      ================================================================= */}
      <section className="brochure-cover">
        <div
          className="brochure-cover-image"
          style={{ backgroundImage: `url("${COVER_IMG}")` }}
          aria-label="1654 Birchwood Drive — front elevation"
          role="img"
        />
        <div className="brochure-cover-frame" aria-hidden="true" />
        <div className="brochure-cover-inner">
          <p className="brochure-cover-tagline">
            {PROPERTY.bedrooms}&nbsp;Bedrooms · {PROPERTY.bathrooms} Bathrooms ·
            {" "}{PROPERTY.lotDimensions} · {PROPERTY.livingArea}
          </p>
          <p className="brochure-cover-features">
            Control4 Automation · Home Theatre · Wine Room · Stunning Design &amp;
            Exquisite Finishes
          </p>
          <div className="brochure-cover-title-row">
            <h1 className="brochure-cover-title">
              1654 <em>Birchwood</em> Drive
            </h1>
            <div className="brochure-cover-agent">
              <div className="brochure-cover-agent-team">The Oey Team</div>
              <div className="brochure-cover-agent-brokerage">
                Harvey Kalles Real Estate Ltd. · Brokerage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          INTRO — Presenting narrative, side photo
      ================================================================= */}
      <section className="brochure-intro">
        <div className="brochure-intro-inner">
          <div
            className="brochure-intro-photo"
            style={{ backgroundImage: `url("${INTRO_IMG}")` }}
            aria-hidden="true"
          />
          <article className="brochure-intro-body">
            <h2 className="brochure-h2">
              Presenting <em>1654 Birchwood Drive…</em>
            </h2>
            <p>
              Step into this exceptional custom residence, a masterful fusion of
              contemporary modern design and serene zen influences. With over{" "}
              {PROPERTY.livingArea} of finished living space, every element has
              been thoughtfully curated over four years, blending uncompromising
              craftsmanship with bespoke details to create a home that inspires
              both calm and awe.
            </p>
            <p>
              The dramatic 20-foot foyer with its illuminated glass pivot door
              sets the tone for the grandeur within. Expansive light-filled
              spaces unfold seamlessly, highlighted by a floating staircase,
              architectural feature walls, and warm panelled millwork that
              balance modern elegance with a tranquil aesthetic.
            </p>
            <p>
              On the main level, a modern family room with a striking two-sided
              linear fireplace provides both comfort and sophistication, while
              the bespoke executive office offers custom millwork and serene
              garden views. The chef&apos;s kitchen is a true showpiece,
              featuring Miele appliances, a PITT gas counter range, and a
              separate catering kitchen, designed for effortless entertaining.
            </p>
            <p>
              Upstairs, the primary suite is a private retreat with a
              spa-inspired ensuite, custom walnut and glass walk-in closets,
              and a cozy lounge complete with 3-sided fireplace ambiance.
              Additional bedrooms each feature ensuite baths and built-in
              cabinetry, while a flexible fourth bedroom suite provides
              versatility.
            </p>
            <p>
              The lower level is an entertainment and wellness oasis — a
              15-seat soundproof theatre, glass-walled temperature-controlled
              wine cantina, open-concept gym, and a sleek wet bar create the
              ultimate space for relaxation and hosting. A nanny or guest suite
              with a spa-like ensuite and direct walkout to the landscaped
              grounds ensures comfort and privacy for extended stays.
            </p>
            <p>
              This is more than a home — it is a contemporary zen oasis, where
              design, technology, and tranquility converge to create a sanctuary
              for modern living.
            </p>
            <p className="brochure-intro-url">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
                www.UberHomes.com
              </a>
            </p>
          </article>
        </div>
      </section>

      {/* =================================================================
          THE RESIDENCE — room by room. Alternates between full-bleed
          "spread" tiles and stacked pairs to mirror the booklet cadence.
      ================================================================= */}
      <section className="brochure-rooms">
        <div className="brochure-rooms-head">
          <p className="eyebrow">Chapter · The Residence</p>
          <h2 className="brochure-h2">
            Twenty-one rooms, <em>room by room</em>.
          </h2>
        </div>

        <div className="brochure-room-list">
          {ROOMS.map((r, i) => {
            const isFullBleed = i % 3 !== 2; // 2-out-of-3 are full-bleed
            const src = r.imageSrc ?? (r.photoIndex !== undefined ? PHOTOS[r.photoIndex]?.src : "");
            return (
              <article
                key={r.title}
                className={`brochure-room ${isFullBleed ? "brochure-room--wide" : "brochure-room--card"}`}
              >
                <div
                  className="brochure-room-image"
                  style={src ? { backgroundImage: `url("${src}")` } : undefined}
                  aria-hidden="true"
                />
                <div className="brochure-room-caption">
                  <p className="brochure-room-num">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =================================================================
          FLOOR PLANS — printable spec
      ================================================================= */}
      {FLOOR_PLANS.length > 0 ? (
        <section className="brochure-plans">
          <div className="brochure-rooms-head">
            <p className="eyebrow">Chapter · The Plans</p>
            <h2 className="brochure-h2">
              Every level, <em>measured</em>.
            </h2>
          </div>
          <div className="brochure-plans-grid">
            {FLOOR_PLANS.map((f) => (
              <figure key={f.label} className="brochure-plan">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.src} alt={f.label} />
                <figcaption>
                  <strong>{f.label}</strong>
                  <span>{f.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* =================================================================
          FEATURES LIST — matches booklet pages 34–35
      ================================================================= */}
      <section className="brochure-features">
        <div className="brochure-rooms-head">
          <p className="eyebrow">Appendix</p>
          <h2 className="brochure-h2">
            1654 Birchwood, <em>feature by feature</em>.
          </h2>
        </div>
        <div className="brochure-features-grid">
          <div className="brochure-features-col">
            <h4>Exterior</h4>
            <ul>
              {FEATURES.exterior.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="brochure-features-col">
            <h4>Interior</h4>
            <ul>
              {FEATURES.interior.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="brochure-features-col">
            <h4>Security &amp; Automation</h4>
            <ul>
              {FEATURES.security.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =================================================================
          CLOSING — agent contact + rear elevation photo
      ================================================================= */}
      <section
        className="brochure-close"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(28,26,20,0.72), rgba(28,26,20,0.72)), url("${REAR_ELEV}")` }}
      >
        <div className="brochure-close-inner">
          <div className="brochure-close-agent">
            <p className="brochure-close-url">
              <a href={SITE_URL}>www.UberHomes.com</a>
            </p>
            <h2 className="brochure-close-name">{PROPERTY.agent.name}</h2>
            <p className="brochure-close-title">{PROPERTY.agent.title}</p>
            <p className="brochure-close-brokerage">
              {PROPERTY.agent.brokerage}
            </p>
            <p className="brochure-close-contact">
              <a href={`tel:${PROPERTY.agent.directPhone.replace(/\s/g, "")}`}>
                {PROPERTY.agent.directPhone}
              </a>
              {" · "}
              <a href={`mailto:${PROPERTY.agent.email}`}>{PROPERTY.agent.email}</a>
            </p>
            <p className="brochure-close-web">
              <a href={PROPERTY.agent.website} target="_blank" rel="noopener noreferrer">
                {PROPERTY.agent.website.replace(/^https?:\/\//, "")}
              </a>
            </p>
            <p className="brochure-close-cta">
              <Link href="/#property">← Return to the virtual tour</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
