interface GalleryItem {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  photos: GalleryItem[];
  /**
   * "grid" (default) — CSS-columns masonry, photos flow top-to-bottom.
   * "rail" — single-row horizontal scroll. Used on the home gallery to
   *          reduce the visual footprint of the full 76-photo set.
   */
  variant?: "grid" | "rail";
}

export default function GalleryGrid({ photos, variant = "grid" }: GalleryGridProps) {
  const className = variant === "rail" ? "gallery gallery--rail" : "gallery";
  return (
    <div className={className}>
      {photos.map((p, i) => (
        <figure key={p.src + i} className="item reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} alt={p.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
