'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Minimalist Studio Logo mark */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-extrabold text-sm tracking-tighter transition-transform duration-300 group-hover:scale-105">
            <span className="text-[#ffe600]">k</span>.
          </div>
          <span className="font-bold text-lg tracking-tight text-black">
            Kreanata
          </span>
        </motion.a>

        {/* Center: Desktop Navigation Links with Staggered Entrance */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {t.links.map((link, idx) => (
            <motion.button
              key={`${link.href}-${language}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => handleNavClick(link.href)}
              className="text-xs lg:text-sm font-medium text-zinc-600 hover:text-black transition-colors cursor-pointer"
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        {/* Right: Language Switcher (EN / ID) + Start Project Pill CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center gap-3.5"
        >
          {/* Minimalist Segmented Language Switcher (EN | ID) */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-bold">
            <button
              onClick={() => setLanguage('EN')}
              aria-label="Switch language to English"
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                language === 'EN'
                  ? 'bg-black text-[#ffe600] shadow-sm'
                  : 'text-zinc-500 hover:text-black'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ID')}
              aria-label="Ganti bahasa ke Indonesia"
              className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                language === 'ID'
                  ? 'bg-black text-[#ffe600] shadow-sm'
                  : 'text-zinc-500 hover:text-black'
              }`}
            >
              ID
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#ffe600] hover:text-black transition-all duration-300 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow"
          >
            {t.hire}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Mobile menu and mobile language switcher */}
        <div className="flex items-center gap-2 sm:hidden">
          <div className="flex items-center p-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'EN'
                  ? 'bg-black text-[#ffe600]'
                  : 'text-zinc-500'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ID')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === 'ID'
                  ? 'bg-black text-[#ffe600]'
                  : 'text-zinc-500'
              }`}
            >
              ID
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  {language === 'EN' ? 'Language' : 'Bahasa'}
                </span>
                <div className="flex items-center p-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold">
                  <button
                    onClick={() => setLanguage('EN')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      language === 'EN'
                        ? 'bg-black text-[#ffe600]'
                        : 'text-zinc-500'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ID')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      language === 'ID'
                        ? 'bg-black text-[#ffe600]'
                        : 'text-zinc-500'
                    }`}
                  >
                    Indonesia
                  </button>
                </div>
              </div>

              {t.links.map((link) => (
                <button
                  key={`${link.href}-${language}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-semibold text-zinc-800 hover:text-black py-1"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white rounded-full py-3 text-sm font-semibold hover:bg-[#ffe600] hover:text-black transition-colors"
              >
                {t.hire}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
