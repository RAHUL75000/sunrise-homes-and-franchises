import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import bhivandi from "@/assets/bhivandi.jpg";
import ulhasnagar from "@/assets/ulhasnagar.jpg";
import { SiteLayout, locations } from "@/components/site/Layout";
import { Counter, Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const stats: [number, string, string][] = [
  [2500, "+", "Flats in progress"],
  [2, "", "Active projects"],
  [6, "", "Locations served"],
  [5, "%", "Annual interest on deposit"],
];

const why = [
  ["Quality Construction", "Earthquake-resistant RCC structure and branded fittings in every home."],
  ["On-Time Delivery", "Clear timelines and regular progress updates on every project."],
  ["Prime Locations", "Close to stations, schools and markets across the Kalyan region."],
  ["Transparent Process", "Clear pricing, clear paperwork, no hidden charges."],
];

const amenities = ["Landscaped Garden", "Kids' Play Area", "Gymnasium", "24×7 Security", "CCTV Surveillance", "Power Backup", "Lift with Backup", "Covered Parking", "Clubhouse", "Jogging Track"];

const connectivity = [
  ["Railway Station", "5–10 min"],
  ["Mumbai–Nashik Highway", "10 min"],
  ["Schools & Colleges", "5 min"],
  ["Hospitals", "7 min"],
  ["Markets & Malls", "5 min"],
  ["Thane", "35 min"],
];

const steps = [
  ["01", "Site Visit", "See the project and sample flat in person."],
  ["02", "Choose Your Home", "Pick a 1 BHK or 2 BHK that fits your budget."],
  ["03", "Easy Booking", "Simple paperwork with home loan support."],
  ["04", "Move In", "Get your keys on time."],
];

const testimonials = [
  ["Ramesh Patil", "Bhivandi", "We finally bought our own 2 BHK. The team was honest and helpful at every step."],
  ["Sneha Kulkarni", "Ulhasnagar", "Good price, good location near the station. Very happy with the booking process."],
  ["Amit Shinde", "Franchise Partner, Titwala", "The 5% interest and company-paid advertising made the franchise an easy decision."],
];

const faqs = [
  ["What are the flat prices?", "1 BHK flats are ₹30–35 lakh and 2 BHK flats are ₹40–45 lakh in Bhivandi and Ulhasnagar."],
  ["Is home loan help available?", "Yes, our team helps you apply for a home loan with leading banks."],
  ["How does the franchise work?", "You take one area (one Tehsil or district) with a deposit. You earn 10% profit on bookings in your area plus 5% yearly interest on your deposit."],
  ["Who pays for advertising?", "All advertising is done at the company's expense."],
];

function Eyebrow({ children }: { children: string }) {
  return <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold">{children}</p>;
}

function Home() {
  return (
    <SiteLayout>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={hero} alt="Sunrise Bold Infra residential towers at sunrise" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto max-w-7xl px-6 w-full text-primary-foreground">
          <p className="text-accent text-xs uppercase tracking-[0.3em] animate-rise">Kalyan · Bhivandi · Ulhasnagar</p>
          <h1 className="mt-5 text-5xl md:text-7xl max-w-3xl leading-[1.05] animate-rise [animation-delay:150ms]">
            Your home. Your <span className="text-sunrise italic">growth</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 animate-rise [animation-delay:300ms]">
            Affordable 1 & 2 BHK homes — and real estate opportunities that help your money grow.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-rise [animation-delay:450ms]">
            <Link to="/projects" className="bg-sunrise text-accent-foreground px-6 py-3 font-semibold rounded lift">View projects</Link>
            <Link to="/franchise" className="border border-primary-foreground/40 px-6 py-3 font-semibold rounded lift">Become a franchise partner</Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(([v, s, l]) => (
            <div key={l}>
              <p className="font-display text-4xl text-sunrise"><Counter to={v} suffix={s} /></p>
              <p className="mt-1 text-sm opacity-70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured residences */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal><Eyebrow>Featured residences</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl">Homes priced for families</h2></Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            ["Bhivandi", "2,000 flats", bhivandi],
            ["Ulhasnagar", "500 flats", ulhasnagar],
          ].map(([t, f, img], i) => (
            <Reveal key={t} delay={i * 150}>
              <Link to="/projects" className="group block overflow-hidden rounded shadow-card bg-card">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={img} alt={`${t} project`} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{f}</p>
                    <p className="font-display text-3xl mt-1">{t}</p>
                    <p className="mt-3 text-sm">1 BHK ₹30–35 L · 2 BHK ₹40–45 L</p>
                  </div>
                  <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal><Eyebrow>Why families choose us</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl max-w-2xl">Built on trust, delivered with care</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="bg-card p-8 rounded h-full lift border-b-4 border-accent">
                  <p className="font-display text-4xl text-sunrise">0{i + 1}</p>
                  <h3 className="mt-4 text-xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities marquee */}
      <section className="py-24 overflow-hidden">
        <Reveal className="mx-auto max-w-7xl px-6"><Eyebrow>Amenities</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl">Every detail, designed for living</h2></Reveal>
        <div className="mt-12 flex w-max animate-marquee gap-4">
          {[...amenities, ...amenities].map((a, i) => (
            <span key={i} className="whitespace-nowrap border rounded-full px-8 py-4 font-display text-2xl">{a}</span>
          ))}
        </div>
      </section>

      {/* Investment */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <Reveal><img src={interior} alt="Family in a bright apartment living room" loading="lazy" width={1200} height={912} className="rounded shadow-card w-full" /></Reveal>
          <Reveal delay={150}>
            <Eyebrow>Why real estate</Eyebrow>
            <h2 className="mt-3 text-4xl md:text-5xl">Grow your money with something real</h2>
            <p className="mt-5 text-muted-foreground">
              Few options grow wealth as steadily as property. With Sunrise Bold Infra, you can earn 10% profit on area-wise
              bookings and 5% annual interest on your deposit — with all advertising paid by the company.
            </p>
            <Link to="/invest" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold lift">How investing works</Link>
          </Reveal>
        </div>
      </section>

      {/* Connectivity */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <Eyebrow>Connectivity</Eyebrow>
          <h2 className="mt-3 text-4xl md:text-5xl">An address close to everything</h2>
          <p className="mt-5 text-muted-foreground">Our projects sit in the heart of the Kalyan region, with easy access to railway, highway and daily needs.</p>
        </Reveal>
        <ul className="divide-y border-y">
          {connectivity.map(([p, t], i) => (
            <Reveal key={p} delay={i * 80}>
              <li className="flex justify-between py-4"><span>{p}</span><span className="font-semibold text-accent">{t}</span></li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal><Eyebrow>How it works</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl">Four steps to your new home</h2></Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 120}>
                <p className="font-display text-6xl text-sunrise">{n}</p>
                <h3 className="mt-3 text-xl">{t}</h3>
                <p className="mt-2 text-sm opacity-70">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal><Eyebrow>Our presence</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl">Where we build</h2></Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-border border">
          {locations.map((l, i) => (
            <Reveal key={l} delay={i * 60} className="bg-background">
              <div className="p-8 transition-colors hover:bg-secondary">
                <p className="font-display text-2xl">{l}</p>
                <p className="text-sm text-muted-foreground mt-1">{["Bhivandi", "Ulhasnagar"].includes(l) ? "Project live" : "Kalyan region"}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal><Eyebrow>Voices from our community</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl">What our customers say</h2></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map(([n, p, q], i) => (
              <Reveal key={n} delay={i * 120}>
                <figure className="bg-card p-8 rounded h-full lift">
                  <p className="font-display text-5xl text-accent leading-none">“</p>
                  <blockquote className="mt-2">{q}</blockquote>
                  <figcaption className="mt-6 text-sm"><span className="font-semibold">{n}</span> <span className="text-muted-foreground">· {p}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <Reveal><Eyebrow>Have questions?</Eyebrow><h2 className="mt-3 text-4xl md:text-5xl">Ask away</h2></Reveal>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-lg text-left">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="bg-sunrise">
        <Reveal className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-6 text-accent-foreground">
          <h2 className="text-4xl md:text-5xl max-w-2xl">Start the conversation today</h2>
          <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold lift">Book a site visit</Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
