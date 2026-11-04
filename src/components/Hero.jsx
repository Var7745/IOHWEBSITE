import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="scroll-mt-20 pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-[#F8FAF7] border-b border-gray-200/70"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Figma 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
              <span>AGRICULTURAL PTP NOZZLE | WATER & PESTICIDE SPRAYING</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight font-['Outfit'] break-words">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {hero.subtitle}
            </p>

            {/* Single Focused Primary CTA */}
            <div className="pt-2 flex items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0B3D2E] text-white hover:bg-[#06261c] transition-all rounded-xl font-bold text-sm tracking-wider uppercase shadow-md focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:outline-none"
              >
                <span>{hero.cta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Micro Feature Indicators */}
            <div className="pt-3 grid grid-cols-3 gap-2 border-t border-gray-200/80 text-[11px] font-mono text-gray-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D2E] shrink-0" />
                <span>1-Acre Nozzle</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D2E] shrink-0" />
                <span>Dual Spraying</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D2E] shrink-0" />
                <span>Zero Pipe Clutter</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with High-Res Spray Preview */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xl bg-white p-2.5 group">
              <div className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden rounded-2xl bg-gray-900">
                <img 
                  src="/hero-bg.png" 
                  alt="Agricultural PTP Nozzle spray test covering agricultural field"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" aria-hidden="true" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-sm">
                    Single Unit • 1 Acre Coverage
                  </span>
                </div>

                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 px-4 rounded-xl bg-[#0B3D2E]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-center text-xs font-mono shadow-md">
                  <span className="font-semibold">Pan-Tilt-Pressure Modulation</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
