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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'achievements', 'contact'];
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
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#174C35] focus:text-white focus:rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-white text-sm font-medium"
      >
        Skip to main content
      </a>

      <header 
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-corporate ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E1E7DF] shadow-xs py-3' 
            : 'bg-white/90 md:bg-white/70 backdrop-blur-sm border-b border-[#E1E7DF]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none rounded-md p-1"
              aria-label="IOH Engineering - Home"
            >
              <img 
                src="/ioh-logo.jpg" 
                alt="IOH Engineering Logo" 
                className={`rounded-lg object-contain border border-[#E1E7DF] bg-white p-0.5 shadow-xs transition-all duration-300 ease-corporate ${
                  scrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-10 sm:h-10'
                }`}
              />
              
              <span className={`tracking-tight font-heading font-semibold text-[#174C35] transition-all duration-300 ease-corporate ${
                scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>
                IOH ENGINEERING
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3.5 py-2 text-[15px] font-medium rounded-md nav-link-animated transition-all duration-200 ease-corporate focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none ${
                      isActive
                        ? 'text-[#174C35] font-semibold is-active bg-[#EDF3EE]'
                        : 'text-[#202820] hover:text-[#174C35] hover:bg-[#F7F8F4]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Contact CTA */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-[#174C35] text-white hover:bg-[#123C2A] corporate-btn transition-all duration-200 ease-corporate shadow-xs group cursor-pointer focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <PhoneCall className="w-3.5 h-3.5 transition-transform duration-200 ease-corporate group-hover:scale-105" aria-hidden="true" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Button with complete ARIA attributes */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md border border-[#E1E7DF] text-[#202820] hover:bg-[#F7F8F4] focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Navigation */}
          {isOpen && (
            <nav 
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="md:hidden mt-3 rounded-lg p-3 border border-[#E1E7DF] bg-white shadow-md animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    aria-current={activeSection === link.id ? 'page' : undefined}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#EDF3EE] text-[#174C35] font-semibold'
                        : 'hover:bg-[#F7F8F4] text-[#202820]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" aria-hidden="true" />
                  </a>
                ))}
                
                <div className="pt-2 border-t border-[#E1E7DF] mt-1">
                  <a
                    href="#contact"
                    onClick={handleScrollToContact}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-md bg-[#174C35] text-white hover:bg-[#123C2A] transition-colors cursor-pointer"
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
