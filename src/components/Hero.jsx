import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="scroll-mt-20 pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-[#F7F8F4] border-b border-[#E1E7DF] relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Minimal Corporate Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wider bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#397A4B]" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-[#202820] leading-[1.15] tracking-tight">
              Welcome to{' '}
              <span className="text-[#174C35]">
                IOH Engineering
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#68736B] leading-relaxed font-normal max-w-xl">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#174C35] text-white hover:bg-[#123C2A] corporate-btn rounded-md font-medium text-sm tracking-wide shadow-xs group focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none"
              >
                <span>{hero.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#174C35] border border-[#E1E7DF] hover:border-[#397A4B] hover:bg-[#F7F8F4] transition-all duration-200 rounded-md font-medium text-sm tracking-wide shadow-xs focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#174C35]" aria-hidden="true" />
                <span>Contact Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Technical Visual Card */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-xl overflow-hidden border border-[#E1E7DF] shadow-md bg-white p-2.5">
              <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden rounded-lg bg-[#202820]">
                <img 
                  src="/hero-bg.png" 
                  alt="Agricultural PTP Nozzle spray test covering agricultural field"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-corporate hover:scale-[1.02]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202820]/80 via-[#202820]/20 to-transparent pointer-events-none" aria-hidden="true" />
                
                {/* Floating Top Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider bg-black/75 text-white backdrop-blur-sm border border-white/15 shadow-xs inline-flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C49A50]" aria-hidden="true" />
                    <span>Single Unit • 1 Acre Coverage</span>
                  </span>
                </div>

                {/* Floating Bottom Info Bar */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 px-4 rounded-md bg-[#174C35]/90 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center text-xs font-mono font-medium shadow-xs">
                  <span className="tracking-wide">Pan-Tilt-Pressure Modulation</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
