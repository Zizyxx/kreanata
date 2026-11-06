'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle, X, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { type PortfolioCategory, type PortfolioProject, portfolioCategories } from '@/lib/portfolioData';

interface Props {
  category: PortfolioCategory;
}

export default function ProjectClientView({ category }: Props) {
  const { language, setLanguage } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [photoFilter, setPhotoFilter] = useState<'beauty-shoot' | 'dokumentasi' | 'all'>('beauty-shoot');

  const isPhoto = category.slug === 'fotografi' || category.slug === 'photography';

  // Filter projects for photography pillar
  const displayedProjects = isPhoto
    ? category.projects.filter((p) => photoFilter === 'all' || p.categoryType === photoFilter)
    : category.projects;

  // Canonical 4 pillars for cross-navigation
  const canonicalSlugs = ['fotografi', 'videografi', 'desain', 'website'];
  const otherCategories = canonicalSlugs
    .filter((s) => s !== category.slug && s !== (category.slug === 'photography' ? 'fotografi' : ''))
    .map((s) => portfolioCategories[s]);

  return (
    <div className="relative min-h-screen bg-white text-zinc-950 selection:bg-[#ffe600] selection:text-black">
      {/* Sticky Header with Breadcrumb & Back Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Logo & Breadcrumbs */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-extrabold text-sm tracking-tighter transition-transform duration-300 group-hover:scale-105">
                <span className="text-[#ffe600]">k</span>.
              </div>
              <span className="font-bold text-lg tracking-tight text-black hidden sm:inline">
                Kreanata
              </span>
            </Link>

            <span className="text-zinc-300 hidden sm:inline">/</span>

            <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500">
              <Link href="/#projects" className="hover:text-black transition-colors">
                {language === 'EN' ? 'Projects' : 'Proyek'}
              </Link>
              <span>/</span>
              <span className="text-black font-semibold uppercase tracking-wider text-[11px] sm:text-xs bg-zinc-100 px-2.5 py-0.5 rounded-full">
                {category.title[language]}
              </span>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-zinc-100 p-1 rounded-full text-xs font-semibold">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'EN' ? 'bg-black text-[#ffe600] shadow-sm' : 'text-zinc-500 hover:text-black'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ID')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'ID' ? 'bg-black text-[#ffe600] shadow-sm' : 'text-zinc-500 hover:text-black'
                }`}
              >
                ID
              </button>
            </div>

            {/* Back to Home Button */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold border border-zinc-200 hover:border-black rounded-full px-4 py-2 text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{language === 'EN' ? 'Back to Home' : 'Kembali'}</span>
            </Link>

            {/* CTA Button */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kreanata,%20saya%20tertarik%20dengan%20layanan%20portofolio%20ini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#ffe600] hover:text-black rounded-full px-4 sm:px-5 py-2 text-xs font-semibold tracking-tight transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{language === 'EN' ? 'Start Project' : 'Mulai Proyek'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Category Hero Banner */}
        <div className="relative border-b border-zinc-200 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ffe600]" />
              {category.badge[language]}
            </span>
            <span className="text-zinc-400 text-xs hidden sm:inline uppercase tracking-widest font-mono">
              PILAR {category.number} / 04
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              {/* Title strictly "Fotografi" / "Photography" */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-[1.08]">
                {category.title[language]}
              </h1>
              <p className="mt-6 text-base sm:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                {category.subtitle[language]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4 bg-zinc-50 border border-zinc-200 rounded-2xl p-6"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-black mb-2">
                {language === 'EN' ? 'Scope of Production' : 'Standar Produksi'}
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {category.overview[language]}
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center gap-2 text-xs font-semibold text-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                <span>Jakarta & Jabodetabek</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section Header & Sub-Category Filters */}
        <div className="mt-14 sm:mt-18 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              {language === 'EN' ? 'Curated Visual Archive' : 'Katalog Karya Pilihan'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              {language === 'EN'
                ? `Displaying ${displayedProjects.length} photographs`
                : `Menampilkan ${displayedProjects.length} foto pilihan`}
            </p>
          </div>

          {/* 2 Kategori Khusus Fotografi: Beauty Shoot & Dokumentasi */}
          {isPhoto ? (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-zinc-100 rounded-full border border-zinc-200">
              <button
                onClick={() => setPhotoFilter('beauty-shoot')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  photoFilter === 'beauty-shoot'
                    ? 'bg-black text-[#ffe600] shadow-md'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200/70'
                }`}
              >
                Beauty Shoot
              </button>
              <button
                onClick={() => setPhotoFilter('dokumentasi')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  photoFilter === 'dokumentasi'
                    ? 'bg-black text-[#ffe600] shadow-md'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200/70'
                }`}
              >
                {language === 'EN' ? 'Documentation' : 'Dokumentasi'}
              </button>
              <button
                onClick={() => setPhotoFilter('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  photoFilter === 'all'
                    ? 'bg-black text-[#ffe600] shadow-md'
                    : 'text-zinc-600 hover:text-black hover:bg-zinc-200/70'
                }`}
              >
                {language === 'EN' ? 'All' : 'Semua'}
              </button>
            </div>
          ) : (
            <div className="text-xs text-zinc-400 font-medium hidden sm:block">
              {language === 'EN'
                ? 'Hover to reveal color • Click for full preview'
                : 'Arahkan kursor untuk warna • Klik untuk detail'}
            </div>
          )}
        </div>

        {/* Photography: Clean Editorial 3-Column Grid without any text captions */}
        {isPhoto ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 6) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] sm:aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Clean B&W Image turning to rich vivid color on hover */}
                <img
                  src={project.image}
                  alt={project.title[language]}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Minimalist Hover Accent */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="w-11 h-11 rounded-full bg-[#ffe600] text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5 text-black stroke-[2.5]" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Other 3 Pillars: Detailed Case Study Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col bg-white border border-zinc-200 hover:border-black rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Media Image Frame: B&W by default, vivid color on hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Top Badge: Client & Year */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-bold text-black bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      {project.client} • {project.year}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#ffe600] px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {language === 'EN' ? 'Preview Details' : 'Lihat Detail Proyek'}
                      <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                    </span>
                  </div>
                </div>

                {/* Information Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags[language].map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-black leading-snug group-hover:text-zinc-600 transition-colors">
                      {project.title[language]}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Key Deliverables Highlights */}
                  {project.highlights && (
                    <div className="mt-5 pt-4 border-t border-zinc-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black mb-2">
                        {language === 'EN' ? 'Key Deliverables' : 'Fitur & Hasil Produksi'}
                      </div>
                      <ul className="space-y-1.5">
                        {project.highlights[language].map((hl) => (
                          <li key={hl} className="text-xs text-zinc-500 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe600] fill-black shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Cross-Navigation: Explore the Other 3 Pillars */}
        <section className="mt-28 pt-16 border-t border-zinc-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-black uppercase tracking-wider bg-zinc-100 px-3 py-1 rounded-full">
                {language === 'EN' ? 'Explore Other Disciplines' : 'Jelajahi Pilar Lainnya'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black mt-3">
                {language === 'EN' ? 'Complete Creative Production' : 'Layanan Produksi Lainnya'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="group relative border border-zinc-200 hover:border-black rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg bg-zinc-50 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-400">
                    <span>PILAR {other.number}</span>
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:bg-[#ffe600] transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-black mt-4 group-hover:text-zinc-700 transition-colors">
                    {other.title[language]}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    {other.subtitle[language]}
                  </p>
                </div>
                <div className="mt-6 text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 border-b border-black self-start pb-0.5">
                  {language === 'EN' ? 'View Portfolio' : 'Buka Portofolio'}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Contact / Inquiry Card */}
        <section className="mt-24 bg-black text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#ffe600]">
              {language === 'EN' ? 'Collaborate with Kreanata' : 'Kolaborasi Bersama Kreanata'}
            </span>
            <h3 className="text-3xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
              {language === 'EN'
                ? `Have an upcoming ${category.slug} project?`
                : `Punya rencana produksi ${category.title[language]}?`}
            </h3>
            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {language === 'EN'
                ? 'Tell us your visual goals, timeline, and brief. Our team in Jakarta is ready to serve clients across Jabodetabek with bespoke production quality.'
                : 'Konsultasikan ide, jadwal, dan konsep visual Anda. Tim kami di Jakarta siap melayani kebutuhan dokumentasi dan produksi visual di seluruh wilayah Jabodetabek.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Kreanata,%20saya%20tertarik%20untuk%20diskusi%20proyek%20${category.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffe600] text-black hover:bg-white transition-colors rounded-full px-7 py-3.5 text-sm font-bold shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                {language === 'EN' ? 'Discuss on WhatsApp' : 'Konsultasi via WhatsApp'}
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-white rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                {language === 'EN' ? 'All Contact Options' : 'Opsi Kontak Lainnya'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Lightbox / Modal for Expanded Photo / Project Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl p-5 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 text-black hover:bg-zinc-200 transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image Preview */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Header & Inquire */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-black bg-[#ffe600] px-3 py-0.5 rounded-full">
                      {selectedProject.categoryType
                        ? selectedProject.categoryType === 'beauty-shoot'
                          ? 'Beauty Shoot'
                          : language === 'EN'
                          ? 'Documentation'
                          : 'Dokumentasi'
                        : category.title[language]}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
                    {selectedProject.title[language]}
                  </h3>
                </div>

                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Kreanata,%20saya%20tertarik%20dengan%20proyek%20foto%20${encodeURIComponent(selectedProject.title[language])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#ffe600] hover:text-black rounded-full px-6 py-3 text-xs sm:text-sm font-semibold tracking-tight transition-colors self-start sm:self-center shrink-0 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {language === 'EN' ? 'Inquire Similar Shoot' : 'Konsultasi Sesi Foto'}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                {selectedProject.description[language]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
