import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#f58200] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-[#f58200] flex items-center justify-center rounded-sm">
                <span className="text-black font-black">CPS</span>
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-sm">COMPLETE PROPERTY</div>
                <div className="text-[#f58200] font-bold text-xs tracking-[0.2em]">SOLUTIONS</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Trusted Derby tradesmen specialising in gas, heating, plumbing and electrical services for homes and businesses across the East Midlands.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61587407034378" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-[#111719] hover:bg-[#f58200] border border-white/10 hover:border-[#f58200] flex items-center justify-center rounded-sm transition-all group">
                <Facebook className="text-white group-hover:text-black" size={18} />
              </a>
              <a href="https://www.instagram.com/cpscompletepropertysolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-[#111719] hover:bg-[#f58200] border border-white/10 hover:border-[#f58200] flex items-center justify-center rounded-sm transition-all group">
                <Instagram className="text-white group-hover:text-black" size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {['Gas Engineering', 'Heating Solutions', 'Plumbing Services', 'Electrical Work'].map((s) => (
                <li key={s}>
                  <a href="#services" onClick={scrollTo('#services')} className="text-white/60 hover:text-[#f58200] text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { l: 'Home', h: '#home' },
                { l: 'About Us', h: '#about' },
                { l: 'Coverage Area', h: '#coverage' },
                { l: 'Get a Quote', h: '#contact' },
              ].map((l) => (
                <li key={l.h}>
                  <a href={l.h} onClick={scrollTo(l.h)} className="text-white/60 hover:text-[#f58200] text-sm transition-colors">
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:07888845786" className="flex items-start gap-3 text-white/60 hover:text-[#f58200] text-sm transition-colors">
                  <Phone size={16} className="text-[#f58200] mt-0.5 flex-shrink-0" />
                  <span>07888 845 786</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@CPScompletepropertysolutions.co.uk" className="flex items-start gap-3 text-white/60 hover:text-[#f58200] text-sm transition-colors">
                  <Mail size={16} className="text-[#f58200] mt-0.5 flex-shrink-0" />
                  <span className="break-all">info@CPScompletepropertysolutions.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-[#f58200] mt-0.5 flex-shrink-0" />
                <span>Derby, East Midlands, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Complete Property Solutions. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Gas Safe Registered · Fully Insured · Derby, UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
