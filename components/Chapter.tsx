import { ReactNode } from "react";

interface ChapterProps {
  id?: string;
  number: string;          // e.g. "I" or "01"
  kicker: string;          // e.g. "Chapter No. 01"
  headline: string;
  subhead?: string;        // italic subhead under the headline
  statement?: ReactNode;   // optional editorial paragraph below the head
  /** Optional content rendered to the right of the headline area on wide
   *  screens (collapses below on mobile). When this is present, the
   *  subhead and statement drop BELOW the headline+aside grid, spanning
   *  full width so they read as one continuous line under both columns. */
  aside?: ReactNode;
  children?: ReactNode;
}

/**
 * The "Chapter No. X / big serif headline / italic subhead" masthead
 * that opens every long-scroll chapter on the site.
 */
export default function Chapter({
  id,
  number,
  kicker,
  headline,
  subhead,
  statement,
  aside,
  children,
}: ChapterProps) {
  const kickerBlock = (
    <div className="chapter-kicker">
      {kicker}
      <span className="num">No. {number}</span>
    </div>
  );

  if (aside) {
    return (
      <section id={id} className="chapter">
        <div className="chapter-head-with-aside">
          <div className="chapter-head reveal">
            {kickerBlock}
            <h2 className="chapter-headline">{headline}</h2>
          </div>
          <div className="chapter-aside reveal delay-1">{aside}</div>
        </div>
        {(subhead || statement) ? (
          <div className="chapter-head-below reveal delay-2">
            {subhead ? <p className="chapter-sub">{subhead}</p> : null}
            {statement ? <p className="chapter-statement">{statement}</p> : null}
          </div>
        ) : null}
        {children}
      </section>
    );
  }

  return (
    <section id={id} className="chapter">
      <div className="chapter-head reveal">
        {kickerBlock}
        <h2 className="chapter-headline">{headline}</h2>
        {subhead ? <p className="chapter-sub">{subhead}</p> : null}
        {statement ? <p className="chapter-statement">{statement}</p> : null}
      </div>
      {children}
    </section>
  );
}
