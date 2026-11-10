import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ExternalLink 
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
      className="relative w-full rounded-xl overflow-hidden shadow-md border border-[#E1E7DF] group bg-white"
      role="region"
      aria-roledescription="carousel"
      aria-label="IOH Engineering Prototype Showcase"
    >
      {/* Slides Container */}
      <div className="relative h-[400px] xs:h-[440px] sm:h-[480px] lg:h-[500px] w-full overflow-hidden bg-[#202820]">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with optimized loading */}
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                className="w-full h-full object-cover object-center brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202820]/90 via-[#202820]/35 to-transparent" aria-hidden="true" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 max-w-2xl z-20">
                <div className="space-y-3">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium tracking-wide bg-white/95 text-[#174C35] border border-white/20 shadow-xs">
                    <span>{slide.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-white tracking-tight leading-tight">
                    {slide.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-gray-200/90 max-w-xl leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* CTA Action */}
                  {slide.ctaText && (
                    <div className="pt-2">
                      <a
                        href={slide.ctaLink || '#contact'}
                        className="inline-flex items-center gap-2 px-4.5 py-2 text-xs sm:text-sm font-medium text-white bg-[#174C35] hover:bg-[#123C2A] rounded-md transition-colors shadow-xs focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                      >
                        <span>{slide.ctaText}</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-md bg-white/90 hover:bg-white text-[#202820] shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-md bg-white/90 hover:bg-white text-[#202820] shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </button>

      {/* Slide Indicators & Auto-play Pause Bar */}
      <div className="absolute bottom-4 right-4 sm:right-6 z-30 flex items-center gap-2.5 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded p-1"
          aria-label={isPlaying ? "Pause automatic slide progression" : "Start automatic slide progression"}
          title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
        >
          {isPlaying ? <Pause className="w-3 h-3" aria-hidden="true" /> : <Play className="w-3 h-3" aria-hidden="true" />}
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide Selection">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === current}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                index === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
