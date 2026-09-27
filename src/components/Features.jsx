import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  HardDrive, 
  Activity, 
  ArrowRight, 
  Sliders,
  CheckCircle2,
  Lock,
  GitFork
} from 'lucide-react';

export default function Features({ onTriggerToast }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'compute', label: 'Compute & Edge' },
    { id: 'security', label: 'Security & Enclaves' },
    { id: 'ai', label: 'AI & Observability' },
  ];

  const featuresList = [
    {
      category: 'compute',
      icon: <Zap size={26} />,
      title: 'Sub-Millisecond Cold Starts',
      description: 'Spin up microservices and static applications in under 5ms using lightweight V8 isolates and WebAssembly runtimes.',
      tag: 'Compute',
      metric: '0.8ms Startup'
    },
    {
      category: 'security',
      icon: <ShieldCheck size={26} />,
      title: 'Zero-Trust Confidential Enclaves',
      description: 'Run sensitive customer algorithms inside hardware-isolated AMD SEV-SNP enclaves where not even the host OS can peek.',
      tag: 'Security',
      metric: 'FIPS 140-3'
    },
    {
      category: 'ai',
      icon: <Cpu size={26} />,
      title: 'Autonomous Edge AI Inference',
      description: 'Deploy quantized LLMs, vision transformers, and embeddings with automatic GPU fallback and hot cache warmers.',
      tag: 'AI Workflows',
      metric: '500M+ Ops/Day'
    },
    {
      category: 'compute',
      icon: <Globe2 size={26} />,
      title: 'Smart Geo-Routing Mesh',
      description: 'Autonomous Anycast routing diverts requests around undersea cable outages and congested backbones automatically.',
      tag: 'Network',
      metric: '320+ PoPs'
    },
    {
      category: 'security',
      icon: <Lock size={26} />,
      title: 'Layer 7 Anti-DDoS Shield',
      description: 'Absorb multi-terabit volumetric assaults and HTTP flood vectors in real-time without false positives or rate limit bottlenecks.',
      tag: 'Security',
      metric: '99.999% SLA'
    },
    {
      category: 'ai',
      icon: <Activity size={26} />,
      title: 'Zero-Overhead Distributed Traces',
      description: 'Get deep eBPF kernel-level profiling, error causality graphs, and real-time millisecond telemetry for every request.',
      tag: 'Telemetry',
      metric: '100% Trace Fidelity'
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? featuresList 
    : featuresList.filter(f => f.category === activeCategory);

  return (
    <section className="section-padding" id="features">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-purple">
            <Cpu size={14} />
            <span>Architecture &amp; Core Platform</span>
          </div>
          <h2>Engineered for Unmatched Velocity &amp; Resilience</h2>
          <p>
            Experience next-level cloud computing built from the ground up for modern developers, high-scale enterprises, and real-time AI workloads.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="features-filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid-3" id="features-grid">
          {filteredFeatures.map((item, idx) => (
            <div key={idx} className="glass-card feature-card">
              <div>
                <div className="feature-card-header">
                  <div className="feature-icon-box">
                    {item.icon}
                  </div>
                  <span className="badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    {item.metric}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="feature-card-footer">
                <span className="feature-tag">{item.tag}</span>
                <button
                  type="button"
                  className="feature-action-link"
                  onClick={() => onTriggerToast(`Detailed spec for "${item.title}" opened.`)}
                >
                  <span>Explore Spec</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
