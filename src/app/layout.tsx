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
  title: "Kreanata — Production House & Creative Visual Studio",
  description:
    "Kreanata adalah production house dan creative studio berbasis di Jakarta yang siap melayani seluruh wilayah Jabodetabek. Menghadirkan dokumentasi acara, fotografi komersial, produksi video sinematik, desain identitas visual, dan pengembangan website.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
      { url: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794044011/Kreanata_Logo_Trial.png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
      { url: 'https://res.cloudinary.com/xidvgvul/image/upload/v1794044011/Kreanata_Logo_Trial.png' },
    ],
  },
  keywords: [
    "Production House",
    "Creative Studio",
    "Event Documentation",
    "Dokumentasi Acara",
    "Commercial Photography",
    "Cinematic Video",
    "Web Development",
    "Kreanata",
    "Jakarta",
    "Jabodetabek",
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
      <body className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans selection:bg-[#ffe600] selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
