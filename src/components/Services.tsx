import React from 'react';
import { Flame, Thermometer, Droplet, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Gas Engineering',
    desc: 'Gas Safe registered engineers handling boiler installations, servicing, repairs and gas safety certificates for homes and businesses.',
    points: ['Boiler installation', 'Gas safety certs', 'Leak detection'],
  },
  {
    icon: Thermometer,
    title: 'Heating Solutions',
    desc: 'Full central heating systems, radiator installations, power flushing and smart heating controls — designed for efficiency and warmth.',
    points: ['Central heating', 'Radiators & valves', 'Smart thermostats'],
  },
  {
    icon: Droplet,
    title: 'Plumbing Services',
    desc: 'From dripping taps to full bathroom installs, our experienced plumbers deliver clean, reliable work on every job — big or small.',
    points: ['Bathroom installs', 'Leak repairs', 'Pipework & drainage'],
  },
  {
    icon: Zap,
    title: 'Electrical Work',
    desc: 'Qualified electricians providing rewires, fuse board upgrades, EICR testing, lighting and full domestic & commercial installations.',
    points: ['Full rewires', 'Fuse boards', 'EICR testing'],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#05090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-[#f58200]" />
            <span className="text-[#f58200] text-xs font-bold tracking-[0.3em] uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            Specialists In Every<br />Trade That Matters
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Four core services. One trusted team. Whether it's a quick fix or a full installation, Complete Property Solutions delivers the same exceptional standard every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#111719] border border-white/5 hover:border-[#f58200]/50 p-8 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f58200]/10 cursor-pointer"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-white/5 font-black text-6xl group-hover:text-[#f58200]/10 transition-colors">
                  0{idx + 1}
                </div>

                <div className="relative">
                  <div className="w-16 h-16 bg-[#f58200]/10 border border-[#f58200]/30 group-hover:bg-[#f58200] flex items-center justify-center mb-6 rounded-sm transition-all">
                    <Icon className="text-[#f58200] group-hover:text-black transition-colors" size={30} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{service.desc}</p>

                  <ul className="space-y-2 mb-6 pb-6 border-b border-white/10">
                    {service.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <span className="w-1 h-1 bg-[#f58200] rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#f58200] font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
                    GET A QUOTE <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
