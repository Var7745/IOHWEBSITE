import React, { useState } from 'react';
import { 
  ArrowRight, 
  Quote, 
  X 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Achievements() {
  const { achievements, stats } = siteContent;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section 
      id="achievements" 
      aria-labelledby="achievements-heading"
      className="scroll-mt-20 py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#F7F8F4] text-[#202820] border-b border-[#E1E7DF] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-init">
          <h2 
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-heading font-semibold text-[#202820] mb-3"
          >
            Engineering Achievements & Recognition
          </h2>
          <p className="text-base text-[#68736B] leading-relaxed font-normal">
            Validated across competitive hackathons, institutional incubators, and state-level demonstrations for solving real-world irregular agricultural irrigation.
          </p>
        </div>

        {/* Big Impact Statistics Strip with Staggered Scroll Reveal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, idx) => {
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250'];
            return (
              <div 
                key={idx}
                className={`p-6 rounded-lg bg-white border border-[#E1E7DF] shadow-xs text-center flex flex-col items-center justify-center hover:border-[#397A4B] transition-all duration-200 reveal-init ${delays[idx % 4]}`}
              >
                <div className="text-3xl sm:text-4xl font-heading font-bold text-[#174C35] tracking-tight mb-1">
                  {stat.value}
                </div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#397A4B] mb-0.5">
                  {stat.unit}
                </span>
                <span className="text-xs text-[#68736B]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Featured Milestone Callout: Hon'ble Chief Minister of Maharashtra Recognition with Live Photo */}
        <div className="mb-16 sm:mb-20 rounded-xl bg-[#174C35] text-white p-6 sm:p-8 lg:p-10 shadow-sm border border-[#113A28] overflow-hidden relative reveal-init delay-150">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Statement / Quote Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="relative pt-1">
                <Quote className="w-7 h-7 text-[#C49A50] mb-3" aria-hidden="true" />
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-heading font-medium leading-relaxed text-white italic">
                  &ldquo;I have come to see a beautiful sprinkler, which does 360 degrees sprinkling, but more importantly, we know that farmers do not have a square field.&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 text-xs sm:text-sm text-gray-200 border-t border-white/10">
                <strong className="text-white block font-semibold text-sm sm:text-base">Hon&apos;ble Chief Minister of Maharashtra</strong>
                <span className="text-emerald-100/80 text-xs">Acknowledging the PTP Nozzle&apos;s irregular parcel precision coverage</span>
              </div>
            </div>

            {/* CM Broadcast Image Column */}
            <div className="lg:col-span-5 w-full flex items-center justify-center">
              <div 
                onClick={() => setSelectedPhoto({
                  src: "/cm-news18-live.jpg",
                  title: "Hon'ble Chief Minister of Maharashtra",
                  caption: "Acknowledging the IOH PTP Sprinkler's precision coverage for irregular agricultural parcels."
                })}
                className="w-full cursor-pointer overflow-hidden rounded-lg shadow-sm border border-white/20 group hover:opacity-95 transition-opacity"
                title="Click to view full image"
              >
                <img 
                  src="/cm-news18-live.jpg" 
                  alt="Hon'ble Chief Minister of Maharashtra acknowledging the IOH PTP Sprinkler" 
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg block group-hover:scale-105 transition-transform duration-500 ease-corporate"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Hackathon Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <article
              key={item.id}
              className={`rounded-lg bg-white border border-[#E1E7DF] shadow-xs overflow-hidden flex flex-col justify-between hover:border-[#397A4B] transition-all duration-200 group reveal-init ${idx === 0 ? 'delay-200' : 'delay-250'}`}
            >
              <div>
                {/* Photo at top of card */}
                <div 
                  onClick={() => setSelectedPhoto({
                    src: item.image,
                    title: item.title,
                    caption: item.description
                  })}
                  className="w-full overflow-hidden border-b border-[#E1E7DF] bg-[#F7F8F4] cursor-pointer"
                  title="Click to view full image"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={
                      item.id === 2
                        ? "w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-500 ease-corporate"
                        : "w-full h-56 sm:h-64 object-cover object-top block group-hover:scale-105 transition-transform duration-500 ease-corporate"
                    }
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Header: Metric & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-medium tracking-wide bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF]">
                      {item.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-medium tracking-wide bg-[#FAF6ED] text-[#C49A50] border border-[#C49A50]/30 font-semibold">
                      {item.metric}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#397A4B] block mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#202820] mb-2.5 group-hover:text-[#174C35] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#68736B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Action Banner */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-lg bg-[#174C35] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm border border-[#113A28] reveal-init delay-200">
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-1 text-white">
              Interested in Deploying Agricultural PTP Nozzles?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Our engineering team collaborates with commercial farms, agricultural estates, and institutional research partners.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#174C35] hover:bg-[#F7F8F4] font-medium text-sm transition-colors shrink-0 shadow-xs group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span>Contact Engineering</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedPhoto && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E1E7DF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#E1E7DF] bg-[#F7F8F4]">
              <h4 className="font-heading font-semibold text-[#202820] text-base sm:text-lg">
                {selectedPhoto.title}
              </h4>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-md hover:bg-[#E1E7DF] text-[#202820] transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black/5 flex items-center justify-center">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title} 
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
            {selectedPhoto.caption && (
              <div className="p-4 bg-white border-t border-[#E1E7DF] text-xs sm:text-sm text-[#68736B]">
                {selectedPhoto.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
