import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  CheckCircle, 
  Cpu, 
  ArrowRight,
  Fingerprint
} from 'lucide-react';

export default function ArchitectureShowcase({ onTriggerToast }) {
  const [activeTab, setActiveTab] = useState('enclave');

  const architectures = {
    enclave: {
      title: 'Hardware-Attested Confidential Enclaves',
      description: 'Your user data and proprietary AI models remain encrypted even during execution in RAM using AMD SEV-SNP & Intel SGX hardware primitives.',
      points: [
        'Hardware root-of-trust with remote cryptographic attestation',
        'Transparent AES-256 memory encryption with zero OS hypervisor access',
        'Automated key rotation managed by quantum-resistant HSM nodes'
      ]
    },
    mesh: {
      title: 'Self-Optimizing Anycast Backbone',
      description: 'Traffic flows through an intelligent autonomous overlay that avoids latency spikes, ISP packet drops, and submarine cable cuts without human intervention.',
      points: [
        'Sub-millisecond packet steering with real-time BGP telemetry',
        'Distributed Layer-7 WAF scrubbing at each edge ingress',
        'Automatic TLS 1.3 session resumption with zero-RTT handshakes'
      ]
    },
    coldstart: {
      title: 'Zero-Cold-Start V8 Micro-Isolates',
      description: 'Traditional Docker containers take 2-15 seconds to spin up. NovaSphere isolates initialize in under 800 microseconds with 1/1000th the memory overhead.',
      points: [
        'Snapshot memory restoration in under 1 millisecond',
        'Native WebAssembly (Wasm) and Node.js v22 compatible API surface',
        'Instant horizontal auto-scaling from 0 to 100,000 instances instantly'
      ]
    }
  };

  const current = architectures[activeTab];

  return (
    <section className="section-padding" id="architecture">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-emerald">
            <ShieldCheck size={14} />
            <span>Deep Tech Foundation</span>
          </div>
          <h2>Enterprise Security Meets Unbounded Speed</h2>
          <p>
            No tradeoffs between zero-trust isolation and bleeding-edge response times. See how NovaSphere redefines modern cloud infrastructure.
          </p>
        </div>

        {/* Showcase Card */}
        <div className="arch-card">
          {/* Left image column */}
          <div className="arch-image-col">
            <img 
              src="/security-mesh.jpg" 
              alt="NovaSphere Zero-Trust Hardware Cryptographic Enclave visual" 
              loading="lazy"
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              right: '20px',
              background: 'rgba(7, 9, 14, 0.85)',
              backdropFilter: 'blur(10px)',
              padding: '12px 18px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Fingerprint size={20} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Enclave Defense: Verified Active</span>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>SOC2 Type II</span>
            </div>
          </div>

          {/* Right content column */}
          <div className="arch-content-col">
            {/* Tab switchers */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`filter-pill ${activeTab === 'enclave' ? 'active' : ''}`}
                onClick={() => setActiveTab('enclave')}
              >
                Confidential Enclave
              </button>
              <button
                type="button"
                className={`filter-pill ${activeTab === 'mesh' ? 'active' : ''}`}
                onClick={() => setActiveTab('mesh')}
              >
                Anycast Mesh
              </button>
              <button
                type="button"
                className={`filter-pill ${activeTab === 'coldstart' ? 'active' : ''}`}
                onClick={() => setActiveTab('coldstart')}
              >
                Micro-Isolates
              </button>
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '14px', lineHeight: 1.25 }}>
              {current.title}
            </h3>

            <p style={{ marginBottom: '24px' }}>
              {current.description}
            </p>

            <div className="arch-points-list">
              {current.points.map((pt, i) => (
                <div key={i} className="arch-point-item">
                  <div className="arch-point-icon">
                    <CheckCircle size={16} />
                  </div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onTriggerToast(`Downloaded NovaSphere Security Whitepaper (PDF).`)}
              >
                <span>Read Security Whitepaper</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
