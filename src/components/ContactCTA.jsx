import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactCTA({ onTriggerToast }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onTriggerToast('Please enter a valid work email address.');
      return;
    }
    setSubmitted(true);
    onTriggerToast(`Instant sandbox credentials dispatched to ${email}!`);
  };

  return (
    <section className="section-padding" id="cta-banner">
      <div className="container">
        <div className="cta-banner-card">
          <div className="badge badge-emerald" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} />
            <span>Instant Sandbox Activation</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Ready to Supercharge Your <span className="text-gradient">Cloud Infrastructure</span>?
          </h2>

          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Join 150,000+ engineers building sub-millisecond apps, serverless isolates, and confidential AI models. Zero credit card needed to begin.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="newsletter-form" id="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your work email (e.g. dev@company.com)..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="cta-email-input"
                aria-label="Work Email Address"
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                id="cta-submit-btn"
              >
                <span>Deploy Free Sandbox</span>
                <Send size={16} />
              </button>
            </form>
          ) : (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 28px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: 'var(--radius-full)',
              color: '#34d399',
              marginTop: '32px',
              fontWeight: 600
            }}>
              <CheckCircle2 size={20} />
              <span>Sandbox node ready! Access link dispatched to {email}.</span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginTop: '28px', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span>✓ Zero credit card required</span>
            <span>✓ 5-minute automated setup</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
