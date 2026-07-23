/**
 * Sunnylea Map — the user-supplied neighbourhood snapshot, served from
 * /public/sunnylea-map.png. The image now has the 43 Ballacaine pin
 * baked in by the user, so this component is just a thin wrapper that
 * renders the picture inside the chapter-intro-map frame.
 */
export default function SunnyleaMap() {
  return (
    <figure className="county-map sunnylea-map" style={{ margin: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sunnylea-map.png"
        alt="Sunnylea, Etobicoke — the streets, the ravines, and the Kingsway shops, with 43 Ballacaine Drive marked."
        style={{ display: "block", width: "100%", height: "auto", borderRadius: 2 }}
        loading="lazy"
      />
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
        Sunnylea · Etobicoke · West Toronto
      </figcaption>
    </figure>
  );
}
