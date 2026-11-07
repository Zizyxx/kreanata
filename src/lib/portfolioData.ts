export interface PortfolioProject {
  id: string;
  categoryType?: 'dokumentasi' | 'photoshoot';
  youtubeId?: string;
  projectUrl?: string;
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
      EN: 'Professional camera gear, studio lighting, and meticulous composition for live documentation and photoshoot sessions.',
      ID: 'Peralatan kamera profesional, tata cahaya studio presisi, dan komposisi detail untuk dokumentasi dan photoshoot.',
    },
    heroImage: 'https://res.cloudinary.com/xidvgvul/image/upload/w_2400,c_limit,f_auto,q_auto/v1794042146/drinks-11.jpg',
    projects: [
      // Photoshoot (Cloudinary CDN - Folder: photoshoot)
      {
        id: 'ps-1',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 01', ID: 'Potret Editorial Studio 01' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042151/adia-6.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-2',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 02', ID: 'Potret Editorial Studio 02' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042151/adia-7.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-3',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 03', ID: 'Potret Editorial Studio 03' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042149/adia-4.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-4',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 04', ID: 'Potret Editorial Studio 04' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042148/adia-29.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-5',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 05', ID: 'Potret Editorial Studio 05' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042147/adia-15.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-6',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 06', ID: 'Potret Editorial Studio 06' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042147/adia-6_1.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-7',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 07', ID: 'Potret Editorial Studio 07' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042147/adia-18.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-8',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 08', ID: 'Potret Editorial Studio 08' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042147/adia-22.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-9',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 09', ID: 'Potret Editorial Studio 09' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042146/adia-45.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-10',
        categoryType: 'photoshoot',
        title: { EN: 'Studio Editorial Portrait 10', ID: 'Potret Editorial Studio 10' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Editorial'], ID: ['Photoshoot', 'Editorial'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042146/adia-51.jpg',
        aspect: 'aspect-[3/2]',
      },
      {
        id: 'ps-11',
        categoryType: 'photoshoot',
        title: { EN: 'Artisan Beverage Editorial 11', ID: 'Editorial Minuman Artisan 11' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Beverage'], ID: ['Photoshoot', 'Minuman'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042146/drinks-8.jpg',
        aspect: 'aspect-[2/3]',
      },
      {
        id: 'ps-12',
        categoryType: 'photoshoot',
        title: { EN: 'Artisan Beverage Editorial 12', ID: 'Editorial Minuman Artisan 12' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Beverage'], ID: ['Photoshoot', 'Minuman'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042146/drinks-11.jpg',
        aspect: 'aspect-[2/3]',
      },
      {
        id: 'ps-13',
        categoryType: 'photoshoot',
        title: { EN: 'Culinary & Food Styling 13', ID: 'Penataan Kuliner & Makanan 13' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Culinary'], ID: ['Photoshoot', 'Kuliner'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042145/FOODS_6.jpg',
        aspect: 'aspect-[2/3]',
      },
      {
        id: 'ps-14',
        categoryType: 'photoshoot',
        title: { EN: 'Artisan Beverage Editorial 14', ID: 'Editorial Minuman Artisan 14' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Beverage'], ID: ['Photoshoot', 'Minuman'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042145/drinks-13.jpg',
        aspect: 'aspect-[2/3]',
      },
      {
        id: 'ps-15',
        categoryType: 'photoshoot',
        title: { EN: 'Culinary & Food Styling 15', ID: 'Penataan Kuliner & Makanan 15' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Culinary'], ID: ['Photoshoot', 'Kuliner'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042145/FOODS_13.jpg',
        aspect: 'aspect-[2/3]',
      },
      {
        id: 'ps-16',
        categoryType: 'photoshoot',
        title: { EN: 'Culinary & Food Styling 16', ID: 'Penataan Kuliner & Makanan 16' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Culinary'], ID: ['Photoshoot', 'Kuliner'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042145/FOODS_2.jpg',
        aspect: 'aspect-[2/3]',
      },
      {
        id: 'ps-17',
        categoryType: 'photoshoot',
        title: { EN: 'Culinary & Food Styling 17', ID: 'Penataan Kuliner & Makanan 17' },
        client: 'Kreanata Studio',
        year: '2024',
        tags: { EN: ['Photoshoot', 'Culinary'], ID: ['Photoshoot', 'Kuliner'] },
        description: { EN: 'Commercial and editorial photoshoot session produced by Kreanata.', ID: 'Sesi photoshoot komersial dan editorial oleh Kreanata.' },
        image: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794042145/FOODS_14.jpg',
        aspect: 'aspect-[2/3]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
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
        aspect: 'aspect-[3/2]',
      },
    ],
  },

  videografi: {
    slug: 'videografi',
    number: '02',
    title: {
      EN: 'Videography',
      ID: 'Videografi',
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
      EN: 'From concept storyboard, scriptwriting, and multi-camera production to color grading in DaVinci Resolve and sound design. We produce moving pictures that engage and inspire.',
      ID: 'Dari storyboard konsep, naskah narasi, perekaman multi-kamera, hingga color grading DaVinci Resolve dan tata suara. Kami menghadirkan karya visual bergerak yang memikat.',
    },
    heroImage: 'https://res.cloudinary.com/xidvgvul/image/upload/w_2400,c_limit,f_auto,q_auto/v1794038566/f5oooebtm9sjbepkzieh.webp',
    projects: [
      {
        id: 'video-mahardika',
        youtubeId: 'mdtKpwB-A00',
        title: {
          EN: 'After Movie Mahardika Batch 8',
          ID: 'After Movie Mahardika Batch 8',
        },
        client: 'Mahardika Batch 8',
        year: '2024',
        tags: {
          EN: ['Aftermovie', 'Event Coverage', 'DaVinci Resolve'],
          ID: ['Aftermovie', 'Dokumentasi Acara', 'Grading DaVinci'],
        },
        description: {
          EN: 'Official aftermovie documentation of Mahardika Batch 8 produced by Kreanata. Capturing emotional moments, camaraderie, and memorable event milestones.',
          ID: 'Produksi dokumentasi aftermovie resmi Mahardika Batch 8 oleh Kreanata. Menangkap momen penuh energi, kebersamaan, dan perayaan kelulusan berkesan.',
        },
        image: 'https://img.youtube.com/vi/mdtKpwB-A00/maxresdefault.jpg',
        highlights: {
          EN: ['Multi-angle camera coverage', 'Dynamic narrative pacing & custom sound design', 'Professional color grading in DaVinci Resolve'],
          ID: ['Perekaman multi-sudut kamera', 'Pacing cerita dinamis dan tata musik berenergi', 'Formula warna DaVinci Resolve'],
        },
      },
      {
        id: 'video-teflin-aftermovie',
        youtubeId: '_b2or8uboDA',
        title: {
          EN: 'After Movie The 72nd TEFLIN International Conference',
          ID: 'After Movie The 72nd TEFLIN International Conference',
        },
        client: 'TEFLIN International',
        year: '2024',
        tags: {
          EN: ['International Conference', 'Aftermovie', 'Multi-Cam'],
          ID: ['Konferensi Internasional', 'Aftermovie', 'Multi-Kamera'],
        },
        description: {
          EN: 'Official aftermovie capturing plenary keynote sessions, international academic delegates, cultural performances, and gala evening of The 72nd TEFLIN Conference.',
          ID: 'Aftermovie resmi skala internasional merangkum sesi keynote, delegasi akademisi mancanegara, pertunjukan seni budaya, dan malam puncak The 72nd TEFLIN Conference.',
        },
        image: 'https://img.youtube.com/vi/_b2or8uboDA/maxresdefault.jpg',
        highlights: {
          EN: ['Multi-angle stage & delegate coverage', 'Clear multi-channel audio master capture', 'Fast-turnaround high-production edit'],
          ID: ['Liputan panggung dan delegasi multi-sudut', 'Perekaman audio multi-channel jernih', 'Hasil editing sinematik berkualitas tinggi'],
        },
      },
      {
        id: 'video-teflin-recap',
        youtubeId: 'AKPjKTS7RYE',
        title: {
          EN: 'Recap Day 1 & Day 2 TEFLIN International Conference',
          ID: 'Recap Day 1 & Day 2 The 72nd TEFLIN International Conference',
        },
        client: 'TEFLIN International',
        year: '2024',
        tags: {
          EN: ['Conference Recap', 'Event Highlights', 'Same-Day Production'],
          ID: ['Recap Acara', 'Highlight Konferensi', 'Produksi Cepat'],
        },
        description: {
          EN: 'High-energy 2-day conference recap highlighting opening ceremony, parallel symposium workshops, attendee discussions, and interactive exhibitions.',
          ID: 'Dokumentasi recap dua hari konferensi yang merangkum upacara pembukaan, simposium paralel, interaksi aktif peserta, dan pameran pendidikan.',
        },
        image: 'https://img.youtube.com/vi/AKPjKTS7RYE/maxresdefault.jpg',
        highlights: {
          EN: ['Comprehensive 2-day conference coverage', 'Engaging pacing tailored for digital platforms', 'Multi-speaker keynote synchronisation'],
          ID: ['Dokumentasi lengkap 2 hari rangkaian acara', 'Irama video memikat untuk publikasi digital', 'Sinkronisasi narasumber dan panggung utama'],
        },
      },
    ],
  },

  website: {
    slug: 'website',
    number: '03',
    title: {
      EN: 'Website',
      ID: 'Website',
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
    heroImage: '/web-adia.webp',
    projects: [
      {
        id: 'web-adia',
        projectUrl: 'https://adiasuites.th14ndr4.workers.dev/',
        title: {
          EN: 'ADIA Suites Hotel',
          ID: 'ADIA Suites Hotel',
        },
        client: 'ADIA Suites',
        year: '2024',
        tags: {
          EN: ['Hospitality', 'Next.js', 'Online Booking'],
          ID: ['Perhotelan', 'Next.js', 'Booking Online'],
        },
        description: {
          EN: 'Boutique hotel reservation and catalog website with instant room showcase and direct WhatsApp booking integration.',
          ID: 'Website reservasi hotel dan katalog kamar dengan tampilan visual modern serta pemesanan langsung via WhatsApp.',
        },
        image: '/web-adia.webp',
      },
      {
        id: 'web-medkraf',
        projectUrl: 'https://request-medkraf.vercel.app/',
        title: {
          EN: 'Media Kreatif Request Hub',
          ID: 'Media Kreatif Request Hub',
        },
        client: 'Tim Media Kreatif',
        year: '2024',
        tags: {
          EN: ['Web App', 'Workflow Management', 'Tracking System'],
          ID: ['Aplikasi Web', 'Manajemen Alur Kerja', 'Sistem Tracking'],
        },
        description: {
          EN: 'Production brief management system and real-time project workflow tracker for creative media teams.',
          ID: 'Platform sistem manajemen brief produksi kreatif dan pelacakan alur kerja proyek konten secara terintegrasi.',
        },
        image: '/web-medkraf.webp',
      },
      {
        id: 'web-bilis',
        projectUrl: 'https://bilis-tracking.vercel.app/',
        title: {
          EN: 'Bilis Tracking UIN Jakarta',
          ID: 'Bilis Tracking UIN Jakarta',
        },
        client: 'UIN Syarif Hidayatullah Jakarta',
        year: '2024',
        tags: {
          EN: ['GPS Tracking', 'Campus Mobility', 'Live Map'],
          ID: ['Tracking GPS', 'Transportasi Kampus', 'Peta Real-Time'],
        },
        description: {
          EN: 'Real-time GPS live tracking web application for campus electric shuttle buses, serving students, drivers, and admins.',
          ID: 'Aplikasi web live tracking GPS bus listrik kampus secara real-time untuk mahasiswa, sopir, dan administrator.',
        },
        image: '/web-bilis.webp',
      },
      {
        id: 'web-waqf',
        projectUrl: 'https://waqfforest.vercel.app/',
        title: {
          EN: 'WaqfForest Connect',
          ID: 'WaqfForest Connect',
        },
        client: 'Badan Wakaf Indonesia (BWI)',
        year: '2024',
        tags: {
          EN: ['Philanthropy Platform', 'Environmental Conservation', 'Digital Wakaf'],
          ID: ['Platform Filantropi', 'Konservasi Lingkungan', 'Wakaf Digital'],
        },
        description: {
          EN: 'Digital Islamic philanthropy platform for land conservation and sustainable forest preservation.',
          ID: 'Platform digital filantropi Islam untuk perlindungan lahan produktif dan pelestarian hutan berkelanjutan.',
        },
        image: '/web-waqf.webp',
      },
    ],
  },
};

// English slug aliases
portfolioCategories['photography'] = portfolioCategories['fotografi'];
portfolioCategories['videography'] = portfolioCategories['videografi'];
