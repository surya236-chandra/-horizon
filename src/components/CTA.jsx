import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      style={{
        padding: '180px 24px',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className="reveal"
    >
      {/* Intense centered radial glow */}
      <div 
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 168, 214, 0.1) 0%, rgba(121, 205, 249, 0.05) 50%, transparent 100%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div 
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}
      >
        <span 
          style={{ 
            fontSize: '11px', 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--accent-rose)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            display: 'inline-block', 
            marginBottom: '28px',
            border: '1px solid rgba(236, 168, 214, 0.15)',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(236, 168, 214, 0.03)'
          }}
        >
          Partner With Us
        </span>
        
        <h2 
          style={{
            fontSize: 'clamp(30px, 7.5vw, 84px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            marginBottom: '32px',
            fontFamily: 'var(--font-sans)'
          }}
        >
          Let’s Build Something <br />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-rose)' }}>Extraordinary</span>
        </h2>

        <p 
          style={{
            fontSize: 'clamp(16px, 2.5vw, 19px)',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto 48px auto'
          }}
        >
          Ready to scale beyond limits? Partner with our growth marketing and web development teams to launch high-ROI campaigns and build custom React platforms.
        </p>

        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          <a 
            href="#contact"
            onClick={scrollToContact}
            className="btn btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '15px',
              gap: '8px',
              boxShadow: '0 0 40px rgba(236, 168, 214, 0.2)'
            }}
          >
            Launch Your Campaign <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
