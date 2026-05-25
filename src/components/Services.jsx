import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Terminal, TrendingUp, Bot, Fingerprint, Layers } from 'lucide-react';

export default function Services() {
  const primaryCanvasRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeModal, setActiveModal] = useState(null);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // 3D Canvas effect inside the main capability card
  useEffect(() => {
    const canvas = primaryCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
    }

    const nodes = Array.from({ length: 45 }, () => new Node());

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      nodes.forEach(n => n.update());

      nodes.forEach((n1, idx) => {
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(236, 168, 214, 0.4)';
        ctx.fill();

        for (let j = idx + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(121, 205, 249, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const otherServices = [
    {
      num: '02',
      name: 'Paid Ads & Social Media',
      description: 'Launch and scale high-ROI campaigns across Meta, Instagram, Google, and TikTok to maximize customer acquisition.',
      icon: TrendingUp,
      accentGlow: 'rgba(236, 168, 214, 0.1)'
    },
    {
      num: '03',
      name: 'Growth & Lead Generation',
      description: 'Architect high-intent customer acquisition funnels, lead capture flows, and automated nurture sequences built to convert.',
      icon: Bot,
      accentGlow: 'rgba(121, 205, 249, 0.1)'
    },
    {
      num: '04',
      name: 'AI & Marketing Automation',
      description: 'Deploy autonomous lead nurturing pipelines, custom AI agents, and campaign integration systems to scale efficiency.',
      icon: Fingerprint,
      accentGlow: 'rgba(158, 152, 250, 0.1)'
    },
    {
      num: '05',
      name: 'Brand & UI/UX Design',
      description: 'Design luxury brand identities, premium high-fidelity UI systems, and responsive flows that command authority.',
      icon: Layers,
      accentGlow: 'rgba(230, 197, 66, 0.1)'
    }
  ];

  return (
    <section 
      id="services"
      style={{
        padding: '160px 24px',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)'
      }}
      className="reveal"
    >
      {/* Glow highlight */}
      <div className="glow-orb glow-purple" style={{ width: '800px', height: '800px', top: '10%', left: '-10%' }} />
      <div className="glow-orb glow-rose" style={{ width: '600px', height: '600px', bottom: '5%', right: '-5%', opacity: 0.12 }} />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Title Block */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
            marginBottom: '80px',
            alignItems: 'end'
          }}
          className="grid-container grid-lg-12"
        >
          <div className="lg-col-span-7">
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
              Capabilities
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
              Premium code. <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>High-converting growth.</span>
            </h2>
          </div>
          <div className="lg-col-span-5">
            <p 
              style={{
                fontSize: '18px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                maxWidth: '480px'
              }}
            >
              We design custom React applications, launch high-ROI ad campaigns (Meta & social channels), and build automated lead generation pipelines that scale your brand.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Card 1: Spans Full Width (Web Development) */}
          <div
            ref={el => cardsRef.current[0] = el}
            onMouseMove={(e) => handleMouseMove(e, 0)}
            style={{
              display: 'flex',
              backgroundColor: 'rgba(11, 11, 11, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '24px',
              minHeight: '480px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
              transition: 'border-color 0.4s ease'
            }}
            onClick={() => setActiveModal({
              num: '01',
              name: 'Web Development',
              description: 'Deploy custom-built React architectures, interactive digital platforms, and high-converting enterprise SaaS systems built for rapid scaling.',
              accentGlow: 'rgba(236, 168, 214, 0.08)'
            })}
            className="group capability-card-full"
          >
            {/* Spotlight Hover Glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
                background: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(236, 168, 214, 0.08), transparent 80%)',
                zIndex: 0
              }}
              className="card-glow"
            />

            {/* Left: Text & Canvas */}
            <div 
              style={{ 
                flex: 1, 
                padding: '48px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 10
              }}
            >
              <canvas 
                ref={primaryCanvasRef} 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  width: '100%', 
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 0
                }} 
              />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  01 // CORE CAPABILITY
                </span>
                <h3 style={{ fontSize: '36px', fontWeight: 500, color: '#ffffff', marginTop: '16px', letterSpacing: '-0.02em' }}>
                  Web Development
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '12px', maxWidth: '420px' }}>
                  Deploy custom-built React architectures, interactive digital platforms, and high-converting enterprise SaaS systems built for rapid scaling.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ fontSize: '48px', fontWeight: 600, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>99.9%</div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', marginTop: '4px', textTransform: 'uppercase' }}>
                  core build uptime SLA
                </div>
              </div>
            </div>

            {/* Right: Graphic upscaled sphere image */}
            <div 
              style={{ 
                width: '42%', 
                position: 'relative',
                borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden'
              }}
              className="hidden lg-block"
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png" 
                alt="Sphere Network" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: 'scaleX(-1)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, #0a0a0c 0%, transparent 60%)'
                }}
              />
            </div>
          </div>

          {/* Sub Grid for other 4 cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px'
            }}
            className="grid-container grid-md-2"
          >
            {otherServices.map((service, index) => {
              const Icon = service.icon;
              const cardIdx = index + 1; // offset because Card 1 is full-width

              return (
                <div
                  key={service.name}
                  ref={el => cardsRef.current[cardIdx] = el}
                  onMouseMove={(e) => handleMouseMove(e, cardIdx)}
                  style={{
                    backgroundColor: 'rgba(11, 11, 11, 0.45)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '24px',
                    padding: '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '280px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'border-color 0.4s ease'
                  }}
                  onClick={() => setActiveModal(service)}
                  className="group capability-card-sub"
                >
                  {/* Spotlight Hover Glow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                      background: `radial-gradient(350px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${service.accentGlow}, transparent 80%)`,
                      zIndex: 0
                    }}
                    className="card-glow"
                  />

                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff'
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)' }}>
                        {service.num} // STEP
                      </span>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#ffffff', marginTop: '24px', letterSpacing: '-0.01em' }}>
                      {service.name}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '8px' }}>
                      {service.description}
                    </p>
                  </div>

                  <div 
                    style={{ 
                      marginTop: '32px', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.35)',
                      position: 'relative',
                      zIndex: 10
                    }}
                  >
                    <span>SYSTEM READY</span>
                    <span style={{ transition: 'color 0.2s ease' }} className="group-hover:text-white">READ SPECS →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Specs Detail Modal */}
      {activeModal && createPortal(
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '40px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            overflowY: 'auto',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setActiveModal(null)}
        >
          <div 
            style={{
              width: '100%',
              maxWidth: '640px',
              backgroundColor: '#0c0c10',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '28px',
              padding: '40px',
              position: 'relative',
              margin: 'auto',
              boxShadow: `0 0 50px -10px ${activeModal.accentGlow || 'rgba(255,255,255,0.1)'}`,
              animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
            >
              ✕
            </button>

            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                {activeModal.num} // SPECIFICATION SHEET
              </span>
              <h3 style={{ fontSize: '32px', fontWeight: 500, color: '#ffffff', marginTop: '12px', letterSpacing: '-0.02em' }}>
                {activeModal.name}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '8px', lineHeight: 1.5 }}>
                {activeModal.description}
              </p>
            </div>

            {/* Specific details depending on the service */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              {activeModal.num === '01' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Target SLA Metrics</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>Sub-100ms LCP Load Times<br/>99.99% Uptime SLA<br/>100/100 Lighthouse Performance</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Core Tech Stack</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>React, Next.js, Vite<br/>Vercel Edge, Cloudflare Workers<br/>GraphQL, WebGL / Three.js</p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Deliverables & Package</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Includes custom component library setup in Figma, serverless database clustering, automated CI/CD deployments, and responsive mobile optimization testing across 12 viewports.</p>
                  </div>
                </>
              )}

              {activeModal.num === '02' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Target Benchmarks</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>4.2x Average ROAS/ROI<br/>32% reduction in CAC<br/>3.5%+ CTR average metrics</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Active Channels</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>Meta (Facebook & Instagram)<br/>TikTok Campaign Manager<br/>Google Search, PMax & YouTube</p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Creative Optimization Strategy</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>We test 15-20 dynamic creatives per week using our creative-first framework. Includes visual hook styling, custom vector motions, copy variations, and custom audience lookup modeling.</p>
                  </div>
                </>
              )}

              {activeModal.num === '03' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Growth Performance</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>+180% Lead volume average<br/>94% lead-to-opportunity rate<br/>45%+ email sequence open rates</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>CRMs & Integrations</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>HubSpot, Salesforce, Zapier<br/>Clay.com enrichment systems<br/>Apollo.io intent-outbound</p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Lead Qualification Architecture</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Building multi-step qualification pipelines containing logic branches. High-intent leads are dynamically enriched with corporate data (funding, size, tech stack) before landing in the sales CRM.</p>
                  </div>
                </>
              )}

              {activeModal.num === '04' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Automation Power</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>80% response speed increase<br/>24/7 lead nurturing coverage<br/>Zero manual SDR tasks</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Tech Framework</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>Make.com, n8n databases<br/>OpenAI GPT-4o APIs<br/>Vapi Voice, Twilio API</p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Autonomous Workflow Example</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>An incoming lead triggers instant automated research. Within 3 minutes, a highly customized email is drafted, sent, and tracked, while an AI voice bot follows up to coordinate calendar bookings.</p>
                  </div>
                </>
              )}

              {activeModal.num === '05' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Brand System Scope</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>Atomic Design component setups<br/>Luxury layout styling guidelines<br/>60fps smooth animations</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>Design Software</h4>
                      <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.4 }}>Figma Design & Prototypes<br/>Spline 3D web designs<br/>Adobe Creative Cloud assets</p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '6px' }}>UX & Figma Deliverable</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Includes complete, fully tokenized UI design libraries mapped to Tailwind/CSS components. Also delivers print-ready identity packs, premium typography guidelines, and vector brand marks.</p>
                  </div>
                </>
              )}
            </div>

            {/* Action button in Modal */}
            <div style={{ marginTop: '36px', display: 'flex', gap: '12px' }}>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
                style={{ flex: 1, padding: '14px' }}
              >
                Inquire For Specs
              </a>
              <button 
                onClick={() => setActiveModal(null)}
                className="btn btn-secondary"
                style={{ padding: '14px 24px' }}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .capability-card-full:hover, .capability-card-sub:hover {
          border-color: var(--border-hover) !important;
        }
        .capability-card-full:hover .card-glow, .capability-card-sub:hover .card-glow {
          opacity: 1 !important;
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
