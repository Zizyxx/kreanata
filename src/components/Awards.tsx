'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { clientLogos } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Awards() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].awards;

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? t.testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === t.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const testimonial = t.testimonials[currentTestimonial] || t.testimonials[0];

  return (
    <section id="awards" className="relative bg-white overflow-hidden">
      {/* Top Part: Honorable Awards Table (Light Background) */}
      <div className="relative pt-20 pb-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Headline + Sized "awards" SVG with Entrance Animation */}
          <div className="lg:col-span-5 relative flex flex-col justify-between z-0">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-3"
              >
                <span className="bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                  {t.badge}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]"
              >
                {t.title1}
                <br />
                {t.title2}
              </motion.h2>
            </div>

            {/* Lime "awards" word rendered with responsive SVG and Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-8 sm:mt-12 select-none pointer-events-none w-full"
            >
              <svg
                viewBox="0 0 500 130"
                className="w-full h-auto overflow-visible"
                preserveAspectRatio="xMinYMid meet"
              >
                <text
                  x="0"
                  y="105"
                  fill="#ffe600"
                  fontWeight="900"
                  fontSize="125"
                  letterSpacing="-0.06em"
                  style={{ fontFamily: 'var(--font-sans), sans-serif' }}
                >
                  awards
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Right Column: Narrative + Clean Table + Logos with Staggered Entrance */}
          <div className="lg:col-span-7 relative z-10 pt-2 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl mb-10"
            >
              {t.intro}
            </motion.p>

            {/* Clean Minimalist Awards Table with Individual Staggered Row Entrances */}
            <div className="border-t border-b border-zinc-200 divide-y divide-zinc-200 bg-white">
              {t.list.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-5 flex items-center justify-between text-xs sm:text-sm text-black group hover:bg-zinc-50/80 transition-colors px-2"
                >
                  <span className="w-12 font-bold text-zinc-900 group-hover:text-black">
                    {award.multiplier}
                  </span>
                  <span className="flex-1 font-medium text-zinc-800 pr-4">
                    {award.title} — <strong className="text-black font-semibold">{award.organizer}</strong>
                  </span>
                  <span className="text-zinc-500 font-mono text-xs whitespace-nowrap">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Partner Logos Strip with Staggered Entrance */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
              {clientLogos.map((logo, index) => (
                <motion.span
                  key={logo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.75, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                  className={`text-xl sm:text-2xl text-zinc-700 hover:text-black hover:opacity-100 transition-colors ${logo.font}`}
                >
                  {logo.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Part: Dark Testimonial Section with Rich Scroll-In Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#09090b] text-white py-20 sm:py-28 relative overflow-hidden"
      >
        {/* Subtle background ambient dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Rating + Stars + Clutch Badge + Nav Arrows */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight"
                >
                  {testimonial.rating}
                </motion.span>
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-1 text-[#ffe600]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ffe600]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase mt-1 block">
                    {testimonial.company}
                  </span>
                </motion.div>
              </div>

              {/* Slider Arrows */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 mt-8"
              >
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right: Big Impactful Quote + Author in Yellow */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${testimonial.id}-${language}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-200 leading-snug">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6 text-sm font-bold tracking-wider text-[#ffe600] uppercase">
                    {testimonial.author}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
