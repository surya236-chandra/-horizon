import React from 'react';
import { ArrowUp } from 'lucide-react';
import monogram from '../assets/monogram.png';

const WhatsappIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GmailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        padding: '60px 24px 24px 24px',
        backgroundColor: '#000000',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        {/* Top half */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px'
          }}
          className="grid-container grid-md-12"
        >
          {/* Logo & Tagline */}
          <div className="md-col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#ffffff',
                width: 'fit-content'
              }}
            >
              <img 
                src={monogram} 
                alt="Hashtag Horizon Monogram" 
                style={{ 
                  height: '36px', 
                  width: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 0 8px rgba(159, 63, 255, 0.45))'
                }} 
              />
              <span 
                className="logo-text-gradient"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '20px',
                  letterSpacing: '-0.02em'
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
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.5 }}>
              Scaling Beyond Limits. Creating cinematic digital products, SaaS UI systems, and AI processes.
            </p>
            <div style={{ marginTop: '8px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                // Office Address
              </span>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.4 }}>
                Near Barista Cafe, Omaxe, Vrindavan 281121
              </p>
            </div>
          </div>

          {/* Navigation Links column */}
          <div className="md-col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Navigation</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Work', id: 'work' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map(link => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social icons Column */}
          <div className="md-col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Socials</span>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: WhatsappIcon, url: 'https://wa.me/919235869319?text=Hi%20Hashtag%20Horizon%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20to%20scale%20our%20business.', label: 'WhatsApp' },
                { icon: InstagramIcon, url: 'https://www.instagram.com/hashtaghorizonofficial?igsh=YWQxb25qMW5sYzBv', label: 'Instagram' },
                { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/hashtag-horizon-216799411?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
                { icon: GmailIcon, url: 'mailto:info@hashtaghorizon.in', label: 'Gmail' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                const isMail = soc.url.startsWith('mailto:');
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    aria-label={soc.label}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      backgroundColor: 'rgba(255, 255, 255, 0.01)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Giant Outlined Brand Text */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '24px 0 8px 0',
            overflow: 'hidden',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        >
          <span 
            style={{
              fontSize: 'clamp(60px, 15vw, 240px)',
              fontWeight: 800,
              color: 'rgba(255, 255, 255, 0.02)',
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.16)',
              fontFamily: 'var(--font-sans)',
              textTransform: 'uppercase',
              lineHeight: 0.8,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              display: 'block',
              width: '100%'
            }}
          >
            #HORIZON
          </span>
        </div>

        {/* Bottom half */}
        <div 
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span>© {currentYear} HASHTAG HORIZON INC. ALL RIGHTS RESERVED.</span>
          
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', letterSpacing: '0.05em' }}>
            DEVELOPED BY{' '}
            <a 
              href="https://www.chandra.design/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="chandra-pulse-link"
              style={{ 
                background: 'linear-gradient(90deg, var(--accent-rose), var(--accent-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none', 
                fontWeight: 700,
                fontSize: '13.5px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.35) drop-shadow(0 0 10px rgba(236, 168, 214, 0.9))';
                e.currentTarget.style.transform = 'scale(1.06) translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = '';
                e.currentTarget.style.transform = '';
              }}
            >
              chandra.design
            </a>
          </span>

          <a 
            href="#top" 
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(255, 255, 255, 0.4)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            BACK TO TOP <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
