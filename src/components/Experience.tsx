import { experiences } from '@/data/experience';
import Reveal from '@/hooks/Reveal';

export default function Experience() {

  return (
    <Reveal>
    <section
      id="experience"
      className="py-24"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="section-label mb-3">Experience</p>
        <h2
          className="font-heading font-bold text-3xl mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
        >
          Where I've Worked
        </h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 250}>
            <article
              key={exp.id}
              className="card p-6 md:p-8 grid md:grid-cols-[200px_1fr] gap-6"
            >
              {/* Left column: period + company */}
              <div>
                <p
                  className="text-xs mb-1"
                  style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {exp.period}
                </p>
                <p
                  className="font-semibold text-sm"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {exp.company}
                </p>
                {exp.current && (
                  <span
                    className="inline-flex items-center gap-1.5 mt-2 text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(75,121,230,0.12)',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'var(--color-accent)',
                        animation: 'blink 2s ease infinite',
                        display: 'inline-block',
                      }}
                    />
                    Current
                  </span>
                )}
              </div>

              {/* Right column: role + description + tags */}
              <div>
                <h3
                  className="font-heading font-semibold text-lg mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
                >
                  {exp.role}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
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
