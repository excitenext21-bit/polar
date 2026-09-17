import React from 'react';
import { ArrowRight } from './SleekArrow';
import { SmoothReveal } from './SmoothReveal';
import { LottieServiceIcon } from './LottieServiceIcon';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenEstimator: () => void;
}

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  startingPrice: string;
  image: string;
  icon: React.ReactNode;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onOpenEstimator,
}) => {
  // Service cards with animated LottieFiles icons (+20% size and sleek 1px properties)
  const serviceCards: ServiceCard[] = [
    {
      id: 'heating',
      title: 'Heating',
      description:
        'Efficient thermal solutions & heat recovery systems customized for industrial processes, commercial spaces & climate sensitive applications.',
      startingPrice: 'Custom Energy Systems',
      image: '/assets/service-heating-outdoor.png',
      icon: <LottieServiceIcon type="heating" className="w-7 h-7 sm:w-8 sm:h-8" />,
    },
    {
      id: 'ventilation',
      title: 'Ventilation',
      description:
        'Advanced air exchange, duct-work & clean-room air distribution systems designed to ensure indoor air quality, safety & proper airflow.',
      startingPrice: 'IAQ & Airflow Certified',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      icon: <LottieServiceIcon type="ventilation" className="w-7 h-7 sm:w-8 sm:h-8" />,
    },
    {
      id: 'air-conditioning',
      title: 'Air Conditioning',
      description:
        'End-to-end cooling solutions ranging from central VRV/VRF systems and chillers to specialized setups for commercial complexes & luxury residences.',
      startingPrice: 'VRV/VRF & Chiller Setups',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      icon: <LottieServiceIcon type="air-conditioning" className="w-7 h-7 sm:w-8 sm:h-8" />,
    },
    {
      id: 'consultation',
      title: 'Consultation',
      description:
        'Expert engineering guidance including precise heat load calculations, system selection, cost analysis, and power efficiency auditing tailored to client needs.',
      startingPrice: 'Custom Facility Plans',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      icon: <LottieServiceIcon type="consultation" className="w-7 h-7 sm:w-8 sm:h-8" />,
    },
    {
      id: 'sales',
      title: 'Sales',
      description:
        'Procurement of top-tier, reliable HVAC equipment & components optimized for energy efficiency and operational demands.',
      startingPrice: 'High-Efficiency Audits',
      image: '/assets/service-sales-facility.png',
      icon: <LottieServiceIcon type="sales" className="w-7 h-7 sm:w-8 sm:h-8" />,
    },
    {
      id: 'installation-amc-service',
      title: 'Installation & AMC Service',
      description:
        'Comprehensive post-installation maintenance, system performance optimization, troubleshooting & ongoing lifecycle support.',
      startingPrice: 'Certified Lifecycle Support',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      icon: <LottieServiceIcon type="installation" className="w-7 h-7 sm:w-8 sm:h-8" />,
    },
  ];

  return (
    <section id="services" className="py-10 lg:py-14 bg-[#e7ebf0] text-slate-900 border-t border-slate-200/80 relative">
      {/* Anchor for Company Services navigation */}
      <span id="company-services" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothReveal>
        {/* Section Header */}
        <div className="mb-6 lg:mb-7">
          <div className="max-w-4xl">
            <h2
              className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-900 tracking-tight leading-[1.2] mb-3"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              Precision Climate Services{' '}
              <span
                className="block not-italic font-medium text-[#0088c6]"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 500 }}
              >
                For Every Need
              </span>
            </h2>
            <p
              className="mt-2 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-light"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              Polar Air Projects Private Limited delivers end-to-end HVAC solutions tailored for commercial, industrial, and high-end residential infrastructure. Driven by decades of technical leadership, we optimize energy efficiency, air quality, and system reliability—from initial project design through long-term operational support.
            </p>
          </div>
        </div>

        {/* 3-Column Services Grid (Matching Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Photo with Inverted Bottom-Right Corner Notch (Matching Reference Image) */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-100 mb-3.5">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Bottom-Right Inverted Notched Pocket */}
                  <div className="absolute bottom-0 right-0 bg-white p-2 sm:p-2.5 rounded-tl-[24px] sm:rounded-tl-[28px] z-10">
                    {/* Inverted Corner Fillet - Left/Bottom */}
                    <svg
                      className="absolute bottom-0 -left-6 sm:-left-7 w-6 h-6 sm:w-7 sm:h-7 text-white fill-current pointer-events-none"
                      viewBox="0 0 28 28"
                      aria-hidden="true"
                    >
                      <path d="M0 28 C15.464 28 28 12.536 28 0 L28 28 Z" />
                    </svg>

                    {/* Inverted Corner Fillet - Top/Right */}
                    <svg
                      className="absolute -top-6 sm:-top-7 right-0 w-6 h-6 sm:w-7 sm:h-7 text-white fill-current pointer-events-none"
                      viewBox="0 0 28 28"
                      aria-hidden="true"
                    >
                      <path d="M0 28 C15.464 28 28 12.536 28 0 L28 28 Z" />
                    </svg>

                    {/* Sleek 1px Icon (Transparent background, no border, 20% larger) */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#0088c6] group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3
                  className="font-sans text-lg sm:text-xl font-normal text-[#828789] group-hover:text-[#3c98bd] hover:text-[#3c98bd] transition-colors duration-200 mb-2.5 leading-snug tracking-tight"
                  style={{ fontFamily: 'sans-serif', fontWeight: 400 }}
                >
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className="text-[14px] sm:text-[15px] lg:text-[16px] text-slate-500 leading-relaxed line-clamp-4 mb-4 sm:mb-6 font-light"
                  style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                >
                  {service.description}
                </p>
              </div>

              {/* Know More Action Link (Darker by 30% with sleek long tail 1px arrow) */}
              <div className="pt-3 border-t border-slate-100/90 flex items-center">
                <span
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-light text-slate-700 group-hover:text-[#0088c6] transition-colors"
                  style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
                >
                  <span style={{ fontWeight: 300 }}>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-slate-700 group-hover:text-[#0088c6] stroke-[1]" />
                </span>
              </div>
            </div>
          ))}
        </div>
        </SmoothReveal>
      </div>
    </section>
  );
};
