import React, { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, ChevronDown, Menu, X, ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { ArrowRight } from './SleekArrow';
import { BUSINESS_INFO } from '../data/hvacData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenEstimator: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenEstimator, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setAboutDropdown(false);
    setServicesDropdown(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-header-slide-down">
      {/* Top Navigation Bar: Phone & Email with sleek 1px icons, 1px horizontal line below, transparent */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1428] border-b border-white/[0.08] py-1.5 shadow-sm'
            : 'bg-transparent border-b border-white/10 py-2 sm:py-2.5'
        }`}
        style={{ backgroundColor: isScrolled ? '#0A1428' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-[13px]">
          {/* Phone and Email with sleek 1px icons */}
          <div className="flex items-center gap-3 sm:gap-6 text-slate-200">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="topbar-phone-link"
              className="group inline-flex items-center gap-1.5 sm:gap-2 hover:text-[#0088c6] transition-colors font-light tracking-wide text-xs sm:text-[13px]"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <Phone className="w-3.5 h-3.5 text-[#0088c6] group-hover:text-white transition-colors shrink-0 stroke-[1]" strokeWidth={1} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <span className="hidden sm:inline text-white/20 select-none">|</span>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              id="topbar-email-link"
              className="hidden sm:inline-flex group items-center gap-1.5 sm:gap-2 hover:text-[#0088c6] transition-colors font-light tracking-wide text-xs sm:text-[13px]"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <Mail className="w-3.5 h-3.5 text-[#0088c6] group-hover:text-white transition-colors shrink-0 stroke-[1]" strokeWidth={1} />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          {/* Right side Social Media Line Icons (1px sleek stroke) */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-slate-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-300 hover:text-[#0088c6] transition-colors p-0.5 group"
            >
              <Facebook className="w-3.5 h-3.5 stroke-[1] text-slate-300 group-hover:text-white transition-colors" strokeWidth={1} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-slate-300 hover:text-[#0088c6] transition-colors p-0.5 group"
            >
              <Instagram className="w-3.5 h-3.5 stroke-[1] text-slate-300 group-hover:text-white transition-colors" strokeWidth={1} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-[#0088c6] transition-colors p-0.5 group"
            >
              <Linkedin className="w-3.5 h-3.5 stroke-[1] text-slate-300 group-hover:text-white transition-colors" strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A1428] border-b border-white/[0.08] py-3 shadow-2xl' 
            : 'bg-transparent border-b border-white/[0.08] py-3.5 sm:py-4'
        }`}
        style={{ backgroundColor: isScrolled ? '#0A1428' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with contrast-aware light logo for dark header background */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group shrink-0 focus:outline-none"
            id="brand-logo-link"
            aria-label="Polar Air Home"
          >
            <BrandLogo
              variant="navbar"
              className="h-9 sm:h-10 md:h-11 transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links (Right Aligned) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-200 ml-auto mr-6 xl:mr-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`transition-colors hover:text-white ${
                activeSection === 'home' ? 'text-white font-semibold' : 'text-slate-200'
              }`}
            >
              Home
            </a>

            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <a
                href="#about-us"
                onClick={(e) => handleNavClick(e, '#about-us')}
                className={`flex items-center gap-1 transition-colors hover:text-white ${
                  activeSection === 'about-us' ? 'text-white font-semibold' : 'text-slate-200'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
              </a>

              {aboutDropdown && (
                <div className="absolute top-full left-0 pt-2 w-52 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="bg-[#03111e] border border-white/10 rounded-xl p-2 shadow-2xl space-y-1 backdrop-blur-xl">
                    <a
                      href="#about-us"
                      onClick={(e) => handleNavClick(e, '#about-us')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      About Polar Air
                    </a>
                    <a
                      href="#why-choose-us"
                      onClick={(e) => handleNavClick(e, '#why-choose-us')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Why Choose Us
                    </a>
                    <a
                      href="#about-us"
                      onClick={(e) => handleNavClick(e, '#about-us')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Our Management
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className={`flex items-center gap-1 transition-colors hover:text-white ${
                  activeSection === 'services' ? 'text-white font-semibold' : 'text-slate-200'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-0 pt-2 w-60 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="bg-[#03111e] border border-white/10 rounded-xl p-2 shadow-2xl space-y-1 backdrop-blur-xl">
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Heating
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Ventilation
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Air Conditioning
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Consultation
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Sales
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-[#0088c6] transition-colors"
                    >
                      Installation &amp; AMC Service
                    </a>
                  </div>
                </div>
              )}
            </div>



            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className={`transition-colors hover:text-white ${
                activeSection === 'projects' || activeSection === 'process' ? 'text-white font-semibold' : 'text-slate-200'
              }`}
            >
              Projects
            </a>

            <a
              href="#faqs"
              onClick={(e) => handleNavClick(e, '#faqs')}
              className={`transition-colors hover:text-white ${
                activeSection === 'faqs' || activeSection === 'reviews' ? 'text-white font-semibold' : 'text-slate-200'
              }`}
            >
              FAQs
            </a>
          </nav>

          {/* Right Header Controls (White 'Connect' Pill Button) */}
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              id="header-connect-btn"
              className="group relative inline-flex items-center gap-2.5 px-6 py-2 rounded-none border border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white font-light text-sm tracking-wider transition-all duration-300 backdrop-blur-xs shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>Connect</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-none border border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white font-light text-xs tracking-wider transition-all duration-300 overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-light">Connect</span>
              <ArrowRight className="w-3 h-3 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0A1428]/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 shadow-2xl animate-in fade-in duration-200">
            <div className="flex flex-col gap-1 mb-4 text-[15px] font-normal text-slate-200">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="px-3.5 py-3 rounded-lg hover:bg-white/5 hover:text-[#0088c6] active:bg-white/10 transition-colors"
              >
                Home
              </a>
              <a
                href="#about-us"
                onClick={(e) => handleNavClick(e, '#about-us')}
                className="px-3.5 py-3 rounded-lg hover:bg-white/5 hover:text-[#0088c6] active:bg-white/10 transition-colors"
              >
                About Us
              </a>
              <a
                href="#why-choose-us"
                onClick={(e) => handleNavClick(e, '#why-choose-us')}
                className="px-3.5 py-3 rounded-lg hover:bg-white/5 hover:text-[#0088c6] active:bg-white/10 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="px-3.5 py-3 rounded-lg hover:bg-white/5 hover:text-[#0088c6] active:bg-white/10 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="px-3.5 py-3 rounded-lg hover:bg-white/5 hover:text-[#0088c6] active:bg-white/10 transition-colors"
              >
                Projects
              </a>
              <a
                href="#faqs"
                onClick={(e) => handleNavClick(e, '#faqs')}
                className="px-3.5 py-3 rounded-lg hover:bg-white/5 hover:text-[#0088c6] active:bg-white/10 transition-colors"
              >
                FAQs
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group relative w-full flex items-center justify-between py-3 px-4 rounded-none border border-[#0088c6]/80 hover:border-[#0088c6] bg-transparent hover:bg-[#0088c6]/10 text-white font-light text-[14px] tracking-wider transition-all duration-300 overflow-hidden"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#0088c6]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0088c6]" />
                  <span>Call Hotline: {BUSINESS_INFO.phone}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-[#0088c6] relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="group relative w-full flex items-center justify-between py-3 px-4 rounded-none border border-white/20 hover:border-white/50 bg-transparent hover:bg-white/5 text-white font-light text-[14px] tracking-wider transition-all duration-300 overflow-hidden"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0088c6] stroke-[1]" strokeWidth={1} />
                  <span>Email: {BUSINESS_INFO.email}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-white/60 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="group relative w-full flex items-center justify-between py-3 px-4 rounded-none border border-white/80 hover:border-white bg-transparent hover:bg-white/10 text-white font-light text-[14px] tracking-wider transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Schedule Online</span>
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
