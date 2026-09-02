import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, Phone, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionRule } from "@/components/artboard/AboutArtboard";
import { links } from "@/lib/projects";

export function ContactArtboard() {
  return (
    <section id="contact" className="artboard relative py-20 md:py-28 border-t border-soft" aria-label="Contact">
      <div className="aurora aurora-a bg-[color:var(--lime)]/25 w-[420px] h-[420px] -top-24 -left-24" />
      <div className="aurora aurora-b bg-[color:var(--orange)]/20 w-[380px] h-[380px] bottom-0 right-[-120px]" />
      <div className="artboard-inner relative z-10">
        <SectionRule num="05" title="Contact" note="Disponible pour stage · freelance · collaboration" />

        <Reveal className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start" y={28}>
          <div>
            <h2 className="font-bold text-cream text-[10vw] sm:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.035em]">
              Vous avez un projet ou{" "}
              <span className="bg-gradient-to-r from-[color:var(--lime)] via-[color:var(--green)] to-[color:var(--orange)] bg-clip-text text-transparent gradient-drift">
                une opportunité
              </span>{" "}
              ?
            </h2>
            <p className="mt-5 max-w-[640px] text-lg text-muted-soft leading-relaxed">
              Je suis disponible pour un stage, une première expérience professionnelle ou une collaboration autour
              du design graphique, branding, packaging, print design et communication visuelle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] px-6 py-4 text-sm font-semibold text-[color:var(--bg-main)] transition-all duration-300 hover:bg-[color:var(--green)] hover:-translate-y-0.5 pulse-soft"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                Envoyer une demande
              </Link>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft px-6 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:border-[color:var(--lime)]/60 hover:text-[color:var(--lime)] hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <Reveal className="grid gap-3" stagger y={18}>
            <Row href={links.phone} icon={<Phone className="h-4 w-4" />} label="Téléphone" value={links.phoneDisplay} />
            <Row href={links.email} icon={<Mail className="h-4 w-4" />} label="Email" value={links.emailDisplay} />
            <Row href={links.instagram} icon={<Instagram className="h-4 w-4" />} label="Instagram" value="@elm_youness01" />
            <Row icon={<MapPin className="h-4 w-4" />} label="Localisation" value={links.location} />
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ href, icon, label, value }: { href?: string; icon: React.ReactNode; label: string; value: string }) {
  const inner = (
    <>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--lime)]/12 text-[color:var(--lime)]">{icon}</span>
      <span className="min-w-0">
        <span className="tech-label block text-muted-soft">{label}</span>
        <span className="block truncate text-cream">{value}</span>
      </span>
    </>
  );
  const cls =
    "flex items-center gap-3 rounded-2xl border border-soft bg-card-soft px-4 py-3.5 transition-all duration-300";
  if (!href) return <div className={cls}>{inner}</div>;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${cls} hover:-translate-y-0.5 hover:border-[color:var(--lime)]/55`}
    >
      {inner}
    </a>
  );
}
