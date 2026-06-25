// Helpers for extracting numeric order and readable titles from asset URLs.

export function fileNumber(url: string): number {
  const last = url.split("/").pop() ?? "";
  const base = last.split(".")[0];
  const m = base.match(/-(\d+)$/);
  return m ? parseInt(m[1], 10) : 9999;
}

export function titleFromUrl(url: string, projectSlug: string): string {
  const last = url.split("/").pop() ?? "";
  const base = last.split(".")[0].replace(/-\d+$/, "");
  const words = base.split(/[-_]/).filter(Boolean);
  const slugWords = projectSlug.split("-");
  let i = 0;
  while (i < words.length && slugWords.includes(words[i].toLowerCase())) i++;
  const rest = i < words.length ? words.slice(i) : words;
  return rest
    .map((w) => (/^\d/.test(w) ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

export type GalleryItem = { url: string; alt: string };

export function sortGallery<T extends GalleryItem>(items: T[]): T[] {
  return [...items].sort((a, b) => fileNumber(a.url) - fileNumber(b.url));
}