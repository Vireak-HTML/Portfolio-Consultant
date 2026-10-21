import { Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-surface-elevated)] border-t border-[var(--color-border)] mt-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span
            className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)]"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Studio Architecture
          </span>
          <p
            className="text-xs text-[var(--color-text-secondary)] max-w-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            High-performance computing, architectural systems, and digital craftsmanship.
          </p>
          <span
            className="text-[11px] text-[var(--color-text-tertiary)] mt-1"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            &copy; 2025 Minimal Studio. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div
            className="flex items-center gap-3 text-xs uppercase tracking-wider font-semibold"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              GitHub
            </a>
            <span className="text-[var(--color-border-hover)]">&middot;</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              X
            </a>
            <span className="text-[var(--color-border-hover)]">&middot;</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[var(--color-border-hover)]">&middot;</span>
            <a
              href="https://read.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              ReadCV
            </a>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-full shadow-xs">
            <Clock size={13} className="text-[var(--color-text-secondary)]" />
            <span
              className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              UTC-08:00 (PST)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
