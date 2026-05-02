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
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-[#05090a]/95 backdrop-blur-md border-b border-white/10'
            : 'bg-gradient-to-b from-[#05090a]/85 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-3">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="flex min-w-0 items-center gap-2 group"
              aria-label="Go to homepage"
            >
              <img
                src="/logo.jpg"
                alt="Complete Property Solutions logo"
                className="h-9 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-[150px] md:h-12 md:max-w-[180px] lg:max-w-none"
              />

              <div className="hidden xl:flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-wide">
                  COMPLETE PROPERTY
                </span>
                <span className="text-[#f58200] font-bold text-xs tracking-[0.2em]">
                  SOLUTIONS
                </span>
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

            <div className="flex shrink-0 items-center gap-3">
              <a
                href="tel:07888845786"
                className="hidden xl:inline-flex items-center gap-2 bg-[#f58200] hover:bg-[#ff9420] text-black font-bold px-5 py-2.5 rounded-sm transition-all shadow-lg hover:shadow-[#f58200]/30 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span className="text-sm">07888 845 786</span>
              </a>

              <a
                href="tel:07888845786"
                className="hidden sm:inline-flex xl:hidden items-center justify-center bg-[#f58200] hover:bg-[#ff9420] text-black font-bold p-3 rounded-sm transition-all"
                aria-label="Call Complete Property Solutions"
              >
                <Phone size={18} />
              </a>

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="lg:hidden text-white p-2 rounded-sm hover:bg-white/10 transition"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden fixed top-20 left-0 right-0 z-50 bg-[#05090a] border-t border-white/10 border-b border-white/10 shadow-2xl">
              <nav className="flex flex-col gap-1 px-4 py-5">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/85 hover:text-[#f58200] hover:bg-white/5 font-bold py-4 px-4 rounded-sm transition-colors uppercase tracking-wide text-sm"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="tel:07888845786"
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-[#f58200] hover:bg-[#ff9420] text-black font-black px-5 py-4 rounded-sm transition"
                >
                  <Phone size={18} />
                  07888 845 786
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;