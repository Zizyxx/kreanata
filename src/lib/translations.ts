import { type Language } from '@/context/LanguageContext';

export interface ServiceTranslation {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const translations = {
  EN: {
    nav: {
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#expertise" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      hire: "Start project",
    },
    hero: {
      line1: "Creative production house",
      line2: "& visual studio",
      tickerStudio: "FULL SERVICE PRODUCTION HOUSE",
      tickerLocation: "BASED IN JAKARTA • SERVING JABODETABEK",
      tickerQuality: "PASSIONATE CRAFT & DETAIL-ORIENTED",
    },
    about: {
      headline1: "We craft bespoke",
      headline2: "visual & digital stories.",
      p1: "At Kreanata, we unite videography, commercial photography, and modern web development into a multidisciplinary creative studio. Based in Jakarta and ready to serve clients across Jabodetabek, our commitment is to provide ",
      highlight: "fresh creative ideas & high-standard production quality",
      p2: " that translate your vision into impactful visual assets that truly resonate.",
      button: "ABOUT KREANATA",
    },
    services: [
      {
        id: "event",
        number: "01",
        title: "Event documentation",
        description: "Full multi-camera video coverage, drone documentation, and same-day highlights for festivals, corporate gatherings, and exclusive events.",
      },
      {
        id: "photo",
        number: "02",
        title: "Commercial photography",
        description: "High-end commercial product shoots, architectural captures, and editorial lookbooks engineered to elevate brand image.",
      },
      {
        id: "video",
        number: "03",
        title: "Video production",
        description: "Broadcast-quality TVCs, brand films, and narrative short videos from concept, scriptwriting, and directing to color grading.",
      },
      {
        id: "social",
        number: "04",
        title: "Short-form & social content",
        description: "High-retention vertical videos, campaign assets, and social storytelling tailored for modern digital audiences.",
      },
      {
        id: "branding",
        number: "05",
        title: "Visual identity & design",
        description: "Comprehensive visual systems, bespoke typography, brand assets, packaging design, and promotional materials.",
      },
      {
        id: "web",
        number: "06",
        title: "Web design & development",
        description: "High-performance, modern web platforms built with Next.js, bespoke animations, and clean responsive layout.",
      },
    ] as ServiceTranslation[],
    portfolio: {
      badge: "CURATED ARCHIVE • 2025—2026",
      subtitle: "Film, Photography & Digital Platforms",
      exploreBtn: "EXPLORE ALL WORKS",
      viewProject: "View Project",
    },
    footer: {
      inquiryTitle: "Ready to create something remarkable?",
      inquirySubtitle: "Have an upcoming event documentation, a video brief, or a visual digital project? Let's collaborate and bring your ideas to life.",
      chatWa: "Chat via WhatsApp",
      studioDesc: "A dedicated creative production house and visual studio based in Jakarta, serving Jabodetabek and beyond.",
      expertiseTitle: "Expertise",
      expertiseItems: [
        "Event Documentation",
        "Commercial Photography",
        "Video Production",
        "Visual Identity & Design",
        "Modern Web Development",
      ],
      studioBaseTitle: "Studio Base",
      studioBaseText: "Jakarta, Indonesia — Serving Greater Jabodetabek",
      studioHours: "Mon — Sat, 09:00 - 18:00 WIB",
      socialsTitle: "Socials",
      copyrightDesc: "Creative Production House & Visual Studio.",
      rights: "All rights reserved.",
    },
  },
  ID: {
    nav: {
      links: [
        { label: "Beranda", href: "#home" },
        { label: "Tentang", href: "#about" },
        { label: "Layanan", href: "#expertise" },
        { label: "Proyek", href: "#projects" },
        { label: "Kontak", href: "#contact" },
      ],
      hire: "Mulai proyek",
    },
    hero: {
      line1: "Studio produksi kreatif",
      line2: "& visual digital",
      tickerStudio: "STUDIO PRODUKSI KREATIF MULTIDISIPLIN",
      tickerLocation: "BERBASIS DI JAKARTA • LAYANAN JABODETABEK",
      tickerQuality: "DEDIKASI KARYA & PRESISI DETAIL",
    },
    about: {
      headline1: "Kami merancang cerita",
      headline2: "visual & digital berkelas.",
      p1: "Di Kreanata, kami menyatukan videografi, fotografi komersial, dan pembuatan website modern ke dalam satu studio produksi kreatif. Berbasis di Jakarta dan siap melayani seluruh wilayah Jabodetabek, komitmen utama kami adalah menghadirkan ",
      highlight: "ide kreatif segar & standar produksi berkualitas tinggi",
      p2: " untuk menerjemahkan pesan dan visi brand Anda menjadi karya visual yang mengesankan.",
      button: "TENTANG KREANATA",
    },
    services: [
      {
        id: "event",
        number: "01",
        title: "Dokumentasi acara",
        description: "Liputan multi-kamera, dokumentasi drone, dan video highlight acara untuk festival, konferensi, dan kegiatan perusahaan.",
      },
      {
        id: "photo",
        number: "02",
        title: "Fotografi komersial",
        description: "Pemotretan produk komersial premium, dokumentasi arsitektur, dan editorial lookbook yang dirancang untuk memperkuat identitas brand.",
      },
      {
        id: "video",
        number: "03",
        title: "Produksi video",
        description: "Iklan komersial TVC, video profil brand, dan video naratif mulai dari perumusan ide, naskah, penyutradaraan, hingga tahap akhir color grading.",
      },
      {
        id: "social",
        number: "04",
        title: "Konten video pendek & medsos",
        description: "Video vertikal ber-retensi tinggi, materi kampanye promosi, dan storytelling media sosial yang dinamis untuk audiens digital modern.",
      },
      {
        id: "branding",
        number: "05",
        title: "Identitas visual & desain grafis",
        description: "Sistem identitas visual terpadu, tipografi, panduan grafis, desain kemasan, dan materi promosi yang konsisten.",
      },
      {
        id: "web",
        number: "06",
        title: "Desain & pengembangan web",
        description: "Website modern berkinerja tinggi yang dibangun dengan Next.js, animasi interaktif elegan, dan tata letak responsif di semua perangkat.",
      },
    ] as ServiceTranslation[],
    portfolio: {
      badge: "ARSIP PILIHAN • 2025—2026",
      subtitle: "Film, Fotografi & Platform Digital",
      exploreBtn: "LIHAT SEMUA KARYA",
      viewProject: "Lihat Proyek",
    },
    footer: {
      inquiryTitle: "Siap mewujudkan karya luar biasa?",
      inquirySubtitle: "Punya agenda dokumentasi acara, proyek video, atau pembuatan website? Mari berkolaborasi dan wujudkan ide kreatif Anda bersama kami.",
      chatWa: "Hubungi via WhatsApp",
      studioDesc: "Production house dan studio kreatif visual berbasis di Jakarta, siap melayani kebutuhan dokumentasi dan produksi di seluruh wilayah Jabodetabek.",
      expertiseTitle: "Keahlian",
      expertiseItems: [
        "Dokumentasi Acara",
        "Fotografi Komersial",
        "Produksi Video",
        "Identitas Visual & Desain",
        "Pengembangan Website Modern",
      ],
      studioBaseTitle: "Lokasi Studio",
      studioBaseText: "Jakarta, Indonesia — Siap Melayani Seluruh Jabodetabek",
      studioHours: "Sen — Sab, 09:00 - 18:00 WIB",
      socialsTitle: "Media Sosial",
      copyrightDesc: "Studio Produksi Kreatif & Visual Digital.",
      rights: "Hak cipta dilindungi.",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.EN;
}
