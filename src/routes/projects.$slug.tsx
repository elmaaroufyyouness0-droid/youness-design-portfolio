import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.title} — ELMAAROUFY YOUNESS` : "Projet" },
        { name: "description", content: p?.description ?? "Projet de design graphique" },
        { property: "og:title", content: p?.title ?? "Projet" },
        { property: "og:description", content: p?.description ?? "" },
        ...(p?.cover ? [{ property: "og:image", content: p.cover }, { name: "twitter:image", content: p.cover }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-cream">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Projet introuvable</h1>
        <Link to="/" className="text-[color:var(--lime)] mt-4 inline-block">← Retour</Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="relative min-h-screen grain text-cream overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end pb-16 pt-32 md:pt-40 px-5 md:px-12 lg:px-[72px] overflow-hidden">
        {p.cover ? (
          <img src={p.cover} alt={p.alt} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d14] to-[#0c0d0a]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-main)] via-[color:var(--bg-main)]/70 to-[color:var(--bg-main)]/40" />
        <div className="relative z-10 mx-auto max-w-[1280px] w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-[color:var(--lime)]">
            <ArrowLeft className="h-4 w-4" /> Retour aux projets
          </Link>
          <span className="mt-6 inline-block text-xs tracking-[0.22em] uppercase text-[color:var(--lime)]">{p.category}</span>
          <h1 className="mt-3 font-bold tracking-[-0.03em] text-cream text-4xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] max-w-5xl">
            {p.title}
          </h1>
        </div>
      </section>

      {/* INFO */}
      <section className="px-5 md:px-12 lg:px-[72px] py-12 md:py-20">
        <div className="mx-auto max-w-[1280px] grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-y border-soft py-10">
          <Info label="Category" value={p.category} />
          <Info label="Type" value={p.type} />
          <Info label="Tools" value={p.tools.join(", ")} />
          <Info label="Role" value="Graphic Design / Student Project" />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="px-5 md:px-12 lg:px-[72px] pb-10">
        <div className="mx-auto max-w-[820px]">
          <span className="text-xs tracking-[0.22em] uppercase text-[color:var(--lime)]">À propos du projet</span>
          <p className="mt-4 text-cream/90 text-lg md:text-xl leading-[1.65]">{p.description}</p>
          <div className="mt-8 rounded-2xl border border-soft bg-card-soft p-6">
            <div className="text-xs tracking-[0.22em] uppercase text-muted-soft">Deliverables</div>
            <p className="mt-2 text-cream/85 leading-relaxed">{p.deliverables}</p>
          </div>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section className="px-5 md:px-12 lg:px-[72px] py-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-2xl md:text-3xl font-semibold text-cream">Gallery</h2>
          {p.gallery && p.gallery.length > 0 ? (
            <div className="mt-6 columns-1 sm:columns-2 lg:columns-2 gap-6 [column-fill:_balance]">
              {p.gallery.map((g: { url: string; alt: string }, i: number) => (
                <div key={i} className="mb-6 break-inside-avoid rounded-2xl overflow-hidden border border-soft bg-card-soft">
                  <img src={g.url} alt={g.alt} loading="lazy" className="w-full h-auto block" />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-3xl border border-dashed border-soft bg-card-soft p-8 md:p-12 text-center">
              <p className="text-muted-soft">
                Les images de la galerie doivent être uploadées depuis le dossier
                <span className="text-cream font-mono mx-1">04_Projects/{p.slug}</span>.
              </p>
            </div>
          )}
          {p.cover && !p.gallery && (
            <div className="mt-8 rounded-3xl overflow-hidden border border-soft">
              <img src={p.cover} alt={p.alt} className="w-full h-auto" />
            </div>
          )}
        </div>
      </section>

      {/* NAV */}
      <section className="px-5 md:px-12 lg:px-[72px] py-16 border-t border-soft">
        <div className="mx-auto max-w-[1280px] grid md:grid-cols-2 gap-4">
          <Link to="/projects/$slug" params={{ slug: prev.slug }} className="group rounded-2xl border border-soft bg-card-soft p-6 hover:border-[color:var(--lime)]/55 transition-all">
            <div className="text-xs tracking-[0.22em] uppercase text-muted-soft flex items-center gap-2"><ArrowLeft className="h-3.5 w-3.5" /> Previous</div>
            <div className="mt-2 text-xl font-semibold text-cream group-hover:text-[color:var(--lime)]">{prev.title}</div>
          </Link>
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="group rounded-2xl border border-soft bg-card-soft p-6 md:text-right hover:border-[color:var(--lime)]/55 transition-all">
            <div className="text-xs tracking-[0.22em] uppercase text-muted-soft flex md:justify-end items-center gap-2">Next <ArrowRight className="h-3.5 w-3.5" /></div>
            <div className="mt-2 text-xl font-semibold text-cream group-hover:text-[color:var(--lime)]">{next.title}</div>
          </Link>
        </div>
        <div className="mx-auto max-w-[1280px] mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-[color:var(--lime)]">
            <ArrowUpRight className="h-4 w-4" /> Tous les projets
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs tracking-[0.22em] uppercase text-muted-soft">{label}</div>
      <div className="mt-2 text-cream">{value}</div>
    </div>
  );
}