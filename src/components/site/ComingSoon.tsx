import { Link } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";

type Theme = "jamrah" | "cop" | "crousti";

const THEMES: Record<Theme, { a: string; b: string; c: string; accent: string }> = {
  jamrah: {
    a: "rgba(226,58,20,0.42)",
    b: "rgba(242,138,22,0.30)",
    c: "rgba(120,20,10,0.35)",
    accent: "#F2582A",
  },
  cop: {
    a: "rgba(31,58,147,0.38)",
    b: "rgba(45,199,168,0.30)",
    c: "rgba(243,178,20,0.26)",
    accent: "#4FB6E8",
  },
  crousti: {
    a: "rgba(243,190,60,0.36)",
    b: "rgba(24,58,110,0.38)",
    c: "rgba(240,228,200,0.20)",
    accent: "#F0BE3C",
  },
};

export function ComingSoon({
  theme,
  heading,
  text,
  title,
  category,
  badge = "In Progress",
}: {
  theme: Theme;
  heading: string;
  text: string;
  title: string;
  category: string;
  badge?: string;
}) {
  const t = THEMES[theme];
  return (
    <section className="px-5 md:px-12 lg:px-[72px] py-14 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[36px] border border-soft bg-[color:var(--bg-soft)] px-6 py-14 md:px-14 md:py-24">
          <div
            className="absolute inset-0 -z-0 opacity-90 aurora-a"
            style={{
              background: `radial-gradient(55% 55% at 20% 25%, ${t.a}, transparent 65%), radial-gradient(50% 50% at 80% 70%, ${t.b}, transparent 65%), radial-gradient(60% 60% at 50% 110%, ${t.c}, transparent 70%)`,
              filter: "blur(30px)",
            }}
          />
          <div className="relative z-10 text-center max-w-[820px] mx-auto">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 backdrop-blur-md px-3.5 py-1.5 text-[11px] tracking-[0.22em] uppercase animate-[fade-in_.8s_ease-out_both]"
              style={{ color: t.accent }}
            >
              <Clock className="h-3.5 w-3.5" /> {badge}
            </span>
            <div className="mt-6 text-[11px] tracking-[0.22em] uppercase text-cream/70 animate-[rise_.8s_cubic-bezier(.2,.7,.2,1)_.1s_both]">
              {title} · {category}
            </div>
            <h2 className="mt-3 font-bold tracking-[-0.03em] text-cream text-3xl sm:text-4xl md:text-6xl leading-[1.03] animate-[rise_.9s_cubic-bezier(.2,.7,.2,1)_.18s_both]">
              {heading}
            </h2>
            <div
              className="mt-5 text-sm md:text-base font-semibold tracking-[0.4em] uppercase animate-[fade-in_1s_ease-out_.3s_both]"
              style={{ color: t.accent }}
            >
              Coming Soon
            </div>
            <p className="mt-6 text-cream/85 text-base md:text-lg leading-[1.7] animate-[fade-in_1s_ease-out_.4s_both]">
              {text}
            </p>

            {/* Thin progress line */}
            <div className="mt-10 mx-auto h-[3px] w-full max-w-[420px] rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full w-1/2 rounded-full gradient-drift"
                style={{ background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)` }}
              />
            </div>

            <Link
              to="/"
              hash="projects"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft text-cream px-6 py-3.5 text-sm font-semibold hover:border-[color:var(--lime)]/60 hover:text-[color:var(--lime)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4" /> Retour aux projets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
