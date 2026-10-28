import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/invest", label: "Invest" },
  { to: "/franchise", label: "Franchise" },
  { to: "/contact", label: "Contact" },
] as const;

export const locations = ["Kalyan", "Bhivandi", "Ulhasnagar", "Titwala", "Ambivali", "Ambarnath"];

export const contact = {
  phone: "+91 98765 43210",
  email: "info@sunriseboldinfra.com",
  address: "Office No. 12, Sunrise Plaza, Station Road, Kalyan (W), Maharashtra 421301",
};

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-sunrise" />
            <span className="font-display text-xl">Sunrise Bold Infra</span>
          </Link>
          <nav className="hidden md:flex gap-7 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100" activeProps={{ className: "text-accent opacity-100" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="bg-sunrise text-accent-foreground px-4 py-2 text-sm font-semibold rounded">
            Enquire
          </Link>
        </div>
        <nav className="md:hidden flex gap-5 overflow-x-auto px-6 pb-3 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="opacity-80 whitespace-nowrap" activeProps={{ className: "text-accent opacity-100" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Sunrise Bold Infra</p>
            <p className="mt-3 text-sm opacity-70">An emerging real estate developer in the Kalyan region, building affordable homes and growth opportunities.</p>
            <p className="mt-4 text-sm opacity-80">{contact.address}</p>
            <p className="mt-1 text-sm opacity-80"><a href={`tel:${contact.phone}`}>{contact.phone}</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
          <div>
            <p className="text-accent text-xs uppercase tracking-widest">We build in</p>
            <p className="mt-3 text-sm opacity-80">{locations.join(" · ")}</p>
          </div>
          <div>
            <p className="text-accent text-xs uppercase tracking-widest">Explore</p>
            <ul className="mt-3 space-y-1 text-sm opacity-80">
              {nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <p className="border-t border-primary-foreground/10 py-5 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Sunrise Bold Infra. Returns and franchise terms are subject to the company's written agreement.
        </p>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-accent text-xs uppercase tracking-[0.3em]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-6xl max-w-3xl">{title}</h1>
        <p className="mt-5 max-w-2xl opacity-75">{text}</p>
      </div>
    </section>
  );
}
