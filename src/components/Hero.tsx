'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#ccff00]/[0.03] rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 rounded-full px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00]" />
            </span>
            Production House &amp; Digital Creative Studio
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl"
          variants={itemVariants}
        >
          Kami Ciptakan Visual yang Bercerita &amp;{' '}
          <span className="bg-gradient-to-r from-[#ccff00] to-emerald-400 bg-clip-text text-transparent">
            Menggerakkan
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Dari dokumentasi acara hingga produksi sinematik, fotografi komersial,
          dan solusi digital — Kreanata menghadirkan karya visual berkelas untuk
          brand Anda.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          variants={itemVariants}
        >
          <motion.button
            className="inline-flex items-center gap-2.5 bg-[#ccff00] text-neutral-950 font-semibold rounded-full px-7 py-3.5 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(204,255,0,0.25)] cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play className="w-4 h-4 fill-current" />
            Lihat Karya Kami
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-2.5 border border-zinc-700 text-white rounded-full px-7 py-3.5 transition-all duration-300 hover:bg-zinc-800/50 hover:border-zinc-600 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hubungi Kami
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Video Showreel Placeholder */}
        <motion.div
          className="mt-16 md:mt-20 w-full relative group"
          variants={itemVariants}
        >
          <div className="relative aspect-video w-full rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/40 z-10" />

            {/* Grid pattern for visual texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Centered play button and text */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4">
              <motion.div
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#ccff00]/50 group-hover:bg-[#ccff00]/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white group-hover:text-[#ccff00] group-hover:fill-[#ccff00] transition-colors duration-300" />
              </motion.div>
              <span className="text-sm md:text-base text-zinc-400 font-medium tracking-wider uppercase group-hover:text-zinc-300 transition-colors duration-300">
                Showreel 2024
              </span>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ccff00]/[0.08] to-transparent z-0 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#ccff00]/[0.08] to-transparent z-0 rounded-br-2xl" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
