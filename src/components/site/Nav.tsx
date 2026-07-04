import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { links } from "@/lib/projects";

const items = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl border-b border-soft" : "border-b border-transparent"
        }`}
        style={{ background: scrolled ? "rgba(14,15,12,0.72)" : "transparent" }}
      >
        <div className="mx-auto max-w-[1440px] flex items-center justify-between px-5 md:px-12 lg:px-[72px] h-16 md:h-[76px]">
          <Link to="/" className="font-bold tracking-tight text-cream text-sm md:text-[15px]">
            EL MAAROUFY <span className="text-[color:var(--lime)]">YOUNESS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="nav-link text-[14px] text-cream/85 hover:text-[color:var(--lime)] transition-colors">
                {i.label}
              </a>
            ))}
          </nav>
          <a
            href={links.cv}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-5 py-2.5 text-[13px] font-semibold hover:bg-[color:var(--green)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(182,214,90,0.6)] transition-all duration-300"
          >
            <Download className="h-4 w-4" /> Télécharger CV
          </a>
          <button className="md:hidden text-cream" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[color:var(--bg-main)] md:hidden flex flex-col reveal">
          <div className="flex items-center justify-between px-5 h-16 border-b border-soft">
            <span className="font-bold text-cream text-sm">EL MAAROUFY <span className="text-[color:var(--lime)]">YOUNESS</span></span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center gap-6 px-6">
            {items.map((i, idx) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                style={{ animation: `hero-line .55s cubic-bezier(.2,.7,.2,1) ${idx * 80}ms both` }}
                className="text-cream text-4xl font-semibold tracking-tight hover:text-[color:var(--lime)] transition-colors"
              >
                {i.label}
              </a>
            ))}
            <a href={links.cv} onClick={() => setOpen(false)} className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-3 font-semibold">
              <Download className="h-4 w-4" /> Télécharger CV
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
