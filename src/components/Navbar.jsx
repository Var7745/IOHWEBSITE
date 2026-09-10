import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3' 
        : 'bg-white py-4 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white group-hover:bg-gray-800 transition-colors shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight font-['Outfit'] text-black">
                IOH <span className="font-light">ENGINEERING</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 font-semibold">
                iohengineering.com
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-black font-bold bg-gray-100'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-black text-white hover:bg-gray-800 transition-all shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-gray-200 text-gray-900"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl p-4 border border-gray-200 bg-white shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-gray-100 text-black font-bold'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              
              <div className="pt-3 border-t border-gray-100 mt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-black text-white"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
