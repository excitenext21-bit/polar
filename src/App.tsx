/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServicesSection } from './components/ServicesSection';
import { ToolsSection } from './components/ToolsSection';
import { CoolAirCTA } from './components/CoolAirCTA';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { SocialSideDrawer } from './components/SocialSideDrawer';
import { FloatingScrollToTop } from './components/FloatingScrollToTop';
import { PagePreloader } from './components/PagePreloader';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEstimatorModalOpen, setIsEstimatorModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('24/7 Emergency AC Repair');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about-us',
        'why-choose-us',
        'services',
        'tools',
        'projects',
        'process',
        'faqs',
        'reviews',
        'contact',
      ];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    setIsBookingModalOpen(true);
  };

  const handleApplyEstimateToBooking = (service: string) => {
    setSelectedServiceForBooking(service);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#041624] text-slate-100 flex flex-col font-sans antialiased selection:bg-[#47d847] selection:text-black">
      {/* Sleek Website Onload Entrance Animation */}
      <PagePreloader />

      {/* 1. Header with Lunveris Monogram & Navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenEstimator={() => setIsEstimatorModalOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-grow animate-page-fade-in">
        {/* Section 1: Dark Hero (Centered Display Headline, Review Pill, Neon Green CTA, Team visual, Certified OEM ticker) */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenEstimator={() => setIsEstimatorModalOpen(true)}
        />

        {/* Section 2: About Us (Header with black pill button, 3 cards: Lilac tags, Center live consultation feed, Yellow activity chart) */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section: Why Choose Us (Wavy ribbon banner with Vision, Values, Approach, Promise floating cards matching reference image) */}
        <WhyChooseUsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 3: Our Service (Left narrative, Right interactive services list with hover card & green arrow button) */}
        <ServicesSection
          onSelectServiceForBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
          onOpenEstimator={() => setIsEstimatorModalOpen(true)}
        />

        {/* Section 6: Tools & Standards (Interactive circular node graph on left, narrative on right) */}
        <ToolsSection />

        {/* Section 7: Process Overview (Image 1 reference layout with Image 2 hover flip effect) */}
        <ProcessSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 100% Full-Width Blue CTA Section: Let Your Family Enjoy The Cool Air */}
        <CoolAirCTA
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 8: Client Testimonials (Redesigned as per reference layout with 8 testimonials & smooth animations) */}
        <TestimonialsSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Modern Multi-Column Dark Footer with Contact Details */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenEstimator={() => setIsEstimatorModalOpen(true)}
      />

      {/* Floating Upward Arrow (Scroll To Top) Button */}
      <FloatingScrollToTop />

      {/* Floating Vertical Social Media Side Drawer */}
      <SocialSideDrawer />

      {/* Interactive Booking & Cost Estimator Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedServiceForBooking}
      />

      <CostEstimatorModal
        isOpen={isEstimatorModalOpen}
        onClose={() => setIsEstimatorModalOpen(false)}
        onApplyToBooking={handleApplyEstimateToBooking}
      />
    </div>
  );
}
