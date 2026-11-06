export interface PortfolioProject {
  id: string;
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
      EN: 'Commercial & Editorial Photography',
      ID: 'Fotografi Komersial & Editorial',
    },
    subtitle: {
      EN: 'High-end commercial product shoots, fashion editorial lookbooks, corporate headshots, and architectural captures.',
      ID: 'Dokumentasi visual komersial, editorial fashion lookbook, foto produk presisi, dan arsitektur kelas atas.',
    },
    badge: {
      EN: 'PILLAR 01 • PHOTOGRAPHY ARCHIVE',
      ID: 'PILAR 01 • ARSIP FOTOGRAFI',
    },
    overview: {
      EN: 'We deliver cinema-grade camera optics, controlled studio lighting, and meticulous color grading. Every shot is crafted to tell a story and elevate your brand aesthetic across digital and print media.',
      ID: 'Kami menghadirkan kamera optik berstandar tinggi, tata pencahayaan studio yang presisi, dan pewarnaan detail. Setiap foto dirancang untuk bercerita dan mengangkat citra visual brand Anda.',
    },
    heroImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    projects: [
      {
        id: 'photo-1',
        title: {
          EN: 'Aura Noir Fashion Editorial Lookbook',
          ID: 'Lookbook Editorial Fashion Aura Noir',
        },
        client: 'Maison De Mode',
        year: '2024',
        tags: {
          EN: ['Fashion Editorial', 'Studio Lighting', 'High-Res Stills'],
          ID: ['Editorial Fashion', 'Tata Cahaya Studio', 'Resolusi Tinggi'],
        },
        description: {
          EN: 'High-contrast studio editorial series exploring monochromatic elegance, architectural shadows, and luxury textile textures.',
          ID: 'Seri editorial studio berkarakter monokrom yang menonjolkan keanggunan siluet, bayangan arsitektural, dan tekstur kain mewah.',
        },
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Full medium format capture', 'Custom color grading in Capture One', 'Print-ready retouched master files'],
          ID: ['Pengambilan gambar format medium', 'Pewarnaan kustom Capture One', 'Master file siap cetak resolusi tinggi'],
        },
      },
      {
        id: 'photo-2',
        title: {
          EN: 'Kultura Artisan Coffee Product Series',
          ID: 'Seri Fotografi Produk Kopi Kultura',
        },
        client: 'Kultura Coffee Co.',
        year: '2024',
        tags: {
          EN: ['Product Photography', 'Macro Capture', 'Commercial Shoot'],
          ID: ['Foto Produk', 'Tangkapan Makro', 'Sesi Komersial'],
        },
        description: {
          EN: 'Commercial product photography series capturing the artisanal coffee roasting process, packaging textures, and pour-over rituals.',
          ID: 'Foto produk komersial yang mengabadikan proses sangrai biji kopi, detail kemasan ramah lingkungan, dan ritual seduh manual.',
        },
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Focus stacked macro imagery', 'Natural organic warm lighting', 'Digital catalog optimization'],
          ID: ['Teknik fokus makro detail', 'Pencahayaan hangat natural', 'Optimalisasi katalog digital e-commerce'],
        },
      },
      {
        id: 'photo-3',
        title: {
          EN: 'Luminaire Geneva Luxury Timepiece Macro',
          ID: 'Sesi Makro Arloji Mewah Luminaire Geneva',
        },
        client: 'Luminaire Haute Horlogerie',
        year: '2024',
        tags: {
          EN: ['Macro Precision', 'Luxury Product', 'Strobe Studio'],
          ID: ['Presisi Makro', 'Produk Mewah', 'Studio Strobo'],
        },
        description: {
          EN: 'Microscopic precision photography highlighting sapphire crystal facets, brushed steel chronographs, and mechanical movement details.',
          ID: 'Fotografi presisi tinggi yang menonjolkan kilau kristal safir, tekstur baja arloji, dan pergerakan mekanis mesin jam tangan mewah.',
        },
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Sub-millimeter macro sharpness', 'Polarized lighting glare control', 'Global advertising visual assets'],
          ID: ['Ketajaman makro sub-milimeter', 'Kontrol pantulan cahaya polarisasi', 'Aset visual kampanye periklanan global'],
        },
      },
      {
        id: 'photo-4',
        title: {
          EN: 'Monolith Architectural Interior Capture',
          ID: 'Dokumentasi Interior Arsitektur Monolith',
        },
        client: 'Studio Arkitektur Batavia',
        year: '2024',
        tags: {
          EN: ['Architecture', 'Interior Design', 'Ambient Light'],
          ID: ['Arsitektur', 'Desain Interior', 'Cahaya Alami'],
        },
        description: {
          EN: 'Architectural interior photo monograph featuring concrete minimalism, geometric natural lighting, and handcrafted furniture integration.',
          ID: 'Monograf foto interior yang menampilkan keindahan beton ekspos, geometri cahaya matahari alami, dan furnitur buatan tangan.',
        },
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Perspective-control tilt-shift capture', 'Natural dynamic range blending', 'Architectural award submission portfolio'],
          ID: ['Lensa tilt-shift kontrol perspektif', 'Penggabungan dynamic range alami', 'Portofolio pengajuan kurasi arsitektur'],
        },
      },
      {
        id: 'photo-5',
        title: {
          EN: 'Executive Leadership Corporate Portraiture',
          ID: 'Potret Korporat Kepemimpinan Eksekutif',
        },
        client: 'Artha Capital Management',
        year: '2024',
        tags: {
          EN: ['Corporate Headshots', 'Executive Portrayal', 'On-Location'],
          ID: ['Potret Korporat', 'Profil Eksekutif', 'Lokasi Kantor'],
        },
        description: {
          EN: 'Modern corporate portraits balancing executive authority with human approachability for annual reports and press releases.',
          ID: 'Sesi foto profil eksekutif modern yang memadukan wibawa kepemimpinan dan kesan ramah untuk laporan tahunan dan publikasi pers.',
        },
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Cinematic rim lighting setup', 'On-location corporate boardroom staging', 'Multi-channel press assets kit'],
          ID: ['Tata lampu rim sinematik', 'Penataan ruang rapat kantor', 'Paket aset foto media dan pers'],
        },
      },
      {
        id: 'photo-6',
        title: {
          EN: 'Vanguard Streetwear Capsule Campaign',
          ID: 'Kampanye Koleksi Kapsul Streetwear Vanguard',
        },
        client: 'Vanguard Apparel Jakarta',
        year: '2024',
        tags: {
          EN: ['Streetwear', 'Urban Outdoor', 'Golden Hour'],
          ID: ['Streetwear', 'Urban Terbuka', 'Cahaya Senja'],
        },
        description: {
          EN: 'Energetic outdoor lookbook shot in dynamic urban environments during golden hour to showcase modern street fashion.',
          ID: 'Lookbook luar ruangan berenergi tinggi dengan latar lanskap perkotaan saat senja untuk menampilkan koleksi busana jalanan modern.',
        },
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        highlights: {
          EN: ['Dynamic motion freeze styling', '35mm film emulation grading', 'Social media launch gallery'],
          ID: ['Styling tangkapan gerak dinamis', 'Pewarnaan emulasi seluloid 35mm', 'Galeri peluncuran media sosial'],
        },
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
