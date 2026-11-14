import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { welcome } = siteContent;
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <section 
      id="home" 
      aria-label="Welcome section"
      className="relative min-h-[75vh] sm:min-h-[82vh] lg:min-h-[88vh] flex items-end justify-start pt-32 pb-14 sm:pb-16 lg:pb-20 px-6 sm:px-12 lg:px-20 overflow-hidden bg-gray-950 text-white"
    >
      {/* Background: Pure full-bleed photograph with natural daylight and graceful fade entrance */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={welcome.bgImage} 
          alt="IOH Engineering Agricultural smart sprinkler in crop field"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-top scale-110 sm:scale-115 lg:scale-120 origin-center translate-x-[4%] sm:translate-x-[6%] lg:translate-x-[7%] translate-y-[3%] sm:translate-y-[4%] lg:translate-y-[5%] transition-opacity duration-1000 ease-corporate ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          fetchPriority="high"
        />
        {/* Neutral bottom-left cinematic shadow for crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none transition-opacity duration-700 ease-corporate" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none transition-opacity duration-700 ease-corporate" />
      </div>

      <div className="relative z-10 max-w-xl lg:max-w-2xl text-left">
        {/* Large balanced heading with smooth upward stagger */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight mb-3">
          <span className="block text-white drop-shadow-lg animate-fade-up">
            Welcome to
          </span>
          <span className="relative inline-block text-[#3CD070] drop-shadow-lg mt-1 pb-2 animate-fade-up [animation-delay:120ms]">
            IOH Engineering
            {/* Elegant curved swoosh with progressive reveal */}
            <svg 
              className="absolute bottom-0 left-0 w-3/4 max-w-[260px] h-3 text-[#3CD070] origin-left animate-fade-in [animation-delay:350ms]" 
              viewBox="0 0 200 12" 
              fill="none" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path 
                d="M2 9C50 2 150 2 198 9" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
            </svg>
          </span>
        </h1>

        {/* Supporting sentence with natural timing */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed font-normal max-w-lg animate-fade-up [animation-delay:220ms] drop-shadow-md pt-2">
          {welcome.supporting}
        </p>
      </div>
    </section>
  );
}
