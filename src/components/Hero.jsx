import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { welcome } = siteContent;

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gray-950 text-white"
    >
      {/* Clean agricultural water engineering background with natural colors */}
      <div className="absolute inset-0 z-0">
        <img 
          src={welcome.bgImage} 
          alt="Agricultural engineering and precision water technology"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Subtle neutral dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Text positioned cleanly to the side */}
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* Large but balanced heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight mb-5 animate-fade-up drop-shadow-md text-white">
            Welcome to <span className="text-emerald-400">IOH Engineering</span>
          </h1>

          {/* Supporting sentence */}
          <p className="text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light animate-fade-up [animation-delay:200ms] drop-shadow-sm">
            {welcome.supporting}
          </p>
        </div>
      </div>
    </section>
  );
}
