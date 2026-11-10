import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/siteContent';

export default function Contact() {
  const { company } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // graceful fallback if canvas-confetti is not available
      }
    }, 600);
  };

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#F8FAF7] text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 bg-white text-[#0B3D2E] border border-[#CDE1D3] shadow-sm animate-float-slow">
            <Mail className="w-3.5 h-3.5 text-[#22C55E]" aria-hidden="true" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-heading mb-4 break-words"
          >
            Connect With IOH Engineering
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed font-normal">
            Connect directly with our engineering and research team for Agricultural PTP Nozzle systems, water and pesticide spraying solutions, commercial deployments, or partnerships.
          </p>
        </div>

        {/* Contact Info Cards with Staggered Scroll Reveal & Corporate Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          
          {/* Address */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center corporate-card group reveal-init delay-100">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3 group-hover:bg-[#0B3D2E] group-hover:text-white transition-all duration-300 ease-corporate group-hover:scale-110">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">Corporate Address</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {company.address}
            </p>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center corporate-card group reveal-init delay-150">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3 group-hover:bg-[#0B3D2E] group-hover:text-white transition-all duration-300 ease-corporate group-hover:scale-110">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">Email Us</h3>
            <a 
              href={`mailto:${company.email}`}
              className="text-xs font-mono font-semibold text-gray-900 hover:text-[#0B3D2E] hover:underline block focus-visible:ring-1 focus-visible:ring-[#0B3D2E] rounded p-0.5"
            >
              {company.email}
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center corporate-card group reveal-init delay-200">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3 group-hover:bg-[#0B3D2E] group-hover:text-white transition-all duration-300 ease-corporate group-hover:scale-110">
              <Phone className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">Call Us</h3>
            <a 
              href={`tel:${company.phone1}`}
              className="text-xs font-mono font-semibold text-gray-900 hover:text-[#0B3D2E] hover:underline block focus-visible:ring-1 focus-visible:ring-[#0B3D2E] rounded p-0.5"
            >
              {company.phone1}
            </a>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center corporate-card group reveal-init delay-250">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3 group-hover:bg-[#0B3D2E] group-hover:text-white transition-all duration-300 ease-corporate group-hover:scale-110">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-heading group-hover:text-[#0B3D2E] transition-colors">Working Hours</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mon - Sat: 9:00 AM - 6:30 PM IST
            </p>
          </div>

        </div>

        {/* Contact Form matching requested minimal design */}
        <div id="contact-form" className="scroll-mt-28 max-w-2xl mx-auto rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-11 shadow-sm corporate-card reveal-init delay-200">
          {submitted ? (
            <div 
              role="status" 
              aria-live="polite" 
              className="text-center py-8 sm:py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-black">
                Message Sent Successfully!
              </h3>
              <p className="max-w-md mx-auto text-sm text-gray-600 leading-relaxed">
                Thank you for reaching out to <strong>IOH Engineering</strong>. Our engineering leads will review your message and contact you promptly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="px-7 py-3 rounded-full text-xs font-bold font-mono uppercase bg-[#0B3D2E] text-white hover:bg-[#134E3C] corporate-btn transition-colors focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:outline-none shadow-sm cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
              {/* Your Name */}
              <div>
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20 transition-all shadow-2xs"
                />
              </div>

              {/* Your Email */}
              <div>
                <label htmlFor="contact-email" className="sr-only">Your Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20 transition-all shadow-2xs"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="sr-only">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  aria-required="true"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20 transition-all shadow-2xs"
                />
              </div>

              {/* Enter message */}
              <div>
                <label htmlFor="contact-message" className="sr-only">Enter message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  placeholder="Enter message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-[#0B3D2E] focus:ring-2 focus:ring-[#0B3D2E]/20 transition-all shadow-2xs resize-y"
                />
              </div>

              {/* Centered Pill Button */}
              <div className="pt-3 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-9 py-3 rounded-full font-medium text-sm sm:text-base text-white bg-[#0B3D2E] hover:bg-[#134E3C] corporate-btn shadow-md disabled:opacity-50 transition-all duration-250 ease-corporate focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
