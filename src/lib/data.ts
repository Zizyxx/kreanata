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
    description: "Full multi-camera 4K/6K coverage, drone cinematography, and same-day highlights for festivals, conferences, and exclusive events.",
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
    title: "Cinematic video production",
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
  title: string;
  category: string;
  client: string;
  image: string;
  link: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Kultura Roasters Visual Identity",
    category: "Branding",
    client: "Kultura Coffee Co.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "Aura Noir Editorial Lookbook",
    category: "Photography",
    client: "Maison De Mode",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Luminaire Chrono Product Campaign",
    category: "Commercial Film",
    client: "Luminaire Geneve",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "The Art of Cinematography Monograph",
    category: "Editorial & Print",
    client: "Nusantara Press",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];



export interface TestimonialItem {
  id: number;
  rating: string;
  quote: string;
  author: string;
  company: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    rating: "4.95",
    quote: "Kreanata transformed our brand presence with cinema-grade event documentation and a stunning digital platform. Their eye for detail and commitment to quality is unmatched in the industry.",
    author: "ADITYA PRATAMA",
    company: "Managing Director, Artha Group",
  },
  {
    id: 2,
    rating: "4.90",
    quote: "From initial storyboard to final color grading, the team delivered a television commercial that exceeded our expectations and drove tangible engagement.",
    author: "CLARISSA WIJAYA",
    company: "Brand Lead, Nusantara Tech",
  },
  {
    id: 3,
    rating: "5.00",
    quote: "Their multidisciplinary ability to handle photography, film production, and high-performance web development under one roof saved us months of coordination.",
    author: "MARCUS CHEN",
    company: "Founder, Atelier Studio",
  },
];

export interface EventItem {
  id: number;
  category: string;
  date: string;
  title: string;
  location: string;
  image: string;
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    category: "MUSIC FESTIVAL",
    date: "OCTOBER 2024",
    title: "Soundwave Electronic Music Festival Coverage",
    location: "GBK Senayan, Jakarta",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "TECH SUMMIT",
    date: "OCTOBER 2024",
    title: "Nusantara Digital & Creative Leaders Conference",
    location: "ICE BSD, Tangerang",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "BRAND LAUNCH",
    date: "OCTOBER 2024",
    title: "Aura Luxury Fashion & Design Premiere",
    location: "SCBD, Jakarta Selatan",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "CULTURAL GALA",
    date: "OCTOBER 2024",
    title: "Jakarta Visual Arts & Cinematography Showcase",
    location: "Taman Ismail Marzuki, Jakarta",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const clientLogos = [
  { name: "awwwards.", font: "font-serif tracking-tight" },
  { name: "fwa.", font: "font-sans font-bold tracking-tight" },
  { name: "cssda.", font: "font-sans font-semibold tracking-tighter" },
  { name: "behance.", font: "font-sans font-black tracking-wider" },
];
