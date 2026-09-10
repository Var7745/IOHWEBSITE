import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Plane, 
  Zap 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Achievements() {
  const { achievements, stats } = siteContent;

  return (
    <section id="achievements" className="scroll-mt-20 py-24 px-6 sm:px-10 lg:px-16 bg-gray-50 text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 bg-white text-black border border-gray-300 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Track Record & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black font-['Outfit'] mb-4">
            Our Engineering Achievements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Proven reliability, validated field trials, and proprietary autonomous technologies engineered for high-demand aerial and ground applications.
          </p>
        </div>

        {/* Big Impact Statistics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-black tracking-tight mb-1">
                {stat.value}
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-1">
                {stat.unit}
              </span>
              <span className="text-xs text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-black hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Metric & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-extrabold font-mono text-black">
                    {item.metric}
                  </span>
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-gray-100 text-gray-800 border border-gray-200">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 font-['Outfit']">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5 text-black font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Benchmark</span>
                </span>
                <span className="text-gray-400">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-xl font-bold font-['Outfit'] mb-1">
              Interested in Partnering or Scheduling a Field Demonstration?
            </h4>
            <p className="text-sm text-gray-300">
              Our engineering team conducts customized pilot deployments for commercial agriculture, logistics firms, and industrial partners.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-200 font-bold text-sm uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Contact Engineering
          </a>
        </div>

      </div>
    </section>
  );
}
