"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Installs an IntersectionObserver that adds an "in" class to any `.reveal`
 * elements as they enter the viewport.
 *
 * IMPORTANT: re-runs whenever the URL changes (client-side navigation),
 * because the layout (and therefore this component) is not remounted between
 * routes — without this, the new page's reveal elements stay at opacity 0
 * and the page appears blank.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }

    let io: IntersectionObserver | null = null;
    let safetyTimer: ReturnType<typeof setTimeout> | null = null;

    const raf = requestAnimationFrame(() => {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      const reveals = document.querySelectorAll(".reveal:not(.in)");
      reveals.forEach((el) => io!.observe(el));

      // Safety net: if for any reason the observer hasn't fired (very tall
      // page, reduced motion, etc.), force-reveal everything after 1.5s so
      // content never stays invisible.
      safetyTimer = setTimeout(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
      }, 1500);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (safetyTimer) clearTimeout(safetyTimer);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
