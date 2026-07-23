interface SectionBreakProps {
  imageSrc: string;
  imageAlt: string;
  /** The italic place name shown bottom-left, e.g. "Carrying Place" */
  place: string;
  /** The all-caps coordinate caption shown bottom-right */
  coordinates: string;
}

/**
 * Full-bleed image with a single GPS caption line — used between chapters
 * the way Made-for-Spain-and-Portugal breaks the journey with a coordinate.
 */
export default function SectionBreak({
  imageSrc,
  imageAlt,
  place,
  coordinates,
}: SectionBreakProps) {
  return (
    <section className="section-break reveal">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={imageAlt} loading="lazy" />
      <div className="caption">
        <span className="place">{place}</span>
        <span>{coordinates}</span>
      </div>
    </section>
  );
}
