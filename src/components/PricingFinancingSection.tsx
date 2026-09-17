import React, { useState } from 'react';
import { Check, Shield, Calculator, Sparkles, HelpCircle, DollarSign } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { MAINTENANCE_PLANS } from '../data/hvacData';

interface PricingFinancingSectionProps {
  onSelectPlan: (planName: string) => void;
  onOpenBooking: () => void;
}

export const PricingFinancingSection: React.FC<PricingFinancingSectionProps> = ({
  onSelectPlan,
  onOpenBooking,
}) => {
  // Financing Calculator State
  const [systemEstimatedCost, setSystemEstimatedCost] = useState<number>(6800);
  const [financingTermMonths, setFinancingTermMonths] = useState<number>(36);
  const [downPayment, setDownPayment] = useState<number>(0);

  // Calculate monthly payment (assumes 0% APR promotional options for 24-36 mo, or 5.9% for 60 mo)
  const isZeroApr = financingTermMonths <= 36;
  const apr = isZeroApr ? 0 : 0.059;
  const principal = Math.max(0, systemEstimatedCost - downPayment);
  
  let monthlyPayment = 0;
  if (isZeroApr) {
    monthlyPayment = Math.round(principal / financingTermMonths);
  } else {
    const monthlyRate = apr / 12;
    monthlyPayment = Math.round(
      (principal * monthlyRate * Math.pow(1 + monthlyRate, financingTermMonths)) /
      (Math.pow(1 + monthlyRate, financingTermMonths) - 1)
    );
  }

  const commonRepairs = [
    { service: 'Comprehensive Multi-Point Diagnostic', cost: '$89', note: 'Waived completely when you proceed with repair' },
    { service: 'Seasonal AC Precision Tune-Up & Coil Clean', cost: '$79', note: 'Single system special, restores optimal cooling efficiency' },
    { service: 'Dual Run Capacitor Replacement', cost: '$180 - $260', note: 'Includes premium heavy-duty OEM capacitor + test' },
    { service: 'AC Contactor Switch Replacement', cost: '$160 - $240', note: 'Eliminates arcing & protects expensive compressor' },
    { service: 'Condensate Drain Line Clearing & Flush', cost: '$120 - $190', note: 'Antimicrobial clear + prevents indoor water damage' },
    { service: 'Condenser Fan Motor Replacement', cost: '$420 - $680', note: 'High-durability ball bearing motor + 1-yr warranty' },
    { service: 'Eco-Friendly Refrigerant Leak Test & Recharge', cost: '$240 - $480', note: 'Electronic sniffer test, vacuum check & top-off' },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-900 tracking-tight" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
            Honest Flat-Rate Pricing &amp; Flexible Financing
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We believe you should never be blind-sided by an HVAC invoice. Explore our flat-rate menu, preventative maintenance club, and 0% APR financing options.
          </p>
        </div>

        {/* 1. Maintenance Plans (Polar Protection Club) */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              The Polar Protection Club
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Prevent 85% of summer breakdowns and enjoy priority VIP dispatch when Texas heat peaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'border-2 border-sky-600 shadow-xl scale-[1.02] z-10'
                    : 'border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-slate-900">{plan.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{plan.bestFor}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    {plan.priceMonthly > 0 ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900">${plan.priceMonthly}</span>
                        <span className="text-slate-500 text-sm font-medium">/ month</span>
                        <span className="text-xs text-slate-600 ml-2">(or ${plan.priceAnnual}/yr)</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900">${plan.priceAnnual}</span>
                        <span className="text-slate-500 text-sm font-medium">one-time</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Included Benefits:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`group relative w-full py-3.5 px-4 rounded-none border font-light text-xs sm:text-sm tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 overflow-hidden ${
                    plan.popular
                      ? 'border-sky-600 bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                      : 'border-slate-300 hover:border-slate-900 bg-transparent hover:bg-slate-900 hover:text-white text-slate-800'
                  }`}
                  style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                  <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Flat-Rate Common Repairs Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Common Flat-Rate Repair Pricing Guide</h3>
              <p className="text-xs sm:text-sm text-slate-500">
                You receive a firm quote in writing before our technician turns a screw. Diagnostic fee is credited back on repairs.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold shrink-0">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>100% Price Lock Guarantee</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {commonRepairs.map((item, index) => (
              <div key={index} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">{item.service}</h4>
                  <p className="text-xs text-slate-500">{item.note}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="font-bold text-sky-700 text-sm sm:text-base bg-sky-50 px-2.5 py-1 rounded-md">
                    {item.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Interactive 0% APR Financing Calculator */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" /> Flexible Financing Available
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Get a Brand New High-Efficiency AC for as Low as ${monthlyPayment}/mo
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A broken AC shouldn't drain your emergency savings. We partner with premier lenders to offer <span className="text-amber-400 font-bold">0% APR for up to 36 months</span> on qualifying high-SEER2 cooling systems.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>$0 Down payment options available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Instant soft credit check with no impact on credit score</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Rebates &amp; Federal Inflation Reduction Act tax credits up to $2,000</span>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Slider Card */}
            <div className="lg:col-span-6 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 shadow-inner">
              <h4 className="text-base font-bold text-white mb-4 flex items-center justify-between">
                <span>Interactive Payment Estimator</span>
                <span className="text-xs font-normal text-slate-400">Customizable</span>
              </h4>

              {/* System Cost Slider */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Estimated System Investment</span>
                  <span className="font-bold text-sky-400 text-sm">${systemEstimatedCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="3500"
                  max="14000"
                  step="250"
                  value={systemEstimatedCost}
                  onChange={(e) => setSystemEstimatedCost(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>$3,500 (Single unit)</span>
                  <span>$8,500 (High-SEER)</span>
                  <span>$14,000 (Dual-system)</span>
                </div>
              </div>

              {/* Financing Term Selection */}
              <div className="mb-6">
                <label className="block text-xs text-slate-300 mb-2 font-medium">
                  Select Financing Plan Term:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '24 Months', months: 24, badge: '0% APR' },
                    { label: '36 Months', months: 36, badge: '0% APR' },
                    { label: '60 Months', months: 60, badge: 'Low Interest' },
                  ].map((term) => (
                    <button
                      key={term.months}
                      onClick={() => setFinancingTermMonths(term.months)}
                      className={`p-2.5 rounded-none text-center border text-xs font-light tracking-wide transition-all cursor-pointer ${
                        financingTermMonths === term.months
                          ? 'border-sky-400 bg-sky-500/20 text-white shadow-sm'
                          : 'border-slate-700 bg-slate-900/60 text-slate-400 hover:border-slate-500'
                      }`}
                      style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                    >
                      <div className="font-light">{term.label}</div>
                      <div className={`text-[10px] ${term.badge === '0% APR' ? 'text-amber-400' : 'text-slate-400'}`}>
                        {term.badge}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Result Display */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700/80 mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Estimated Monthly Payment:</div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">
                    ${monthlyPayment} <span className="text-xs font-normal text-slate-400">/ mo</span>
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <div>{isZeroApr ? '0% APR Promotional Period' : '5.9% APR Fixed Rate'}</div>
                  <div className="text-emerald-400 font-semibold">$0 Down Payment</div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                id="financing-prequalify-btn"
                className="group relative w-full py-3.5 px-4 rounded-none border border-amber-500 hover:border-amber-400 bg-amber-500 hover:bg-amber-400 text-slate-950 font-light text-sm tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Check Financing Pre-Qualification</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-2">
                *Monthly payment is an estimate subject to credit approval. No obligation or impact to credit score during pre-qualification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
