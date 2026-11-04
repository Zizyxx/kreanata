'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  portfolioTabs,
  portfolioItems,
  type PortfolioCategory,
} from '@/lib/data';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all');

  const filteredItems =
    activeTab === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="works" className="bg-neutral-950 py-24 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-[#ccff00] text-sm font-semibold tracking-widest uppercase mb-4">
          PORTOFOLIO
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Karya Terpilih Kami
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 items-center justify-center mb-12 flex-wrap">
        {portfolioTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`rounded-full px-5 py-2 text-sm transition-all ${
              activeTab === tab.value
                ? 'bg-[#ccff00] text-neutral-950 font-semibold'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              {/* Image / Placeholder Area */}
              <div
                className={`${
                  item.aspectRatio === 'video'
                    ? 'aspect-video'
                    : 'aspect-[4/5]'
                } bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center`}
              >
                <span className="text-zinc-600 text-sm font-medium text-center px-4">
                  {item.title}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="inline-block bg-[#ccff00] text-neutral-950 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {item.categoryLabel}
                    </span>
                    <p className="text-white text-lg font-semibold">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white group-hover:border-[#ccff00] group-hover:text-[#ccff00] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
