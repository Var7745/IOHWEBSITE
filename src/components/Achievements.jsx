import React, { useState } from 'react';
import { 
  Quote, 
  X 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Achievements() {
  const { achievements } = siteContent;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section 
      id="achievements" 
      aria-labelledby="achievements-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#EDF5EF] text-gray-900 border-b border-[#D5E4D8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-fade-up">
          <h2 
            id="achievements-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-heading mb-4 break-words"
          >
            Achievements & Recognition
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed font-normal">
            Validated across competitive hackathons, institutional incubators, and state-level demonstrations for solving real-world irregular agricultural irrigation.
          </p>
        </div>

        {/* Featured Milestone Callout: Hon'ble Chief Minister of Maharashtra Recognition with Live Photo */}
        <div className="mb-12 sm:mb-16 rounded-3xl bg-[#0B3D2E] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#134E3C] overflow-hidden relative corporate-card reveal-fade-up delay-150">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Statement / Quote Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="relative pt-1">
                <Quote className="w-8 h-8 text-emerald-400/40 mb-2" aria-hidden="true" />
                <blockquote className="text-lg sm:text-2xl font-heading font-semibold leading-snug text-white italic">
                  &ldquo;I have come to see a beautiful sprinkler, which does 360 degrees sprinkling, but more importantly, we know that farmers do not have a square field.&rdquo;
                </blockquote>
              </div>

              <div className="pt-3 text-xs sm:text-sm text-gray-200 border-t border-white/10">
                <strong className="text-white block font-semibold text-sm sm:text-base">Hon&apos;ble Chief Minister of Maharashtra</strong>
                <span className="text-emerald-100/80 text-xs">Acknowledging the PTP Nozzle&apos;s irregular parcel precision coverage</span>
              </div>
            </div>

            {/* CM News18 Broadcast Image Column - Clean rounded image with subtle zoom hover */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div 
                onClick={() => setSelectedPhoto({
                  src: "/cm-news18-live.jpg",
                  title: "Hon'ble Chief Minister of Maharashtra",
                  caption: "Acknowledging the IOH PTP Sprinkler's precision coverage for irregular agricultural parcels."
                })}
                className="w-full cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-white/20 group hover:opacity-95 transition-opacity"
                title="Click to view full image"
              >
                <img 
                  src="/cm-news18-live.jpg" 
                  alt="Hon'ble Chief Minister of Maharashtra acknowledging the IOH PTP Sprinkler" 
                  className="w-full h-auto max-h-[320px] object-cover rounded-2xl block group-hover:scale-105 transition-transform duration-700 ease-corporate"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Hackathon Achievements Grid - Matching Figma card layout with corporate hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <article
              key={item.id}
              className={`rounded-3xl bg-white border border-[#D5E4D8] shadow-sm corporate-card overflow-hidden flex flex-col justify-between group reveal-fade-up ${idx === 0 ? 'delay-200' : 'delay-300'} transition-all duration-300 ease-corporate hover:-translate-y-1.5 hover:shadow-lg hover:border-[#22C55E]`}
            >
              <div>
                {/* Photo at top of card - Edge-to-edge flush with rounded-t-3xl */}
                <div 
                  onClick={() => setSelectedPhoto({
                    src: item.image,
                    title: item.title,
                    caption: item.description
                  })}
                  className="w-full overflow-hidden border-b border-[#D5E4D8] bg-[#EDF5EF]/30 cursor-pointer"
                  title="Click to view full image"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={
                      item.id === 2
                        ? "w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-700 ease-corporate"
                        : "w-full h-60 sm:h-72 md:h-80 object-cover object-bottom block group-hover:scale-[1.03] transition-transform duration-700 ease-corporate"
                    }
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Header: Metric & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3]">
                      {item.badge}
                    </span>
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3]">
                      {item.metric}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B3D2E] block mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-heading group-hover:text-[#0B3D2E] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedPhoto && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#F8FAF7]">
              <h4 className="font-bold text-gray-900 font-heading text-base sm:text-lg">
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
