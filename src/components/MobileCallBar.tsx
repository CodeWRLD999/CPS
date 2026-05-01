import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const MobileCallBar: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#05090a]/95 backdrop-blur-md border-t border-white/10 p-3 flex gap-2">
      <a
        href="tel:07888845786"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f58200] text-black font-bold py-3.5 rounded-sm"
      >
        <Phone size={18} /> CALL NOW
      </a>
      <button
        onClick={scrollToContact}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold py-3.5 rounded-sm"
      >
        <MessageSquare size={18} /> QUOTE
      </button>
    </div>
  );
};

export default MobileCallBar;
