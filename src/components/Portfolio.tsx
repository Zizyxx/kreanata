'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { projectsData, type ProjectItem } from '@/lib/data';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative pt-16 pb-28 sm:pb-36 bg-white overflow-hidden">
      {/* Top Transition Bar: Giant "projects" + Clean Metadata Pill + Action Button */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-zinc-100">
          {/* Left: Giant Lime "projects" Typography with Entrance Animation */}
          <div className="relative z-0 select-none">
            <motion.span
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] sm:text-[13vw] md:text-[11vw] lg:text-[10vw] font-black text-[#b8ff00] tracking-tighter leading-none block -translate-x-1"
              style={{ letterSpacing: '-0.06em' }}
            >
              projects
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-2 sm:mt-3"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-[11px] font-bold uppercase tracking-wider text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                CURATED ARCHIVE &bull; 2024&mdash;2025
              </span>
              <span className="text-xs text-zinc-400 hidden sm:inline">
                Film, Photography &amp; Digital Platforms
              </span>
            </motion.div>
          </div>

          {/* Right Action: EXPLORE PROJECTS Pill with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 self-start md:self-end mb-2"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all"
            >
              <span className="w-8 h-8 rounded-full bg-[#b8ff00] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </span>
              <span className="border-b border-black pb-0.5 group-hover:border-[#b8ff00]">
                EXPLORE ALL WORKS
              </span>
            </a>
          </motion.div>
        </div>

        {/* 4-Column Horizontal Project Gallery Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame with B&W to Color on Hover */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-108 transition-all duration-700 ease-out"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
                    View Project <ArrowUpRight className="w-3.5 h-3.5 text-[#b8ff00]" />
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
                    {project.category} &bull; {project.client}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 text-black hover:bg-zinc-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-black bg-[#b8ff00] px-2.5 py-0.5 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-black mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Client: <strong className="text-black">{selectedProject.client}</strong>
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 bg-black text-white hover:bg-[#b8ff00] hover:text-black rounded-full px-5 py-2.5 text-xs font-semibold tracking-tight transition-colors"
                >
                  Start Similar Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">
                Created with precision by Kreanata Studio. Every detail reflects our commitment
                to modern aesthetics, thoughtful composition, and impactful brand communication.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
