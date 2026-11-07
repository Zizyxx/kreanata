export interface PortfolioProject {
  id: string;
  categoryType?: 'dokumentasi' | 'photoshoot';
  title: {
    EN: string;
    ID: string;
  };
  client: string;
  year: string;
  tags: {
    EN: string[];
    ID: string[];
  };
  description: {
    EN: string;
    ID: string;
  };
  image: string;
  aspect?: string;
  highlights?: {
    EN: string[];
    ID: string[];
  };
}

export interface PortfolioCategory {
  slug: string;
  number: string;
  title: {
    EN: string;
    ID: string;
  };
  subtitle: {
    EN: string;
    ID: string;
  };
  badge: {
    EN: string;
    ID: string;
  };
  overview: {
    EN: string;
    ID: string;
  };
  heroImage: string;
  projects: PortfolioProject[];
}

export const portfolioCategories: Record<string, PortfolioCategory> = {
  fotografi: {
    slug: 'fotografi',
    number: '01',
    title: {
      EN: 'Photography',
      ID: 'Fotografi',
    },
    subtitle: {
      EN: 'Curated editorial archive: live documentation and creative photoshoots.',
      ID: 'Arsip kurasi visual: dokumentasi acara dan sesi photoshoot kreatif.',
    },
    badge: {
      EN: 'PILLAR 01 • PHOTOGRAPHY',
      ID: 'PILAR 01 • FOTOGRAFI',
    },
    overview: {
      EN: 'Cinema-grade optics, controlled studio lighting, and meticulous composition for live documentation and photoshoot sessions.',
      ID: 'Kamera optik cinema, tata cahaya studio presisi, dan komposisi detail untuk dokumentasi dan photoshoot.',
    },
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    projects: [
      // Photoshoot
      {
        id: 'bs-1',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Silhouette', ID: 'Siluet Editorial Studio' },
        client: 'Maison De Mode',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Studio photoshoot series exploring high-contrast form and monochromatic elegance.', ID: 'Seri studio photoshoot menonjolkan keanggunan bentuk dan monokrom kontras tinggi.' },
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/3]',
      },
      {
        id: 'bs-2',
        categoryType: 'photoshoot',
        title: { EN: 'Atmospheric Studio Portrait', ID: 'Potret Studio Atmosferik' },
        client: 'Studio Batavia',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Dramatic Strobe'], ID: ['Photoshoot', 'Strobo Dramatis'] },
        description: { EN: 'Cinematic rim lighting and textured shadows capturing intimate character.', ID: 'Pencahayaan rim sinematik dan bayangan bertekstur menangkap karakter ekspresi.' },
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'bs-3',
        categoryType: 'photoshoot',
        title: { EN: 'High-Fashion Minimalist Muse', ID: 'Muse Minimalis Busana Tinggi' },
        client: 'Atelier Mode',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Haute Couture'], ID: ['Photoshoot', 'Busana Mewah'] },
        description: { EN: 'Clean editorial lookbook focusing on hair texture and natural styling.', ID: 'Lookbook editorial bersih berfokus pada tekstur rambut dan riasan alami.' },
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/5]',
      },
      {
        id: 'bs-4',
        categoryType: 'photoshoot',
        title: { EN: 'Monochrome Fashion Form', ID: 'Bentuk Fashion Monokrom' },
        client: 'Vanguard Jakarta',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Studio Light'], ID: ['Photoshoot', 'Cahaya Studio'] },
        description: { EN: 'Dynamic pose and clean studio backdrop highlighting editorial energy.', ID: 'Pose dinamis dan latar studio bersih menonjolkan energi editorial.' },
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/5]',
      },
      {
        id: 'bs-5',
        categoryType: 'photoshoot',
        title: { EN: 'Masculine Editorial Portrait', ID: 'Potret Editorial Maskulin' },
        client: 'Artha Menswear',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Hard Light'], ID: ['Photoshoot', 'Cahaya Keras'] },
        description: { EN: 'Hard directional lighting creating sculptured facial contours and denim texture.', ID: 'Cahaya terarah tajam membentuk kontur wajah tegas dan tekstur busana.' },
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[1/1]',
      },
      {
        id: 'bs-6',
        categoryType: 'photoshoot',
        title: { EN: 'Intimate Eye Contact Close-up', ID: 'Tatapan Dekat Intim' },
        client: 'Maison De Mode',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Macro Face'], ID: ['Photoshoot', 'Wajah Makro'] },
        description: { EN: 'High-contrast closeup capturing expressive eyes and soft skin gradation.', ID: 'Foto jarak dekat kontras tinggi menangkap kedalaman sorot mata dan gradasi kulit.' },
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/3]',
      },
      {
        id: 'bs-7',
        categoryType: 'photoshoot',
        title: { EN: 'Classic Fedora & Silhouette', ID: 'Siluet Fedora Klasik' },
        client: 'Noir Magazine',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Vintage Mood'], ID: ['Photoshoot', 'Nuansa Vintage'] },
        description: { EN: 'Timeless fedora hat styling with deep blacks and sharp rim highlights.', ID: 'Styling topi fedora klasik dengan bayangan hitam pekat dan garis cahaya tajam.' },
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/5]',
      },
      {
        id: 'bs-8',
        categoryType: 'photoshoot',
        title: { EN: 'Natural Portrait Sculpture', ID: 'Skulptur Potret Alami' },
        client: 'Sora Botanicals',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Natural Skin'], ID: ['Photoshoot', 'Kulit Alami'] },
        description: { EN: 'Soft ambient strobe lighting celebrating organic grace and skin purity.', ID: 'Pencahayaan strobo lembut memancarkan keanggunan alami dan kemurnian kulit.' },
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[1/1]',
      },
      {
        id: 'bs-9',
        categoryType: 'photoshoot',
        title: { EN: 'Urban Denim Studio Staging', ID: 'Penataan Studio Denim Urban' },
        client: 'Vanguard Streetwear',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Fashion Styling'], ID: ['Photoshoot', 'Styling Fashion'] },
        description: { EN: 'Editorial pose framed by architectural room corners and ambient bounce light.', ID: 'Pose editorial berlatar sudut ruang studio dan pantulan cahaya lembut.' },
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'bs-10',
        categoryType: 'photoshoot',
        title: { EN: 'Behind the Viewfinder', ID: 'Di Balik Jendela Bidik' },
        client: 'Nusantara Press',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Medium Format'], ID: ['Photoshoot', 'Kamera Format Medium'] },
        description: { EN: 'Medium format camera staging capturing photographer craftsmanship.', ID: 'Kamera format medium mengabadikan dedikasi dan keterampilan fotografer.' },
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/5]',
      },
      {
        id: 'bs-11',
        categoryType: 'photoshoot',
        title: { EN: 'Smoke & Shades Character', ID: 'Karakter Kacamata & Asap' },
        client: 'Atelier Batavia',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Edgy Mood'], ID: ['Photoshoot', 'Karakter Kuat'] },
        description: { EN: 'Gritty studio lighting with textured flannel and smoke atmospheric layer.', ID: 'Pencahayaan studio berkarakter kuat dengan kemeja flanel dan lapisan asap halus.' },
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[1/1]',
      },
      {
        id: 'bs-12',
        categoryType: 'photoshoot',
        title: { EN: 'Blonde Editorial Portraiture', ID: 'Potret Editorial Berambut Terang' },
        client: 'Maison De Mode',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Classic Glamour'], ID: ['Photoshoot', 'Gaya Klasik'] },
        description: { EN: 'Dramatic high-key studio glamour shot with clean contrast.', ID: 'Foto studio bergaya klasik dengan kontras tinggi yang bersih.' },
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1000&q=80',
        aspect: 'aspect-[4/5]',
      },

      // Dokumentasi (Cloudinary CDN - Folder: dokumentasi)
      {
        id: 'dok-1',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 01', ID: 'Dokumentasi Acara 01' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038575/dfsm8rz8svxdejyho9zg.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-2',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 02', ID: 'Dokumentasi Acara 02' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038574/vmsgurn2ppmdububh2gw.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-3',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 03', ID: 'Dokumentasi Acara 03' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038571/eenzysbk4dfqt0grg9cf.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-4',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 04', ID: 'Dokumentasi Acara 04' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038571/hcdc1mxljhkojfhoe6vi.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-5',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 05', ID: 'Dokumentasi Acara 05' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038571/yklo2rj5tybxza6ufimr.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-6',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 06', ID: 'Dokumentasi Acara 06' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038571/pg7idzfdbsub7m7ooiym.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-7',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 07', ID: 'Dokumentasi Acara 07' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038571/fxr9gkntpab8znpdjtco.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-8',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 08', ID: 'Dokumentasi Acara 08' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038569/uwmqntf4th1trgo8u61a.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-9',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 09', ID: 'Dokumentasi Acara 09' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038569/xgvppuwarhnirvtkhk5r.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-10',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 10', ID: 'Dokumentasi Acara 10' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038568/pz80ftdmxetxm1srujkd.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-11',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 11', ID: 'Dokumentasi Acara 11' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038568/radgo2gy8un86iqr6bml.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-12',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 12', ID: 'Dokumentasi Acara 12' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038568/syb2no4nqmmkdnfdz677.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-13',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 13', ID: 'Dokumentasi Acara 13' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038568/u40tbhuheoqw0akfdjlp.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-14',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 14', ID: 'Dokumentasi Acara 14' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038567/opflp1sgpgf3bwcajiyt.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-15',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 15', ID: 'Dokumentasi Acara 15' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038567/pcyv1o7z0leqz4prh4c8.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-16',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 16', ID: 'Dokumentasi Acara 16' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038566/agqw0anz8uqly3r64vyx.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-17',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 17', ID: 'Dokumentasi Acara 17' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038566/awu4lnb12m6lc5pemusc.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-18',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 18', ID: 'Dokumentasi Acara 18' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038566/bxftspnez6bf0irqaxma.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-19',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 19', ID: 'Dokumentasi Acara 19' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038566/ikjl7tj8n6rig0pvvfir.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-20',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 20', ID: 'Dokumentasi Acara 20' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038566/f5oooebtm9sjbepkzieh.webp',
        aspect: 'aspect-[16/10]',
      },
      {
        id: 'dok-21',
        categoryType: 'dokumentasi',
        title: { EN: 'Event Documentation 21', ID: 'Dokumentasi Acara 21' },
        client: 'Kreanata Production',
        year: '2024',
        tags: { EN: ['Dokumentasi', 'Live Event'], ID: ['Dokumentasi', 'Live Event'] },
        description: { EN: 'Live event visual documentation captured by Kreanata.', ID: 'Dokumentasi visual acara langsung oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794038566/hhcj3tgnwzsnmbekhshu.webp',
        aspect: 'aspect-[16/10]',
      },
    ],
  },

  videografi: {
    slug: 'videografi',
    number: '02',
    title: {
      EN: 'Cinematic Films & Commercial Videography',
      ID: 'Videografi Sinematik & Film Komersial',
    },
    subtitle: {
      EN: 'Broadcast TVCs, brand films, narrative mini-documentaries, and high-energy festival aftermovies.',
      ID: 'Iklan komersial TVC, film narasi brand, video profil sinematik, dan dokumentasi aftermovie berenergi tinggi.',
    },
    badge: {
      EN: 'PILLAR 02 • VIDEOGRAPHY ARCHIVE',
      ID: 'PILAR 02 • ARSIP VIDEOGRAFI',
    },
    overview: {
      EN: 'From concept storyboard, scriptwriting, and multi-camera 4K/6K cinematography to color grading in DaVinci Resolve and sound design. We produce moving pictures that engage and inspire.',
      ID: 'Dari storyboard konsep, naskah narasi, pengambilan gambar multi-kamera 4K/6K, hingga color grading DaVinci Resolve dan tata suara. Kami menghadirkan karya visual bergerak yang memikat.',
    },
    heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    projects: [
      {
        id: 'video-1',
        title: {
          EN: 'Luminaire Chrono TVC Brand Film',
          ID: 'Film Komersial TVC Luminaire Chrono',
        },
        client: 'Luminaire Geneve',
        year: '2024',
        tags: {
          EN: ['Commercial TVC', 'Cinema 6K', 'DaVinci Grading'],
          ID: ['Iklan TVC', 'Sinema 6K', 'Grading DaVinci'],
        },
        description: {
          EN: 'A 60-second broadcast commercial blending high-speed precision footage, dramatic shadows, and orchestral sound design.',
          ID: 'Iklan komersial 60 detik beresolusi 6K yang memadukan rekaman kecepatan tinggi, kontras bayangan dramatis, dan tata musik orkestra.',
        },
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['High-speed 120fps motion tracking', 'Custom DaVinci Resolve film LUT', 'Dolby 5.1 surround master mix'],
          ID: ['Pelacakan gerak 120fps kecepatan tinggi', 'Formula warna LUT film khusus', 'Master audio Dolby 5.1'],
        },
      },
      {
        id: 'video-2',
        title: {
          EN: 'Soundwave Electronic Music Aftermovie',
          ID: 'Aftermovie Festival Musik Elektronik Soundwave',
        },
        client: 'Soundwave Live Indonesia',
        year: '2024',
        tags: {
          EN: ['Music Festival', 'Multi-Cam 4K', 'Drone Aerials'],
          ID: ['Festival Musik', 'Multi-Kamera 4K', 'Sinematografi Drone'],
        },
        description: {
          EN: 'Electrifying festival recap video featuring crowd energy, mainstage pyrotechnics, and dynamic drone cinematography over GBK.',
          ID: 'Video recap festival musik penuh energi yang mengabadikan antusiasme penonton, tata lampu panggung utama, dan visual udara drone di GBK.',
        },
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['FPV acrobatic drone capture', 'Multi-camera audio timecode sync', '48-hour rapid delivery highlights'],
          ID: ['Perekaman drone akrobatik FPV', 'Sinkronisasi audio multi-kamera', 'Penyelesaian video kilat 48 jam'],
        },
      },
      {
        id: 'video-3',
        title: {
          EN: 'Echoes of the Archipelago Documentary',
          ID: 'Dokumenter Naratif Tradisi Nusantara',
        },
        client: 'Nusantara Heritage Foundation',
        year: '2024',
        tags: {
          EN: ['Mini-Documentary', 'Storytelling', 'Natural Sound'],
          ID: ['Dokumenter Pendek', 'Kisah Narasi', 'Suara Alami'],
        },
        description: {
          EN: 'A soulful documentary spotlighting master artisans carving traditional textiles and heritage crafts in authentic workshop environments.',
          ID: 'Film dokumenter pendek yang mengangkat dedikasi perajin tradisional dalam melestarikan wastra tenun dan kriya warisan leluhur.',
        },
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Anamorphic lens warmth and flare', 'Organic soundscapes and ambient audio', 'Curated cultural exhibition screening'],
          ID: ['Lensa anamorfin bernuansa hangat', 'Tata suara organik lingkungan asli', 'Penayangan eksklusif kurasi pameran'],
        },
      },
      {
        id: 'video-4',
        title: {
          EN: 'Jakarta Creative Week Teaser & Recap',
          ID: 'Teaser & Recap Pekan Kreatif Jakarta',
        },
        client: 'DKI Creative Board',
        year: '2024',
        tags: {
          EN: ['Event Teaser', 'Kinetic Motion', 'Urban Hyperlapse'],
          ID: ['Teaser Acara', 'Gerak Kinetik', 'Hyperlapse Kota'],
        },
        description: {
          EN: 'High-speed kinetic promotional video with hyperlapse urban sequences, typography integration, and fast-paced editorial cuts.',
          ID: 'Video promosi cepat dengan urutan hyperlapse gedung perkotaan, tipografi kinetik, dan potongan editor dinamis berenergi tinggi.',
        },
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Custom motion graphics overlay', 'Night hyperlapse stabilization', 'Vertical 9:16 reels package included'],
          ID: ['Grafis gerak tipografi kustom', 'Stabilisasi hyperlapse malam hari', 'Paket format vertikal media sosial'],
        },
      },
      {
        id: 'video-5',
        title: {
          EN: 'Artha Group Corporate Showcase Film',
          ID: 'Film Profil Korporat Artha Group',
        },
        client: 'Artha Group Jakarta',
        year: '2024',
        tags: {
          EN: ['Corporate Film', 'Interviews', 'Executive Story'],
          ID: ['Film Korporat', 'Wawancara', 'Kisah Pemimpin'],
        },
        description: {
          EN: 'A compelling brand profile film communicating vision, sustainable operations, and technological advancements to global stakeholders.',
          ID: 'Film profil korporat yang mengomunikasikan visi masa depan, operasional berkelanjutan, dan kemajuan teknologi kepada mitra global.',
        },
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Three-point cinema lighting interview', 'Clean b-roll industrial footage', 'Bilingual subtitle master delivery'],
          ID: ['Pencahayaan wawancara sinematik', 'Dokumentasi operasional industri', 'Master dua bahasa Inggris & Indonesia'],
        },
      },
      {
        id: 'video-6',
        title: {
          EN: 'Velox Automotive Night Commercial',
          ID: 'Iklan Sinematik Malam Velox Automotive',
        },
        client: 'Velox Motors',
        year: '2024',
        tags: {
          EN: ['Automotive Shoot', 'Night Aesthetics', 'Car Rigging'],
          ID: ['Syuting Otomotif', 'Estetika Malam', 'Rigging Mobil'],
        },
        description: {
          EN: 'Atmospheric car commercial filmed through Jakarta SCBD illuminated by neon reflections and high-speed chase camera rigs.',
          ID: 'Iklan mobil atmosferik yang direkam melintasi jalanan SCBD Jakarta berhiaskan pantulan lampu malam menggunakan rig kamera kejar.',
        },
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Suction-mount car camera rig', 'Anamorphic blue streak lenses', 'Engine telemetry audio foley design'],
          ID: ['Rig kamera khusus bodi mobil', 'Lensa anamorfin garis biru khas', 'Desain audio raungan mesin presisi'],
        },
      },
    ],
  },

  desain: {
    slug: 'desain',
    number: '03',
    title: {
      EN: 'Visual Identity & Graphic Design',
      ID: 'Desain Identitas Visual & Grafis',
    },
    subtitle: {
      EN: 'Complete visual identity systems, bespoke typography, packaging design, and editorial brand guidelines.',
      ID: 'Sistem identitas visual menyeluruh, tipografi kustom, desain kemasan produk, dan panduan brand profesional.',
    },
    badge: {
      EN: 'PILLAR 03 • DESIGN ARCHIVE',
      ID: 'PILAR 03 • ARSIP DESAIN',
    },
    overview: {
      EN: 'We translate brand ethos into distinctive visual languages. From logos, custom typefaces, and color theory to tangible printed collateral and packaging that stands out on shelves.',
      ID: 'Kami menerjemahkan karakter brand ke dalam bahasa visual yang berkarakter kuat. Mulai dari logo, tipografi kustom, tata warna, hingga materi cetak dan kemasan yang memikat di mata konsumen.',
    },
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    projects: [
      {
        id: 'design-1',
        title: {
          EN: 'Kultura Roasters Visual Identity System',
          ID: 'Sistem Identitas Visual Kultura Roasters',
        },
        client: 'Kultura Coffee Co.',
        year: '2024',
        tags: {
          EN: ['Visual Identity', 'Packaging', 'Typography'],
          ID: ['Identitas Visual', 'Desain Kemasan', 'Tipografi'],
        },
        description: {
          EN: 'Full rebrand encompassing custom wordmark, sustainable coffee bean pouch packaging, menu systems, and brand guidelines.',
          ID: 'Rebranding menyeluruh mencakup logo tipografi kustom, kemasan kantong kopi ramah lingkungan, buku menu, dan panduan identitas brand.',
        },
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Custom crafted geometric wordmark', 'FSC-certified eco pouch design', 'Comprehensive 80-page brand book'],
          ID: ['Tipografi logo geometris kustom', 'Desain kantong kopi bersertifikasi ramah lingkungan', 'Buku panduan brand lengkap 80 halaman'],
        },
      },
      {
        id: 'design-2',
        title: {
          EN: 'The Art of Cinematography Monograph',
          ID: 'Desain Buku Monograf Seni Sinematografi',
        },
        client: 'Nusantara Press',
        year: '2024',
        tags: {
          EN: ['Editorial Design', 'Book Layout', 'Print Production'],
          ID: ['Desain Editorial', 'Tata Letak Buku', 'Produksi Cetak'],
        },
        description: {
          EN: 'Hardcover coffee table book layout with strict Swiss grid systems, bespoke serif headlines, and tactile linen foil stamping.',
          ID: 'Tata letak buku mewah bersampul tebal dengan kisi tata letak Swiss yang presisi, tipografi elegan, dan cetak foil emas pada kain linen.',
        },
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Swiss modernist editorial grid', 'Gold foil hot-stamping on linen', '240 pages of curated photographic spreads'],
          ID: ['Sistem grid modernis Swiss', 'Cap foil emas pada sampul linen', '240 halaman tata letak foto sinematik'],
        },
      },
      {
        id: 'design-3',
        title: {
          EN: 'Atelier Spatial Exhibition Wayfinding',
          ID: 'Sistem Wayfinding Pameran Galeri Atelier',
        },
        client: 'Atelier Art Space',
        year: '2024',
        tags: {
          EN: ['Spatial Design', 'Wayfinding', 'Typography'],
          ID: ['Desain Spasial', 'Penunjuk Arah', 'Tipografi'],
        },
        description: {
          EN: 'Architectural signage and spatial typography system guiding visitors seamlessly through multi-level contemporary art exhibitions.',
          ID: 'Sistem penunjuk arah arsitektural dan tipografi dinding yang membimbing pengunjung menikmati pameran seni rupa kontemporer.',
        },
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Matte black steel signage fabrication', 'High-contrast bilingual legible typography', 'Catalog and ticket companion designs'],
          ID: ['Fabrikasi pelat baja hitam matte', 'Tipografi dua bahasa yang mudah dibaca', 'Desain katalog dan tiket masuk pendamping'],
        },
      },
      {
        id: 'design-4',
        title: {
          EN: 'Sora Skincare Organic Packaging Suite',
          ID: 'Paket Kemasan Organik Sora Skincare',
        },
        client: 'Sora Botanicals',
        year: '2024',
        tags: {
          EN: ['Packaging Design', 'Bottle Labelling', 'Box Unboxing'],
          ID: ['Desain Kemasan', 'Label Botol', 'Pengalaman Unboxing'],
        },
        description: {
          EN: 'Minimalist glass bottle screen prints and recycled paperboard box packaging designed for premium clean beauty formulations.',
          ID: 'Desain botol kaca minimalis dan kotak kemasan berbahan kertas daur ulang untuk produk perawatan kulit organik premium.',
        },
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Blind debossed organic emblems', 'Soy-ink eco-friendly printing', 'Unboxing structural interior die-cut'],
          ID: ['Embos emblem organik tanpa tinta', 'Pencetakan ramah lingkungan tinta kedelai', 'Desain pola potong bagian dalam kotak'],
        },
      },
      {
        id: 'design-5',
        title: {
          EN: 'Jakarta Biennale Visual Collateral',
          ID: 'Materi Visual Festival Seni Jakarta Biennale',
        },
        client: 'Jakarta Visual Arts Board',
        year: '2024',
        tags: {
          EN: ['Poster Series', 'Event Branding', 'Promotional Collateral'],
          ID: ['Seri Poster', 'Identitas Acara', 'Materi Promosi'],
        },
        description: {
          EN: 'A dynamic poster campaign and street banner system celebrating contemporary arts across prominent Jakarta public spaces.',
          ID: 'Kampanye poster berseri dan spanduk jalanan yang merayakan seni rupa kontemporer di ruang-ruang publik terkemuka Jakarta.',
        },
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Silkscreen printed collectible posters', 'Digital motion billboard adaptations', 'Exhibition lanyard and wristband suite'],
          ID: ['Poster edisi kolektor cetak saring', 'Adaptasi videotron billboard digital', 'Paket tali tanda pengenal dan gelang acara'],
        },
      },
      {
        id: 'design-6',
        title: {
          EN: 'Vanguard Streetwear Identity System',
          ID: 'Sistem Identitas Brand Streetwear Vanguard',
        },
        client: 'Vanguard Apparel',
        year: '2024',
        tags: {
          EN: ['Fashion Branding', 'Apparel Hangtags', 'Merchandising'],
          ID: ['Branding Busana', 'Hangtag Pakaian', 'Merchandise'],
        },
        description: {
          EN: 'Edgy modern brand identity for an urban streetwear label, featuring woven labels, rubberized patches, and shipping cartons.',
          ID: 'Identitas brand modern untuk label busana perkotaan, mencakup label tenun, emblem karet timbul, dan kardus pengiriman berkarakter.',
        },
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Custom industrial stencil typeface', 'Textured recycled hangtags', 'Complete apparel trim package specs'],
          ID: ['Tipografi stensil industrial kustom', 'Hangtag kertas bertekstur daur ulang', 'Spesifikasi detail aksesoris garmen'],
        },
      },
    ],
  },

  website: {
    slug: 'website',
    number: '04',
    title: {
      EN: 'Modern Interactive Web Development',
      ID: 'Pengembangan Website Modern & Interaktif',
    },
    subtitle: {
      EN: 'High-performance interactive web platforms built with Next.js, Framer Motion, and conversion-focused UX architecture.',
      ID: 'Platform website performa tinggi dengan teknologi Next.js, animasi interaktif Motion, dan desain UX berorientasi konversi.',
    },
    badge: {
      EN: 'PILLAR 04 • DIGITAL ARCHIVE',
      ID: 'PILAR 04 • ARSIP WEBSITE',
    },
    overview: {
      EN: 'We engineer websites that blend fluid visual animations with blazing load times. Mobile-responsive, SEO-optimized, and built to transform visitors into long-term clients.',
      ID: 'Kami membangun website yang memadukan keindahan animasi visual interaktif dengan kecepatan akses kilat. Responsif di seluruh layar gawai, teroptimasi SEO, dan dirancang untuk menghasilkan konversi.',
    },
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    projects: [
      {
        id: 'web-1',
        title: {
          EN: 'Luminaire Geneva Interactive Flagship Store',
          ID: 'Platform Flagship Digital Luminaire Geneva',
        },
        client: 'Luminaire Geneve',
        year: '2024',
        tags: {
          EN: ['Next.js App Router', 'Interactive Motion', 'Luxury Commerce'],
          ID: ['Next.js App Router', 'Animasi Motion', 'E-Commerce Mewah'],
        },
        description: {
          EN: 'High-performance luxury e-commerce experience with interactive 360-degree product showcases and bespoke typography.',
          ID: 'Website e-commerce mewah berkecepatan tinggi dengan fitur interaktif putaran produk 360 derajat dan tata letak elegan.',
        },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Sub-second page navigation', 'Seamless animated cart drawer', 'Lighthouse 98+ performance score'],
          ID: ['Perpindahan halaman di bawah 1 detik', 'Keranjang belanja animasi interaktif', 'Skor performa Google Lighthouse 98+'],
        },
      },
      {
        id: 'web-2',
        title: {
          EN: 'Artha Capital Investor Relations Portal',
          ID: 'Portal Digital Hubungan Investor Artha Capital',
        },
        client: 'Artha Group',
        year: '2024',
        tags: {
          EN: ['Corporate Portal', 'Financial UI', 'Data Visualization'],
          ID: ['Portal Korporat', 'Antarmuka Finansial', 'Visualisasi Data'],
        },
        description: {
          EN: 'Secure corporate platform delivering interactive financial reports, leadership profiles, and downloadable investor dossiers.',
          ID: 'Platform digital korporat dengan visualisasi data laporan keuangan interaktif, profil jajaran direksi, dan unduhan dokumen investor.',
        },
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Responsive SVG interactive charts', 'Enterprise-grade accessibility standards', 'Instant search and filtering system'],
          ID: ['Grafik SVG interaktif responsif', 'Standar aksesibilitas internasional', 'Pencarian dan filter data instan'],
        },
      },
      {
        id: 'web-3',
        title: {
          EN: 'Kultura Roasters Direct-to-Consumer Store',
          ID: 'Website E-Commerce Kopi Kultura Roasters',
        },
        client: 'Kultura Coffee Co.',
        year: '2024',
        tags: {
          EN: ['E-Commerce', 'Subscription Engine', 'Mobile First'],
          ID: ['E-Commerce', 'Sistem Langganan', 'Utamakan Mobile'],
        },
        description: {
          EN: 'Engaging coffee store with personalized bean flavor quiz, automated recurring coffee subscriptions, and WhatsApp checkout integration.',
          ID: 'Toko online kopi dengan kuis rekomendasi rasa biji kopi, sistem langganan otomatis bulanan, dan integrasi checkout via WhatsApp.',
        },
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Custom coffee quiz selector', 'Integrated WhatsApp cart link', 'Ultra-fast mobile checkout funnel'],
          ID: ['Kuis penentu selera kopi kustom', 'Integrasi keranjang belanja WhatsApp', 'Alur pembayaran mobile super cepat'],
        },
      },
      {
        id: 'web-4',
        title: {
          EN: 'Maison De Mode Digital Lookbook Platform',
          ID: 'Platform Lookbook Digital Maison De Mode',
        },
        client: 'Maison De Mode',
        year: '2024',
        tags: {
          EN: ['Editorial Lookbook', 'Smooth Scroll', 'Full-Bleed Media'],
          ID: ['Lookbook Editorial', 'Scroll Mulus', 'Visual Layar Penuh'],
        },
        description: {
          EN: 'A sensory digital fashion lookbook platform combining high-resolution imagery with editorial layout typography and soundscapes.',
          ID: 'Platform lookbook fashion digital yang memadukan keindahan foto resolusi tinggi, tipografi editorial, dan tata suara latar halus.',
        },
        image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Custom inertia smooth scroll engine', 'Adaptive image CDN delivery', 'Zero-layout-shift responsive rendering'],
          ID: ['Mesin scrolling inersia yang halus', 'Distribusi gambar cepat via CDN', 'Tampilan stabil tanpa pergeseran tata letak'],
        },
      },
      {
        id: 'web-5',
        title: {
          EN: 'Atelier Architecture Portfolio Website',
          ID: 'Website Portofolio Arsitektur Atelier Studio',
        },
        client: 'Atelier Studio',
        year: '2024',
        tags: {
          EN: ['Architecture Portfolio', 'Minimal Grid', 'Image Lightbox'],
          ID: ['Portofolio Arsitektur', 'Grid Minimalis', 'Lightbox Foto'],
        },
        description: {
          EN: 'Minimalist architectural studio showcase featuring full-bleed project imagery, floor plan overlays, and case study narratives.',
          ID: 'Website portofolio studio arsitektur dengan galeri foto layar penuh, tampilan denah interaktif, dan ulasan mendalam setiap karya.',
        },
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Dual-theme high-contrast typography', 'Interactive architectural plan toggle', 'SEO rich-schema architectural metadata'],
          ID: ['Tipografi kontras tinggi yang tegas', 'Tombol perbandingan denah dan hasil jadi', 'Metadata SEO terstruktur untuk arsitektur'],
        },
      },
      {
        id: 'web-6',
        title: {
          EN: 'Nusantara Tech Startup Landing Platform',
          ID: 'Landing Page Startup Nusantara Tech',
        },
        client: 'Nusantara Tech',
        year: '2024',
        tags: {
          EN: ['SaaS Landing', 'Interactive Pricing', 'Conversion Engine'],
          ID: ['Landing Page SaaS', 'Kalkulator Harga', 'Fokus Konversi'],
        },
        description: {
          EN: 'Modern software product landing platform featuring interactive pricing calculator, testimonial sliders, and feature breakdowns.',
          ID: 'Platform produk teknologi modern dengan fitur kalkulator simulasi biaya, slider ulasan klien, dan penjelasan keunggulan fitur.',
        },
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Interactive monthly/annual slider', 'Tailwind CSS v4 zero-runtime styling', 'Conversion tracking analytics integration'],
          ID: ['Slider interaktif kalkulasi biaya', 'Styling Tailwind CSS v4 performa tinggi', 'Integrasi analitik pelacakan konversi'],
        },
      },
    ],
  },
};

// English slug aliases
portfolioCategories['photography'] = portfolioCategories['fotografi'];
portfolioCategories['videography'] = portfolioCategories['videografi'];
portfolioCategories['design'] = portfolioCategories['desain'];
