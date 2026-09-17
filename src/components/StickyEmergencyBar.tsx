import React, { useState } from 'react';
import { Phone, Calendar, X } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { BUSINESS_INFO } from '../data/hvacData';

interface StickyEmergencyBarProps {
  onOpenBooking: () => void;
  onOpenEstimator: () => void;
}

export const StickyEmergencyBar: React.FC<StickyEmergencyBarProps> = ({
  onOpenBooking,
  onOpenEstimator,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#062238]/95 backdrop-blur-md border border-sky-800/60 rounded-none px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 text-white">
        {/* Status dot */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#47d847] opacity-75"></span>
            <span className="relative inline-flex rounded-none h-2 w-2 bg-[#47d847]"></span>
          </span>
          <span className="hidden md:inline text-xs font-light text-slate-200 tracking-wide" style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}>
            24/7 On-Duty Dispatch
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none border border-[#47d847] hover:border-[#3ec43e] bg-[#47d847] hover:bg-[#3ec43e] text-black font-light text-xs tracking-wider transition-all duration-300 overflow-hidden"
            style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
            <Phone className="w-3.5 h-3.5 relative z-10" />
            <span className="hidden xs:inline relative z-10 font-light">Call:</span>
            <span className="relative z-10 font-light">{BUSINESS_INFO.phone}</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none border border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white font-light text-xs tracking-wider transition-all duration-300 overflow-hidden cursor-pointer"
            style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
            <Calendar className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10 font-light">Book</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-slate-400 hover:text-white rounded-none border border-transparent hover:border-white/20 transition-colors"
            aria-label="Dismiss quick dispatch bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
