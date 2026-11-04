// Services data
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // lucide icon name
  gridClass: string; // tailwind grid spanning classes
}

export const services: Service[] = [
  {
    id: 1,
    title: "Dokumentasi Acara",
    description:
      "Tangkap setiap momen berharga dari acara Anda dengan dokumentasi profesional yang berkesan — dari persiapan hingga penutupan.",
    icon: "Camera",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Fotografi Komersial",
    description:
      "Visual produk & komersial berkualitas tinggi yang memikat audiens dan meningkatkan daya jual brand Anda.",
    icon: "Aperture",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Produksi Video & Sinematik",
    description:
      "Produksi video sinematik dari konsep hingga final cut — company profile, TVC, dokumenter, dan film pendek.",
    icon: "Clapperboard",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Konten Media Sosial",
    description:
      "Konten visual kreatif dan video pendek yang engaging untuk memperkuat kehadiran brand Anda di dunia digital.",
    icon: "Share2",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Desain Grafis & Visual Identity",
    description:
      "Dari logo, brand guideline, hingga materi promosi — kami ciptakan identitas visual yang kuat dan konsisten.",
    icon: "Palette",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Web Design & Development",
    description:
      "Website modern, responsif, dan berkinerja tinggi yang dirancang untuk mengkonversi pengunjung menjadi klien.",
    icon: "Globe",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

// Portfolio data
export type PortfolioCategory = "all" | "photography" | "video" | "branding";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  image: string;
  aspectRatio: "video" | "portrait"; // video = 16:9, portrait = 4:5
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Grand Wedding Celebration",
    category: "photography",
    categoryLabel: "Photography",
    image:
      "https://placehold.co/800x450/1a1a1a/666666?text=Grand+Wedding+Celebration",
    aspectRatio: "video",
  },
  {
    id: 2,
    title: "Brand Identity — Artisan Coffee",
    category: "branding",
    categoryLabel: "Branding & Web",
    image:
      "https://placehold.co/400x500/1a1a1a/666666?text=Brand+Identity+Artisan+Coffee",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    title: "Corporate Event Highlight",
    category: "video",
    categoryLabel: "Video & Event",
    image:
      "https://placehold.co/800x450/1a1a1a/666666?text=Corporate+Event+Highlight",
    aspectRatio: "video",
  },
  {
    id: 4,
    title: "Luxury Product Catalog",
    category: "photography",
    categoryLabel: "Photography",
    image:
      "https://placehold.co/400x500/1a1a1a/666666?text=Luxury+Product+Catalog",
    aspectRatio: "portrait",
  },
  {
    id: 5,
    title: "Cinematic Company Profile",
    category: "video",
    categoryLabel: "Video & Event",
    image:
      "https://placehold.co/800x450/1a1a1a/666666?text=Cinematic+Company+Profile",
    aspectRatio: "video",
  },
  {
    id: 6,
    title: "Restaurant Web & Visual",
    category: "branding",
    categoryLabel: "Branding & Web",
    image:
      "https://placehold.co/400x500/1a1a1a/666666?text=Restaurant+Web+%26+Visual",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    title: "Music Festival Documentation",
    category: "video",
    categoryLabel: "Video & Event",
    image:
      "https://placehold.co/800x450/1a1a1a/666666?text=Music+Festival+Documentation",
    aspectRatio: "video",
  },
  {
    id: 8,
    title: "Fashion Lookbook",
    category: "photography",
    categoryLabel: "Photography",
    image:
      "https://placehold.co/400x500/1a1a1a/666666?text=Fashion+Lookbook",
    aspectRatio: "portrait",
  },
];

// Portfolio filter tabs
export const portfolioTabs: { label: string; value: PortfolioCategory }[] = [
  { label: "Semua", value: "all" },
  { label: "Photography", value: "photography" },
  { label: "Video & Event", value: "video" },
  { label: "Branding & Web", value: "branding" },
];

// Stats data
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "200+", label: "Proyek Selesai" },
  { value: "98%", label: "Kepuasan Klien" },
  { value: "50K+", label: "Produksi Visual" },
  { value: "5+", label: "Tahun Pengalaman" },
];

// Marquee items
export const marqueeItems: string[] = [
  "Event Documentation",
  "Commercial Photography",
  "Cinematic Video Production",
  "Social Media Content",
  "Graphic Design",
  "Web Development",
];

// Navigation links
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Social links
export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/kreanata" },
  { label: "YouTube", href: "https://youtube.com/@kreanata" },
  { label: "LinkedIn", href: "https://linkedin.com/company/kreanata" },
  { label: "Behance", href: "https://behance.net/kreanata" },
];
