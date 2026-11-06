import GridLines from "@/components/GridLines";
import SideAccents from "@/components/SideAccents";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Awards from "@/components/Awards";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-950 selection:bg-[#ffe600] selection:text-black">
      {/* 1. Architectural Vertical Grid Lines (Full Page) */}
      <GridLines />

      {/* 2. Floating Right Side Accents (Scroll to Top & Studio Badge) */}
      <SideAccents />

      {/* 3. Sticky Minimalist Navbar */}
      <Navbar />

      {/* Main Content Flow matching Crafto Web Agency screenshots */}
      <main className="relative z-10">
        {/* Section 1: Hero (Giant 'creative' + Sunburst + Headline + Sub-bar) */}
        <Hero />

        {/* Section 2: About (B&W Photo + 'We create unique digital experiences' + Giant 'about') */}
        <About />

        {/* Section 3: Services / Expertise (01, 02, 03 numbered columns) */}
        <Services />

        {/* Section 4: Projects (Giant 'projects' + Rotating Stamp Badge + 4 Cards) */}
        <Portfolio />

        {/* Section 5: Honorable Awards + Dark Testimonials with 4.82 rating */}
        <Awards />

        {/* Section 6: Latest Blogs (4 monochrome journal cards) */}
        <Blogs />
      </main>

      {/* Section 7: Epic Footer CTA ('work' + rotating stamp + 'together' in Lime) */}
      <Footer />
    </div>
  );
}
