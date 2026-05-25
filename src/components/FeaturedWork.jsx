import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedWork() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Solaria Campaign',
      category: 'Meta Ads & Conversion Funnel',
      tagline: 'Custom React acquisition platform and unified Meta/Google ad funnel yielding a 4.2x average ROI.',
      link: '#',
      color: '#eca8d6',
      layout: 'large',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real-time-graph-INFmn3u0MlUwvNPynoIhwxtPaPjxM5.png'
    },
    {
      title: 'Kortex Systems',
      category: 'Lead Gen & Performance Marketing',
      tagline: 'Programmatic lead generation pipelines and interactive qualification forms that increased signups by 180%.',
      link: '#',
      color: '#79cdf9',
      layout: 'small',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png'
    },
    {
      title: 'Vesper Commerce',
      category: 'Enterprise Web Development',
      tagline: 'A headless React ecommerce storefront optimized for sub-100ms load times and high checkout conversion.',
      link: '#',
      color: '#7B2CFF',
      layout: 'small',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png'
    }
  ];

  return (
    <section 
      id="work"
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
      <div className="glow-orb glow-blue" style={{ width: '800px', height: '800px', bottom: '0', right: '-10%' }} />
      <div className="glow-orb glow-purple" style={{ width: '600px', height: '600px', top: '10%', left: '-10%', opacity: 0.12 }} />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
            Works
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
            Case Studies <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>Proven solutions.</span>
          </h2>
        </div>

        {/* Asymmetrical grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px'
          }}
          className="grid-container grid-lg-12"
        >
          {projects.map((project, index) => {
            const isLarge = project.layout === 'large';
            const isHovered = hoveredIdx === index;

            return (
              <a
                key={project.title}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(project);
                }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backgroundColor: 'rgba(11, 11, 11, 0.55)',
                  backdropFilter: 'blur(16px)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.4s ease, transform 0.4s ease'
                }}
                className={`project-card ${isLarge ? 'lg-col-span-12' : 'lg-col-span-6'}`}
              >
                {/* Visual Area */}
                <div 
                  style={{ 
                    height: isLarge ? 'clamp(240px, 35vw, 500px)' : 'clamp(200px, 28vw, 360px)',
                    width: '100%',
                    position: 'relative',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    overflow: 'hidden',
                    backgroundColor: '#050505'
                  }}
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                      transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: isLarge ? 0.95 : 0.8
                    }}
                  />
                  
                  {/* Overlay shadow to integrate image */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 60%, #0c0c0e 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Category Badge */}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '24px',
                      left: '24px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(12px)',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Hover indicator link */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      opacity: isHovered ? 1 : 0.7,
                      transform: isHovered ? 'scale(1.08) rotate(45deg)' : 'none',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Details Footer */}
                <div style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                      <h3 
                        style={{ 
                          fontSize: 'clamp(22px, 2.5vw, 32px)', 
                          fontWeight: 500, 
                          color: '#ffffff',
                          letterSpacing: '-0.02em',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        style={{ 
                          fontSize: 'clamp(14px, 1.2vw, 15px)', 
                          color: 'var(--color-text-muted)', 
                          marginTop: '8px',
                          maxWidth: '640px',
                          lineHeight: 1.5
                        }}
                      >
                        {project.tagline}
                      </p>
                    </div>
                    <span 
                      style={{ 
                        fontSize: '12px', 
                        fontFamily: 'var(--font-mono)', 
                        color: project.color, 
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                      }}
                    >
                      READ CASE STUDY →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && createPortal(
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '40px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            overflowY: 'auto',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            style={{
              width: '100%',
              maxWidth: '720px',
              backgroundColor: '#0c0c10',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '28px',
              overflow: 'hidden',
              position: 'relative',
              margin: 'auto',
              boxShadow: `0 0 60px -15px ${selectedProject.color}`,
              animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 20,
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'; }}
            >
              ✕
            </button>

            {/* Modal Image Header */}
            <div style={{ width: '100%', height: 'clamp(160px, 25vw, 240px)', position: 'relative', overflow: 'hidden' }}>
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 30%, #0c0c10 100%)'
                }}
              />
            </div>

            {/* Content Body */}
            <div style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: selectedProject.color, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                {selectedProject.category} // CASE STUDY
              </span>
              <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 500, color: '#ffffff', marginTop: '12px', letterSpacing: '-0.02em' }}>
                {selectedProject.title}
              </h3>
              <p style={{ fontSize: '15px', color: '#ffffff', marginTop: '12px', fontStyle: 'italic', opacity: 0.9 }}>
                "{selectedProject.tagline}"
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginTop: '20px' }}>
                {selectedProject.title === 'Solaria Campaign' && (
                  <>
                    <div className="modal-grid">
                      <div>
                        <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>The Challenge</h4>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Solaria required scaling user acquisition that had hit a plateau, resulting in rising customer acquisition costs (CAC).</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Our Strategy</h4>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Deployed high-fidelity React conversion funnels paired with localized Meta and Instagram ads, running 15 creative tests weekly.</p>
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Metrics Delivered</h4>
                      <p style={{ fontSize: '18px', fontWeight: 500, color: selectedProject.color }}>
                        4.2x ROAS / 45% CPA reduction / $2.5M pipeline value
                      </p>
                    </div>
                  </>
                )}

                {selectedProject.title === 'Kortex Systems' && (
                  <>
                    <div className="modal-grid">
                      <div>
                        <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>The Challenge</h4>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Kortex needed high-intent enterprise pipeline signups without overspending valuable sales representative prospecting hours.</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Our Strategy</h4>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Implemented automated outbound lead data scrapers and integrated qualifiers, filtering hot demos straight into their CRM.</p>
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Metrics Delivered</h4>
                      <p style={{ fontSize: '18px', fontWeight: 500, color: selectedProject.color }}>
                        +180% demo signups / 91% conversion rate / 0 hours manual prospecting
                      </p>
                    </div>
                  </>
                )}

                {selectedProject.title === 'Vesper Commerce' && (
                  <>
                    <div className="modal-grid">
                      <div>
                        <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>The Challenge</h4>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Impeded by heavy load times, their legacy storefront suffered from dropping cart completions and lost revenue.</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Our Strategy</h4>
                        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>Migrated them to a fully headless Next.js frontend on Shopify Storefront APIs with globally distributed edge caching.</p>
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '4px' }}>Metrics Delivered</h4>
                      <p style={{ fontSize: '18px', fontWeight: 500, color: selectedProject.color }}>
                        Sub-100ms load times / 98% Performance index / +24% cart checkouts
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Action buttons inside Modal */}
              <div className="modal-actions-container" style={{ marginTop: '36px' }}>
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedProject(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '14px' }}
                >
                  Consult On Similar Case
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-secondary"
                  style={{ padding: '14px 24px' }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .modal-actions-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }
        @media (min-width: 480px) {
          .modal-actions-container {
            flex-direction: row;
          }
        }
        @media (min-width: 600px) {
          .modal-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
}
