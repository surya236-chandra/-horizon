import React, { useState } from 'react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Strategy',
      subtitle: 'Define your systems',
      desc: 'We map your target scaling goals, define structural constraints, and architect the software stack in detail.'
    },
    {
      num: '02',
      title: 'Design',
      subtitle: 'Design the interface',
      desc: 'Our design team crafts premium, high-contrast layouts, custom interactive components, and sleek motion flows.'
    },
    {
      num: '03',
      title: 'Development',
      subtitle: 'Deploy the product',
      desc: 'Engineers build optimized React architectures, serverless API integrations, and robust database pipelines.'
    },
    {
      num: '04',
      title: 'Launch',
      subtitle: 'Monitor & scale',
      desc: 'We deploy the asset to global edge servers, audit load speeds to reach 100/100, and activate telemetry monitors.'
    }
  ];

  return (
    <section 
      id="process"
      style={{
        padding: '160px 24px',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)'
      }}
      className="reveal"
    >
      {/* Dynamic Glowing Orbs */}
      <div className="glow-orb glow-rose" style={{ width: '600px', height: '600px', bottom: '-10%', left: '-10%', opacity: 0.15 }} />
      <div className="glow-orb glow-blue" style={{ width: '500px', height: '500px', top: '10%', right: '-5%', opacity: 0.12 }} />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Top Split Area */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'end',
            marginBottom: '64px'
          }}
          className="grid-container grid-lg-2"
        >
          {/* Left Title */}
          <div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '24px' }}>
              // WORKFLOW PROCESS
            </span>
            <h2 
              style={{
                fontSize: 'clamp(32px, 7vw, 110px)',
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)'
              }}
            >
              Strategy.<br />
              <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Design.</span><br />
              <span style={{ color: 'rgba(255, 255, 255, 0.1)' }}>Scale.</span>
            </h2>
          </div>

          {/* Right Image Graphic (Bonsai Tree) */}
          <div 
            style={{
              position: 'relative',
              height: 'clamp(280px, 45vw, 550px)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end'
            }}
            className="process-image-container"
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png" 
              alt="Bonsai Tree" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'right bottom'
              }}
            />
          </div>
        </div>

        {/* Steps Cards Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px'
          }}
          className="grid-container grid-md-2 grid-lg-4"
        >
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                style={{
                  position: 'relative',
                  textAlign: 'left',
                  padding: '40px 32px',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backgroundColor: 'rgba(11, 11, 11, 0.55)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  transition: 'border-color 0.4s ease'
                }}
                className="group process-card-interactive"
              >
                {/* Header indicators */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%' }}>
                  <span 
                    style={{ 
                      fontSize: '32px', 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: 600,
                      color: isActive ? 'var(--accent-rose)' : 'rgba(255,255,255,0.15)',
                      transition: 'color 0.4s ease'
                    }}
                  >
                    {step.num}
                  </span>
                  
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        backgroundColor: 'var(--accent-rose)', 
                        width: isActive ? '100%' : '0%',
                        transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)' 
                      }} 
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 500, color: '#ffffff', letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)', display: 'block', marginTop: '4px' }}>
                    {step.subtitle}
                  </span>
                  <p 
                    style={{ 
                      fontSize: '13px', 
                      color: 'var(--color-text-muted)', 
                      lineHeight: 1.6,
                      marginTop: '20px',
                      opacity: isActive ? 1 : 0.6,
                      transition: 'opacity 0.4s ease'
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Animated active border indicator at bottom */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--accent-rose)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformOrigin: 'left',
                    borderRadius: '0 0 20px 20px'
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .process-card-interactive:hover {
          border-color: rgba(255,255,255,0.2) !important;
        }
      `}} />
    </section>
  );
}
