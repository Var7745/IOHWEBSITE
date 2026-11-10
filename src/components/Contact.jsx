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
      className="scroll-mt-20 py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white text-[#202820] border-b border-[#E1E7DF] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-init">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wider bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-[#397A4B]" aria-hidden="true" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl font-heading font-semibold text-[#202820] mb-3"
          >
            Connect With IOH Engineering
          </h2>
          <p className="text-base text-[#68736B] leading-relaxed font-normal">
            Connect directly with our engineering and research team for Agricultural PTP Nozzle systems, water and pesticide spraying solutions, commercial deployments, or partnerships.
          </p>
        </div>

        {/* Contact Info Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          
          {/* Address */}
          <div className="p-6 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] text-center flex flex-col items-center justify-center transition-all duration-200 shadow-xs group reveal-init delay-100">
            <div className="w-9 h-9 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] flex items-center justify-center mb-3 group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-semibold text-base mb-1 text-[#202820] group-hover:text-[#174C35] transition-colors">Corporate Address</h3>
            <p className="text-xs text-[#68736B] leading-relaxed">
              {company.address}
            </p>
          </div>

          {/* Email */}
          <div className="p-6 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] text-center flex flex-col items-center justify-center transition-all duration-200 shadow-xs group reveal-init delay-150">
            <div className="w-9 h-9 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] flex items-center justify-center mb-3 group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-semibold text-base mb-1 text-[#202820] group-hover:text-[#174C35] transition-colors">Email Us</h3>
            <a 
              href={`mailto:${company.email}`}
              className="text-xs font-mono font-medium text-[#202820] hover:text-[#174C35] hover:underline block focus-visible:ring-1 focus-visible:ring-[#174C35] rounded p-0.5"
            >
              {company.email}
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] text-center flex flex-col items-center justify-center transition-all duration-200 shadow-xs group reveal-init delay-200">
            <div className="w-9 h-9 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] flex items-center justify-center mb-3 group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-semibold text-base mb-1 text-[#202820] group-hover:text-[#174C35] transition-colors">Call Us</h3>
            <a 
              href={`tel:${company.phone1}`}
              className="text-xs font-mono font-medium text-[#202820] hover:text-[#174C35] hover:underline block focus-visible:ring-1 focus-visible:ring-[#174C35] rounded p-0.5"
            >
              {company.phone1}
            </a>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-lg border border-[#E1E7DF] bg-[#F7F8F4] hover:bg-white hover:border-[#397A4B] text-center flex flex-col items-center justify-center transition-all duration-200 shadow-xs group reveal-init delay-250">
            <div className="w-9 h-9 rounded-md bg-[#EDF3EE] text-[#174C35] border border-[#E1E7DF] flex items-center justify-center mb-3 group-hover:bg-[#174C35] group-hover:text-white transition-colors duration-200">
              <Clock className="w-4 h-4" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-semibold text-base mb-1 text-[#202820] group-hover:text-[#174C35] transition-colors">Working Hours</h3>
            <p className="text-xs text-[#68736B] leading-relaxed">
              Mon - Sat: 9:00 AM - 6:30 PM IST
            </p>
          </div>

        </div>

        {/* Contact Form matching requested minimal design */}
        <div id="contact-form" className="scroll-mt-28 max-w-2xl mx-auto rounded-xl border border-[#E1E7DF] bg-white p-7 sm:p-10 shadow-xs reveal-init delay-200">
          {submitted ? (
            <div 
              role="status" 
              aria-live="polite" 
              className="text-center py-8 sm:py-10 space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#174C35] text-white flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7 text-[#C49A50]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[#202820]">
                Message Sent Successfully!
              </h3>
              <p className="max-w-md mx-auto text-sm text-[#68736B] leading-relaxed">
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
                  className="px-6 py-2.5 rounded-md text-xs font-mono font-medium uppercase bg-[#174C35] text-white hover:bg-[#123C2A] corporate-btn transition-colors focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:outline-none shadow-xs cursor-pointer"
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
                  className="w-full px-4 py-3 rounded-md text-sm border border-[#E1E7DF] bg-[#F7F8F4] text-[#202820] placeholder-[#8C978F] focus:bg-white focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-all shadow-xs"
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
                  className="w-full px-4 py-3 rounded-md text-sm border border-[#E1E7DF] bg-[#F7F8F4] text-[#202820] placeholder-[#8C978F] focus:bg-white focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-all shadow-xs"
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
                  className="w-full px-4 py-3 rounded-md text-sm border border-[#E1E7DF] bg-[#F7F8F4] text-[#202820] placeholder-[#8C978F] focus:bg-white focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-all shadow-xs"
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
                  className="w-full px-4 py-3 rounded-md text-sm border border-[#E1E7DF] bg-[#F7F8F4] text-[#202820] placeholder-[#8C978F] focus:bg-white focus:outline-none focus:border-[#174C35] focus:ring-1 focus:ring-[#174C35] transition-all shadow-xs resize-y"
                />
              </div>

              {/* Centered Button */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-md font-medium text-sm sm:text-base text-white bg-[#174C35] hover:bg-[#123C2A] corporate-btn shadow-xs disabled:opacity-50 transition-colors focus-visible:ring-2 focus-visible:ring-[#174C35] focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
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
