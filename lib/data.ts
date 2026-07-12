export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Subsidiary = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  accent: "green" | "blue" | "orange" | "amber";
  accentClass: string;
  glowClass: string;
  logoSrc: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export type CoreValue = {
  title: string;
  description: string;
};

export type Partner = {
  name: string;
  shortLabel: string;
  logoSrc: string;
};

export type GalleryItem = {
  id: string;
  category: "trade" | "mining";
  title: string;
  alt: string;
  imageSrc?: string;
  /** Used when imageSrc is not yet available */
  placeholderTone: string;
};

export type ContactInfo = {
  address: string;
  website: string;
  websiteUrl: string;
  email: string;
  phone: string;
  phoneHref: string;
};

export const siteConfig = {
  name: "Sedic Group",
  tagline: "The World's African Business Partner",
  description:
    "Sedic Group is a multi-sectoral business consortium with diversified interests spanning the extractive industry, commodity trading, consumer goods distribution, and Strategic Business Advisory. Established over 10 years ago, the group operates out of its headquarters in Lagos, Nigeria.",
  url: "https://www.sedicgroup.com",
  ogImage: "/images/og-image.png",
  logo: "/images/sedic-logo-dark.png",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Subsidiaries", href: "#subsidiaries" },
  { label: "Core Values", href: "#values" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Corporate Profile",
  headline: "The World's African Business Partner",
  supporting:
    "A multi-sectoral consortium bridging African opportunity with global capital, technology, knowledge, and infrastructure.",
  primaryCta: { label: "Get in Touch", href: "#contact" },
  secondaryCta: { label: "Explore Our Group", href: "#subsidiaries" },
} as const;

export const aboutContent = {
  heading: "Sedic Group",
  subheading: "The World's African Business Partner",
  paragraphs: [
    "Sedic Group is a multi-sectoral business consortium with diversified interests spanning the extractive industry, commodity trading, consumer goods distribution, and Strategic Business Advisory. Established over 10 years ago, the group operates out of its headquarters in Lagos, Nigeria.",
    "At Sedic Group, we recognize that Africa's true potential is yet to be realized and are committed to strategic and targeted intervention. Our mission involves bridging critical resource deficits across four key areas: capital, technology, knowledge, and infrastructure. We view the development of local human resources and the cultivation of strong global partnerships as key catalysts for advancing Africa's position as the world's next business frontier.",
  ],
} as const;

export const stats: Stat[] = [
  { value: "10+", label: "Years of Excellence" },
  { value: "4", label: "Subsidiaries" },
  { value: "2,000+", label: "Customers" },
  { value: "3", label: "Continents Reached" },
];

export const missionVision = {
  mission: {
    title: "Mission",
    statement:
      "To be the world's African business partner, connecting the continent's opportunities to global capital.",
    imageAlt: "African city skyline at dusk",
    placeholderTone: "from-navy-800 to-brand-blue",
  },
  vision: {
    title: "Vision",
    statement:
      "To bring transparency to opaque markets; de-risking investments through business intelligence and practical experience.",
    imageAlt: "Africa at night satellite view",
    placeholderTone: "from-navy-900 to-navy-700",
  },
} as const;

export const subsidiaries: Subsidiary[] = [
  {
    id: "development",
    name: "Sedic Development Company",
    shortName: "Development",
    tagline: "Projects & Advisory",
    accent: "green",
    accentClass: "text-accent-green",
    glowClass: "hover:border-accent-green/40 hover:shadow-[0_0_24px_-4px_rgb(107_170_44_/0.35)]",
    logoSrc: "/images/subsidiaries/development.png",
    paragraphs: [
      "As the pioneer subsidiary and engine room of the group, Sedic Development drives strategic growth and intelligence. Its core expertise is Strategic Business Advisory, Capital Sourcing, and Project Development (from concept to completion).",
      "It is the lead generator and business intelligence arm of the group, structuring high-level partnerships and forming strategic alliances. Sedic Development drives international business by leveraging a broad network of government and corporate partners across the Americas, Asia, and the Middle East.",
    ],
    imageSrc: "/images/subsidiary-development.jpg",
    imageAlt: "Executive lounge overlooking a city skyline",
  },
  {
    id: "trade",
    name: "Sedictrade Co Limited",
    shortName: "Trade",
    tagline: "Trade & Export",
    accent: "blue",
    accentClass: "text-brand-blue-bright",
    glowClass: "hover:border-brand-blue/40 hover:shadow-[0_0_24px_-4px_rgb(37_99_166_/0.35)]",
    logoSrc: "/images/subsidiaries/trade.png",
    paragraphs: [
      "This subsidiary is the group's focal point for trade, distribution, and route-to-market services. It focuses on the export of metals, minerals, and agricultural produce. Sedictrade has extensive experience distributing consumer goods in the 'Masstige' category, partnering with the world's largest beverage companies.",
      "The company offers extensive route-to-market services: market intelligence, brand positioning, and consumer insights. With over 2,000 customers across wholesale, retail, and e-commerce channels, Sedictrade demonstrates the capacity to unearth opportunities for international brands, particularly in Nigeria and West Africa.",
    ],
    imageSrc: "/images/subsidiary-trade.jpg",
    imageAlt: "Stacked commodity sacks in a warehouse",
  },
  {
    id: "haul",
    name: "Sedic Haul Limited",
    shortName: "Haul",
    tagline: "Logistics Service",
    accent: "orange",
    accentClass: "text-accent-orange",
    glowClass: "hover:border-accent-orange/40 hover:shadow-[0_0_24px_-4px_rgb(232_99_44_/0.35)]",
    logoSrc: "/images/subsidiaries/haul.png",
    paragraphs: [
      "Sedic Haul is the group's dedicated logistics service provider, specializing in local transportation of both commodities and finished goods. The company provides logistical support for the entire group, including trucking of bulk cargo and supplying barges for marine freight services.",
    ],
    imageSrc: "/images/subsidiary-haul.jpg",
    imageAlt: "Sedic Haul logistics truck on site",
  },
  {
    id: "extractive",
    name: "Transnational Extractive Co",
    shortName: "Extractive",
    tagline: "Mining, Oil & Gas",
    accent: "amber",
    accentClass: "text-accent-orange",
    glowClass: "hover:border-accent-orange/40 hover:shadow-[0_0_24px_-4px_rgb(232_99_44_/0.4)]",
    logoSrc: "/images/subsidiaries/extractive.jpg",
    paragraphs: [
      "Transnational Extractive Co is dedicated to the group's core extractive business interests. It engages in the mining and production of solid minerals, including lead/zinc, lithium, copper, and gemstones. In oil and gas, Transnational participates as a financial and technical partner in on-land and shallow water oil assets.",
    ],
    imageSrc: "/images/subsidiary-extractive.jpg",
    imageAlt: "Aerial view of an extractive mining site",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description: "We conduct business with honesty and accountability at every level.",
  },
  {
    title: "Transparency",
    description: "We bring clarity to complex markets and open partnerships.",
  },
  {
    title: "Innovative-Thinking",
    description: "We challenge conventions to unlock Africa's next opportunities.",
  },
  {
    title: "Service",
    description: "We put partners, communities, and outcomes at the center of our work.",
  },
];

export const philosophy = {
  heading: "Our Philosophy",
  quote:
    "At Sedic Group, we thrive on raising the bar, empowering our people to become leaders of remarkable vision and confidence. We believe true success is built on two pillars: strong relationships and consistency of purpose. We remain committed to diversity, inclusiveness, and international business excellence.",
} as const;

export const partnersIntro = {
  heading: "Our Partners",
  supporting:
    "Trusted by leading global brands, financial institutions, and government partners across Africa, Asia, Europe, and the Americas.",
} as const;

export const partners: Partner[] = [
  { name: "NNPC", shortLabel: "NNPC", logoSrc: "/images/partners/nnpc.png" },
  {
    name: "ProvidusBank",
    shortLabel: "Providus",
    logoSrc: "/images/partners/providus.png",
  },
  {
    name: "AB InBev",
    shortLabel: "AB InBev",
    logoSrc: "/images/partners/abinbev.png",
  },
  {
    name: "Beam Suntory",
    shortLabel: "Beam Suntory",
    logoSrc: "/images/partners/beam-suntory.png",
  },
  {
    name: "Access Bank",
    shortLabel: "Access",
    logoSrc: "/images/partners/access.png",
  },
  {
    name: "Sohar International",
    shortLabel: "Sohar",
    logoSrc: "/images/partners/sohar.png",
  },
  { name: "Diageo", shortLabel: "Diageo", logoSrc: "/images/partners/diageo.png" },
  {
    name: "National Sugar Development Council",
    shortLabel: "NSDC",
    logoSrc: "/images/partners/nsdc.png",
  },
  {
    name: "Coca-Cola",
    shortLabel: "Coca-Cola",
    logoSrc: "/images/partners/coca-cola.png",
  },
  {
    name: "Guangzhou Light Holdings (GZLI)",
    shortLabel: "GZLI",
    logoSrc: "/images/partners/gzli.png",
  },
  {
    name: "Pernod Ricard",
    shortLabel: "Pernod",
    logoSrc: "/images/partners/pernod-ricard.png",
  },
  {
    name: "China Minmetals Corporation",
    shortLabel: "Minmetals",
    logoSrc: "/images/partners/minmetals.png",
  },
  {
    name: "Bank of Agriculture",
    shortLabel: "BoA",
    logoSrc: "/images/partners/boa.png",
  },
  {
    name: "Government of Enugu State",
    shortLabel: "Enugu State",
    logoSrc: "/images/partners/enugu.png",
  },
  {
    name: "United Bank for Africa (UBA)",
    shortLabel: "UBA",
    logoSrc: "/images/partners/uba.png",
  },
];

export const galleryIntro = {
  heading: "Gallery",
  supporting: "A glimpse into our trade and mining operations across the group.",
} as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "trade-1",
    category: "trade",
    title: "Forklift Operations",
    alt: "Operator driving a CAT forklift on site",
    imageSrc: "/images/gallery/trade/trade-1.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-800 to-brand-blue",
  },
  {
    id: "trade-2",
    category: "trade",
    title: "Material Handling",
    alt: "Yellow CAT forklift inside a warehouse",
    imageSrc: "/images/gallery/trade/trade-2.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-700 to-navy-900",
  },
  {
    id: "trade-3",
    category: "trade",
    title: "On-Site Team",
    alt: "Trade operations team in high-visibility vests",
    imageSrc: "/images/gallery/trade/trade-3.jpg",
    placeholderTone: "bg-gradient-to-br from-brand-blue to-navy-800",
  },
  {
    id: "trade-4",
    category: "trade",
    title: "Loading & Distribution",
    alt: "Workers at a warehouse loading dock with freight truck",
    imageSrc: "/images/gallery/trade/trade-4.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-800 to-brand-blue",
  },
  {
    id: "trade-5",
    category: "trade",
    title: "Commodity Storage",
    alt: "Stacked commodity sacks inside a warehouse",
    imageSrc: "/images/gallery/trade/trade-5.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-700 to-navy-900",
  },
  {
    id: "mining-1",
    category: "mining",
    title: "Mineral Inspection",
    alt: "Hands inspecting a raw metallic mineral ore sample",
    imageSrc: "/images/gallery/mining/mining-1.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-900 to-accent-orange/40",
  },
  {
    id: "mining-2",
    category: "mining",
    title: "Field Drilling",
    alt: "Workers using a pneumatic drill at a mining site",
    imageSrc: "/images/gallery/mining/mining-2.jpg",
    placeholderTone: "bg-gradient-to-br from-accent-orange/50 to-navy-800",
  },
  {
    id: "mining-3",
    category: "mining",
    title: "Open-Pit Site",
    alt: "Aerial view of an open-pit mining operation with excavator",
    imageSrc: "/images/gallery/mining/mining-3.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-800 to-navy-950",
  },
  {
    id: "mining-4",
    category: "mining",
    title: "Aerial Mine Site",
    alt: "Aerial view of a terraced mining mound surrounded by forest",
    imageSrc: "/images/gallery/mining/mining-4.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-900 to-accent-orange/40",
  },
  {
    id: "mining-5",
    category: "mining",
    title: "Excavator Operations",
    alt: "Yellow Liebherr excavator working on a rocky mining slope",
    imageSrc: "/images/gallery/mining/mining-5.jpg",
    placeholderTone: "bg-gradient-to-br from-navy-800 to-navy-950",
  },
];

export const contactInfo: ContactInfo = {
  address: "2, Idowu Taylor Street, Victoria Island, Lagos, Nigeria",
  website: "www.sedicgroup.com",
  websiteUrl: "https://www.sedicgroup.com",
  email: "business@sedicgroup.com",
  phone: "(+234) 812 191 2270",
  phoneHref: "tel:+2348121912270",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" as const },
  { label: "X / Twitter", href: "https://x.com/", icon: "x" as const },
] as const;
