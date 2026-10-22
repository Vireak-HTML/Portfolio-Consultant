import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Services', href: '#capabilities' },
  { label: 'Selected work', href: '#case-studies' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#advisory-intake' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-nav-bg)] shadow-sm backdrop-blur-2xl">
      <div className="h-16 max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        <a href="#overview" className="flex min-w-0 items-center gap-3" aria-label="Independent software consultant, home">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-bold text-[var(--color-on-accent)]">
            <span>SC</span>
          </div>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] sm:inline-block">
            Independent <span className="text-[var(--color-text-tertiary)]">/</span> Software Consultant
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] p-1 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-xs font-semibold tracking-[0.01em] transition-all
                ${i === 0
                  ? 'bg-[var(--color-badge-bg)] text-[var(--color-text-primary)] shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3 py-1.5 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] font-semibold text-[var(--color-text-secondary)]">
              Open to select projects
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] p-2 text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-2)]"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] p-2 text-[var(--color-text-primary)] lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-[var(--color-border)] bg-[var(--color-canvas)] lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-1)] hover:text-[var(--color-text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
