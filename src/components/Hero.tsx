import React from 'react';
import { Phone, MessageSquare, ArrowRight, Shield, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#05090a] pt-24 sm:pt-28"
    >
      {/* 📸 Background image (FULL image, centered) */}
      <div className="absolute inset-0 -z-30 flex items-center justify-center bg-[#05090a]">
        <img
          src="/picture2.jpg"
          alt=""
          aria-hidden="true"
          className="max-h-full max-w-full object-contain opacity-50"
        />
      </div>

      {/* 🌑 Overlay for readability */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#05090a] via-[#05090a]/90 to-[#05090a]/70" />

      {/* 📱 Extra mobile darkening */}
      <div className="absolute inset-0 -z-10 bg-[#05090a]/50 md:bg-transparent" />

      {/* subtle grid (optional but looks nice) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-16 sm:py-20">
          
          {/* Location tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[#f58200]/40 bg-[#05090a]/60 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#f58200]" />
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#f58200]">
              Derby & East Midlands
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Complete
            <br />
            Solutions
            <br />
            For Your{' '}
            <span className="text-[#f58200]">Property</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Reliable, professional tradesmen delivering Gas, Heating, Plumbing
            and Electrical services across Derby and Nottingham. Fully
            qualified. Fully insured. Built on trust.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:07888845786"
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#f58200] px-7 py-4 text-base font-black text-black transition hover:bg-[#ff9420] sm:text-lg"
            >
              <Phone size={20} />
              CALL NOW: 07888 845 786
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/25 bg-black/20 px-7 py-4 text-base font-black text-white transition hover:border-[#f58200] hover:text-[#f58200] sm:text-lg"
            >
              <MessageSquare size={20} />
              QUOTE
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Shield className="text-[#f58200]" size={24} />
              <div>
                <p className="font-bold text-white">Fully Qualified</p>
                <p className="text-sm text-white/50">& Insured</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Star className="text-[#f58200]" size={24} />
              <div>
                <p className="font-bold text-white">5-Star Service</p>
                <p className="text-sm text-white/50">Trusted Locally</p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-black text-[#f58200]">24/7</p>
              <p className="text-sm text-white/50">Emergency Call-outs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;