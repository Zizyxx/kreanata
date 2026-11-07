'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language].portfolio;

  return (
    <section id="projects" className="relative pt-16 pb-28 sm:pb-36 bg-white overflow-hidden scroll-mt-24">
      {/* Top Transition Bar: Giant "projects" + Clean Metadata Pill + Action Button */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-zinc-100">
          {/* Left: Giant Lime "projects" Typography with In & Out Scroll Animation */}
          <div className="relative z-0 select-none">
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95, transition: { duration: 0.4, ease: 'easeIn' } },
                visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-[14vw] sm:text-[13vw] md:text-[11vw] lg:text-[10vw] font-black text-[#ffe600] tracking-tighter leading-none block -translate-x-1"
              style={{ letterSpacing: '-0.06em' }}
            >
              projects
            </motion.span>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15, transition: { duration: 0.3, ease: 'easeIn' } },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-center gap-3 mt-2 sm:mt-3"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-[11px] font-bold uppercase tracking-wider text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                {t.badge}
              </span>
              <span className="text-xs text-zinc-400 hidden sm:inline">
                {t.subtitle}
              </span>
            </motion.div>
          </div>

          {/* Right Action: EXPLORE PROJECTS Pill with In & Out Scroll Animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30, transition: { duration: 0.3, ease: 'easeIn' } },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative z-20 self-start md:self-end mb-2"
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

        {/* 3-Column Horizontal Project Gallery Cards with In & Out Staggered Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40, transition: { duration: 0.35, ease: 'easeIn' } },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              className="flex flex-col"
            >
              <Link
                href={project.link}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Frame with B&W to Color on Hover */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-108 transition-all duration-700 ease-out"
                  />

                  {/* Top Pillar Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                      {project.pillar} • {project.category}
                    </span>
                  </div>

                  {/* Subtle Hover Overlay with Direct CTA */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                      {t.viewProject} <ArrowUpRight className="w-3.5 h-3.5 text-[#ffe600]" />
                    </span>
                  </div>
                </div>

                {/* Caption Below Image */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-black group-hover:text-zinc-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      {project.client}
                    </p>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-[#ffe600] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
