import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does NovaSphere differ from traditional AWS, GCP, or standard CDN providers?',
      a: 'Traditional clouds require configuring VPCs, multi-region database replicas, load balancers, and complex Kubernetes clusters. Standard CDNs only cache static assets. NovaSphere merges compute, AI models, and real-time data into 320+ distributed zero-trust edge enclaves that execute dynamic backend code with sub-millisecond cold starts.'
    },
    {
      q: 'How do you achieve cold start speeds under 1 millisecond?',
      a: 'Instead of spinning up full Linux kernel containers or bulky VMs (which take seconds), NovaSphere uses pre-warmed V8 execution isolates and optimized WebAssembly sandboxes. Code snapshots are restored from local NVMe memory tiers in under 800 microseconds.'
    },
    {
      q: 'Can I host standard React, Next.js, Vite, and Node.js applications?',
      a: 'Yes, seamlessly. NovaSphere natively detects Vite, Next.js, React, Astro, Remix, and standard Node.js applications. Git pushes automatically build and distribute assets globally with zero manual configuration.'
    },
    {
      q: 'What is a "Confidential Enclave" and why does it matter for my business?',
      a: 'In typical cloud environments, anyone with hypervisor root access or physical hardware access could theoretically inspect memory dumps. NovaSphere runs customer code inside hardware-shielded AMD SEV-SNP enclaves where memory is dynamically encrypted at the silicon level.'
    },
    {
      q: 'Are there hidden data egress charges or bandwidth penalties?',
      a: 'No. Traditional clouds penalize you up to $0.09/GB for data exiting their regions. NovaSphere provides generous bundled global bandwidth on all plans with flat, predictable overage rates that are up to 80% lower than legacy hyperscalers.'
    },
    {
      q: 'How do we migrate our existing production infrastructure?',
      a: 'We offer one-click GitHub and GitLab integrations, automated Terraform and Pulumi providers, and standard Docker container migration pipelines. Our enterprise solutions engineering team handles zero-downtime migration for all Pro and Enterprise tiers.'
    }
  ];

  const filteredFaqs = faqs.filter(item => 
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding" id="faq">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about the NovaSphere edge platform, architecture, security, and migration.
          </p>
        </div>

        {/* Real-time Search Box */}
        <div className="faq-search-box">
          <Search size={18} className="faq-search-icon" />
          <input
            type="text"
            className="faq-search-input"
            placeholder="Search questions (e.g. latency, migration, security, pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="faq-search-input"
            aria-label="Search FAQs"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list" id="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="faq-item">
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${idx}`}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={20} 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.25s ease',
                        color: isOpen ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        flexShrink: 0,
                        marginLeft: '12px'
                      }} 
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              No questions found matching "{searchQuery}". Try searching for "security", "pricing", or "speed".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
