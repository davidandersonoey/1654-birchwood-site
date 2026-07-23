"use client";

import React from "react";

/**
 * Wraps each character of `text` so the CSS in globals.css can scroll
 * each letter on hover (pieterkoopt-inspired).
 *
 * Markup: <span class="text-wrap"><span class="letter" data-l="X">X</span>…</span>
 */
export default function LetterScroll({ text }: { text: string }) {
  return (
    <span className="text-wrap">
      {[...text].map((c, i) => (
        <span
          key={`${i}-${c}`}
          className="letter"
          style={{ "--i": i } as React.CSSProperties}
          data-l={c === " " ? " " : c}
        >
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );
}
