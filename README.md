# ⚡ Kreanata — Creative Digital Agency & Production Studio

Tampilan antarmuka website portofolio kelas dunia untuk **Kreanata**, dibangun dengan inspirasi desain presisi dari **Crafto Web Agency**:
- **Desain Ultra-Clean & Rapi:** Latar belakang putih bersih (`#ffffff`), tipografi display sans-serif berbobot tebal, aksen **Electric Lime (`#b8ff00`)**, dan garis grid kolom arsitektural vertikal (*architectural vertical lines*).
- **Tipografi Raksasa Dinamis:** Teks display berukuran masif di setiap transisi section (*"creative"*, *"about"*, *"projects"*, *"awards"*, *"work together"*).
- **Full Animations:**
  - Sunburst vector yang berputar halus di belakang teks Hero.
  - Floating ambient particles.
  - Rotating circular badge stamps berputar melingkar (*SVG text along path*).
  - Transisi hover zoom halus pada galeri karya.
  - Slider interaktif testimonial klien.
  - Lightbox modal preview detail proyek.
  - Indikator vertical "SCROLL TO TOP" & fixed side badge studio.

---

## 📁 Struktur File Proyek

```plaintext
kreanata/
├── src/
│   ├── app/
│   │   ├── globals.css         # Styling clean white, custom scrollbar, & rotasi slow-spin
│   │   ├── layout.tsx          # Metadata & konfigurasi typography
│   │   └── page.tsx            # Komposisi halaman berurutan sesuai visual mockup
│   ├── components/
│   │   ├── GridLines.tsx       # Garis kolom vertikal arsitektural di latar belakang
│   │   ├── SideAccents.tsx     # Indikator vertikal 'SCROLL TO TOP' & side badge
│   │   ├── Navbar.tsx          # Sticky minimalist navbar + tombol pill 'Hire agency →'
│   │   ├── Hero.tsx            # 'creative' raksasa + sunburst + 'We're a creative digital agency'
│   │   ├── About.tsx           # Foto B&W candid + 'We create unique digital experiences' + 'about'
│   │   ├── Services.tsx        # 01, 02, 03 kolom bernomor outline layanan
│   │   ├── Portfolio.tsx       # 'projects' raksasa + rotating stamp badge + 4 kartu karya dummy
│   │   ├── Awards.tsx          # 'Honorable awards' table + dark high-contrast testimonial slider
│   │   ├── Blogs.tsx           # 'Latest blogs' 4 kartu artikel monokrom
│   │   └── Footer.tsx          # 'work together' raksasa + circular stamp + CTA kolaborasi
│   └── lib/
│       ├── data.ts             # Data mock dummy lengkap (layanan, proyek, awards, testimoni, blog)
│       └── utils.ts            # Utility functions
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Cara Menjalankan

```bash
# Masuk ke direktori
cd d:\Code\kreanata

# Jalankan server pengembangan
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000).

```bash
# Build produksi
npm run build
npm run start
```
