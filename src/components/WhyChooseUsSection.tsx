import React, { useState } from 'react';
import {
  Wrench,
  Snowflake,
  Building2,
  Wind,
} from 'lucide-react';
import { SmoothReveal } from './SmoothReveal';

interface WhyChooseUsSectionProps {
  onOpenBooking?: (serviceTitle?: string) => void;
}

interface HVACFeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenBooking }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // 4 Core Commitments with by-default WHITE sleek icons
  const features: HVACFeatureItem[] = [
    {
      id: 'emergency-repair',
      title: '24/7 Emergency AC Repair',
      description:
        'Immediate 24/7 emergency dispatch across Pune metro with guaranteed rapid arrival. Fully equipped mobile diagnostic vans restore your cooling on the first visit with genuine OEM parts.',
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.1]" />,
    },
    {
      id: 'ac-installation',
      title: 'High-Efficiency AC Installation',
      description:
        'Engineered Manual-J load calculations ensure precision equipment sizing. High-SEER2 inverter systems from Daikin, Trane, and Carrier deliver up to 40% monthly energy savings.',
      icon: <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.1]" />,
    },
    {
      id: 'commercial-vrf',
      title: 'Commercial VRV / VRF Systems',
      description:
        'Scalable multi-zone VRV/VRF solutions designed for corporate offices, hospitals, and industrial facilities with individual zone temperature control and centralized BMS automation.',
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.1]" />,
    },
    {
      id: 'iaq-ducts',
      title: 'Whole-Building IAQ & HEPA Tech',
      description:
        'Hospital-grade HEPA air purification, whole-home dehumidification, and ultrasonic duct sanitation eradicate 99.9% of mold spores, VOCs, and airborne pathogens for pristine indoor air.',
      icon: <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.1]" />,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-14 sm:py-16 lg:py-20 bg-[#061d31] text-white relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SmoothReveal>
        {/* ========================================================= */}
        {/* TOP HEADER ROW: Left Side Text & Extreme Right-Adjacent CTA Button */}
        {/* ========================================================= */}
        <div className="mb-8 lg:mb-11">
          <div className="max-w-3xl">
            {/* Headline (WHY CHOOSE US eyebrow removed) */}
            <h2
              className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-white tracking-tight leading-[1.2] mb-2.5"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300, color: '#ffffff' }}
            >
              Why Choose{' '}
              <span className="font-medium">
                <span className="text-white" style={{ color: '#ffffff' }}>Polar</span>
                <span className="text-[#0088c6]" style={{ color: '#0088c6' }}>Air</span>
              </span>
            </h2>

            {/* Left Side Subtitle Text */}
            <p
              className="text-slate-300 text-[15px] sm:text-[16px] leading-relaxed font-light"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              Engineered excellence, transparent pricing, and rapid response—tailored to keep homes and businesses at peak comfort year-round.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN SECTION GRID: Left Pillars & Right Photo Mosaic */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: 4 Vertical Pillars */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-5">
              {features.map((item) => {
                const isHovered = hoveredId === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => onOpenBooking && onOpenBooking(item.title)}
                    className="group relative flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/10 cursor-pointer"
                  >
                    {/* Sleek Circular Icon Badge (About 1px stroke, By-Default WHITE Icon) */}
                    <div className="relative shrink-0 mt-0.5">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? 'bg-[#0088c6] text-white shadow-[0_0_22px_rgba(0,136,198,0.55)] border-transparent scale-105'
                            : 'bg-white/[0.08] text-white border border-white/15 backdrop-blur-sm'
                        }`}
                      >
                        {/* 1px sleek icon with rotation animation */}
                        <div
                          className={`transition-transform duration-300 ease-out text-white ${
                            isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                          }`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Expanding pulse animation ring on hover */}
                      <span
                        className={`absolute inset-0 rounded-full border border-sky-400/40 pointer-events-none transition-all duration-700 ease-out ${
                          isHovered ? 'scale-135 opacity-0' : 'scale-100 opacity-0'
                        }`}
                      />
                    </div>

                    {/* Text Narrative */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-['General_Sans',sans-serif] text-[17px] sm:text-[18px] font-normal tracking-tight transition-colors duration-200 mb-1 ${
                          isHovered ? 'text-[#3c98bd]' : 'text-white'
                        }`}
                        style={{ fontFamily: "'General Sans', sans-serif" }}
                      >
                        {item.title}
                      </h3>

                      {/* Summarized 2-3 lines description */}
                      <p
                        className="text-slate-300 text-[14px] sm:text-[15px] leading-relaxed font-light line-clamp-3"
                        style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetrical Neat & Clean Photo Mosaic */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 items-center">
              
              {/* SUB-COLUMN 1 (Left side of collage) */}
              <div className="space-y-3 sm:space-y-5">
                
                {/* 1. TOP-LEFT IMAGE: Arched top-left corner */}
                <div className="group relative rounded-tl-[45px] sm:rounded-tl-[70px] lg:rounded-tl-[90px] rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl rounded-br-xl sm:rounded-br-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl aspect-[4/3] w-full">
                  <img
                    src="/assets/why-choose-us-ac.jpg"
                    alt="Pristine modern home cooling comfort with remote climate control"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* 2. BOTTOM-LEFT IMAGE: Arched bottom-left corner */}
                <div className="group relative rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[80px] rounded-tl-xl sm:rounded-tl-2xl rounded-tr-xl sm:rounded-tr-2xl rounded-br-xl sm:rounded-br-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-xl aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                    alt="Spotless living space with pure filtered air"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* SUB-COLUMN 2 (Right side of collage) */}
              <div>
                {/* 3. RIGHT IMAGE: Tall portrait card with rounded arched top */}
                <div className="group relative rounded-t-[50px] sm:rounded-t-[70px] lg:rounded-t-[90px] rounded-b-xl sm:rounded-b-2xl overflow-hidden bg-slate-900 border border-white/15 shadow-2xl h-[260px] sm:h-[360px] lg:h-[460px] w-full">
                  <img
                    src="/assets/why-choose-us-office.png"
                    alt="Modern high-efficiency commercial office workspace with precision climate control"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
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
