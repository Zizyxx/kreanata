'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer id="contact" className="relative pt-10 pb-16 bg-white overflow-hidden border-t border-zinc-100">
      {/* Giant "work together." Typography with In & Out Scroll Animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.94, y: 35, transition: { duration: 0.4, ease: 'easeIn' } },
          visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full overflow-hidden py-6 sm:py-10 select-none pointer-events-none flex items-center justify-center px-2 sm:px-6"
      >
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto max-h-[35vh] overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* "work" in Solid Black */}
          <text
            x="30"
            y="155"
            fill="#000000"
            fontWeight="900"
            fontSize="215"
            letterSpacing="-0.06em"
            style={{ fontFamily: 'var(--font-sans), sans-serif' }}
          >
            work
          </text>

          {/* "together." in Vibrant Electric Yellow */}
          <text
            x="560"
            y="155"
            fill="#ffe600"
            fontWeight="900"
            fontSize="215"
            letterSpacing="-0.06em"
            style={{ fontFamily: 'var(--font-sans), sans-serif' }}
          >
            together.
          </text>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Action Inquiry Section with In & Out Staggered Scroll Animation */}
        <div className="mt-8 sm:mt-10 pt-12 border-t border-zinc-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
              {t.inquiryTitle}
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-lg">
              {t.inquirySubtitle}
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25, transition: { duration: 0.35, ease: 'easeIn' } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kreanata,%20saya%20tertarik%20untuk%20konsultasi%20proyek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-black text-white hover:bg-[#ffe600] hover:text-black transition-all duration-300 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight shadow-md hover:shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              {t.chatWa}
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:halo@kreanata.com?subject=Inquiry%20Project%20Kreanata"
              className="inline-flex items-center gap-2 border border-zinc-300 hover:border-black rounded-full px-7 py-3.5 text-sm font-semibold text-black transition-colors"
            >
              <Mail className="w-4 h-4" />
              halo@kreanata.com
            </a>
          </motion.div>
        </div>

        {/* Multi-Column Info Footer with Staggered In & Out Column Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-bold text-black mb-3 text-base">Kreanata Studio.</div>
            <p className="leading-relaxed text-zinc-500">
              {t.studioDesc}
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-bold text-black mb-3 uppercase tracking-wider text-xs">
              {t.expertiseTitle}
            </div>
            <ul className="space-y-2 text-zinc-500">
              {t.expertiseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.19, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-bold text-black mb-3 uppercase tracking-wider text-xs">
              {t.studioBaseTitle}
            </div>
            <p className="text-zinc-500 flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-zinc-800 mt-0.5" />
              <span>{t.studioBaseText}</span>
            </p>
            <p className="text-zinc-500 mt-2">{t.studioHours}</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-bold text-black mb-3 uppercase tracking-wider text-xs">
              {t.socialsTitle}
            </div>
            <div className="flex flex-wrap gap-3 font-semibold text-zinc-700">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-black transition-colors">
                Instagram <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-black transition-colors">
                YouTube <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-black transition-colors">
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-black transition-colors">
                Behance <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          variants={{
            hidden: { opacity: 0, transition: { duration: 0.3 } },
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400"
        >
          <p>© 2025 Kreanata Studio. {t.rights}</p>
          <p className="font-medium text-zinc-500">
            {t.copyrightDesc}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
