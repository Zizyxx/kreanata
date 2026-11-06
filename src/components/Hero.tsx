'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-white"
    >
      {/* Floating subtle particles / dots (exact matching reference image) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-6, 6, -6], x: [-3, 3, -3] }}
        transition={{
          opacity: { duration: 1 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-44 left-[18%] w-1.5 h-1.5 rounded-full bg-black/80 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [8, -8, 8], x: [4, -4, 4] }}
        transition={{
          opacity: { duration: 1, delay: 0.2 },
          y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-36 left-[30%] w-1 h-1 rounded-full bg-[#ffe600] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-10, 10, -10] }}
        transition={{
          opacity: { duration: 1, delay: 0.4 },
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute top-52 right-[22%] w-1.5 h-1.5 rounded-full bg-black/40 pointer-events-none"
      />

      {/* Giant Edge-to-Edge Background Word "creative" with Dramatic Entrance */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.span
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[34vw] sm:text-[34vw] md:text-[35vw] lg:text-[35vw] xl:text-[36vw] font-bold text-[#ffe600] tracking-tighter leading-none whitespace-nowrap block text-center transform -translate-y-1 sm:-translate-y-2"
          style={{
            fontFamily: 'var(--font-sans), sans-serif',
            letterSpacing: '-0.06em',
          }}
        >
          creative
        </motion.span>
      </div>

      {/* Main Hero Center Container with Sunburst & Foreground Headline */}
      <div className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* Radiating Optical Sunburst Graphic with Scale & Spin Entrance */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        >
          <div className="relative w-[320px] sm:w-[440px] md:w-[540px] lg:w-[620px] h-[320px] sm:h-[440px] md:h-[540px] lg:h-[620px]">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full animate-spin-slow opacity-80"
              fill="none"
              stroke="#ffe600"
              strokeWidth="0.85"
            >
              {Array.from({ length: 64 }).map((_, i) => {
                const angle = (i * 360) / 64;
                return (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={100 + 85 * Math.cos((angle * Math.PI) / 180)}
                    y2={100 + 85 * Math.sin((angle * Math.PI) / 180)}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Foreground Headline: Bilingual (EN / ID) */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1] overflow-hidden">
            <motion.span
              key={`line1-${language}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t.line1}
            </motion.span>
            <motion.span
              key={`line2-${language}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t.line2}
            </motion.span>
          </h1>
        </div>
      </div>

      {/* Sub-bar / Info Ticker Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-14 border-t border-zinc-100"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-wider text-zinc-800 uppercase">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-black shrink-0" />
            <span>{t.tickerStudio}</span>
          </motion.div>

          <div className="hidden md:block w-12 h-[1px] bg-zinc-300" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-1.5 text-zinc-700"
          >
            <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
            <span>{t.tickerLocation}</span>
          </motion.div>

          <div className="hidden md:block w-12 h-[1px] bg-zinc-300" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-black fill-black shrink-0" />
            <span>{t.tickerQuality}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
