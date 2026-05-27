import React from 'react';
import monogram from '../assets/monogram.png';

export default function Founder() {
  return (
    <section 
      id="about"
      style={{
        padding: '160px 24px',
        backgroundColor: '#050508',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)'
      }}
      className="reveal"
    >
      {/* Background glowing effects */}
      <div className="glow-orb glow-blue" style={{ width: '600px', height: '600px', top: '10%', left: '-10%', opacity: 0.15 }} />
      <div className="glow-orb glow-rose" style={{ width: '500px', height: '500px', bottom: '10%', right: '-5%', opacity: 0.12 }} />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '64px',
          alignItems: 'center'
        }}
        className="grid-container grid-lg-12"
      >
        {/* Left Column - Premium Profile Badge Card */}
        <div className="lg-col-span-5" style={{ display: 'flex', justifyContent: 'center' }}>
          <div 
            style={{
              backgroundColor: 'rgba(11, 11, 11, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '28px',
              padding: '48px 36px',
              width: '100%',
              maxWidth: '440px',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              transition: 'border-color 0.4s ease'
            }}
            className="founder-profile-card"
          >
            {/* Ambient inner glow */}
            <div 
              style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(159, 63, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
            />

            {/* Profile Header (Monogram logo & initials) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div 
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(236,168,214,0.1) 0%, rgba(121,205,249,0.1) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-sans)',
                  color: '#ffffff',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }}
              >
                RD
              </div>
              <img 
                src={monogram} 
                alt="Hashtag Horizon Monogram" 
                style={{ 
                  height: '32px', 
                  width: 'auto',
                  opacity: 0.8,
                  filter: 'drop-shadow(0 0 8px rgba(159, 63, 255, 0.35))'
                }} 
              />
            </div>

            {/* Profile Info */}
            <div style={{ marginBottom: '32px' }}>
              <h3 
                style={{ 
                  fontSize: '28px', 
                  fontWeight: 600, 
                  color: '#ffffff', 
                  letterSpacing: '-0.02em', 
                  marginBottom: '6px',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                Er Rachit Dwivedi
              </h3>
              <span 
                className="logo-text-gradient"
                style={{ 
                  fontSize: '13px', 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Founder & CEO
              </span>
            </div>

            {/* Specs / Tags */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Role', value: 'Strategy & Leadership' },
                { label: 'Background', value: 'Affiliate Marketing Manager' },
                { label: 'Expertise', value: 'Digital Growth & paid campaigns' },
                { label: 'Focus', value: 'Cinematic Products & SaaS UI' }
              ].map((spec, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    fontSize: '12px', 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    paddingBottom: '8px'
                  }}
                >
                  <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'var(--font-mono)' }}>// {spec.label}</span>
                  <span style={{ color: '#ffffff', fontWeight: 500 }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - The Story Text */}
        <div className="lg-col-span-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span 
            style={{ 
              fontSize: '11px', 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--accent-rose)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              display: 'block', 
              marginBottom: '20px' 
            }}
          >
            Founder’s Story
          </span>
          
          <h2 
            style={{
              fontSize: 'clamp(32px, 5.5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '32px',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Hi, I’m the <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-rose)' }}>CEO</span> of this company.
          </h2>

          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '24px', 
              fontSize: 'clamp(15px, 1.8vw, 17px)', 
              color: 'var(--color-text-muted)', 
              lineHeight: 1.7 
            }}
          >
            <p>
              My journey started in affiliate marketing, where I worked as an Affiliate Marketing Manager and learned the real power of online growth strategies. With 2 years of hands-on experience in digital marketing, I built this company with a vision to help brands grow smarter, faster, and stronger in the digital world.
            </p>
            
            <p style={{ color: '#ffffff', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 18px)', borderLeft: '2px solid var(--accent-blue)', paddingLeft: '20px', fontStyle: 'italic' }}>
              Today, our focus is simple — delivering real results, creative strategies, and long-term brand growth for every client.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .founder-profile-card:hover {
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
      `}} />
    </section>
  );
}
