export function Footer() {
  return (
    <footer className="border-t border-soft mt-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[72px] py-10 md:py-14 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-bold text-cream">ELMAAROUFY YOUNESS</div>
          <div className="text-sm text-muted-soft mt-1">Graphic Designer Junior / Infographie Prépresse</div>
          <div className="text-sm text-muted-soft">Béni Mellal, Morocco</div>
        </div>
        <nav className="flex flex-wrap gap-5 md:justify-center text-sm text-cream/80">
          <a href="/#home" className="hover:text-[color:var(--lime)]">Home</a>
          <a href="/#about" className="hover:text-[color:var(--lime)]">About</a>
          <a href="/#projects" className="hover:text-[color:var(--lime)]">Projects</a>
          <a href="/contact" className="hover:text-[color:var(--lime)]">Contact</a>
        </nav>
        <div className="text-sm text-muted-soft md:text-right">© 2026 ELMAAROUFY YOUNESS. All rights reserved.</div>
      </div>
    </footer>
  );
}
