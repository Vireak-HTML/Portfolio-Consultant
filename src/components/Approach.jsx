import { ArrowDownRight, ArrowUpRight, CircleCheck, MessagesSquare } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessagesSquare,
    title: 'Start with the real problem',
    description:
      'We get aligned on the context, constraints, and outcome you need—before jumping into solutions.',
  },
  {
    number: '02',
    icon: ArrowDownRight,
    title: 'Make the complex understandable',
    description:
      'I work with your team to uncover trade-offs, surface risk, and turn technical uncertainty into clear options.',
  },
  {
    number: '03',
    icon: CircleCheck,
    title: 'Leave with a way forward',
    description:
      'You get decisions, ownership, and a practical next step—whether that is a roadmap, a review, or hands-on delivery.',
  },
];

export default function Approach() {
  return (
    <section className="w-full py-12 md:py-16" id="approach">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            How I work
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-[var(--color-text-primary)] md:text-4xl">
            Clear thinking, useful outcomes.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
            The best engagement leaves your team better equipped than it was before. No theater,
            no oversized reports—just the right depth of support for the problem at hand.
          </p>
          <a
            href="#advisory-intake"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            Tell me what you are working through <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-6 md:px-8">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <article key={number} className="grid gap-4 py-6 sm:grid-cols-[48px_1fr] sm:gap-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-accent)]">
                <Icon size={19} strokeWidth={1.8} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-text-tertiary)]">
                    {number}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                    {title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
