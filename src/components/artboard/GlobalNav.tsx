import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { links } from "@/lib/projects";

const sections = [
  { id: "home", label: "Accueil", num: "00" },
  { id: "about", label: "À propos", num: "01" },
  { id: "education", label: "Formation", num: "02" },
  { id: "skills", label: "Compétences", num: "03" },
  { id: "works", label: "Projets", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

export function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl border-b border-soft" : "border-b border-transparent"
        }`}
        style={{ background: scrolled ? "rgba(14,15,12,0.78)" : "transparent" }}
      >
        <div className="mx-auto max-w-[1560px] flex items-center justify-between px-5 md:px-10 lg:px-14 h-16 md:h-[74px]">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-bold tracking-tight text-cream text-sm md:text-[15px]">
              EL MAAROUFY <span className="text-[color:var(--lime)]">YOUNESS</span>
            </span>
            <span className="hidden lg:inline tech-label text-muted-soft">Graphic Designer</span>
          </Link>

          <nav aria-label="Sections du portfolio" className="hidden md:flex items-center gap-7">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                aria-current={active === s.id ? "true" : undefined}
                className={`nav-link group flex items-baseline gap-1.5 text-[13px] transition-colors ${
                  active === s.id ? "text-[color:var(--lime)]" : "text-cream/80 hover:text-[color:var(--lime)]"
                }`}
              >
                <span className="tech-label opacity-60">{s.num}</span>
                {s.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_EL_MAAROUFY_YOUNESS.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-5 py-2.5 text-[13px] font-semibold hover:bg-[color:var(--green)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="h-4 w-4" /> CV
            </a>
          </div>

          <button className="md:hidden text-cream" onClick={() => setOpen(true)} aria-label="Ouvrir le menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[80] bg-[color:var(--bg-main)] md:hidden flex flex-col">
          <div className="flex items-center justify-between px-5 h-16 border-b border-soft">
            <span className="font-bold text-cream text-sm">
              EL MAAROUFY <span className="text-[color:var(--lime)]">YOUNESS</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Fermer le menu" className="text-cream">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Menu mobile" className="flex-1 flex flex-col justify-center gap-5 px-6">
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                style={{ animation: `hero-line .5s cubic-bezier(.2,.7,.2,1) ${i * 70}ms both` }}
                className="flex items-baseline gap-3 text-left text-cream text-3xl font-semibold tracking-tight hover:text-[color:var(--lime)] transition-colors"
              >
                <span className="tech-label text-[color:var(--lime)]">{s.num}</span>
                {s.label}
              </button>
            ))}
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_EL_MAAROUFY_YOUNESS.pdf"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-3 font-semibold"
            >
              <Download className="h-4 w-4" /> Télécharger le CV
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
