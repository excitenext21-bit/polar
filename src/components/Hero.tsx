import React, { useState, useEffect } from 'react';
import { ArrowRight } from './SleekArrow';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenEstimator: () => void;
  onQuickBookSubmit?: (name: string, phone: string, service: string) => void;
}

const HERO_LINE_1_WORDS = [
  { text: 'Heating', delay: '0.10s', color: 'text-white' },
  { text: '|', delay: '0.18s', color: 'text-[#0088c6]' },
  { text: 'Ventilation', delay: '0.26s', color: 'text-white' },
  { text: '|', delay: '0.34s', color: 'text-[#0088c6]' },
  { text: 'Air', delay: '0.42s', color: 'text-white' },
  { text: 'Conditioning', delay: '0.50s', color: 'text-white' },
];

const HERO_LINE_2_WORDS = [
  { text: 'Consultation', delay: '0.58s', color: 'text-white' },
  { text: '|', delay: '0.66s', color: 'text-[#0088c6]' },
  { text: 'Sales', delay: '0.74s', color: 'text-white' },
  { text: '|', delay: '0.82s', color: 'text-[#0088c6]' },
  { text: 'Installation', delay: '0.90s', color: 'text-white' },
  { text: '|', delay: '0.98s', color: 'text-[#0088c6]' },
  { text: 'Services', delay: '1.06s', color: 'text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenEstimator }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on page load / component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="home" className="relative pt-28 sm:pt-32 lg:pt-32 pb-0 overflow-hidden bg-[#041624] text-white flex flex-col justify-between min-h-screen lg:h-screen min-h-[100dvh] lg:h-[100dvh]">
      {/* Background Video with Gradient Opacity Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,0.95)_80%,rgba(0,0,0,0.9)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,0.95)_80%,rgba(0,0,0,0.9)_100%)]"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/5483204/5483204-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          <source src="https://www.pexels.com/download/video/5483204/" type="video/mp4" />
        </video>

        {/* Vertical Top/Bottom Smooth Integration Overlay (25% lighter) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041624]/55 via-transparent to-[#041624]/45"></div>

        {/* Horizontal Opacity Gradient (25% lighter: 68% -> 45% -> transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041624]/68 via-[#041624]/45 via-35% sm:via-42% to-transparent"></div>

        {/* Right Corner Luminous Opening (Keeps right side light and video crystal clear) */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[radial-gradient(ellipse_at_top_right,transparent_70%,rgba(4,22,36,0.22)_100%)] pointer-events-none"></div>
        <div className="absolute -top-16 -right-16 w-[550px] h-[550px] bg-sky-400/[0.1] rounded-full blur-[130px] pointer-events-none"></div>
      </div>

      {/* Background subtle atmospheric glow & animated smooth line pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient Prussian blue & mint glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#003153] to-transparent rounded-full blur-[140px] opacity-25"></div>
        <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-[#47d847]/5 rounded-full blur-[120px]"></div>

        {/* Smooth drifting architectural line grid pattern */}
        <div className="absolute inset-0 hero-line-pattern [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,black_35%,transparent_85%)] opacity-25"></div>

        {/* Smooth undulating airflow wave lines */}
        <svg
          className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_75%_50%_at_50%_30%,black_30%,transparent_90%)] opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Wave line set 1 */}
          <g className="animate-wave-1">
            <path
              d="M-100,180 C200,80 400,280 720,170 C1040,60 1250,260 1540,160"
              fill="none"
              stroke="url(#hero-cyan-line)"
              strokeWidth="1.25"
              strokeDasharray="8 6"
            />
            <path
              d="M-100,220 C220,120 420,320 740,210 C1060,100 1270,300 1560,200"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
          </g>

          {/* Wave line set 2 */}
          <g className="animate-wave-2">
            <path
              d="M-80,260 C240,160 440,360 760,250 C1080,140 1290,340 1580,240"
              fill="none"
              stroke="url(#hero-green-line)"
              strokeWidth="1.25"
              strokeDasharray="6 8"
            />
            <path
              d="M-60,300 C260,200 460,400 780,290 C1100,180 1310,380 1600,280"
              fill="none"
              stroke="#47d847"
              strokeWidth="1"
              strokeOpacity="0.2"
            />
          </g>

          <defs>
            <linearGradient id="hero-cyan-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#47d847" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-green-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#47d847" stopOpacity="0" />
              <stop offset="40%" stopColor="#47d847" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#47d847" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Headline & Subtitle Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start text-left pb-6 lg:pb-8 flex-1 justify-center">
        {/* Main Display Headline in General Sans 300 with modern word-by-word reveal */}
        <h1
          className="text-[18px] sm:text-[23px] md:text-[29px] lg:text-[33px] xl:text-[36px] tracking-[-0.02em] leading-[1.22] max-w-5xl text-left drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] font-light"
          style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
        >
          <span className="inline-block font-light" style={{ fontWeight: 300 }}>
            {HERO_LINE_1_WORDS.map((word, idx) => (
              <span
                key={idx}
                className={`inline-block mr-[0.28em] last:mr-0 font-light ${word.color} ${
                  isLoaded ? 'animate-word-reveal' : 'opacity-0'
                }`}
                style={{ animationDelay: word.delay, fontWeight: 300 }}
              >
                {word.text}
              </span>
            ))}
          </span>
          <br className="hidden sm:inline" />
          <span className="inline-block font-light" style={{ fontWeight: 300 }}>
            {HERO_LINE_2_WORDS.map((word, idx) => (
              <span
                key={idx}
                className={`inline-block mr-[0.28em] last:mr-0 font-light ${word.color} ${
                  isLoaded ? 'animate-word-reveal' : 'opacity-0'
                }`}
                style={{ animationDelay: word.delay, fontWeight: 300 }}
              >
                {word.text}
              </span>
            ))}
          </span>
        </h1>

        {/* Left-Aligned Subtitle with smooth fade up on loading */}
        <p
          className={`mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl font-light text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
            isLoaded ? 'animate-hero-sub-reveal' : 'opacity-0'
          }`}
          style={{ animationDelay: '1.15s', fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
        >
          Transforming Unbearable Heat Into Flawless Cooling Comfort with Upfront Pricing, 24/7 Rapid Emergency Dispatch, and NATE-Certified Master Technicians.
        </p>

        {/* Sleek square "Know more" button with white border without bg, glossy hover effect, and soft arrow slide */}
        <div className={`mt-8 ${isLoaded ? 'animate-hero-sub-reveal' : 'opacity-0'}`} style={{ animationDelay: '1.30s' }}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-none border border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white font-light text-sm sm:text-base tracking-wider transition-all duration-300 backdrop-blur-xs shadow-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] overflow-hidden cursor-pointer"
            style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
          >
            {/* Glossy light sweep on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>

            <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Know more</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>

      {/* Brand Logos Ticker (100% unified part of the hero section with zero color difference) */}
      <div className={`w-full bg-transparent pt-3 sm:pt-4 pb-5 sm:pb-6 relative overflow-hidden text-left z-10 mt-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-4 text-left flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#47d847] animate-pulse"></span>
            Our brand partners:
          </p>

          {/* Smooth Scrolling Container with Edge Gradient Fades */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] py-1">
            <div className="animate-marquee flex items-center gap-10 sm:gap-14 select-none opacity-80 hover:opacity-100 transition-opacity">
              {/* Brand List Set 1 */}
              <div className="flex-shrink-0 flex items-center justify-center font-black italic tracking-tighter text-lg sm:text-xl text-slate-300 hover:text-white transition-colors">
                CARRIER
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-[0.16em] text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                TRANE
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-bold tracking-[0.22em] text-sm sm:text-base text-slate-300 hover:text-white transition-colors">
                LENNOX
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-tight text-lg sm:text-xl text-slate-300 hover:text-white transition-colors">
                RHEEM
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-extrabold tracking-[0.25em] text-sm sm:text-base text-slate-300 hover:text-white transition-colors">
                DAIKIN
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-widest text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                YORK
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-extrabold tracking-tight text-sm sm:text-base text-slate-300 hover:text-white transition-colors">
                MITSUBISHI ELECTRIC
              </div>
              <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/20 font-black tracking-tight text-xs sm:text-sm text-slate-300 hover:text-white hover:border-white/40 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47d847]"></span>
                NATE CERTIFIED
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-bold tracking-wider text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                BOSCH
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-tight text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                GOODMAN
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-bold tracking-wide text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">
                AMERICAN STANDARD
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-extrabold tracking-tight text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">
                HONEYWELL HOME
              </div>

              {/* Brand List Set 2 (Duplicate for seamless infinite loop) */}
              <div className="flex-shrink-0 flex items-center justify-center font-black italic tracking-tighter text-lg sm:text-xl text-slate-300 hover:text-white transition-colors">
                CARRIER
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-[0.16em] text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                TRANE
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-bold tracking-[0.22em] text-sm sm:text-base text-slate-300 hover:text-white transition-colors">
                LENNOX
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-tight text-lg sm:text-xl text-slate-300 hover:text-white transition-colors">
                RHEEM
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-extrabold tracking-[0.25em] text-sm sm:text-base text-slate-300 hover:text-white transition-colors">
                DAIKIN
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-widest text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                YORK
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-extrabold tracking-tight text-sm sm:text-base text-slate-300 hover:text-white transition-colors">
                MITSUBISHI ELECTRIC
              </div>
              <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/20 font-black tracking-tight text-xs sm:text-sm text-slate-300 hover:text-white hover:border-white/40 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47d847]"></span>
                NATE CERTIFIED
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-bold tracking-wider text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                BOSCH
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-black tracking-tight text-base sm:text-lg text-slate-300 hover:text-white transition-colors">
                GOODMAN
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-bold tracking-wide text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">
                AMERICAN STANDARD
              </div>
              <div className="flex-shrink-0 flex items-center justify-center font-extrabold tracking-tight text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">
                HONEYWELL HOME
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
