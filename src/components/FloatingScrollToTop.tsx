import React, { useState, useEffect } from 'react';
import { ArrowUp } from './SleekArrow';

export const FloatingScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }
      setIsVisible(scrollTop > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Circumference for r=22: 2 * Math.PI * 22 ~= 138.23
  const CIRCUMFERENCE = 138.23;
  const strokeDashoffset = CIRCUMFERENCE - (CIRCUMFERENCE * scrollProgress) / 100;

  return (
    <div
      className={`fixed right-5 sm:right-7 bottom-6 sm:bottom-7 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label={`Scroll to top of page (${Math.round(scrollProgress)}% scrolled)`}
        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-out active:scale-95 outline-none border-none focus:outline-none"
        style={{ fontFamily: "'General Sans', sans-serif" }}
      >
        {/* Progressive Circular SVG Ring */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none -rotate-90 origin-center"
          viewBox="0 0 52 52"
        >
          <defs>
            <linearGradient id="back-to-top-progress" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0088c6" />
              <stop offset="100%" stopColor="#47d847" />
            </linearGradient>
          </defs>

          {/* Background Track */}
          <circle
            cx="26"
            cy="26"
            r="22"
            fill="none"
            stroke="rgba(255, 255, 255, 0.14)"
            strokeWidth="2.5"
          />

          {/* Dynamic Scroll Progress Circle */}
          <circle
            cx="26"
            cy="26"
            r="22"
            fill="none"
            stroke="url(#back-to-top-progress)"
            strokeWidth="2.5"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Center Button */}
        <span className="relative z-10 w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-full bg-[#041624] hover:bg-[#0088c6] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,136,198,0.35)] group-hover:shadow-[0_0_24px_rgba(0,136,198,0.65)] border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105">
          {/* Subtle sheen */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

          {/* Upward Arrow Icon with micro-elevation on hover */}
          <ArrowUp className="w-4 h-4 relative z-10 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 text-slate-100 group-hover:text-white" />
        </span>

        {/* Refined Tooltip showing scroll percentage */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#041624]/95 border border-white/20 text-[10px] text-white tracking-wider font-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none shadow-xl -translate-y-1 group-hover:translate-y-0 rounded-md flex items-center gap-1.5"
          style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
        >
          <span>Back to Top</span>
          <span className="text-[#47d847] font-normal">{Math.round(scrollProgress)}%</span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#041624] border-r border-b border-white/20 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};
