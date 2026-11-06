'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="agency" className="relative py-28 sm:py-36 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Black & White Editorial Photo with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[1.15/1] shadow-xl bg-zinc-100 group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Kreanata Creative Team"
                className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative Content with Individual Staggered Entrances */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            <motion.h2
              key={`about-head-${language}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.12]"
            >
              {t.headline1}
              <br />
              {t.headline2}
            </motion.h2>

            <motion.p
              key={`about-p-${language}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              {t.p1}
              <strong className="text-black underline underline-offset-4 decoration-2 decoration-black">
                {t.highlight}
              </strong>
              {t.p2}
            </motion.p>

            {/* Action button with Lime Circle Accent */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex items-center"
            >
              <a
                href="#expertise"
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-[#b8ff00] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </span>
                <span className="border-b border-black pb-0.5 group-hover:border-[#b8ff00]">
                  {t.button}
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Giant Typography "about" cutting in from bottom-right with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        whileInView={{ opacity: 0.95, x: 0, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 bottom-0 pointer-events-none select-none z-0 translate-y-4 sm:translate-y-6 translate-x-2 sm:translate-x-4"
      >
        <span
          className="text-[11vw] sm:text-[12vw] lg:text-[13vw] font-black text-[#b8ff00] tracking-tighter leading-none block"
          style={{ letterSpacing: '-0.06em' }}
        >
          about
        </span>
      </motion.div>
    </section>
  );
}
