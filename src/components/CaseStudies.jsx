const caseStudies = [
  {
    tag: 'Fintech Core Platform',
    meta: 'Series D Scale',
    title: 'Zero-Downtime Ledger Partitioning Under 85,000 TPS Surge',
    bottleneck: 'Single monolithic relational database suffering serial lock contention and catastrophic lock wait timeouts during global payment settlement windows.',
    solution: 'Implemented virtual partition sharding on user account tenancy, backed by a write-ahead log sequencer and append-only cryptographic event store.',
    outcomes: [
      { label: 'Outcome', value: '99.999% Availability Recorded' },
      { label: 'P99 Latency', value: '18ms (down from 1,420ms)' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXH2Q-238oU-jc6zXgCQRbpaba0tIQRLfZeuBcCyJx_V6FBDykDFWiCZ-GCvQXmEmBMA0JVDzCALBfeYPFIvth2gMNKg-CgdLzqc3JtxwBXwvxTkRla_IXqHhj2yHB0kBV8tqqIGcKLykOmBuFbtwD9X_-Q8va9h14OEswGbF-8RwKji0u5YivY2kAZrp_bY9J5X98foC9hzKgTENNDw3k3CLpHvkmHNe4YjRpeNR1x0mflmjEb47u',
    imageLabel: 'Exhibit A: Distributed Routing Mesh',
    reverse: false,
  },
  {
    tag: 'Autonomous AI Platform',
    meta: 'High Compute Cluster',
    title: 'Inference Pipeline Sizing & Kubernetes Multi-Cloud Autoscaling',
    bottleneck: 'Uncontrolled idle GPU allocation and node over-provisioning driving an astronomical $680k monthly cloud invoice with sub-14% hardware saturation.',
    solution: 'Designed a custom event-driven autoscaling queue utilizing fractional GPU slicing (MIG) paired with intelligent spot instance orchestration across multi-region pools.',
    outcomes: [
      { label: 'Monthly Savings', value: '$412,000 / month' },
      { label: 'GPU Saturation', value: '84.2% Sustained' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8GxmwO047_cbN5LrqR8kQSyUA3wXFZtHXoSRo6fUa2uv8aMFtgfe3lgYwCBYkwyvBIX117MlEi8JKLFx2T1a0ty_YFHgLn-J2XYYLpaBmzHCifeCm7Xq1xVFTFJ98V0k2j1K-WUSb-27qmbi05r51x6cW2Lh8b5vGeEk_Sb7X2yPYPDiWbj9m65A_A-WbL4NT-FR69TA5ZjM4DE6QB5H-X68EoHweS-of4Uxo1XB3_u3qrq67-Mwj',
    imageLabel: 'Exhibit B: GPU Inference Farm',
    reverse: true,
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full py-10 flex flex-col gap-10" id="case-studies">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]"
                style={{ fontFamily: 'var(--font-label)' }}>
            Proven Interventions
          </span>
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-medium leading-tight tracking-[-0.02em] md:tracking-[-0.03em] text-[var(--color-text-primary)] mt-1"
              style={{ fontFamily: 'var(--font-display)' }}>
            Architectural Case Studies
          </h2>
        </div>
        <p className="text-[13px] leading-5 tracking-[0.01em] text-[var(--color-text-tertiary)] max-w-sm"
           style={{ fontFamily: 'var(--font-body)' }}>
          All studies sanitized under client mutual nondisclosure agreements.
        </p>
      </div>

      {/* Case Study Cards */}
      {caseStudies.map((cs) => (
        <div
          key={cs.title}
          className={`bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm flex flex-col ${
            cs.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Content */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded bg-[var(--color-badge-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)]"
                      style={{ fontFamily: 'var(--font-label)' }}>
                  {cs.tag}
                </span>
                <span className="text-[var(--color-text-tertiary)] text-[11px] font-semibold"
                      style={{ fontFamily: 'var(--font-label)' }}>
                  {cs.meta}
                </span>
              </div>
              <h3 className="text-[1.75rem] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}>
                {cs.title}
              </h3>
              <div className="space-y-4 mt-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] block mb-1"
                        style={{ fontFamily: 'var(--font-label)' }}>
                    The Bottleneck
                  </span>
                  <p className="text-[15px] leading-6 text-[var(--color-text-secondary)]"
                     style={{ fontFamily: 'var(--font-body)' }}>
                    {cs.bottleneck}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] block mb-1"
                        style={{ fontFamily: 'var(--font-label)' }}>
                    Architectural Solution
                  </span>
                  <p className="text-[15px] leading-6 text-[var(--color-text-secondary)]"
                     style={{ fontFamily: 'var(--font-body)' }}>
                    {cs.solution}
                  </p>
                </div>
              </div>
            </div>
            {/* Outcomes */}
            <div className="mt-6 pt-4 flex items-center justify-between bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-4 rounded shadow-sm">
              {cs.outcomes.map((o) => (
                <div key={o.label}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] block"
                        style={{ fontFamily: 'var(--font-label)' }}>
                    {o.label}
                  </span>
                  <span className="text-xl font-semibold text-[var(--color-text-primary)] tracking-[-0.01em]"
                        style={{ fontFamily: 'var(--font-display)' }}>
                    {o.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative bg-[var(--color-surface-elevated)] border-l border-[var(--color-border)] min-h-[340px] flex items-center justify-center p-4">
            <img
              className="w-full h-full object-cover rounded-lg shadow-sm"
              src={cs.image}
              alt={cs.imageLabel}
              loading="lazy"
            />
            <div className={`absolute bottom-6 ${cs.reverse ? 'left-6' : 'right-6'} px-2 py-1 rounded bg-[var(--color-badge-bg)]/95 border border-[var(--color-border)] backdrop-blur-md text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--color-text-primary)] shadow-sm`}
                 style={{ fontFamily: 'var(--font-label)' }}>
              {cs.imageLabel}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
