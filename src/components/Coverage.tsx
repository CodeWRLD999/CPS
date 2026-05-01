import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Derby', 'Long Eaton', 'Ilkeston', 'Burton-on-Trent',
  'Belper', 'Ripley', 'Heanor', 'Alfreton',
  'Ashbourne', 'Matlock', 'Castle Donington', 'Swadlincote',
];

const Coverage: React.FC = () => {
  return (
    <section id="coverage" className="relative py-24 sm:py-32 bg-[#0a0f11] overflow-hidden">
      {/* Decorative map-like pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #f58200 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-[#f58200]" />
            <span className="text-[#f58200] text-xs font-bold tracking-[0.3em] uppercase">Coverage Area</span>
            <div className="w-12 h-[2px] bg-[#f58200]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
            Proudly Serving Derby<br />& The <span className="text-[#f58200]">East Midlands</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Based in Derby, we cover the surrounding towns and villages across the East Midlands. Not sure if we cover your area? Just give us a call.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 bg-[#111719] border border-white/5 hover:border-[#f58200] px-5 py-4 rounded-sm transition-all hover:-translate-y-0.5"
            >
              <MapPin className="text-[#f58200] flex-shrink-0" size={18} />
              <span className="text-white font-semibold text-sm sm:text-base">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/50 mb-5">Don't see your area listed?</p>
          <a
            href="tel:07888845786"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#f58200] text-[#f58200] hover:bg-[#f58200] hover:text-black font-bold px-7 py-4 rounded-sm transition-all"
          >
            CALL US TO CHECK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
