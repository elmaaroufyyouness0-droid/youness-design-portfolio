import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Expand } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { ComingSoon } from "@/components/site/ComingSoon";
import { sortGallery, fileNumber, titleFromUrl } from "@/lib/imageMeta";
import { accentOf, CONTAIN_SLUGS, artboardId, artboardNumber } from "@/lib/portfolio";
import type { Project } from "@/lib/projects";

export function ProjectArtboard({ p, index, total }: { p: Project; index: number; total: number }) {
  const gallery = useMemo(() => (p.gallery ? sortGallery(p.gallery) : []), [p.gallery]);
  const [lb, setLb] = useState<number | null>(null);
  const accent = accentOf(p);
  const contain = CONTAIN_SLUGS.has(p.slug);
  const num = artboardNumber(index);

  return (
    <article
      id={artboardId(p.slug)}
      className="artboard relative py-16 md:py-24 border-t border-soft"
      style={{ ["--accent" as string]: accent }}
      aria-labelledby={`${artboardId(p.slug)}-title`}
    >
      <div className="artboard-inner">
        {/* Header rule */}
        <Reveal className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2" y={18}>
          <div className="flex items-center gap-3">
            <span className="tech-label" style={{ color: accent }}>
              Artboard {num} / {String(total).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ background: accent }} />
          </div>
          <span className="tech-label text-muted-soft">
            {p.secondaryCategory ? `${p.category} · ${p.secondaryCategory}` : p.category}
          </span>
        </Reveal>

        <Reveal className="mt-5" y={26}>
          <h3
            id={`${artboardId(p.slug)}-title`}
            className="font-bold text-cream tracking-[-0.04em] leading-[0.92] text-[11vw] sm:text-6xl lg:text-[84px] [overflow-wrap:anywhere]"
          >
            {p.title}
          </h3>
          {p.subtitle ? <p className="mt-2 text-cream/70 text-lg md:text-2xl">{p.subtitle}</p> : null}
          {p.shortDescription ? (
            <p className="mt-5 max-w-[720px] text-lg md:text-xl text-cream/85 leading-relaxed">{p.shortDescription}</p>
          ) : null}
          {p.comingSoon ? (
            <span
              className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 tech-label"
              style={{ borderColor: `${accent}66`, color: accent }}
            >
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: accent }} />
              {p.comingSoon.badge ?? "In Progress"}
            </span>
          ) : null}
        </Reveal>

        {/* Cover plate */}
        {p.cover ? (
          <Reveal className="relative mt-10" y={34}>
            <div className="mark-frame absolute -inset-3 md:-inset-5" />
            <figure className="relative overflow-hidden rounded-[24px] border border-soft bg-[color:var(--bg-soft)]">
              <img
                src={p.cover}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className={`w-full ${contain || p.comingSoon ? "h-auto max-h-[70vh] object-contain p-6 md:p-12" : "h-auto"}`}
              />
              <figcaption className="absolute left-4 top-4 tech-label rounded-full border border-white/12 bg-black/55 px-2.5 py-1 text-cream/85 backdrop-blur-sm">
                {num} · Cover
              </figcaption>
            </figure>
          </Reveal>
        ) : null}

        {/* Technical annotations */}
        <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-y border-soft py-8" stagger y={18}>
          <Meta label="Type" value={p.contextLabel ?? p.type} />
          <Meta label="Rôle" value={p.role ?? "Graphic Design / Projet étudiant"} />
          <Meta label="Outils" value={p.tools.join(", ")} />
          <Meta label="Livrables" value={p.deliverables} />
        </Reveal>

        {/* Narrative */}
        <Reveal className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]" y={24}>
          <div className="tech-label text-muted-soft lg:pt-2">À propos du projet</div>
          <p className="max-w-[820px] text-cream/90 text-lg md:text-xl leading-[1.7]">{p.description}</p>
        </Reveal>

        {/* Coming soon plate */}
        {p.comingSoon ? (
          <div className="mt-12">
            <ComingSoon
              theme={p.comingSoon.theme}
              heading={p.comingSoon.heading}
              text={p.comingSoon.text}
              badge={p.comingSoon.badge}
              title={p.title}
              category={p.category}
            />
          </div>
        ) : null}

        {/* Carousel slots */}
        {p.carousel ? (
          <Reveal className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger y={22}>
            {Array.from({ length: p.carousel.total }).map((_, i) => {
              const g = gallery[i];
              const slot = String(i + 1).padStart(2, "0");
              if (g) {
                return (
                  <button
                    key={g.url}
                    type="button"
                    onClick={() => setLb(i)}
                    aria-label={`Agrandir ${g.alt}`}
                    className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-soft bg-card-soft transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lime)]"
                  >
                    <img src={g.url} alt={g.alt} loading="lazy" className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
                    <span className="tech-label absolute left-3 top-3 rounded-full border border-white/12 bg-black/55 px-2 py-1 text-cream/85">{slot}</span>
                  </button>
                );
              }
              return (
                <div key={`slot-${slot}`} className="relative grid aspect-square place-items-center rounded-2xl border border-dashed border-soft bg-card-soft/60 px-5 text-center">
                  <span className="tech-label absolute left-3 top-3 text-muted-soft">{slot}</span>
                  <div>
                    <div className="tech-label" style={{ color: accent }}>Coming Soon</div>
                    <p className="mt-2 text-sm text-muted-soft leading-relaxed">
                      {p.carousel!.placeholders[i] ?? "Bientôt disponible"}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        ) : gallery.length > 0 ? (
          <div className="mt-12">
            <div className="flex items-baseline justify-between border-b border-soft pb-3">
              <span className="tech-label text-muted-soft">Planches du projet</span>
              <span className="tech-label text-muted-soft">
                {gallery.length} {gallery.length > 1 ? "visuels" : "visuel"} · cliquez pour agrandir
              </span>
            </div>
            <div className="mt-6 grid gap-5 md:gap-6 sm:grid-cols-2">
              {gallery.map((g, i) => {
                const label = titleFromUrl(g.url, p.slug);
                const wide = i === 0 && gallery.length > 2;
                return (
                  <button
                    key={g.url}
                    type="button"
                    onClick={() => setLb(i)}
                    aria-label={`Agrandir ${label}`}
                    className={`group relative block w-full overflow-hidden rounded-[20px] border border-soft bg-card-soft text-left transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lime)] ${
                      wide ? "sm:col-span-2" : ""
                    }`}
                    style={{ borderColor: undefined }}
                  >
                    <img src={g.url} alt={g.alt} loading="lazy" decoding="async" className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]" />
                    <span className="tech-label pointer-events-none absolute left-3 top-3 rounded-full border border-white/12 bg-black/55 px-2 py-1 text-cream/85 backdrop-blur-sm">
                      {String(fileNumber(g.url)).padStart(2, "0")}
                    </span>
                    <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-[color:var(--bg-main)] opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ background: accent }}>
                      <Expand className="h-4 w-4" />
                    </span>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="block truncate text-cream font-medium">{label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-soft pt-6" y={16}>
          <span className="tech-label text-muted-soft">Fin de la planche {num}</span>
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: accent }}
          >
            Ouvrir la fiche projet
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      {lb !== null && gallery.length > 0 && (
        <Lightbox
          images={gallery}
          index={lb}
          onIndex={setLb}
          onClose={() => setLb(null)}
          projectTitle={p.title}
          projectSlug={p.slug}
          category={p.category}
        />
      )}
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="tech-label text-muted-soft">{label}</div>
      <div className="mt-2 text-cream/90 text-[15px] leading-relaxed">{value}</div>
    </div>
  );
}
