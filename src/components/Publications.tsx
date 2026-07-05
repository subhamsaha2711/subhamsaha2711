import { publications } from '@/data/publications';
import { ExternalIcon } from './icons';
import Reveal from '@/hooks/Reveal';

export default function Publications() {
  return (
    <Reveal>
    <section
      id="publications"
      className="py-24"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="section-label mb-3">Publications</p>
        <h2
          className="font-heading font-bold text-3xl mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
        >
          Writing on Engineering
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 250}>
            <article
              key={pub.title}
              className="card p-6 flex flex-col"
            >
              {/* Meta row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs"
                  style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {pub.date}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    color: '#fff',
                    background: 'var(--color-accent)',
                    border: '1px solid transparent',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {pub.platform}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-heading font-semibold text-base mb-2 leading-snug flex-1"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
              >
                {pub.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--color-secondary)' }}
              >
                {pub.description}
              </p>

              {/* Footer */}
              <div className="flex items-end justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={pub.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link shrink-0 ml-3"
                >
                  Read <ExternalIcon size={12} />
                </a>
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
