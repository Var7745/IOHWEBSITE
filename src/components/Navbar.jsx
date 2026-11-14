import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);
    const formTarget = document.getElementById('contact-form') || document.getElementById('contact');
    if (formTarget) {
      formTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.history.pushState(null, '', '#contact');
      setTimeout(() => {
        const input = document.getElementById('contact-name');
        if (input) {
          input.focus({ preventScroll: true });
          input.classList.add('ring-4', 'ring-[#0B3D2E]/30', 'border-[#0B3D2E]');
          setTimeout(() => {
            input.classList.remove('ring-4', 'ring-[#0B3D2E]/30', 'border-[#0B3D2E]');
          }, 1500);
        }
      }, 500);
    }
  };

  const handleNavClick = (e, link) => {
    if (link.id === 'contact') {
      handleScrollToContact(e);
      return;
    }
    e.preventDefault();
    if (isOpen) setIsOpen(false);
    const target = document.getElementById(link.id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', link.href);
    }
  };

  return (
    <>
      {/* Accessible Skip to Content Link (WCAG 2.2 AA) */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header 
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-corporate ${
          !mounted ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] py-2.5 sm:py-3' 
            : 'bg-white border-b border-gray-100 shadow-2xs py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with initial subtle fade */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus-visible:outline-none rounded-xl p-1 transition-transform duration-300 ease-corporate hover:scale-[1.02]"
              aria-label="IOH Engineering - Home"
            >
              <img 
                src="/ioh-logo.jpg" 
                alt="IOH Engineering Logo" 
                className="w-10 h-10 rounded-xl object-contain border border-gray-200 bg-white p-0.5 shadow-sm group-hover:border-[#0B3D2E] group-hover:shadow-md transition-all duration-300 ease-corporate"
              />
              
              <span className="font-poppins font-bold tracking-wide text-gray-900 group-hover:text-[#0B3D2E] transition-colors duration-250 text-lg sm:text-xl">
                IOH ENGINEERING
              </span>
            </a>

            {/* Desktop Navigation Links with Staggered Entrance */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5" aria-label="Primary navigation">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    aria-current={isActive ? 'page' : undefined}
                    style={{ transitionDelay: `${mounted ? 0 : 100 + idx * 70}ms` }}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ease-corporate focus-visible:outline-none ${
                      isActive
                        ? 'text-[#0B3D2E] font-bold bg-[#EDF5EF] shadow-2xs'
                        : 'text-gray-700 hover:text-[#0B3D2E] hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Active green underline bar with smooth animation */}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#22C55E] rounded-full animate-fade-in" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Contact CTA with smooth entrance & hover */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#0B3D2E] text-white hover:bg-[#134E3C] corporate-btn transition-all duration-250 ease-corporate shadow-sm group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <PhoneCall className="w-3.5 h-3.5 transition-transform duration-250 ease-corporate group-hover:scale-110" aria-hidden="true" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Button with complete ARIA attributes */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg border border-gray-200 text-gray-900 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Navigation */}
          {isOpen && (
            <nav 
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="md:hidden mt-3 rounded-2xl p-4 border border-gray-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#EDF5EF] text-[#0B3D2E] font-bold'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" aria-hidden="true" />
                  </a>
                ))}
                
                <div className="pt-3 border-t border-gray-100 mt-2">
                  <a
                    href="#contact"
                    onClick={handleScrollToContact}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-[#0B3D2E] text-white hover:bg-[#06261c] transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" aria-hidden="true" />
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </nav>
          )}

        </div>
      </header>
    </>
  );
}
