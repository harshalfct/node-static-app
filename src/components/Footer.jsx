import { Zap, ArrowUp, Activity, Globe, Terminal, Shield } from 'lucide-react';

export default function Footer({ onTriggerToast }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col">
            <a href="#hero" className="brand-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <div className="brand-icon-box">
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <span>Nova<span className="text-gradient-cyan">Sphere</span></span>
            </a>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px', maxWidth: '320px' }}>
              Autonomous edge infrastructure, zero-trust cryptographic enclaves, and sub-millisecond AI execution for forward-looking engineering teams.
            </p>
            <div className="status-badge-live">
              <span className="pulse-dot" style={{ backgroundColor: '#10b981' }}></span>
              <span>All 320+ Edge Enclaves Operational (99.999%)</span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links-list">
              <li><a href="#features" onClick={() => onTriggerToast('Navigating to Edge Compute...')}>Edge V8 Isolates</a></li>
              <li><a href="#architecture" onClick={() => onTriggerToast('Navigating to Confidential Enclaves...')}>Confidential Enclaves</a></li>
              <li><a href="#playground" onClick={() => onTriggerToast('Navigating to Topology Simulator...')}>Topology Simulator</a></li>
              <li><a href="#pricing" onClick={() => onTriggerToast('Navigating to Pricing Plans...')}>Global Pricing</a></li>
              <li><a href="#hero" onClick={() => onTriggerToast('Opening Anycast DNS specs...')}>Anycast Routing</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="footer-col">
            <h4>Developers</h4>
            <ul className="footer-links-list">
              <li><a href="#faq" onClick={() => onTriggerToast('Opening Documentation Portal...')}>Documentation</a></li>
              <li><a href="#faq" onClick={() => onTriggerToast('Opening API Reference...')}>REST &amp; GraphQL API</a></li>
              <li><a href="#faq" onClick={() => onTriggerToast('Opening CLI Guide...')}>Nova CLI Tool</a></li>
              <li><a href="#faq" onClick={() => onTriggerToast('Opening GitHub Samples...')}>SDKs &amp; Starters</a></li>
              <li><a href="#testimonials" onClick={() => onTriggerToast('Opening Changelog...')}>Changelog v3.4</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="footer-col">
            <h4>Security &amp; Legal</h4>
            <ul className="footer-links-list">
              <li><a href="#architecture" onClick={() => onTriggerToast('Viewing SOC2 Compliance Report...')}>SOC2 Type II Report</a></li>
              <li><a href="#architecture" onClick={() => onTriggerToast('Viewing ISO 27001 Certification...')}>ISO 27001 Specs</a></li>
              <li><a href="#architecture" onClick={() => onTriggerToast('Viewing HIPAA Whitepaper...')}>HIPAA BAA Policy</a></li>
              <li><a href="#faq" onClick={() => onTriggerToast('Viewing Privacy Terms...')}>Privacy Policy</a></li>
              <li><a href="#faq" onClick={() => onTriggerToast('Viewing Service Terms...')}>Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {new Date().getFullYear()} NovaSphere Cloud Technologies Inc. All rights reserved. Built with React &amp; Modern Web Standards.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              type="button" 
              className="btn btn-glass btn-sm"
              onClick={scrollToTop}
              id="btn-scroll-top"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
