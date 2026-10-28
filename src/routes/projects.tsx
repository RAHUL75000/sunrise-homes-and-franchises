import { createFileRoute, Link } from "@tanstack/react-router";
import bhivandi from "@/assets/bhivandi.jpg";
import ulhasnagar from "@/assets/ulhasnagar.jpg";
import { PageHeader, SiteLayout } from "@/components/site/Layout";

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
  { name: "Bhivandi", flats: "2,000", img: bhivandi },
  { name: "Ulhasnagar", flats: "500", img: ulhasnagar },
];

function Projects() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our projects" title="Two projects. 2,500 homes." text="Affordable, well-planned flats in two of the Kalyan region's fastest-growing towns." />
      <section className="mx-auto max-w-7xl px-4 sm:px-4 sm:px-6 py-14 md:py-20 space-y-16">
        {projects.map((p, i) => (
          <article key={p.name} className="grid md:grid-cols-2 gap-10 items-center">
            <img src={p.img} alt={`${p.name} project`} loading="lazy" width={1200} height={912} className={`rounded shadow-card w-full aspect-[4/3] object-cover ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold">Project {i + 1}</p>
              <h2 className="mt-2 text-4xl sm:text-5xl">{p.name}</h2>
              <p className="mt-4 font-display text-3xl text-sunrise">{p.flats} flats</p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="border p-5 rounded"><dt className="text-sm text-muted-foreground">1 BHK</dt><dd className="text-xl font-semibold mt-1">₹30–35 L</dd></div>
                <div className="border p-5 rounded"><dt className="text-sm text-muted-foreground">2 BHK</dt><dd className="text-xl font-semibold mt-1">₹40–45 L</dd></div>
              </dl>
              <Link to="/contact" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold">Enquire about {p.name}</Link>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
