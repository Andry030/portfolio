import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { EXPERIENCE, EDUCATION, PERSON } from '@/lib/data';

export const metadata: Metadata = { title: 'Expérience' };

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-5 pt-32 pb-24">
        <Reveal><p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>Parcours</p></Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>Expérience & Formation</h1>
        </Reveal>
        <Reveal delay={2} className="mb-16 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Chaque expérience m'a forgé en tant que développeur.
        </Reveal>

        {/* Experiences */}
        <div className="mb-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--accent)' }}>💼 Expériences</h2>
          </Reveal>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.project} delay={(i % 3) as 0|1|2} className="tl-item">
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent)' }}>{e.project} — {e.type}</p>
                    </div>
                    <div className="shrink-0">
                      {e.wip ? (
                        <span className="badge-open text-xs"><span className="badge-dot" />En cours</span>
                      ) : (
                        <span className="tag-muted text-xs">{e.period}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{e.summary}</p>
                  <ul className="space-y-1.5 mb-4">
                    {e.tasks.map(t => (
                      <li key={t} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--accent)' }} className="mt-0.5 shrink-0">▸</span>{t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {e.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  {e.link && (
                    <a href={e.link} target="_blank" rel="noopener noreferrer"
                       className="text-sm font-semibold transition-colors hover:underline"
                       style={{ color: 'var(--accent)' }}>
                      ↗ {e.link.replace('https://', '')}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-14">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: 'var(--accent)' }}>🎓 Formation</h2>
          </Reveal>
          <div className="timeline">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.degree} delay={(i % 2) as 0|1} className="tl-item">
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                    <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
                    <span className="tag-muted text-xs shrink-0">{e.period}</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{e.school}</p>
                  {e.detail && <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{e.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex flex-wrap gap-3">
          <a href={PERSON.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Télécharger le CV →
          </a>
          <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
