import React from 'react';
import { X, Play, Zap, CheckCircle2, Shield, Globe2 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, onTriggerToast }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="brand-icon-box" style={{ width: '32px', height: '32px' }}>
              <Play size={16} fill="currentColor" />
            </div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>NovaSphere 2-Minute Architecture Walkthrough</h3>
          </div>
          <button 
            type="button" 
            className="theme-toggle-btn"
            style={{ width: '34px', height: '34px' }}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Video Preview Mockup with high quality visual */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            marginBottom: '20px',
            border: '1px solid var(--border-medium)',
            background: '#000'
          }}>
            <img 
              src="/hero-network.jpg" 
              alt="NovaSphere Architecture Video Preview" 
              style={{ width: '100%', height: '240px', objectFit: 'cover', opacity: 0.8 }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--gradient-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)',
                color: '#07090e',
                cursor: 'pointer'
              }}
              onClick={() => onTriggerToast('Streaming interactive HD demonstration...')}
              >
                <Play size={28} fill="currentColor" style={{ marginLeft: '4px' }} />
              </div>
              <span style={{ color: '#fff', fontSize: '0.85rem', marginTop: '12px', fontWeight: 600 }}>
                Interactive Architecture Simulation (02:14)
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <Zap size={18} color="var(--accent-cyan)" />
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginTop: '6px' }}>&lt; 1ms Startup</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>V8 Isolate Sandboxes</div>
            </div>
            <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <Shield size={18} color="var(--accent-emerald)" />
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginTop: '6px' }}>SEV-SNP Enclave</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Encrypted Memory Tiers</div>
            </div>
            <div style={{ background: 'var(--bg-tertiary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <Globe2 size={18} color="var(--accent-purple)" />
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginTop: '6px' }}>320+ Edge PoPs</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Autonomous Anycast</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
              Close
            </button>
            <button 
              type="button" 
              className="btn btn-primary btn-sm" 
              onClick={() => {
                onClose();
                onTriggerToast('Opening sandbox provisioner...');
              }}
            >
              Provision Free Sandbox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
