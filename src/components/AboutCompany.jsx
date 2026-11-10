import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Lightbulb, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function AboutCompany() {
  const { aboutCompany } = siteContent;

  const pillarIcons = [
    Compass,
    Cpu,
    Lightbulb,
    CheckCircle2
  ];

  return (
    <section 
      id="about" 
      aria-labelledby="who-we-are-heading"
      className="scroll-mt-20 py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#F8FAF7] text-gray-900 border-b border-gray-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Company description */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-init">
            
            {/* Small subtle section tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] shadow-sm">
              <span>About Our Company</span>
            </div>

            {/* Heading: "Who We Are" */}
            <h2 
              id="who-we-are-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading tracking-tight"
            >
              {aboutCompany.heading}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {aboutCompany.description}
            </p>

            {/* 4 Pillars: Company intro, Engineering expertise, Innovation approach, Commitment to practical solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {aboutCompany.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs corporate-card hover:border-[#CDE1D3] transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-[#0B3D2E]" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 font-heading mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Small "Learn More About Us" link */}
            <div className="pt-2">
              <a 
                href="#team"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3D2E] hover:text-[#134E3C] hover:underline transition-colors group font-mono"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Right Column: Relevant engineering photograph */}
          <div className="lg:col-span-5 w-full reveal-init delay-200">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/90 shadow-xl bg-white p-2.5 corporate-card group">
              <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden rounded-2xl bg-gray-900">
                <img 
                  src={aboutCompany.image} 
                  alt="IOH Engineering team and technical hardware demonstration"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-corporate"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
                  <span className="font-semibold text-emerald-300 block mb-0.5">IOH Engineering</span>
                  <span className="text-gray-300 text-[11px]">Hardware Automation & Practical Engineering</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
