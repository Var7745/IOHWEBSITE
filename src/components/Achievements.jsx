import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Quote,
  ShieldCheck
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Achievements() {
  const { achievements, stats } = siteContent;

  return (
    <section 
      id="achievements" 
      aria-labelledby="achievements-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#EDF5EF] text-gray-900 border-b border-[#D5E4D8]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 bg-white text-[#0B3D2E] border border-[#CDE1D3] shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#0B3D2E]" aria-hidden="true" />
            <span>Track Record & Milestones</span>
          </div>
          <h2 
            id="achievements-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-['Outfit'] mb-4 break-words"
          >
            Engineering Achievements & Recognition
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed font-normal">
            Validated across competitive hackathons, institutional incubators, and state-level demonstrations for solving real-world irregular agricultural irrigation.
          </p>
        </div>

        {/* Big Impact Statistics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D5E4D8] shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0B3D2E] transition-all"
            >
              <div className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-[#0B3D2E] tracking-tight mb-1">
                {stat.value}
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-1">
                {stat.unit}
              </span>
              <span className="text-xs text-gray-700 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Milestone Callout: Hon'ble Chief Minister of Maharashtra Recognition (No Image) */}
        <div className="mb-12 sm:mb-16 rounded-3xl bg-[#0B3D2E] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-[#134E3C] overflow-hidden relative">
          <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
              <span>State Level Commendation • News18 Live Broadcast</span>
            </div>
            
            <div className="relative pt-2">
              <Quote className="w-10 h-10 text-white/20 mb-2 mx-auto sm:mx-0" aria-hidden="true" />
              <blockquote className="text-lg sm:text-2xl lg:text-3xl font-['Outfit'] font-semibold leading-snug text-white italic">
                &ldquo;I have come to see a beautiful sprinkler, which does 360 degrees sprinkling, but more importantly, we know that farmers do not have a square field.&rdquo;
              </blockquote>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-gray-200 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-white block font-semibold text-sm">Hon&apos;ble Chief Minister of Maharashtra</strong>
                <span className="text-emerald-100/80 text-xs">Acknowledging the PTP Nozzle&apos;s irregular parcel precision coverage</span>
              </div>
              <span className="text-xs font-mono text-emerald-300 bg-white/10 px-3 py-1 rounded-md self-start sm:self-auto">
                Live on News18 Lokmat
              </span>
            </div>
          </div>
        </div>

        {/* Clean Text-Driven Achievements Grid (No Images, matching Figma design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {achievements.map((item) => (
            <article
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D5E4D8] shadow-sm hover:border-[#0B3D2E] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Metric & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-base sm:text-lg font-extrabold font-mono text-[#0B3D2E]">
                    {item.metric}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3]">
                    {item.badge}
                  </span>
                </div>

                {/* Category */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B3D2E] block mb-2">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 font-['Outfit'] group-hover:text-[#0B3D2E] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5 text-[#0B3D2E] font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D2E]" aria-hidden="true" />
                  <span>Verified Benchmark</span>
                </span>
                <span className="text-gray-400 text-[11px]">IOH Verified</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Action Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:px-10 rounded-2xl sm:rounded-full bg-[#0B3D2E] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl border border-[#134E3C]">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] mb-1 text-white">
              Interested in Deploying Agricultural PTP Nozzles?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Our engineering team collaborates with commercial farms, agricultural estates, and institutional research partners.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl sm:rounded-full bg-white text-[#0B3D2E] hover:bg-emerald-50 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span>Contact Engineering</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
