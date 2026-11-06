'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-10 pb-16 bg-white overflow-hidden border-t border-zinc-100">
      {/* Giant "work together." Typography with Epic Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
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

          {/* "together." in Vibrant Electric Lime */}
          <text
            x="560"
            y="155"
            fill="#b8ff00"
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
        {/* Action Inquiry Section with Staggered Entrances */}
        <div className="mt-8 sm:mt-10 pt-12 border-t border-zinc-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
              Ready to create something remarkable?
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-lg">
              Have an upcoming event documentation, a cinematic TVC production brief, or a visual digital project?
              Let&apos;s collaborate and elevate your brand together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kreanata,%20saya%20tertarik%20untuk%20konsultasi%20proyek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-black text-white hover:bg-[#b8ff00] hover:text-black transition-all duration-300 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight shadow-md hover:shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat via WhatsApp
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

        {/* Multi-Column Info Footer with Staggered Column Entrances */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-bold text-black mb-3 text-base">Kreanata Studio.</div>
            <p className="leading-relaxed text-zinc-500">
              A boutique production house and digital creative agency based in Jakarta &amp; Bali, Indonesia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-bold text-black mb-3 uppercase tracking-wider text-xs">Expertise</div>
            <ul className="space-y-2 text-zinc-500">
              <li>Event Documentation</li>
              <li>Commercial Photography</li>
              <li>Cinematic Video Production</li>
              <li>Visual Identity &amp; Branding</li>
              <li>Modern Web Development</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-bold text-black mb-3 uppercase tracking-wider text-xs">Studio Base</div>
            <p className="text-zinc-500 flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-zinc-800 mt-0.5" />
              <span>South Jakarta &amp; Denpasar, Bali — Indonesia</span>
            </p>
            <p className="text-zinc-500 mt-2">Mon — Sat, 09:00 - 18:00 WIB</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-bold text-black mb-3 uppercase tracking-wider text-xs">Socials</div>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400"
        >
          <p>© 2025 Kreanata Studio. All rights reserved.</p>
          <p className="font-medium text-zinc-500">
            Bespoke Creative Production &amp; Digital Studio.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
