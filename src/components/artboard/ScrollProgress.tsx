import { useEffect, useState } from "react";

/**
 * Technical scroll indicator: a thin top rule on every viewport plus a
 * ruler-style percentage read-out on large screens.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setPct(h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[70] h-[2px] bg-[color:var(--lime)]"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-label="Progression de la lecture"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <div
        aria-hidden="true"
        className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 select-none"
      >
        <span className="tech-label text-muted-soft [writing-mode:vertical-rl] rotate-180">Scroll</span>
        <div className="relative h-40 w-px bg-white/15">
          <div className="absolute left-0 top-0 w-px bg-[color:var(--lime)]" style={{ height: `${pct}%` }} />
        </div>
        <span className="tech-label text-cream">{String(Math.round(pct)).padStart(3, "0")}</span>
      </div>
    </>
  );
}
