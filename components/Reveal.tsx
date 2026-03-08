'use client';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
}

export default function Reveal({ children, className, style, delay = 0, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={clsx('reveal', delayClass, className)} style={style}>
      {children}
    </Tag>
  );
}