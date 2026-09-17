import React from 'react';

export interface BrandLogoProps {
  /**
   * 'navbar': Official White 'POLAR' + Brand Blue 'AIR' and 'Design for Comfort' tagline logo (matching attached Image 1).
   * 'light': White 'POLAR' + Brand Blue 'AIR' logo for dark backgrounds (navbar, footer, dark containers).
   * 'dark': Charcoal & blue logo for light backgrounds (modals, light cards, white backgrounds).
   */
  variant?: 'light' | 'dark' | 'navbar';
  className?: string;
  imgClassName?: string;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'navbar',
  className = '',
  imgClassName = '',
  alt = 'Polar Air Heating & Cooling - Design for Comfort',
}) => {
  let logoSrc = '/assets/polar-air-logo-nav.png';
  if (variant === 'dark') {
    logoSrc = '/assets/logo-dark.png';
  } else {
    logoSrc = '/assets/polar-air-logo-nav.png';
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt={alt}
        className={`h-full w-auto max-h-full object-contain ${imgClassName}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default BrandLogo;
