import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GridLayout from './GridLayout';

// Custom lightweight high-performance count-up component
const AnimatedNumber = ({ end, decimals = 0, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutQuad curve
      const val = progress * (2 - progress) * end;
      setCount(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toFixed(decimals)}{suffix}</span>;
};

export default function Hero() {
  const [lettersInView, setLettersInView] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWordVisible, setIsWordVisible] = useState(true);

  const words = ["convert", "scale", "engage", "inspire", "succeed", "innovate"];
  const currentWord = words[wordIndex];

  useEffect(() => {
    // Trigger letter animations after a small delay
    const timer = setTimeout(() => {
      setLettersInView(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Trigger exit animation
      setIsWordVisible(false);

      // 2. Swap word and trigger enter animation
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsWordVisible(true);
      }, 700); // Allow time for exit animation
    }, 3800); // Change word every 3.8 seconds

    return () => clearInterval(interval);
  }, []);

  const colors = [
    'rgb(236, 168, 214)', // Rose
    'rgb(197, 151, 235)', // Purple
    'rgb(158, 152, 250)', // Light blue
    'rgb(121, 205, 249)', // Neon blue
    'rgb(145, 220, 188)', // Mint
    'rgb(230, 197, 66)',  // Gold
    'rgb(245, 181, 112)', // Orange
    'rgb(248, 113, 113)'  // Coral Red
  ];

  return (
    <section 
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#000000',
        overflow: 'hidden',
        padding: '120px 24px 100px 24px'
      }}
    >
      {/* Background Video */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.85,
            filter: 'contrast(1.1) saturate(1.2) brightness(1.1)'
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4" type="video/mp4" />
        </video>
        {/* Soft dark overlays to prevent contrast issues */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.55) 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.65) 100%)'
          }}
        />
      </div>

      {/* Glowing atmospheric background orbs */}
      <div className="glow-orb glow-rose" style={{ width: '600px', height: '600px', top: '-10%', right: '10%', opacity: 0.2 }} />
      <div className="glow-orb glow-blue" style={{ width: '700px', height: '700px', bottom: '5%', left: '-10%', opacity: 0.22 }} />
      <div className="glow-orb glow-purple" style={{ width: '500px', height: '500px', top: '25%', left: '25%', opacity: 0.15 }} />

      {/* Grid overlay blueprint system */}
      <GridLayout />

      {/* Main Content Area */}
      <div 
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          {/* Tagline label */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
              opacity: lettersInView ? 1 : 0,
              transform: lettersInView ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <span style={{ width: '32px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Marketing & Web Solutions Agency
            </span>
          </div>

          {/* Heading */}
          <h1 
            style={{
              fontSize: 'clamp(32px, 8.5vw, 102px)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              marginBottom: '36px',
              fontFamily: 'var(--font-sans)',
              opacity: lettersInView ? 1 : 0,
              transform: lettersInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Scaling <br />
            Beyond <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 'normal', color: 'var(--accent-rose)' }}>Limits</span>
            <span style={{ display: 'inline-block', marginLeft: '12px' }}>to</span>
            <br />
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {currentWord.split("").map((char, index) => {
                const colorIndex = (index + wordIndex) % colors.length;
                return (
                  <span
                    key={`${wordIndex}-${index}`}
                    className={isWordVisible ? "char-blur-in" : "char-blur-out"}
                    style={{
                      display: 'inline-block',
                      color: colors[colorIndex],
                      animationDelay: isWordVisible ? `${index * 60}ms` : `${index * 40}ms`,
                      opacity: 0,
                      transition: 'color 0.8s ease'
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* Subtitle description */}
          <p 
            style={{
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
              maxWidth: '580px',
              marginBottom: '48px',
              fontWeight: 400,
              opacity: lettersInView ? 1 : 0,
              transform: lettersInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            A premium creative agency building hyper-optimized marketing systems, next-gen React web applications, and high-performance brand campaigns.
          </p>

          {/* Action buttons */}
          <div 
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              opacity: lettersInView ? 1 : 0,
              transform: lettersInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
            }}
          >
            <a 
              href="#contact" 
              className="btn btn-primary"
              style={{ gap: '8px' }}
            >
              Start Project <ArrowRight size={14} />
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-secondary"
            >
              See Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
