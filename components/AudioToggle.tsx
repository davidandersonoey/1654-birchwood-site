"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = document.getElementById("ambient-audio") as HTMLAudioElement | null;
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      const p = el.play();
      if (p && typeof p.then === "function") {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      type="button"
      className={`audio-toggle ${playing ? "playing" : "muted"}`}
      onClick={toggle}
      aria-label="Toggle ambient sound"
      aria-pressed={playing}
    >
      <span className="bars" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
}
