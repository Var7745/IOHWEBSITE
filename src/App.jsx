import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize smooth scroll-triggered viewport animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#F8FAF7] text-[#1F2937] font-sans antialiased selection:bg-[#0B3D2E] selection:text-white">
      {/* 1. Animated Sticky Navbar with Forest Green Accent */}
      <Navbar />

      {/* 2. SECTION 1: Welcome to IOH Engineering */}
      <Hero />

      {/* 3. SECTION 2: About Our Company ("About IOH Engineering") */}
      <AboutCompany />

      {/* 4. SECTION 3: Products ("Our Product") */}
      <Introduction />

      {/* 5. Section 4: Contact & Inquiries */}
      <Contact />

      {/* 6. Footer */}
      <Footer />

      {/* 7. Floating Circular Back-to-Top Button */}
      <BackToTop />
    </div>
  );
}
