import React from 'react';
import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section id="home" className="scroll-mt-20 pt-16 sm:pt-20">
      {/* Landing Hero Container with Exact Rover Image */}
      <div 
        className="relative h-[88vh] sm:h-[92vh] bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/hero-rover.jpg')" }}
      >
        {/* Clean Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content - Left Aligned exactly like the benchmark */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-16 text-white space-y-6">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg text-white max-w-3xl leading-tight font-['Outfit']">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl text-white/90 leading-relaxed font-normal drop-shadow-md">
            {hero.subtitle}
          </p>

          {/* Clean 'GET STARTED' Button */}
          <div className="pt-2">
            <a
              href="#about"
              className="px-7 py-3.5 border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-md font-semibold text-sm tracking-wider uppercase inline-block shadow-sm"
            >
              {hero.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
