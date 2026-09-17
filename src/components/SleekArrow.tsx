import React from 'react';

export interface SleekArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeWidth?: number;
}

export const ArrowRight: React.FC<SleekArrowProps> = ({
  className = 'w-4 h-4',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="1" y1="12" x2="26" y2="12" />
    <polyline points="20 6.5 26 12 20 17.5" />
  </svg>
);

export const ArrowLeft: React.FC<SleekArrowProps> = ({
  className = 'w-4 h-4',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 28 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="27" y1="12" x2="2" y2="12" />
    <polyline points="8 6.5 2 12 8 17.5" />
  </svg>
);

export const ArrowUp: React.FC<SleekArrowProps> = ({
  className = 'w-4 h-4',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 24 28"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="12" y1="27" x2="12" y2="2" />
    <polyline points="6.5 8 12 2 17.5 8" />
  </svg>
);

export const ArrowUpRight: React.FC<SleekArrowProps> = ({
  className = 'w-4 h-4',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <line x1="2" y1="26" x2="26" y2="2" />
    <polyline points="15 2 26 2 26 13" />
  </svg>
);

export const SleekArrowRight = ArrowRight;
export const SleekArrowLeft = ArrowLeft;
export const SleekArrowUp = ArrowUp;
export const SleekArrowUpRight = ArrowUpRight;

export default ArrowRight;
