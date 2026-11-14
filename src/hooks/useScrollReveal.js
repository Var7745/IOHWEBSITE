import { useEffect } from 'react';

/**
 * Custom hook to initialize IntersectionObserver on elements with .reveal-init or [data-reveal]
 * Triggers smooth upward fade entrance when elements enter viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector = '.reveal-init, .reveal-fade-up, .reveal-fade-in, .reveal-scale-in, .reveal-slide-left, .reveal-slide-right';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Unobserve after reveal for one-time smooth entrance (no re-trigger layout jumps)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
