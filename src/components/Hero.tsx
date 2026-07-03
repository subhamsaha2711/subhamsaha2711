import { useState, useEffect } from 'react';
import { phrases, personals } from '@/data/personals';
import { ArrowDown, ArrowRight } from './icons';

interface CountUpProps {
  end: number;
  duration?: number; // milliseconds
}

function CountUp({
  end,
  duration = 2000,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}</>;
}

export default function Hero() {

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayPhrase, setDisplayPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayPhrase.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayPhrase(currentPhrase.slice(0, displayPhrase.length + 1));
        }, 45); // typing speed
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // pause after typing
      }
    } else {
      if (displayPhrase.length > 0) {
        timeout = setTimeout(() => {
          setDisplayPhrase(currentPhrase.slice(0, displayPhrase.length - 1));
        }, 25); // deleting speed
      } else {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayPhrase, isDeleting, phraseIndex]);


  return (
    <section
      className="relative min-h-screen flex flex-col justify-center hero-dots overflow-hidden"
      style={{ paddingTop: '4rem', alignItems: 'center' }}
    >
      {/* Radial fade edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, var(--color-canvas) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 40% at 50% 100%, var(--color-canvas) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 w-full py-24">

        {/* Location chip */}
        <div
          className="inline-flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-full text-xs"
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
          Currently Available
        </div>

        {/* Name */}
        <h1
          className="font-heading font-extrabold leading-none tracking-tight mb-5"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Subham Saha
        </h1>

        {/* Rotating phrase */}
        <div className="flex items-center gap-2 mb-10" style={{ minHeight: '2rem' }}>
          <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '1.05rem' }}>
            &#62;
          </span>
          <span
            className="font-mono text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-secondary)',
              display: 'inline-block',
            }}
          >
            {displayPhrase}
          </span>
          <span className="cursor-blink" aria-hidden="true" />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a href="#projects" className="btn-primary">
            View Work <ArrowRight size={13} />
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px w-full"
          style={{ borderTop: '1px solid var(--color-stroke)' }}
        >
          {personals.map(({ label, value, suffix }) => (
            <div
              key={label}
              className="pt-6 pr-6"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}
            >
              <p
                className="font-heading font-bold leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                <CountUp end={value} />
                <span
                  style={{
                    color: 'var(--color-accent)',
                    fontSize: '0.7em',
                  }}
                >
                  {suffix}
                </span>
              </p>              
              <p className="text-xs" style={{ color: 'var(--color-dim)', fontFamily: 'var(--font-mono)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: 'var(--color-accent)',
            animation: 'move 2s linear infinite',
          }}
        >
          <ArrowDown size={16}/>
        </div>
      </div>
    </section>
  );
}
