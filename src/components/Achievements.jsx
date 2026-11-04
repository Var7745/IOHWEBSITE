import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Quote,
  ShieldCheck,
  X,
  Maximize2
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Achievements() {
  const { achievements, stats } = siteContent;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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

        {/* Featured Milestone Callout: Hon'ble Chief Minister of Maharashtra Recognition with Live Photo */}
        <div className="mb-12 sm:mb-16 rounded-3xl bg-[#0B3D2E] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#134E3C] overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Statement / Quote Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
                <span>State Level Commendation • News18 Live Broadcast</span>
              </div>
              
              <div className="relative pt-1">
                <Quote className="w-8 h-8 text-emerald-400/40 mb-2" aria-hidden="true" />
                <blockquote className="text-lg sm:text-2xl font-['Outfit'] font-semibold leading-snug text-white italic">
                  &ldquo;I have come to see a beautiful sprinkler, which does 360 degrees sprinkling, but more importantly, we know that farmers do not have a square field.&rdquo;
                </blockquote>
              </div>

              <div className="pt-3 text-xs sm:text-sm text-gray-200 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <strong className="text-white block font-semibold text-sm sm:text-base">Hon&apos;ble Chief Minister of Maharashtra</strong>
                  <span className="text-emerald-100/80 text-xs">Acknowledging the PTP Nozzle&apos;s irregular parcel precision coverage</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-white/10 px-3 py-1 rounded-md self-start sm:self-auto border border-emerald-400/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>Live on News18 Lokmat</span>
                </span>
              </div>
            </div>

            {/* CM News18 Broadcast Image Column */}
            <div className="lg:col-span-5 w-full">
              <div 
                onClick={() => setSelectedPhoto({
                  src: "/cm-news18-live.jpg",
                  title: "Hon'ble Chief Minister of Maharashtra on News18 Lokmat",
                  caption: "Live telecast acknowledging the IOH PTP Sprinkler's precision coverage for irregular agricultural parcels."
                })}
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/40 shadow-2xl group cursor-pointer"
                title="Click to view full image"
              >
                <img 
                  src="/cm-news18-live.jpg" 
                  alt="Hon'ble Chief Minister of Maharashtra speaking on News18 Lokmat about IOH PTP Sprinkler" 
                  className="w-full h-auto max-h-[300px] object-cover sm:object-contain lg:object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-red-600/95 text-white text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full uppercase flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>News18 Live</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6 text-[11px] text-gray-200 flex items-center justify-between">
                  <span className="font-mono text-emerald-300">Live Telecast Broadcast</span>
                  <span className="text-[10px] text-gray-300 flex items-center gap-1 group-hover:text-white">
                    <Maximize2 className="w-3 h-3" />
                    <span>Enlarge</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Hackathon Achievements Grid (Winner Pune Agri Hackathon & 2nd Runner Up Cheque) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-white border border-[#D5E4D8] shadow-sm hover:border-[#0B3D2E] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo Container */}
                <div 
                  onClick={() => setSelectedPhoto({
                    src: item.image,
                    title: item.title,
                    caption: item.description
                  })}
                  className="relative aspect-[16/10] bg-gray-100 overflow-hidden border-b border-gray-100 cursor-pointer"
                  title="Click to view full image"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#0B3D2E] border border-[#CDE1D3] shadow-md backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-[#0B3D2E] text-white shadow-md">
                      {item.metric}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white text-[10px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm transition-colors">
                    <Maximize2 className="w-3 h-3" />
                    <span>View Photo</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Category */}
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B3D2E] block mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Outfit'] group-hover:text-[#0B3D2E] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5 text-[#0B3D2E] font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D2E]" aria-hidden="true" />
                  <span>Verified Hackathon Benchmark</span>
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

      {/* Lightbox Preview Modal */}
      {selectedPhoto && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#F8FAF7]">
              <h4 className="font-bold text-gray-900 font-['Outfit'] text-base sm:text-lg">
                {selectedPhoto.title}
              </h4>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black/5 flex items-center justify-center">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title} 
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
            {selectedPhoto.caption && (
              <div className="p-4 bg-white border-t border-gray-100 text-xs sm:text-sm text-gray-600">
                {selectedPhoto.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
