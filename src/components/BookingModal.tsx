import React from 'react';
import { X, Calendar, Phone } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { BUSINESS_INFO } from '../data/hvacData';
import { BrandLogo } from './BrandLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '24/7 Emergency AC Repair',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#031320]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-7 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-none border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10 cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 pr-8">
          <div className="mb-3">
            <BrandLogo variant="dark" className="h-7 sm:h-8" />
          </div>
          <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5" /> Fast Online Scheduling
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Book Your Service Appointment
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Same-day priority slots available. Or call dispatch directly at{' '}
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-amber-600 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </p>
        </div>

        <BookingForm
          initialService={initialService}
          isModal={true}
          onCloseModal={onClose}
        />
      </div>
    </div>
  );
};
