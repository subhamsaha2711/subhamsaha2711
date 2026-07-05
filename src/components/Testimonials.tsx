import { testimonals } from '@/data/testimonals';
import { QuoteIcon } from './icons';
import Reveal from '@/hooks/Reveal';

export default function Testimonials() {
  return (
    <Reveal>
    <section
      id="testimonials"
      className="py-24"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="section-label mb-3">Testimonials</p>
        <h2
          className="font-heading font-bold text-3xl mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
        >
          What Clients Say
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {testimonals.map((t, i) => (
            <Reveal key={t.name} delay={i * 250}>
            <article
              key={t.name}
              className="card p-6 flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-4" style={{ color: 'var(--color-accent)' }}>
                <QuoteIcon size={18} />
              </div>

              {/* Comment */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: 'var(--color-secondary)' }}
              >
                {t.comment}
              </p>

              {/* Attribution */}
              <div
                className="pt-4"
                style={{ borderTop: '1px solid var(--color-stroke)' }}
              >
                <p className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                  {t.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {t.designation}
                </p>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}
