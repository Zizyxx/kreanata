'use client';

import { marqueeItems } from '@/lib/data';

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {/* Render items twice for seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={index} className="inline-flex items-center shrink-0">
            <span className="text-xl md:text-2xl font-semibold uppercase tracking-widest text-zinc-500">
              {item}
            </span>
            <span
              className="mx-5 md:mx-8 text-[#ccff00] text-sm select-none"
              aria-hidden="true"
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="bg-neutral-950 border-y border-zinc-800/50 py-5 overflow-hidden">
      <MarqueeRow />
      <div className="mt-3">
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
