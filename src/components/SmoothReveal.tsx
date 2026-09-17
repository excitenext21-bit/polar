import React, { useState, useEffect, useRef } from 'react';

interface SmoothRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export const SmoothReveal: React.FC<SmoothRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // Check if element is already within viewport on initial load
    const checkInitialVisibility = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
        const timer = setTimeout(() => {
          setIsRevealed(true);
        }, delay);
        return () => clearTimeout(timer);
      }
      return null;
    };

    const cleanupInitial = checkInitialVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      if (cleanupInitial) cleanupInitial();
      observer.disconnect();
    };
  }, [delay, threshold]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${
        isRevealed
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 sm:translate-y-10 scale-[0.99]'
      } ${className}`}
    >
      {children}
    </div>
  );
};
