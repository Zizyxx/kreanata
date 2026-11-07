import GridLines from "@/components/GridLines";
import SideAccents from "@/components/SideAccents";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
// import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-950 selection:bg-[#ffe600] selection:text-black">
      {/* 1. Architectural Vertical Grid Lines (Full Page) */}
      <GridLines />

      {/* 2. Floating Right Side Accents (Scroll to Top) */}
      <SideAccents />

      {/* 3. Sticky Minimalist Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* Section 1: Hero (Giant 'creative' + Sunburst + Headline + Sub-bar) */}
        <Hero />

        {/* Section 2: About (B&W Photo + Narrative + Giant 'about') */}
        <About />

        {/* Section 3: Services / Expertise (01, 02, 03 numbered columns) */}
        <Services />

        {/* Section 4: Projects (Giant 'projects' + 3 Cards) */}
        <Portfolio />

        {/* Section 5: Events Showcase (temporarily hidden per user request) */}
        {/* <Events /> */}
      </main>

      {/* Section 6: Epic Footer CTA ('work together.') */}
      <Footer />
    </div>
  );
}
