import asfar from "@/assets/asfar.jpg.asset.json";
import serfer from "@/assets/serfer.jpg.asset.json";
import brochure from "@/assets/brochure.jpg.asset.json";
import chikilita from "@/assets/chikilita.jpg.asset.json";
import appelo from "@/assets/appelo.jpg.asset.json";
import bugatti from "@/assets/bugatti.jpg.asset.json";
import football from "@/assets/football.jpg.asset.json";
import eid from "@/assets/eid.jpg.asset.json";
import jeux from "@/assets/jeux.jpg.asset.json";
import ceremonie from "@/assets/ceremonie.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  category: string;
  filter: "Branding" | "Packaging" | "Print" | "Posters" | "Events";
  type: string;
  tools: string[];
  cover: string | null;
  alt: string;
  description: string;
  deliverables: string;
  size: "lg" | "md" | "sm";
};

export const projects: Project[] = [
  {
    slug: "asfar-beni-mellal",
    title: "Asfar Beni Mellal",
    category: "Brand Identity",
    filter: "Branding",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: asfar.url,
    alt: "Asfar Beni Mellal brand identity mockup",
    description:
      "Création d’une identité visuelle pour une agence de voyage basée à Béni Mellal. Le projet comprend la conception du logo, la palette de couleurs, la typographie, le système graphique, les déclinaisons du logo et plusieurs applications de marque.",
    deliverables:
      "Logo principal, variantes du logo, palette de couleurs, typographie, pattern, carte de visite, t-shirt, casquette, bouteille, bus mockup et présentation finale.",
    size: "lg",
  },
  {
    slug: "serfer-delivery",
    title: "Serfer Delivery",
    category: "Brand Identity",
    filter: "Branding",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: serfer.url,
    alt: "Serfer Delivery brand identity design",
    description:
      "Création d’une identité visuelle pour une marque de livraison. Le projet présente un univers graphique moderne avec logo, couleurs, typographie, icône, patterns et applications sur différents supports professionnels.",
    deliverables:
      "Logo principal, variantes du logo, icônes, palette de couleurs, typographie, patterns, carte professionnelle, van mockup, signage, brand applications et présentation finale.",
    size: "lg",
  },
  {
    slug: "travel-brochure",
    title: "Travel Brochure",
    category: "Print Design",
    filter: "Print",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: brochure.url,
    alt: "Travel brochure print design",
    description:
      "Conception d’une brochure touristique destinée à présenter une offre de voyage. Le projet met en avant la mise en page, l’organisation de l’information, le choix des images, des couleurs et la hiérarchie visuelle.",
    deliverables: "Face extérieure de la brochure, face intérieure de la brochure.",
    size: "md",
  },
  {
    slug: "chikilita-chocolate-packaging",
    title: "Chikilita Chocolate Packaging",
    category: "Packaging Design",
    filter: "Packaging",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: chikilita.url,
    alt: "Chikilita chocolate packaging mockup",
    description:
      "Conception d’un packaging pour une marque de chocolat au lait. Le projet comprend l’identité graphique du produit, la palette de couleurs, la typographie, le design de l’emballage, le gabarit technique et des mockups de présentation.",
    deliverables:
      "Description du concept, packaging layout, poster publicitaire, mockup produit, palette de couleurs, typographie, dieline template, realistic box mockup et flat preview.",
    size: "md",
  },
  {
    slug: "appelo-juice-packaging",
    title: "Appelo Juice Packaging",
    category: "Packaging Design",
    filter: "Packaging",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: appelo.url,
    alt: "Appelo juice packaging design",
    description:
      "Conception d’un packaging pour une marque de jus de pomme. Le projet présente le design du carton, l’identité visuelle du produit, les déclinaisons graphiques, la palette de couleurs et plusieurs visuels publicitaires.",
    deliverables:
      "Packaging layout, posters publicitaires, lifestyle mockup, introduction page, front packaging, 3D carton mockup, brand color palette et logo variations.",
    size: "md",
  },
  {
    slug: "manuel-cours-cover",
    title: "Manuel de Cours Cover",
    category: "Print Design",
    filter: "Print",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: null,
    alt: "Manuel de cours cover design",
    description:
      "Création d’une couverture pour un manuel de cours professionnel. Le projet met l’accent sur la composition, la lisibilité, la hiérarchie de l’information et la présentation du support imprimé à travers différents mockups.",
    deliverables: "Front cover, back cover, book mockup, standing book mockup et back cover mockup.",
    size: "sm",
  },
  {
    slug: "bugatti-chiron-car-poster",
    title: "Bugatti Chiron Car Poster",
    category: "Poster Design",
    filter: "Posters",
    type: "Academic Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    cover: bugatti.url,
    alt: "Bugatti Chiron poster design",
    description:
      "Création d’une affiche automobile pour la Bugatti Chiron. Le projet met en avant un style dynamique, une composition moderne, un contraste visuel fort et une présentation inspirée de la communication publicitaire automobile.",
    deliverables: "Poster design final.",
    size: "md",
  },
  {
    slug: "football-posters",
    title: "Football Posters Collection",
    category: "Sports Poster Design",
    filter: "Posters",
    type: "Personal / Academic Design Practice",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    cover: football.url,
    alt: "Football poster design collection",
    description:
      "Collection d’affiches sportives autour du football, comprenant des visuels de match day, player poster, qualified poster, lineup poster et full time result. Le projet explore la composition, la retouche photo, les effets visuels, la typographie sportive et l’impact graphique.",
    deliverables:
      "Champions League poster, player posters, Morocco match day posters, qualified posters, lineup poster, Liverpool match day poster, Manchester City poster et full time poster.",
    size: "md",
  },
  {
    slug: "eid-posters",
    title: "Eid Posters",
    category: "Event Poster Design",
    filter: "Events",
    type: "Academic / Personal Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    cover: eid.url,
    alt: "Eid poster design",
    description:
      "Création de deux affiches pour les occasions de l’Aïd. Le projet met en avant la composition visuelle, l’ambiance événementielle, la typographie arabe et l’utilisation des couleurs et éléments graphiques adaptés au thème.",
    deliverables: "Eid Al Adha poster, Eid Mubarak lantern poster.",
    size: "sm",
  },
  {
    slug: "jeux-societe-poster",
    title: "Journée des Jeux de Société Poster",
    category: "Event Poster Design",
    filter: "Events",
    type: "Academic Project",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: jeux.url,
    alt: "Jeux de société event poster",
    description:
      "Création d’une affiche événementielle pour une journée des jeux de société. Le projet présente l’information de manière claire et visuelle, avec une composition simple, des illustrations de jeux et une mise en page adaptée à un événement scolaire ou associatif.",
    deliverables: "Event poster design final.",
    size: "sm",
  },
  {
    slug: "ceremonie-remise-diplomes-poster",
    title: "Cérémonie de Remise des Diplômes Poster",
    category: "Event Poster Design",
    filter: "Events",
    type: "Academic Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    cover: ceremonie.url,
    alt: "Cérémonie de remise des diplômes poster",
    description:
      "Création d’une affiche pour une cérémonie de remise des diplômes. Le projet utilise une composition formelle et élégante, avec une mise en page centrée sur l’événement, les informations principales et une présentation visuelle adaptée à une communication institutionnelle.",
    deliverables: "Ceremony poster design final.",
    size: "md",
  },
];

export const links = {
  email: "mailto:contact@elmaaroufy.com",
  whatsapp: "https://wa.me/212600000000",
  linkedin: "https://www.linkedin.com/",
  behance: "https://www.behance.net/",
  instagram: "https://www.instagram.com/",
  cv: "#",
};
