import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from './SleekArrow';

interface CoolAirCTAProps {
  onOpenBooking?: () => void;
}

const HEADLINE_WORDS = [
  'Book',
  'your',
  'appointment',
  'today',
  'and',
  'breathe',
  'easier',
  'tomorrow...',
];

export const CoolAirCTA: React.FC<CoolAirCTAProps> = ({ onOpenBooking }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if element is already within viewport on initial load
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInView(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleConnectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="family-cta"
      className="w-full relative overflow-hidden bg-[#031320] text-white select-none"
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      {/* ========================================================================= */}
      {/* BACKGROUND IMAGE: Customer Support Team (Watermark removed)                */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/cta-consultant.jpg"
          alt="PolarAir Customer Service & HVAC Support Team"
          className="w-full h-full object-cover object-[78%_25%] sm:object-[75%_25%] lg:object-[78%_28%]"
        />

        {/* High-Contrast Gradient Mask: Deep Solid Navy on Left Feathering to Clear on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031320] via-[#031320]/95 via-45% sm:via-42% to-[#031320]/40 sm:to-[#031320]/20 lg:to-transparent" />
        
        {/* Subtle Ambient Brand Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0088c6]/15 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* LOW-OPACITY BACKGROUND PATTERNS: Technical Grid & Aerodynamic Wave Curves */}
      {/* ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-[1]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0),
            linear-gradient(to right, #0088c6 1px, transparent 1px),
            linear-gradient(to bottom, #0088c6 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      {/* Subtle Aerodynamic Climate Wave Curves with Low Opacity (6%) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2] opacity-[0.06]">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <path
            d="M -100 280 C 300 120, 600 380, 1000 200 C 1200 100, 1400 220, 1600 160"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="6 8"
          />
          <path
            d="M -50 330 C 350 170, 650 420, 1050 250 C 1250 150, 1450 270, 1650 210"
            stroke="#0088c6"
            strokeWidth="1"
          />
          <path
            d="M -100 150 C 250 280, 700 80, 1100 260 C 1300 350, 1500 180, 1600 240"
            stroke="#47d847"
            strokeWidth="0.8"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* FOREGROUND CONTENT: Left Column Text & Connect Us Button                  */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="max-w-2xl">
          
          {/* Main Headline with Elegant Word-by-Word Staggered Reveal */}
          <h2
            className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-white tracking-tight leading-[1.2] mb-3 text-balance"
            style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300, color: '#ffffff' }}
          >
            {HEADLINE_WORDS.map((word, index) => (
              <span
                key={index}
                className="inline-block transition-all ease-out"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(12px)',
                  transitionDuration: '750ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 55}ms`,
                  marginRight: index === HEADLINE_WORDS.length - 1 ? '0' : '0.28em',
                }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Subtitle Description with Staggered Fade & Slide In (0.75s ease-out) */}
          <p
            className="text-slate-300 text-sm sm:text-base lg:text-[16px] font-light leading-relaxed max-w-lg mb-6 sm:mb-7 transition-all ease-out"
            style={{
              fontWeight: 300,
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              transitionDuration: '750ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '460ms',
            }}
          >
            Call an air supply expert today for a quote on your new home comfort system.
          </p>

          {/* Bottom Controls Row: Connect Us Button with Staggered Entrance */}
          <div
            className="flex flex-wrap items-center transition-all ease-out"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              transitionDuration: '750ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '620ms',
            }}
          >
            <a
              href="#contact"
              onClick={handleConnectClick}
              className="group relative inline-flex items-center gap-3 px-7 py-3 rounded-none border border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white font-light text-sm sm:text-base tracking-wider transition-all duration-300 backdrop-blur-xs shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              {/* Glossy light sweep on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>
                Connect us
              </span>
              <ArrowRight className="w-5 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5 stroke-[1]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
