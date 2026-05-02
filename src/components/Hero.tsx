import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#05090a] pt-28 sm:pt-32"
    >
      {/* 📸 Background Image */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center bg-black">
        <img
          src="/picture2.png"
          alt="Complete Property Solutions van, boiler and marketing display"
          className="h-full w-full object-contain md:object-cover opacity-40"
        />
      </div>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#05090a] via-[#05090a]/90 to-[#05090a]/60" />

      {/* 📱 Extra mobile darkener (text readability) */}
      <div className="absolute inset-0 -z-10 bg-[#05090a]/50 md:hidden" />

      {/* 📦 Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Location Tag */}
          <div className="inline-flex items-center gap-2 mb-6 border border-[#f58200]/40 px-4 py-2 rounded-sm">
            <span className="w-2 h-2 bg-[#f58200] rounded-full" />
            <span className="text-[#f58200] text-xs font-bold tracking-[0.2em] uppercase">
              Derby & East Midlands
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
            Complete <br />
            Solutions <br />
            For Your{' '}
            <span className="text-[#f58200]">Property</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
            Reliable, professional tradesmen delivering Gas, Heating, Plumbing
            and Electrical services across Derby and Nottingham. Fully
            qualified. Fully insured. Built on trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:07888845786"
              className="inline-flex items-center justify-center gap-3 bg-[#f58200] hover:bg-[#ff9420] text-black font-bold px-7 py-4 rounded-sm transition-all text-lg shadow-lg hover:shadow-[#f58200]/30"
            >
              <Phone size={20} />
              CALL NOW: 07888 845 786
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/20 hover:border-[#f58200] text-white font-bold px-7 py-4 rounded-sm transition-all text-lg"
            >
              GET A FREE QUOTE →
            </a>
          </div>

          {/* Trust Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-white font-bold">Fully Qualified</p>
              <p className="text-white/50">& Insured</p>
            </div>

            <div>
              <p className="text-white font-bold">5-Star Service</p>
              <p className="text-white/50">Trusted Locally</p>
            </div>

            <div>
              <p className="text-[#f58200] font-black text-xl">24/7</p>
              <p className="text-white/50">Emergency Call-outs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;