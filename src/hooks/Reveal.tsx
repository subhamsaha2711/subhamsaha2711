import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}

export default function Reveal({
  children,
  delay = 0,
  y = 35,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el); // animate only once
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        transitionDelay: `${delay}ms`,
        ["--reveal-y" as any]: `${y}px`,
      }}
    >
      {children}
    </div>
  );
}