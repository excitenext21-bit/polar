import React, { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { ArrowLeft, ArrowRight } from './SleekArrow';
import { TESTIMONIALS } from '../data/hvacData';
import { SmoothReveal } from './SmoothReveal';

interface TestimonialsSectionProps {
  onOpenBooking?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const total = TESTIMONIALS.length; // 8 testimonials

  // Seamless double array for continuous forward infinite rotation
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS];

  // Responsive cards per view (2 on desktop/tablet, 1 on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Forward transition with seamless infinite loop
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
  }, [total]);

  // When reaching the duplicated boundary, seamlessly loop without visible jump
  const handleTransitionEnd = () => {
    if (currentIndex >= total) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex % total);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Smooth auto-rotation effect every 3.5s (pauses on hover and while dragging)
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused, isDragging]);

  // Mouse & Touch Drag Handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
    setIsPaused(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsPaused(false);

    const threshold = 45;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  return (
    <section
      id="faqs"
      className="py-14 sm:py-18 lg:py-24 bg-[#f8fafc] text-slate-900 border-t border-slate-200/80 relative overflow-hidden select-none"
      style={{ fontFamily: "'General Sans', sans-serif" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div id="reviews" className="sr-only" aria-hidden="true" />
      {/* Subtle ambient lighting glows in brand colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Quote Icon, Dual-Color Headline & Nav Slider  */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            {/* Big Stylized Quote Glyph (Matching Screenshot) */}
            <div className="text-slate-300 mb-3 select-none">
              <svg className="w-14 h-14 sm:w-16 sm:h-16 fill-current" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
              </svg>
            </div>

            {/* Headline with PolarAir Dual Brand Colors (Brand Blue #0088c6 + Brand Green #3bb83b) */}
            <h2
              className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight leading-[1.18] mb-4"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              What our clients are saying
            </h2>

            {/* Subtitle */}
            <p
              className="text-slate-500 text-[14px] sm:text-[15px] font-light leading-relaxed max-w-sm mb-6 sm:mb-8"
              style={{ fontWeight: 300 }}
            >
              Real experiences from homeowners and commercial facility managers across the metro area.
            </p>

            {/* Navigation Slider Controls (Matching Screenshot: Arrow Left, Progress Bar, Arrow Right) */}
            <div className="flex items-center gap-4">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-all cursor-pointer focus:outline-none group"
                aria-label="Previous testimonials"
                title="Previous"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Dual-Color Progress Bar Track */}
              <div className="w-24 sm:w-28 h-[2.5px] bg-slate-200 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#0088c6] to-[#3bb83b] rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${(((currentIndex % total) + 1) / total) * 100}%`,
                  }}
                />
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 hover:text-[#0088c6] hover:bg-slate-200/60 transition-all cursor-pointer focus:outline-none group"
                aria-label="Next testimonials"
                title="Next"
              >
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Speech Bubble Cards Carousel (Screenshot)   */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-8 xl:col-span-8 overflow-hidden pt-8 pb-12 -my-4 px-2 -mx-2 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => {
              handleDragEnd();
              setIsPaused(false);
            }}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                isDragging
                  ? 'transition-none'
                  : isTransitioning
                  ? 'transition-transform duration-700 ease-out'
                  : 'transition-none'
              }`}
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / cardsPerView)}% + ${dragOffset}px))`,
              }}
            >
              {displayItems.map((item, idx) => {
                // 1-indexed number based on the original 8 items: 1, 2, 3, 4, 5, 6, 7, 8
                const originalIdx = idx % total;
                const cardNumber = originalIdx + 1;
                // Even number series (cards #2, #4, #6, #8) preserves the pop-out hover effect automatically
                const isEvenSeries = cardNumber % 2 === 0;

                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="shrink-0 px-3 sm:px-3.5"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    {/* Entire Testimonial Unit (Speech Bubble + Tail + Reviewer Info) */}
                    <div
                      className={`transition-all duration-500 ease-out ${
                        isEvenSeries
                          ? 'sm:-translate-y-3.5 sm:scale-[1.035] z-20 cursor-pointer'
                          : 'translate-y-0 scale-100 z-10 cursor-default'
                      } group`}
                    >
                      {/* 1. Speech Bubble Body (Matching Screenshot) */}
                      <div
                        className={`bg-white rounded-2xl sm:rounded-[22px] p-5 sm:p-7 border relative transition-all duration-500 ease-out ${
                          isEvenSeries
                            ? 'border-[#0088c6]/55 shadow-[0_22px_45px_-8px_rgba(0,136,198,0.22),0_12px_24px_-6px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 group-hover:scale-[1.015] group-hover:shadow-[0_28px_52px_-10px_rgba(0,136,198,0.32)] group-hover:border-[#0088c6]'
                            : 'border-slate-200/80 shadow-[0_4px_18px_rgba(0,0,0,0.04)]'
                        }`}
                      >
                        {/* Review Quote Body Text */}
                        <p
                          className="text-slate-600 text-[14px] sm:text-[14.5px] leading-relaxed font-light mb-5 line-clamp-4 min-h-[88px]"
                          style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                        >
                          {item.reviewText}
                        </p>

                        {/* 5 Green Stars (Matching Screenshot: PolarAir Brand Green #3bb83b) */}
                        <div className="flex items-center gap-1 text-[#3bb83b]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#3bb83b] text-[#3bb83b]"
                            />
                          ))}
                        </div>

                        {/* Speech Bubble Downward Tail Pointer (Pointing at Avatar) */}
                        <div
                          className={`absolute -bottom-[7px] left-8 w-3.5 h-3.5 bg-white border-r border-b rotate-45 transition-colors duration-500 ${
                            isEvenSeries ? 'border-[#0088c6]/55 group-hover:border-[#0088c6]' : 'border-slate-200/80'
                          }`}
                        />
                      </div>

                      {/* 2. Reviewer Identity Below Speech Bubble (Avatar + Name + Date/Location) */}
                      <div className="flex items-center gap-3.5 mt-4 pt-1 pl-3">
                        {/* Circular Avatar */}
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 bg-slate-100 border ${
                            isEvenSeries ? 'border-[#0088c6]/50 ring-2 ring-sky-100' : 'border-slate-200'
                          }`}
                        >
                          <img
                            src={item.avatar}
                            alt={item.customerName}
                            draggable="false"
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out pointer-events-none"
                          />
                        </div>

                        {/* Name and Date / Role */}
                        <div className="min-w-0 flex-1">
                          <h4
                            className="text-slate-900 font-semibold text-[14.5px] sm:text-[15px] tracking-tight truncate leading-snug"
                            style={{ fontFamily: "'General Sans', sans-serif" }}
                          >
                            {item.customerName}
                          </h4>
                          <p className="text-slate-400 text-xs font-light mt-0.5 truncate">
                            {item.date || '3 days ago'} • {item.location}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
        </SmoothReveal>
      </div>
    </section>
  );
};
