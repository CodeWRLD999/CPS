import React from 'react';
import { Check } from 'lucide-react';

const points = [
  'Reliable response times — we turn up when we say we will',
  'Transparent pricing — no hidden costs or surprise bills',
  'Clean, tidy work — we leave your property as we found it',
  'Fully qualified, insured & Gas Safe registered',
  'Trusted by homeowners, landlords & local businesses',
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-[#05090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* 📸 Image */}
          <div className="relative order-2 lg:order-1">
            {/* Orange border accent (desktop only so mobile doesn’t look cramped) */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full border-2 border-[#f58200] rounded-sm" />

            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/picture3.png"
                alt="Boiler installation with CPS branding"
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05090a]/60 to-transparent" />
            </div>
          </div>

          {/* 📄 Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-[#f58200]" />
              <span className="text-[#f58200] text-xs font-bold tracking-[0.3em] uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Built On Trust,<br />
              Delivered With <span className="text-[#f58200]">Pride</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
              Complete Property Solutions is a Derby-based team of qualified tradesmen offering a complete, reliable service across gas, heating, plumbing and electrical work.
            </p>

            <p className="text-white/60 leading-relaxed mb-8 text-sm sm:text-base">
              Whether you're a homeowner needing a new boiler, a landlord managing safety certificates, or a business requiring full-property maintenance — we bring the same professional standard to every job. No shortcuts. No gimmicks. Just honest, quality work.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#f58200] flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5">
                    <Check className="text-black" size={14} strokeWidth={3} />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base">{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://api.whatsapp.com/message/G46WW4LTICNGL1?autoload=1&app_absent=0"
              className="inline-flex items-center gap-2 bg-[#f58200] hover:bg-[#ff9420] text-black font-bold px-6 sm:px-7 py-3 sm:py-4 rounded-sm transition-all hover:-translate-y-0.5"
            >
              SPEAK TO OUR TEAM
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;