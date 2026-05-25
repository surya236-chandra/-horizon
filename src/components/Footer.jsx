import React from 'react';
import { ArrowUp } from 'lucide-react';

const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                gap: '8px',
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '20px',
                letterSpacing: '-0.02em',
                width: 'fit-content'
              }}
            >
              <span>HASHTAG HORIZON</span>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>TM</span>
            </a>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.5 }}>
              Scaling Beyond Limits. Creating cinematic digital products, SaaS UI systems, and AI processes.
            </p>
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
                { icon: TwitterIcon, url: '#', label: 'Twitter' },
                { icon: GithubIcon, url: '#', label: 'GitHub' },
                { icon: LinkedinIcon, url: '#', label: 'LinkedIn' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    aria-label={soc.label}
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
            color: 'rgba(255, 255, 255, 0.3)',
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
