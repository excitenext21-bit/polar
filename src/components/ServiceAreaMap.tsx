import React, { useState } from 'react';
import { MapPin, Navigation, Search, CheckCircle, AlertCircle } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { SERVICE_AREAS, BUSINESS_INFO } from '../data/hvacData';

export const ServiceAreaMap: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    found: boolean;
    areaName?: string;
    responseTime?: string;
  } | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    const matchedArea = SERVICE_AREAS.find((area) =>
      area.zipCodes.some((z) => z.startsWith(cleanZip) || cleanZip.startsWith(z))
    );

    if (matchedArea) {
      setLookupResult({
        found: true,
        areaName: matchedArea.name,
        responseTime: matchedArea.responseTime,
      });
    } else {
      setLookupResult({
        found: false,
      });
    }
  };

  return (
    <section id="service-area" className="py-20 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
            Metropolitan Dispatch Radius
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Guaranteed emergency HVAC dispatch coverage across Metro City and surrounding suburbs. Check your ZIP code below.
          </p>

          {/* Instant ZIP Code Checker */}
          <form onSubmit={handleZipCheck} className="mt-6 flex max-w-md mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                placeholder="Enter 5-digit ZIP code (e.g. 75001)..."
                maxLength={5}
                className="w-full pl-10 pr-4 py-2.5 rounded-none border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#47d847]"
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-none border border-slate-900 hover:border-black bg-slate-950 hover:bg-slate-800 text-white font-light text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-sm overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Verify</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </button>
          </form>

          {lookupResult && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium animate-in fade-in">
              {lookupResult.found ? (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Priority Coverage in <strong>{lookupResult.areaName}</strong>! Est. arrival:{' '}
                    <strong>{lookupResult.responseTime}</strong>.
                  </span>
                </div>
              ) : (
                <div className="bg-amber-50 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    Custom dispatch available for ZIP {zipInput}. Call {BUSINESS_INFO.phone} for travel window.
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stylized Interactive Map Container (Matching image.png map view) */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 h-[380px] sm:h-[450px]">
          {/* Map Base Graphic */}
          <div className="absolute inset-0 bg-[#e5e9f0] opacity-90">
            {/* Map Roads & Rivers SVG vector simulation */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Rivers */}
              <path d="M -50 200 Q 200 120, 500 240 T 1100 180" stroke="#bfdbfe" strokeWidth="18" fill="none" />
              {/* Highways */}
              <path d="M 100 -20 L 700 500" stroke="#ffffff" strokeWidth="8" />
              <path d="M 100 -20 L 700 500" stroke="#94a3b8" strokeWidth="3" />
              <path d="M -20 180 L 1100 280" stroke="#ffffff" strokeWidth="10" />
              <path d="M -20 180 L 1100 280" stroke="#f59e0b" strokeWidth="3" />
              <path d="M 400 -20 L 350 500" stroke="#ffffff" strokeWidth="8" />
              <path d="M 400 -20 L 350 500" stroke="#94a3b8" strokeWidth="3" />

              {/* Coverage radius circle */}
              <circle cx="50%" cy="50%" r="140" fill="#47d847" fillOpacity="0.08" stroke="#47d847" strokeWidth="2" strokeDasharray="6 4" />
            </svg>
          </div>

          {/* Central Headquarters Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="px-3 py-1.5 rounded-full bg-slate-950 text-white font-bold text-[11px] shadow-lg mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#47d847] animate-ping"></span>
              <span>Polar Air Central Depot</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#47d847] text-black flex items-center justify-center shadow-lg border-2 border-white">
              <Navigation className="w-4 h-4 fill-black" />
            </div>
          </div>

          {/* Surrounding Region Pins */}
          {SERVICE_AREAS.slice(0, 4).map((area, index) => {
            const positions = [
              { top: '32%', left: '38%' },
              { top: '36%', right: '35%' },
              { bottom: '34%', left: '42%' },
              { bottom: '30%', right: '40%' },
            ];
            const pos = positions[index % positions.length];

            return (
              <div key={area.name} className="absolute z-10 hidden sm:flex flex-col items-center" style={pos}>
                <div className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-800 font-bold text-[10px] shadow-sm border border-slate-200 mb-0.5">
                  {area.name} ({area.responseTime})
                </div>
                <div className="w-3 h-3 rounded-full bg-slate-900 border-2 border-white shadow-xs"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
