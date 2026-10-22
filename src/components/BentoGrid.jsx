import { ArrowUpRight, CloudCog, Compass, GitBranch, ShieldCheck } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: GitBranch,
    title: 'Architecture & modernization',
    description:
      'Make confident technical choices, evolve legacy systems safely, and shape a roadmap your team can actually deliver.',
    tags: ['System design', 'Modernization', 'Technical strategy'],
    size: 'md:col-span-7',
  },
  {
    number: '02',
    icon: CloudCog,
    title: 'Cloud & reliability',
    description:
      'Improve resilience, performance, and cloud efficiency with a focus on the changes that matter most.',
    tags: ['Cloud platforms', 'Observability', 'FinOps'],
    size: 'md:col-span-5',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Technical due diligence',
    description:
      'Get an independent view of engineering risk, platform health, and the opportunities hidden in a codebase.',
    tags: ['Platform review', 'Risk assessment', 'Clear recommendations'],
    size: 'md:col-span-7',
  },
  {
    number: '04',
    icon: Compass,
    title: 'Fractional technical leadership',
    description:
      'Bring experienced technical direction to your team through a period of growth, change, or uncertainty.',
    tags: ['Team enablement', 'Delivery planning', 'Decision support'],
    size: 'md:col-span-5',
  },
];

export default function BentoGrid() {
  return (
    <section className="w-full py-12 md:py-16" id="capabilities">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            What I can help with
          </span>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-[var(--color-text-primary)] md:text-4xl">
            Senior technical thinking, made practical.
          </h2>
        </div>
        <a
          href="#advisory-intake"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          Discuss your needs <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {services.map(({ number, icon: Icon, title, description, tags, size }) => (
          <article
            key={number}
            className={`${size} flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-1)] p-6 transition-colors hover:border-[var(--color-border-hover)] md:p-8`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-accent)]">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-text-tertiary)]">
                  {number}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.04em] text-[var(--color-text-primary)]">
                {title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">
                {description}
              </p>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${title} topics`}>
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-badge-bg)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
