import React from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Cpu, 
  Plane, 
  Truck, 
  Droplets,
  Layers
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import Carousel from './Carousel';

export default function Introduction() {
  const { introduction } = siteContent;

  return (
    <section id="about" className="scroll-mt-20 py-20 px-6 sm:px-10 lg:px-16 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-500 block mb-2">
            Company Overview & Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black font-['Outfit'] mb-4">
            {introduction.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            {introduction.subtitle}
          </p>
        </div>

        {/* Top Split Grid: Company Narrative & Showcase Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-black font-['Outfit']">
              Engineering the Next Generation of Unmanned Aerial & Ground Systems
            </h3>
            
            <p className="text-base text-gray-700 leading-relaxed">
              {introduction.description}
            </p>

            <p className="text-base text-gray-700 leading-relaxed">
              Our engineering team works across the entire technology lifecycle — from aeromechanical CAD design and rapid carbon-composite prototyping, to embedded flight controllers, multi-sensor collision avoidance, and commercial field deployments.
            </p>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Agricultural Spraying Drones</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Autonomous Delivery Bots</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Cargo Delivery Drone Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Proprietary Autopilot & SLAM</span>
              </div>
            </div>
          </div>

          {/* Carousel Showcase Column */}
          <div className="lg:col-span-6">
            <Carousel darkMode={false} />
          </div>

        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Mission */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/70 shadow-sm hover:border-black transition-all">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-black text-white">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black">Our Mission</h4>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">Purpose & Impact</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {introduction.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50/70 shadow-sm hover:border-black transition-all">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-black text-white">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black">Our Vision</h4>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">Long-Term Direction</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {introduction.vision}
            </p>
          </div>

        </div>

        {/* 4 Core R&D Areas */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-['Outfit'] mb-2">
              Core R&D & Engineering Focus
            </h3>
            <p className="text-sm text-gray-600">
              Specialized research domains delivering high-reliability autonomous solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {introduction.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-black hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-extrabold text-gray-400">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-black" />
                  </div>
                  <h4 className="text-base font-bold text-black mb-2">
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

      </div>
    </section>
  );
}
