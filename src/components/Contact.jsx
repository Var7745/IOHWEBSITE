import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2
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
    serviceInterest: 'Agricultural Drone Services',
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
        // fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24 px-6 sm:px-10 lg:px-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4 bg-gray-100 text-black border border-gray-300 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black font-['Outfit'] mb-4">
            Contact Us & Services Inquiry
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Connect directly with our engineering and research team for agricultural drone deployments, autonomous delivery solutions, or custom R&D collaborations.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Address */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-black transition-all">
            <div className="p-3 rounded-xl bg-black text-white mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base mb-1 text-black">Headquarters</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Aerospace & Robotics Hub, Hyderabad, Telangana, India
            </p>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-black transition-all">
            <div className="p-3 rounded-xl bg-black text-white mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base mb-1 text-black">Email Us</h4>
            <a 
              href={`mailto:${company.email}`}
              className="text-xs font-mono font-semibold text-black hover:underline block"
            >
              {company.email}
            </a>
            <a 
              href={`mailto:${company.supportEmail}`}
              className="text-xs font-mono text-gray-500 hover:underline block mt-0.5"
            >
              {company.supportEmail}
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-black transition-all">
            <div className="p-3 rounded-xl bg-black text-white mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base mb-1 text-black">Call Directly</h4>
            <a 
              href={`tel:${company.phone1}`}
              className="text-xs font-mono font-semibold text-black hover:underline block"
            >
              {company.phone1}
            </a>
            <a 
              href={`tel:${company.phone2}`}
              className="text-xs font-mono text-gray-500 hover:underline block mt-0.5"
            >
              {company.phone2}
            </a>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center flex flex-col items-center justify-center hover:border-black transition-all">
            <div className="p-3 rounded-xl bg-black text-white mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base mb-1 text-black">Working Hours</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Mon - Sat: 9:00 AM - 6:30 PM<br />
              <span className="font-bold text-black font-mono">Flight Test Operations Daily</span>
            </p>
          </div>

        </div>

        {/* Inquiry Form */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-gray-200 bg-gray-50/70 p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-black">
                Inquiry Successfully Submitted!
              </h3>
              <p className="max-w-md mx-auto text-sm text-gray-600 leading-relaxed">
                Thank you for reaching out to <strong>IOH Engineering</strong>. Our technology lead will review your project parameters and contact you promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      organization: '',
                      serviceInterest: 'Agricultural Drone Services',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold font-mono uppercase bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-black font-['Outfit']">
                  Submit a Service or Technical Consultation Request
                </h3>
                <span className="text-xs text-gray-500">
                  Please provide your details below and our team will get in touch with you.
                </span>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-600 mb-2 font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-600 mb-2 font-semibold">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black shadow-sm"
                  />
                </div>
              </div>

              {/* Phone & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-600 mb-2 font-semibold">
                    Phone / Contact Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98450 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-600 mb-2 font-semibold">
                    Organization / Farm / Enterprise
                  </label>
                  <input
                    type="text"
                    placeholder="Company or Institution name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black shadow-sm"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-600 mb-2 font-semibold">
                  Service / Project Area
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black shadow-sm"
                >
                  <option value="Agricultural Drone Services">Agricultural Drone Services (Spraying / Seeding / Health Mapping)</option>
                  <option value="Drone Deliveries & Delivery Bots">Autonomous Drone Deliveries & Delivery Bots</option>
                  <option value="Unmanned Ground Robotics / Rovers">Unmanned Ground Robotics & Rover Platforms</option>
                  <option value="Custom Drone R&D & Prototyping">Custom Drone R&D, Airframe & Autopilot Prototyping</option>
                  <option value="Pilot Demonstrations & Field Trials">Pilot Demonstrations & Field Trials</option>
                  <option value="General Business Inquiry">General Business Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-600 mb-2 font-semibold">
                  Project Details / Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your requirements, field trial area, desired payload/range, or partnership scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 bg-white text-black focus:outline-none focus:border-black shadow-sm"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-black text-white hover:bg-gray-800 transition-colors shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
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
