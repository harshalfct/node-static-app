import React, { useState } from 'react';
import { 
  Sliders, 
  Zap, 
  Globe2, 
  TrendingDown, 
  Activity, 
  Layers, 
  Check, 
  Sparkles 
} from 'lucide-react';

export default function LivePlayground({ onTriggerToast }) {
  const [requestsInMillions, setRequestsInMillions] = useState(15); // 1M to 50M
  const [edgeRegions, setEdgeRegions] = useState(12); // 1 to 24

  // Real-time calculations
  const estimatedLatency = Math.max(7, Math.round(52 - edgeRegions * 1.7));
  const estimatedBandwidthTB = (requestsInMillions * 0.42).toFixed(1);
  const legacyCloudCost = Math.round(requestsInMillions * 95 + edgeRegions * 180);
  const novaCost = Math.round(legacyCloudCost * 0.36);
  const monthlySavings = legacyCloudCost - novaCost;

  // List of regional cities to visually represent
  const sampleRegions = [
    'US-East (N. Virginia)', 'US-West (Oregon)', 'EU-Central (Frankfurt)',
    'EU-West (London)', 'AP-Southeast (Singapore)', 'AP-East (Tokyo)',
    'AP-South (Mumbai)', 'SA-East (São Paulo)', 'AU-Southeast (Sydney)',
    'ME-Central (Dubai)', 'CA-Central (Montreal)', 'AF-South (Cape Town)',
    'US-Central (Iowa)', 'EU-North (Stockholm)', 'AP-Northeast (Seoul)',
    'EU-West (Paris)', 'US-South (Texas)', 'AP-Southeast (Jakarta)'
  ];

  return (
    <section className="section-padding playground-section" id="playground">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-emerald">
            <Sparkles size={14} />
            <span>Interactive Simulator</span>
          </div>
          <h2>Live Cloud Topology &amp; Savings Calculator</h2>
          <p>
            Simulate your production traffic load and see how NovaSphere's autonomous edge routing slashes latency and trims infrastructure costs in real time.
          </p>
        </div>

        {/* Playground Card */}
        <div className="glass-card playground-card">
          <div className="playground-grid">
            {/* Left Controls */}
            <div>
              <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sliders size={20} color="var(--accent-cyan)" />
                <span>Configure Workload Parameters</span>
              </h3>

              {/* Slider 1: Traffic */}
              <div className="slider-group">
                <div className="slider-header">
                  <span className="slider-label">Monthly Request Volume</span>
                  <span className="slider-value-badge">{requestsInMillions} Million req/mo</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={requestsInMillions}
                  onChange={(e) => setRequestsInMillions(Number(e.target.value))}
                  className="custom-range-slider"
                  id="slider-request-volume"
                  aria-label="Monthly Request Volume"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <span>1M (Startup)</span>
                  <span>25M (Growth)</span>
                  <span>50M+ (Enterprise)</span>
                </div>
              </div>

              {/* Slider 2: Regions */}
              <div className="slider-group">
                <div className="slider-header">
                  <span className="slider-label">Deployed Edge Regions</span>
                  <span className="slider-value-badge">{edgeRegions} Global PoPs</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="18"
                  step="1"
                  value={edgeRegions}
                  onChange={(e) => setEdgeRegions(Number(e.target.value))}
                  className="custom-range-slider"
                  id="slider-edge-regions"
                  aria-label="Deployed Edge Regions"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <span>2 Regions (Local)</span>
                  <span>10 Regions (Global)</span>
                  <span>18 Regions (Full Mesh)</span>
                </div>
              </div>

              {/* Dynamic Region Pills Visualizer */}
              <div style={{ marginTop: '24px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '10px' }}>
                  Active Region Nodes ({edgeRegions} of 18 active):
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {sampleRegions.map((regionName, idx) => {
                    const isActive = idx < edgeRegions;
                    return (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-full)',
                          background: isActive ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                          border: `1px solid ${isActive ? 'rgba(0, 240, 255, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`,
                          color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isActive ? '● ' : '○ '}
                        {regionName}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Live Results Panel */}
            <div className="playground-results-panel">
              <h3 style={{ marginBottom: '20px', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
                Simulated Real-Time Benchmarks
              </h3>

              <div className="results-stats-list">
                <div className="results-stat-item">
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Estimated Global P99 Latency</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Under 95th percentile load</div>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
                    {estimatedLatency} ms
                  </div>
                </div>

                <div className="results-stat-item">
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Monthly Edge Bandwidth</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Zero egress surcharge</div>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {estimatedBandwidthTB} TB
                  </div>
                </div>

                <div className="results-stat-item">
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Estimated Monthly Savings</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Vs traditional AWS/GCP setup</div>
                  </div>
                  <div className="results-stat-big">
                    +${monthlySavings.toLocaleString()}/mo
                  </div>
                </div>
              </div>

              {/* Cost comparison bar */}
              <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span>Traditional Cloud: <del>${legacyCloudCost.toLocaleString()}</del></span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>NovaSphere: ${novaCost.toLocaleString()}</span>
                </div>
                <div style={{ height: '8px', background: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '36%', height: '100%', background: 'var(--accent-emerald)', borderRadius: '4px' }}></div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '6px', display: 'block' }}>
                  ⚡ Up to 64% direct infrastructure reduction with zero cold starts
                </span>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                id="btn-apply-config"
                onClick={() => onTriggerToast(`Provisioning config: ${requestsInMillions}M reqs across ${edgeRegions} edge regions.`)}
              >
                <Zap size={18} />
                <span>Simulate Cluster Provisioning</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
