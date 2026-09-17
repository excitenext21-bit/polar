import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from './SleekArrow';

interface PortfolioHighlightsProps {
  onOpenBooking: () => void;
}

export const PortfolioHighlights: React.FC<PortfolioHighlightsProps> = ({ onOpenBooking }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: 'High-SEER2 Multi-Zone Heat Pump Installation',
      type: 'Residential Energy-Star Climate Architecture',
      location: 'Highland Park Estate',
      savings: '32% Drop in Monthly Utility Bills',
      specs: 'Carrier Infinity 20 SEER2 Variable-Speed Inverter System',
    },
    {
      title: 'Commercial Rooftop RTU Package Replacement',
      type: 'Industrial Clean Air & Zoned Climate Control',
      location: 'Metro Plaza Medical Center',
      savings: 'Zero Clinic Downtime During 1-Day Switch',
      specs: 'Trane Precedent 15-Ton Dual-Stage High-Efficiency RTU',
    },
    {
      title: 'Emergency Coil & Refrigerant Restoration',
      type: 'Rapid Breakdown Diagnostic & Aeroseal Sealing',
      location: 'Oakridge Residential Facility',
      savings: 'Restored 100% Cooling Capacity in Under 2 Hours',
      specs: 'OEM Microchannel Coil Replacement & Antimicrobial Flush',
    },
  ];

  const handleNext = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projects" className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls (Matching image.png) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
              Selected Climate Projects
            </h2>
          </div>

          {/* Prev / Next rectangular arrows with 1px border */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-none border border-slate-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-all cursor-pointer text-slate-700"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-none border border-slate-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-all cursor-pointer text-slate-700"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Dark Display Card (Matching image.png: Dark Card with vibrant curved neon light ribbons) */}
        <div className="relative rounded-3xl overflow-hidden bg-[#090b10] border border-slate-800 shadow-2xl">
          {/* Neon Curved Light Ribbon Visual (Rendered via high-fidelity SVG arcs) */}
          <div className="relative h-[340px] sm:h-[420px] md:h-[480px] w-full flex items-center justify-center overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute inset-0 bg-radial from-[#151c28] via-[#090b10] to-[#090b10]"></div>

            {/* Glowing dynamic rainbow/neon arcs matching the screenshot exactly */}
            <svg
              className="w-full h-full max-w-4xl opacity-90 transition-all duration-700 transform hover:scale-105"
              viewBox="0 0 800 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Vibrant Gradients */}
                <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#47d847" />
                  <stop offset="50%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="neonYellow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#eab308" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Concentric curved flowing ribbon bands (Airflow/Thermal Waves) */}
              <path
                d="M 60 380 C 180 80, 620 80, 740 380"
                stroke="url(#neonPurple)"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#glow)"
                opacity="0.85"
              />
              <path
                d="M 90 380 C 200 120, 600 120, 710 380"
                stroke="url(#neonCyan)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#glow)"
                opacity="0.9"
              />
              <path
                d="M 120 380 C 220 150, 580 150, 680 380"
                stroke="url(#neonGreen)"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#glow)"
                opacity="0.95"
              />
              <path
                d="M 150 380 C 240 180, 560 180, 650 380"
                stroke="url(#neonYellow)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glow)"
                opacity="0.9"
              />
              <path
                d="M 180 380 C 260 210, 540 210, 620 380"
                stroke="#47d847"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#glow)"
                opacity="0.8"
              />
            </svg>


          </div>

          {/* Bottom Project Overlay Bar (Matching image.png: Projects, Type, Green Arrow Button) */}
          <div className="p-6 sm:p-8 bg-[#041624]/95 backdrop-blur-md border-t border-sky-900/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 flex-1">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Projects
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {currentProject.title}
                  </h3>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Type
                  </span>
                  <p className="text-sm font-medium text-slate-300">
                    {currentProject.type}
                  </p>
                </div>
              </div>

              {/* Rectangular Neon-Green Arrow Button with 1px border matching hero section */}
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-none border border-[#47d847] hover:border-[#3ec43e] bg-[#47d847] hover:bg-[#3ec43e] text-slate-950 font-light text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md overflow-hidden cursor-pointer shrink-0"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                aria-label="View project details & schedule"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>View Details</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
