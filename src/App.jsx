import React, { useEffect, useState } from 'react';
import { MessageSquare, X, Mail, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

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

      {/* Floating Action Button for Contacts */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          right: '30px', 
          zIndex: 9999, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '12px' 
        }}
      >
        {/* Expanded Contact Icons list */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: showFloatingMenu ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
            opacity: showFloatingMenu ? 1 : 0,
            pointerEvents: showFloatingMenu ? 'auto' : 'none'
          }}
        >
          {/* WhatsApp */}
          <a 
            href="https://wa.me/919235869319?text=Hi%20Hashtag%20Horizon%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20to%20scale%20our%20business." 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Chat on WhatsApp"
            className="floating-sub-btn"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <MessageCircle size={20} />
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/hashtaghorizonofficial?igsh=YWQxb25qMW5sYzBv" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram Profile"
            className="floating-sub-btn"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(220, 39, 67, 0.35)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <InstagramIcon size={20} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/hashtag-horizon-216799411?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="floating-sub-btn"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#0077b5',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 119, 181, 0.35)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <LinkedinIcon size={20} />
          </a>

          {/* Gmail */}
          <a 
            href="mailto:info@hashtaghorizon.in" 
            aria-label="Send Email"
            className="floating-sub-btn"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#ea4335',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(234, 67, 53, 0.35)',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Main Floating Trigger Button */}
        <button 
          onClick={() => setShowFloatingMenu(!showFloatingMenu)}
          aria-label="Toggle Contact Links"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.25), 0 0 15px rgba(159, 63, 255, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: showFloatingMenu ? 'rotate(90deg)' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = showFloatingMenu ? 'rotate(90deg) scale(1.05)' : 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 255, 255, 0.35), 0 0 25px rgba(159, 63, 255, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = showFloatingMenu ? 'rotate(90deg)' : 'none';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.25), 0 0 15px rgba(159, 63, 255, 0.4)';
          }}
        >
          {showFloatingMenu ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .floating-sub-btn:hover {
          transform: scale(1.1) translateY(-2px);
        }
      `}} />
    </div>
  );
}
