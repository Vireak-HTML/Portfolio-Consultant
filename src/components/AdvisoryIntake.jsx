import { useState } from 'react';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';

const contactEmail = 'hello@yourdomain.com';
const fieldClassName =
  'w-full rounded-xl border border-[var(--color-input-border)] bg-[var(--color-input-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20';
const labelClassName = 'text-sm font-medium text-[var(--color-text-primary)]';

export default function AdvisoryIntake() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    focus: 'Architecture & modernization',
    overview: '',
  });
  const [emailHref, setEmailHref] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Project enquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Area of focus: ${formData.focus}`,
      '',
      formData.overview,
    ].join('\n');
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailHref(href);
    setEmailHref(href);
  };

  return (
    <section className="w-full py-12 md:py-16" id="advisory-intake">
      <div className="grid overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-1)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-between p-6 md:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-badge-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Let&apos;s talk
            </span>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-[-0.045em] text-[var(--color-text-primary)] md:text-4xl">
              A good conversation is a useful place to start.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
              Share a little about the challenge, and I&apos;ll get back to you about whether I can help
              and what a sensible next step might look like.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
              Prefer email?
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)]"
            >
              <Mail size={15} /> {contactEmail}
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 md:p-10 lg:border-l lg:border-t-0">
          {emailHref ? (
            <div className="flex h-full min-h-64 flex-col items-start justify-center" role="status">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-1)] text-[var(--color-accent)]">
                <Mail size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[var(--color-text-primary)]">
                Your message is ready
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">
                Use the link below to open a draft in your email app. Review it and send it to start the
                conversation.
              </p>
              <a
                href={emailHref}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]"
              >
                Open email draft <ArrowRight size={16} />
              </a>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className={labelClassName} htmlFor="contact-name">Your name</label>
                  <input
                    autoComplete="name"
                    className={fieldClassName}
                    id="contact-name"
                    name="name"
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    placeholder="Jane Smith"
                    required
                    value={formData.name}
                  />
                </div>
                <div className="grid gap-2">
                  <label className={labelClassName} htmlFor="contact-email">Email address</label>
                  <input
                    autoComplete="email"
                    className={fieldClassName}
                    id="contact-email"
                    name="email"
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    placeholder="jane@company.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className={labelClassName} htmlFor="contact-focus">What would you like help with?</label>
                <select
                  className={fieldClassName}
                  id="contact-focus"
                  name="focus"
                  onChange={(event) => setFormData({ ...formData, focus: event.target.value })}
                  value={formData.focus}
                >
                  <option>Architecture &amp; modernization</option>
                  <option>Cloud &amp; reliability</option>
                  <option>Technical due diligence</option>
                  <option>Fractional technical leadership</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className={labelClassName} htmlFor="contact-overview">A little context</label>
                <textarea
                  className={`${fieldClassName} min-h-32 resize-y`}
                  id="contact-overview"
                  name="overview"
                  onChange={(event) => setFormData({ ...formData, overview: event.target.value })}
                  placeholder="What are you trying to solve?"
                  rows={4}
                  value={formData.overview}
                />
              </div>

              <p className="flex items-start gap-2 text-xs leading-5 text-[var(--color-text-tertiary)]">
                <ShieldCheck size={15} className="mt-0.5 shrink-0" />
                Please don&apos;t include sensitive or confidential information in your message.
              </p>

              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3.5 text-sm font-semibold text-[var(--color-on-accent)] transition-colors hover:bg-[var(--color-accent-hover)]"
                type="submit"
              >
                Prepare an email <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
