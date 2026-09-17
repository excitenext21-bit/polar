import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';

interface PagePreloaderProps {
  onComplete?: () => void;
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Smooth simulated high-precision loading progress
    const startTime = Date.now();
    const duration = 800; // 800ms sleek loading phase

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.round((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress >= 100) {
        clearInterval(timer);
        // Begin curtain lift exit transition
        setTimeout(() => {
          setIsHiding(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 120);

        // Fully unmount from DOM after transition completes
        setTimeout(() => {
          setIsRemoved(true);
        }, 850);
      }
    }, 16);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (isRemoved) return null;

  // Circumference for r=90: 2 * Math.PI * 90 = 565.49
  const CIRCUMFERENCE = 565.49;
  const strokeDashoffset = CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#041624] flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHiding ? 'opacity-0 -translate-y-full scale-[1.02]' : 'opacity-100 translate-y-0 scale-100'
      }`}
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      <style>{`
        @keyframes preloaderShimmer {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        @keyframes preloaderOrbitalSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes preloaderOrbitalRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes preloaderPulseAura {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.18); opacity: 0.45; }
        }
      `}</style>

      {/* Atmospheric Ambient Glow Nebulas */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0088c6]/20 rounded-full blur-[130px] pointer-events-none"
        style={{ animation: 'preloaderPulseAura 4s ease-in-out infinite' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#47d847]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Creative Central Brand Showcase with Dynamic Cooling Vortex */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Orbital Rings & Logo Capsule */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* SVG Atmospheric & Progressive Vortex Rings */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 240 240"
          >
            <defs>
              <linearGradient id="preloader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0088c6" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#47d847" />
              </linearGradient>
            </defs>

            {/* Outer Slow-Rotating Dashed Halo Ring */}
            <circle
              cx="120"
              cy="120"
              r="110"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="origin-center"
              style={{ animation: 'preloaderOrbitalSpin 28s linear infinite' }}
            />

            {/* Counter-Rotating Airflow Particle Ring */}
            <circle
              cx="120"
              cy="120"
              r="100"
              fill="none"
              stroke="rgba(56, 189, 248, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="20 100"
              strokeLinecap="round"
              className="origin-center"
              style={{ animation: 'preloaderOrbitalRev 12s linear infinite' }}
            />

            {/* Background Circular Progress Track */}
            <circle
              cx="120"
              cy="120"
              r="90"
              fill="none"
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="2"
            />

            {/* Dynamic Progressive Fill Ring */}
            <circle
              cx="120"
              cy="120"
              r="90"
              fill="none"
              stroke="url(#preloader-gradient)"
              strokeWidth="2.5"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="-rotate-90 origin-center transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Central Logo with Luminous Reflection */}
          <div className="relative z-10 p-6 flex items-center justify-center">
            <div className="relative overflow-hidden p-3 transition-transform duration-500 hover:scale-105">
              <BrandLogo
                variant="light"
                className="h-11 sm:h-13 w-auto drop-shadow-[0_0_30px_rgba(0,136,198,0.55)]"
              />

              {/* Elegant Diagonal Shimmer Sweep across the brand logo */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/25 to-transparent"
                style={{ animation: 'preloaderShimmer 2.2s infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Minimal Laser Horizon Line (expands with progress, no text) */}
        <div className="w-32 sm:w-44 h-[1.5px] bg-white/[0.06] overflow-hidden rounded-full mt-2">
          <div
            className="h-full bg-gradient-to-r from-transparent via-[#0088c6] to-[#47d847] transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,136,198,0.8)] mx-auto"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
