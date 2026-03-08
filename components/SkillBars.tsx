'use client';
import { useEffect, useRef } from 'react';

interface Skill { name: string; level: number; }

export default function SkillBars({ skills }: { skills: Skill[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {skills.map(s => (
        <div key={s.name}>
          <div className="flex justify-between mb-1.5">
            <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{s.name}</span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.level}%</span>
          </div>
          <div className="skill-track">
            <div className="skill-fill" data-pct={s.level} />
          </div>
        </div>
      ))}
    </div>
  );
}
