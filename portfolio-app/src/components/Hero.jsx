import { ArrowRight, ShieldCheck, Timer, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden" id="overview">
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[380px] bg-gradient-to-b from-[var(--color-glow-from)] via-[var(--color-glow-via)] to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative pt-12 pb-20 md:pt-20 md:pb-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Advisory Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border)] backdrop-blur-md shadow-sm mb-6 transition-transform hover:scale-[1.01]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-label)' }}>
            Now accepting select advisory clients for Q3
          </span>
          <ArrowRight size={14} className="text-[var(--color-text-secondary)]" />
        </div>

        {/* Main Headline */}
        <h1
          className="text-[2.75rem] md:text-[4.5rem] font-semibold leading-[3rem] md:leading-[4.75rem] tracking-[-0.03em] md:tracking-[-0.04em] text-[var(--color-text-primary)] max-w-4xl text-balance"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Strategic software architecture &amp; engineering consultancy for high-velocity teams.
        </h1>

        {/* Subheading */}
        <p
          className="text-lg leading-7 tracking-[-0.01em] text-[var(--color-text-secondary)] max-w-2xl mt-6 mb-10 text-balance"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Partnering with technology executives to design fault-tolerant systems, streamline cloud economics, and de-risk complex technical transformations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#advisory-intake"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3 bg-[var(--color-accent)] text-[var(--color-on-accent)] rounded-sm dark:rounded-sm rounded-full text-[13px] font-semibold uppercase tracking-[0.05em] shadow-sm hover:bg-[var(--color-accent-hover)] transition-all duration-200"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Schedule Architectural Audit
            <ArrowRight size={16} />
          </a>
          <a
            href="#case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3 bg-[var(--color-surface-1)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-sm dark:rounded-sm rounded-full text-[13px] font-semibold uppercase tracking-[0.05em] hover:bg-[var(--color-surface-2)] transition-all duration-200"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Review Selected Audits
          </a>
        </div>

        {/* Trust Meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]"
             style={{ fontFamily: 'var(--font-label)' }}>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[var(--color-accent)]" />
            Zero-Downtime Guarantee
          </span>
          <span className="text-[var(--color-border-hover)]">•</span>
          <span className="flex items-center gap-1.5">
            <Timer size={14} className="text-[var(--color-accent)]" />
            24h Response SLA
          </span>
          <span className="text-[var(--color-border-hover)]">•</span>
          <span className="flex items-center gap-1.5">
            <Lock size={14} className="text-[var(--color-accent)]" />
            Strict NDA Included
          </span>
        </div>
      </div>
    </div>
  );
}
