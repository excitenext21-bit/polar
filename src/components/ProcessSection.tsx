import React, { useState } from 'react';
import { ArrowRight } from './SleekArrow';
import { SmoothReveal } from './SmoothReveal';

interface ProcessSectionProps {
  onOpenBooking?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // 2 Leadership Tabs: Pravin Rajguru (Director) & Anagha Rajguru (CEO)
  const steps = [
    {
      id: 'pravin-rajguru',
      stepNum: '01',
      name: 'Pravin Rajguru',
      role: 'Director',
      title: 'Pravin Rajguru',
      subtitle: 'Director',
      tagline: 'Engineering Excellence & Strategic Project Execution',
      headline: 'Engineering Excellence & Strategic Project Execution',
      description:
        'Successfully ran Ambience Engineers for 10 years before establishing Polar Air Projects Pvt. Ltd. to provide high performance, tailored HVAC solutions nationwide. 26+ years of industry experience in HVAC & technical expert and dynamic leader with over two decades of hands-on experience in project management & market development across diverse geographical regions.',
      ctaText: 'Know More',
      badge: 'Director',
      image: '/assets/pravin-rajguru.png',
    },
    {
      id: 'anagha-rajguru',
      stepNum: '02',
      name: 'Anagha Rajguru',
      role: 'CEO',
      title: 'Anagha Rajguru',
      subtitle: 'CEO',
      tagline: 'Executive Leadership & Operational Growth',
      headline: 'Executive Leadership & Customer-First Innovation',
      description:
        'Held key leadership roles at Hitachi, Daikin (Business Head – VRV) & Samsung India (South Regional Head – Commercial AC). Polar Air Projects Private Limited provides tailored HVAC solutions across India, serving sectors from IT complexes, hospitals, and clean rooms to industrial plants and luxury homes. Driven by process and technological innovation, we deliver end-to-end consulting—including heat load calculations, system selection, and power/cost analysis. We approach every project uniquely to ensure maximum energy efficiency, reliability, safety, and cost optimization.',
      ctaText: 'Know More',
      badge: 'Chief Executive Officer',
      image: '/assets/anagha-rajguru.jpg',
    },
  ];

  const current = steps[activeStepIndex];

