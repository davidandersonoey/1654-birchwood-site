"use client";

import { useRef, useEffect } from "react";
import { PROPERTY } from "@/lib/property";

interface HeroVideoProps {
  /** Optional poster image to show before the video can decode */
  poster?: string;
}

/**
 * Hero video.
 *
 * Two modes, chosen by which field on PROPERTY is set:
 *
 *   1. YouTube background (PROPERTY.heroYouTubeId) — full-viewport
 *      autoplaying, muted, looping iframe covering the hero area. Used
 *      when the branded hero cut lives on YouTube.
 *
 *   2. Local MP4 (PROPERTY.droneVideo, default fallback) — the original
 *      drone-video hero with intro/outro trimming controlled by
 *      PROPERTY.droneVideoIntroEndsAt and PROPERTY.droneVideoOutroStartsAt.
 */
export default function HeroVideo({ poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const introEnd = PROPERTY.droneVideoIntroEndsAt ?? 0;
  const outroStart = PROPERTY.droneVideoOutroStartsAt;
  const ytId = (PROPERTY as { heroYouTubeId?: string }).heroYouTubeId;

  useEffect(() => {
    // Skip mp4 setup entirely if the YouTube branch is active.
    if (ytId) return;

    const v = videoRef.current;
    if (!v) return;

    const seekPastIntro = () => {
      if (introEnd > 0 && v.currentTime < introEnd - 0.05) {
        try {
          v.currentTime = introEnd;
        } catch {
          /* some browsers throw if metadata isn't ready yet */
        }
      }
    };

    const trimOutro = () => {
      if (outroStart && v.currentTime >= outroStart - 0.05) {
        try {
          v.currentTime = introEnd;
        } catch {
          /* ignore */
        }
      }
    };

    const tryPlay = () => v.play().catch(() => {});

    v.addEventListener("loadedmetadata", seekPastIntro);
    v.addEventListener("timeupdate", seekPastIntro);
    if (outroStart && outroStart > introEnd) {
      v.addEventListener("timeupdate", trimOutro);
    }
    v.addEventListener("seeked", tryPlay);

    seekPastIntro();
    tryPlay();

    const onTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onTouch);
    };
    window.addEventListener("touchstart", onTouch, { once: true });

    return () => {
      v.removeEventListener("loadedmetadata", seekPastIntro);
      v.removeEventListener("timeupdate", seekPastIntro);
      v.removeEventListener("timeupdate", trimOutro);
      v.removeEventListener("seeked", tryPlay);
      window.removeEventListener("touchstart", onTouch);
    };
  }, [introEnd, outroStart, ytId]);

  // ---- YouTube branch — full-viewport autoplay iframe ----
  if (ytId) {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playlist: ytId,          // required for loop=1 to actually loop
      controls: "0",
      modestbranding: "1",
      playsinline: "1",
      rel: "0",
      showinfo: "0",
      iv_load_policy: "3",
      disablekb: "1",
    }).toString();

    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          background: poster ? `url("${poster}") center / cover no-repeat` : undefined,
          pointerEvents: "none",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${ytId}?${params}`}
          title="1654 Birchwood Drive — Hero Video"
          allow="autoplay; encrypted-media; picture-in-picture"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw",       // 16:9 relative to width
            minWidth: "177.78vh",    // 16:9 relative to height
            minHeight: "100vh",
            transform: "translate(-50%, -50%)",
            border: 0,
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }

  // ---- Local MP4 fallback ----
  return (
    <video
      ref={videoRef}
      src={PROPERTY.droneVideo}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
