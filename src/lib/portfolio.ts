import { projects, type Project } from "@/lib/projects";

/** Accent colour derived from each project's own visual identity. */
const ACCENTS: Record<string, string> = {
  "asfar-beni-mellal": "#7BB661",
  "serfer-delivery": "#F2A516",
  "travel-brochure": "#3E9BD6",
  "chikilita-chocolate-packaging": "#C98A4B",
  "appelo-juice-packaging": "#E2557C",
  "manuel-cours-cover": "#B6D65A",
  "bugatti-chiron-car-poster": "#4C6EF5",
  "football-posters": "#E03131",
  "eid-posters": "#D4A72C",
  "jeux-societe-poster": "#8BC34A",
  "ceremonie-remise-diplomes-poster": "#C0A062",
  "volendam-rent-car-social-media": "#2F80ED",
  "crousti-restaurant-social-media-ad": "#E8873A",
  "jamrah-watch-brand-identity": "#C0392B",
  "cop-visual-identity": "#2BB3A3",
  "crousti-brand-identity": "#3B6BA5",
  "crousti-social-media-carousel": "#E5B93C",
};

/** Projects whose artwork must never be cropped (logos, layouts, documents). */
export const CONTAIN_SLUGS = new Set([
  "asfar-beni-mellal",
  "serfer-delivery",
  "travel-brochure",
  "chikilita-chocolate-packaging",
  "appelo-juice-packaging",
  "manuel-cours-cover",
  "jamrah-watch-brand-identity",
  "cop-visual-identity",
  "crousti-brand-identity",
];

export function accentOf(p: Project) {
  return ACCENTS[p.slug] ?? "#B6D65A";
}

export const publishedProjects = projects;

export function artboardId(slug: string) {
  return `artboard-${slug}`;
}

export function artboardNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

/** Distinct categories present in the real data, in first-appearance order. */
export function projectCategories() {
  const seen: string[] = [];
  for (const p of projects) if (!seen.includes(p.category)) seen.push(p.category);
  return seen;
}
