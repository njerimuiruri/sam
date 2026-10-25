"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { contact } = site;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Fallback delivery: open the user's mail client with the enquiry.
    // Replace this with a real form handler / API route in production.
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Matter: ${data.get("matter")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-16 lg:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Left: details */}
        <div>
          <h2 className="mt-4 text-3xl font-semibold text-navy-900 sm:text-4xl">
            Contact Us 
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>
          {/* <p className="mt-4 max-w-md text-lg leading-relaxed text-navy-600">
            Tell us briefly about your legal matter and how we can help. We will
            review your enquiry and get in touch to discuss the next steps.
          </p> */}

          <dl className="mt-8 space-y-5">
            <div className="flex gap-4">
              <Icon path="M2 4h20v16H2z M2 6l10 7 10-7" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Email
                </dt>
                <dd className="mt-1 text-navy-800">
                  <a href={`mailto:${contact.email}`} className="hover:text-accent">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon path="M4 4h5l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v5a2 2 0 0 1-2 2A17 17 0 0 1 2 6a2 2 0 0 1 2-2Z" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Phone
                </dt>
                <dd className="mt-1 text-navy-800">
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="hover:text-accent">
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon path="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z M12 9h.01" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Chambers
                </dt>
                <dd className="mt-1 text-navy-800">
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon path="M12 6v6l4 2 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Hours
                </dt>
                <dd className="mt-1 text-navy-800">{contact.hours}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100">
            <iframe
              title="Office location map"
              src={contact.mapEmbedSrc}
              className="h-56 w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="relative rounded-2xl border border-navy-100 bg-white p-7 shadow-sm sm:p-9">
          <span className="absolute right-6 top-6 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-gold/50" />
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy-900">
                Thank you
              </h3>
              <p className="mt-2 max-w-xs text-sm text-navy-600">
                Your mail client should have opened with the enquiry. We will be
                in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Full name" name="name" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <label className="block">
                <span className="text-sm font-medium text-navy-800">
                  Type of matter
                </span>
                <select
                  name="matter"
                  className="mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                >
                  {site.matterTypes.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-navy-800">
                  How can we help?
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </label>

              <button type="submit" className="btn-primary w-full">
                Send enquiry
              </button>

              <p className="text-xs leading-relaxed text-navy-400">
                Submitting this form does not create an attorney-client
                relationship. Please do not include confidential information until
                a formal engagement is in place.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-800">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-navy-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <span className="grid h-10 w-10 flex-none place-items-center rounded-full border border-navy-100 text-accent">
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {path.split(" M").map((seg, i) => (
          <path key={i} d={(i === 0 ? seg : "M" + seg)} />
        ))}
      </svg>
    </span>
  );
}
