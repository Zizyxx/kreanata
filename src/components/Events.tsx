'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Events() {
  const { language } = useLanguage();
  const t = translations[language].events;

  return (
    <section id="events" className="relative py-28 sm:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with In & Out Scroll Animation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14">
          <div>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-black tracking-tight"
            >
              {t.title}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15, transition: { duration: 0.3, ease: 'easeIn' } },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-xs sm:text-sm text-zinc-400 font-medium mt-1.5 uppercase tracking-wider"
            >
              {t.subtitle}
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 25, transition: { duration: 0.3, ease: 'easeIn' } },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-[#ffe600] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </span>
              <span className="border-b border-black pb-0.5 group-hover:border-[#ffe600]">
                {t.exploreBtn}
              </span>
            </a>
          </motion.div>
        </div>

        {/* 4-Column Event Card Grid with In & Out Staggered Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.list.map((item, index) => (
            <motion.article
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40, transition: { duration: 0.35, ease: 'easeIn' } },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Event Image Frame with B&W by default and full vivid color on hover */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle Hover Overlay with Pill */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-black/85 backdrop-blur-md px-3 py-1 rounded-full shadow-lg">
                    Dokumentasi <ArrowUpRight className="w-3 h-3 text-[#ffe600]" />
                  </span>
                </div>
              </div>

              {/* Meta info: Category & Date */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
                <span className="text-black bg-zinc-100 px-2 py-0.5 rounded text-[10px]">
                  {item.category}
                </span>
                <span>{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="mt-2.5 text-base font-bold text-black leading-snug group-hover:text-zinc-600 transition-colors">
                {item.title}
              </h3>

              {/* Location */}
              <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <span>{item.location}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

