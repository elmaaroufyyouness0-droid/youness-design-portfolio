import { Reveal } from "@/components/site/Reveal";
import { SectionRule } from "@/components/artboard/AboutArtboard";
import { accentOf, artboardId, artboardNumber } from "@/lib/portfolio";
import type { Project } from "@/lib/projects";

export function WorksIndex({ items }: { items: Project[] }) {
  const go = (slug: string) =>
    document.getElementById(artboardId(slug))?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="works" className="artboard relative py-20 md:py-28" aria-label="Sélection de projets">
      <div className="artboard-inner">
        <SectionRule num="04" title="Selected Works" note={`${items.length} planches · défilement continu`} />

        <Reveal className="mt-8 max-w-[760px]" y={24}>
          <p className="text-lg md:text-xl text-cream/85 leading-relaxed">
            Chaque projet est présenté ci-dessous comme une planche complète : contexte, outils, livrables et visuels.
            Aucun clic nécessaire — tout se lit en continu.
          </p>
        </Reveal>

        <Reveal className="mt-10 divide-y divide-white/10 border-y border-soft" stagger y={16}>
          {items.map((p, i) => {
            const accent = accentOf(p);
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => go(p.slug)}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-4 text-left transition-colors"
              >
                <span className="tech-label" style={{ color: accent }}>{artboardNumber(i)}</span>
                <span className="min-w-0">
                  <span className="block truncate text-cream text-lg md:text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
                    {p.title}
                  </span>
                </span>
                <span className="tech-label text-muted-soft hidden sm:block">{p.category}</span>
              </button>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
