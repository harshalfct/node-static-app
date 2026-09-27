import React, { useState } from 'react';
import { 
  Zap, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onTriggerToast, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo" id="nav-brand-logo">
            <div className="brand-icon-box">
              <Zap size={22} strokeWidth={2.5} />
            </div>
            <span>Nova<span className="text-gradient-cyan">Sphere</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#features" className="nav-link" id="nav-link-features">Features</a>
            </li>
            <li>
              <a href="#playground" className="nav-link" id="nav-link-playground">Edge Playground</a>
            </li>
            <li>
              <a href="#architecture" className="nav-link" id="nav-link-architecture">Architecture</a>
            </li>
            <li>
              <a href="#pricing" className="nav-link" id="nav-link-pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials" className="nav-link" id="nav-link-reviews">Reviews</a>
            </li>
            <li>
              <a href="#faq" className="nav-link" id="nav-link-faq">FAQ</a>
            </li>
          </ul>

          {/* Action CTAs & Theme Toggle */}
          <div className="nav-actions">
            <button 
              type="button" 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              id="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button 
              type="button" 
              className="btn btn-primary btn-sm btn-desktop" 
              id="nav-cta-launch"
              onClick={() => onTriggerToast('Launching NovaSphere Console...')}
            >
              <span>Launch Console</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Menu Hamburger */}
            <button 
              type="button" 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" id="mobile-nav-drawer">
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#playground" onClick={() => setMobileMenuOpen(false)}>Edge Playground</a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <button 
            type="button" 
            className="btn btn-primary"
            style={{ marginTop: '12px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onTriggerToast('Opening NovaSphere Console...');
            }}
          >
            Launch Console
          </button>
        </div>
      )}
    </header>
  );
}
