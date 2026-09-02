import { createFileRoute } from "@tanstack/react-router";
import { AppLoader } from "@/components/artboard/AppLoader";
import { GlobalNav } from "@/components/artboard/GlobalNav";
import { ScrollProgress } from "@/components/artboard/ScrollProgress";
import { BackToTop } from "@/components/artboard/BackToTop";
import { HeroArtboard } from "@/components/artboard/HeroArtboard";
import { AboutArtboard } from "@/components/artboard/AboutArtboard";
import { EducationArtboard } from "@/components/artboard/EducationArtboard";
import { SkillsArtboard } from "@/components/artboard/SkillsArtboard";
import { WorksIndex } from "@/components/artboard/WorksIndex";
import { ProjectArtboard } from "@/components/artboard/ProjectArtboard";
import { ContactArtboard } from "@/components/artboard/ContactArtboard";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EL MAAROUFY YOUNESS — Portfolio Design Graphique" },
      {
        name: "description",
        content:
          "Portfolio continu de EL MAAROUFY YOUNESS : identité visuelle, packaging, print design, affiches et réseaux sociaux, présentés planche par planche.",
      },
      { property: "og:title", content: "EL MAAROUFY YOUNESS — Portfolio Design Graphique" },
      {
        property: "og:description",
        content:
          "Identité visuelle, packaging, print design et affiches — un portfolio en défilement continu inspiré des planches Illustrator.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen grain text-cream overflow-x-clip">
      <AppLoader />
      <ScrollProgress />
      <GlobalNav />

      <main>
        <HeroArtboard count={projects.length} />
        <AboutArtboard count={projects.length} />
        <EducationArtboard />
        <SkillsArtboard />
        <WorksIndex items={projects} />

        {projects.map((p, i) => (
          <ProjectArtboard key={p.slug} p={p} index={i} total={projects.length} />
        ))}

        <ContactArtboard />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
