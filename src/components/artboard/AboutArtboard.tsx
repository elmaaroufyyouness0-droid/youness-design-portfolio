import { Download, Mail, GraduationCap, MapPinned } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { links } from "@/lib/projects";
import profile from "@/assets/youness-profile.jpg.asset.json";

export function AboutArtboard({ count }: { count: number }) {
  return (
    <section id="about" className="artboard relative py-20 md:py-28" aria-label="À propos">
      <div className="artboard-inner">
        <SectionRule num="01" title="À propos" note="Profil · Béni Mellal, Maroc" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[440px_1fr] lg:gap-16 items-start">
          <Reveal className="relative" y={26}>
            <div className="mark-frame absolute -inset-4 md:-inset-6" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-soft bg-gradient-to-br from-[#1a1d14] via-[#13160f] to-[#0a0b08]">
              {profile?.url ? (
                <img
                  src={profile.url}
                  alt="Portrait de EL MAAROUFY YOUNESS"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-5">
                <div className="tech-label text-[color:var(--lime)]">EL MAAROUFY</div>
                <div className="mt-1 text-cream text-2xl font-bold tracking-tight">Youness</div>
                <div className="mt-2 flex flex-wrap items-center gap-4 tech-label text-muted-soft">
                  <span className="inline-flex items-center gap-1.5"><MapPinned className="h-3.5 w-3.5 text-[color:var(--lime)]" /> Béni Mellal</span>
                  <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-[color:var(--lime)]" /> CMC BMK</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal y={30} delay={80}>
            <h2 className="font-bold text-cream text-[9vw] sm:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.03em]">
              Étudiant créatif,{" "}
              <span className="bg-gradient-to-r from-[color:var(--lime)] to-[color:var(--orange)] bg-clip-text text-transparent">
                prêt pour le terrain.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-cream/85 text-base md:text-lg leading-relaxed max-w-[680px]">
              <p>
                Je suis EL MAAROUFY YOUNESS, étudiant en première année en Infographie Prépresse au CMC BMK,
                pôle Art et Industrie Graphique.
              </p>
              <p>
                Je développe mes compétences en design graphique, branding, mise en page, supports print,
                packaging et préparation des fichiers pour l’impression. À travers mes projets académiques,
                je cherche à créer des visuels propres, cohérents et adaptés aux besoins de communication.
              </p>
              <p>
                Créatif, organisé et sérieux, je recherche une opportunité de{" "}
                <span className="text-cream font-semibold">stage</span> ou une{" "}
                <span className="text-cream font-semibold">première expérience professionnelle</span> dans une agence,
                une imprimerie ou une entreprise.
              </p>
            </div>

            <Reveal className="mt-8 grid grid-cols-3 gap-3 max-w-[560px]" stagger y={18}>
              {[
                { k: String(count), v: "Projets" },
                { k: "6", v: "Catégories" },
                { k: "1ère", v: "Année CMC" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-soft bg-card-soft px-4 py-3">
                  <div className="text-cream text-2xl font-bold tracking-tight">{s.k}</div>
                  <div className="tech-label text-muted-soft mt-1">{s.v}</div>
                </div>
              ))}
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={links.cv}
                target="_blank"
                rel="noopener noreferrer"
                download="CV_EL_MAAROUFY_YOUNESS.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-3 text-sm font-semibold hover:bg-[color:var(--green)] hover:-translate-y-0.5 transition-all"
              >
                <Download className="h-4 w-4" /> Télécharger le CV
              </a>
              <button
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft text-cream px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="h-4 w-4" /> Me contacter
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SectionRule({ num, title, note }: { num: string; title: string; note?: string }) {
  return (
    <Reveal className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-soft pb-4" y={18}>
      <div className="flex items-baseline gap-4">
        <span className="tech-label text-[color:var(--lime)]">{num}</span>
        <h2 className="text-cream text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {note ? <span className="tech-label text-muted-soft">{note}</span> : null}
    </Reveal>
  );
}
