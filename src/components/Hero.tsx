import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Star } from 'lucide-react';

const HERO_IMG = 'https://d64gsuwffb70l.cloudfront.net/69f4ae5bb9f1d161422c55b2_1777643191236_39ab8891.jpg';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#05090a]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="/picture1.jpg" alt="Professional tradesman at work" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05090a] via-[#05090a]/85 to-[#05090a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05090a] via-transparent to-transparent" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#f58200]/40 bg-[#f58200]/10 rounded-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[#f58200] rounded-full animate-pulse" />
            <span className="text-[#f58200] text-xs font-bold tracking-[0.2em] uppercase">Derby & East Midlands</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Complete Solutions
            <br />
            For Your <span className="text-[#f58200]">Property</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light">
            Reliable, professional tradesmen delivering Gas, Heating, Plumbing and Electrical services across Derby and Nottingham. Fully qualified. Fully insured. Built on trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="tel:07888845786"
              className="group inline-flex items-center justify-center gap-3 bg-[#f58200] hover:bg-[#ff9420] text-black font-bold px-8 py-5 rounded-sm transition-all shadow-2xl shadow-[#f58200]/20 hover:shadow-[#f58200]/40 hover:-translate-y-1"
            >
              <Phone size={20} />
              <span className="tracking-wide">CALL NOW: 07888 845 786</span>
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-8 py-5 rounded-sm transition-all hover:bg-white/5"
            >
              <span className="tracking-wide">GET A FREE QUOTE</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#f58200] flex-shrink-0" size={28} />
              <div>
                <div className="text-white font-bold text-sm">Fully Qualified</div>
                <div className="text-white/50 text-xs">& Insured</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="text-[#f58200] flex-shrink-0 fill-[#f58200]" size={28} />
              <div>
                <div className="text-white font-bold text-sm">5-Star Service</div>
                <div className="text-white/50 text-xs">Trusted Locally</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#f58200] font-black text-2xl flex-shrink-0">24/7</div>
              <div>
                <div className="text-white font-bold text-sm">Emergency</div>
                <div className="text-white/50 text-xs">Call-outs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f58200] to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
