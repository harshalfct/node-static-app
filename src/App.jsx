import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerRibbon from './components/PartnerRibbon';
import Features from './components/Features';
import LivePlayground from './components/LivePlayground';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [toasts, setToasts] = useState([]);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Initialize theme from system or storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('novasphere-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('novasphere-theme', nextTheme);
    triggerToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} mode`);
  };

  const triggerToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);

    // Auto-dismiss after 3.5s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app-root">
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern" aria-hidden="true"></div>

      {/* Navigation Bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onTriggerToast={triggerToast}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onTriggerToast={triggerToast} 
          onOpenDemo={() => setIsDemoOpen(true)} 
        />

        {/* Partners Ribbon */}
        <PartnerRibbon />

        {/* Core Features & Capabilities */}
        <Features onTriggerToast={triggerToast} />

        {/* Interactive Live Playground / Topology Calculator */}
        <LivePlayground onTriggerToast={triggerToast} />

        {/* Architecture & Confidential Enclaves */}
        <ArchitectureShowcase onTriggerToast={triggerToast} />

        {/* Pricing Matrix */}
        <Pricing onTriggerToast={triggerToast} />

        {/* Customer Proof & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Instant Sandbox Activation & Newsletter */}
        <ContactCTA onTriggerToast={triggerToast} />
      </main>

      {/* Semantic Footer */}
      <Footer onTriggerToast={triggerToast} />

      {/* Interactive Walkthrough Modal */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        onTriggerToast={triggerToast}
      />

      {/* Dynamic Floating Toast Feedback */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
