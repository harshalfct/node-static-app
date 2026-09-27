import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Elena Rostova',
      role: 'VP of Engineering at FinEdge Global',
      avatar: 'ER',
      quote: 'Migrating our core transaction ledger to NovaSphere cut our global P99 latency from 180ms down to 14ms. Our European and Asian users immediately noticed the instant page response.',
      badge: '92% Latency Drop',
      rating: 5
    },
    {
      name: 'Marcus Vance',
      role: 'Chief Architect at SynthAI Systems',
      avatar: 'MV',
      quote: 'We run real-time voice streaming and multimodal AI models. With NovaSphere confidential enclaves, we can guarantee enterprise healthcare clients that their patient audio is never exposed in memory.',
      badge: 'HIPAA & SOC2 Verified',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Director of Infrastructure at HyperCommerce',
      avatar: 'SC',
      quote: 'During our Black Friday rush, our traffic spiked to 38 Million requests per hour. NovaSphere absorbed the entire load with zero manual provisioning and saved us over $14,000 in egress surcharges.',
      badge: 'Zero Dropped Packets',
      rating: 5
    }
  ];

  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-emerald">
            <CheckCircle2 size={14} />
            <span>Proven in Production</span>
          </div>
          <h2>Loved by Developers. Trusted by Technical Leaders.</h2>
          <p>
            See how high-growth teams and engineering leaders rely on NovaSphere to power their mission-critical cloud backends.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3" id="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card testimonial-card">
              <div className="stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
                ))}
              </div>

              <p className="testimonial-quote">
                "{rev.quote}"
              </p>

              <div style={{ marginBottom: '18px' }}>
                <span className="badge badge-purple" style={{ fontSize: '0.75rem', padding: '3px 9px' }}>
                  {rev.badge}
                </span>
              </div>

              <div className="testimonial-author-box">
                <div className="author-avatar">
                  {rev.avatar}
                </div>
                <div>
                  <div className="author-name">{rev.name}</div>
                  <div className="author-role">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
