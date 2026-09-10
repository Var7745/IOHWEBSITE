import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ExternalLink 
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Carousel({ darkMode }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = siteContent.carouselSlides;
  const timeoutRef = useRef(null);

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
    <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 group">
      {/* Slides Container */}
      <div className="relative h-[480px] sm:h-[540px] lg:h-[560px] w-full overflow-hidden bg-black">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
              } transition-transform duration-700`}
            >
              {/* Background Image with Crisp Monochrome Contrast Gradient */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter grayscale-[25%] brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 max-w-3xl z-20">
                <div className="space-y-3">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-white text-black">
                    <span>{slide.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {slide.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* CTA Action */}
                  {slide.ctaText && (
                    <div className="pt-3">
                      <a
                        href={slide.ctaLink || '#contact'}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-white hover:bg-gray-200 rounded-xl transition-all duration-200 shadow-sm"
                      >
                        <span>{slide.ctaText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 hover:bg-white text-black shadow-md transition-all duration-200 hover:scale-105"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 hover:bg-white text-black shadow-md transition-all duration-200 hover:scale-105"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators & Auto-play Pause Bar */}
      <div className="absolute bottom-4 right-6 z-30 flex items-center gap-3 bg-black/80 px-4 py-2 rounded-full border border-gray-700">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-gray-300 hover:text-white transition-colors"
          title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
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
