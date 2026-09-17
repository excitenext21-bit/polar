import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/hvacData';
import { BrandLogo } from './BrandLogo';
import { SmoothReveal } from './SmoothReveal';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenEstimator?: () => void;
}

// WhatsApp SVG Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.83.81 2.796.81h.001c3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.768-5.77-5.768zm7.424 5.766c-.001 4.099-3.336 7.433-7.428 7.433-1.258 0-2.434-.328-3.467-.901l-4.102 1.076 1.095-4c-.649-1.077-1.002-2.316-1.002-3.608.001-4.099 3.336-7.433 7.428-7.433 4.094 0 7.426 3.334 7.426 7.433z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: `https://wa.me/${BUSINESS_INFO.phoneRaw.replace(/[^0-9]/g, '')}?text=Hello%20PolarAir%2C%20I%20would%20like%20to%20inquire%20about%20HVAC%20services.`,
    icon: WhatsAppIcon,
    hoverClass: 'hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    hoverClass: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
    hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10',
  },
];

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenEstimator }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#020b14] text-white pt-14 pb-8 overflow-hidden border-t border-white/[0.08]"
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      {/* Ultra-Sleek Top Luminous Gradient Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0088c6]/50 via-[#47d847]/30 to-transparent pointer-events-none" />

      {/* Subtle Ambient Background Nebula */}
      <div className="absolute -top-32 left-1/3 w-[550px] h-[350px] bg-[#0088c6]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[300px] bg-[#47d847]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SmoothReveal>
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.07]">
            {/* Column 1: Brand Identity & Quick Contact (Span 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="inline-flex focus:outline-none"
                  aria-label="Polar Air"
                >
                  <BrandLogo variant="light" className="h-9 sm:h-10 w-auto" />
                </a>

                <p className="text-slate-300 text-[14px] leading-relaxed font-light max-w-sm" style={{ fontWeight: 300 }}>
                  Pioneering precision HVAC engineering, consultation, and turnkey climate installations across India. Empowering commercial facilities, industrial cleanrooms, and luxury residences with high-efficiency thermal performance.
                </p>

              </div>

              {/* Direct Action Contacts */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="group flex items-center gap-3 text-[13px] text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0088c6] group-hover:border-[#0088c6]/40 transition-colors">
                    <Phone className="w-3.5 h-3.5 stroke-[1]" />
                  </div>
                  <span className="font-light">{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="group flex items-center gap-3 text-[13px] text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0088c6] group-hover:border-[#0088c6]/40 transition-colors">
                    <Mail className="w-3.5 h-3.5 stroke-[1]" />
                  </div>
                  <span className="font-light">{BUSINESS_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Column 2: Our Services (Span 2.5) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-200 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0088c6]" />
                Services
              </h4>
              <ul className="space-y-2.5 text-[14px] text-slate-300 font-light" style={{ fontWeight: 300 }}>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Heating Systems
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Ventilation &amp; Ducting
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Air Conditioning (VRV / VRF)
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Engineering Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Equipment Sales &amp; Audits
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Installation &amp; AMC Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company Links (Span 2.5) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-200 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#47d847]" />
                Company
              </h4>
              <ul className="space-y-2.5 text-[14px] text-slate-300 font-light" style={{ fontWeight: 300 }}>
                <li>
                  <a
                    href="#about-us"
                    onClick={(e) => scrollToSection(e, 'about-us')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    About Polar Air
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    onClick={(e) => scrollToSection(e, 'why-choose-us')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, 'projects')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#tools"
                    onClick={(e) => scrollToSection(e, 'tools')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    8 Engineering Pillars
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    onClick={(e) => scrollToSection(e, 'faqs')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    FAQs
                  </a>
                </li>
                {onOpenBooking && (
                  <li>
                    <button
                      onClick={onOpenBooking}
                      className="text-[#0088c6] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-left cursor-pointer"
                    >
                      Schedule Service →
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 4: Official Regional Offices (Span 3) */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-xs uppercase tracking-widest text-slate-200 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Regional Offices
              </h4>

              {/* Pune HQ Minimal Card */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-1.5">
                <div className="flex items-center gap-2 text-white text-xs font-medium tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-[#0088c6] shrink-0 stroke-[1]" />
                  <span>Pune Headquarters</span>
                </div>
                <p className="text-[12px] text-slate-400 font-light leading-relaxed" style={{ fontWeight: 300 }}>
                  {BUSINESS_INFO.puneOffice.line1} {BUSINESS_INFO.puneOffice.line2}
                </p>
                <div className="pt-1 text-[11px] text-slate-300">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Mumbai Office Minimal Card */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-1.5">
                <div className="flex items-center gap-2 text-white text-xs font-medium tracking-wide">
                  <MapPin className="w-3.5 h-3.5 text-[#47d847] shrink-0 stroke-[1]" />
                  <span>Mumbai Office</span>
                </div>
                <p className="text-[12px] text-slate-400 font-light leading-relaxed" style={{ fontWeight: 300 }}>
                  {BUSINESS_INFO.mumbaiOffice.line1}, {BUSINESS_INFO.mumbaiOffice.line3}
                </p>
                <div className="pt-1 text-[11px] text-slate-300">
                  <a href={`tel:${BUSINESS_INFO.mumbaiOffice.phoneRaw}`} className="hover:text-white transition-colors">
                    {BUSINESS_INFO.mumbaiOffice.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sleek Bottom Bar with Social Media & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-slate-400 font-light" style={{ fontWeight: 300 }}>
            {/* Copyright Statement */}
            <div className="text-center sm:text-left">
              <span>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All Rights Reserved.</span>
            </div>

            {/* Modern Social Media Icon Badges */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className={`w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 ${item.hoverClass}`}
                >
                  <item.icon className="w-3.5 h-3.5 stroke-[1]" />
                </a>
              ))}
            </div>

            {/* Tagline & Region */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>Design for Comfort</span>
              <span className="text-white/20">•</span>
              <span>Maharashtra, India</span>
            </div>
          </div>
        </SmoothReveal>
      </div>
    </footer>
  );
};
