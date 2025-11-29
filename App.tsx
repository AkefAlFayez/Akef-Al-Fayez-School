import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { NewsFeed } from './components/NewsFeed';
import { Schedule } from './components/Schedule';
import { Contact } from './components/Contact';
import { Dedication } from './components/Dedication';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="news">
          <NewsFeed />
        </section>

        <section id="schedule">
          <Schedule />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="dedication">
          <Dedication />
        </section>
      </main>

      <Footer />

      {/* Floating Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 bg-[#0A3E91] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover-shake ${
          showScrollBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="العودة للأعلى"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;