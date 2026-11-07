'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

function Interactive3DLogo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics-based spring animations for organic tilt
  const springConfig = { damping: 18, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [22, -22]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-22, 22]), springConfig);
  const scale = useSpring(isHovered ? 1.08 : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[500px] flex items-center justify-center p-4 sm:p-8 cursor-pointer select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-full"
      >
        {/* Ambient 3D Depth Glow behind logo */}
        <div
          className={`absolute inset-0 rounded-full bg-[#ffe600] pointer-events-none filter blur-3xl transition-opacity duration-500 ${
            isHovered ? 'opacity-35 scale-110' : 'opacity-0 scale-95'
          }`}
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* 3D Elevated Logo Image with Drop Shadow Depth */}
        <motion.img
          src="https://res.cloudinary.com/xidvgvul/image/upload/v1794044011/Kreanata_Logo_Trial.png"
          alt="Kreanata Logo"
          style={{
            transform: 'translateZ(40px)',
          }}
          className={`w-full h-auto object-contain pointer-events-none transition-all duration-300 ${
            isHovered
              ? 'drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]'
              : 'drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]'
          }`}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Kreanata Brand Logo with Interactive 3D Tilt Hover Effect */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40, scale: 0.95, transition: { duration: 0.4, ease: 'easeIn' } },
              visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-6 flex items-center justify-center py-4 sm:py-8"
          >
            <Interactive3DLogo />
          </motion.div>

          {/* Right Column: Narrative Content with In & Out Staggered Scroll Animation */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 35, transition: { duration: 0.35, ease: 'easeIn' } },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.12]"
            >
              {t.headline1}
              <br />
              {t.headline2}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30, transition: { duration: 0.35, ease: 'easeIn' } },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-8 text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              {t.p1}
              <strong className="text-black underline underline-offset-4 decoration-2 decoration-black">
                {t.highlight}
              </strong>
              {t.p2}
            </motion.p>

            {/* Action button with Lime Circle Accent */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25, transition: { duration: 0.35, ease: 'easeIn' } },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-10 flex items-center"
            >
              <a
                href="#expertise"
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-[#ffe600] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </span>
                <span className="border-b border-black pb-0.5 group-hover:border-[#ffe600]">
                  {t.button}
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Giant Typography "about" cutting in from bottom-right with In & Out Scroll Animation */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 80, scale: 0.9, transition: { duration: 0.4, ease: 'easeIn' } },
          visible: { opacity: 0.95, x: 0, scale: 1, transition: { duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="absolute right-0 bottom-0 pointer-events-none select-none z-0 translate-y-4 sm:translate-y-6 translate-x-2 sm:translate-x-4"
      >
        <span
          className="text-[11vw] sm:text-[12vw] lg:text-[13vw] font-black text-[#ffe600] tracking-tighter leading-none block"
          style={{ letterSpacing: '-0.06em' }}
        >
          about
        </span>
      </motion.div>
    </section>
  );
}
