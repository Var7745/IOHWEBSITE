import React, { useState } from 'react';
import { 
  Send, 
  ArrowUp, 
  CheckCircle2
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Footer() {
  const { company } = siteContent;
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setNewsEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      role="contentinfo"
      className="bg-[#0B3D2E] text-emerald-100/90 border-t border-[#134E3C] pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Top Grid: Brand, Links, Services, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#134E3C]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/ioh-logo.jpg" 
                alt="IOH Engineering Logo" 
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 border border-[#134E3C] shadow-sm" 
              />
              <span className="text-xl tracking-tight text-white font-clash font-medium">
                IOH ENGINEERING
              </span>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-sm">
              An innovation-driven engineering company focused on developing smart, sustainable, and energy-efficient solutions for agriculture. Simplifying farming through innovative technologies that improve resource utilization, reduce operational costs, and enhance productivity.
            </p>

            <div className="pt-2 flex items-center gap-3 text-emerald-200">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="IOH Engineering on LinkedIn (opens in new tab)"
                className="p-2.5 rounded-lg bg-[#134E3C] hover:bg-white hover:text-[#0B3D2E] transition-colors border border-[#1a664e] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="IOH Engineering on X/Twitter (opens in new tab)"
                className="p-2.5 rounded-lg bg-[#134E3C] hover:bg-white hover:text-[#0B3D2E] transition-colors border border-[#1a664e] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="IOH Engineering on GitHub (opens in new tab)"
                className="p-2.5 rounded-lg bg-[#134E3C] hover:bg-white hover:text-[#0B3D2E] transition-colors border border-[#1a664e] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white text-emerald-100/90 transition-colors focus-visible:ring-1 focus-visible:ring-white rounded p-0.5">Home Landing</a></li>
              <li><a href="#about" className="hover:text-white text-emerald-100/90 transition-colors focus-visible:ring-1 focus-visible:ring-white rounded p-0.5">Introduction & About</a></li>
              <li><a href="#achievements" className="hover:text-white text-emerald-100/90 transition-colors focus-visible:ring-1 focus-visible:ring-white rounded p-0.5">Our Achievements</a></li>
              <li><a href="#contact" className="hover:text-white text-emerald-100/90 transition-colors focus-visible:ring-1 focus-visible:ring-white rounded p-0.5">Contact & Services</a></li>
            </ul>
          </div>

          {/* Direct Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Engineering Dispatch
            </h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Subscribe for technical updates, field trial benchmarks, and product rollout announcements.
            </p>

            {subscribed ? (
              <div role="status" className="flex items-center gap-2 p-3 rounded-xl bg-[#072C21] border border-[#134E3C] text-white text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>Subscribed to Engineering Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="newsletter-email"
                  name="newsletterEmail"
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#072C21] border border-[#134E3C] text-white placeholder-emerald-200/40 focus:outline-none focus:border-emerald-400 focus-visible:ring-1 focus-visible:ring-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-[#0B3D2E] font-bold transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none shrink-0"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-emerald-200/80 space-y-1 font-mono">
              <div>📍 {company.address}</div>
              <div>📞 {company.phone1}</div>
              <div>📧 {company.email}</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70 font-mono">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">IOH Engineering</strong> ({company.domain}). All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded p-1"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
}
