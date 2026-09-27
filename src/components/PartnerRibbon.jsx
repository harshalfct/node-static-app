import React from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  Database, 
  Shield, 
  Boxes, 
  GitBranch, 
  CloudRain 
} from 'lucide-react';

export default function PartnerRibbon() {
  const partners = [
    { name: 'Vercel-Scale', icon: <Layers size={18} /> },
    { name: 'Supabase-Data', icon: <Database size={18} /> },
    { name: 'Cloudflare-Edge', icon: <Shield size={18} /> },
    { name: 'Datadog-Observability', icon: <Cpu size={18} /> },
    { name: 'Docker-Clusters', icon: <Boxes size={18} /> },
    { name: 'GitHub-Pipelines', icon: <GitBranch size={18} /> },
    { name: 'Stripe-Billing', icon: <Terminal size={18} /> }
  ];

  return (
    <section className="partners-section" aria-label="Trusted Partners">
      <div className="container">
        <p className="partners-heading">
          Powering mission-critical workloads for top engineering teams worldwide
        </p>

        <div className="partners-logos-flex">
          {partners.map((partner, idx) => (
            <div key={idx} className="partner-logo-pill">
              <span style={{ color: 'var(--accent-cyan)' }}>{partner.icon}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
