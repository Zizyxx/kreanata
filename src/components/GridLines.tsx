'use client';

import { motion } from 'framer-motion';

export default function GridLines() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="fixed inset-0 pointer-events-none z-0 flex justify-center"
    >
      <div className="w-full max-w-7xl h-full grid grid-cols-6 md:grid-cols-8 px-4 sm:px-6 lg:px-8">
        <div className="border-l border-zinc-100/90 h-full" />
        <div className="border-l border-zinc-100/90 h-full" />
        <div className="border-l border-zinc-100/90 h-full" />
        <div className="border-l border-zinc-100/90 h-full" />
        <div className="border-l border-zinc-100/90 h-full" />
        <div className="border-l border-zinc-100/90 h-full" />
        <div className="border-l border-zinc-100/90 h-full hidden md:block" />
        <div className="border-l border-r border-zinc-100/90 h-full hidden md:block" />
      </div>
    </motion.div>
  );
}

