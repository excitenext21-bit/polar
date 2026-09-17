import React from 'react';
import { BUSINESS_INFO } from '../data/hvacData';
import { SmoothReveal } from './SmoothReveal';

interface AboutSectionProps {
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about-us" className="py-10 sm:py-12 lg:py-14 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden">
      {/* Anchor for Our Management navigation */}
      <span id="our-management" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Overlapping Photos Collage with Floating Experience Badge as per Reference */}
          <div className="lg:col-span-6 relative pr-0 lg:pr-4">
            <div className="relative w-full max-w-[520px] mx-auto lg:max-w-none h-[320px] sm:h-[380px] lg:h-[420px]">
              {/* Top-Left Main Photo: Polar Air Customer Support & Technical Dispatch Specialist */}
              <div className="group absolute top-0 left-0 w-[74%] h-[72%] rounded-[8px] overflow-hidden shadow-lg border border-slate-200/90 bg-slate-100">
                <img
                  src="/assets/about-support.png"
                  alt="Polar Air Customer Support and Consultation Specialist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out rounded-[8px]"
                />
              </div>

              {/* Floating Experience Badge nestled overlapping the top photo */}
              <div className="absolute top-4 sm:top-8 left-[56%] sm:left-[54%] z-20 bg-gradient-to-br from-[#0088c6] to-[#006e9f] text-white px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl sm:rounded-[22px] shadow-xl shadow-[#0088c6]/30 border border-sky-300/30 flex flex-col justify-center items-center text-center backdrop-blur-xs min-w-[125px] sm:min-w-[145px]">
                <span className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-none text-white block mb-1">
                  {BUSINESS_INFO.experienceYears}+
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-100 leading-tight block">
                  Years of <br /> Experience
                </span>
              </div>

              {/* Bottom-Right Overlapping Photo: Polar Air Commercial & Residential HVAC Heat Pump Installation */}
              <div className="group absolute bottom-0 right-0 w-[58%] h-[60%] rounded-[8px] overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 z-10">
                <img
                  src="/assets/about-heat-pumps.png"
                  alt="Polar Air Commercial & Residential HVAC Heat Pump Installation"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out rounded-[8px]"
                />
              </div>

              {/* Subtle ambient brand glow in background */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#0088c6]/10 blur-3xl rounded-full pointer-events-none -z-10"></div>
            </div>
          </div>

          {/* Right Column: Narrative Content with 2x2 Feature Checkpoints and CTA as per Reference */}
          <div className="lg:col-span-6 relative pl-0 lg:pl-4">
            {/* Main Headline with Brand Blue Accent in General Sans 36px (Matching Screenshot) */}
            <h2
              className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-900 tracking-tight leading-[1.2] mb-5"
              style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}
            >
              Your Trusted Partner in{' '}
              <span
                className="not-italic font-medium text-[#0088c6] block sm:inline"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 500 }}
              >
                HVAC Excellence
              </span>
            </h2>

            {/* Body Paragraphs from Previous Website */}
            <div
              className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed space-y-3.5"
              style={{ fontFamily: "'General Sans', sans-serif" }}
            >
              <p>
                Polar Air - Pioneer in installing complex HVAC (Heating, Ventilation &amp; Air Conditioning) systems across some of the most demanding environments nationwide.
              </p>
              <p>
                Polar Air Projects Private Limited provides tailored HVAC solutions across India, serving sectors from IT complexes, hospitals, and clean rooms to industrial plants and luxury homes. Driven by process and technological innovation, we deliver end-to-end consulting—including heat load calculations, system selection, and power/cost analysis. We approach every project uniquely to ensure maximum energy efficiency, reliability, safety, and cost optimization.
              </p>
            </div>
          </div>
        </div>
        </SmoothReveal>
      </div>
    </section>
  );
};
