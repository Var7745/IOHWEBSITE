import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = siteContent.carouselSlides;
  const timeoutRef = useRef(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handleChange = (e) => {
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => resetTimeout();
  }, [current, isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div 
      className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200 group"
      role="region"
      aria-roledescription="carousel"
      aria-label="IOH Engineering Prototype Showcase"
    >
      {/* Slides Container */}
      <div className="relative h-[420px] xs:h-[480px] sm:h-[540px] lg:h-[560px] w-full overflow-hidden bg-black">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
              } transition-transform duration-700`}
            >
              {/* Background Image with optimized loading & subtle hover zoom */}
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                className="w-full h-full object-cover object-center brightness-95 contrast-105 group-hover:scale-[1.025] transition-transform duration-700 ease-corporate"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" aria-hidden="true" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12 max-w-3xl z-20">
                <div className="space-y-3">
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Outfit']">
                    {slide.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200 max-w-2xl leading-relaxed">
                    {slide.subtitle}
                  </p>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows with refined hover micro-interactions */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-black shadow-md transition-all duration-250 ease-corporate hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-black shadow-md transition-all duration-250 ease-corporate hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>

      {/* Slide Indicators & Auto-play Pause Bar */}
      <div className="absolute bottom-4 right-4 sm:right-6 z-30 flex items-center gap-3 bg-black/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-700">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-gray-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded p-1 hover:scale-110 active:scale-95"
          aria-label={isPlaying ? "Pause automatic slide progression" : "Start automatic slide progression"}
          title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5" aria-hidden="true" />}
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide Selection">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === current}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ease-corporate focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                index === current ? 'w-6 bg-white' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
