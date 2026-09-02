import { Reveal } from "@/components/site/Reveal";
import { SectionRule } from "@/components/artboard/AboutArtboard";

const disciplines = [
  { n: "01", t: "Identité visuelle", d: "Logo, couleurs, typographie, patterns et applications de marque." },
  { n: "02", t: "Supports print", d: "Brochures, affiches, couvertures, flyers et mise en page." },
  { n: "03", t: "Packaging", d: "Design d’emballages, gabarits, mockups et présentation produit." },
  { n: "04", t: "Réseaux sociaux", d: "Posters, annonces, visuels événementiels et communication digitale." },
];

const tools = ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"];
const craft = [
  "Brand Identity",
  "Packaging Design",
  "Print Design",
  "Poster Design",
  "Mise en page",
  "Prépresse",
  "Retouche photo",
  "Typographie",
  "Mockups",
];

export function SkillsArtboard() {
  return (
    <section id="skills" className="artboard relative py-20 md:py-28" aria-label="Compétences">
      <div className="artboard-inner">
        <SectionRule num="03" title="Compétences & outils" note="Ce que je peux créer" />

        <Reveal className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger y={24}>
          {disciplines.map((s) => (
            <div
              key={s.n}
              className="group h-full rounded-[24px] border border-soft bg-card-soft p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--lime)]/50 hover:bg-white/[0.06]"
            >
              <div className="tech-label text-[color:var(--lime)] transition-transform duration-500 group-hover:-translate-y-1">{s.n}</div>
              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-cream tracking-tight">{s.t}</h3>
              <p className="mt-3 text-muted-soft text-[15px] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] border-t border-soft pt-10">
          <div>
            <div className="tech-label text-muted-soft">Logiciels</div>
            <Reveal className="mt-4 flex flex-col divide-y divide-white/10" stagger y={14}>
              {tools.map((t, i) => (
                <div key={t} className="flex items-baseline justify-between py-3">
                  <span className="text-cream text-lg md:text-xl font-medium">{t}</span>
                  <span className="tech-label text-[color:var(--lime)]">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </Reveal>
          </div>
          <div>
            <div className="tech-label text-muted-soft">Savoir-faire</div>
            <Reveal className="mt-4 flex flex-wrap gap-2.5" stagger y={14}>
              {craft.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-card-soft border border-soft text-cream text-sm px-4 py-2.5 transition-all duration-300 hover:bg-[color:var(--lime)] hover:text-[color:var(--bg-main)] hover:-translate-y-0.5 cursor-default"
                >
                  {s}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
