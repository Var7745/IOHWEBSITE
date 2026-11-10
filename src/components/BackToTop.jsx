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
      className={`fixed bottom-6 right-6 z-40 p-2.5 rounded-md bg-[#174C35] text-white shadow-md border border-[#113A28] transition-all duration-200 ease-corporate group focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto hover:bg-[#123C2A] active:scale-95 shadow-[#174C35]/20 cursor-pointer'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-4 h-4 transition-transform duration-200 ease-corporate group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  );
}
