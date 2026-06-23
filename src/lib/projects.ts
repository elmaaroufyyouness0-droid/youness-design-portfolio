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
import cvPdf from "@/assets/cv.pdf.asset.json";

import fb01 from "@/assets/football/football-champions-league-big-game-poster-01.jpg.asset.json";
import fb02 from "@/assets/football/morocco-goalkeeper-player-poster-02.jpg.asset.json";
import fb03 from "@/assets/football/morocco-match-day-cover-poster-03.jpg.asset.json";
import fb04 from "@/assets/football/morocco-qualified-winners-red-poster-04.png.asset.json";
import fb05 from "@/assets/football/morocco-qualified-final-green-poster-05.jpg.asset.json";
import fb06 from "@/assets/football/liverpool-lineup-poster-06.jpg.asset.json";
import fb08 from "@/assets/football/morocco-mali-match-day-poster-08.jpg.asset.json";
import fb09 from "@/assets/football/morocco-cameroon-match-day-poster-09.jpg.asset.json";
import fb10 from "@/assets/football/liverpool-match-day-red-poster-10.jpg.asset.json";
import fb12 from "@/assets/football/morocco-full-time-winners-poster-12.jpg.asset.json";
import fb07 from "@/assets/football/man-city-player-poster-07.jpg.jpg.asset.json";
import fb11 from "@/assets/football/liverpool-vs-city-match-day-poster-11.jpg.jpg.asset.json";

import manualFront from "@/assets/manual/manuel-cours-cover-front-design-01.jpg.jpg.asset.json";
import manualBack from "@/assets/manual/manuel-cours-cover-back-design-02.jpg.jpg.asset.json";
import manualBook from "@/assets/manual/manuel-cours-book-mockup-03.jpg.png.asset.json";
import manualStanding from "@/assets/manual/manuel-cours-standing-book-mockup-04.jpg.jpg.asset.json";
import manualBackMockup from "@/assets/manual/manuel-cours-back-cover-mockup-05.jpg.png.asset.json";

import brochureOutside from "@/assets/brochure/brochure-travel-outside-panels-01.jpg.jpg.asset.json";
import brochureInside from "@/assets/brochure/brochure-travel-inside-panels-02.jpg.jpg.asset.json";
import bugattiPoster from "@/assets/bugatti-chiron-car-poster-design-01.jpg.png.asset.json";

import ck01 from "@/assets/chikilita/chikilita-chocolate-packaging-description-01.jpg.jpg.asset.json";
import ck02 from "@/assets/chikilita/chikilita-chocolate-packaging-layout-front-back-02.jpg.jpeg.asset.json";
import ck03 from "@/assets/chikilita/chikilita-chocolate-advertising-poster-03.jpg.jpg.asset.json";
import ck04 from "@/assets/chikilita/chikilita-chocolate-product-mockup-04.jpg.jpg.asset.json";
import ck05 from "@/assets/chikilita/chikilita-chocolate-color-palette-05.jpg.jpg.asset.json";
import ck06 from "@/assets/chikilita/chikilita-chocolate-typography-06.jpg.jpg.asset.json";
import ck07 from "@/assets/chikilita/chikilita-chocolate-dieline-template-07.jpg.jpg.asset.json";
import ck08 from "@/assets/chikilita/chikilita-chocolate-realistic-box-mockup-08.jpg.jpg.asset.json";
import ck09 from "@/assets/chikilita/chikilita-chocolate-packaging-flat-preview-09.jpg.jpg.asset.json";

