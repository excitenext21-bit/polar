import React from 'react';
import { ArrowRight } from './SleekArrow';

interface BlogSectionProps {
  onOpenBooking: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const articles = [
    {
      title: 'The Role of System Efficiency in Lowering Summer Utility Bills',
      date: 'January 2, 2026',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      category: 'Energy Efficiency',
    },
    {
      title: 'How Modern SEER2 Heat Pumps Handle Scorching 105° Heatwaves',
      date: 'January 2, 2026',
      image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=600&h=400&fit=crop',
      category: 'System Upgrades',
    },
    {
      title: '5 Warning Signs Your AC Capacitor Is About to Fail in Extreme Heat',
      date: 'January 2, 2026',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      category: 'Emergency Repair',
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View All Button (Matching image.png) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-['General_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[36px] font-light text-slate-950 tracking-tight" style={{ fontFamily: "'General Sans', sans-serif", fontSize: '36px', fontWeight: 300 }}>
              Join Our Home Comfort Community
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-3 px-7 py-3 rounded-none border border-slate-900 hover:border-black bg-slate-950 hover:bg-slate-800 text-white font-light text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-sm overflow-hidden cursor-pointer"
              style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 300 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
              <span className="relative z-10 font-light" style={{ fontWeight: 300 }}>View All Post</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* 3 Modern Cards (Matching image.png) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              onClick={onOpenBooking}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="rounded-3xl overflow-hidden bg-slate-900 aspect-16/10 mb-4 shadow-xs border border-slate-100 group-hover:shadow-md transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition-colors leading-snug">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
