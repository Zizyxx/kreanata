import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kreanata — Creative Digital Agency & Production Studio",
  description:
    "We're a creative digital agency and production studio specializing in unique visual experiences, event documentation, commercial cinematography, branding, and modern web development.",
  keywords: [
    "Creative Agency",
    "Digital Agency",
    "Production House",
    "Web Design",
    "Event Documentation",
    "Cinematography",
    "Branding",
    "Kreanata",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans selection:bg-[#b8ff00] selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
