import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import bhivandi from "@/assets/bhivandi.jpg";
import ulhasnagar from "@/assets/ulhasnagar.jpg";
import { CtaBand, Eyebrow, PageHeader, SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sunrise Bold Infra Bhivandi & Ulhasnagar" },
      { name: "description", content: "2,000 flats in Bhivandi and 500 flats in Ulhasnagar. 1 BHK from ₹30 lakh, 2 BHK from ₹40 lakh." },
      { property: "og:title", content: "Sunrise Bold Infra Projects" },
      { property: "og:description", content: "Bhivandi (2,000 flats) and Ulhasnagar (500 flats) residential projects." },
    ],
  }),
  component: Projects,
});

const projects = [
  { name: "Bhivandi", flats: "2,000", img: bhivandi, status: "Booking open", text: "Our largest township — a self-contained community with green open spaces, wide internal roads and everyday conveniences close by." },
  { name: "Ulhasnagar", flats: "500", img: ulhasnagar, status: "Booking open", text: "A compact, well-connected residential project near the station, ideal for first-time buyers and young families." },
];

const plans = [
  { type: "1 BHK", price: "₹30 – 35 Lakh", rooms: ["1 Bedroom", "Living Room", "Kitchen", "1 Bathroom", "Balcony"] },
  { type: "2 BHK", price: "₹40 – 45 Lakh", rooms: ["2 Bedrooms", "Living Room", "Kitchen", "2 Bathrooms", "Balcony"] },
];

const specs = [
  ["Structure", "Earthquake-resistant RCC frame"],
  ["Flooring", "Vitrified tiles in all rooms"],
  ["Kitchen", "Granite platform with steel sink"],
  ["Doors & Windows", "Laminated doors, aluminium sliding windows"],
  ["Electrical", "Concealed copper wiring, modular switches"],
  ["Bathrooms", "Branded CP & sanitary fittings"],
];

const gallery = [hero, bhivandi, interior, ulhasnagar];

function Projects() {
  return (
    <SiteLayout>
      <PageHeader image={hero} eyebrow="Our projects" title="Two projects. 2,500 homes." text="Affordable, well-planned flats in two of the Kalyan region's fastest-growing towns." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 space-y-20">
        {projects.map((p, i) => (
          <article key={p.name} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              <div className="group overflow-hidden rounded shadow-card relative">
                <img src={p.img} alt={`${p.name} project`} loading="lazy" width={1200} height={912} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-sunrise text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">{p.status}</span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <Eyebrow>{`Project ${i + 1}`}</Eyebrow>
              <h2 className="mt-2 text-4xl sm:text-5xl">{p.name}</h2>
              <p className="mt-3 font-display text-3xl text-sunrise">{p.flats} flats</p>
              <p className="mt-4 text-muted-foreground">{p.text}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                <div className="border p-4 sm:p-5 rounded lift"><dt className="text-sm text-muted-foreground">1 BHK</dt><dd className="text-lg sm:text-xl font-semibold mt-1">₹30–35 L</dd></div>
                <div className="border p-4 sm:p-5 rounded lift"><dt className="text-sm text-muted-foreground">2 BHK</dt><dd className="text-lg sm:text-xl font-semibold mt-1">₹40–45 L</dd></div>
              </dl>
              <Link to="/contact" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold lift">Enquire about {p.name}</Link>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><Eyebrow>Floor plans</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Find your perfect space</h2></Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {plans.map((pl, i) => (
              <Reveal key={pl.type} delay={i * 150}>
                <div className="bg-card p-6 sm:p-10 rounded h-full lift border-t-4 border-accent">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-4xl sm:text-5xl">{pl.type}</p>
                    <p className="font-semibold text-accent">{pl.price}</p>
                  </div>
                  <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
                    {pl.rooms.map((r) => <li key={r} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sunrise shrink-0" />{r}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal><Eyebrow>Specifications</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Built to last</h2></Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border">
          {specs.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80} className="bg-background">
              <div className="p-6 sm:p-8 h-full transition-colors hover:bg-secondary">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><Eyebrow>Gallery</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">A visual journey</h2></Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 100} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <div className="overflow-hidden rounded h-full">
                  <img src={g} alt="Project gallery" loading="lazy" className="h-full w-full object-cover aspect-square transition-transform duration-700 hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="See your future home in person" />
    </SiteLayout>
  );
}
