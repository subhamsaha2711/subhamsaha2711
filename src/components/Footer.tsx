import { socials } from '@/data/personals';
import { XIcon, LinkedInIcon, TelegramIcon, WhatsAppIcon, MailIcon } from './icons';
import Reveal from '@/hooks/Reveal';

const iconMap: Record<string, React.ReactNode> = {
  'X / Twitter': <XIcon size={15} />,
  LinkedIn:      <LinkedInIcon size={15} />,
  Telegram:      <TelegramIcon size={15} />,
  WhatsApp:      <WhatsAppIcon size={15} />,
  Mail:          <MailIcon size={15} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Reveal>
    <footer
      id="contact"
      style={{ borderTop: '1px solid var(--color-stroke)' }}
    >
      {/* Contact CTA strip */}
      <div
        className="py-20"
        style={{ borderBottom: '1px solid var(--color-stroke)' }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Contact</p>
          <h2
            className="font-heading font-bold mb-4 leading-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)',
              letterSpacing: '-0.02em',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            }}
          >
            Let's build something together.
          </h2>
          <p
            className="text-base mb-8 max-w-md mx-auto"
            style={{ color: 'var(--color-secondary)' }}
          >
            Open to freelance projects, full-time roles, and interesting collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.filter(({ name }) => ["X / Twitter", "LinkedIn", "Telegram", "WhatsApp", "Mail"].includes(name)).map(({ name, href }, i) => (
              <Reveal key={name} delay={i * 250}>
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
                style={{ fontSize: '0.82rem' }}
              >
                <span style={{ color: 'var(--color-accent)' }}>{iconMap[name]}</span>
                {name}
              </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5 max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Logo + name */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Subham logo" width={22} height={22} style={{ width: 22, height: 22 }} />
          <span
            className="text-sm font-semibold"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
          >
            Subham
          </span>
        </a>

        <p
          className="text-xs"
          style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}
        >
          © {year} Subham Saha
        </p>
      </div>
    </footer>
    </Reveal>
  );
}
