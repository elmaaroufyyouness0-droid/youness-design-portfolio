import { GraduationCap, School, Briefcase } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionRule } from "@/components/artboard/AboutArtboard";

const entries = [
  {
    icon: GraduationCap,
    period: "En cours",
    title: "Infographie Prépresse — 1ère année",
    place: "CMC BMK · Pôle Art et Industrie Graphique, Béni Mellal",
    text: "Formation en design graphique, mise en page, chaîne graphique et préparation des fichiers pour l’impression.",
  },
  {
    icon: School,
    period: "Pratique académique",
    title: "Projets de design encadrés",
    place: "Identité visuelle, packaging, print et affiches",
    text: "Réalisation de projets complets : recherche, conception, déclinaisons, mockups et livrables prêts pour l’impression.",
  },
  {
    icon: Briefcase,
    period: "Expérience professionnelle",
    title: "Stage — Agence ONMEDIA",
    place: "Design de contenus pour réseaux sociaux",
    text: "Création de visuels publicitaires pour Volendam Rent Car, dans le respect de l’identité d’un client réel.",
  },
];

export function EducationArtboard() {
  return (
    <section id="education" className="artboard relative py-20 md:py-28" aria-label="Formation et expérience">
      <div className="artboard-inner">
        <SectionRule num="02" title="Formation & expérience" note="Parcours" />
        <Reveal className="mt-10 grid gap-5 md:grid-cols-3" stagger y={26}>
          {entries.map((e, i) => (
            <article
              key={e.title}
              className="group relative h-full rounded-[24px] border border-soft bg-card-soft p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--lime)]/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="tech-label text-[color:var(--lime)]">{String(i + 1).padStart(2, "0")}</span>
                <e.icon className="h-5 w-5 text-[color:var(--lime)]" aria-hidden="true" />
              </div>
              <div className="tech-label text-muted-soft mt-5">{e.period}</div>
              <h3 className="mt-2 text-cream text-xl md:text-2xl font-semibold tracking-tight leading-snug">{e.title}</h3>
              <div className="mt-2 text-sm text-[color:var(--lime)]/90">{e.place}</div>
              <p className="mt-3 text-muted-soft text-[15px] leading-relaxed">{e.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
