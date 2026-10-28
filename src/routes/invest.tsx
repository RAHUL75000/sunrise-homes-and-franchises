import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import { CtaBand, Eyebrow, PageHeader, SiteLayout } from "@/components/site/Layout";
import { Counter, Reveal } from "@/components/site/Reveal";

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

const points: [number, string, string, string][] = [
  [10, "%", "Profit on net worth", "Earn 10% profit on area-wise booking and selling. One area = one Tehsil."],
  [5, "%", "Annual interest", "The company pays 5% interest per year on your deposit."],
  [0, "", "Advertising cost to you", "All advertising is done at the company's expense."],
];

const compare = [
  ["Real estate with Sunrise", "Profit + 5% interest + asset growth", true],
  ["Savings account", "Low, fixed interest", false],
  ["Gold", "Price swings, no regular income", false],
  ["Stock market", "High risk, needs expertise", false],
] as const;

const steps = [
  ["Choose your area", "Pick a district or Tehsil to represent."],
  ["Make your deposit", "₹5 lakh, ₹20 lakh or ₹50 lakh depending on area."],
  ["We advertise", "The company runs all marketing in your area."],
  ["You earn", "10% profit on bookings plus 5% yearly interest."],
];

const deposits = [5, 20, 50];

function Invest() {
  const [d, setD] = useState(20);
  const interest = d * 0.05;
  return (
    <SiteLayout>
      <PageHeader image={hero} eyebrow="Invest" title="Real estate: the surest way to grow your money" text="Growing money easily is hardly possible in other options. Partner with Sunrise Bold Infra and share in the growth." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-3 gap-6">
        {points.map(([v, s, t, desc], i) => (
          <Reveal key={t} delay={i * 120}>
            <div className="bg-card shadow-card p-8 rounded h-full lift">
              <p className="font-display text-5xl sm:text-6xl text-sunrise">{v === 0 ? "₹0" : <Counter to={v} suffix={s} />}</p>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Eyebrow>Interest calculator</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">See what your deposit earns</h2>
            <p className="mt-4 opacity-75">Choose a deposit to see the 5% yearly interest. Booking profit is extra.</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-card text-card-foreground p-6 sm:p-10 rounded shadow-card">
              <div className="grid grid-cols-3 gap-2">
                {deposits.map((x) => (
                  <button key={x} onClick={() => setD(x)} className={`py-3 rounded font-semibold border transition-colors ${d === x ? "bg-sunrise text-accent-foreground border-transparent" : "hover:bg-secondary"}`}>₹{x} L</button>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div><p className="text-sm text-muted-foreground">Per year</p><p className="font-display text-3xl sm:text-4xl mt-1">₹{interest.toFixed(2)} L</p></div>
                <div><p className="text-sm text-muted-foreground">Per month</p><p className="font-display text-3xl sm:text-4xl mt-1">₹{((interest * 100000) / 12).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal><Eyebrow>How it works</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Four simple steps</h2></Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([t, desc], i) => (
            <Reveal key={t} delay={i * 120}>
              <div className="border-l-4 border-accent pl-5 h-full">
                <p className="font-display text-5xl text-sunrise">0{i + 1}</p>
                <h3 className="mt-3 text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Eyebrow>Compare</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Why real estate wins</h2>
            <ul className="mt-8 space-y-3">
              {compare.map(([n, d2, best]) => (
                <li key={n} className={`p-4 sm:p-5 rounded flex justify-between gap-4 ${best ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                  <span className="font-semibold">{n}</span><span className={`text-sm text-right ${best ? "text-accent" : "text-muted-foreground"}`}>{d2}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}><img src={interior} alt="Happy family at home" loading="lazy" width={1200} height={912} className="rounded shadow-card w-full" /></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 text-center">
        <Link to="/franchise" className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold lift inline-block">See franchise options</Link>
      </section>
      <CtaBand title="Ready to grow your money?" label="Talk to our team" />
    </SiteLayout>
  );
}