  const handleCtaClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="pt-10 lg:pt-14 pb-12 lg:pb-16 bg-[#eef2f6] text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      {/* Anchors for navigation compatibility */}
      <span id="process" className="sr-only" aria-hidden="true" />
      <span id="leadership" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#041624]/5 rounded-full blur-[160px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SmoothReveal>
        {/* Section Header */}
        <div className="text-left max-w-6xl mx-auto mb-6 sm:mb-8">
          <h2
            className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight leading-[1.18] text-left"
            style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}
          >
            Leadership
          </h2>
        </div>

        {/* 2-TAB SYSTEM WITH SEAMLESS INVERTED CURVED FOLDER TAB (MATCHING REFERENCE IMAGE) */}
        <div className="max-w-6xl mx-auto">
          {/* Top Tab Bar Navigation with Inverted Concave Fillets */}
          <div className="flex justify-center items-end relative z-30 px-2 sm:px-6 -mb-px overflow-visible">
            <div className="inline-flex items-end gap-3 sm:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar max-w-full">
              {steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`relative px-6 sm:px-10 lg:px-14 py-2.5 sm:py-3 lg:py-3.5 tracking-tight transition-all select-none cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-b from-[#e8ecf2] via-[#f7f9fb] to-[#ffffff] text-slate-950 rounded-t-2xl sm:rounded-t-[22px] font-light border-t border-x border-[#cbcbcb] shadow-[0_-3px_12px_rgba(0,0,0,0.03)] after:content-[""] after:absolute after:-bottom-[1px] after:left-0 after:right-0 after:h-[3px] after:bg-white after:z-10'
                        : 'text-slate-600 hover:text-slate-950 bg-transparent font-light hover:bg-gradient-to-b hover:from-white/70 hover:to-slate-100/50 rounded-t-xl hover:z-20'
                    }`}
                  >
                    {/* Left Inverted Concave Curve (Seamlessly joins tab to card) */}
                    {isActive && (
                      <>
                        {/* Mask bottom-left inner straight border */}
                        <span className="absolute left-0 bottom-0 w-[2px] h-4 sm:h-5 lg:h-6 bg-white z-[15] pointer-events-none" />
                        <svg
                          className="absolute -left-4 sm:-left-5 lg:-left-6 bottom-0 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 pointer-events-none z-20 overflow-visible"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 20h20V0C20 11.046 11.046 20 0 20z"
                            fill="#ffffff"
                          />
                          <path
                            d="M-0.5 20 L0 20 C11.046 20 20 11.046 20 0"
                            stroke="#cbcbcb"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                      </>
                    )}

                    {/* Tab Text: Name & Designation */}
                    <div className="relative z-20 flex flex-col items-center justify-center text-center">
                      <span
                        className="font-['General_Sans',sans-serif] text-[16px] sm:text-[20px] lg:text-[24px] font-light tracking-tight leading-tight"
                        style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                      >
                        {step.name}
                      </span>
                      <span
                        className={`text-[12px] sm:text-[14px] lg:text-[15px] font-normal tracking-wide mt-1 transition-colors ${
                          isActive ? 'text-[#0088c6]' : 'text-slate-500'
                        }`}
                        style={{ fontFamily: "'General Sans', sans-serif" }}
                      >
                        {step.role}
                      </span>
                    </div>

                    {/* Right Inverted Concave Curve (Seamlessly joins tab to card) */}
                    {isActive && (
                      <>
                        {/* Mask bottom-right inner straight border */}
                        <span className="absolute right-0 bottom-0 w-[2px] h-4 sm:h-5 lg:h-6 bg-white z-[15] pointer-events-none" />
                        <svg
                          className="absolute -right-4 sm:-right-5 lg:-right-6 bottom-0 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 pointer-events-none z-20 overflow-visible"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 20H0V0C0 11.046 8.954 20 20 20z"
                            fill="#ffffff"
                          />
                          <path
                            d="M0 0 C0 11.046 8.954 20 20 20 L20.5 20"
                            stroke="#cbcbcb"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN CARD CONTAINER (GRAY & WHITE GRADIENT LIGHT CARD WITH HIGH-CONTRAST MOCKUP & CLEAN COPY) */}
          <div
            className="relative rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] p-5 sm:p-7 lg:p-9 text-slate-900 overflow-hidden shadow-[0_25px_60px_-15px_rgba(4,22,36,0.08)] border border-[#cbcbcb]"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #e8edf3 100%)',
            }}
          >
            {/* Subtle brand ambient glow inside card */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3bb83b]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-[#041624]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* LEFT COLUMN: Clean Editorial Copy & Sleek Brand Button */}
              <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left">
                {/* Large Title with Name and Designation */}
                <div className="mb-4">
                  <h3
                    className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[32px] font-light text-slate-950 tracking-tight leading-[1.15]"
                    style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                  >
                    {current.name}
                  </h3>
                  <span className="inline-block mt-1 text-sm sm:text-[15px] font-medium text-[#0088c6] tracking-wide">
                    {current.role}
                  </span>
                </div>

                {/* Clean Narrative Description Paragraph in General Sans */}
                <p
                  className="text-[16px] sm:text-[17px] text-slate-600 font-light leading-relaxed mb-8 max-w-lg"
                  style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                >
                  {current.description}
                </p>

                {/* Know More Action Link (Matching Services Section) */}
                <div className="pt-2 flex items-center">
                  <button
                    onClick={handleCtaClick}
                    className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-light text-slate-700 hover:text-[#0088c6] transition-colors cursor-pointer outline-none select-none"
                    style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                  >
                    <span style={{ fontWeight: 300 }}>Know More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-slate-700 group-hover:text-[#0088c6] stroke-[1]" />
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Clean Leadership Showcase */}
              <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center relative pt-4 lg:pt-0">
                {/* Ambient Multi-Layer Glow behind Image */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#3bb83b]/15 via-sky-500/10 to-[#041624]/15 rounded-[36px] blur-2xl opacity-60 pointer-events-none" />

                {/* Clean Image Container without Border Frame */}
                <div className="relative w-full max-w-[490px] aspect-[4/3.4] sm:aspect-[4/3.2] rounded-[20px] sm:rounded-[24px] overflow-hidden group bg-slate-100 shadow-[0_20px_50px_-15px_rgba(4,22,36,0.14)]">
                  {/* The Leadership Showcase Image */}
                  <img
                    src={current.image || '/assets/pravin-rajguru.png'}
                    alt={`${current.name} - ${current.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Interactive Glossy Shine Sweep on Hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.15] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </SmoothReveal>
      </div>
    </section>
  );
};
