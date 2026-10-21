const testimonials = [
  {
    quote:
      '“Their audit uncovered structural concurrency flaws that three previous external audits completely overlooked. They didn\'t just give us a 90-page PDF; they sat with our principal architects and refactored the streaming core in two weeks.”',
    author: 'Elena Rostova',
    role: 'CTO & Co-Founder // Veloce Networks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAH5CwaAuHsq6kKqv4qtZNVUEAIWisCcHDcZ9WhDZXfJJ6ybjRRF2gT92Axj8YgLjs1CcEmWBGcimVQqex5ztoFmt-9RJCe6bhrGHy3yeuBcSvO2snrt_aDpGm_B2YAgkyDX3KKdSwXnnmi--HD4jkuKcyBketTYxHE1071saA9BXD0rZhO-UG6hW-jFfgkhZDvTQ86dIkCLYs993D9tvAMVftkB5ud2Raj-fNFMNzjewF6kVa55wHb',
  },
  {
    quote:
      '“Our Series C investors mandated a comprehensive technical review prior to close. Studio Architecture executed the diligence with unmatched precision and speed, providing clear validation for both our founders and board members.”',
    author: 'Marcus Chen',
    role: 'VP of Infrastructure // Synthetix AI',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaq9_vKndjXeYTqK_oxqIUZS6TLW9roH9bfZjKderMgGlCH7M6AdHwYi6tMIKMxO17OTUlgZ01GWd7YVeI5JxlgYmxfF6GqzHnebMfc5iaq9EH04MCP5ux1asEPa9XN2qc0KD-clFMiNDRUhJ1SsOSyLLAnSRFfOzFcFrO4mPfgn2b1PAVT4eIObmDS4QBGSse246AZwJVWLBHQ8BUc4EZRSMGIGgGQEyYlRb7Xt5ER-WEz1sNTukv',
  },
];

export default function Testimonials() {
  return (
    <div className="w-full py-10 flex flex-col gap-10" id="testimonials">
      <div className="max-w-2xl">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          Peer Endorsements
        </span>
        <h2
          className="text-[1.875rem] md:text-[2.5rem] font-medium leading-tight tracking-[-0.02em] md:tracking-[-0.03em] text-[var(--color-text-primary)] mt-1"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Trusted by engineering executives navigating hyper-growth.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[var(--color-border-hover)]"
          >
            <p
              className="text-lg leading-relaxed text-[var(--color-text-primary)] italic mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t.quote}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)]">
              <img
                src={t.image}
                alt={t.author}
                className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-[var(--color-border)]"
                loading="lazy"
              />
              <div>
                <div
                  className="text-lg font-semibold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {t.author}
                </div>
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-tertiary)]"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
