import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <a href="#overview" className="text-sm font-semibold text-[var(--color-text-primary)]">
            Independent Software Consultant
          </a>
          <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
            Thoughtful engineering for ambitious teams.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xs text-[var(--color-text-tertiary)] sm:flex-row sm:items-center sm:gap-6">
          <a href="#capabilities" className="transition-colors hover:text-[var(--color-text-primary)]">
            Services
          </a>
          <a href="#case-studies" className="transition-colors hover:text-[var(--color-text-primary)]">
            Selected work
          </a>
          <a
            href="#advisory-intake"
            className="inline-flex items-center gap-1 font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            Start a conversation <ArrowUpRight size={14} />
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
