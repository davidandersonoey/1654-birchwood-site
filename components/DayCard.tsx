interface DayCardProps {
  /** Optional "01", "02", … — when present, displayed as a numbered eyebrow */
  number?: string;
  /** Label preceding the number, e.g. "Room" or "Detail" */
  label?: string;
  /** Optional short eyebrow displayed when no number is supplied */
  eyebrow?: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Alternating photo-and-text panel used inside chapters. Layout flips
 * automatically based on the card's :nth-child position in its parent.
 */
export default function DayCard({
  number,
  label = "Room",
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
}: DayCardProps) {
  return (
    <article className="card reveal">
      <div className="card-media">
        {/* Plain <img> — caching controlled by the source URL */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className="card-body">
        {number ? (
          <div className="card-num">
            {label} No. {number}
            <span className="label">— a moment in the house</span>
          </div>
        ) : eyebrow ? (
          <div className="card-num">{eyebrow}</div>
        ) : null}
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{body}</p>
      </div>
    </article>
  );
}
