import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { titleFromUrl } from "@/lib/imageMeta";

export type LightboxImage = { url: string; alt: string };

type Props = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
  projectTitle: string;
  projectSlug: string;
  category: string;
};

export function Lightbox({ images, index, onClose, onIndex, projectTitle, projectSlug, category }: Props) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      else if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", h);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = prev;
    };
  }, [index, images.length, onClose, onIndex]);

  const img = images[index];
  if (!img) return null;
  const title = titleFromUrl(img.url, projectSlug);
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-2xl animate-[fade-in_.35s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} — ${title}`}
    >
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 md:px-10 py-4 md:py-6 text-cream/90 pointer-events-none">
        <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--lime)]">
          {projectTitle} · {category}
        </div>
        <div className="hidden sm:block text-xs tracking-[0.22em] uppercase text-cream/70 font-mono">{counter}</div>
      </div>

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-3 right-3 md:top-6 md:right-6 z-10 grid place-items-center h-11 w-11 rounded-full bg-white/10 hover:bg-[color:var(--lime)] hover:text-[color:var(--bg-main)] text-cream border border-white/15 transition-all animate-[fade-in_.5s_ease-out_.15s_both]"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + images.length) % images.length); }}
          aria-label="Previous image"
          className="absolute left-2 md:left-6 z-10 grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 hover:bg-[color:var(--lime)] hover:text-[color:var(--bg-main)] text-cream border border-white/15 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[92vw] max-h-[80vh] md:max-h-[78vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={img.url}
          src={img.url}
          alt={img.alt}
          className="max-w-[92vw] max-h-[68vh] md:max-h-[70vh] object-contain rounded-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] border border-white/10 animate-[lb-zoom_.4s_cubic-bezier(.2,.7,.2,1)_both]"
        />
        {/* Details panel */}
        <div className="mt-4 md:mt-5 w-full max-w-[860px] rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4 md:px-6 md:py-5 animate-[lb-up_.45s_cubic-bezier(.2,.7,.2,1)_.1s_both]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[10px] sm:hidden tracking-[0.22em] uppercase text-cream/60 font-mono mb-1">{counter}</div>
              <h3 className="text-cream text-lg md:text-2xl font-semibold tracking-tight truncate">{title}</h3>
              <p className="mt-1 text-sm text-muted-soft truncate">{img.alt}</p>
            </div>
            <div className="shrink-0 hidden md:flex items-center gap-2 text-cream/70 text-xs">
              <Maximize2 className="h-3.5 w-3.5" /> Esc · ←  →
            </div>
          </div>
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % images.length); }}
          aria-label="Next image"
          className="absolute right-2 md:right-6 z-10 grid place-items-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 hover:bg-[color:var(--lime)] hover:text-[color:var(--bg-main)] text-cream border border-white/15 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}