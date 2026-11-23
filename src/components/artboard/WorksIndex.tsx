import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/site/Reveal";
import { SectionRule } from "@/components/artboard/AboutArtboard";
import { accentOf, artboardId, artboardNumber } from "@/lib/portfolio";
import type { Project } from "@/lib/projects";

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function WorksIndex({ items }: { items: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = useMemo(() => [...new Set(items.map((item) => item.category))], [items]);
  const filteredItems = useMemo(() => {
    const search = normalize(query.trim());
    return items.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const searchableText = normalize([
        item.title,
        item.subtitle ?? "",
        item.category,
        item.shortDescription ?? "",
        item.description,
      ].join(" "));
      return matchesCategory && (!search || searchableText.includes(search));
    });
  }, [category, items, query]);

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

        <Reveal className="mt-8 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.4fr)]" y={20}>
          <label className="relative block">
            <span className="sr-only">Rechercher un projet</span>
            <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-soft" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nom, catégorie ou mot-clé"
              className="h-12 rounded-xl border-soft bg-card-soft pl-10 text-cream placeholder:text-muted-soft focus-visible:ring-[color:var(--lime)]"
            />
          </label>
          <label>
            <span className="sr-only">Filtrer par catégorie</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-12 w-full rounded-xl border border-soft bg-card-soft px-4 text-sm text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lime)]"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </Reveal>

        <div className="mt-3 flex min-h-8 items-center justify-between gap-3">
          <p className="text-sm text-muted-soft" aria-live="polite">
            {filteredItems.length} projet{filteredItems.length === 1 ? " affiché" : "s affichés"}
          </p>
          {query || category !== "all" ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => { setQuery(""); setCategory("all"); }}
              className="text-muted-soft hover:text-[color:var(--lime)]"
            >
              Réinitialiser
            </Button>
          ) : null}
        </div>

        <div className="mt-3 divide-y divide-white/10 border-y border-soft">
          {filteredItems.length ? filteredItems.map((p) => {
            const accent = accentOf(p);
            const originalIndex = items.findIndex((item) => item.slug === p.slug);
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => go(p.slug)}
                aria-label={`Aller au projet ${p.title}`}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-4 text-left transition-colors"
              >
                <span className="tech-label" style={{ color: accent }}>{artboardNumber(originalIndex)}</span>
                <span className="min-w-0">
                  <span className="block truncate text-cream text-lg md:text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5">
                    {p.title}
                  </span>
                </span>
                <span className="tech-label text-muted-soft hidden sm:block">{p.category}</span>
              </button>
            );
          )
          }) : (
            <p className="py-6 text-sm text-muted-soft" role="status">Aucun projet ne correspond à ces critères.</p>
          )}
        </div>
      </div>
    </section>
  );
}
