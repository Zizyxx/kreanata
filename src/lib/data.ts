// Mock data for Kreanata Production House & Creative Visual Studio

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  linkText?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "event",
    number: "01",
    title: "Event documentation",
    description: "Full multi-camera coverage, drone documentation, and same-day highlights for festivals, conferences, and exclusive events.",
  },
  {
    id: "photo",
    number: "02",
    title: "Commercial photography",
    description: "High-end commercial product shoots, architectural captures, and editorial lookbooks engineered to elevate brand prestige.",
  },
  {
    id: "video",
    number: "03",
    title: "Video production",
    description: "Broadcast-quality TVCs, brand films, and narrative documentaries from concept, scriptwriting, and directing to color grading.",
  },
  {
    id: "social",
    number: "04",
    title: "Short-form & social content",
    description: "High-retention vertical videos, viral campaign assets, and social storytelling tailored for modern digital algorithms.",
  },
  {
    id: "branding",
    number: "05",
    title: "Visual identity & branding",
    description: "Comprehensive visual systems, bespoke typography, brand books, packaging design, and marketing collaterals.",
  },
  {
    id: "web",
    number: "06",
    title: "Web design & development",
    description: "High-performance, interactive web platforms built with Next.js, bespoke animations, and conversion-focused UX architecture.",
  },
];

export interface ProjectItem {
  id: number;
  slug: string;
  pillar: string;
  title: string;
  category: string;
  client: string;
  image: string;
  link: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    slug: "fotografi",
    pillar: "01",
    title: "Fotografi",
    category: "Fotografi",
    client: "Katalog & Lookbook",
    image: "https://res.cloudinary.com/xidvgvul/image/upload/w_2400,c_limit,f_auto,q_auto/v1794042146/drinks-11.jpg",
    link: "/projects/fotografi",
  },
  {
    id: 2,
    slug: "videografi",
    pillar: "02",
    title: "Videografi",
    category: "Videografi",
    client: "Iklan & Aftermovie",
    image: "https://res.cloudinary.com/xidvgvul/image/upload/w_2400,c_limit,f_auto,q_auto/v1794038566/f5oooebtm9sjbepkzieh.webp",
    link: "/projects/videografi",
  },
  {
    id: 4,
    slug: "website",
    pillar: "03",
    title: "Website",
    category: "Website",
    client: "Platform Interaktif & Web",
    image: "/web-adia.webp",
    link: "/projects/website",
  },
];
