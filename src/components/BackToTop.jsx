import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0B3D2E] text-white shadow-xl border border-white/20 transition-all duration-300 ease-corporate group focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:outline-none ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto hover:bg-[#22C55E] hover:scale-110 active:scale-95 shadow-[#0B3D2E]/25 hover:shadow-[#22C55E]/30'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5 transition-transform duration-250 ease-corporate group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  );
}
