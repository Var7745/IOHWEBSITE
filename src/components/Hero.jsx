import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="scroll-mt-20 pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-[#F8FAF7] border-b border-gray-200/70 relative overflow-hidden"
    >
      {/* Subtle organic background gradient accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0B3D2E]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Figma 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Agriculture Technology Badge with gentle float */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] shadow-sm animate-float-slow">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
              <span>AGRICULTURAL PTP NOZZLE | WATER & PESTICIDE SPRAYING</span>
            </div>

            {/* Main Title - Fades up in 800ms with smoothly highlighted green keywords */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight font-heading break-words animate-fade-up">
              Agricultural PTP{' '}
              <span className="relative inline-block text-[#0B3D2E]">
                Nozzle System
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-1.5 sm:h-2 bg-[#22C55E]/25 rounded-full -z-10" aria-hidden="true" />
              </span>
            </h1>

            {/* Subtitle - Appears smoothly after heading (staggered delay) */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal animate-fade-up [animation-delay:200ms] [animation-fill-mode:backwards]">
              {hero.subtitle}
            </p>

            {/* CTAs with staggered entrance & corporate hover */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none animate-fade-up [animation-delay:400ms] [animation-fill-mode:backwards]">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#0B3D2E] text-white hover:bg-[#134E3C] corporate-btn rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md group focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:outline-none"
              >
                <span>{hero.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-250 ease-corporate group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0B3D2E] border border-gray-300 hover:border-[#22C55E] hover:bg-[#EDF5EF]/50 transition-all duration-250 ease-corporate rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:outline-none"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0B3D2E]" aria-hidden="true" />
                <span>Contact Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with High-Res Spray Preview & Slow Zoom */}
          <div className="lg:col-span-6 w-full animate-fade-up [animation-delay:250ms] [animation-fill-mode:backwards]">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xl bg-white p-2.5 corporate-card group">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden rounded-2xl bg-gray-900">
                <img 
                  src="/hero-bg.png" 
                  alt="Agricultural PTP Nozzle spray test covering agricultural field"
                  className="w-full h-full object-cover object-center animate-slow-zoom transition-transform duration-1000 ease-corporate group-hover:scale-105"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" aria-hidden="true" />
                
                {/* Floating Top Badge with gentle float */}
                <div className="absolute top-3.5 left-3.5 animate-float-slow">
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-sm inline-flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#22C55E]" aria-hidden="true" />
                    <span>Single Unit • 1 Acre Coverage</span>
                  </span>
                </div>

                {/* Floating Bottom Info Pill with backdrop blur */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 px-4 rounded-xl bg-[#0B3D2E]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-xs font-mono shadow-md">
                  <span className="font-semibold tracking-wide">Pan-Tilt-Pressure Modulation</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
