'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 py-24 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 p-12 md:p-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <span className="text-[#ccff00] text-sm font-semibold tracking-widest">
            MULAI PROYEK BERSAMA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Siap Wujudkan Ide Kreatif Anda?
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Konsultasikan kebutuhan visual dan digital Anda bersama tim
            Kreanata. Dari konsep hingga eksekusi, kami siap menjadi partner
            kreatif terbaik Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-[#ccff00] text-neutral-950 font-semibold rounded-full px-8 py-4 text-lg hover:bg-[#d4ff33] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat via WhatsApp
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 border border-zinc-700 text-white rounded-full px-8 py-4 text-lg hover:bg-zinc-800/50 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-5 h-5" />
              Kirim Email
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
