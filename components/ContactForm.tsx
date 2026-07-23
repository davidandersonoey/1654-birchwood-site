"use client";

import { useState } from "react";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

/**
 * Mirrors the davidoey.com contact form — same payload shape, same /api/contact
 * endpoint, same status messaging. Lives in its own component so it can be
 * embedded in both the homepage and /contact.
 */
export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl)) as unknown as ContactPayload;
    if (!data.name || !data.email || !data.message) {
      setMessage("Please complete the required fields.");
      return;
    }
    setSubmitting(true);
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || out?.ok === false) {
        setMessage(out?.error || "Something went wrong. Please try again.");
      } else {
        const first = data.name.split(" ")[0] || "there";
        setMessage(
          `Thank you, ${first}. David will be in touch privately within one business day.`
        );
        formEl.reset();
      }
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form reveal delay-1" id="contact-form" onSubmit={onSubmit} noValidate>
      <div className="row2">
        <input type="text" name="name" placeholder="Full name" required />
        <input type="email" name="email" placeholder="Email address" required />
      </div>
      <div className="row2">
        <input type="tel" name="phone" placeholder="Phone (optional)" />
        <select name="interest" defaultValue="">
          <option value="">I'm interested in…</option>
          <option>A Private Viewing</option>
          <option>Information Package</option>
          <option>Pricing &amp; Availability</option>
          <option>Floor Plans &amp; Specs</option>
          <option>Other</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="A few words on what you have in mind — dates, party size, the questions on your mind."
        required
      />
      <button type="submit" className="btn btn-dark btn-submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Privately"} <span className="arrow">→</span>
      </button>
      <div className="form-msg" role="status" aria-live="polite">
        {message}
      </div>
    </form>
  );
}
