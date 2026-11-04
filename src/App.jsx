import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAF7] text-gray-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#0B3D2E] selection:text-white">
      {/* 1. Clean Top Navbar with Forest Green Accent */}
      <Navbar />

      {/* 2. Landing Section with Uploaded Image Background */}
      <Hero />

      {/* 3. Introduction Section (Company Overview, Drone R&D, Delivery Bots, Agri Systems, Mission/Vision, Carousel) */}
      <Introduction />

      {/* 4. Achievements Section (Key Milestones, Autonomous Hours, Trial Validations) */}
      <Achievements />

      {/* 5. Contact & Services Inquiry Page */}
      <Contact />

      {/* 6. Clean Monochrome Footer */}
      <Footer />
    </div>
  );
}
