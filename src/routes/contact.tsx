import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Send, MessageCircle, Mail, Instagram, ExternalLink, CheckCircle2, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { links } from "@/lib/projects";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ELMAAROUFY YOUNESS" },
      { name: "description", content: "Envoyez votre demande de freelance, stage, collaboration ou projet design à ELMAAROUFY YOUNESS." },
      { property: "og:title", content: "Contact — ELMAAROUFY YOUNESS" },
      { property: "og:description", content: "Envoyez votre demande de freelance, stage ou projet design." },
    ],
  }),
  component: ContactPage,
});

const requestTypes = [
  "Freelance project",
  "Stage / Internship",
  "Collaboration",
  "Logo design",
  "Social media design",
  "Poster / Flyer design",
  "Branding / Identity",
  "Packaging design",
  "Print design",
  "Other",
];

const contactMethods = ["WhatsApp", "Email", "Phone call"];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  requestType: string;
  details: string;
  budget: string;
  deadline: string;
  contactMethod: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  requestType: "",
  details: "",
  budget: "",
  deadline: "",
  contactMethod: "WhatsApp",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Le nom complet est requis.";
    if (!form.phone.trim()) e.phone = "Le numéro de téléphone est requis.";
    if (!form.email.trim()) e.email = "L'adresse email est requise.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Adresse email invalide.";
    if (!form.requestType) e.requestType = "Sélectionnez un type de demande.";
    if (!form.details.trim()) e.details = "Veuillez décrire votre demande.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = [
      "Bonjour Youness, j'ai une demande depuis votre portfolio.",
      "",
      `Nom:\n${form.fullName}`,
      `Téléphone:\n${form.phone}`,
      `Email:\n${form.email}`,
      `Type de demande:\n${form.requestType}`,
      `Détails:\n${form.details}`,
      `Budget:\n${form.budget || "—"}`,
      `Délai:\n${form.deadline || "—"}`,
      `Méthode de contact préférée:\n${form.contactMethod}`,
    ].join("\n\n");
    const url = `${links.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="relative min-h-screen grain text-cream overflow-x-hidden">
      <Nav />

      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="blob bg-[color:var(--lime)]/30 w-[440px] h-[440px] -top-24 -left-24" />
        <div className="blob bg-[color:var(--orange)]/25 w-[420px] h-[420px] top-20 right-[-140px]" style={{ animationDelay: "-6s" }} />

        <div className="mx-auto max-w-[1120px] px-5 md:px-12 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-cream/75 hover:text-[color:var(--lime)] transition-colors reveal">
            <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
          </Link>

          <div className="mt-6 reveal">
            <span className="inline-block text-[11px] tracking-[0.22em] uppercase text-[color:var(--lime)] border border-soft rounded-full px-3 py-1.5 bg-card-soft">
              Contact
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
              Envoyer une <span className="bg-gradient-to-r from-[color:var(--lime)] via-[color:var(--green)] to-[color:var(--orange)] bg-clip-text text-transparent">demande</span>
            </h1>
            <p className="mt-4 max-w-[640px] text-base md:text-lg text-muted-soft leading-relaxed">
              Remplissez ce formulaire pour une demande de freelance, stage, collaboration ou projet design.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            {/* FORM */}
            <div className="rounded-[28px] border border-soft bg-card-soft p-6 md:p-10 glow-ring reveal" style={{ animationDelay: ".05s" }}>
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-[color:var(--lime)]/15 text-[color:var(--lime)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-cream">Merci pour votre demande.</h2>
                  <p className="mt-3 text-muted-soft">Je vous répondrai dès que possible.</p>
                  <p className="mt-2 text-sm text-muted-soft">Votre message WhatsApp s'est ouvert dans une nouvelle fenêtre — cliquez sur envoyer pour finaliser.</p>
                  <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => { setSent(false); setForm(initial); }}
                      className="inline-flex items-center gap-2 rounded-full border border-soft bg-card-soft px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-all"
                    >
                      Nouvelle demande
                    </button>
                    <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-5 py-3 text-sm font-semibold hover:bg-[color:var(--green)] transition-all">
                      Retour à l'accueil
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                  <Field label="Nom complet" required error={errors.fullName} delay={0}>
                    <input
                      type="text" value={form.fullName} onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Votre nom complet" className={inputCls}
                    />
                  </Field>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Numéro de téléphone / WhatsApp" required error={errors.phone} delay={1}>
                      <input
                        type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                        placeholder="Ex: +212 6 XX XX XX XX" className={inputCls}
                      />
                    </Field>
                    <Field label="Adresse email" required error={errors.email} delay={2}>
                      <input
                        type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                        placeholder="votre@email.com" className={inputCls}
                      />
                    </Field>
                  </div>

                  <Field label="Type de demande" required error={errors.requestType} delay={3}>
                    <select value={form.requestType} onChange={(e) => update("requestType", e.target.value)} className={inputCls}>
                      <option value="" disabled>Sélectionnez un type…</option>
                      {requestTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>

                  <Field label="Détails de votre demande" required error={errors.details} delay={4}>
                    <textarea
                      rows={5} value={form.details} onChange={(e) => update("details", e.target.value)}
                      placeholder="Expliquez votre projet, le type de design souhaité, le contenu, les dimensions, le style préféré, et toute information utile."
                      className={`${inputCls} resize-y min-h-[130px]`}
                    />
                  </Field>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Budget approximatif" delay={5}>
                      <input
                        type="text" value={form.budget} onChange={(e) => update("budget", e.target.value)}
                        placeholder="Ex: 200 DH, 500 DH, 1000 DH..." className={inputCls}
                      />
                    </Field>
                    <Field label="Délai souhaité" delay={6}>
                      <input
                        type="text" value={form.deadline} onChange={(e) => update("deadline", e.target.value)}
                        placeholder="Ex: urgent, 2 jours, 1 semaine..." className={inputCls}
                      />
                    </Field>
                  </div>

                  <Field label="Méthode de contact préférée" delay={7}>
                    <div className="flex flex-wrap gap-2">
                      {contactMethods.map((m) => (
                        <button
                          type="button" key={m} onClick={() => update("contactMethod", m)}
                          className={`rounded-full px-4 py-2.5 text-sm font-medium border transition-all ${
                            form.contactMethod === m
                              ? "bg-[color:var(--lime)] text-[color:var(--bg-main)] border-transparent"
                              : "bg-card-soft border-soft text-cream/85 hover:bg-white/10"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <button
                    type="submit"
                    className="mt-2 group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--lime)] text-[color:var(--bg-main)] px-7 py-4 text-sm font-semibold shadow-[0_20px_60px_-20px_rgba(182,214,90,0.6)] hover:bg-[color:var(--green)] hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-20px_rgba(182,214,90,0.75)] transition-all"
                  >
                    Envoyer ma demande <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="text-xs text-muted-soft leading-relaxed">
                    Vos informations seront utilisées uniquement pour répondre à votre demande.
                  </p>
                </form>
              )}
            </div>

            {/* SIDE — quick contact */}
            <aside className="rounded-[28px] border border-soft bg-card-soft p-6 md:p-8 h-fit reveal" style={{ animationDelay: ".15s" }}>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--lime)]">Contact direct</div>
              <h2 className="mt-2 text-2xl font-semibold text-cream">Une réponse rapide ?</h2>
              <p className="mt-2 text-sm text-muted-soft">Écrivez-moi sur le canal qui vous convient le mieux.</p>

              <div className="mt-6 grid gap-3">
                <QuickLink href={links.whatsapp} icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value={links.phoneDisplay} accent />
                <QuickLink href={links.email} icon={<Mail className="h-4 w-4" />} label="Email" value={links.emailDisplay} />
                <QuickLink href={links.phone} icon={<Phone className="h-4 w-4" />} label="Téléphone" value={links.phoneDisplay} />
                <QuickLink href={links.instagram} icon={<Instagram className="h-4 w-4" />} label="Instagram" value="@elm_youness01" />
                <QuickLink href="/" internal icon={<ExternalLink className="h-4 w-4" />} label="Portfolio" value="Voir mes projets" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl bg-[color:var(--bg-main)]/60 border border-soft px-4 py-3.5 text-cream placeholder:text-muted-soft/70 focus:outline-none focus:border-[color:var(--lime)]/60 focus:ring-2 focus:ring-[color:var(--lime)]/20 transition-all";

