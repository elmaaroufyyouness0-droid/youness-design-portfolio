import { useEffect, useRef } from "react";
import { ArrowDown, Download, MapPinned } from "lucide-react";
import { links } from "@/lib/projects";

export function HeroArtboard({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };
    const reset = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="artboard relative min-h-[100svh] flex items-center pt-28 pb-16"
      style={{ ["--mx" as string]: "0", ["--my" as string]: "0" }}
      aria-label="Introduction"
    >
      <div className="aurora aurora-a bg-[color:var(--lime)]/40 w-[620px] h-[620px] -top-44 -left-44" />
      <div className="aurora aurora-b bg-[color:var(--orange)]/30 w-[520px] h-[520px] top-20 right-[-180px]" />

      <div className="artboard-inner relative z-10 w-full">
        <div className="flex items-center justify-between gap-4 border-b border-soft pb-4">
          <span className="tech-label text-[color:var(--lime)]">Artboard 00 — Cover</span>
          <span className="tech-label text-muted-soft hidden sm:inline">Portfolio 2026 · Graphic Design</span>
          <span className="tech-label text-muted-soft">{String(count).padStart(2, "0")} projets</span>
        </div>

        <h1 className="mt-8 md:mt-12 font-bold text-cream leading-[0.86] tracking-[-0.045em] text-[15vw] lg:text-[11.5vw]">
          <span className="hero-line block" style={{ animationDelay: "120ms" }}>EL MAAROUFY</span>
          <span className="hero-line block" style={{ animationDelay: "280ms" }}>
            <span className="block bg-gradient-to-r from-[color:var(--lime)] via-[color:var(--green)] to-[color:var(--orange)] bg-clip-text text-transparent gradient-drift">
              YOUNESS
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end border-t border-soft pt-8">
          <div className="parallax-layer" style={{ ["--depth" as string]: "8px" }}>
            <p className="hero-line text-xl md:text-3xl font-medium text-cream" style={{ animationDelay: "440ms" }}>
              Graphic Designer Junior <span className="text-muted-soft">/</span> Infographie Prépresse
            </p>
            <p className="hero-line mt-4 max-w-[620px] text-base md:text-lg text-muted-soft leading-relaxed" style={{ animationDelay: "560ms" }}>
              Étudiant en première année en Infographie Prépresse au CMC BMK, passionné par le branding,
              le print design, le packaging et la communication visuelle.
            </p>
            <div className="hero-line mt-6 flex flex-wrap items-center gap-4 tech-label text-muted-soft" style={{ animationDelay: "660ms" }}>
              <span className="inline-flex items-center gap-1.5">
                <MapPinned className="h-3.5 w-3.5 text-[color:var(--lime)]" /> {links.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--lime)] animate-pulse" /> Disponible pour stage
              </span>
            </div>
          </div>

          <div className="hero-line flex flex-wrap gap-3" style={{ animationDelay: "760ms" }}>
            <button
              type="button"
              onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-3.5 text-sm font-semibold hover:bg-[color:var(--green)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Parcourir les planches
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_EL_MAAROUFY_YOUNESS.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft text-cream px-6 py-3.5 text-sm font-semibold hover:border-[color:var(--lime)]/60 hover:text-[color:var(--lime)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="h-4 w-4" /> Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
