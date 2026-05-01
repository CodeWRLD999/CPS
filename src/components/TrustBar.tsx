import React from 'react';
import { Award, Hammer, Building2, MapPin } from 'lucide-react';

const items = [
  { icon: Award, title: 'Fully Qualified', desc: 'Gas Safe registered & qualified electricians' },
  { icon: Hammer, title: 'Quality Workmanship', desc: 'High standards on every single job' },
  { icon: Building2, title: 'Domestic & Commercial', desc: 'Homes, landlords & businesses' },
  { icon: MapPin, title: 'Trusted Local Business', desc: 'Proudly serving Derby & beyond' },
];

const TrustBar: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0a0f11] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-start gap-4 group">
                <div className="w-14 h-14 bg-[#f58200] flex items-center justify-center rounded-sm group-hover:scale-105 transition-transform">
                  <Icon className="text-black" size={26} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
