import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', project: '', details: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "6b69fb0f-a92a-414a-b76b-28050b61b3df";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: "New Project Inquiry - Hashtag Horizon",
          from_name: "Hashtag Horizon Website",
          project: formData.project,
          details: formData.details
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', project: '', details: '' });
      } else {
        setSubmitError(result.message || "Failed to submit. Please try again.");
      }
    } catch {
      setSubmitError("An error occurred. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              fontSize: 'clamp(28px, 5vw, 68px)',
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
              <span style={{ color: 'var(--accent-blue)', minWidth: '120px' }}>// EMAIL</span>
              <a href="mailto:info@hashtaghorizon.in" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>info@hashtaghorizon.in</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-rose)', minWidth: '120px' }}>// WHATSAPP</span>
              <a href="https://wa.me/919235869319?text=Hi%20Hashtag%20Horizon%2C%20I%20would%20like%20to%20inquire%20about%20your%20services%20to%20scale%20our%20business." target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-rose)'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>+91 92358 69319</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-blue)', minWidth: '120px' }}>// INSTAGRAM</span>
              <a href="https://www.instagram.com/hashtaghorizonofficial?igsh=YWQxb25qMW5sYzBv" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>@hashtaghorizonofficial</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'var(--accent-rose)', minWidth: '120px' }}>// LINKEDIN</span>
              <a href="https://www.linkedin.com/in/hashtag-horizon-216799411?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-rose)'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Hashtag Horizon</a>
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
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    gap: '8px', 
                    marginTop: '8px', 
                    background: '#ffffff', 
                    color: '#000000', 
                    fontWeight: 600,
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"} {!isSubmitting && <Send size={13} />}
                </button>

                {submitError && (
                  <div style={{ color: 'var(--accent-rose)', fontSize: '13px', backgroundColor: 'rgba(236, 168, 214, 0.07)', border: '1px solid rgba(236, 168, 214, 0.2)', padding: '12px 16px', borderRadius: '8px', marginTop: '12px', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                    {submitError}
                  </div>
                )}
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
