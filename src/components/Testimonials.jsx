import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Horizon completely rebuilt our SaaS dashboards and automations. The interface performance and visual look helped us scale our user conversion metrics by 40% in just weeks. Their design-engineering execution is unmatched.",
      author: "Marcus Vane",
      role: "VP of Product, Aether Compute",
      avatar: "MV"
    },
    {
      quote: "The branding system Designed by Horizon gave us an instant premium identity that perfectly matched our quantum compiler launch. The feedback from investors and clients was immediate. They build elite digital products.",
      author: "Evelyn Sterling",
      role: "Founder, Kortex Labs",
      avatar: "ES"
    },
    {
      quote: "Our new platform feels like a cinematic software experience rather than a template site. The micro-animations, loading precision, and typography hierarchy are of the absolute highest standard.",
      author: "Dorian Reyes",
      role: "Creative Director, Vesper Collective",
      avatar: "DR"
    }
  ];

  return (
    <section 
      style={{
        padding: '160px 24px',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)'
      }}
      className="reveal"
    >
      <div className="grid-overlay" />
      <div className="glow-orb glow-rose" style={{ width: '700px', height: '700px', top: '10%', right: '-5%' }} />
      <div className="glow-orb glow-blue" style={{ width: '600px', height: '600px', bottom: '5%', left: '-10%', opacity: 0.12 }} />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
            Trust
          </span>
          <h2 
            style={{
              fontSize: 'clamp(36px, 6vw, 76px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Client Reviews <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>Enterprise grade.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }}
          className="grid-container grid-lg-3"
        >
          {reviews.map((rev) => {
            return (
              <div
                key={rev.author}
                style={{
                  backgroundColor: 'rgba(11, 11, 11, 0.55)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '24px',
                  padding: '48px 36px',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '40px',
                  cursor: 'default',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                className="testimonial-card"
              >
                {/* Quote */}
                <p 
                  style={{
                    fontSize: '22px',
                    lineHeight: 1.4,
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 300,
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic'
                  }}
                >
                  "{rev.quote}"
                </p>

                {/* Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent-rose), var(--accent-blue))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#ffffff',
                      boxShadow: '0 0 15px rgba(236, 168, 214, 0.2)'
                    }}
                  >
                    {rev.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff' }}>
                      {rev.author}
                    </div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.4)', marginTop: '2px' }}>
                      {rev.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-card:hover {
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
      `}} />
    </section>
  );
}
