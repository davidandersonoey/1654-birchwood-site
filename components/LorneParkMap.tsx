/**
 * Lorne Park Map — an embedded, interactive Google Map centred on the
 * Lorne Park neighbourhood (no API key required; the `output=embed` query
 * form is the public, key-less embed). Once a custom illustrated map or a
 * pinned snapshot is ready, this can be swapped for a static <img> the way
 * the other microsites do.
 *
 * To re-centre on the exact property once the listing is public, change
 * the `q=` value below to the street address.
 */
export default function LorneParkMap() {
  const query = encodeURIComponent("1654 Birchwood Drive, Mississauga, ON");
  return (
    <figure className="county-map lorne-park-map" style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid var(--cream-deep)",
        }}
      >
        <iframe
          title="Map of Lorne Park, Mississauga"
          src={`https://www.google.com/maps?q=${query}&z=14&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            filter: "grayscale(0.2) contrast(1.02)",
          }}
          allowFullScreen
        />
      </div>
      <figcaption
        style={{
          marginTop: 12,
          fontSize: 12,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textAlign: "center",
          color: "var(--ink-soft)",
        }}
      >
        Lorne Park · Mississauga · Lake Ontario
      </figcaption>
    </figure>
  );
}
