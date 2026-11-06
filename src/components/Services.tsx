'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Services() {
  const { language } = useLanguage();
  const services = translations[language].services;

  return (
    <section id="expertise" className="relative pt-20 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Row 1: 3 Numbered Columns Grid (01, 02, 03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col items-start"
            >
              {/* Outlined big number like 01, 02, 03 */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                className="text-6xl sm:text-7xl font-light text-zinc-300 tracking-tight select-none transition-colors duration-300 group-hover:text-black"
                style={{
                  WebkitTextStroke: '1px #d4d4d8',
                  color: 'transparent',
                }}
              >
                {service.number}
              </motion.span>

              {/* Title */}
              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-black tracking-tight group-hover:text-zinc-700 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Horizontal Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-zinc-100 my-12 sm:my-16 origin-left"
        />

        {/* Row 2: Next 3 services for full 6 capabilities (04, 05, 06) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {services.slice(3, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col items-start"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                className="text-6xl sm:text-7xl font-light text-zinc-300 tracking-tight select-none transition-colors duration-300 group-hover:text-black"
                style={{
                  WebkitTextStroke: '1px #d4d4d8',
                  color: 'transparent',
                }}
              >
                {service.number}
              </motion.span>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-black tracking-tight group-hover:text-zinc-700 transition-colors">
                {service.title}
              </h3>

              <p className="mt-3 text-zinc-500 text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
