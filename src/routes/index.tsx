import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import { SiteLayout, locations } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunrise Bold Infra — Affordable Homes in Kalyan, Bhivandi & Ulhasnagar" },
      { name: "description", content: "1 BHK from ₹30 lakh and 2 BHK from ₹40 lakh. 2,500 flats across Bhivandi and Ulhasnagar by Sunrise Bold Infra." },
      { property: "og:title", content: "Sunrise Bold Infra — Homes & Investment" },
      { property: "og:description", content: "Affordable flats in Bhivandi and Ulhasnagar, plus investment and franchise opportunities." },
    ],
  }),
  component: Home,
});

const stats = [
  ["2,500+", "Flats in progress"],
  ["2", "Active projects"],
  ["6", "Locations served"],
  ["5%", "Annual interest on deposit"],
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={hero} alt="Sunrise Bold Infra residential towers at sunrise" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto max-w-7xl px-6 w-full text-primary-foreground">
          <p className="text-accent text-xs uppercase tracking-[0.3em]">Kalyan · Bhivandi · Ulhasnagar</p>
          <h1 className="mt-5 text-5xl md:text-7xl max-w-3xl leading-[1.05]">
            Your home. Your <span className="text-sunrise italic">growth</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">
            Affordable 1 & 2 BHK homes — and real estate opportunities that help your money grow.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="bg-sunrise text-accent-foreground px-6 py-3 font-semibold rounded">View projects</Link>
            <Link to="/franchise" className="border border-primary-foreground/40 px-6 py-3 font-semibold rounded">Become a franchise partner</Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-4xl text-sunrise">{v}</p>
              <p className="mt-1 text-sm opacity-70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold">Homes</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Priced for families</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            ["1 BHK", "₹30 – 35 Lakh", "Bhivandi / Ulhasnagar"],
            ["2 BHK", "₹40 – 45 Lakh", "Bhivandi / Ulhasnagar"],
          ].map(([t, p, l]) => (
            <div key={t} className="bg-card shadow-card p-10 rounded border-t-4 border-accent">
              <p className="text-muted-foreground text-sm">{l}</p>
              <p className="font-display text-5xl mt-2">{t}</p>
              <p className="mt-6 text-2xl font-semibold">{p}</p>
              <Link to="/contact" className="mt-8 inline-block text-sm font-semibold underline underline-offset-4">Book a site visit →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <img src={interior} alt="Family in a bright apartment living room" loading="lazy" width={1200} height={912} className="rounded shadow-card w-full" />
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold">Why real estate</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Grow your money with something real</h2>
            <p className="mt-5 text-muted-foreground">
              Few options grow wealth as steadily as property. With Sunrise Bold Infra, you can earn 10% profit on area-wise
              bookings and 5% annual interest on your deposit — with all advertising paid by the company.
            </p>
            <Link to="/invest" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold">How investing works</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl md:text-5xl">Where we build</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-border border">
          {locations.map((l) => (
            <div key={l} className="bg-background p-8">
              <p className="font-display text-2xl">{l}</p>
              <p className="text-sm text-muted-foreground mt-1">{["Bhivandi", "Ulhasnagar"].includes(l) ? "Project live" : "Kalyan region"}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
