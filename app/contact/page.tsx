import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PROPERTY } from "@/lib/property";

export const metadata: Metadata = {
  title: "Schedule a Private Viewing — 1654 Birchwood Drive",
  description:
    "Request a private viewing of 1654 Birchwood Drive, Lorne Park, Mississauga. Listed by David Anderson Oey, Harvey Kalles Real Estate Ltd.",
};

export default function ContactPage() {
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
            preferred, same-day with four hours' notice. Tell us a little about
            who is coming and what you would like to see, and David will be in
            touch privately within one business day. The listing agent attends
            all showings.
          </p>

          <div className="info reveal delay-3">
            <strong>{PROPERTY.agent.name}</strong>
            {PROPERTY.agent.title}
            <br />
            {PROPERTY.agent.brokerage}
            <br />
            <a href={`tel:${PROPERTY.agent.phone.replace(/\s/g, "")}`}>{PROPERTY.agent.phone}</a>
            <br />
            <a href={`mailto:${PROPERTY.agent.email}`}>{PROPERTY.agent.email}</a>
            <br />
            <br />
            <span style={{ color: "var(--muted)" }}>
              {PROPERTY.address}
              <br />
              {PROPERTY.gps}
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
