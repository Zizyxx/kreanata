'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';
import { stats } from '@/lib/data';

const features = [
  {
    icon: Award,
    title: 'Kualitas Premium',
    description:
      'Setiap proyek ditangani dengan standar produksi profesional dan peralatan terbaik.',
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description:
      'Komitmen deadline yang ketat tanpa mengorbankan kualitas hasil akhir.',
  },
  {
    icon: Users,
    title: 'Tim Berpengalaman',
    description:
      'Kolaborasi tim kreatif yang solid dengan pengalaman di berbagai industri.',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-neutral-950 py-24 px-4">
      {/* Section Header */}
      <div className="text-center">
        <span className="text-[#ccff00] text-sm font-semibold tracking-widest uppercase">
          MENGAPA KREANATA
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto text-center mt-4">
          Partner Visual Terpercaya untuk Brand Anda
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto text-center mt-4">
          Kami menggabungkan kreativitas, teknologi, dan dedikasi untuk
          menghasilkan karya visual yang tidak hanya indah, tetapi juga strategis
          dan berdampak.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-[#ccff00]">
              {stat.value}
            </div>
            <div className="text-zinc-400 text-sm mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Feature / Value Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -2 }}
            >
              <div className="rounded-xl bg-zinc-800 w-12 h-12 flex items-center justify-center text-[#ccff00] mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
