import { type Language } from '@/context/LanguageContext';

export interface ServiceTranslation {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProjectTranslation {
  id: number;
  title: string;
  category: string;
  client: string;
  image: string;
}

export interface AwardTranslation {
  id: number;
  multiplier: string;
  title: string;
  organizer: string;
  year: string;
}

export interface TestimonialTranslation {
  id: number;
  rating: string;
  quote: string;
  author: string;
  company: string;
}

export interface BlogTranslation {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
}

export const translations = {
  EN: {
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "Agency", href: "#agency" },
        { label: "Expertise", href: "#expertise" },
        { label: "Projects", href: "#projects" },
        { label: "Awards", href: "#awards" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
      hire: "Hire agency",
    },
    hero: {
      line1: "We're a creative",
      line2: "digital agency",
      tickerStudio: "FULL SERVICE CREATIVE STUDIO",
      tickerLocation: "LOCATED AT JAKARTA & BALI",
      tickerAward: "AWARD WINNING PRODUCTION",
    },
    about: {
      headline1: "We craft bespoke",
      headline2: "visual & digital stories.",
      p1: "At Kreanata, we unite cinema-grade filmmaking, commercial photography, and modern digital development into a single multidisciplinary studio. With over ",
      highlight: "6+ years of production excellence",
      p2: " across Indonesia, our mission is to translate your brand's essence into unforgettable visual journeys that inspire and convert.",
      button: "ABOUT KREANATA",
    },
    services: [
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
    ] as ServiceTranslation[],
    portfolio: {
      badge: "CURATED ARCHIVE • 2024—2025",
      subtitle: "Film, Photography & Digital Platforms",
      exploreBtn: "EXPLORE ALL WORKS",
      viewProject: "View Project",
      clientLabel: "Client:",
      modalCta: "Start Similar Project",
      modalDesc: "Created with precision by Kreanata Studio. Every detail reflects our commitment to modern aesthetics, thoughtful composition, and impactful brand communication.",
    },
    awards: {
      badge: "EXCELLENCE & RECOGNITION",
      title1: "Honorable",
      title2: "awards",
      intro: "Every award and recognition represents our relentless dedication to cinematic craftsmanship, visual precision, and strategic digital execution for our clients across Indonesia and beyond.",
      list: [
        {
          id: 1,
          multiplier: "4X",
          title: "Best Commercial Cinematography",
          organizer: "Indonesian Film & Video Awards",
          year: "2024",
        },
        {
          id: 2,
          multiplier: "3X",
          title: "Site of the Day & UI Excellence",
          organizer: "Awwwards",
          year: "2024",
        },
        {
          id: 3,
          multiplier: "5X",
          title: "Top Event Documentation Studio",
          organizer: "Creative Media Index",
          year: "2023",
        },
        {
          id: 4,
          multiplier: "2X",
          title: "Brand Identity of the Year",
          organizer: "Visual Design Annual",
          year: "2023",
        },
      ] as AwardTranslation[],
      testimonials: [
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
      ] as TestimonialTranslation[],
    },
    blogs: {
      title: "Latest blogs",
      exploreBtn: "EXPLORE ALL BLOGS",
      list: [
        {
          id: 1,
          category: "PRODUCTION",
          date: "24 OCTOBER 2024",
          title: "Behind the Lens: Capturing High-Energy Festival and Event Moments",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 2,
          category: "CINEMA",
          date: "18 OCTOBER 2024",
          title: "Color Grading for Commercial TVC: DaVinci Resolve Masterclass",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 3,
          category: "BRANDING",
          date: "10 OCTOBER 2024",
          title: "Building an Unforgettable Brand Identity for Modern Businesses",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 4,
          category: "DIGITAL",
          date: "02 OCTOBER 2024",
          title: "Designing Immersive Web Experiences with Next.js and Motion",
          image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
        },
      ] as BlogTranslation[],
    },
    footer: {
      inquiryTitle: "Ready to create something remarkable?",
      inquirySubtitle: "Have an upcoming event documentation, a cinematic TVC production brief, or a visual digital project? Let's collaborate and elevate your brand together.",
      chatWa: "Chat via WhatsApp",
      studioDesc: "A boutique production house and digital creative agency based in Jakarta & Bali, Indonesia.",
      expertiseTitle: "Expertise",
      expertiseItems: [
        "Event Documentation",
        "Commercial Photography",
        "Cinematic Video Production",
        "Visual Identity & Branding",
        "Modern Web Development",
      ],
      studioBaseTitle: "Studio Base",
      studioBaseText: "South Jakarta & Denpasar, Bali — Indonesia",
      studioHours: "Mon — Sat, 09:00 - 18:00 WIB",
      socialsTitle: "Socials",
      copyrightDesc: "Bespoke Creative Production & Digital Studio.",
      rights: "All rights reserved.",
    },
  },
  ID: {
    nav: {
      links: [
        { label: "Beranda", href: "#home" },
        { label: "Agensi", href: "#agency" },
        { label: "Layanan", href: "#expertise" },
        { label: "Proyek", href: "#projects" },
        { label: "Penghargaan", href: "#awards" },
        { label: "Blog", href: "#blog" },
        { label: "Kontak", href: "#contact" },
      ],
      hire: "Mulai proyek",
    },
    hero: {
      line1: "Studio kreatif visual",
      line2: "& agensi digital",
      tickerStudio: "STUDIO KREATIF MULTIDISIPLIN",
      tickerLocation: "BERBASIS DI JAKARTA & BALI",
      tickerAward: "PRODUKSI BERPENGHARGAAN",
    },
    about: {
      headline1: "Kami merancang cerita",
      headline2: "visual & digital berkelas.",
      p1: "Di Kreanata, kami menyatukan sinematografi kelas bioskop, fotografi komersial, dan rekayasa platform digital modern ke dalam satu studio kreatif multidisiplin. Dengan lebih dari ",
      highlight: "6+ tahun keunggulan produksi",
      p2: " di seluruh Indonesia, misi kami adalah menerjemahkan esensi brand Anda menjadi karya visual berkesan yang menginspirasi dan berdampak.",
      button: "TENTANG KREANATA",
    },
    services: [
      {
        id: "event",
        number: "01",
        title: "Dokumentasi acara",
        description: "Liputan multi-kamera 4K/6K komprehensif, sinematografi drone, dan video highlight same-day untuk festival, konferensi, dan acara eksklusif.",
      },
      {
        id: "photo",
        number: "02",
        title: "Fotografi komersial",
        description: "Pemotretan produk komersial premium, dokumentasi arsitektur, dan editorial lookbook yang dirancang untuk mengangkat prestise brand.",
      },
      {
        id: "video",
        number: "03",
        title: "Produksi video sinematik",
        description: "Iklan komersial TVC berkualitas siaran, brand film, dan dokumenter naratif mulai dari konsep, naskah, penyutradaraan, hingga color grading.",
      },
      {
        id: "social",
        number: "04",
        title: "Konten video pendek & medsos",
        description: "Video vertikal ber-retensi tinggi, materi kampanye viral, dan storytelling media sosial yang dioptimalkan untuk algoritma digital modern.",
      },
      {
        id: "branding",
        number: "05",
        title: "Identitas visual & branding",
        description: "Sistem identitas visual menyeluruh, tipografi khusus, buku panduan brand, desain kemasan, dan materi pemasaran berdampak tinggi.",
      },
      {
        id: "web",
        number: "06",
        title: "Desain & pengembangan web",
        description: "Platform website berkinerja tinggi yang dibangun dengan Next.js, animasi interaktif modern, dan arsitektur UX berorientasi konversi.",
      },
    ] as ServiceTranslation[],
    portfolio: {
      badge: "ARSIP PILIHAN • 2024—2025",
      subtitle: "Film, Fotografi & Platform Digital",
      exploreBtn: "LIHAT SEMUA KARYA",
      viewProject: "Lihat Proyek",
      clientLabel: "Klien:",
      modalCta: "Mulai Proyek Serupa",
      modalDesc: "Diciptakan dengan presisi tinggi oleh Kreanata Studio. Setiap detail mencerminkan komitmen kami pada estetika modern, komposisi matang, dan komunikasi visual yang berdampak nyata.",
    },
    awards: {
      badge: "PRESTASI & REKOGNISI",
      title1: "Penghargaan",
      title2: "bergengsi",
      intro: "Setiap penghargaan dan pengakuan mencerminkan dedikasi tanpa henti kami terhadap kualitas sinematik, presisi visual, dan eksekusi digital strategis bagi para klien kami di seluruh Indonesia dan mancanegara.",
      list: [
        {
          id: 1,
          multiplier: "4X",
          title: "Sinematografi Komersial Terbaik",
          organizer: "Indonesian Film & Video Awards",
          year: "2024",
        },
        {
          id: 2,
          multiplier: "3X",
          title: "Site of the Day & Keunggulan UI",
          organizer: "Awwwards",
          year: "2024",
        },
        {
          id: 3,
          multiplier: "5X",
          title: "Studio Dokumentasi Acara Terdepan",
          organizer: "Creative Media Index",
          year: "2023",
        },
        {
          id: 4,
          multiplier: "2X",
          title: "Identitas Brand Terbaik Tahun Ini",
          organizer: "Visual Design Annual",
          year: "2023",
        },
      ] as AwardTranslation[],
      testimonials: [
        {
          id: 1,
          rating: "4.95",
          quote: "Kreanata mentransformasi kehadiran brand kami melalui dokumentasi acara berstandar sinematik dan website digital yang memukau. Ketajaman detail dan komitmen kualitas mereka tak tertandingi.",
          author: "ADITYA PRATAMA",
          company: "Managing Director, Artha Group",
        },
        {
          id: 2,
          rating: "4.90",
          quote: "Mulai dari storyboard awal hingga tahap akhir color grading, tim Kreanata menghasilkan video TVC yang melampaui ekspektasi kami dan mendorong interaksi nyata.",
          author: "CLARISSA WIJAYA",
          company: "Brand Lead, Nusantara Tech",
        },
        {
          id: 3,
          rating: "5.00",
          quote: "Kemampuan multidisiplin mereka mengelola fotografi, produksi film, hingga website berperforma tinggi di bawah satu atap menghemat waktu koordinasi kami berbulan-bulan.",
          author: "MARCUS CHEN",
          company: "Founder, Atelier Studio",
        },
      ] as TestimonialTranslation[],
    },
    blogs: {
      title: "Artikel & wawasan",
      exploreBtn: "BACA SEMUA BLOG",
      list: [
        {
          id: 1,
          category: "PRODUKSI",
          date: "24 OKTOBER 2024",
          title: "Di Balik Lensa: Menangkap Momen Berenergi Tinggi pada Festival & Acara",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 2,
          category: "SINEMA",
          date: "18 OKTOBER 2024",
          title: "Color Grading untuk Iklan TVC Komersial: DaVinci Resolve Masterclass",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 3,
          category: "BRANDING",
          date: "10 OKTOBER 2024",
          title: "Membangun Identitas Brand yang Melekat Kuat untuk Bisnis Modern",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
        },
        {
          id: 4,
          category: "DIGITAL",
          date: "02 OKTOBER 2024",
          title: "Merancang Pengalaman Web Imersif dengan Next.js dan Animasi Motion",
          image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80",
        },
      ] as BlogTranslation[],
    },
    footer: {
      inquiryTitle: "Siap mewujudkan karya luar biasa?",
      inquirySubtitle: "Punya agenda dokumentasi acara, proyek iklan TVC sinematik, atau pembuatan platform digital? Mari berkolaborasi dan tingkatkan nilai brand Anda.",
      chatWa: "Hubungi via WhatsApp",
      studioDesc: "Studio produksi kreatif dan agensi digital terkemuka yang berbasis di Jakarta & Bali, Indonesia.",
      expertiseTitle: "Keahlian",
      expertiseItems: [
        "Dokumentasi Acara",
        "Fotografi Komersial",
        "Produksi Video Sinematik",
        "Identitas Visual & Branding",
        "Pengembangan Website Modern",
      ],
      studioBaseTitle: "Lokasi Studio",
      studioBaseText: "Jakarta Selatan & Denpasar, Bali — Indonesia",
      studioHours: "Sen — Sab, 09:00 - 18:00 WIB",
      socialsTitle: "Media Sosial",
      copyrightDesc: "Studio Produksi Kreatif & Rekayasa Digital Berkelas.",
      rights: "Hak cipta dilindungi.",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.EN;
}
