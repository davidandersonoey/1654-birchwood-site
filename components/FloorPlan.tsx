"use client";

import { useEffect, useState } from "react";

interface FloorPlanProps {
  src: string;
  label: string;
  caption: string;
}

/**
 * Single floor-plan tile. Tap/click opens a full-screen modal with the
 * image scaled to fit. ESC and click-anywhere close the modal.
 */
export default function FloorPlan({ src, label, caption }: FloorPlanProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="floorplan reveal"
        onClick={() => setOpen(true)}
        aria-label={`Open ${label} floor plan`}
      >
        <div className="frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${label} — floor plan`} loading="lazy" />
        </div>
        <div className="label">
          <h4>{label}</h4>
          <p>{caption}</p>
        </div>
      </button>

      {open ? (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} floor plan, full view`}
          onClick={() => setOpen(false)}
        >
          <button className="close" aria-label="Close">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`${label} — full-size floor plan`} />
        </div>
      ) : null}
    </>
  );
}
