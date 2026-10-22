const focusAreas = [
  {
    number: '01',
    title: 'Architecture that fits',
    description: 'Practical system design and modernization plans shaped around your team, constraints, and goals.',
  },
  {
    number: '02',
    title: 'Cloud you can rely on',
    description: 'A grounded approach to performance, resilience, and infrastructure spend—without needless complexity.',
  },
  {
    number: '03',
    title: 'Leadership that builds momentum',
    description: 'Clear technical direction and hands-on partnership to help teams make decisions and deliver.',
  },
];

export default function Metrics() {
  return (
    <section className="mb-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
      {focusAreas.map((area) => (
        <article key={area.number} className="bg-[var(--color-surface-elevated)] p-6 md:p-8">
          <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)]">{area.number}</span>
          <h2 className="mt-6 font-display text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
            {area.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
            {area.description}
          </p>
        </article>
      ))}
    </section>
  );
}
