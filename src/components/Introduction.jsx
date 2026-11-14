import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  RotateCw, 
  Satellite, 
  Sprout, 
  Gauge 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import Carousel from './Carousel';

export default function Introduction() {
  const { introduction } = siteContent;

  const ptpFeatures = [
    {
      title: "1-Acre Coverage",
      icon: Sprout,
      delay: "delay-80"
    },
    {
      title: "Dual Water & Pesticide Spraying",
      icon: Droplets,
      delay: "delay-160"
    },
    {
      title: "360° Pan-Tilt Movement",
      icon: RotateCw,
      delay: "delay-240"
    },
    {
      title: "Adjustable Spray Pressure",
      icon: Gauge,
      delay: "delay-320"
    },
    {
      title: "GPS-Based Field Mapping",
      icon: Satellite,
      delay: "delay-400"
    },
    {
      title: "Pipeline-Free Irrigation",
      icon: ShieldCheck,
      delay: "delay-480"
    }
  ];

  return (
    <section 
      id="products" 
      aria-labelledby="products-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden"
    >
      <div id="ptp-nozzle" className="scroll-mt-20" />
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split Grid: Products Overview + Showcase Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The PTP Solution */}
            <div className="space-y-4">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3D2E] font-heading block mb-2 reveal-fade-up">
                  Our Product
                </span>
                <h2 
                  id="products-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-heading leading-tight reveal-fade-up delay-80 mb-3"
                >
                  Agricultural PTP Nozzle — Water Precision Spraying Nozzle
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal reveal-fade-up delay-160">
                  An intelligent, centralized spraying system for precise water irrigation and pesticide application.
                </p>
              </div>

              <div id="features" className="pt-2 scroll-mt-28 reveal-fade-up delay-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B3D2E] font-heading">
                    Key Features
                  </h3>
                </div>

                {/* Key Features Points with Themed Icons (6 Features in 2-Col Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {ptpFeatures.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-xl border border-gray-200/90 bg-white corporate-card hover:bg-[#F2F8F5] flex items-center gap-3.5 shadow-2xs hover:shadow-[0_12px_28px_-6px_rgba(11,61,46,0.12)] hover:border-[#22C55E] group reveal-fade-up ${item.delay} transition-all duration-300 ease-corporate`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0B3D2E] group-hover:text-white transition-all duration-300 ease-corporate shadow-2xs">
                          <IconComponent className="w-5 h-5 transition-transform duration-300 ease-corporate group-hover:scale-105" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-gray-900 font-heading leading-snug group-hover:text-[#0B3D2E] transition-colors duration-250 block">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Showcase Column with Scroll Reveal */}
          <div className="lg:col-span-6 w-full reveal-scale-in delay-240">
            <Carousel />
          </div>

        </div>

      </div>
    </section>
  );
}
