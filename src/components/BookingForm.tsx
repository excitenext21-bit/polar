import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Phone, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Send, 
  FileText, 
  User, 
  Mail, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { BUSINESS_INFO } from '../data/hvacData';
import { BookingFormData } from '../types';
import { BrandLogo } from './BrandLogo';

interface BookingFormProps {
  initialService?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = 'Emergency Repair',
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceNeeded: initialService || 'Emergency Repair',
    description: '',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)',
    isEmergency: false,
    address: '',
    zipCode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const timeSlots = [
    'Emergency ASAP (Under 60 mins)',
    'Morning (8:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Late Afternoon (4:00 PM - 7:00 PM)',
  ];

  const servicesList = [
    'Feasibility Study',
    'Cost & Energy Optimization',
    'Quality Execution',
    'Ongoing AMC Support',
    'Feedback & Integration',
    'Compliance & Management',
    'Other / Consultation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch processing
    setTimeout(() => {
      const code = 'PA-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 600);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      serviceNeeded: 'Emergency Repair',
      description: '',
      preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      preferredTimeSlot: 'Morning (8:00 AM - 12:00 PM)',
      isEmergency: false,
      address: '',
      zipCode: '',
    });
  };

  return (
    <div className={`w-full ${isModal ? 'p-1' : ''}`} id="booking-form-wrapper">
      {isConfirmed ? (
        /* Confirmed State */
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xl text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-center mb-4">
            <BrandLogo variant="dark" className="h-8" />
          </div>
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            Booking Confirmed &amp; Dispatched
          </span>
          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Thank you, {formData.fullName}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
            Your service appointment request has been scheduled with Polar Air. A lead dispatcher is assigning your certified technician now.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left mb-6 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Confirmation Code:</span>
              <span className="font-mono font-bold text-sky-700">{confirmationCode}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Service:</span>
              <span className="font-semibold text-slate-800">{formData.serviceNeeded}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">Requested Date &amp; Window:</span>
              <span className="font-semibold text-slate-800">
                {formData.preferredDate} ({formData.preferredTimeSlot.split(' ')[0]})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Contact Phone:</span>
              <span className="font-semibold text-slate-800">{formData.phoneNumber}</span>
            </div>
          </div>

          {/* Homeowner Tips while waiting */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 max-w-md mx-auto text-left mb-6">
            <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Pro Tip While You Wait:
            </h4>
            <p className="text-xs text-sky-800 leading-relaxed">
              If your AC unit is frozen or has ice on the brass refrigerant line, please turn the thermostat to "OFF" and set the fan to "ON". This allows coils to safely thaw before your technician arrives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none border border-amber-500 hover:border-amber-400 bg-amber-500 hover:bg-amber-400 text-slate-950 font-light text-sm tracking-wider shadow-sm transition-all duration-300 overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Call Dispatch: {BUSINESS_INFO.phone}</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </a>

            {isModal && onCloseModal ? (
              <button
                onClick={onCloseModal}
                className="group relative w-full sm:w-auto px-6 py-3.5 rounded-none border border-slate-300 hover:border-slate-800 bg-transparent hover:bg-slate-100 text-slate-800 font-light text-sm tracking-wider transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
              >
                <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Close Window</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2 text-xs text-slate-500 hover:text-slate-700 underline"
              >
                Submit another booking
              </button>
            )}
          </div>
        </div>
      ) : (
        /* High-Converting Booking Form (Exact Blueprint Fields) */
        <form
          onSubmit={handleSubmit}
          id="main-booking-form"
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5"
        >
          {/* Emergency Fast-Track Toggle */}
          <div
            onClick={() => setFormData({ ...formData, isEmergency: !formData.isEmergency })}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
              formData.isEmergency
                ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-xs'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${formData.isEmergency ? 'bg-amber-500 text-slate-950 animate-pulse' : 'bg-slate-200 text-slate-600'}`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider block">
                  {formData.isEmergency ? '🚨 Emergency Status: Activated' : 'Is this an urgent AC emergency?'}
                </span>
                <span className="text-[11px] text-slate-500">
                  {formData.isEmergency
                    ? 'Technicians flagged for immediate priority dispatch.'
                    : 'Click here if home is without cooling during high heat.'}
                </span>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.isEmergency ? 'border-amber-600 bg-amber-600' : 'border-slate-400'}`}>
              {formData.isEmergency && <span className="w-2 h-2 rounded-full bg-white"></span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 1: First & Last Name */}
            <div>
              <label htmlFor="booking-name" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-slate-400" /> First &amp; Last Name *
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g., Robert Martinez"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Field 2: Phone Number */}
            <div>
              <label htmlFor="booking-phone" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone Number *
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+91 772000 7392"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 3: Email Address */}
            <div>
              <label htmlFor="booking-email" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address *
              </label>
              <input
                id="booking-email"
                type="email"
                required
                value={formData.emailAddress}
                onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                placeholder="robert@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Field 4: Service Needed ▼ */}
            <div>
              <label htmlFor="booking-service" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-slate-400" /> Service Needed *
              </label>
              <select
                id="booking-service"
                required
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {servicesList.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Street Address & ZIP code */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="booking-address" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Service Street Address
              </label>
              <input
                id="booking-address"
                type="text"
                value={formData.address || ''}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="1234 Sunny Meadow Lane"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="booking-zip" className="block text-xs font-bold text-slate-800 mb-1.5">
                ZIP Code *
              </label>
              <input
                id="booking-zip"
                type="text"
                required
                maxLength={5}
                value={formData.zipCode || ''}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                placeholder="75001"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 6: Request Appointment Date */}
            <div>
              <label htmlFor="booking-date" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> Request Appointment Date *
              </label>
              <input
                id="booking-date"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Time Slot */}
            <div>
              <label htmlFor="booking-timeslot" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Preferred Time Window *
              </label>
              <select
                id="booking-timeslot"
                required
                value={formData.preferredTimeSlot}
                onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Field 5: Brief Description of Issue */}
          <div>
            <label htmlFor="booking-desc" className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
              Brief Description of Issue or Request
            </label>
            <textarea
              id="booking-desc"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="e.g., AC blowing warm air since this morning, outdoor unit fan is buzzing, need quote for whole-house replacement..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            ></textarea>
          </div>

          {/* Field 7: Submit Request Button with rectangular 1px border matching hero section */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              id="booking-submit-btn"
              className="group relative w-full py-4 px-6 rounded-none border border-sky-600 hover:border-sky-500 bg-sky-600 hover:bg-sky-700 text-white font-light text-base tracking-wider shadow-md transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden cursor-pointer active:scale-[0.99] disabled:opacity-75"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              {isSubmitting ? (
                <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Securing Appointment...</span>
              ) : (
                <>
                  <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Submit Service Request</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                </>
              )}
            </button>
          </div>

          {/* Trust Guarantees under form */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Upfront written quote before work
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Never any hidden travel fees
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-4 h-4 text-sky-600" /> Guaranteed response in &lt; 15 mins
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
