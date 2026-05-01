import React, { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#05090a]/95 backdrop-blur-md border-b border-white/10' : 'bg-gradient-to-b from-[#05090a]/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#f58200] flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-lg">CPS</span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-bold text-sm tracking-wide">COMPLETE PROPERTY</span>
              <span className="text-[#f58200] font-bold text-xs tracking-[0.2em]">SOLUTIONS</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-white/80 hover:text-[#f58200] font-medium text-sm tracking-wide transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:07888845786"
              className="hidden md:inline-flex items-center gap-2 bg-[#f58200] hover:bg-[#ff9420] text-black font-bold px-5 py-2.5 rounded-sm transition-all shadow-lg hover:shadow-[#f58200]/30 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span className="text-sm">07888 845 786</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 border-t border-white/10">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-white/80 hover:text-[#f58200] hover:bg-white/5 font-medium py-3 px-3 rounded-sm transition-colors uppercase tracking-wide text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:07888845786"
                className="mt-3 inline-flex items-center justify-center gap-2 bg-[#f58200] text-black font-bold px-5 py-3 rounded-sm"
              >
                <Phone size={16} /> 07888 845 786
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
