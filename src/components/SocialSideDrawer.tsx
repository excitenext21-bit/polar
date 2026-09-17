import React, { useState } from 'react';
import { Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';

export const SocialSideDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SVG Brand Icons
  const WhatsAppIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.83.81 2.796.81h.001c3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.768-5.77-5.768zm7.424 5.766c-.001 4.099-3.336 7.433-7.428 7.433-1.258 0-2.434-.328-3.467-.901l-4.102 1.076 1.095-4c-.649-1.077-1.002-2.316-1.002-3.608.001-4.099 3.336-7.433 7.428-7.433 4.094 0 7.426 3.334 7.426 7.433z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      subtitle: 'Instant Technician Chat',
      href: `https://wa.me/${BUSINESS_INFO.phoneRaw.replace(/[^0-9]/g, '')}?text=Hello%20PolarAir%20HVAC%2C%20I%20would%20like%20to%20inquire%20about%20HVAC%20services.`,
      icon: <WhatsAppIcon />,
      bgHover: 'hover:bg-[#25D366] hover:text-white',
      color: '#25D366',
      badge: 'Online',
    },
    {
      id: 'phone',
      name: '24/7 Dispatch',
      subtitle: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phoneRaw}`,
      icon: <Phone className="w-4 h-4" />,
      bgHover: 'hover:bg-[#0088c6] hover:text-white',
      color: '#0088c6',
      badge: 'Live',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      subtitle: '@polarair.hvac',
      href: 'https://instagram.com',
      icon: <InstagramIcon />,
      bgHover: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white',
      color: '#E1306C',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      subtitle: 'Reviews & Updates',
      href: 'https://facebook.com',
      icon: <FacebookIcon />,
      bgHover: 'hover:bg-[#1877F2] hover:text-white',
      color: '#1877F2',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      subtitle: 'Commercial Projects',
      href: 'https://linkedin.com',
      icon: <LinkedInIcon />,
      bgHover: 'hover:bg-[#0A66C2] hover:text-white',
      color: '#0A66C2',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      subtitle: 'HVAC Video Guides',
      href: 'https://youtube.com',
      icon: <YouTubeIcon />,
      bgHover: 'hover:bg-[#FF0000] hover:text-white',
      color: '#FF0000',
    },
    {
      id: 'email',
      name: 'Email Support',
      subtitle: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      icon: <Mail className="w-4 h-4" />,
      bgHover: 'hover:bg-sky-500 hover:text-white',
      color: '#38bdf8',
    },
  ];

  return (
    <aside
      aria-label="Social Media & Quick Connect Sidebar"
      className="fixed right-0 bottom-24 sm:bottom-28 z-40 select-none flex items-center transition-transform duration-300 ease-out"
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(calc(100% - 30px))',
      }}
    >
      {/* Attached Toggle Handle - Remains pinned to the drawer at all times */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Collapse social sidebar' : 'Open social sidebar'}
        className="w-[30px] bg-[#041624]/95 hover:bg-[#07243a] text-white py-3 px-1.5 rounded-none border-l border-y border-white/15 shadow-[-4px_0_15px_rgba(0,0,0,0.35)] backdrop-blur-md flex flex-col items-center gap-2 cursor-pointer transition-colors shrink-0"
        title={isOpen ? 'Close sidebar' : 'Open social connect'}
      >
        <div className="relative">
          <span className="w-2 h-2 rounded-none bg-[#47d847] animate-ping absolute inset-0"></span>
          <span className="w-2 h-2 rounded-none bg-[#47d847] block"></span>
        </div>

        {isOpen ? (
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 text-slate-300" />
        )}

        <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] font-light tracking-widest text-slate-300 hover:text-[#47d847] uppercase transition-colors" style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}>
          {isOpen ? 'CLOSE' : 'CONNECT'}
        </span>
      </button>

      {/* Main Bar Panel */}
      <div className="bg-[#041624]/95 backdrop-blur-md border-y border-l border-white/15 py-3 px-2 shadow-[-6px_0_25px_rgba(0,0,0,0.45)] flex flex-col items-center">
        <ul className="flex flex-col gap-1.5 items-center">
          {socialLinks.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={`relative w-8.5 h-8.5 rounded-none bg-white/5 border border-white/15 text-slate-200 flex items-center justify-center transition-all duration-200 shadow-sm ${item.bgHover} hover:scale-105 active:scale-95 group-hover:border-transparent`}
              >
                {item.icon}

                {item.badge && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#47d847] border border-[#041624]"></span>
                )}
              </a>

              {/* Flyout Hover Tooltip (Slides smoothly to the left) */}
              <div
                role="tooltip"
                className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 z-50 shadow-2xl"
              >
                <div className="bg-[#031320]/95 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl border border-white/15 shadow-2xl flex items-center gap-2 whitespace-nowrap">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight text-white flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="text-[8px] px-1 py-0.2 rounded-full bg-[#47d847]/20 text-[#47d847] font-semibold uppercase">
                          {item.badge}
                        </span>
                      )}
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium leading-tight">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow Pointer */}
                  <div className="w-1.5 h-1.5 bg-[#031320] rotate-45 border-r border-t border-white/15 absolute -right-0.5 top-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
