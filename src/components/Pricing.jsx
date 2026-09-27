import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export default function Pricing({ onTriggerToast }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'dev',
      name: 'Developer Sandbox',
      desc: 'Ideal for prototyping, personal projects, and experimenting with edge isolates.',
      priceMonthly: 0,
      priceAnnual: 0,
      featured: false,
      ctaText: 'Start Building Free',
      ctaClass: 'btn-secondary',
      features: [
        'Up to 100,000 req/month',
        '8 Global Edge PoPs',
        'Automatic TLS 1.3 certificates',
        'Community Discord & Forum',
        'Standard DDoS Mitigation',
        '100MB static asset cache'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Cloud & AI',
      desc: 'Tailored for fast-growing SaaS products, mobile backends, and low-latency APIs.',
      priceMonthly: 39,
      priceAnnual: 29,
      featured: true,
      popularTag: 'Most Popular',
      ctaText: 'Start 14-Day Free Trial',
      ctaClass: 'btn-primary',
      features: [
        '10,000,000 req/month included',
        'All 320+ Global Edge Regions',
        'Confidential Enclave Encryption',
        'Edge AI inference (5M tokens)',
        'Custom domain SSL & Anycast DNS',
        '99.99% Guaranteed SLA Uptime',
        'Email & Slack Developer Support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Autonomous',
      desc: 'Dedicated infrastructure, custom SLAs, and sovereign compliance for large teams.',
      priceMonthly: 179,
      priceAnnual: 139,
      featured: false,
      ctaText: 'Contact Enterprise Sales',
      ctaClass: 'btn-secondary',
      features: [
        'Unlimited elastic request scaling',
        'Dedicated bare-metal instances',
        'Custom Anycast IP prefixes (BYOIP)',
        'Zero-trust hardware attestation',
        '99.999% Financial-backed SLA',
        'SOC2, HIPAA, & PCI DSS compliance',
        'Dedicated 24/7 Escalation Engineer'
      ]
    }
  ];

  return (
    <section className="section-padding" id="pricing">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-purple">
            <Zap size={14} />
            <span>Transparent Predictable Pricing</span>
          </div>
          <h2>Invest in Velocity. Scale With Complete Confidence.</h2>
          <p>
            No hidden data egress traps. No surprise ballooning compute bills. Simple, predictable pricing for teams of every size.
          </p>
        </div>

        {/* Billing Switcher */}
        <div className="billing-switcher">
          <div className="switcher-btn">
            <button
              type="button"
              className={`switcher-tab ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
              id="billing-monthly"
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`switcher-tab ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
              id="billing-annual"
            >
              Annual Billing
            </button>
          </div>
          {isAnnual && (
            <span className="badge badge-emerald" style={{ fontSize: '0.8rem' }}>
              Save 25% Annually
            </span>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-3" id="pricing-plans-grid">
          {plans.map((plan) => {
            const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div 
                key={plan.id} 
                className={`glass-card pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && (
                  <div className="featured-pill">
                    <span className="badge" style={{ background: 'var(--accent-cyan)', color: '#07090e', fontWeight: 800 }}>
                      <Sparkles size={13} />
                      {plan.popularTag}
                    </span>
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.9rem', minHeight: '44px' }}>{plan.desc}</p>

                  <div className="price-display">
                    <span className="price-currency">$</span>
                    <span className="price-amount">{currentPrice}</span>
                    <span className="price-period">/ month {isAnnual && currentPrice > 0 ? '(billed annually)' : ''}</span>
                  </div>

                  <ul className="pricing-features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="pricing-feature-item">
                        <Check size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className={`btn ${plan.ctaClass}`}
                    style={{ width: '100%' }}
                    id={`btn-plan-${plan.id}`}
                    onClick={() => onTriggerToast(`Selected "${plan.name}" plan. Opening checkout setup...`)}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
