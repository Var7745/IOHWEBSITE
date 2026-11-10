import React from 'react';
import { ArrowDown } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { welcome } = siteContent;

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="relative min-h-[85vh] flex items-center justify-center py-28 sm:py-36 lg:py-40 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gray-950 text-white"
    >
      {/* PTP Nozzle spray photo as full-width clear background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={welcome.bgImage} 
          alt="Agricultural PTP Nozzle precision spray"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Balanced gradient overlay preserving photo vibrancy while keeping text legible */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" 
          aria-hidden="true" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Existing IOH Engineering logo */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/20 inline-flex items-center justify-center">
            <img 
              src={welcome.logo} 
              alt="IOH Engineering Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Large but balanced heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight mb-6 animate-fade-up [animation-delay:150ms] drop-shadow-md">
          Welcome to <span className="text-[#22C55E]">IOH Engineering</span>
        </h1>

        {/* Supporting sentence */}
        <p className="text-base sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl mx-auto mb-10 animate-fade-up [animation-delay:300ms] drop-shadow-sm">
          {welcome.supporting}
        </p>

        {/* Spacious layout: Simple scroll down link */}
        <div className="animate-fade-up [animation-delay:450ms]">
          <a 
            href="#about"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0B3D2E] text-white hover:bg-[#134E3C] border border-emerald-400/30 corporate-btn font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none cursor-pointer"
          >
            <span>Discover Who We Are</span>
            <ArrowDown className="w-4 h-4 text-emerald-300 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
