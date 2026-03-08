'use client';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { PROJECTS } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Modal from '@/components/Modal';

// ── Types ─────────────────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  role: string;
  type: string;
  status: string;
  emoji: string;
  summary: string;
  details: string[];
  tech: string[];
  link: string;
  github: string;
  images?: string[];
}

// ── Filters ───────────────────────────────────────────────────────
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

// ── Page ──────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [filter,  setFilter]  = useState('all');
  const [active,  setActive]  = useState<Project | null>(null);

  const visible = (PROJECTS as Project[]).filter(
    p => filter === 'all' || CATEGORY[p.id] === filter
  );

  return (
    <>
      <Navbar />

      {active && <Modal project={active} onClose={() => setActive(null)} />}

      <main className="max-w-6xl mx-auto px-5 pt-32 pb-24">
        <Reveal>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
            Portfolio
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>
            Mes projets
          </h1>
        </Reveal>
        <Reveal delay={2} className="mb-10 max-w-xl text-base leading-relaxed"
                style={{ color: 'var(--text-muted)' }}>
          Chaque projet est une opportunité d'apprendre, d'expérimenter et de livrer quelque chose de concret.
        </Reveal>

        {/* Filters */}
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
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpen={() => setActive(p)}
            />
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