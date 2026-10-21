import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Selected Work', href: '#case-studies' },
  { label: 'Advisory & Architecture', href: '#capabilities' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#advisory-intake' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-2xl border-b border-[var(--color-border)] shadow-sm">
      <div className="h-16 max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[var(--color-accent)] flex items-center justify-center">
            <span className="text-[var(--color-on-accent)] font-bold text-sm font-[var(--font-display)]">SA</span>
          </div>
          <span className="font-semibold text-xs uppercase tracking-[0.08em] text-[var(--color-text-primary)] hidden sm:inline-block"
                style={{ fontFamily: 'var(--font-label)' }}>
            Studio Architecture
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-[var(--color-surface-1)] rounded-full border border-[var(--color-border)]">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-[0.02em] transition-all
                ${i === 0
                  ? 'bg-[var(--color-badge-bg)] text-[var(--color-text-primary)] shadow-sm'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              style={{ fontFamily: 'var(--font-label)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Availability pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"
                  style={{ fontFamily: 'var(--font-label)' }}>
              Available for Q2 advisory
            </span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center p-2 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)] transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex items-center p-2 rounded-full bg-[var(--color-surface-1)] border border-[var(--color-border)] text-[var(--color-text-primary)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-[var(--color-border)] bg-[var(--color-canvas)]">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-1)] transition-colors"
                style={{ fontFamily: 'var(--font-label)' }}
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
