import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import monogram from '../assets/monogram.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: mobileMenuOpen 
          ? 'transparent' 
          : (isScrolled ? 'rgba(0, 0, 0, 0.75)' : 'transparent'),
        borderBottom: mobileMenuOpen 
          ? '1px solid transparent' 
          : (isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent'),
        backdropFilter: mobileMenuOpen 
          ? 'none' 
          : (isScrolled ? 'blur(16px)' : 'none'),
        WebkitBackdropFilter: mobileMenuOpen 
          ? 'none' 
          : (isScrolled ? 'blur(16px)' : 'none')
      }}
    >
      <nav 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          zIndex: 50
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'opacity 0.3s ease'
          }}
        >
          <img 
            src={monogram} 
            alt="Hashtag Horizon Monogram" 
            style={{ 
              height: '28px', 
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 0 10px rgba(159, 63, 255, 0.45))'
            }} 
          />
          <span 
            className="logo-text-gradient"
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontWeight: 700, 
              fontSize: '20px', 
              letterSpacing: '-0.03em' 
            }}
          >
            HASHTAG HORIZON
          </span>
          <span 
            className="logo-text-gradient"
            style={{ 
              fontFamily: 'var(--font-mono)', 
              fontWeight: 700,
              fontSize: '9px', 
              marginTop: '4px' 
            }}
          >
            TM
          </span>
        </a>

        {/* Links */}
        <div 
          style={{
            display: 'flex',
            gap: '36px',
            alignItems: 'center'
          }}
          className="hidden md-flex"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="nav-link"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.65)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '8px 0'
              }}
            >
              {item.name}
              <span className="nav-link-line" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div 
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center'
          }}
          className="hidden md-flex"
        >
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: 500,
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#000000',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="md-hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          backgroundColor: '#000000',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '100px 40px 40px 40px',
          gap: '24px',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              style={{
                fontSize: '44px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.6'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            style={{
              padding: '16px 24px',
              fontSize: '15px',
              fontWeight: 500,
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#000000',
              textDecoration: 'none',
              flex: 1,
              textAlign: 'center'
            }}
          >
            Start Project
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .nav-link:hover {
          color: #ffffff !important;
        }
        .nav-link-line {
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #ffffff;
          transition: width 0.3s ease;
        }
        .nav-link:hover .nav-link-line {
          width: 100%;
        }
        .logo-text-gradient {
          background: linear-gradient(135deg, #9f3fff, #7b2cff, #2563ff, #00d2ff, #7b2cff, #9f3fff);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logoGradient 8s ease infinite;
        }
        @keyframes logoGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </header>
  );
}
