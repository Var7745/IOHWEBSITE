import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/siteContent';

export default function Contact() {
  const { company } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: 'Agricultural PTP Nozzle Inquiries',
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
      className="scroll-mt-20 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#F8FAF7] text-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 bg-white text-[#0B3D2E] border border-[#CDE1D3] shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#0B3D2E]" aria-hidden="true" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-['Outfit'] mb-4 break-words"
          >
            Connect With IOH Engineering
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed font-normal">
            Connect directly with our engineering and research team for Agricultural PTP Nozzle systems, water and pesticide spraying solutions, commercial deployments, or partnerships.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          
          {/* Address */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0B3D2E] transition-all">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-['Outfit']">Corporate Address</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {company.address}
            </p>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0B3D2E] transition-all">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-['Outfit']">Email Us</h3>
            <a 
              href={`mailto:${company.email}`}
              className="text-xs font-mono font-semibold text-gray-900 hover:text-[#0B3D2E] hover:underline block focus-visible:ring-1 focus-visible:ring-[#0B3D2E] rounded p-0.5"
            >
              {company.email}
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0B3D2E] transition-all">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3">
              <Phone className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-['Outfit']">Call Directly</h3>
            <a 
              href={`tel:${company.phone1}`}
              className="text-xs font-mono font-semibold text-gray-900 hover:text-[#0B3D2E] hover:underline block focus-visible:ring-1 focus-visible:ring-[#0B3D2E] rounded p-0.5"
            >
              {company.phone1}
            </a>
            <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
              Direct Engineering Line
            </span>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0B3D2E] transition-all">
            <div className="p-3 rounded-xl bg-[#EDF5EF] text-[#0B3D2E] mb-3">
              <Clock className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base mb-1 text-gray-900 font-['Outfit']">Working Hours</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mon - Sat: 9:00 AM - 6:30 PM IST<br />
              <span className="font-bold text-[#0B3D2E] font-mono">Technical Consultations on Request</span>
            </p>
          </div>

        </div>

        {/* Inquiry Form */}
        <div id="contact-form" className="scroll-mt-28 max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          {submitted ? (
            <div 
              role="status" 
              aria-live="polite" 
              className="text-center py-8 sm:py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-black">
                Inquiry Successfully Submitted!
              </h3>
              <p className="max-w-md mx-auto text-sm text-gray-600 leading-relaxed">
                Thank you for reaching out to <strong>IOH Engineering</strong>. Our engineering leads will review your parcel specifications or collaboration scope and contact you promptly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      organization: '',
                      serviceInterest: 'Agricultural PTP Nozzle Inquiries',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold font-mono uppercase bg-[#0B3D2E] text-white hover:bg-[#06261c] transition-colors focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:outline-none shadow-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
              
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#0B3D2E]" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B3D2E]">
                    Official Inquiries & Consultations
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black font-['Outfit']">
                  Submit an Engineering or Service Consultation Request
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Share your farm requirements, parcel dimensions, or partnership scope below.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label 
                    htmlFor="contact-name" 
                    className="block text-xs font-mono uppercase text-gray-700 mb-2 font-semibold"
                  >
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="e.g. ABCD"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black focus-visible:ring-2 focus-visible:ring-black shadow-sm"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-email" 
                    className="block text-xs font-mono uppercase text-gray-700 mb-2 font-semibold"
                  >
                    Email Address <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    placeholder="abcd@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black focus-visible:ring-2 focus-visible:ring-black shadow-sm"
                  />
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label 
                    htmlFor="contact-phone" 
                    className="block text-xs font-mono uppercase text-gray-700 mb-2 font-semibold"
                  >
                    Phone / Contact Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black focus-visible:ring-2 focus-visible:ring-black shadow-sm"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-organization" 
                    className="block text-xs font-mono uppercase text-gray-700 mb-2 font-semibold"
                  >
                    Organization / Farm / Agro Enterprise
                  </label>
                  <input
                    id="contact-organization"
                    name="organization"
                    type="text"
                    placeholder="e.g. ABCD Agro / Farm"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black focus-visible:ring-2 focus-visible:ring-black shadow-sm"
                  />
                </div>
              </div>

              {/* Service Interest Dropdown */}
              <div>
                <label 
                  htmlFor="contact-service" 
                  className="block text-xs font-mono uppercase text-gray-700 mb-2 font-semibold"
                >
                  Area of Interest / Service
                </label>
                <select
                  id="contact-service"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black focus-visible:ring-2 focus-visible:ring-black shadow-sm"
                >
                  <option value="Agricultural PTP Nozzle Inquiries">Agricultural PTP Nozzle Inquiries</option>
                  <option value="Water & Pesticide Precision Spraying">Water & Pesticide Precision Spraying</option>
                  <option value="Smart Centralized Irrigation System Inquiry">Smart Centralized Irrigation System Inquiry</option>
                  <option value="Commercial Farm & Orchard Deployment">Commercial Farm & Orchard Deployment</option>
                  <option value="Agricultural Automation & Robotics R&D">Agricultural Automation & Robotics R&D</option>
                  <option value="Government & Institutional Partnership">Government & Institutional Partnership</option>
                  <option value="General Business Inquiry">General Business Inquiry</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label 
                  htmlFor="contact-message" 
                  className="block text-xs font-mono uppercase text-gray-700 mb-2 font-semibold"
                >
                  Parcel Details or Inquiries <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  placeholder="Describe your farm parcel layout (acres, regular/irregular), water supply conditions, crop types, or collaboration scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black focus-visible:ring-2 focus-visible:ring-black shadow-sm"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[#0B3D2E] text-white hover:bg-[#06261c] transition-colors shadow-md disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#0B3D2E] focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
