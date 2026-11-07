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
