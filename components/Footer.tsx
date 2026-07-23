"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROPERTY } from "@/lib/property";

export default function Footer() {
  const pathname = usePathname();
  const isUnbranded = pathname.startsWith("/unbranded");
  const prefix = isUnbranded ? "/unbranded" : "/";

  const exploreLinks = [
    { href: `${prefix}#property`, label: "The Residence" },
    { href: `${prefix}#floorplans`, label: "Floor Plans" },
    { href: `${prefix}#neighbourhood`, label: "The Neighbourhood" },
    { href: `${prefix}#gallery`, label: "Gallery" },
  ];

  return (
    <footer className="site-footer">
      <div className="inner">
        <div>
          <div className="brand">1654 Birchwood Drive</div>
          <p className="tagline">
            {isUnbranded
              ? "Lorne Park, Mississauga."
              : "A contemporary zen residence in Lorne Park."}
          </p>
          <p style={{ marginTop: 18, color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>
            1654 Birchwood Drive
            <br />
            {PROPERTY.city}
            <br />
            {PROPERTY.postalCode}, {PROPERTY.country}
            <br />
            <span style={{ color: "var(--muted)", fontSize: 12 }}>
              {PROPERTY.gps} · MLS® {PROPERTY.mlsNumber}
            </span>
          </p>
        </div>

        <div>
          <h5>Explore</h5>
          <ul>
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          {/* HK / David Oey brand mark — hidden on the unbranded MLS
              variant (no agent or brokerage logos permitted). */}
          {!isUnbranded ? (
            <div style={{ marginTop: 28 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/david-oey-hk-logo.png"
                alt="David Anderson Oey · Harvey Kalles Real Estate Ltd. · Brokerage"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: 260,
                  height: "auto",
                }}
              />
            </div>
          ) : null}
        </div>

        {/* Listing Agents column — only on branded. The unbranded MLS-
            virtual-tour variant must not display agent name, brokerage,
            or contact info per Board rules. */}
        {!isUnbranded ? (
          <div>
            <h5>Listing Agents</h5>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              {PROPERTY.agent.name}
              <br />
              {PROPERTY.agent.brokerage}
              <br />
              <a href={`tel:${PROPERTY.agent.directPhone.replace(/\s/g, "")}`}>
                {PROPERTY.agent.directPhone}
              </a>
              <br />
              <a href={`mailto:${PROPERTY.agent.email}`}>{PROPERTY.agent.email}</a>
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/contact" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                Schedule a Private Viewing →
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <h5>Schedule a Viewing</h5>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Private viewings are by appointment.
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/unbranded/contact" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
                Request a Viewing →
              </Link>
            </p>
          </div>
        )}
      </div>

      <div className="legal">
        <span>
          © {new Date().getFullYear()} 1654 Birchwood Drive
          {isUnbranded
            ? "."
            : `. Listed by ${PROPERTY.agent.name}, ${PROPERTY.agent.brokerage}.`}
        </span>
        {!isUnbranded ? (
          <span>
            <a href={PROPERTY.agent.website} target="_blank" rel="noopener noreferrer">
              davidoey.com
            </a>
          </span>
        ) : null}
      </div>
    </footer>
  );
}
