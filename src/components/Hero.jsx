import React from 'react';
import { ArrowDown } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { welcome } = siteContent;

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="relative min-h-[85vh] flex items-center justify-center py-28 sm:py-36 lg:py-40 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[#0B3D2E] text-white"
    >
      {/* Clean agricultural water engineering background without any text watermark */}
      <div className="absolute inset-0 z-0">
        <img 
          src={welcome.bgImage} 
          alt="Agricultural engineering and precision water technology"
          className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.1] saturate-[1.2]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D2E]/80 via-[#0B3D2E]/60 to-[#072C21]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Existing IOH Engineering logo */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-white shadow-2xl border border-white/20 inline-flex items-center justify-center">
            <img 
              src={welcome.logo} 
              alt="IOH Engineering Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Large but balanced heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight mb-6 animate-fade-up [animation-delay:150ms]">
          Welcome to <span className="text-emerald-300">IOH Engineering</span>
        </h1>

        {/* Supporting sentence */}
        <p className="text-base sm:text-xl lg:text-2xl text-emerald-100/90 leading-relaxed font-light max-w-3xl mx-auto mb-10 animate-fade-up [animation-delay:300ms]">
          {welcome.supporting}
        </p>

        {/* Spacious layout: Simple scroll down link */}
        <div className="animate-fade-up [animation-delay:450ms]">
          <a 
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0B3D2E] hover:bg-emerald-50 corporate-btn font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none cursor-pointer"
          >
            <span>Discover Who We Are</span>
            <ArrowDown className="w-4 h-4 text-[#0B3D2E] transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
