"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroVideo from "@/components/HeroVideo";
import Chapter from "@/components/Chapter";
import SectionBreak from "@/components/SectionBreak";
import FloorPlan from "@/components/FloorPlan";
import GalleryGrid from "@/components/GalleryGrid";
import LorneParkMap from "@/components/LorneParkMap";
import { useLanguage } from "@/components/LanguageProvider";
import { PROPERTY, PHOTOS, FLOOR_PLANS, ROOMS } from "@/lib/property";
import { GALLERY_IMPORTED } from "@/lib/gallery-imported";
import {
  LORNE_PARK_OVERVIEW,
  HISTORY_CARDS,
  ENCLAVES,
  PARKS,
  RESTAURANTS,
  SHOPPING,
  RECREATION,
  SCHOOLS,
  CONNECTIVITY,
  PROFILE,
  NEIGHBORHOOD_VIDEOS,
  PRESS_MENTIONS,
  RESOURCES,
  PLAN_YOUR_VISIT,
  type NeighborhoodCard,
} from "@/lib/lorne-park";

/** Single tile — uses a tasteful CSS placeholder when imageSrc is absent. */
function Tile({ card }: { card: NeighborhoodCard }) {
  return (
    <article className="tile reveal">
      <div className="frame">
        {card.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={card.imageSrc} alt={card.title} loading="lazy" />
        ) : (
          <div
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              background:
                "linear-gradient(135deg, var(--cream-soft), var(--cream-deep))",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {card.kicker ?? "Lorne Park"}
            </span>
          </div>
        )}
      </div>
      {card.kicker ? <div className="kicker">{card.kicker}</div> : null}
      <h4>{card.title}</h4>
      <p>{card.body}</p>
    </article>
  );
}

