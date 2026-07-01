import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Download, Mail, MessageCircle, Instagram, ArrowRight, Phone, MapPin, MapPinned, GraduationCap, Sparkles, Send } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { projects, links } from "@/lib/projects";
import profile from "@/assets/youness-profile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELMAAROUFY YOUNESS — Graphic Designer Portfolio" },
      { name: "description", content: "Portfolio de ELMAAROUFY YOUNESS, Graphic Designer Junior et étudiant en Infographie Prépresse au CMC BMK." },
    ],
  }),
  component: Index,
});

const filters = ["All", "Branding", "Packaging", "Print", "Posters", "Events"] as const;
const skills = [
  "Brand Identity", "Packaging Design", "Print Design", "Poster Design",
  "Mise en page", "Prépress", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign",
];

function Index() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.filter === filter);
  const heroCovers = projects.filter((p) => p.cover).slice(0, 5);

  return (
    <div className="relative min-h-screen grain text-cream overflow-x-hidden" id="home">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center pt-28 md:pt-32 pb-20">
        <div className="blob bg-[color:var(--lime)]/40 w-[520px] h-[520px] -top-32 -left-32" />
        <div className="blob bg-[color:var(--orange)]/30 w-[460px] h-[460px] top-40 right-[-120px]" style={{ animationDelay: "-6s" }} />
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-12 lg:px-[72px] grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="reveal">
            <span className="inline-block text-[11px] md:text-xs tracking-[0.22em] uppercase text-[color:var(--lime)] border border-soft rounded-full px-3 py-1.5 bg-card-soft">
              Portfolio 2026 · Graphic Design
            </span>
            <h1 className="mt-6 font-bold text-cream leading-[0.95] tracking-[-0.03em] text-[44px] sm:text-6xl md:text-7xl lg:text-[112px]">
              ELMAAROUFY <br />
              <span className="bg-gradient-to-r from-[color:var(--lime)] via-[color:var(--green)] to-[color:var(--orange)] bg-clip-text text-transparent">
                YOUNESS
              </span>
            </h1>
            <p className="mt-5 text-lg md:text-2xl text-cream/90 font-medium">
              Graphic Designer Junior <span className="text-muted-soft">/</span> Infographie Prépresse
            </p>
            <p className="mt-4 max-w-[560px] text-base md:text-lg text-muted-soft leading-relaxed">
              Étudiant en première année en Infographie Prépresse au CMC BMK, passionné par le branding,
              le print design, le packaging et la communication visuelle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-3.5 text-sm font-semibold hover:bg-[color:var(--green)] transition-all hover:-translate-y-0.5">
                Voir mes projets <ArrowRight className="h-4 w-4" />
              </a>
              <a href={links.cv} className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft text-cream px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5">
                <Download className="h-4 w-4" /> Télécharger mon CV
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cream/90 px-2 py-3.5 hover:text-[color:var(--lime)]">
                Me contacter <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hero collage */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            {heroCovers.map((p, i) => {
              const styles = [
                { className: "absolute top-0 right-0 w-[68%] h-[78%]", rot: 0, delay: "0s" },
                { className: "absolute bottom-0 left-0 w-[55%] h-[55%]", rot: -5, delay: "-2s" },
                { className: "absolute top-[8%] left-[6%] w-[38%] h-[40%]", rot: 4, delay: "-4s" },
                { className: "absolute bottom-[10%] right-[10%] w-[34%] h-[36%]", rot: -3, delay: "-1s" },
                { className: "absolute top-[42%] left-[28%] w-[28%] h-[28%] hidden sm:block", rot: 3, delay: "-3s" },
              ][i];
              return (
                <div
                  key={p.slug}
                  className={`${styles.className} rounded-3xl border border-soft overflow-hidden bg-[color:var(--bg-soft)] shadow-2xl shadow-black/50 float-y`}
                  style={{ ["--rot" as string]: `${styles.rot}deg`, animationDelay: styles.delay, transform: `rotate(${styles.rot}deg)` }}
                >
                  <img src={p.cover!} alt={p.alt} className="w-full h-full object-cover" loading="eager" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTRO / SKILLS */}
      <section className="relative py-24 md:py-32 px-5 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="font-bold tracking-tight text-cream text-4xl md:text-5xl lg:text-6xl">
            Design graphique, print et <span className="text-[color:var(--lime)]">identité visuelle</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-soft max-w-2xl mx-auto leading-relaxed">
            Je développe mes compétences dans le design graphique, le branding, la mise en page, les supports print,
            le packaging et la préparation des fichiers pour l’impression.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((s) => (
              <span key={s} className="rounded-full bg-card-soft border border-soft text-cream text-sm px-4 py-2.5 transition-all hover:bg-[color:var(--lime)] hover:text-[color:var(--bg-main)] hover:-translate-y-0.5 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE / ABOUT — strong section near the top */}
      <section id="about" className="relative py-20 md:py-28 px-5 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1280px] grid lg:grid-cols-[460px_1fr] gap-12 lg:gap-16 items-center">
          {/* Profile visual */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 opacity-70" style={{ background: "radial-gradient(50% 50% at 30% 30%, rgba(182,214,90,0.35), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(242,138,22,0.30), transparent 60%)", filter: "blur(40px)" }} />
            <div className="relative h-[480px] md:h-[560px] rounded-[36px] border border-soft overflow-hidden bg-gradient-to-br from-[#1a1d14] via-[#13160f] to-[#0a0b08] glow-ring">
              {profile?.url ? (
                <img src={profile.url} alt="ELMAAROUFY YOUNESS" className="absolute inset-0 h-full w-full object-cover object-top opacity-95" />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-[180px] font-black tracking-tighter bg-gradient-to-br from-[color:var(--lime)] via-[color:var(--green)] to-[color:var(--orange)] bg-clip-text text-transparent">EY</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              {/* floating tag */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[11px] tracking-[0.22em] uppercase text-[color:var(--lime)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--lime)] animate-pulse" /> Disponible pour stage
              </div>
              {/* bottom card */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-5">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--lime)]">ELMAAROUFY</div>
                <div className="mt-1 text-cream text-2xl md:text-3xl font-bold tracking-tight">Youness</div>
                <div className="mt-1 text-sm text-cream/75">Graphic Designer Junior · Infographie Prépresse</div>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-soft">
                  <span className="inline-flex items-center gap-1.5"><MapPinned className="h-3.5 w-3.5 text-[color:var(--lime)]" /> Béni Mellal</span>
                  <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-[color:var(--lime)]" /> CMC BMK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile content */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[color:var(--lime)]">
              <Sparkles className="h-3.5 w-3.5" /> À propos de moi
            </span>
            <h2 className="mt-3 font-bold text-cream text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight">
              Étudiant créatif, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[color:var(--lime)] to-[color:var(--orange)] bg-clip-text text-transparent">prêt pour le terrain.</span>
            </h2>
            <div className="mt-6 space-y-4 text-cream/85 text-base md:text-lg leading-relaxed max-w-[680px]">
              <p>Je suis ELMAAROUFY YOUNESS, étudiant en première année en Infographie Prépresse au CMC BMK, pôle Art et Industrie Graphique.</p>
              <p>Je développe mes compétences en design graphique, branding, mise en page, supports print, packaging et préparation des fichiers pour l’impression. À travers mes projets académiques, je cherche à créer des visuels propres, cohérents et adaptés aux besoins de communication.</p>
              <p>Créatif, organisé et sérieux, je recherche une opportunité de <span className="text-cream font-semibold">stage</span> ou une <span className="text-cream font-semibold">première expérience professionnelle</span> dans une agence, une imprimerie ou une entreprise.</p>
            </div>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[560px]">
              {[
                { k: `${projects.length}`, v: "Projets" },
                { k: "5+", v: "Catégories" },
                { k: "1ère", v: "Année CMC" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-soft bg-card-soft px-4 py-3">
                  <div className="text-cream text-2xl font-bold tracking-tight">{s.k}</div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-muted-soft mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={links.cv} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-3 text-sm font-semibold hover:bg-[color:var(--green)] hover:-translate-y-0.5 transition-all">
                <Download className="h-4 w-4" /> Télécharger CV
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft text-cream px-6 py-3 text-sm font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                <Mail className="h-4 w-4" /> Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-20 md:py-28 px-5 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs tracking-[0.22em] uppercase text-[color:var(--lime)]">Selected Work</span>
              <h2 className="mt-3 font-bold text-cream text-4xl md:text-6xl tracking-tight">Selected Work</h2>
              <p className="mt-3 text-muted-soft max-w-xl">
                Une sélection de projets en branding, packaging, print design et affiches.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-[color:var(--lime)] text-[color:var(--bg-main)]"
                    : "bg-card-soft border border-soft text-cream hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
            {visible.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I CAN CREATE */}
      <section className="relative py-24 md:py-32 px-5 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.22em] uppercase text-[color:var(--lime)]">Services</span>
            <h2 className="mt-3 font-bold text-cream text-4xl md:text-5xl lg:text-6xl tracking-tight">Ce que je peux créer</h2>
            <p className="mt-4 text-muted-soft text-lg">Des supports visuels pensés pour l’identité, l’impression et la communication.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Identité visuelle", d: "Logo, couleurs, typographie, patterns et applications de marque." },
              { n: "02", t: "Supports print", d: "Brochures, affiches, couvertures, flyers et mise en page." },
              { n: "03", t: "Packaging", d: "Design d’emballages, gabarits, mockups et présentation produit." },
              { n: "04", t: "Visuels réseaux sociaux", d: "Posters, annonces, visuels événementiels et communication digitale." },
            ].map((s) => (
              <div key={s.n} className="group rounded-3xl border border-soft bg-card-soft p-7 h-full transition-all hover:-translate-y-1.5 hover:border-[color:var(--lime)]/55 hover:shadow-[0_20px_60px_-20px_rgba(182,214,90,0.35)]">
                <div className="text-[color:var(--lime)] text-sm font-semibold tracking-widest">{s.n}</div>
                <h3 className="mt-4 text-2xl font-semibold text-cream">{s.t}</h3>
                <p className="mt-3 text-muted-soft text-[15px] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="relative py-20 md:py-28 px-5 md:px-12 lg:px-[72px]">
        <div className="mx-auto max-w-[1120px] relative rounded-[32px] border border-soft overflow-hidden">
          <div className="absolute inset-0 -z-0" style={{ background: "radial-gradient(50% 60% at 20% 20%, rgba(182,214,90,0.22), transparent 60%), radial-gradient(50% 60% at 80% 80%, rgba(242,138,22,0.20), transparent 60%), linear-gradient(180deg, #151711, #0E0F0C)" }} />
          <div className="relative p-8 md:p-[72px]">
            <span className="text-xs tracking-[0.22em] uppercase text-[color:var(--lime)]">Contact</span>
            <h2 className="mt-3 font-bold text-cream text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl">
              Vous avez un projet ou une opportunité ?
            </h2>
            <p className="mt-5 text-muted-soft text-lg max-w-2xl">
              Je suis disponible pour un stage, une première expérience professionnelle ou une collaboration autour
              du design graphique, branding, packaging, print design et communication visuelle.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl text-cream/90">
              <a href={links.phone} className="flex items-center gap-3 rounded-2xl border border-soft bg-card-soft px-4 py-3 hover:border-[color:var(--lime)]/55 transition-all">
                <Phone className="h-4 w-4 text-[color:var(--lime)]" /> <span className="text-sm">{links.phoneDisplay}</span>
              </a>
              <a href={links.email} className="flex items-center gap-3 rounded-2xl border border-soft bg-card-soft px-4 py-3 hover:border-[color:var(--lime)]/55 transition-all">
                <Mail className="h-4 w-4 text-[color:var(--lime)]" /> <span className="text-sm truncate">{links.emailDisplay}</span>
              </a>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-soft bg-card-soft px-4 py-3 hover:border-[color:var(--lime)]/55 transition-all">
                <MessageCircle className="h-4 w-4 text-[color:var(--lime)]" /> <span className="text-sm">{links.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-soft bg-card-soft px-4 py-3">
                <MapPin className="h-4 w-4 text-[color:var(--lime)]" /> <span className="text-sm">{links.location}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href={links.email} icon={<Mail className="h-4 w-4" />} label="Email" primary />
              <CTA href={links.whatsapp} icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" />
              <CTA href={links.instagram} icon={<Instagram className="h-4 w-4" />} label="Instagram" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — projet / opportunité */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-12">
          <div className="relative overflow-hidden rounded-[36px] border border-soft bg-gradient-to-br from-[color:var(--bg-soft)] via-[color:var(--bg-main)] to-[color:var(--bg-deep)] p-8 md:p-16 glow-ring">
            <div className="blob bg-[color:var(--lime)]/40 w-[360px] h-[360px] -top-24 -left-24" />
            <div className="blob bg-[color:var(--orange)]/30 w-[320px] h-[320px] -bottom-24 -right-16" style={{ animationDelay: "-8s" }} />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
              <div>
                <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-[color:var(--lime)] border border-soft rounded-full px-3 py-1.5 bg-card-soft">
                  Disponible pour stage · freelance · collaboration
                </span>
                <h2 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.02] text-cream">
                  Vous avez un projet ou <span className="bg-gradient-to-r from-[color:var(--lime)] via-[color:var(--green)] to-[color:var(--orange)] bg-clip-text text-transparent">une opportunité</span> ?
                </h2>
                <p className="mt-5 max-w-[620px] text-base md:text-lg text-muted-soft leading-relaxed">
                  Vous avez besoin d'un design, d'un visuel professionnel, d'une collaboration freelance ou d'un stagiaire en design graphique ? Envoyez-moi votre demande et je vous répondrai dès que possible.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-6 py-4 text-sm font-semibold shadow-[0_20px_60px_-20px_rgba(182,214,90,0.6)] hover:bg-[color:var(--green)] hover:-translate-y-0.5 transition-all"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /> Envoyer une demande
                </Link>
                <a
                  href={links.whatsapp}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft text-cream px-6 py-4 text-sm font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> Me contacter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CTA({ href, icon, label, primary }: { href: string; icon: React.ReactNode; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
        primary
          ? "bg-[color:var(--lime)] text-[color:var(--bg-main)] hover:bg-[color:var(--green)]"
          : "bg-card-soft border border-soft text-cream hover:bg-white/10"
      }`}
    >
      {icon} {label}
    </a>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const h = p.size === "lg" ? "h-[520px] md:h-[680px]" : p.size === "md" ? "h-[460px] md:h-[560px]" : "h-[420px] md:h-[500px]";
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className={`group relative block overflow-hidden rounded-[28px] border border-soft bg-[color:var(--bg-soft)] ${h} transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--lime)]/55 hover:shadow-[0_30px_80px_-30px_rgba(182,214,90,0.45)]`}
    >
      {p.cover ? (
        <img src={p.cover} alt={p.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#1a1d14] to-[#0c0d0a] text-muted-soft text-sm p-6 text-center">
          Cover à uploader :<br /><span className="text-cream font-mono mt-2 inline-block">cover-manuel-cours-cover.jpg</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      {/* Hover hint badge */}
      <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase text-cream/85 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        Voir le projet <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--lime)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--lime)]">{p.category}</span>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-cream tracking-tight transition-transform duration-500 group-hover:-translate-y-1">{p.title}</h3>
          <span className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-[-8deg]">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