function Field({
  label, required, error, children, delay = 0,
}: {
  label: string; required?: boolean; error?: string; children: React.ReactNode; delay?: number;
}) {
  return (
    <label className="block reveal" style={{ animationDelay: `${0.08 * delay + 0.1}s` }}>
      <span className="text-sm font-medium text-cream/90">
        {label} {required && <span className="text-[color:var(--orange)]">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-[color:var(--orange)]">{error}</span>}
    </label>
  );
}

function QuickLink({
  href, icon, label, value, accent, internal,
}: { href: string; icon: React.ReactNode; label: string; value: string; accent?: boolean; internal?: boolean }) {
  const cls = `group flex items-center gap-3 rounded-2xl border border-soft px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[color:var(--lime)]/50 ${
    accent ? "bg-[color:var(--lime)]/10" : "bg-[color:var(--bg-main)]/40 hover:bg-white/5"
  }`;
  const inner = (
    <>
      <span className={`grid place-items-center h-9 w-9 rounded-full ${accent ? "bg-[color:var(--lime)] text-[color:var(--bg-main)]" : "bg-white/10 text-cream"}`}>
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-xs uppercase tracking-[0.18em] text-muted-soft">{label}</span>
        <span className="block text-sm text-cream truncate">{value}</span>
      </span>
      <ExternalLink className="h-4 w-4 text-muted-soft opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </>
  );
  if (internal) return <Link to={href} className={cls}>{inner}</Link>;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
      {inner}
    </a>
  );
}