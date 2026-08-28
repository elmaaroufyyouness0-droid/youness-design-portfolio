import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut de la page"
      className={`fixed bottom-6 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-soft bg-[color:var(--bg-soft)]/90 backdrop-blur-md text-cream transition-all duration-300 hover:border-[color:var(--lime)]/60 hover:text-[color:var(--lime)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lime)] ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
