import React from 'react';
import { 
  BadgeDollarSign, 
  UserCheck, 
  Award, 
  Zap, 
  Shield, 
  Check, 
  X, 
  Clock, 
  ThumbsUp,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-900 tracking-tight" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
            Why Homeowners &amp; Businesses Choose Polar Air
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            HVAC repairs shouldn't come with high-pressure sales pitches or mystery fees. We operate with radical transparency, certified craftsmanship, and unwavering respect for your home.
          </p>
        </div>

        {/* 3 Core Pillars From User Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* 1. Upfront Pricing */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between relative group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BadgeDollarSign className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Zero Surprises
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Upfront Pricing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                No hidden fees or surprise costs—you approve the price before work begins. We provide comprehensive flat-rate quotes upfront, so you always know exactly what you are paying down to the penny.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-200/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Firm flat-rate pricing guide</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Diagnostic fee waived with repair</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>No weekend or holiday overtime fees</span>
              </li>
            </ul>
          </div>

          {/* 2. Certified Technicians */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between relative group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block mb-1">
                True Professionals
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Certified Technicians
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Background-checked, licensed, and trained professionals who respect your space. Every technician holds state licensing and EPA certifications, wearing shoe covers and keeping your residence spotless.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-200/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>NATE &amp; EPA Section 608 Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% Drug-tested &amp; background-cleared</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Shoe covers &amp; floor runners used always</span>
              </li>
            </ul>
          </div>

          {/* 3. Satisfaction Guaranteed */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex flex-col justify-between relative group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Polar Shield Promise
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Satisfaction Guaranteed
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We back every repair and installation with a 100% satisfaction guarantee. If your system fails or you are unsatisfied with our craft, we return immediately to make it right at zero additional cost.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 pt-4 border-t border-slate-200/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>1-Year parts &amp; labor repair warranty</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>10-Year warranty on new installations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>100% Money-back guarantee on tune-ups</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clear Side-by-Side Comparison Table */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl overflow-hidden border border-slate-800">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              The Polar Air Difference vs. Standard Contractors
            </h3>
            <p className="text-sm text-slate-400">
              See why more than 14,000 Texas homeowners rely on Polar Air for emergency cooling and system replacements.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 font-semibold">Service Standard</th>
                  <th className="py-4 px-4 font-bold text-sky-400 bg-sky-950/40 rounded-t-lg">
                    Polar Air Heating &amp; AC
                  </th>
                  <th className="py-4 px-4 font-normal text-slate-500">Average HVAC Contractors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Pricing Approval</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-sky-950/40">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> Written quote approved prior to repair
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">Open-ended hourly billing with surprise add-ons</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Emergency Dispatch</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-sky-950/40">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> 24/7 Live dispatch, avg 45-min arrival
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">Answering machine or 2-3 day waiting list</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Technician Credentials</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-sky-950/40">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> NATE, EPA Universal, Background-Checked
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">Varies widely, unverified sub-contractors</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Repair Warranty</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-sky-950/40">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> 1-Year Full Parts &amp; Labor Guarantee
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">30 days or no written warranty</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-slate-200">Truck Inventory</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-sky-950/40 rounded-b-lg">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400" /> 92% One-visit first-time fix rate
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-400">Multiple trips to supply houses at customer cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
