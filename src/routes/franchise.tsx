import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise — District & Tehsil Partners | Sunrise Bold Infra" },
      { name: "description", content: "District franchise ₹50 lakh, district-place Tehsil ₹20 lakh, other Tehsil ₹5 lakh deposit." },
      { property: "og:title", content: "Sunrise Bold Infra Franchise" },
      { property: "og:description", content: "Become a district or Tehsil franchise partner from ₹5 lakh deposit." },
    ],
  }),
  component: Franchise,
});

const tiers = [
  { name: "District Franchise", price: "₹50 Lakh", note: "One full district", featured: true },
  { name: "District-Place Tehsil", price: "₹20 Lakh", note: "One Tehsil at a district place" },
  { name: "Other Tehsil", price: "₹5 Lakh", note: "Tehsil places other than district places" },
];

function Franchise() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Franchise" title="Own the territory. Share the growth." text="Every franchise earns 10% profit on area-wise bookings and 5% annual interest on deposit. Advertising is paid by the company." />
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`p-10 rounded shadow-card ${t.featured ? "bg-primary text-primary-foreground" : "bg-card"}`}>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold">{t.note}</p>
            <h3 className="mt-3 text-2xl">{t.name}</h3>
            <p className="mt-6 font-display text-5xl text-sunrise">{t.price}</p>
            <p className="text-sm opacity-70 mt-1">deposit</p>
            <ul className="mt-8 space-y-2 text-sm">
              <li>✓ 10% profit on area bookings</li>
              <li>✓ 5% interest per annum</li>
              <li>✓ Advertising by company</li>
            </ul>
            <Link to="/contact" className="mt-8 inline-block bg-sunrise text-accent-foreground px-5 py-2.5 rounded font-semibold text-sm">Apply now</Link>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
