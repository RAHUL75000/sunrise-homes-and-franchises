import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/invest")({
  head: () => ({
    meta: [
      { title: "Invest — 10% Profit & 5% Interest | Sunrise Bold Infra" },
      { name: "description", content: "Earn 10% profit on area-wise booking and selling, plus 5% annual interest on your deposit." },
      { property: "og:title", content: "Invest with Sunrise Bold Infra" },
      { property: "og:description", content: "10% profit on area-wise bookings and 5% annual interest on deposit." },
    ],
  }),
  component: Invest,
});

const points = [
  ["10%", "Profit on net worth", "Earn 10% profit on area-wise booking and selling. One area = one Tehsil."],
  ["5%", "Annual interest", "The company pays 5% interest per year on your deposit."],
  ["₹0", "Advertising cost", "All advertising is done at the company's expense."],
];

function Invest() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Invest" title="Real estate: the surest way to grow your money" text="Growing money easily is hardly possible in other options. Partner with Sunrise Bold Infra and share in the growth." />
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
        {points.map(([v, t, d]) => (
          <div key={t} className="bg-card shadow-card p-8 rounded">
            <p className="font-display text-6xl text-sunrise">{v}</p>
            <h3 className="mt-4 text-2xl">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
        <Link to="/franchise" className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold">See franchise options</Link>
      </section>
    </SiteLayout>
  );
}
