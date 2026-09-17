import React, { useState } from 'react';
import {
  Search,
  Handshake,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Activity,
  Shield,
} from 'lucide-react';
import { SmoothReveal } from './SmoothReveal';

interface PhilosophyPillar {
  id: string;
  title: string;
  description: string;
  color: string;
  glowColor: string;
  icon: React.ReactNode;
}

export const ToolsSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string | null>(null);

  // Left 5 Pillars: Persistent, Omnicompetent, Leadership, Ambitious, Reliable
  const leftPillars: PhilosophyPillar[] = [
    {
      id: 'persistent',
      title: 'Persistent',
      description: 'Dedicated to solving complex installation challenges without compromise.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <Search className="w-5 h-5 stroke-[1.2]" />,
    },
    {
      id: 'omnicompetent',
      title: 'Omnicompetent',
      description: 'Possessing multi-disciplinary expertise across all HVAC applications.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <Handshake className="w-5 h-5 stroke-[1.2]" />,
    },
    {
      id: 'leadership',
      title: 'Leadership',
      description: 'Setting industry standards through technical mastery & innovation.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <Lightbulb className="w-5 h-5 stroke-[1.2]" />,
    },
    {
      id: 'ambitious',
      title: 'Ambitious',
      description: 'Continuously striving for excellence & wider national reach.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <TrendingUp className="w-5 h-5 stroke-[1.2]" />,
    },
    {
      id: 'reliable',
      title: 'Reliable',
      description: 'Delivering consistent quality, on-time project handover & safety.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <ShieldCheck className="w-5 h-5 stroke-[1.2]" />,
    },
  ];

  // Right 3 Pillars: Adept, Industrious, Resilience
  const rightPillars: PhilosophyPillar[] = [
    {
      id: 'adept',
      title: 'Adept',
      description: 'Highly skilled workforce adept at modern technologies & workflows.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <Cpu className="w-5 h-5 stroke-[1.2]" />,
    },
    {
      id: 'industrious',
      title: 'Industrious',
      description: 'Hardworking, detail-oriented approach to every engineering task.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <Activity className="w-5 h-5 stroke-[1.2]" />,
    },
    {
      id: 'resilience',
      title: 'Resilience',
      description: 'Built to withstand demanding project conditions & tight schedules.',
      color: '#0088c6',
      glowColor: 'rgba(0, 136, 198, 0.4)',
      icon: <Shield className="w-5 h-5 stroke-[1.2]" />,
    },
  ];

  return (
    <section
      id="tools"
      className="py-14 lg:py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SmoothReveal>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <h2
            className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-900 tracking-tight leading-[1.2]"
            style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
          >
            Crafting Excellence With{' '}
            <span
              className="block not-italic font-medium text-[#0088c6]"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 500 }}
            >
              The PolarAir Standard
            </span>
          </h2>
          <p
            className="mt-2.5 text-slate-600 text-[15px] sm:text-[16px] font-light leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
          >
            Eight foundational engineering pillars that govern our design consultations, installation precision, and long-term facility support.
          </p>
        </div>

        {/* =========================================================================
            Symmetrical 3-Column Infographic Layout (Image 1 Architecture)
            ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-center max-w-7xl mx-auto">
          
          {/* -----------------------------------------------------------------------
              LEFT COLUMN: 5 Pillars (Persistent, Omnicompetent, Leadership, Ambitious, Reliable)
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6 justify-between order-2 lg:order-1">
            {leftPillars.map((pillar) => {
              const isHovered = activePillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActivePillarId(pillar.id)}
                  onMouseLeave={() => setActivePillarId(null)}
                  className="group flex items-center justify-start lg:justify-end gap-3.5 sm:gap-4 transition-all duration-300 cursor-pointer"
                >
                  {/* Mobile icon position (on left for mobile screens) */}
                  <div className="lg:hidden relative shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'text-white scale-110 shadow-lg' : 'text-slate-700 shadow-xs'
                      }`}
                      style={{
                        backgroundColor: isHovered ? pillar.color : '#cdd5da',
                        boxShadow: isHovered
                          ? `0 8px 24px ${pillar.glowColor}`
                          : '0 2px 8px rgba(10, 20, 40, 0.08)',
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Text Information Block: Aligned Right on Desktop */}
                  <div className="flex-1 min-w-0 text-left lg:text-right">
                    <h3
                      className={`text-[16px] sm:text-[17.5px] font-medium tracking-tight transition-colors duration-200 ${
                        isHovered ? 'text-[#0088c6]' : 'text-slate-900'
                      }`}
                      style={{ fontFamily: "'General Sans', sans-serif" }}
                    >
                      <span className="font-semibold" style={{ fontWeight: 600 }}>
                        {pillar.title.charAt(0)}
                      </span>
                      {pillar.title.slice(1)}
                    </h3>
                    <p
                      className="text-slate-600 text-[12.5px] sm:text-[13px] font-light leading-snug sm:leading-relaxed"
                      style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                    >
                      {pillar.description}
                    </p>
                  </div>

                  {/* Desktop Circular Icon Badge on the Right of Text (Sleek 1px icon, letters removed) */}
                  <div className="hidden lg:flex relative shrink-0">
                    <div
                      className={`w-10.5 h-10.5 xl:w-11.5 xl:h-11.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'text-white scale-110 shadow-lg' : 'text-slate-700 shadow-xs'
                      }`}
                      style={{
                        backgroundColor: isHovered ? pillar.color : '#cdd5da',
                        boxShadow: isHovered
                          ? `0 8px 24px ${pillar.glowColor}`
                          : '0 2px 8px rgba(10, 20, 40, 0.08)',
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Desktop Connecting Spoke & Dot Node towards Central Hub */}
                  <div className="hidden lg:flex items-center -mr-3 pointer-events-none">
                    <span
                      className={`w-4 xl:w-6 h-[1.5px] transition-colors duration-300 ${
                        isHovered ? 'bg-[#0088c6]' : 'bg-slate-300'
                      }`}
                    />
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#0088c6] scale-125 shadow-[0_0_8px_#0088c6]'
                          : 'bg-slate-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* -----------------------------------------------------------------------
              CENTER COLUMN: Central Circular Hub with Smooth Floating Animation & Glowing Arcs
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 my-6 lg:my-0 select-none">
            
            {/* Ambient Circular Glow */}
            <div className="absolute w-56 h-56 xs:w-72 xs:h-72 sm:w-80 sm:h-80 rounded-full bg-sky-500/15 blur-2xl pointer-events-none animate-pulse" />

            {/* Smooth 3D Pedestal Contact Shadow that breathes with the levitation */}
            <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-[70%] h-8 sm:h-9 bg-black/20 rounded-full blur-md pointer-events-none z-0 animate-pedestal-shadow" />

            {/* Central Circular Disc Hub (Image 2) with Background #0A1428 & Smooth Floating Levitation Animation */}
            <div
              className="relative z-10 w-56 h-56 xs:w-64 xs:h-64 sm:w-76 sm:h-76 xl:w-80 xl:h-80 rounded-full shadow-[0_20px_50px_rgba(10,20,40,0.45),0_0_35px_rgba(0,136,198,0.2)] border border-slate-700/60 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-500 hover:scale-[1.03] animate-medallion-float group"
              style={{ backgroundColor: '#0A1428' }}
            >
              
              {/* Subtle High-Tech Rotating Radar Sheen / Light Beam across the dark metallic face */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-25">
                <div
                  className="w-full h-full rounded-full animate-radar-sheen"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(56, 189, 248, 0.22) 330deg, rgba(255, 255, 255, 0.4) 360deg)',
                  }}
                />
              </div>

              {/* Inner Concentric Glowing Cyan Ring */}
              <div className="absolute inset-2 sm:inset-3 rounded-full border border-sky-400/20 shadow-[inset_0_0_18px_rgba(0,136,198,0.25)] pointer-events-none animate-cyan-ring-pulse" />

              {/* LAYER 1: Rotating Outer Curved Arcs (Outside Line Animation) */}
              <div className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] pointer-events-none animate-orbit-spin">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 320 320"
                >
                  <defs>
                    {/* Left Brand Blue Arc Gradient */}
                    <linearGradient id="hubBlueArc" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="50%" stopColor="#0088c6" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>

                    {/* Right Brand Green/Cyan Arc Gradient */}
                    <linearGradient id="hubGreenArc" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#00C4CC" />
                      <stop offset="100%" stopColor="#3bb83b" />
                    </linearGradient>
                  </defs>

                  {/* Left Side Curved Perimeter Arc (Brand Blue) with Smooth Pulsing Arc Glow */}
                  <path
                    d="M 52 52 A 148 148 0 0 0 52 268"
                    fill="none"
                    stroke="url(#hubBlueArc)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-outer-arc-pulse"
                  />

                  {/* Right Side Curved Perimeter Arc (Brand Green/Cyan) with Smooth Pulsing Arc Glow */}
                  <path
                    d="M 268 52 A 148 148 0 0 1 268 268"
                    fill="none"
                    stroke="url(#hubGreenArc)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-outer-arc-pulse"
                  />

                  {/* Radiant Orbital Energy Nodes on Arc Ends */}
                  <circle cx="52" cy="52" r="4.5" fill="#38bdf8" className="filter drop-shadow-[0_0_6px_#38bdf8]" />
                  <circle cx="52" cy="268" r="4.5" fill="#0284c7" className="filter drop-shadow-[0_0_6px_#0284c7]" />
                  <circle cx="268" cy="52" r="4.5" fill="#38bdf8" className="filter drop-shadow-[0_0_6px_#38bdf8]" />
                  <circle cx="268" cy="268" r="4.5" fill="#3bb83b" className="filter drop-shadow-[0_0_6px_#3bb83b]" />
                </svg>
              </div>

              {/* Central Polar Air Official Brand Logo - TRANSPARENT BACKGROUND (Square background removed) */}
              <div className="relative z-10 flex items-center justify-center text-center px-4 py-2 w-full max-w-[205px] sm:max-w-[225px] xl:max-w-[240px]">
                <img
                  src="/assets/polar-air-logo-nav.png"
                  alt="POLAR AIR - Design for Comfort"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(0,136,198,0.25)]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              RIGHT COLUMN: 3 Pillars (Adept, Industrious, Resilience)
              Elegantly Spaced & Symmetrically Balanced
              ----------------------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-col justify-around h-full py-2 lg:py-6 gap-8 lg:gap-11 order-3">
            {rightPillars.map((pillar) => {
              const isHovered = activePillarId === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActivePillarId(pillar.id)}
                  onMouseLeave={() => setActivePillarId(null)}
                  className="group flex items-center justify-start gap-3.5 sm:gap-4 transition-all duration-300 cursor-pointer"
                >
                  {/* Desktop Connecting Spoke & Dot Node from Central Hub */}
                  <div className="hidden lg:flex items-center -ml-3 pointer-events-none">
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#0088c6] scale-125 shadow-[0_0_8px_#0088c6]'
                          : 'bg-slate-400'
                      }`}
                    />
                    <span
                      className={`w-4 xl:w-6 h-[1.5px] transition-colors duration-300 ${
                        isHovered ? 'bg-[#0088c6]' : 'bg-slate-300'
                      }`}
                    />
                  </div>

                  {/* Circular Icon Badge on the Left of Text (Sleek 1px icon, letters removed) */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-10.5 h-10.5 xl:w-11.5 xl:h-11.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'text-white scale-110 shadow-lg' : 'text-slate-700 shadow-xs'
                      }`}
                      style={{
                        backgroundColor: isHovered ? pillar.color : '#cdd5da',
                        boxShadow: isHovered
                          ? `0 8px 24px ${pillar.glowColor}`
                          : '0 2px 8px rgba(10, 20, 40, 0.08)',
                      }}
                    >
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Text Information Block: Aligned Left with balanced leading & typography */}
                  <div className="flex-1 min-w-0 text-left">
                    <h3
                      className={`text-[16px] sm:text-[17.5px] font-medium tracking-tight transition-colors duration-200 ${
                        isHovered ? 'text-[#0088c6]' : 'text-slate-900'
                      }`}
                      style={{ fontFamily: "'General Sans', sans-serif" }}
                    >
                      <span className="font-semibold" style={{ fontWeight: 600 }}>
                        {pillar.title.charAt(0)}
                      </span>
                      {pillar.title.slice(1)}
                    </h3>
                    <p
                      className="text-slate-600 text-[12.5px] sm:text-[13px] font-light leading-snug sm:leading-relaxed max-w-sm"
                      style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        </SmoothReveal>
      </div>
    </section>
  );
};
