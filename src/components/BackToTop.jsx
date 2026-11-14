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
      className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0B3D2E] text-white shadow-xl border border-white/20 transition-all duration-350 ease-corporate group focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:outline-none ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto hover:bg-[#134E3C] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0B3D2E]/40 active:translate-y-0 active:scale-95'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5 transition-transform duration-250 ease-corporate group-hover:-translate-y-1" aria-hidden="true" />
    </button>
  );
}
