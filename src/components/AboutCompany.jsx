import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        
        {/* Two-column layout matching reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: About Typography, Mission & Vision */}
          <div className="lg:col-span-6 space-y-6 text-left reveal-init">
            
            {/* Main Heading */}
            <h2 
              id="about-company-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading tracking-tight"
            >
              About IOH Engineering
            </h2>

            {/* Company Introduction Paragraph */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <strong className="text-[#0B3D2E] font-bold">{company.legalName || 'IOH Engineering Pvt. Ltd.'}</strong> is an innovation-driven engineering company focused on developing practical, reliable, and technology-oriented solutions across engineering domains. Combining technology, automation, and intelligent design, we engineer high-efficiency systems that simplify operations, reduce operational costs, and empower industries with accessible engineering solutions.
            </p>

            {/* Our Mission */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                {introduction.mission || 'To empower farmers and industries with affordable, innovative engineering solutions that reduce costs, optimize resources, and improve productivity through practical, real-world impact.'}
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                {introduction.vision || 'To lead the future of intelligent engineering and smart agricultural automation, transforming resource efficiency and field operations with sustainable, accessible technologies that redefine productivity.'}
              </p>
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

          {/* Right Column: High-Res Rover Image matching reference card */}
          <div className="lg:col-span-6 w-full reveal-init delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 group">
              <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden">
                <img 
                  src="/hero-rover.jpg" 
                  alt="IOH Engineering Agricultural Robotics Rover in field"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-corporate"
                />
                
                {/* Subtle bottom gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" aria-hidden="true" />
                
                {/* Floating bottom label matching reference layout */}
                <div className="absolute bottom-5 left-5 right-5 text-white drop-shadow-md">
                  <div className="font-bold text-sm sm:text-base font-heading tracking-wide">
                    IOH Autonomous Technology
                  </div>
                  <div className="text-xs text-gray-200 font-mono">
                    Innovating Agriculture & Applied Robotics
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
