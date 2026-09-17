import React from 'react';
import { Phone, Mail, ArrowUpRight, Check, Plus } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { BUSINESS_INFO } from '../data/hvacData';

interface WhoAreWeSectionProps {
  onOpenBooking: () => void;
}

export const WhoAreWeSection: React.FC<WhoAreWeSectionProps> = ({ onOpenBooking }) => {

  // Custom green monogram icon matching the Lunveris bullet icons
  const GreenMonogramIcon = () => (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <path d="M4 6C4 9.3137 6.68629 12 10 12C13.3137 12 16 9.3137 16 6" stroke="#47d847" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M7 13C7 14.6569 8.34315 16 10 16C11.6569 16 13 14.6569 13 13" stroke="#47d847" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="4" r="1.5" fill="#47d847" />
    </svg>
  );

  return (
    <section id="who-are-we" className="py-20 lg:py-28 bg-[#fbfcfd] text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Who Are We Narrative (Matching image.png) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight leading-[1.18] mb-4" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
                Delivering Comfort With Purposeful Precision
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                We Turn Unbearable Heat Emergencies Into Safe, Reliable Cooling, Crafting Long-Lasting HVAC Solutions That Help Families and Businesses Stay Effortlessly Comfortable.
              </p>
            </div>

            {/* Bullet list with the distinctive green monogram icons */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <GreenMonogramIcon />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Upfront Flat-Rate Pricing. Zero Hidden Fees.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <GreenMonogramIcon />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  NATE-Certified &amp; Background-Vetted Master Technicians.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <GreenMonogramIcon />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Rapid 24/7 Emergency Dispatch Under 60 Minutes.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <GreenMonogramIcon />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  100% Polar Shield Satisfaction Guarantee.
                </span>
              </div>
            </div>

            {/* Sleek rectangular button with 1px border matching hero section */}
            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                id="who-are-we-cta"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-none border border-slate-900 hover:border-black bg-slate-950 hover:bg-slate-800 text-white font-light text-sm tracking-wider transition-all duration-300 shadow-sm overflow-hidden cursor-pointer"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>About Polar Air</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* Right Column: High-End Bento Dashboard UI */}
          <div className="lg:col-span-6 space-y-4">
            {/* Specialist Profile Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces"
                      alt="David Vance"
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-2xl object-cover border border-slate-100 shadow-2xs hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#47d847] border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-slate-950 tracking-tight">
                        David Vance
                      </h4>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#47d847]/15 text-emerald-800 font-semibold text-[10px]">
                        Master HVAC Lead
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="flex items-center gap-1.5 hover:text-slate-900 transition-colors truncate"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{BUSINESS_INFO.email}</span>
                      </a>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>(+1) 555 019 2831</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Call & Email Rectangular Buttons with 1px border */}
                <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 self-start sm:self-center shrink-0">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="group relative py-2 px-4 rounded-none border border-slate-900 bg-[#041624] hover:bg-slate-800 text-white text-xs font-light tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer overflow-hidden"
                    style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                    <Phone className="w-3.5 h-3.5 text-[#47d847] relative z-10" />
                    <span className="relative z-10 font-light">Call</span>
                    <ArrowRight className="w-3 h-3 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="group relative py-2 px-4 rounded-none border border-slate-300 hover:border-slate-800 bg-transparent hover:bg-slate-50 text-slate-800 text-xs font-light tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer overflow-hidden"
                    style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                    <Mail className="w-3.5 h-3.5 text-slate-500 relative z-10" />
                    <span className="relative z-10 font-light">Email</span>
                    <ArrowRight className="w-3 h-3 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Live Dispatch Task List */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#47d847] animate-pulse"></span>
                  <span className="text-sm font-bold text-slate-950 tracking-tight">
                    Active Dispatch Queue
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100/90 hover:border-slate-200 transition-colors">
                  <div className="w-5 h-5 rounded-md bg-[#47d847] flex items-center justify-center text-slate-950 shrink-0 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 leading-snug">
                    Dual-Zone Inverter Heat Pump Install
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100/90 hover:border-slate-200 transition-colors">
                  <div className="w-5 h-5 rounded-md bg-[#47d847] flex items-center justify-center text-slate-950 shrink-0 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 leading-snug">
                    Spring 26-Point Safety &amp; Coil Tune-Up
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-dashed border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-5 h-5 rounded-md border-2 border-slate-300 flex items-center justify-center shrink-0"></div>
                  <span className="text-xs font-medium text-slate-500 leading-snug">
                    Emergency Capacitor Replacement #892
                  </span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-none border border-emerald-600/40 hover:border-emerald-600 bg-[#47d847]/10 hover:bg-[#47d847]/20 text-emerald-900 text-xs font-light tracking-wider transition-all duration-300 overflow-hidden cursor-pointer mt-1"
                  style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2]" />
                  <span className="relative z-10 font-light">Add Service Ticket</span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
