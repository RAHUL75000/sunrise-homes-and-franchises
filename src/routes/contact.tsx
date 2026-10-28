import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ulhasnagar from "@/assets/ulhasnagar.jpg";
import { Eyebrow, PageHeader, SiteLayout, contact, locations } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

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

const info = [
  { icon: Phone, label: "Call us", value: contact.phone, href: `tel:${contact.phone}` },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Visit", value: contact.address },
  { icon: Clock, label: "Hours", value: "Mon – Sun, 10 AM – 7 PM" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full border bg-card px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";
  return (
    <SiteLayout>
      <PageHeader image={ulhasnagar} eyebrow="Contact" title="Let's talk about your next move" text="Tell us what you're looking for and our team will get back to you." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 -mt-10 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {info.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <div className="bg-card shadow-card p-6 rounded h-full lift">
              <c.icon className="h-6 w-6 text-accent" />
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
              {c.href ? <a href={c.href} className="mt-1 block font-semibold break-all">{c.value}</a> : <p className="mt-1 font-semibold">{c.value}</p>}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <Eyebrow>Enquiry</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Book a site visit</h2>
          <p className="mt-4 text-muted-foreground">Fill in your details and we'll call you back within 24 hours.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {locations.map((l) => <span key={l} className="text-sm border rounded-full px-4 py-1.5">{l}</span>)}
          </div>
        </Reveal>
        <Reveal delay={150}>
          {sent ? (
            <div className="bg-secondary p-10 rounded text-center animate-rise">
              <p className="font-display text-3xl">Thank you!</p>
              <p className="mt-2 text-muted-foreground">We'll be in touch soon.</p>
            </div>
          ) : (
            <form className="space-y-4 bg-secondary p-6 sm:p-8 rounded" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className={field} />
                <input required type="tel" placeholder="Phone number" className={field} />
              </div>
              <select className={field} defaultValue="">
                <option value="" disabled>I'm interested in…</option>
                <option>1 BHK flat</option>
                <option>2 BHK flat</option>
                <option>Investment</option>
                <option>Franchise</option>
              </select>
              <select className={field} defaultValue="">
                <option value="" disabled>Preferred location</option>
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
              <textarea rows={4} placeholder="Message" className={field} />
              <button className="w-full bg-sunrise text-accent-foreground py-3 rounded font-semibold lift">Send enquiry</button>
            </form>
          )}
        </Reveal>
      </section>

      <section className="bg-primary">
        <Reveal>
          <iframe title="Office location" src="https://www.google.com/maps?q=Kalyan+West+Maharashtra&output=embed" className="w-full h-80 md:h-96 border-0" loading="lazy" />
        </Reveal>
      </section>
    </SiteLayout>
  );
}
