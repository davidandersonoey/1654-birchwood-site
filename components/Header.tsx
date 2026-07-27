"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import LetterScroll from "./LetterScroll";
import LanguageSwitcher from "./LanguageSwitcher";
import AudioToggle from "./AudioToggle";

interface NavItem {
  href: string;
  key: string;
  /** External links open in a new tab and bypass next/Link */
  external?: boolean;
}

const NAV_BRANDED: NavItem[] = [
  { href: "/#property", key: "nav.property" },
  { href: "/#floorplans", key: "nav.floorplans" },
  { href: "/#neighbourhood", key: "nav.county" },
  { href: "/#gallery", key: "nav.gallery" },
  { href: "https://1654birchwooddrive.webflow.io/construction-highlights", key: "nav.construction", external: true },
];

// Unbranded nav keeps internal navigation inside /unbranded so the
// MLS virtual-tour visitor never lands on the branded site by accident.
// Construction Highlights link intentionally omitted from unbranded
// (external URL that carries no agent branding but is off-brand for MLS).
const NAV_UNBRANDED: NavItem[] = [
  { href: "/unbranded#property", key: "nav.property" },
  { href: "/unbranded#floorplans", key: "nav.floorplans" },
  { href: "/unbranded#neighbourhood", key: "nav.county" },
  { href: "/unbranded#gallery", key: "nav.gallery" },
];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isUnbranded = pathname.startsWith("/unbranded");
  const forceSolid = pathname !== "/" && !isUnbranded;
  const NAV = isUnbranded ? NAV_UNBRANDED : NAV_BRANDED;
  const brandHref = isUnbranded ? "/unbranded" : "/";
  const contactHref = isUnbranded ? "/unbranded/contact" : "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled || forceSolid ? "is-scrolled" : ""}`}>
      <Link href={brandHref} className="brand">
        1654 Birchwood Drive
      </Link>

      <nav className={`primary ${open ? "open" : ""}`} aria-label="Primary">
        {NAV.map((n) => {
          const label = t(n.key);
          if (n.external) {
            return (
              <a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label={`${label} (opens a new tab)`}
              >
                <LetterScroll text={label} />
              </a>
            );
          }
          return (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} aria-label={label}>
              <LetterScroll text={label} />
            </Link>
          );
        })}
      </nav>

      <div className="header-utils">
        <LanguageSwitcher />
        <AudioToggle />
        <Link href={contactHref} className="cta">
          {t("btn.privateViewing")}
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? t("nav.close") : t("nav.menu")}
        </button>
      </div>
    </header>
  );
}
