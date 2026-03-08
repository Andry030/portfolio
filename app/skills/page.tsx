import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import SkillBars from '@/components/SkillBars';
import { SKILLS } from '@/lib/data';

export const metadata: Metadata = { title: 'Compétences' };

const CATEGORIES = [
  { key: 'backend',   title: 'Backend & API',   icon: '⚡', data: SKILLS.backend },
  { key: 'frontend',  title: 'Frontend',        icon: '🎨', data: SKILLS.frontend },
  { key: 'databases', title: 'Bases de données', icon: '🗄️', data: SKILLS.databases },
  { key: 'devops',    title: 'DevOps & Outils', icon: '🚀', data: SKILLS.devops },
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
                  {cat.icon}
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
                <span className="text-2xl">{l.icon}</span>
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
