import { ArrowUpRight, Cloud, Gauge, Layers3 } from 'lucide-react';

const projects = [
  {
    number: '01',
    label: 'Platform modernization',
    title: 'Making room to change without stopping the business.',
    challenge:
      'A growing product was outpacing the limits of its tightly coupled platform, while a full rewrite felt too risky.',
    approach:
      'Mapped the critical journeys, identified safe seams, and planned an incremental path that let the team improve the system while continuing to ship.',
    outcome:
      'A prioritized modernization roadmap, clearer ownership boundaries, and a safer way to evolve the platform.',
    icon: Layers3,
    visual: 'modernization',
    diagram: ['Product', 'Core services', 'Shared data'],
  },
  {
    number: '02',
    label: 'Cloud & reliability',
    title: 'Turning infrastructure questions into a focused plan.',
    challenge:
      'Rising infrastructure complexity made it difficult to understand what was driving spend and where reliability risks sat.',
    approach:
      'Connected workload behavior to infrastructure costs, then worked with the team to prioritize observability, capacity, and resilience improvements.',
    outcome:
      'A transparent view of the biggest opportunities and a practical sequence of improvements the team could own.',
    icon: Cloud,
    visual: 'cloud',
    diagram: ['Workload', 'Signals', 'Decisions'],
  },
  {
    number: '03',
    label: 'Technical due diligence',
    title: 'A clear-eyed view of an unfamiliar codebase.',
    challenge:
      'Decision-makers needed to understand platform strengths, delivery risks, and technical investment needs before a major commitment.',
    approach:
      'Reviewed architecture, delivery practices, and operational readiness, then translated findings into plain-language options.',
    outcome:
      'A concise assessment that helped leadership focus follow-up questions and make an informed decision.',
    icon: Gauge,
    visual: 'diligence',
    diagram: ['Review', 'Evidence', 'Options'],
  },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className={`project-visual project-visual--${project.visual}`} aria-hidden="true">
      <div className="project-visual__topline">
        <span className="project-visual__mark"><Icon size={16} /></span>
        <span>System map / {project.number}</span>
        <span className="project-visual__dots">•••</span>
      </div>
      <div className="project-visual__flow">
        {project.diagram.map((item, index) => (
          <div className="project-visual__step" key={item}>
            <span className="project-visual__step-number">0{index + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="project-visual__caption">A clearer path from complexity to action</div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="w-full py-12 md:py-16" id="case-studies">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Selected work
          </span>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium leading-tight tracking-[-0.04em] text-[var(--color-text-primary)] md:text-4xl">
            Good consulting makes the next step clearer.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[var(--color-text-secondary)]">
          Representative engagement examples. Client names and confidential details are omitted.
        </p>
      </div>

      <div className="grid gap-5">
        {projects.map((project) => (
          <article
            key={project.number}
            className="grid overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-1)] lg:grid-cols-[0.85fr_1.15fr]"
          >
            <ProjectVisual project={project} />
            <div className="flex flex-col justify-center p-6 md:p-9">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)]">
                  {project.number}
                </span>
                <span className="h-px w-7 bg-[var(--color-border-hover)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]">
                  {project.label}
                </span>
              </div>
              <h3 className="mt-4 max-w-xl font-display text-2xl font-medium leading-tight tracking-[-0.04em] text-[var(--color-text-primary)] md:text-3xl">
                {project.title}
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
                    The challenge
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
                    The approach
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {project.approach}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-3 border-t border-[var(--color-border)] pt-5">
                <ArrowUpRight size={17} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <p className="text-sm leading-6 text-[var(--color-text-primary)]">{project.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
