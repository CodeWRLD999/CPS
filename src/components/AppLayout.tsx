import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import TrustBar from './TrustBar';
import About from './About';
import Testimonials from './Testimonials';
import Coverage from './Coverage';
import Contact from './Contact';
import Footer from './Footer';
import MobileCallBar from './MobileCallBar';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05090a] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
      {/* Padding for mobile call bar */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default AppLayout;