import as01 from "@/assets/asfar/asfar-beni-mellal-brand-cover-01.jpg.jpg.asset.json";
import as02 from "@/assets/asfar/asfar-beni-mellal-nature-logo-mockup-02.jpg_-_Copie.jpg.asset.json";
import as03 from "@/assets/asfar/asfar-beni-mellal-brand-description-03.jpg.jpg.asset.json";
import as05 from "@/assets/asfar/asfar-beni-mellal-logo-main-dark-05.jpg.jpg.asset.json";
import as06 from "@/assets/asfar/asfar-beni-mellal-logo-main-light-06.jpg.jpg.asset.json";
import as07 from "@/assets/asfar/asfar-beni-mellal-typography-07.jpg.jpg.asset.json";
import as08 from "@/assets/asfar/asfar-beni-mellal-color-palette-08.jpg.jpg.asset.json";
import as09 from "@/assets/asfar/asfar-beni-mellal-logo-variations-09.jpg_-_Copie.jpg.asset.json";
import as10 from "@/assets/asfar/asfar-beni-mellal-logo-construction-10.jpg.jpg.asset.json";
import as12 from "@/assets/asfar/asfar-beni-mellal-business-card-12.jpg.jpg.asset.json";

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
  gallery?: { url: string; alt: string }[];
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
    gallery: [
      { url: as01.url, alt: "Asfar Beni Mellal — brand cover" },
      { url: as03.url, alt: "Asfar Beni Mellal — brand description" },
      { url: as10.url, alt: "Asfar Beni Mellal — logo construction" },
      { url: as06.url, alt: "Asfar Beni Mellal — main logo (light)" },
      { url: as05.url, alt: "Asfar Beni Mellal — main logo (dark)" },
      { url: as09.url, alt: "Asfar Beni Mellal — logo variations" },
      { url: as08.url, alt: "Asfar Beni Mellal — color palette" },
      { url: as07.url, alt: "Asfar Beni Mellal — typography" },
      { url: as02.url, alt: "Asfar Beni Mellal — nature logo mockup" },
      { url: as12.url, alt: "Asfar Beni Mellal — business card" },
    ],
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
    cover: brochureOutside.url,
    alt: "Travel brochure print design",
    description:
      "Conception d’une brochure touristique destinée à présenter une offre de voyage. Le projet met en avant la mise en page, l’organisation de l’information, le choix des images, des couleurs et la hiérarchie visuelle.",
    deliverables: "Face extérieure de la brochure, face intérieure de la brochure.",
    size: "md",
    gallery: [
      { url: brochureOutside.url, alt: "Travel brochure outside panels" },
      { url: brochureInside.url, alt: "Travel brochure inside panels" },
    ],
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
    gallery: [
      { url: ck01.url, alt: "Chikilita packaging concept description" },
      { url: ck02.url, alt: "Chikilita packaging layout — front and back" },
      { url: ck03.url, alt: "Chikilita advertising poster" },
      { url: ck04.url, alt: "Chikilita product mockup" },
      { url: ck05.url, alt: "Chikilita color palette" },
      { url: ck06.url, alt: "Chikilita typography" },
      { url: ck07.url, alt: "Chikilita dieline template" },
      { url: ck08.url, alt: "Chikilita realistic box mockup" },
      { url: ck09.url, alt: "Chikilita packaging flat preview" },
    ],
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
    cover: manualFront.url,
    alt: "Manuel de cours cover design",
    description:
      "Création d’une couverture pour un manuel de cours professionnel. Le projet met l’accent sur la composition, la lisibilité, la hiérarchie de l’information et la présentation du support imprimé à travers différents mockups.",
    deliverables: "Front cover, back cover, book mockup, standing book mockup et back cover mockup.",
    size: "md",
    gallery: [
      { url: manualFront.url, alt: "Manuel de cours front cover design" },
      { url: manualBack.url, alt: "Manuel de cours back cover design" },
      { url: manualBook.url, alt: "Manuel de cours book mockup" },
      { url: manualStanding.url, alt: "Manuel de cours standing book mockup" },
      { url: manualBackMockup.url, alt: "Manuel de cours back cover mockup" },
    ],
  },
  {
    slug: "bugatti-chiron-car-poster",
    title: "Bugatti Chiron Car Poster",
    category: "Poster Design",
    filter: "Posters",
    type: "Academic Project",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    cover: bugattiPoster.url,
    alt: "Bugatti Chiron poster design",
    description:
      "Création d’une affiche automobile pour la Bugatti Chiron. Le projet met en avant un style dynamique, une composition moderne, un contraste visuel fort et une présentation inspirée de la communication publicitaire automobile.",
    deliverables: "Poster design final.",
    size: "md",
    gallery: [{ url: bugattiPoster.url, alt: "Bugatti Chiron car poster design" }],
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
    gallery: [
      { url: fb01.url, alt: "Champions League Big Game poster" },
      { url: fb03.url, alt: "Morocco vs Senegal — Match Day cover poster" },
      { url: fb09.url, alt: "Morocco vs Cameroon — Battle of the Lions" },
      { url: fb08.url, alt: "Morocco vs Mali — Match Day" },
      { url: fb04.url, alt: "Morocco Qualified — red poster" },
      { url: fb05.url, alt: "Morocco Qualified to the Final — green poster" },
      { url: fb02.url, alt: "Chouaib Bellarouch — Goalkeeper player poster" },
      { url: fb07.url, alt: "Erling Haaland — Manchester City player poster" },
      { url: fb06.url, alt: "Liverpool Lineup poster" },
      { url: fb10.url, alt: "Liverpool Matchday poster" },
      { url: fb11.url, alt: "Liverpool vs Manchester City match day poster" },
      { url: fb12.url, alt: "Morocco Full Time 3-0 poster" },
    ],
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
  email: "mailto:elmaaroufy11youness@gmail.com",
  whatsapp: "https://wa.me/212654835887",
  phone: "tel:+212654835887",
  phoneDisplay: "+212 654 835 887",
  emailDisplay: "elmaaroufy11youness@gmail.com",
  location: "Béni Mellal, Maroc",
  linkedin: "#",
  behance: "#",
  instagram: "https://www.instagram.com/elm_youness01",
  cv: cvPdf.url,
};
