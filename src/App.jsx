import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for reveal animations and scroll progress indicator
  useEffect(() => {
    // 1. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.12, // Trigger when 12% visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // 2. Scroll Progress Calculation
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check for elements already in view on load
    setTimeout(() => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        }
      });
    }, 200);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Noise Film Overlay */}
      <div className="noise-overlay" />

      {/* Page Progress Indicator */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Assembly */}
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
