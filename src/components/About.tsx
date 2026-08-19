import { about, socials } from '@/data/personals';
import { GitHubIcon, CodeforcesIcon, LeetCodeIcon, HashnodeIcon } from './icons';
import Reveal from '@/hooks/Reveal';

const iconMap: Record<string, React.ReactNode> = {
  CodeForces: <CodeforcesIcon size={15} />,
  LeetCode:      <LeetCodeIcon size={15} />,
  HashNode:      <HashnodeIcon size={15} />,
  GitHub:      <GitHubIcon size={15} />,
};

export default function About() {
  return (
    <Reveal>
    <section
      id="about"
      className="py-24"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Label */}
        <p className="section-label mb-3">About</p>

        <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20">

          {/* Bio */}
          <div>
            <h2
              className="font-heading font-bold text-3xl mb-6 leading-snug"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', letterSpacing: '-0.01em' }}
            >
              Building systems<br />
              that don't break at scale.
            </h2>
            <p className="text-base mb-4 leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
              {about.p1}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
              {about.p2}
            </p>
          </div>

          {/* Socials */}
          <div>
            <p
              className="text-xs mb-4"
              style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Find me on
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.filter(({ name }) => ["CodeForces", "GitHub", "LeetCode", "HashNode"].includes(name)).map(({ name, handle, href }, i) => (
                <Reveal key={name} delay={i * 250}>
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span style={{ color: 'var(--color-accent)' }}>
                    {iconMap[name]}
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                      {name}
                    </span>
                    <span
                      className="text-xs truncate"
                      style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}
                    >
                      {handle}
                    </span>
                  </span>
                </a>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
    </Reveal>
  );
}
