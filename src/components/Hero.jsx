import { ArrowDown, ArrowRight, Cloud, Layers3, UsersRound } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" id="overview">
      <div className="hero-orbit" aria-hidden="true">
        <div className="hero-orbit__ring hero-orbit__ring--outer" />
        <div className="hero-orbit__ring hero-orbit__ring--inner" />
        <div className="hero-orbit__core"><Layers3 size={36} strokeWidth={1.2} /></div>
      </div>

      <div className="relative grid min-h-[620px] items-center gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:min-h-[700px]">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-badge-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            Independent software consultant
          </div>

          <h1 className="max-w-3xl font-display text-[clamp(3rem,7vw,5.75rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[var(--color-text-primary)]">
            Make complex software work{' '}
            <span className="text-[var(--color-accent)]">beautifully.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)] md:text-xl">
            I partner with teams to untangle architecture, improve reliability, and build a
            clear path from technical decisions to business outcomes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#advisory-intake"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--color-on-accent)] transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Talk about your project <ArrowRight size={16} />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-1)]"
            >
              Explore selected work <ArrowDown size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-text-secondary)]">
            <span className="inline-flex items-center gap-2"><Layers3 size={16} /> Architecture</span>
            <span className="inline-flex items-center gap-2"><Cloud size={16} /> Cloud &amp; reliability</span>
            <span className="inline-flex items-center gap-2"><UsersRound size={16} /> Technical leadership</span>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center md:max-w-none">
          <div className="hero-visual-card">
            <span className="hero-visual-card__eyebrow">A clear view of the system</span>
            <div className="hero-visual-card__diagram" aria-label="Illustration of connected software services">
              <div className="diagram-node diagram-node--primary">Product</div>
              <div className="diagram-node diagram-node--top">API</div>
              <div className="diagram-node diagram-node--left">Data</div>
              <div className="diagram-node diagram-node--right">Cloud</div>
              <div className="diagram-node diagram-node--bottom">People</div>
              <span className="diagram-line diagram-line--one" />
              <span className="diagram-line diagram-line--two" />
              <span className="diagram-line diagram-line--three" />
              <span className="diagram-line diagram-line--four" />
            </div>
            <div className="hero-visual-card__footer">
              <span>Thoughtful systems. Practical change.</span>
              <span className="hero-visual-card__status"><span /> In sync</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
