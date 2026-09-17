import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { BUSINESS_INFO } from '../data/hvacData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '24/7 Emergency AC Repair',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState(initialService);
  const [isEmergency, setIsEmergency] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fbfcfd] text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Discover Us Information (Matching image.png) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight leading-[1.18]" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
                Discover Us
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md font-normal">
                Our Certified HVAC Dispatchers And Master Technicians Are Available To Answer Any Questions You Might Have. We've Got The Cool Solutions.
              </p>
            </div>

            {/* Contact Details Grid (Matching image.png: Call Center, Location, Email, Social Media) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[12px] font-light" style={{ fontWeight: 300 }}>
              {/* Call Center */}
              <div className="space-y-1.5">
                <h4 className="text-[13px] font-light text-slate-900 uppercase tracking-wider" style={{ fontWeight: 300 }}>
                  Call Center
                </h4>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="block text-slate-600 hover:text-slate-950 font-light text-[12px]"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <span className="text-slate-400 block font-light text-[12px]">(24/7 Hotline)</span>
              </div>

              {/* Our Location */}
              <div className="space-y-1.5">
                <h4 className="text-[13px] font-light text-slate-900 uppercase tracking-wider" style={{ fontWeight: 300 }}>
                  Our Location
                </h4>
                <p className="text-slate-600 font-light text-[12px] leading-relaxed">
                  {BUSINESS_INFO.address},<br />
                  {BUSINESS_INFO.cityStateZip}
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <h4 className="text-[13px] font-light text-slate-900 uppercase tracking-wider" style={{ fontWeight: 300 }}>
                  Email
                </h4>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="block text-slate-600 hover:text-slate-950 font-light text-[12px]"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              {/* Social Media */}
              <div className="space-y-1.5">
                <h4 className="text-[13px] font-light text-slate-900 uppercase tracking-wider" style={{ fontWeight: 300 }}>
                  Social Media
                </h4>
                <div className="flex items-center gap-3 text-slate-500 font-light text-[12px]">
                  <span className="hover:text-slate-900 cursor-pointer font-light">X</span>
                  <span className="hover:text-slate-900 cursor-pointer font-light">In</span>
                  <span className="hover:text-slate-900 cursor-pointer font-light">Fb</span>
                  <span className="hover:text-slate-900 cursor-pointer font-light">Yt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Form Card (Matching image.png: Your Name, Email, Phone Number, Message, Submit button) */}
          <div className="lg:col-span-7">
            <div className="bg-[#071f33] text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-sky-800/40">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#47d847]/20 text-[#47d847] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Message Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you, <span className="text-white font-bold">{name}</span>. Our on-duty dispatch coordinator will reach out at <span className="text-white font-bold">{phone}</span> within 5 to 10 minutes.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-none border border-[#47d847] hover:border-[#3ec43e] bg-[#47d847] hover:bg-[#3ec43e] text-black font-light text-xs tracking-wider transition-all duration-300 overflow-hidden cursor-pointer"
                      style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                      <Phone className="w-3.5 h-3.5 relative z-10" />
                      <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Direct Line: {BUSINESS_INFO.phone}</span>
                      <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Your Name */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#47d847]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#47d847]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 772000 7392"
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#47d847]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Issue Description
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what's going on with your heating or cooling system..."
                      className="w-full px-4 py-3 rounded-xl bg-white text-slate-950 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#47d847]"
                    ></textarea>
                  </div>

                  {/* Submit Button with rectangular 1px border matching hero section */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="group relative w-full py-3.5 px-6 rounded-none border border-slate-900 hover:border-black bg-slate-950 hover:bg-slate-800 text-white font-light text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden cursor-pointer"
                      style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                      <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Submit</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
