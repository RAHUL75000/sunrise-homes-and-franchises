import { createFileRoute, Link } from "@tanstack/react-router";
import bhivandi from "@/assets/bhivandi.jpg";
import { CtaBand, Eyebrow, PageHeader, SiteLayout, locations } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  { name: "Other Tehsil", price: "₹5 Lakh", note: "Tehsil places other than district places" },
  { name: "District Franchise", price: "₹50 Lakh", note: "One full district", featured: true },
  { name: "District-Place Tehsil", price: "₹20 Lakh", note: "One Tehsil at a district place" },
];

const benefits = [
  ["Exclusive area", "One area = one Tehsil. Your territory is yours."],
  ["10% profit", "On every area-wise booking and sale."],
  ["5% interest", "Paid every year on your deposit."],
  ["Free advertising", "All marketing at company expense."],
  ["Ready projects", "2,500 flats to sell from day one."],
  ["Full support", "Training, materials and site visits."],
];

const faqs = [
  ["What does one area mean?", "One area equals one Tehsil. You earn profit on bookings and sales made in your area."],
  ["Is the deposit returned?", "Deposit terms are explained in the company's written franchise agreement."],
  ["Do I pay for advertising?", "No. All advertising is done at the company's expense."],
  ["Who can apply?", "Anyone interested in real estate who wants to grow their money in their own area."],
];

function Franchise() {
  return (
    <SiteLayout>
      <PageHeader image={bhivandi} eyebrow="Franchise" title="Own the territory. Share the growth." text="Every franchise earns 10% profit on area-wise bookings and 5% annual interest on deposit. Advertising is paid by the company." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal><Eyebrow>Choose your plan</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Three ways to partner</h2></Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className={`p-6 sm:p-10 rounded shadow-card h-full lift relative ${t.featured ? "bg-primary text-primary-foreground md:-translate-y-4" : "bg-card"}`}>
                {t.featured && <span className="absolute -top-3 right-6 bg-sunrise text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">Most popular</span>}
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
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><Eyebrow>Partner benefits</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Everything you need to succeed</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="bg-card p-6 sm:p-8 rounded h-full lift border-b-4 border-accent">
                  <p className="font-display text-3xl text-sunrise">0{i + 1}</p>
                  <h3 className="mt-3 text-xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <Reveal><Eyebrow>Areas open now</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Franchises available in</h2></Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {locations.map((l, i) => (
              <Reveal key={l} delay={i * 70}>
                <span className="inline-block border border-primary-foreground/30 rounded-full px-5 py-2.5 font-display text-lg sm:text-xl transition-colors hover:bg-accent hover:text-accent-foreground">{l}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
        <Reveal><Eyebrow>Questions</Eyebrow><h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Franchise FAQ</h2></Reveal>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-lg text-left">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand title="Claim your area before someone else does" label="Apply for franchise" />
    </SiteLayout>
  );
}
