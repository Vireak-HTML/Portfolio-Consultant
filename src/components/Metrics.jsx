export default function Metrics() {
  const metrics = [
    {
      label: 'Technical Tenure',
      value: '12+',
      suffix: 'Years',
      description: 'Architecting distributed enterprise cores across fintech, autonomous systems, and Tier-1 infrastructure.',
    },
    {
      label: 'Cloud Capital Efficiency',
      value: '$140M+',
      suffix: '',
      description: 'Documented cloud infrastructure expenditure reduction through topology redesign and FinOps telemetry.',
    },
    {
      label: 'High-Stakes Reliability',
      value: '18 / 18',
      suffix: '',
      description: 'Complex live zero-downtime database and monolithic migrations executed without unplanned operational impact.',
    },
  ];

  return (
    <div className="w-full py-10 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl shadow-sm mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center md:items-start p-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-1"
                  style={{ fontFamily: 'var(--font-label)' }}>
              {m.label}
            </span>
            <div className="text-[2.5rem] md:text-[4.5rem] font-semibold tracking-tight text-[var(--color-text-primary)] leading-tight"
                 style={{ fontFamily: 'var(--font-display)' }}>
              {m.value}
              {m.suffix && (
                <span className="text-[1.75rem] font-medium text-[var(--color-text-secondary)] ml-1"
                      style={{ fontFamily: 'var(--font-display)' }}>
                  {m.suffix}
                </span>
              )}
            </div>
            <p className="text-[13px] leading-5 tracking-[0.01em] text-[var(--color-text-secondary)] mt-1 text-center md:text-left"
               style={{ fontFamily: 'var(--font-body)' }}>
              {m.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
