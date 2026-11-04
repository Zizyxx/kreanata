'use client';

import { motion } from 'framer-motion';
import { Camera, Aperture, Clapperboard, Share2, Palette, Globe } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Aperture,
  Clapperboard,
  Share2,
  Palette,
  Globe,
};

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[#ccff00] text-sm font-medium tracking-widest uppercase">
            — LAYANAN KAMI
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Solusi Kreatif untuk Setiap
            <br />
            Kebutuhan Visual
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-base md:text-lg">
            Kami menghadirkan berbagai layanan kreatif yang dirancang untuk
            mengangkat brand Anda ke level berikutnya.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#ccff00]/30 hover:bg-zinc-900/80 ${service.gridClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 text-[#ccff00]" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mt-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mt-2 text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
