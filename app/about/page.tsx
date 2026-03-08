import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import SkillBars from '@/components/SkillBars';
import { PERSON, EDUCATION, LANGUAGES } from '@/lib/data';

export const metadata: Metadata = { title: 'À propos' };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-24">
        <Reveal><p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>À propos</p></Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>Qui suis-je ?</h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 mt-12 items-start">

          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-5">

            {/* Avatar card */}
            <Reveal className="card text-center">
              {/* REVIEW: remplacer par <Image src="/images/avatar.jpg" ...> */}
              <div className="w-full h-52 rounded-xl flex items-center justify-center font-display text-6xl font-semibold mb-5"
                   style={{ background: 'var(--accent-sub)', color: 'var(--accent)' }}>
                AN
              </div>
              <h2 className="font-display text-xl font-semibold">{PERSON.name}</h2>
              <p className="text-sm mt-1 mb-4" style={{ color: 'var(--text-muted)' }}>Développeur Full-Stack · Madagascar</p>

              <div className="space-y-2 text-sm">
                <a href={`mailto:${PERSON.email}`} className="flex items-center gap-2 justify-center transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  {PERSON.email}
                </a>
                {PERSON.phone.map(p => (
                  <a key={p} href={`tel:${p.replace(/\s/g,'')}`} className="flex items-center gap-2 justify-center transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    {p}
                  </a>
                ))}
                <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  Andry-GitCrs
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-[var(--border)]">
                <span className="badge-open"><span className="badge-dot" />Open to work</span>
              </div>
            </Reveal>

            {/* Languages */}
            <Reveal delay={1} className="card">
              <h3 className="font-display text-lg font-semibold mb-5">Langues</h3>
              <SkillBars skills={LANGUAGES.map(l => ({ name: `${l.name} — ${l.level}`, level: l.pct }))} />
            </Reveal>
          </div>

          {/* Right main */}
          <div className="lg:col-span-3 space-y-6">
            <Reveal className="card">
              <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Mon parcours</h2>
              <p className="leading-relaxed mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Étudiant en <strong style={{ color: 'var(--text)' }}>2ᵉ année de Génie Logiciel</strong> à l'Université IST Ambositra Annexe Fandriana (2023–2025), je me suis rapidement passionné pour le développement web full-stack.
              </p>
              <p className="leading-relaxed mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Mes projets m'ont permis de développer une expertise concrète dans la conception d'<strong style={{ color: 'var(--text)' }}>APIs RESTful robustes</strong>, aussi bien côté serveur (NestJS, Flask) que côté client (Next.js, React).
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Je cherche un <strong style={{ color: 'var(--text)' }}>stage</strong> pour contribuer à des projets réels et m'enrichir au sein d'une équipe professionnelle.
              </p>
            </Reveal>

            {/* Passions */}
            <Reveal delay={1} className="card">
              <h2 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--accent)' }}>Ce qui me passionne</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '⚡', title: 'Architecture backend', desc: 'APIs clean, scalables, sécurisées avec JWT & OTP.' },
                  { icon: '🎨', title: 'UI/UX modernes', desc: 'Interfaces pensées pour l\'utilisateur.' },
                  { icon: '🚀', title: 'Déploiement', desc: 'VPS Ubuntu, Apache, PM2, Docker, Certbot.' },
                  { icon: '🔐', title: 'Sécurité web', desc: '2FA, JWT, validation serveur, HTTPS.' },
                ].map(f => (
                  <div key={f.title} className="p-4 rounded-xl" style={{ background: 'var(--accent-sub)' }}>
                    <div className="text-lg mb-1">{f.icon}</div>
                    <h4 className="text-sm font-semibold mb-1">{f.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={2} className="card">
              <h2 className="font-display text-xl font-semibold mb-6" style={{ color: 'var(--accent)' }}>Formation</h2>
              <div className="timeline">
                {EDUCATION.map(e => (
                  <div key={e.degree} className="tl-item">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-1">
                      <h3 className="font-semibold text-base">{e.degree}</h3>
                      <span className="tag-muted text-xs">{e.period}</span>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--accent)' }}>{e.school}</p>
                    {e.detail && <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{e.detail}</p>}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3} className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">Voir mes projets →</Link>
              <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
