import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Whitmore',
    location: 'Derby',
    service: 'Gas Engineering',
    rating: 5,
    quote:
      "Had a new boiler fitted last month and honestly couldn't fault them. Turned up exactly when they said, kept everything spotless, and the price came in under quote. Would recommend to anyone in Derby.",
  },
  {
    name: 'James Holloway',
    location: 'Long Eaton',
    service: 'Heating Solutions',
    rating: 5,
    quote:
      "Our central heating packed in just before Christmas and these lads came out the same day. Diagnosed the issue, sorted a power flush, and had us back up and running by tea time. Proper professional outfit.",
  },
  {
    name: 'Emma Richardson',
    location: 'Belper',
    service: 'Plumbing Services',
    rating: 5,
    quote:
      "Complete bathroom refurb start to finish. The attention to detail was brilliant — even the little things like silicone work and tile alignment were perfect. Genuinely couldn't be happier with the result.",
  },
  {
    name: 'Daniel Pearce',
    location: 'Ilkeston',
    service: 'Electrical Work',
    rating: 5,
    quote:
      "Needed a full rewire on a Victorian terrace and was nervous about the disruption. The team were tidy, polite and explained every step. EICR certificate sorted, fuse board upgraded, all done in three days.",
  },
  {
    name: 'Mark Davidson',
    location: 'Derby',
    service: 'Gas Engineering',
    rating: 5,
    quote:
      "Landlord here with 6 properties. CPS handle all my gas safety certificates and any callouts. Reliable, fairly priced and tenants always speak well of them. Best tradesmen I've used in 12 years of letting.",
  },
  {
    name: 'Rachel Thompson',
    location: 'Burton-on-Trent',
    service: 'Plumbing Services',
    rating: 5,
    quote:
      "Burst pipe at 9pm on a Sunday — they were at the door within an hour. Sorted the leak, dried things out and didn't charge silly emergency rates. Honest, decent people you can actually trust.",
  },
];

const TestimonialCard: React.FC<{ t: (typeof testimonials)[0] }> = ({ t }) => (
  <div className="relative bg-[#111719] border border-white/5 hover:border-[#f58200]/40 p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
    <Quote className="absolute top-6 right-6 text-[#f58200]/15" size={56} strokeWidth={1.5} />

    <div className="flex gap-1 mb-5">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="text-[#f58200] fill-[#f58200]" size={18} />
      ))}
    </div>

    <p className="text-white/80 leading-relaxed mb-7 flex-1 relative z-10">
      "{t.quote}"
    </p>

    <div className="pt-5 border-t border-white/10 flex items-center gap-4">
      <div className="w-12 h-12 bg-[#f58200] flex items-center justify-center rounded-sm flex-shrink-0">
        <span className="text-black font-black text-lg">
          {t.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </span>
      </div>
      <div className="min-w-0">
        <div className="text-white font-bold text-sm truncate">{t.name}</div>
        <div className="text-white/50 text-xs">
          {t.location} · <span className="text-[#f58200]">{t.service}</span>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Average rating calc
  const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#05090a] overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#f58200]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#f58200]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-[#f58200]" />
            <span className="text-[#f58200] text-xs font-bold tracking-[0.3em] uppercase">Testimonials</span>
            <div className="w-12 h-[2px] bg-[#f58200]" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            What Our Customers<br />Are <span className="text-[#f58200]">Saying</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Real reviews from real customers across Derby and the East Midlands. Honest feedback from homeowners, landlords and businesses we've worked with.
          </p>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 bg-[#111719] border border-white/10 px-6 py-3 rounded-sm">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="text-[#f58200] fill-[#f58200]" size={18} />
              ))}
            </div>
            <div className="text-white font-bold">{avg} / 5.0</div>
            <div className="w-px h-5 bg-white/10" />
            <div className="text-white/60 text-sm">Based on {testimonials.length}+ reviews</div>
          </div>
        </div>

        {/* Desktop / Tablet grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 bg-[#111719] border border-white/10 hover:border-[#f58200] hover:bg-[#f58200] flex items-center justify-center rounded-sm transition-all group"
            >
              <ChevronLeft className="text-white group-hover:text-black" size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-[#f58200]' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 bg-[#111719] border border-white/10 hover:border-[#f58200] hover:bg-[#f58200] flex items-center justify-center rounded-sm transition-all group"
            >
              <ChevronRight className="text-white group-hover:text-black" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
