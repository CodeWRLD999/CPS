import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Gas Engineering', message: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your name, email and phone.');
      return;
    }
    setLoading(true);
    try {
      await fetch('https://famous.ai/api/crm/69f4ae5bb9f1d161422c55b2/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          source: 'contact-form',
          tags: ['quote-request', form.service.toLowerCase().replace(/\s+/g, '-')],
        }),
      });
      setDone(true);
      toast.success("Thanks! We'll be in touch shortly.");
      setForm({ name: '', email: '', phone: '', service: 'Gas Engineering', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#05090a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-12 h-[2px] bg-[#f58200]" />
            <span className="text-[#f58200] text-xs font-bold tracking-[0.3em] uppercase">Get In Touch</span>
            <div className="w-12 h-[2px] bg-[#f58200]" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            Ready To Get<br />Started?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Call us now for an immediate response, or send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="tel:07888845786"
              className="block group bg-[#f58200] hover:bg-[#ff9420] p-8 rounded-sm transition-all hover:-translate-y-1"
            >
              <Phone className="text-black mb-4" size={32} />
              <div className="text-black/70 text-xs font-bold tracking-[0.2em] uppercase mb-1">Call Us Direct</div>
              <div className="text-black font-black text-3xl tracking-tight">07888 845 786</div>
              <div className="text-black/70 text-sm mt-2">Tap to call now</div>
            </a>

            <a
              href="mailto:info@CPScompletepropertysolutions.co.uk"
              className="block bg-[#111719] border border-white/5 hover:border-[#f58200]/50 p-6 rounded-sm transition-all"
            >
              <Mail className="text-[#f58200] mb-3" size={26} />
              <div className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-1">Email</div>
              <div className="text-white font-bold text-sm break-all">info@CPScompletepropertysolutions.co.uk</div>
            </a>

            <div className="bg-[#111719] border border-white/5 p-6 rounded-sm">
              <MapPin className="text-[#f58200] mb-3" size={26} />
              <div className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-1">Location</div>
              <div className="text-white font-bold">Derby, East Midlands</div>
              <div className="text-white/50 text-sm mt-1">Mon – Sat: 8am – 6pm</div>
              <div className="text-white/50 text-sm">24/7 Emergency Call-Outs</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#111719] border border-white/5 p-8 sm:p-10 rounded-sm">
            {done ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="text-[#f58200] mb-5" size={64} />
                <h3 className="text-3xl font-black text-white mb-3">Message Received</h3>
                <p className="text-white/60 mb-8 max-w-md">Thanks for reaching out. We'll review your enquiry and get back to you within 24 hours. For urgent jobs, please call us directly.</p>
                <button
                  onClick={() => setDone(false)}
                  className="bg-[#f58200] hover:bg-[#ff9420] text-black font-bold px-7 py-3 rounded-sm transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h3 className="text-2xl font-black text-white mb-2">Request A Free Quote</h3>
                <p className="text-white/50 text-sm mb-6">Fill in the form below and we'll get straight back to you.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-xs font-bold tracking-wide uppercase mb-2">Your Name *</label>
                    <input
                      name="name" value={form.name} onChange={handle} required
                      className="w-full bg-[#05090a] border border-white/10 focus:border-[#f58200] text-white px-4 py-3.5 rounded-sm outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-bold tracking-wide uppercase mb-2">Phone *</label>
                    <input
                      name="phone" value={form.phone} onChange={handle} required type="tel"
                      className="w-full bg-[#05090a] border border-white/10 focus:border-[#f58200] text-white px-4 py-3.5 rounded-sm outline-none transition-colors"
                      placeholder="07XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-xs font-bold tracking-wide uppercase mb-2">Email *</label>
                  <input
                    name="email" value={form.email} onChange={handle} required type="email"
                    className="w-full bg-[#05090a] border border-white/10 focus:border-[#f58200] text-white px-4 py-3.5 rounded-sm outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-xs font-bold tracking-wide uppercase mb-2">Service Required</label>
                  <select
                    name="service" value={form.service} onChange={handle}
                    className="w-full bg-[#05090a] border border-white/10 focus:border-[#f58200] text-white px-4 py-3.5 rounded-sm outline-none transition-colors"
                  >
                    <option>Gas Engineering</option>
                    <option>Heating Solutions</option>
                    <option>Plumbing Services</option>
                    <option>Electrical Work</option>
                    <option>Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-xs font-bold tracking-wide uppercase mb-2">Tell us about the job</label>
                  <textarea
                    name="message" value={form.message} onChange={handle} rows={4}
                    className="w-full bg-[#05090a] border border-white/10 focus:border-[#f58200] text-white px-4 py-3.5 rounded-sm outline-none transition-colors resize-none"
                    placeholder="Brief description of what you need..."
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#f58200] hover:bg-[#ff9420] disabled:opacity-60 text-black font-bold px-7 py-4 rounded-sm transition-all"
                >
                  {loading ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : <><Send size={20} /> SEND ENQUIRY</>}
                </button>
                <p className="text-white/40 text-xs text-center">We'll never share your details. Reply within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
