import { GitBranch, BarChart3, Shield } from 'lucide-react';

export default function BentoGrid() {
  return (
    <div className="w-full py-10 flex flex-col gap-10" id="capabilities">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]"
                style={{ fontFamily: 'var(--font-label)' }}>
            Specialized Capabilities
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-medium leading-tight tracking-[-0.02em] md:tracking-[-0.03em] text-[var(--color-text-primary)] mt-1"
              style={{ fontFamily: 'var(--font-display)' }}>
            Engineering governance tailored for executive velocity.
          </h2>
        </div>
        <p className="text-[15px] leading-6 text-[var(--color-text-secondary)] max-w-md"
           style={{ fontFamily: 'var(--font-body)' }}>
          Engagement models designed around actionable blueprints, measurable metrics, and zero-bullshit engineering leadership.
        </p>
      </div>

      {/* Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: System Architecture */}
        <div className="md:col-span-7 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[var(--color-border-hover)] group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-10 h-10 rounded-lg bg-[var(--color-badge-bg)] border border-[var(--color-border)] shadow-sm flex items-center justify-center text-[var(--color-text-primary)]">
                <GitBranch size={20} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]"
                    style={{ fontFamily: 'var(--font-label)' }}>
                Track 01 // Architecture
              </span>
            </div>
            <h3 className="text-[1.75rem] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}>
              System Architecture &amp; Modernization
            </h3>
            <p className="text-[15px] leading-6 text-[var(--color-text-secondary)] mb-6"
               style={{ fontFamily: 'var(--font-body)' }}>
              Transition safely from brittle monolithic frameworks into modular, event-driven engines. We balance domain-driven microservices against right-sized modular monoliths, establishing deterministic protocols and fault boundaries.
            </p>

            {/* Topology Blueprint */}
            <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-4 rounded-lg mb-6 shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--color-text-tertiary)] mb-2"
                   style={{ fontFamily: 'var(--font-label)' }}>
                <span>Topology Blueprint</span>
                <span className="text-[var(--color-text-primary)] font-semibold">Decoupled Queue Pattern</span>
              </div>
              <div className="grid grid-cols-4 gap-1 items-center text-center text-[11px] font-semibold"
                   style={{ fontFamily: 'var(--font-label)' }}>
                <div className="py-1 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)]">API Gateway</div>
                <div className="py-1 bg-[var(--color-accent)] text-[var(--color-on-accent)] font-semibold rounded">Kafka Bus</div>
                <div className="py-1 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)]">Worker Mesh</div>
                <div className="py-1 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded text-[var(--color-text-primary)]">Global State</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 pt-4">
            {['Event Sourcing', 'Distributed Consensus', 'CQRS Pattern', 'PostgreSQL Partitioning'].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[var(--color-badge-bg)] border border-[var(--color-border)] rounded text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: 'var(--font-label)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Cloud Cost */}
        <div className="md:col-span-5 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[var(--color-border-hover)] group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="w-10 h-10 rounded-lg bg-[var(--color-badge-bg)] border border-[var(--color-border)] shadow-sm flex items-center justify-center text-[var(--color-text-primary)]">
                <BarChart3 size={20} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]"
                    style={{ fontFamily: 'var(--font-label)' }}>
                Track 02 // FinOps
              </span>
            </div>
            <h3 className="text-[1.75rem] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}>
              Cloud Cost Governance &amp; Scale
            </h3>
            <p className="text-[15px] leading-6 text-[var(--color-text-secondary)] mb-6"
               style={{ fontFamily: 'var(--font-body)' }}>
              Eliminating chronic cloud bloat without sacrificing burst throughput or availability. Deep workload telemetry and kernel tuning.
            </p>

            {/* FinOps Chart */}
            <div className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-4 rounded-lg mb-6 shadow-sm">
              <div className="flex justify-between items-center mb-1 text-[11px] font-semibold"
                   style={{ fontFamily: 'var(--font-label)' }}>
                <span className="text-[var(--color-text-tertiary)] uppercase">Typical AWS Spend Trim</span>
                <span className="text-[var(--color-text-primary)] font-semibold">-42.6% Compute Run-rate</span>
              </div>
              <svg className="w-full h-16 text-[var(--color-accent)]" fill="none" preserveAspectRatio="none" viewBox="0 0 300 64">
                <path d="M0,12 C40,16 60,8 100,28 C140,48 180,24 220,54 L300,56" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                <path d="M0,12 C40,16 60,8 100,28 C140,48 180,24 220,54 L300,56 L300,64 L0,64 Z" fill="currentColor" fillOpacity="var(--color-chart-fill-opacity)" />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 pt-4">
            {['Graviton Migration', 'Karpenter Autoscaling', 'Multi-AZ Egress Reduction'].map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[var(--color-badge-bg)] border border-[var(--color-border)] rounded text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"
                    style={{ fontFamily: 'var(--font-label)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3: Technical Diligence (Full width) */}
        <div className="md:col-span-12 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-sm transition-all duration-300 hover:border-[var(--color-border-hover)] group">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded bg-[var(--color-badge-bg)] border border-[var(--color-border)] shadow-sm flex items-center justify-center text-[var(--color-text-primary)]">
                <Shield size={18} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]"
                    style={{ fontFamily: 'var(--font-label)' }}>
                Track 03 // M&amp;A &amp; Growth Capital
              </span>
            </div>
            <h3 className="text-[1.75rem] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-1"
                style={{ fontFamily: 'var(--font-display)' }}>
              Technical Diligence for Growth Investors &amp; Boards
            </h3>
            <p className="text-[15px] leading-6 text-[var(--color-text-secondary)]"
               style={{ fontFamily: 'var(--font-body)' }}>
              Rapid 10-day intensive codebase inspection, vulnerability assessment, deployment chain audit, and talent capability indexing prior to Series B, Growth rounds, or PE acquisitions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto flex-shrink-0">
            {[
              { value: '10 Days', label: 'Executive Audit Turnaround' },
              { value: '40+', label: 'Vector Checkpoints' },
              { value: '100%', label: 'Unbiased Assessment' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-4 rounded text-center shadow-sm">
                <div className="text-xl font-semibold text-[var(--color-text-primary)] tracking-[-0.01em]"
                     style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]"
                      style={{ fontFamily: 'var(--font-label)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
