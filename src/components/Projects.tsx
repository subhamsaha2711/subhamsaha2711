import { projects } from '@/data/projects';
import { GitHubIcon, ExternalIcon } from './icons';
import Reveal from '@/hooks/Reveal';

export default function Projects() {
  return (
    <Reveal>
    <section
      id="projects"
      className="py-24"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="section-label mb-3">Projects</p>
        <h2
          className="font-heading font-bold text-3xl mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
        >
          Things I've Built
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 250}>
            <article
              key={project.title}
              className="card p-7 flex flex-col"
              style={{ minHeight: '260px' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="font-heading font-bold text-xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
                >
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 ml-4 mt-0.5"
                  style={{ color: 'var(--color-accent)', transition: 'color 0.18s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GitHubIcon size={20} />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--color-secondary)' }}>
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex items-end justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link shrink-0 ml-3"
                >
                  View <ExternalIcon size={12} />
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
