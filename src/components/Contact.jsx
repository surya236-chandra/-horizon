import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', project: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', project: '', details: '' });
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '160px 24px',
        backgroundColor: '#050508',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-color)'
      }}
      className="reveal"
    >
      <div className="grid-overlay" />
      <div className="glow-orb glow-purple" style={{ width: '600px', height: '600px', bottom: '0', left: '-5%' }} />

      <div 
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '80px'
        }}
        className="grid-container grid-lg-12"
      >
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="lg-col-span-5">
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent-rose)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>
            Inquire
          </span>
          <h2 
            style={{
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '32px',
              fontFamily: 'var(--font-sans)'
            }}
          >
            Start Your <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-rose)' }}>Project.</span>
          </h2>
          <p 
            style={{
              fontSize: '16px',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '40px'
            }}
          >
            Looking to scale your paid ads, launch a high-intent lead generation system, or build a custom web platform? Outline your goals, and we'll connect with you within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-blue)' }}>// EMAIL DIRECT</span>
              <a href="mailto:hello@horizon.network" style={{ color: '#ffffff', textDecoration: 'none' }}>hello@horizon.network</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-rose)' }}>// SILICON VALLEY</span>
              <span style={{ color: '#ffffff' }}>Palo Alto, California</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg-col-span-7">
          <div 
            style={{
              backgroundColor: 'rgba(11, 11, 11, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '24px',
              padding: '48px 36px',
              backdropFilter: 'blur(24px)',
              position: 'relative'
            }}
          >
            {formSubmitted ? (
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  minHeight: '360px',
                  textAlign: 'center',
                  animation: 'fadeIn 0.5s ease'
                }}
              >
                <CheckCircle size={48} color="var(--accent-rose)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#ffffff', marginBottom: '8px' }}>Transmission Received</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', maxWidth: '320px', lineHeight: 1.5 }}>
                  Our team has received your details and will coordinate a workspace sandbox for you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }} className="grid-container grid-md-2">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Capabilities Requested</label>
                  <select 
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleInputChange}
                    className="form-input"
                    style={{ appearance: 'none', color: '#ffffff' }}
                  >
                    <option value="" disabled>Select Option...</option>
                    <option value="ads">Paid Ads & Social Media</option>
                    <option value="leadgen">Growth & Lead Generation</option>
                    <option value="webdev">Web Development</option>
                    <option value="ai">AI & Marketing Automation</option>
                    <option value="design">Brand & UI/UX Design</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Details</label>
                  <textarea 
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Describe your project, timeline, and scaling requirements..."
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px', gap: '8px', marginTop: '8px', background: '#ffffff', color: '#000000', fontWeight: 600 }}
                >
                  Send Inquiry <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .form-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 14px 18px;
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-input:focus {
          border-color: var(--accent-rose);
          box-shadow: 0 0 20px -3px rgba(236, 168, 214, 0.2);
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }
        option {
          background-color: #0b0b0b;
          color: #ffffff;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
