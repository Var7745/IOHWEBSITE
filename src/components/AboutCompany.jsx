import React from 'react';
import { siteContent } from '../data/siteContent';

export default function AboutCompany() {
  const { company, introduction } = siteContent;

  return (
    <section 
      id="about" 
      aria-labelledby="about-company-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Company Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Heading */}
            <h2 
              id="about-company-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading tracking-tight reveal-fade-up"
            >
              About IOH Engineering
            </h2>

            {/* Company Introduction Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal reveal-fade-up delay-100">
              <strong className="text-[#0B3D2E] font-bold">{company.legalName || 'IOH Engineering Pvt. Ltd.'}</strong> is an innovation-driven engineering company focused on developing practical, reliable, and technology-oriented solutions across engineering domains. Combining technology, automation, and intelligent design, we engineer high-efficiency systems that simplify operations, reduce operational costs, and empower industries with accessible engineering solutions.
            </p>

            {/* Our Mission: Independent smooth panel */}
            <div className="space-y-2 pt-1 reveal-fade-up delay-150 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-2xl hover:bg-[#EDF5EF]/30 transition-colors duration-300 ease-corporate">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                {introduction.mission || 'To empower farmers with affordable, innovative engineering solutions that reduce costs, optimize resources, and improve agricultural productivity.'}
              </p>
            </div>

            {/* Our Vision: Independent smooth panel */}
            <div className="space-y-2 pt-1 reveal-fade-up delay-250 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-2xl hover:bg-[#EDF5EF]/30 transition-colors duration-300 ease-corporate">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                {introduction.vision || 'To transform precision agriculture through intelligent, centralized spraying systems that eliminate pipelines and enable efficient farm-wide irrigation and crop protection.'}
              </p>
            </div>
          </div>

          {/* Right Column: Agricultural engineering smart sprinkler pole image */}
          <div className="lg:col-span-5 flex justify-center reveal-scale-in delay-200">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] h-[520px] sm:h-[580px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white group transition-all duration-500 ease-corporate hover:shadow-2xl hover:border-[#22C55E]/40">
              <img 
                src="/about-ioh-pole.jpg" 
                alt="IOH Engineering Agricultural Technology and Smart Sprinkler Unit"
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-[1.03] transition-transform duration-700 ease-corporate"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
