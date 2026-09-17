import React from 'react';

interface LottieServiceIconProps {
  type: 'heating' | 'ventilation' | 'air-conditioning' | 'consultation' | 'sales' | 'installation';
  className?: string;
}

export const LottieServiceIcon: React.FC<LottieServiceIconProps> = ({
  type,
  className = 'w-7 h-7 sm:w-8 sm:h-8',
}) => {
  switch (type) {
    case 'heating':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Animated Heat Waves & Thermometer */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-[#0088c6]"
          >
            <style>{`
              @keyframes heatingPulse {
                0%, 100% { transform: translateY(0); opacity: 0.7; }
                50% { transform: translateY(-2px); opacity: 1; }
              }
              @keyframes mercuryRise {
                0%, 100% { height: 10px; }
                50% { height: 16px; }
              }
            `}</style>
            {/* Thermometer body */}
            <path d="M16 4.5a3 3 0 0 0-3 3v11.2a5 5 0 1 0 6 0V7.5a3 3 0 0 0-3-3z" />
            {/* Mercury Bulb */}
            <circle cx="16" cy="22" r="2.5" fill="currentColor" fillOpacity="0.8" />
            {/* Mercury Stem Animation */}
            <line x1="16" y1="18" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" className="origin-bottom" style={{ animation: 'heatingPulse 2.5s ease-in-out infinite' }} />
            {/* Heat radiation waves */}
            <path d="M23 8c1 1 1 3 0 4" stroke="#ff8c00" strokeWidth="1" style={{ animation: 'heatingPulse 2s ease-in-out infinite', animationDelay: '0.2s' }} />
            <path d="M25 6c2 2 2 6 0 8" stroke="#ff8c00" strokeWidth="1" strokeOpacity="0.6" style={{ animation: 'heatingPulse 2s ease-in-out infinite', animationDelay: '0.4s' }} />
            <path d="M9 8c-1 1-1 3 0 4" stroke="#ff8c00" strokeWidth="1" style={{ animation: 'heatingPulse 2s ease-in-out infinite', animationDelay: '0.2s' }} />
          </svg>
        </div>
      );

    case 'ventilation':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Animated Airflow Fan Turbine */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-[#0088c6]"
          >
            <style>{`
              @keyframes fanSpinMotion {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes windDashStream {
                0% { stroke-dashoffset: 20; opacity: 0.3; }
                50% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0.3; }
              }
            `}</style>
            {/* Outer circular bezel */}
            <circle cx="16" cy="16" r="13" strokeDasharray="3 3" strokeOpacity="0.4" />
            {/* Spinning Fan Blades */}
            <g className="origin-center" style={{ animation: 'fanSpinMotion 4s linear infinite' }}>
              <circle cx="16" cy="16" r="2.5" fill="currentColor" fillOpacity="0.9" />
              {/* Blade 1 */}
              <path d="M16 13.5c0-4 3-6.5 5.5-6.5 0 3-2 6.5-5.5 6.5z" fill="currentColor" fillOpacity="0.2" />
              {/* Blade 2 */}
              <path d="M18.5 16c4 0 6.5 3 6.5 5.5-3 0-6.5-2-6.5-5.5z" fill="currentColor" fillOpacity="0.2" />
              {/* Blade 3 */}
              <path d="M16 18.5c0 4-3 6.5-5.5 6.5 0-3 2-6.5 5.5-6.5z" fill="currentColor" fillOpacity="0.2" />
              {/* Blade 4 */}
              <path d="M13.5 16c-4 0-6.5-3-6.5-5.5 3 0 6.5 2 6.5 5.5z" fill="currentColor" fillOpacity="0.2" />
            </g>
          </svg>
        </div>
      );

    case 'air-conditioning':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Animated AC Unit with Flowing Cool Air */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-[#0088c6]"
          >
            <style>{`
              @keyframes coolAirWave {
                0% { transform: translateY(0); opacity: 0.2; }
                50% { opacity: 0.9; }
                100% { transform: translateY(3px); opacity: 0.2; }
              }
              @keyframes acGlowPulse {
                0%, 100% { opacity: 0.4; }
                50% { opacity: 1; }
              }
            `}</style>
            {/* AC Unit Body */}
            <rect x="4" y="6" width="24" height="11" rx="2" />
            <line x1="8" y1="11" x2="24" y2="11" strokeOpacity="0.6" />
            {/* Status LED */}
            <circle cx="23" cy="9" r="0.8" fill="#47d847" stroke="none" style={{ animation: 'acGlowPulse 1.8s infinite' }} />
            {/* Cool Airflow Curves (Animated downward flow) */}
            <g style={{ animation: 'coolAirWave 2.2s ease-in-out infinite' }}>
              <path d="M8 21c1 1.5 2 2.5 3 2.5" stroke="#38bdf8" />
              <path d="M13.5 21c1 1.5 2 2.5 3 2.5" stroke="#38bdf8" style={{ animationDelay: '0.2s' }} />
              <path d="M19 21c1 1.5 2 2.5 3 2.5" stroke="#38bdf8" style={{ animationDelay: '0.4s' }} />
            </g>
            <g style={{ animation: 'coolAirWave 2.2s ease-in-out infinite', animationDelay: '0.6s' }}>
              <path d="M10 26c1 1.2 1.8 1.8 2.5 1.8" stroke="#38bdf8" strokeOpacity="0.5" />
              <path d="M16 26c1 1.2 1.8 1.8 2.5 1.8" stroke="#38bdf8" strokeOpacity="0.5" />
            </g>
          </svg>
        </div>
      );

    case 'consultation':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Animated Technical Consultation & Blueprint */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-[#0088c6]"
          >
            <style>{`
              @keyframes consultDiscussionPulse {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.08); opacity: 1; }
              }
              @keyframes chatDotFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-1.5px); }
              }
            `}</style>
            {/* Advisor head & body */}
            <circle cx="8" cy="8" r="3" />
            <path d="M4 19c0-2.5 2-4 4-4s4 1.5 4 4" />
            {/* Client head & body */}
            <circle cx="24" cy="8" r="3" />
            <path d="M20 19c0-2.5 2-4 4-4s4 1.5 4 4" />
            {/* Center interactive blueprint / discussion table */}
            <rect x="7" y="19" width="18" height="8" rx="1" strokeDasharray="2 2" />
            {/* Technical waveform on table */}
            <path d="M10 23h2l1.5-2 2 4 1.5-2h4" stroke="#47d847" style={{ animation: 'consultDiscussionPulse 2.8s ease-in-out infinite' }} />
          </svg>
        </div>
      );

    case 'sales':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Animated Trusted Partnership Handshake & Growth */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-[#0088c6]"
          >
            <style>{`
              @keyframes handshakeShine {
                0%, 100% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.04); }
              }
            `}</style>
            {/* Handshake fingers & clasp */}
            <path d="M7 16l4-4a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 0 2.8 0L21 12" />
            <path d="M5 14l6 6a2 2 0 0 0 2.8 0l1.2-1.2" />
            <path d="M27 16l-4-4a2 2 0 0 0-2.8 0L18 14.2" />
            <path d="M27 18l-6 6a2 2 0 0 1-2.8 0L17 22.8" />
            {/* Sleeves / cuffs */}
            <path d="M3 12l3 5" />
            <path d="M29 12l-3 5" />
            {/* Sparkle of agreement */}
            <circle cx="16" cy="7" r="1" fill="#47d847" stroke="none" style={{ animation: 'handshakeShine 2s infinite' }} />
            <line x1="16" y1="4" x2="16" y2="5.5" stroke="#47d847" strokeWidth="1" />
            <line x1="13" y1="7" x2="14.5" y2="7" stroke="#47d847" strokeWidth="1" />
            <line x1="17.5" y1="7" x2="19" y2="7" stroke="#47d847" strokeWidth="1" />
          </svg>
        </div>
      );

    case 'installation':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          {/* Animated Master Wrench & AMC Rotating Gear */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-[#0088c6]"
          >
            <style>{`
              @keyframes gearTurn {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes wrenchTurn {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(18deg); }
              }
            `}</style>
            {/* Background rotating gear */}
            <g className="origin-center" style={{ animation: 'gearTurn 12s linear infinite' }}>
              <circle cx="16" cy="16" r="7" strokeDasharray="3 2" strokeOpacity="0.45" />
            </g>
            {/* Foreground interactive wrench */}
            <g className="origin-[16px_16px]" style={{ animation: 'wrenchTurn 3s ease-in-out infinite' }}>
              <path d="M19.7 7.3a4.5 4.5 0 0 0-5.7 5.7L6.5 20.5a1.5 1.5 0 0 0 2.1 2.1l7.5-7.5a4.5 4.5 0 0 0 5.7-5.7l-2.6 2.6-2.1-.7-.7-2.1 3.3-1.9z" fill="currentColor" fillOpacity="0.12" />
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
