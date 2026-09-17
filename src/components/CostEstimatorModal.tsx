import React, { useState } from 'react';
import { X, Wrench, CheckCircle2, ShieldCheck, Tag, ThermometerSun, AlertTriangle, Snowflake } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { BUSINESS_INFO } from '../data/hvacData';
import { BrandLogo } from './BrandLogo';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToBooking: (service: string, description: string) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToBooking,
}) => {
  const [issueType, setIssueType] = useState('warm-air');
  const [homeSize, setHomeSize] = useState('medium');
  const [systemAge, setSystemAge] = useState('5-10');

  if (!isOpen) return null;

  const issueOptions = [
    { id: 'warm-air', label: 'AC Blowing Warm or Lukewarm Air', typicalFix: 'Capacitor, refrigerant leak, or contactor', estRange: '$180 - $380' },
    { id: 'frozen-coils', label: 'Ice on Refrigerant Line / Frozen Unit', typicalFix: 'Airflow restriction, dirty filter, low refrigerant', estRange: '$120 - $340' },
    { id: 'no-power', label: 'Unit Completely Silent / Won’t Turn On', typicalFix: 'Blown fuse, bad contactor, float switch trip', estRange: '$140 - $260' },
    { id: 'noises', label: 'Loud Buzzing, Screeching or Clanking', typicalFix: 'Condenser fan motor, compressor issue', estRange: '$280 - $650' },
    { id: 'tuneup', label: 'Preventative Summer Tune-Up & Clean', typicalFix: '26-point inspection, coil cleaning, pressure check', estRange: '$79 Flat-Rate' },
    { id: 'full-replace', label: 'Complete System Replacement', typicalFix: 'High-efficiency 15.2 - 20 SEER2 Carrier/Trane', estRange: '$5,400 - $9,800' },
  ];

  const currentIssue = issueOptions.find((o) => o.id === issueType) || issueOptions[0];

  const handleBookWithEstimate = () => {
    onApplyToBooking(
      currentIssue.id === 'full-replace' ? 'AC Installation & Replacement' : '24/7 Emergency AC Repair',
      `Diagnostic estimate requested for: ${currentIssue.label} (Home size: ${homeSize}, Unit age: ${systemAge} yrs). Coupon $25 applied.`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#031320]/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-none border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand & Header */}
        <div className="mb-4">
          <BrandLogo variant="dark" className="h-7 sm:h-8" />
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
            <Wrench className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Transparent Cost Estimator
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Instant HVAC Repair &amp; Pricing Calculator
            </h3>
          </div>
        </div>

        <div className="space-y-5">
          {/* Step 1: Select Main Issue */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              1. What issue are you experiencing?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {issueOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setIssueType(opt.id)}
                  className={`p-3 rounded-none text-left border text-xs transition-all cursor-pointer ${
                    issueType === opt.id
                      ? 'border-sky-600 bg-sky-50/80 text-sky-950 font-semibold shadow-xs ring-1 ring-sky-500'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="font-bold text-slate-900">{opt.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{opt.typicalFix}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Home Square Footage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                2. Home Square Footage
              </label>
              <select
                value={homeSize}
                onChange={(e) => setHomeSize(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-800 bg-white"
              >
                <option value="small">Under 1,500 sq ft (approx 2 - 2.5 Ton)</option>
                <option value="medium">1,500 - 2,500 sq ft (approx 3 - 3.5 Ton)</option>
                <option value="large">Over 2,500 sq ft (approx 4 - 5 Ton)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                3. Approximate Age of AC Unit
              </label>
              <select
                value={systemAge}
                onChange={(e) => setSystemAge(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium text-slate-800 bg-white"
              >
                <option value="under-5">Under 5 years (under warranty)</option>
                <option value="5-10">5 - 10 years (prime maintenance window)</option>
                <option value="over-10">Over 10 years (eligible for energy rebates)</option>
              </select>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <div className="text-xs text-slate-400">Estimated Ballpark Investment:</div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  {currentIssue.estRange}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                  <Tag className="w-3 h-3" /> $25 Online Discount Voucher Included
                </span>
                <p className="text-[10px] text-slate-400 mt-1">Diagnostic fee credited back upon repair</p>
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Includes comprehensive multi-point diagnostic by a NATE-certified master tech.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Firm flat-rate quote provided in writing before any repairs begin.</span>
              </div>
            </div>
          </div>

          {/* Modal Action CTA with rectangular 1px border matching hero section */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleBookWithEstimate}
              className="group relative flex-1 py-3.5 px-4 rounded-none border border-slate-900 hover:border-black bg-slate-950 hover:bg-slate-800 text-white font-light text-sm tracking-wider shadow-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Lock In $25 Coupon &amp; Book Service</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="group relative sm:w-auto py-3.5 px-5 rounded-none border border-amber-500 hover:border-amber-400 bg-amber-500 hover:bg-amber-400 text-slate-950 font-light text-sm tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Call Now: {BUSINESS_INFO.phone}</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