function ThreeUp({ id, label, italic, num, cards, rail = false }: {
  id: string;
  label: string;
  italic: string;
  num: string;
  cards: NeighborhoodCard[];
  rail?: boolean;
}) {
  if (cards.length === 0) return null;
  return (
    <div className={`subsection reveal ${rail ? "subsection--rail" : ""}`} id={id}>
      <div className="subsection-head">
        <div>
          <h3>{label}</h3>
        </div>
        <p className="italic-note">{italic}</p>
        <span className="num">{num}</span>
      </div>
      <div className="three-up">
        {cards.map((c) => (
          <Tile card={c} key={c.title} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isUnbranded = pathname.startsWith("/unbranded");
  const contactHref = isUnbranded ? "/unbranded/contact" : "/contact";

  return (
    <>
      {/* ===================================================================
          HERO
      =================================================================== */}
      <section className="hero">
        <HeroVideo poster={PHOTOS[0].src} />

        <div className="hero-gps">
          {PROPERTY.gps}
          <span>Lorne Park, Mississauga</span>
        </div>

        <div className="hero-inner">
          <div className="hero-kicker">{t("hero.kicker")}</div>
          <h1 className="hero-headline">{t("hero.headline")}</h1>
          <p className="hero-sub">{t("hero.sub")}</p>

          <div
            className="reveal"
            style={{
              marginTop: 32,
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "20px 28px",
              background: "var(--olive, #4a5c2f)",
              borderRadius: 3,
              boxShadow: "0 6px 32px rgba(0,0,0,0.25)",
              maxWidth: 620,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.72)",
                fontWeight: 600,
              }}
            >
              {t("hero.updates.eyebrow")}
            </span>
            <strong
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                lineHeight: 1.28,
                color: "#ffffff",
                marginTop: 8,
                letterSpacing: "0.005em",
              }}
            >
              {t("hero.updates.body")}
            </strong>
          </div>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>{t("btn.beginJourney")}</span>
          <span className="line" />
        </div>
      </section>

      {/* ===================================================================
          CHAPTER 1 — THE RESIDENCE
      =================================================================== */}
      <Chapter
        id="property"
        number="01"
        kicker="Chapter"
        headline="The Residence."
        subhead={t("ch.property.sub")}
      >
        <div className="chapter-intro-with-map reveal">
          <div className="chapter-intro-map">
            <LorneParkMap />
          </div>
          <p className="chapter-statement chapter-statement--inline">{t("ch.property.narrative")}</p>
        </div>

        {ROOMS.length > 0 ? (
          <div className="subsection reveal">
            <div className="three-up">
              {ROOMS.map((r) => {
                const src =
                  r.imageSrc ??
                  (r.photoIndex !== undefined ? PHOTOS[r.photoIndex].src : "");
                return (
                  <article className="tile reveal" key={r.title}>
                    <div className="frame">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={r.title} loading="lazy" />
                    </div>
                    <h4>{r.title}</h4>
                    {r.meta ? <div className="kicker">{r.meta}</div> : null}
                    <p>{r.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </Chapter>

      {/* ===================================================================
          SECTION BREAK
      =================================================================== */}
      <SectionBreak
        imageSrc={PHOTOS[1]?.src ?? PHOTOS[0].src}
        imageAlt="1654 Birchwood Drive, Lorne Park — imagery forthcoming."
        place="Lorne Park, Mississauga · Lake Ontario"
        coordinates={PROPERTY.gps}
      />

      {/* ===================================================================
          THE PARTICULARS
      =================================================================== */}
      <section className="property-facts" id="particulars">
        <div className="container">
          <div className="property-facts-head reveal">
            <p className="eyebrow">{t("particulars.eyebrow")}</p>
            <h2>{PROPERTY.shortName}</h2>
            <p className="address">
              {PROPERTY.city}, {PROPERTY.region}
            </p>
          </div>
          <dl className="property-facts-grid reveal">
            <div className="fact">
              <dt>{t("particulars.listingPrice")}</dt>
              <dd className="emphasis">{PROPERTY.price}</dd>
            </div>
            {PROPERTY.mlsNumber ? (
              <div className="fact">
                <dt>{t("particulars.mls")}</dt>
                <dd>{PROPERTY.mlsNumber}</dd>
              </div>
            ) : null}
            <div className="fact">
              <dt>{t("particulars.bedrooms")}</dt>
              <dd>{PROPERTY.bedrooms}</dd>
            </div>
            <div className="fact">
              <dt>{t("particulars.bathrooms")}</dt>
              <dd>{PROPERTY.bathrooms}</dd>
            </div>
            <div className="fact">
              <dt>{t("particulars.livingArea")}</dt>
              <dd>{PROPERTY.livingArea}</dd>
            </div>
            <div className="fact">
              <dt>{t("particulars.lotDimensions")}</dt>
              <dd>{PROPERTY.lotDimensions}</dd>
            </div>
            <div className="fact">
              <dt>{t("particulars.yearBuilt")}</dt>
              <dd>{PROPERTY.yearBuilt}</dd>
            </div>
            <div className="fact fact-wide">
              <dt>{t("particulars.community")}</dt>
              <dd>{PROPERTY.community}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===================================================================
          THE WALKTHROUGH — YouTube film of the residence
      =================================================================== */}
      {PROPERTY.filmYouTubeId ? (
        <Chapter
          id="property-film"
          number="02"
          kicker="Chapter"
          headline="The Walkthrough."
          subhead="A cinematic tour of the residence, the grounds, and the surrounding Lorne Park setting."
        >
          <div className="container">
            <article className="video-tile reveal" style={{ maxWidth: 960, marginInline: "auto" }}>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${PROPERTY.filmYouTubeId}?rel=0&modestbranding=1`}
                  title="1654 Birchwood Drive — Walkthrough Film"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </Chapter>
      ) : null}

      {/* ===================================================================
          CHAPTER 2 — FLOOR PLANS
      =================================================================== */}
      <Chapter
        id="floorplans"
        number="02"
        kicker="Chapter"
        headline={"Floor\nPlans …"}
        subhead="Measured architectural plans of every level — presented plate by plate."
        statement={FLOOR_PLANS.length > 0 ? "Tap any plan to open in full size." : undefined}
      >
        <div className="container">
          {FLOOR_PLANS.length > 0 ? (
            <div className="floorplan-scroll">
              <div className="floorplan-hint">
                {t("btn.scrollMore")} <span className="arrow" aria-hidden="true" />
              </div>
              <div className="floorplan-grid">
                {FLOOR_PLANS.map((f) => (
                  <FloorPlan key={f.label} src={f.src} label={f.label} caption={f.caption} />
                ))}
              </div>
            </div>
          ) : (
            <p
              className="chapter-statement reveal"
              style={{ maxWidth: "60ch" }}
            >
              The architectural floor-plan set is being prepared and will be
              published here ahead of launch.
            </p>
          )}
        </div>
      </Chapter>

      {/* ===================================================================
          SECTION BREAK
      =================================================================== */}
      <SectionBreak
        imageSrc={PHOTOS[0].src}
        imageAlt="The Lorne Park shoreline near 1654 Birchwood Drive."
        place="Lorne Park · Mississauga"
        coordinates={PROPERTY.gps}
      />

      {/* ===================================================================
          CHAPTER 3 — THE NEIGHBOURHOOD: LORNE PARK
      =================================================================== */}
      <Chapter
        id="neighbourhood"
        number="03"
        kicker="Chapter"
        headline={LORNE_PARK_OVERVIEW.headline}
        subhead={LORNE_PARK_OVERVIEW.italic}
        aside={
          <p className="county-overview-lede">
            {t("nb.aside")}
          </p>
        }
      >
        <section className="history-rail reveal" id="how-lorne-park-came-to-be">
          <div className="history-rail-head">
            <p className="eyebrow">{t("nb.history.eyebrow")}</p>
            <h3>{t("nb.history.title")}</h3>
          </div>
          <div className="history-rail-track">
            {HISTORY_CARDS.map((card) => (
              <article className="history-card" key={card.title}>
                {card.imageSrc ? (
                  <div className="history-card-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.imageSrc} alt={card.title} loading="lazy" />
                  </div>
                ) : null}
                {card.kicker ? <div className="kicker">{card.kicker}</div> : null}
                <h4>{card.title}</h4>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {PRESS_MENTIONS.length > 0 ? (
          <section className="county-press county-press--inline reveal" id="neighbourhood-press">
            <div className="press-head">
              <p className="eyebrow">{t("press.eyebrow")}</p>
              <h2>
                {t("press.headline")} <em>{t("press.headlineEm")}</em>.
              </h2>
            </div>
            {PRESS_MENTIONS.map((p) => (
              <article key={p.outlet} className="press-card">
                <div className="press-card-body">
                  <div className="press-outlet">{p.outlet}</div>
                  <h3>{p.title}</h3>
                  {p.byline ? <p className="press-byline">{p.byline}</p> : null}
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </section>
        ) : null}

        <ThreeUp rail id="enclaves" label={t("nb.enclaves.label")}
          italic="Lorne Park is not one neighbourhood but several — from the historic estate streets to a private lakefront colony."
          num="03 — i" cards={ENCLAVES} />

        <ThreeUp rail id="parks" label={t("nb.parks.label")}
          italic="Waterfront beaches, a protected lakefront marsh, rhododendron gardens, and a rare tallgrass prairie — all within the neighbourhood."
          num="03 — ii" cards={PARKS} />

        <ThreeUp rail id="restaurants" label={t("nb.restaurants.label")}
          italic="From Clarkson Village to the Port Credit waterfront — the everyday dining culture of the lakeshore."
          num="03 — iii" cards={RESTAURANTS} />

        <ThreeUp rail id="shopping" label={t("nb.shopping.label")}
          italic="Everyday plazas, boutique waterfront retail, and two of the GTA's major shopping destinations a short drive away."
          num="03 — iv" cards={SHOPPING} />

        <ThreeUp rail id="schools" label={t("nb.schools.label")}
          italic="One of the region's top public catchments — anchored by Lorne Park Secondary and a trio of highly rated elementaries."
          num="03 — v" cards={SCHOOLS} />

        <ThreeUp rail id="recreation" label={t("nb.recreation.label")}
          italic="The waterfront trail, private golf and country clubs, marinas, and the lake itself — minutes from the door."
          num="03 — vi" cards={RECREATION} />

        <ThreeUp rail id="connectivity" label={t("nb.connectivity.label")}
          italic="Two GO stations on the Lakeshore West line, the QEW at hand, and Pearson twenty-five minutes north."
          num="03 — vii" cards={CONNECTIVITY} />
      </Chapter>

      {/* ===================================================================
          NEIGHBOURHOOD VIDEOS
      =================================================================== */}
      {NEIGHBORHOOD_VIDEOS.length > 0 ? (
        <section className="county-videos" id="neighbourhood-videos">
          <div className="container">
            <div className="county-videos-head reveal">
              <p className="eyebrow">Films of the Neighbourhood</p>
              <h2>
                Lorne Park, in <em>moving image</em>.
              </h2>
              <p className="italic-note">
                Short films from across Lorne Park and its waterfront — the
                streets, the parks, and the rhythm of the lakeshore.
              </p>
            </div>

            <div className="video-grid">
              {NEIGHBORHOOD_VIDEOS.map((v) => (
                <article className="video-tile reveal" key={v.id}>
                  <div className="video-frame">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h4>{v.title}</h4>
                  {v.caption ? (
                    <p style={{ color: "var(--muted)", marginTop: 6, fontSize: 13 }}>{v.caption}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ===================================================================
          NEIGHBOURHOOD PROFILE
      =================================================================== */}
      <section className="county-regions" id="profile">
        <div className="container">
          <div className="county-regions-head reveal">
            <p className="eyebrow">{PROFILE.kicker}</p>
            <h2>{PROFILE.headline}</h2>
            <p className="italic-note">{PROFILE.intro}</p>
          </div>

          <div className="regions-scroll">
            <div className="regions-grid">
              {PROFILE.stats.map((s, i) => (
                <article className="region-card" key={s.label}>
                  <div className="region-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{s.value}</h3>
                  <p className="region-tagline">{s.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          PLAN YOUR VISIT + RESOURCES
      =================================================================== */}
      <section className="county-plan-visit" id="plan">
        <div className="container">
          <div className="plan-visit reveal">
            <p className="eyebrow">{PLAN_YOUR_VISIT.kicker}</p>
            <h2>
              {PLAN_YOUR_VISIT.headline.split(" ").slice(0, -2).join(" ")}{" "}
              <em>{PLAN_YOUR_VISIT.headline.split(" ").slice(-2).join(" ")}</em>
            </h2>
            <p className="plan-visit-body">{PLAN_YOUR_VISIT.body}</p>
            <a
              href={PLAN_YOUR_VISIT.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {PLAN_YOUR_VISIT.ctaLabel}
            </a>

            {RESOURCES.length > 0 ? (
              <div
                className="reveal"
                style={{
                  marginTop: 40,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px 28px",
                  justifyContent: "center",
                }}
              >
                {RESOURCES.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={r.note}
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--olive)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--cream-deep)",
                      paddingBottom: 2,
                    }}
                  >
                    {r.label} →
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ===================================================================
          POOL SIZED LOT — proposed pool concept site plan
      =================================================================== */}
      <section className="pool-section" id="pool">
        <div className="container">
          <div className="pool-head reveal">
            <p className="eyebrow">{t("pool.eyebrow")}</p>
            <h2 className="pool-headline">
              {t("pool.headline.before")} <em>{t("pool.headline.em")}</em>.
            </h2>
            <p className="pool-subhead">{t("pool.sub")}</p>
          </div>
          <div className="pool-grid reveal">
            <figure className="pool-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/birchwood/pool-concept-siteplan.jpg"
                alt="1654 Birchwood Drive — proposed pool concept, layout A"
                loading="lazy"
              />
              <figcaption>{t("pool.layoutA")}</figcaption>
            </figure>
            <figure className="pool-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/birchwood/pool-concept-siteplan-2.jpg"
                alt="1654 Birchwood Drive — proposed pool concept, layout B"
                loading="lazy"
              />
              <figcaption>{t("pool.layoutB")}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION BREAK — before the Gallery, matching the Luminate rhythm
      =================================================================== */}
      <SectionBreak
        imageSrc="/gallery/birchwood/059-1900x-photo.jpg"
        imageAlt="1654 Birchwood Drive — interior view."
        place="1654 Birchwood Drive · Lorne Park"
        coordinates={PROPERTY.gps}
      />

      {/* ===================================================================
          CHAPTER 4 — GALLERY
      =================================================================== */}
      <Chapter
        id="gallery"
        number="04"
        kicker="Chapter"
        headline="Pictures, Images and Such."
        subhead="The house, the grounds, the street, the lake."
      >
        <div className="container-wide">
          {GALLERY_IMPORTED.length > 0 ? (
            <div className="gallery-section reveal">
              <GalleryGrid photos={GALLERY_IMPORTED} variant="rail" />
            </div>
          ) : (
            <p
              className="chapter-statement reveal"
              style={{ maxWidth: "60ch", marginInline: "auto", textAlign: "center" }}
            >
              The professional photography set is being prepared. The full
              gallery — exterior, interiors, and the grounds — will be published
              here shortly.
            </p>
          )}
        </div>
      </Chapter>

      {/* ===================================================================
          CLOSING CTA
      =================================================================== */}
      <section className="closing" id="contact-cta">
        <div className="container">
          <p className="eyebrow reveal" style={{ color: "var(--terracotta)" }}>
            {t("closing.eyebrow")}
          </p>
          <h2 className="reveal">{t("closing.headline")}</h2>
          <p className="sub reveal">{t("closing.sub")}</p>
          <Link href={contactHref} className="btn btn-light btn-solid reveal">
            {t("btn.privateViewing")} <span className="arrow">→</span>
          </Link>

          {!isUnbranded ? (
            <div className="agent-card reveal">
              <strong>{PROPERTY.agent.name}</strong>
              {PROPERTY.agent.title}, {PROPERTY.agent.brokerage}
              <br />
              <a href={`tel:${PROPERTY.agent.phone.replace(/\s/g, "")}`}>{PROPERTY.agent.phone}</a>
              {"  ·  "}
              <a href={`mailto:${PROPERTY.agent.email}`}>{PROPERTY.agent.email}</a>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
