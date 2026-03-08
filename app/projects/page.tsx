'use client';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { PROJECTS } from '@/lib/data';

const FILTERS = [
  { key: 'all',       label: 'Tous' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'backend',   label: 'Backend' },
  { key: 'frontend',  label: 'Frontend' },
];

const CATEGORY: Record<string, string> = {
  'tantsaha':  'frontend',
  'stack-task':'fullstack',
  'realworld': 'backend',
  'music-app': 'frontend',
  'ecommerce': 'fullstack',
  'school-id': 'fullstack',
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const visible = PROJECTS.filter(p => filter === 'all' || CATEGORY[p.id] === filter);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-24">
        <Reveal><p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>Portfolio</p></Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>Mes projets</h1>
        </Reveal>
        <Reveal delay={2} className="mb-10 max-w-xl text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Chaque projet est une opportunité d'apprendre, d'expérimenter et de livrer quelque chose de concret.
        </Reveal>

        {/* Filter tabs */}
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="px-5 py-1.5 rounded-full text-sm font-semibold border transition-all"
              style={{
                borderColor: filter === f.key ? 'var(--accent)' : 'var(--border)',
                color:       filter === f.key ? 'var(--accent)' : 'var(--text-muted)',
                background:  filter === f.key ? 'var(--accent-sub)' : 'transparent',
              }}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) as 0|1} className="card flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="tag-muted text-xs mb-2 block">{p.role} · {p.type}</span>
                  <h2 className="font-display text-2xl font-semibold">{p.name}</h2>
                </div>
                <div className="text-3xl">{p.emoji}</div>
              </div>

              {/* Placeholder image — REVIEW: remplacer par screenshot */}
              <div className="h-44 rounded-xl flex items-center justify-center text-5xl mb-5"
                   style={{ background: 'var(--accent-sub)' }}>
                {p.emoji}
              </div>

              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>{p.summary}</p>

              <ul className="text-xs space-y-1 mb-4" style={{ color: 'var(--text-muted)' }}>
                {p.details.slice(0, 3).map(d => (
                  <li key={d} className="flex items-start gap-2">
                    <span style={{ color: 'var(--accent)' }} className="mt-0.5">▸</span>{d}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="flex gap-3 mt-auto pt-2">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2 px-4 text-sm">
                    Voir le site
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost py-2 px-4 text-sm">
                    GitHub →
                  </a>
                )}
                {!p.link && !p.github && (
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {p.status === 'wip' ? '🔧 En cours de développement' : '/* REVIEW: ajouter lien */'}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="mb-5" style={{ color: 'var(--text-muted)' }}>Vous avez un projet en tête ?</p>
          <Link href="/contact" className="btn btn-primary">Me contacter →</Link>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
