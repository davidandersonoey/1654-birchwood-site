import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PROPERTY } from "@/lib/property";

export const metadata: Metadata = {
  title: "Request a Viewing — 1654 Birchwood Drive",
  description:
    "Request a private viewing of 1654 Birchwood Drive, Lorne Park, Mississauga.",
  robots: { index: false, follow: false },
};

/**
 * /unbranded/contact — the MLS-compliant contact page. Identical to the
 * branded /contact page minus the agent name, brokerage, phone, and
 * email (which are forbidden on MLS-linked virtual tours).
 */
export default function UnbrandedContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div>
          <p className="eyebrow reveal">Chapter — Final</p>
          <h1 className="lede reveal delay-1">
            Schedule a private viewing of 1654 Birchwood Drive.
          </h1>
          <p className="meta reveal delay-2">
            Half-hour appointments daily from 10am to 8pm — overnight notice
            preferred, same-day with four hours' notice. Tell us a little
            about who is coming and what you would like to see, and your
            representative will be in touch privately within one business
            day. The listing agent attends all showings.
          </p>

          <div className="info reveal delay-3">
            <span style={{ color: "var(--muted)" }}>
              {PROPERTY.address}
              <br />
              {PROPERTY.gps}
              <br />
              MLS® {PROPERTY.mlsNumber}
            </span>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
