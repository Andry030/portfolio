import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import TypedText from '@/components/TypedText';
import { PERSON, PROJECTS, STATS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'ANDRIANAIVO Noé — Développeur Full-Stack | andry.ink',
};

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          {/* Background blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
                 style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05]"
                 style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-5 py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                <Reveal className="mb-6">
                  <span className="badge-open">
                    <span className="badge-dot" />
                    Disponible pour stage
                  </span>
                </Reveal>

                {/* Name — Cormorant display */}
                <Reveal delay={1}>
                  <h1 className="font-display leading-[0.95] tracking-tight mb-4"
                      style={{ fontSize: 'clamp(3.5rem,10vw,7.5rem)', fontWeight: 600 }}>
                    ANDRIANAIVO
                    <span className="block" style={{ color: 'var(--accent)' }}>Noé</span>
                  </h1>
                </Reveal>

                <Reveal delay={2} className="mb-6"
                  style={{ fontSize: 'clamp(1rem,2.5vw,1.25rem)', color: 'var(--text-muted)' }}>
                  <TypedText />
                </Reveal>

                <Reveal delay={3} className="mb-8 max-w-lg text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Étudiant en 2ᵉ année de Génie Logiciel à l'ISTA Ambositra, Madagascar.
                  Je construis des <strong style={{ color: 'var(--text)' }}>APIs robustes</strong> et des{' '}
                  <strong style={{ color: 'var(--text)' }}>applications full-stack</strong> modernes.
                </Reveal>

                <Reveal delay={4} className="flex flex-wrap gap-3">
                  <Link href="/projects" className="btn btn-primary">
                    Voir mes projets
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </Link>
                  <a href={PERSON.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger le CV
                  </a>
                </Reveal>

                {/* Social */}
                <Reveal delay={4} className="flex gap-5 mt-8">
                  <a href={PERSON.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                     style={{ color: 'var(--text-muted)' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={`mailto:${PERSON.email}`}
                     className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                     style={{ color: 'var(--text-muted)' }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Email
                  </a>
                </Reveal>
              </div>

              {/* Right — avatar + stats */}
              <div className="flex flex-col items-center gap-8">
                <Reveal delay={2}>
                  {/* Avatar placeholder — REVIEW: remplacer par <Image src="/images/avatar.jpg"> */}
                  <div className="relative">
                    <div className="w-44 h-44 rounded-full flex items-center justify-center font-display text-5xl font-semibold"
                         style={{
                           background: 'var(--bg-subtle)',
                           border: '3px solid var(--accent)',
                           boxShadow: '0 0 0 8px var(--accent-sub)',
                           color: 'var(--accent)',
                         }}>
                      AN
                    </div>
                    <span className="badge-open absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs">
                      <span className="badge-dot" />Madagascar
                    </span>
                  </div>
                </Reveal>

                {/* Stats */}
                <Reveal delay={3} className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  {STATS.map(s => (
                    <div key={s.label} className="card text-center !p-4 hover:translate-y-0">
                      <div className="font-display text-3xl font-bold" style={{ color: 'var(--accent)' }}>{s.value}</div>
                      <div className="text-xs mt-1 font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </Reveal>

                {/* Tech pills */}
                <Reveal delay={4} className="flex flex-wrap gap-2 justify-center">
                  {['NestJS','Flask','Next.js','PostgreSQL','TypeScript','Docker','Linux'].map(t => (
                    <span key={t} className={t.length < 8 ? 'tag-muted' : 'tag'}>{t}</span>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section className="border-y border-[var(--border)]" style={{ background: 'var(--bg-card)' }}>
          <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { v: '2023–25', l: 'ISTA Ambositra' },
              { v: 'API REST', l: 'Expertise' },
              { v: '3×', l: 'Déployé en prod' },
              { v: 'FR · EN', l: '+ Malagasy natif' },
            ].map(s => (
              <Reveal key={s.l}>
                <div className="font-display text-2xl font-bold" style={{ color: 'var(--accent)' }}>{s.v}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: 'var(--text-muted)' }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="max-w-6xl mx-auto px-5 py-24">
          <Reveal className="mb-1">
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Projets phares</p>
          </Reveal>
          <Reveal delay={1} className="font-display mb-12" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 600 }}>
            Ce que j'ai construit
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) as 0|1|2} className="card flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                       style={{ background: 'var(--accent-sub)' }}>
                    {p.emoji}
                  </div>
                  {p.status === 'wip' ? (
                    <span className="badge-open text-xs py-0.5 px-2"><span className="badge-dot" />En cours</span>
                  ) : (
                    <span className="tag-muted text-xs">{p.type}</span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>{p.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0,3).map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                     className="text-sm font-semibold flex items-center gap-1 transition-colors hover:underline"
                     style={{ color: 'var(--accent)' }}>
                    Voir le projet
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                ) : p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                     className="text-sm font-semibold flex items-center gap-1 transition-colors hover:underline"
                     style={{ color: 'var(--accent)' }}>
                    GitHub →
                  </a>
                ) : (
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Dépôt privé</span>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link href="/projects" className="btn btn-ghost">Voir tous les projets →</Link>
          </Reveal>
        </section>

        {/* ── STACK BAND ── */}
        <section className="border-y border-[var(--border)]" style={{ background: 'var(--bg-subtle)' }}>
          <div className="max-w-6xl mx-auto px-5 py-14">
            <Reveal>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>Stack technique</p>
            </Reveal>
            <Reveal delay={1} className="flex flex-wrap gap-2 mb-8">
              {['Node.js','NestJS','Express','Flask','Next.js','React','TypeScript','Python','PHP','PostgreSQL','MySQL','Docker','Git','Linux','PM2','Tailwind CSS','JWT'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </Reveal>
            <Reveal delay={2}>
              <Link href="/skills" className="btn btn-ghost text-sm">Voir le détail →</Link>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-6xl mx-auto px-5 py-28 text-center">
          <Reveal className="max-w-xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>Travaillons ensemble</p>
            <h2 className="font-display mb-5" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 600 }}>
              Vous avez un projet ?
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Je suis ouvert aux opportunités de stage et aux collaborations. N'hésitez pas à me contacter.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">Me contacter →</Link>
              <a href={`mailto:${PERSON.email}`} className="btn btn-ghost">Email direct</a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
