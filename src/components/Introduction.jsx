import React from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
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
  const { company, introduction, team } = siteContent;

  const ptpFeatures = [
    {
      title: "1-Acre Coverage",
      icon: Sprout,
      delay: "delay-100"
    },
    {
      title: "Dual Water & Pesticide Spraying",
      icon: Droplets,
      delay: "delay-150"
    },
    {
      title: "360° Pan-Tilt Movement",
      icon: RotateCw,
      delay: "delay-200"
    },
    {
      title: "Adjustable Spray Pressure",
      icon: Gauge,
      delay: "delay-250"
    },
    {
      title: "GPS-Based Field Mapping",
      icon: Satellite,
      delay: "delay-300"
    },
    {
      title: "Pipeline-Free Irrigation",
      icon: ShieldCheck,
      delay: "delay-350"
    }
  ];

  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split Grid: PTP Nozzle Overview + Showcase Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The PTP Solution */}
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] mb-3 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" aria-hidden="true" />
                  <span>Sustainable Agricultural Innovation</span>
                </div>
                <h2 
                  id="about-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-heading leading-tight reveal-init delay-150 mb-3"
                >
                  Agricultural PTP Nozzle — Water Precision Spraying Nozzle
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  An intelligent, centralized spraying system for precise water irrigation and pesticide application.
                </p>
              </div>

              <div className="pt-2">
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
                        className={`p-3.5 rounded-xl border border-gray-200/90 bg-white corporate-card hover:bg-[#EDF5EF]/40 flex items-center gap-3.5 shadow-2xs group reveal-init ${item.delay}`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#0B3D2E] group-hover:text-white transition-all duration-300 ease-corporate shadow-2xs">
                          <IconComponent className="w-5 h-5 transition-colors" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-gray-900 font-heading leading-snug group-hover:text-[#0B3D2E] transition-colors block">
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
          <div className="lg:col-span-6 w-full reveal-init delay-200">
            <Carousel />
          </div>

        </div>

        {/* Comparison: PTP System vs Traditional Drip & Sprinklers */}
        <div className="mb-16 sm:mb-20 p-6 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200 reveal-init delay-100">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B3D2E] block mb-1">
              Competitive Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-heading">
              Why Centralized Pan-Tilt-Pressure Outperforms Traditional Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* PTP System */}
            <div className="p-6 rounded-2xl bg-[#0B3D2E] text-white shadow-xl border border-[#0B3D2E] flex flex-col justify-between relative overflow-hidden corporate-card reveal-init delay-150">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white text-[#0B3D2E] shadow-sm">
                IOH Proprietary
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading mb-3 text-white">Agricultural PTP Nozzle</h4>
                <ul className="space-y-2 text-xs text-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span><strong>Function:</strong> Water irrigation & pesticide spraying</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span><strong>Cost:</strong> Low installation & hardware cost</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span><strong>Infrastructure:</strong> Single centralized pole nozzle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span><strong>Precision:</strong> Targeted delivery via nozzle throw</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span><strong>Safety:</strong> Eliminates hazardous backpack spraying</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Drip Irrigation */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between corporate-card reveal-init delay-200">
              <div>
                <h4 className="text-lg font-bold text-black font-heading mb-3">Drip Irrigation</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li><strong>Cost:</strong> Very High (~₹80,000/acre)</li>
                  <li><strong>Infrastructure:</strong> Extensive underground & lateral pipes</li>
                  <li><strong>Maintenance:</strong> High (frequent clogging & leakages)</li>
                  <li><strong>Irregular Fields:</strong> Very difficult and expensive to lay</li>
                  <li><strong>Durability:</strong> Vulnerable to rodent & tractor damage</li>
                </ul>
              </div>
            </div>

            {/* Conventional Sprinklers */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between corporate-card reveal-init delay-250">
              <div>
                <h4 className="text-lg font-bold text-black font-heading mb-3">Conventional Sprinklers</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li><strong>Cost:</strong> Medium installation cost</li>
                  <li><strong>Infrastructure:</strong> Multiple scattered risers & pipes</li>
                  <li><strong>Water Wastage:</strong> High overspray outside boundaries</li>
                  <li><strong>Irregular Fields:</strong> Moderate (cannot adjust throw radius)</li>
                  <li><strong>Automation:</strong> Limited / Requires manual shifting</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Leadership Team Section */}
        {team && team.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10 reveal-init">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Key Innovators
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black font-heading mb-2">
                Leadership & Engineering Team
              </h3>
              <p className="text-sm text-gray-600">
                Pioneering founders with specialized backgrounds in robotics, power electronics, and embedded systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 corporate-card group reveal-init ${idx === 0 ? 'delay-100' : 'delay-200'}`}
                >
                  <div className="overflow-hidden rounded-2xl shrink-0 border border-gray-200 shadow-sm bg-gray-50">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-24 h-24 object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-corporate"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg font-bold text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">{member.name}</h4>
                    <span className="text-xs font-mono font-bold text-[#0B3D2E] uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    <p className="text-xs font-semibold text-gray-800 mb-2">
                      {member.credentials}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {member.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Mission */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#D5E4D8] bg-[#EDF5EF] shadow-sm corporate-card group reveal-init delay-100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-[#0B3D2E] text-white shadow-sm group-hover:bg-[#22C55E] transition-colors duration-300 ease-corporate">
                <Target className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">Our Mission</h4>
                <span className="text-xs font-mono text-[#0B3D2E] uppercase tracking-wider font-semibold">Purpose & Impact</span>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed font-medium">
              {introduction.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 sm:p-8 rounded-2xl border border-[#D5E4D8] bg-[#EDF5EF] shadow-sm corporate-card group reveal-init delay-200">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-[#0B3D2E] text-white shadow-sm group-hover:bg-[#22C55E] transition-colors duration-300 ease-corporate">
                <Eye className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">Our Vision</h4>
                <span className="text-xs font-mono text-[#0B3D2E] uppercase tracking-wider font-semibold">Long-Term Direction</span>
              </div>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed font-medium">
              {introduction.vision}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
