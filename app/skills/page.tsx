import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import SkillBars from '@/components/SkillBars';
import { SKILLS } from '@/lib/data';

export const metadata: Metadata = { title: 'Compétences' };

const CATEGORIES = [
  {
    key: 'backend',
    title: 'Backend & API',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r=".8" fill="currentColor"/><circle cx="6" cy="12.5" r=".8" fill="currentColor"/><circle cx="6" cy="19.5" r=".8" fill="currentColor"/></svg>`,
    data: SKILLS.backend,
  },
  {
    key: 'frontend',
    title: 'Frontend',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    data: SKILLS.frontend,
  },
  {
    key: 'databases',
    title: 'Bases de données',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v5c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 10v5c0 1.7 4 3 9 3s9-1.3 9-3v-5"/></svg>`,
    data: SKILLS.databases,
  },
  {
    key: 'devops',
    title: 'DevOps & Outils',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    data: SKILLS.devops,
  },
];

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-24">
        <Reveal><p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>Stack & Outils</p></Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>Compétences</h1>
        </Reveal>
        <Reveal delay={2} className="mb-14 text-base leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Mon arsenal d'outils, construit à travers les projets et l'apprentissage continu.
        </Reveal>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.key} delay={(i % 2) as 0|1} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                     style={{ background: 'var(--accent-sub)' }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--accent-sub)' }}
                    dangerouslySetInnerHTML={{ __html: cat.icon }}
                  />
                </div>
                <h2 className="font-display text-xl font-semibold">{cat.title}</h2>
              </div>
              <SkillBars skills={cat.data} />
            </Reveal>
          ))}
        </div>

        {/* Programming languages */}
        <Reveal className="card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                 style={{ background: 'var(--accent-sub)' }}>💻</div>
            <h2 className="font-display text-xl font-semibold">Langages de programmation</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {SKILLS.languages.map(l => (
              <div key={l.name} className="flex flex-col items-center gap-1 px-5 py-3 rounded-xl border border-[var(--border)] min-w-[90px] text-center">
                <span className="text-2xl">
                  <div
                    className="w-8 h-8"
                    dangerouslySetInnerHTML={{ __html: l.icon }}
                  />
                </span>
                <span className="text-sm font-semibold">{l.name}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{l.level}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tools */}
        <Reveal delay={1} className="card">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                 style={{ background: 'var(--accent-sub)' }}>🛠</div>
            <h2 className="font-display text-xl font-semibold">Outils & Environnement</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.tools.map(t => <span key={t} className="tag-muted">{t}</span>)}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <Link href="/projects" className="btn btn-primary">Voir mes projets →</Link>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
