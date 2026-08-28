import { useEffect, useState } from "react";

/**
 * Illustrator-style boot sequence: artboard frame draws in, counter runs to 100,
 * then the overlay lifts. Skipped entirely for reduced-motion users.
 */
export function AppLoader() {
  const [done, setDone] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("ey-loaded")) return;
    setDone(false);
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("ey-loaded", "1");
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, 320);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-[color:var(--bg-deep)] transition-opacity duration-500 ${
        pct >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-[min(78vw,520px)]">
        <div className="mark-frame absolute -inset-6 md:-inset-10" />
        <div className="tech-label text-[color:var(--lime)]">Artboard 01 — Portfolio 2026</div>
        <div className="mt-3 text-cream font-bold tracking-[-0.03em] text-[8vw] md:text-5xl leading-none">
          EL MAAROUFY
          <br />
          YOUNESS
        </div>
        <div className="mt-6 h-px w-full bg-white/12">
          <div
            className="h-px bg-[color:var(--lime)] transition-[width] duration-100"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between tech-label">
          <span className="text-muted-soft">Chargement des planches</span>
          <span className="text-cream">{String(pct).padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
