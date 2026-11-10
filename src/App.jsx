import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize smooth scroll-triggered viewport animations
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#F7F8F4] text-[#202820] font-sans antialiased selection:bg-[#174C35] selection:text-white">
      {/* 1. Animated Sticky Navbar with Forest Green Accent */}
      <Navbar />

      {/* 2. Hero Section with Staggered Animations & Slow Zoom */}
      <Hero />

      {/* 3. About Us Section (Agricultural Challenge, PTP Precision Nozzle, 8 Points, Mission/Vision, Leadership) */}
      <Introduction />

      {/* 4. Achievements Section (Key Milestones, Hackathon Wins, CM State Recognition) */}
      <Achievements />

      {/* 5. Contact & Services Inquiry Page */}
      <Contact />

      {/* 6. Clean Monochrome Footer */}
      <Footer />

      {/* 7. Floating Circular Back-to-Top Button */}
      <BackToTop />
    </div>
  );
}
