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
      className="scroll-mt-20 py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white text-[#202820] border-b border-[#E1E7DF] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split Grid: PTP Nozzle Overview + Showcase Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* The PTP Solution */}
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wider bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] mb-3 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#397A4B]" aria-hidden="true" />
                  <span>Sustainable Agricultural Innovation</span>
                </div>
                <h2 
                  id="about-heading"
                  className="text-3xl sm:text-4xl font-heading font-semibold text-[#202820] leading-snug reveal-init delay-100 mb-3"
                >
                  Agricultural PTP Nozzle — Water Precision Spraying Nozzle
                </h2>
                <p className="text-base text-[#68736B] leading-relaxed font-normal">
                  An intelligent, centralized spraying system for precise water irrigation and pesticide application.
                </p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#397A4B]" aria-hidden="true" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#174C35]">
                    Key Features
                  </h3>
                </div>

                {/* Key Features Points with Themed Icons (6 Features in 2-Col Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ptpFeatures.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] flex items-center gap-3 shadow-xs transition-all duration-200 group reveal-init ${item.delay}`}
                      >
                        <div className="w-9 h-9 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] flex items-center justify-center shrink-0 group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200 shadow-xs">
                          <IconComponent className="w-4 h-4 transition-colors" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-heading font-medium text-[#202820] leading-snug group-hover:text-[#174C35] transition-colors block">
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
          <div className="lg:col-span-6 w-full reveal-init delay-150">
            <Carousel />
          </div>

        </div>

        {/* Comparison: PTP System vs Traditional Drip & Sprinklers */}
        <div className="mb-20 sm:mb-24 p-6 sm:p-10 rounded-xl bg-[#F7F8F4] border border-[#E1E7DF] reveal-init delay-100">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#174C35] block mb-1">
              Competitive Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#202820]">
              Why Centralized Pan-Tilt-Pressure Outperforms Traditional Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* PTP System */}
            <div className="p-6 rounded-lg bg-[#174C35] text-white shadow-md border border-[#113A28] flex flex-col justify-between relative overflow-hidden reveal-init delay-150">
              <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium uppercase bg-[#C49A50] text-[#202820] shadow-xs">
                IOH Proprietary
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-4 text-white">Agricultural PTP Nozzle</h4>
                <ul className="space-y-2.5 text-xs text-emerald-100/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A50] shrink-0" />
                    <span><strong>Function:</strong> Water irrigation & pesticide spraying</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A50] shrink-0" />
                    <span><strong>Cost:</strong> Low installation & hardware cost</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A50] shrink-0" />
                    <span><strong>Infrastructure:</strong> Single centralized pole nozzle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A50] shrink-0" />
                    <span><strong>Precision:</strong> Targeted delivery via nozzle throw</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C49A50] shrink-0" />
                    <span><strong>Safety:</strong> Eliminates hazardous backpack spraying</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Drip Irrigation */}
            <div className="p-6 rounded-lg bg-white border border-[#E1E7DF] shadow-xs flex flex-col justify-between reveal-init delay-200">
              <div>
                <h4 className="text-lg font-heading font-semibold text-[#202820] mb-4">Drip Irrigation</h4>
                <ul className="space-y-2.5 text-xs text-[#68736B]">
                  <li><strong className="text-[#202820]">Cost:</strong> Very High (~₹80,000/acre)</li>
                  <li><strong className="text-[#202820]">Infrastructure:</strong> Extensive underground & lateral pipes</li>
                  <li><strong className="text-[#202820]">Maintenance:</strong> High (frequent clogging & leakages)</li>
                  <li><strong className="text-[#202820]">Irregular Fields:</strong> Very difficult and expensive to lay</li>
                  <li><strong className="text-[#202820]">Durability:</strong> Vulnerable to rodent & tractor damage</li>
                </ul>
              </div>
            </div>

            {/* Conventional Sprinklers */}
            <div className="p-6 rounded-lg bg-white border border-[#E1E7DF] shadow-xs flex flex-col justify-between reveal-init delay-250">
              <div>
                <h4 className="text-lg font-heading font-semibold text-[#202820] mb-4">Conventional Sprinklers</h4>
                <ul className="space-y-2.5 text-xs text-[#68736B]">
                  <li><strong className="text-[#202820]">Cost:</strong> Medium installation cost</li>
                  <li><strong className="text-[#202820]">Infrastructure:</strong> Multiple scattered risers & pipes</li>
                  <li><strong className="text-[#202820]">Water Wastage:</strong> High overspray outside boundaries</li>
                  <li><strong className="text-[#202820]">Irregular Fields:</strong> Moderate (cannot adjust throw radius)</li>
                  <li><strong className="text-[#202820]">Automation:</strong> Limited / Requires manual shifting</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Leadership Team Section */}
        {team && team.length > 0 && (
          <div className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10 reveal-init">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#174C35] block mb-1">
                Key Innovators
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#202820] mb-2">
                Leadership & Engineering Team
              </h3>
              <p className="text-sm text-[#68736B]">
                Pioneering founders with specialized backgrounds in robotics, power electronics, and embedded systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {team.map((member, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-lg border border-[#E1E7DF] bg-white shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:border-[#397A4B] transition-all duration-200 group reveal-init ${idx === 0 ? 'delay-100' : 'delay-200'}`}
                >
                  <div className="overflow-hidden rounded-lg shrink-0 border border-[#E1E7DF] shadow-xs bg-[#F7F8F4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-24 h-24 object-cover object-top transition-transform duration-500 ease-corporate group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg font-heading font-semibold text-[#202820] group-hover:text-[#174C35] transition-colors">{member.name}</h4>
                    <span className="text-xs font-mono font-medium text-[#174C35] uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>
                    {member.credentials && (
                      <p className="text-xs font-medium text-[#202820] mb-1.5">
                        {member.credentials}
                      </p>
                    )}
                    <p className="text-xs text-[#68736B] leading-relaxed">
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
          <div className="p-6 sm:p-8 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] shadow-xs transition-all duration-200 group reveal-init delay-100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-2.5 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] shadow-xs group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-heading font-semibold text-[#202820] group-hover:text-[#174C35] transition-colors">Our Mission</h4>
                <span className="text-xs font-mono text-[#397A4B] uppercase tracking-wider font-medium">Purpose & Impact</span>
              </div>
            </div>
            <p className="text-sm text-[#68736B] leading-relaxed">
              {introduction.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 sm:p-8 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] shadow-xs transition-all duration-200 group reveal-init delay-200">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-2.5 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] shadow-xs group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200">
                <Eye className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-heading font-semibold text-[#202820] group-hover:text-[#174C35] transition-colors">Our Vision</h4>
                <span className="text-xs font-mono text-[#397A4B] uppercase tracking-wider font-medium">Long-Term Direction</span>
              </div>
            </div>
            <p className="text-sm text-[#68736B] leading-relaxed">
              {introduction.vision}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
