import { useState } from 'react';
import { CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export default function AdvisoryIntake() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stage: 'growth',
    objective: 'arch',
    overview: '',
    nda: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full py-10 my-4" id="advisory-intake">
      <div className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-6 md:p-10 shadow-sm flex flex-col lg:flex-row gap-10 justify-between items-start">
        {/* Context Column */}
        <div className="lg:w-5/12 flex flex-col justify-between h-full">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-primary)] mb-4 shadow-xs"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow"></span>
              Direct Principal Engagement
            </div>

            <h2
              className="text-[1.875rem] md:text-[2.5rem] font-bold tracking-tight text-[var(--color-text-primary)] mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Initiate Architectural Assessment.
            </h2>

            <p
              className="text-[15px] leading-relaxed text-[var(--color-text-secondary)] mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Direct collaboration with senior systems consultants. No junior account handlers. We evaluate system health, conduct high-stakes refactors, and provide fractional VP Architecture advisory.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Guaranteed response time: < 24 business hours',
                'Custom Mutual NDA executed before codebase access',
                'Available for globally distributed leadership teams',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <CheckCircle2 size={18} className="text-[var(--color-accent)] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-4 rounded-lg text-[11px] font-semibold text-[var(--color-text-tertiary)] flex items-center justify-between shadow-sm mt-4"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            <span className="truncate">Direct Wire: advisory@studioarch.internal</span>
            <span className="text-[var(--color-text-primary)] uppercase tracking-wider font-bold flex items-center gap-1 flex-shrink-0 ml-2">
              <ShieldCheck size={14} className="text-[var(--color-accent)]" />
              PGP Verified
            </span>
          </div>
        </div>

        {/* Clean Advisory Form */}
        <div className="w-full lg:w-6/12 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-6 md:p-8 rounded-xl shadow-sm">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3
                className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Transmission Acknowledged
              </h3>
              <p
                className="text-sm text-[var(--color-text-secondary)] max-w-sm mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                A Senior Principal will review stack specifics and reply within 24 business hours under mutual NDA.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-border)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Executive Name
                  </label>
                  <input
                    className="w-full px-4 py-2.5 bg-[var(--color-input-bg)] border border-[var(--color-input-border)] rounded-sm text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    placeholder="Dr. Sarah Lin"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Corporate Work Email
                  </label>
                  <input
                    className="w-full px-4 py-2.5 bg-[var(--color-input-bg)] border border-[var(--color-input-border)] rounded-sm text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    placeholder="s.lin@enterprise.io"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Company Scale / Stage
                  </label>
                  <select
                    className="w-full px-4 py-2.5 bg-[var(--color-input-bg)] border border-[var(--color-input-border)] rounded-sm text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  >
                    <option value="growth">Series B to Pre-IPO ($20M-$100M ARR)</option>
                    <option value="enterprise">Public Enterprise / Multinational</option>
                    <option value="seed">High-velocity Seed / Series A</option>
                    <option value="pe">Private Equity / Investment Sponsor</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    Primary Objective
                  </label>
                  <select
                    className="w-full px-4 py-2.5 bg-[var(--color-input-bg)] border border-[var(--color-input-border)] rounded-sm text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  >
                    <option value="arch">Core System Modernization &amp; Decoupling</option>
                    <option value="finops">FinOps &amp; Cloud Infrastructure Cost Trim</option>
                    <option value="diligence">Pre-Acquisition Technical Due Diligence</option>
                    <option value="incident">Critical Performance / Reliability Emergency</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  System Scope &amp; Architecture Overview
                </label>
                <textarea
                  className="w-full px-4 py-2.5 bg-[var(--color-input-bg)] border border-[var(--color-input-border)] rounded-sm text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)] transition-all resize-y"
                  placeholder="Outline your current stack (e.g., AWS, K8s, PostgreSQL, Kafka), transactional scale, and urgent engineering milestones..."
                  rows={4}
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="nda-req"
                  type="checkbox"
                  checked={formData.nda}
                  onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                  className="w-4 h-4 rounded-sm border-[var(--color-input-border)] accent-[var(--color-accent)] focus:ring-0 cursor-pointer"
                />
                <label
                  htmlFor="nda-req"
                  className="text-xs text-[var(--color-text-secondary)] cursor-pointer select-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Transmit digital standard 2-way Mutual NDA prior to technical discovery
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-sm bg-[var(--color-accent)] text-[var(--color-on-accent)] text-[13px] font-semibold uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all duration-200 mt-2 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                <span>Request Strategic Architecture Session</span>
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
