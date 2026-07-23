"use client";

import { useEffect, useRef, useState } from "react";
import { Lang } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

const LANGS: { code: Lang; label: string; title: string }[] = [
  { code: "en", label: "EN", title: "English" },
  { code: "fr", label: "FR", title: "Français" },
  { code: "it", label: "IT", title: "Italiano" },
  { code: "es", label: "ES", title: "Español" },
  { code: "ar", label: "AR", title: "العربية" },
  { code: "zh", label: "ZH", title: "中文" },
  { code: "ja", label: "JA", title: "日本語" },
  { code: "he", label: "HE", title: "עברית" },
];

/**
 * Compact 8-language dropdown. With only EN/FR we used inline buttons;
 * once we move to 8 codes the pill row gets too wide for the header, so
 * we switch to a popover.
 */
export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div className="lang-switch" role="group" aria-label="Language" ref={wrapRef}>
      <button
        type="button"
        className={`lang-switch-trigger ${open ? "is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        title={current.title}
      >
        {current.label}
        <span aria-hidden="true" style={{ marginInlineStart: 6, fontSize: 9 }}>
          {open ? "▴" : "▾"}
        </span>
      </button>
      {open ? (
        <ul
          className="lang-switch-menu"
          role="listbox"
          aria-label="Select language"
        >
          {LANGS.map((l) => (
            <li key={l.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={lang === l.code}
                className={lang === l.code ? "active" : ""}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                title={l.title}
              >
                <span className="code">{l.label}</span>
                <span className="name">{l.title}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
