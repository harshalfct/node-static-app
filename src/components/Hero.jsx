import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Server, 
  Activity, 
  Globe2, 
  ShieldCheck,
  Cpu,
  Zap,
  TrendingUp,
  RefreshCw
} from 'lucide-react';

export default function Hero({ onTriggerToast, onOpenDemo }) {
  const [activeConsoleTab, setActiveConsoleTab] = useState('traffic');
  const [autoScaleEnabled, setAutoScaleEnabled] = useState(true);

  // Tab data simulations
  const tabData = {
    traffic: {
      rps: autoScaleEnabled ? '482,910' : '184,200',
      latency: autoScaleEnabled ? '8.4 ms' : '18.2 ms',
      cacheHit: '99.4%',
      status: 'OPTIMAL (GLOBAL EDGES ACTIVE)',
      loadPercent: autoScaleEnabled ? 42 : 78
    },
    compute: {
      rps: autoScaleEnabled ? '94.2 TFLOPS' : '38.1 TFLOPS',
      latency: autoScaleEnabled ? '1.2 ms (V8 Isolate)' : '4.6 ms',
      cacheHit: '100% In-Memory',
      status: 'AUTO-BALANCED 18 REGIONS',
      loadPercent: autoScaleEnabled ? 54 : 88
    },
    security: {
      rps: '0 Exploits Passed',
      latency: 'Zero-Trust Enclave',
      cacheHit: '1,420 DDoS Mitigated',
      status: 'DEFENSE GRADE ACTIVE',
      loadPercent: 24
    }
  };

  const currentStats = tabData[activeConsoleTab];

  return (
    <section className="hero-section" id="hero">
      {/* Background radial aura glow */}
      <div className="hero-aura" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-content">
          {/* Release Badge */}
          <div className="hero-badge-wrap">
            <div className="badge" id="hero-announcement-badge">
              <span className="pulse-dot"></span>
              <span>NovaSphere v3.4 Engine Live</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span style={{ color: 'var(--text-primary)' }}>Autonomous Edge AI</span>
            </div>
          </div>

          {/* Primary SEO Heading */}
          <h1 className="hero-title" id="main-hero-heading">
            Deploy &amp; Scale Autonomous <br />
            <span className="text-gradient">Cloud Infrastructure</span> Worldwide
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Effortlessly deploy microservices, static applications, and ultra-low latency AI workloads across 320+ zero-trust edge enclaves in under 60 seconds.
          </p>

          {/* Dual Action Buttons */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              id="hero-cta-start-free"
              onClick={() => onTriggerToast('Redirecting to instant sandbox cluster...')}
            >
              <span>Start Free Deployment</span>
              <ArrowRight size={18} />
            </button>

            <button 
              type="button" 
              className="btn btn-secondary btn-lg"
              id="hero-cta-watch-demo"
              onClick={onOpenDemo}
            >
              <Play size={18} fill="currentColor" />
              <span>Watch 2-Min Demo</span>
            </button>
          </div>

          {/* Key Metric Highlights */}
          <div className="hero-stats-grid" id="hero-stats-container">
            <div className="glass-card hero-stat-card">
              <div className="stat-icon-wrap">
                <Activity size={22} />
              </div>
              <div>
                <div className="stat-val">99.999%</div>
                <div className="stat-label">SLA Uptime</div>
              </div>
            </div>

            <div className="glass-card hero-stat-card">
              <div className="stat-icon-wrap" style={{ color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.1)' }}>
                <Zap size={22} />
              </div>
              <div>
                <div className="stat-val">12ms</div>
                <div className="stat-label">P99 Global Latency</div>
              </div>
            </div>

            <div className="glass-card hero-stat-card">
              <div className="stat-icon-wrap" style={{ color: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.1)' }}>
                <TrendingUp size={22} />
              </div>
              <div>
                <div className="stat-val">14.8M+</div>
                <div className="stat-label">Req / Sec Peak</div>
              </div>
            </div>

            <div className="glass-card hero-stat-card">
              <div className="stat-icon-wrap" style={{ color: 'var(--accent-amber)', background: 'rgba(245, 158, 11, 0.1)' }}>
                <Globe2 size={22} />
              </div>
              <div>
                <div className="stat-val">320+</div>
                <div className="stat-label">Edge Enclaves</div>
              </div>
            </div>
          </div>

          {/* Interactive Console Window Showcase */}
          <div className="hero-console-window" id="hero-interactive-console">
            {/* Header controls */}
            <div className="console-header-bar">
              <div className="window-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>

              {/* Tabs */}
              <div className="console-tabs" role="tablist">
                <button 
                  type="button"
                  role="tab"
                  aria-selected={activeConsoleTab === 'traffic'}
                  className={`console-tab ${activeConsoleTab === 'traffic' ? 'active' : ''}`}
                  onClick={() => setActiveConsoleTab('traffic')}
                  id="tab-traffic"
                >
                  Global Traffic
                </button>
                <button 
                  type="button"
                  role="tab"
                  aria-selected={activeConsoleTab === 'compute'}
                  className={`console-tab ${activeConsoleTab === 'compute' ? 'active' : ''}`}
                  onClick={() => setActiveConsoleTab('compute')}
                  id="tab-compute"
                >
                  AI Compute
                </button>
                <button 
                  type="button"
                  role="tab"
                  aria-selected={activeConsoleTab === 'security'}
                  className={`console-tab ${activeConsoleTab === 'security' ? 'active' : ''}`}
                  onClick={() => setActiveConsoleTab('security')}
                  id="tab-security"
                >
                  Zero-Trust Enclave
                </button>
              </div>

              {/* Auto-Scale toggle */}
              <button 
                type="button"
                className="badge badge-emerald" 
                style={{ cursor: 'pointer', padding: '4px 10px' }}
                onClick={() => {
                  setAutoScaleEnabled(!autoScaleEnabled);
                  onTriggerToast(autoScaleEnabled ? 'Autonomous Auto-Scale paused' : 'Autonomous Auto-Scale activated');
                }}
                title="Click to toggle simulated auto-scale"
              >
                <RefreshCw size={12} className={autoScaleEnabled ? 'spin-anim' : ''} />
                <span>Auto-Scale: {autoScaleEnabled ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Console Content */}
            <div className="console-body">
              {/* Left: 3D Network Image Preview */}
              <div className="console-hero-img-wrap">
                <img 
                  src="/hero-network.jpg" 
                  alt="NovaSphere Autonomous Cloud Computing Mesh visualization" 
                  loading="eager"
                />
              </div>

              {/* Right: Real-time Telemetry & Metrics */}
              <div className="console-live-metrics">
                <div className="metric-row">
                  <div className="metric-row-label">
                    <Activity size={18} />
                    <span>Real-time Throughput</span>
                  </div>
                  <div className="metric-row-value">{currentStats.rps}</div>
                </div>

                <div className="metric-row">
                  <div className="metric-row-label">
                    <Zap size={18} />
                    <span>Edge Response</span>
                  </div>
                  <div className="metric-row-value" style={{ color: 'var(--accent-purple)' }}>
                    {currentStats.latency}
                  </div>
                </div>

                <div className="metric-row">
                  <div className="metric-row-label">
                    <ShieldCheck size={18} />
                    <span>Security &amp; Integrity</span>
                  </div>
                  <div className="metric-row-value" style={{ color: 'var(--accent-emerald)' }}>
                    {currentStats.cacheHit}
                  </div>
                </div>

                {/* Progress telemetry bar */}
                <div className="telemetry-bar-wrap">
                  <div className="telemetry-bar-label">
                    <span>Cluster Utilization Status</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{currentStats.loadPercent}% capacity</span>
                  </div>
                  <div className="telemetry-progress-bg">
                    <div 
                      className="telemetry-progress-fill" 
                      style={{ width: `${currentStats.loadPercent}%` }}
                    ></div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Mesh State: <strong style={{ color: 'var(--accent-cyan)' }}>{currentStats.status}</strong>
                  </span>
                  <button 
                    type="button" 
                    className="btn btn-glass btn-sm"
                    onClick={() => onTriggerToast('Running edge diagnostic probe... 100% healthy.')}
                  >
                    Run Probe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
