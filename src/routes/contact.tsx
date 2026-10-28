import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, SiteLayout, contact } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sunrise Bold Infra — Book a Site Visit" },
      { name: "description", content: "Enquire about flats in Bhivandi and Ulhasnagar or franchise opportunities with Sunrise Bold Infra." },
      { property: "og:title", content: "Contact Sunrise Bold Infra" },
      { property: "og:description", content: "Book a site visit or apply for a franchise." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full border bg-card px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's talk about your next move" text="Tell us what you're looking for and our team will get back to you." />
      <section className="mx-auto max-w-2xl px-4 sm:px-6 pt-12 grid sm:grid-cols-3 gap-6 text-sm">
        <div><p className="text-accent uppercase tracking-widest text-xs font-semibold">Call</p><a href={`tel:${contact.phone}`} className="mt-2 block font-semibold">{contact.phone}</a></div>
        <div><p className="text-accent uppercase tracking-widest text-xs font-semibold">Email</p><a href={`mailto:${contact.email}`} className="mt-2 block font-semibold break-all">{contact.email}</a></div>
        <div><p className="text-accent uppercase tracking-widest text-xs font-semibold">Visit</p><p className="mt-2">{contact.address}</p></div>
      </section>
      <section className="mx-auto max-w-2xl px-6 py-16">
        {sent ? (
          <p className="text-center font-display text-3xl">Thank you! We'll be in touch soon.</p>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Full name" className={field} />
            <input required type="tel" placeholder="Phone number" className={field} />
            <select className={field} defaultValue="">
              <option value="" disabled>I'm interested in…</option>
              <option>1 BHK flat</option>
              <option>2 BHK flat</option>
              <option>Investment</option>
              <option>Franchise</option>
            </select>
            <textarea rows={4} placeholder="Message" className={field} />
            <button className="w-full bg-sunrise text-accent-foreground py-3 rounded font-semibold">Send enquiry</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
