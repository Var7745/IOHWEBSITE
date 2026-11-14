import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Team() {
  const { team } = siteContent;

  if (!team || team.length === 0) return null;

  return (
    <section 
      id="team" 
      aria-labelledby="team-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#F8FAF7] text-gray-900 border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 reveal-fade-up">
          <h2 
            id="team-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black font-heading mb-2"
          >
            Leadership & Engineering Team
          </h2>
          <p className="text-sm text-gray-600">
            Pioneering founders with specialized backgrounds in robotics, power electronics, and embedded systems.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 corporate-card group reveal-fade-up hover:-translate-y-1.5 hover:shadow-lg hover:border-[#22C55E]/40 transition-all duration-300 ease-corporate ${
                idx === 0 ? 'delay-100' : 'delay-200'
              }`}
            >
              <div className="overflow-hidden rounded-2xl shrink-0 border border-gray-200 shadow-sm bg-gray-50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-corporate"
                  loading="lazy"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors duration-250">
                  {member.name}
                </h3>
                <span className="text-xs font-mono font-bold text-[#0B3D2E] uppercase tracking-wider block mb-1">
                  {member.role}
                </span>
                {member.credentials && (
                  <p className="text-xs font-semibold text-gray-800 mb-2">
                    {member.credentials}
                  </p>
                )}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
