import React from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Smartphone,
  Droplets,
  DollarSign,
  Maximize2
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import Carousel from './Carousel';

export default function Introduction() {
  const { company, introduction, team } = siteContent;

  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white text-gray-900 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#EDF5EF] text-[#0B3D2E] border border-[#CDE1D3] mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0B3D2E]" aria-hidden="true" />
            <span>Sustainable Agricultural Innovation</span>
          </div>
          <h2 
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-['Outfit'] mb-4 break-words"
          >
            About IOH Engineering
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {company.shortDescription}
          </p>
        </div>

        {/* Top Split Grid: Problem vs Solution & Showcase Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The Industry Challenge */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 block mb-1">
                The Agricultural Challenge
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {introduction.problemStatement}
              </p>
            </div>

            {/* The PTP Solution */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-['Outfit'] mb-3">
                Agricultural PTP Nozzle — Water & Pesticide Precision Spraying
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                {introduction.description}
              </p>
            </div>

            {/* Core Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0" aria-hidden="true" />
                <span>Single Nozzle Covers 1 Acre</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0" aria-hidden="true" />
                <span>Water & Pesticide Dual Spraying</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0" aria-hidden="true" />
                <span>360° Pan & Tilt Articulation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0" aria-hidden="true" />
                <span>Variable Pressure Throw Modulation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0" aria-hidden="true" />
                <span>GPS Satellite Parcel Mapping</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#0B3D2E] shrink-0" aria-hidden="true" />
                <span>Eliminates Field Pipe Networks</span>
              </div>
            </div>
          </div>

          {/* Carousel Showcase Column */}
          <div className="lg:col-span-6 w-full">
            <Carousel />
          </div>

        </div>

        {/* 4 Core Pillars of PTP Technology */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Outfit'] mb-2">
              Proprietary Engineering Pillars
            </h3>
            <p className="text-sm text-gray-600">
              High-efficiency agricultural automation engineered with patent-pending precision mechanics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {introduction.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200/90 bg-white shadow-sm hover:border-[#0B3D2E] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-extrabold text-[#0B3D2E]">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#0B3D2E]" aria-hidden="true" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2 font-['Outfit'] group-hover:text-[#0B3D2E] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison: PTP System vs Traditional Drip & Sprinklers */}
        <div className="mb-16 sm:mb-20 p-6 sm:p-10 rounded-3xl bg-gray-50 border border-gray-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black block mb-1">
              Competitive Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Outfit']">
              Why Centralized Pan-Tilt-Pressure Outperforms Traditional Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* PTP System */}
            <div className="p-6 rounded-2xl bg-[#0B3D2E] text-white shadow-xl border border-[#0B3D2E] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white text-[#0B3D2E] shadow-sm">
                IOH Proprietary
              </div>
              <div>
                <h4 className="text-lg font-bold font-['Outfit'] mb-3 text-white">Agricultural PTP Nozzle</h4>
                <ul className="space-y-2 text-xs text-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span><strong>Function:</strong> Water irrigation & pesticide spraying</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span><strong>Cost:</strong> Low installation & hardware cost</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span><strong>Infrastructure:</strong> Single centralized pole nozzle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span><strong>Precision:</strong> Targeted delivery via nozzle throw</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                    <span><strong>Safety:</strong> Eliminates hazardous backpack spraying</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Drip Irrigation */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-black font-['Outfit'] mb-3">Drip Irrigation</h4>
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
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-black font-['Outfit'] mb-3">Conventional Sprinklers</h4>
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
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Key Innovators
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Outfit'] mb-2">
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
                  className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-[#0B3D2E] transition-all"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-2xl object-cover border border-gray-200 shadow-sm shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg font-bold text-gray-900 font-['Outfit']">{member.name}</h4>
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
          <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-[#0B3D2E] transition-all">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-[#0B3D2E] text-white">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 font-['Outfit']">Our Mission</h4>
                <span className="text-xs font-mono text-[#0B3D2E] uppercase tracking-wider font-semibold">Purpose & Impact</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {introduction.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-[#0B3D2E] transition-all">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-[#0B3D2E] text-white">
                <Eye className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 font-['Outfit']">Our Vision</h4>
                <span className="text-xs font-mono text-[#0B3D2E] uppercase tracking-wider font-semibold">Long-Term Direction</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {introduction.vision}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
