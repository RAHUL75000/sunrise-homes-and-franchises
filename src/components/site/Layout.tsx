import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="h-8 w-8 shrink-0 rounded-full bg-sunrise" />
            <span className="font-display text-lg sm:text-xl truncate">Sunrise Bold Infra</span>
          </Link>
          <nav className="hidden md:flex gap-7 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100" activeProps={{ className: "text-accent opacity-100" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Link to="/contact" className="hidden sm:inline-block bg-sunrise text-accent-foreground px-4 py-2 text-sm font-semibold rounded">
              Enquire
            </Link>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <nav className={`md:hidden flex-col border-t border-primary-foreground/10 px-4 pb-4 ${open ? "flex" : "hidden"}`}>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 border-b border-primary-foreground/10 text-base opacity-90" activeProps={{ className: "text-accent opacity-100" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 bg-sunrise text-accent-foreground py-3 text-center font-semibold rounded">Enquire now</Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
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
      <div className="mx-auto max-w-7xl px-4 sm:px-4 sm:px-6 py-14 md:py-20">
        <p className="text-accent text-xs uppercase tracking-[0.3em]">{eyebrow}</p>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl max-w-3xl">{title}</h1>
        <p className="mt-5 max-w-2xl opacity-75">{text}</p>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: string }) {
  return <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold">{children}</p>;
}

export function CtaBand({ title, label = "Book a site visit" }: { title: string; label?: string }) {
  return (
    <section className="bg-sunrise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 text-accent-foreground">
        <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-2xl text-center md:text-left">{title}</h2>
        <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold lift w-full md:w-auto text-center">{label}</Link>
      </div>
    </section>
  );
}
