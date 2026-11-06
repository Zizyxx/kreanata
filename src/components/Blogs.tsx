'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Blogs() {
  const { language } = useLanguage();
  const t = translations[language].blogs;

  return (
    <section id="blog" className="relative py-28 sm:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Entrance Animation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14">
          <motion.h2
            key={`blogs-head-${language}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-bold text-black tracking-tight"
          >
            {t.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-[#b8ff00] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </span>
              <span className="border-b border-black pb-0.5 group-hover:border-[#b8ff00]">
                {t.exploreBtn}
              </span>
            </a>
          </motion.div>
        </div>

        {/* 4-Column Blog Card Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.list.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Meta info */}
              <div className="mt-4 flex items-center gap-2 text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
                <span className="text-black">{blog.category}</span>
                <span>•</span>
                <span>{blog.date}</span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-base font-bold text-black leading-snug group-hover:text-zinc-600 transition-colors">
                {blog.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

