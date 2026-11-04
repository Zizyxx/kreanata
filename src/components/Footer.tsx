import { Heart } from "lucide-react";
import { socialLinks } from "@/lib/data";

const serviceLinks = [
  "Dokumentasi Acara",
  "Fotografi Komersial",
  "Produksi Video",
  "Konten Sosmed",
  "Desain Grafis",
  "Web Development",
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Side — Logo & Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Kreanata
              <span className="text-[#ccff00]">.</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Production House & Digital Creative Agency berbasis di Indonesia.
            </p>
          </div>

          {/* Right Side — Link Columns */}
          <div className="grid grid-cols-2 gap-8">
            {/* Column 1 — Layanan */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Layanan
              </h3>
              <ul className="space-y-0">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#services"
                      className="text-sm text-zinc-500 hover:text-[#ccff00] transition-colors block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — Ikuti Kami */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Ikuti Kami
              </h3>
              <ul className="space-y-0">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-[#ccff00] transition-colors block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © 2024 Kreanata. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-1">
            Crafted with{" "}
            <Heart className="w-4 h-4 text-[#ccff00] fill-[#ccff00]" /> passion
            by Kreanata
          </p>
        </div>
      </div>
    </footer>
  );
}
