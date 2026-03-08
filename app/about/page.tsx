import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import SkillBars from '@/components/SkillBars';
import { PERSON, EDUCATION, LANGUAGES } from '@/lib/data';

export const metadata: Metadata = { title: 'À propos' };

const PASSIONS = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>`,
    title: 'Architecture backend',
    desc: 'APIs clean, scalables, sécurisées avec JWT & OTP.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    title: 'UI/UX modernes',
    desc: "Interfaces pensées pour l'utilisateur, fluides et accessibles.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    title: 'Déploiement',
    desc: 'VPS Ubuntu, Apache, PM2, Docker, Certbot, CI/CD.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    title: 'Sécurité web',
    desc: '2FA, JWT, validation serveur, HTTPS, UFW.',
  },
];

const HOBBIES = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: 'Bidouillage Linux',
    desc: 'Arch, Fedora, VirtualBox — explorer les entrailles du système.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 10l3 3 5-5"/></svg>`,
    title: 'Jeux vidéo',
    desc: 'PUBG,GTA, ETS2 — pour l\'immersion, le défi et la détente.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    title: 'Musique & Audio',
    desc: 'Ecouter de la musique.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    title: 'Curiosité intellectuelle',
    desc: 'Articles tech, maths, nouveaux langages.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    title: 'Petits projets perso',
    desc: 'Portfolio, outils personnels.',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    title: 'Cinéma & Séries',
    desc: 'Animes, films, Documentaires.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-24">
        <Reveal>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>À propos</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>
            Qui suis-je ?
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 mt-12 items-start">

          {/* ── Left sidebar ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Avatar card */}
            <Reveal className="card text-center">
              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5">
                <Image
                  src="/avatar.jpg"
                  alt={PERSON.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="font-display text-xl font-semibold">{PERSON.name}</h2>
              <p className="text-sm mt-1 mb-4" style={{ color: 'var(--text-muted)' }}>
                {PERSON.title}
              </p>

              <div className="space-y-2 align-left text-sm">
                <a href={`mailto:${PERSON.email}`}
                   className="flex gap-2 justify-start transition-colors hover:text-[var(--accent)]"
                   style={{ color: 'var(--text-muted)' }}>
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7"/>
                  </svg>
                  {PERSON.email}
                </a>

                {PERSON.phone.map(p => (
                  <a key={p} href={`tel:${p.replace(/\s/g,'')}`}
                     className="flex gap-2 justify-start transition-colors hover:text-[var(--accent)]"
                     style={{ color: 'var(--text-muted)' }}>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>
                    </svg>
                    {p}
                  </a>
                ))}

                <a href={PERSON.github} target="_blank" rel="noopener noreferrer"
                   className="flex gap-2 justify-start transition-colors hover:text-[var(--accent)]"
                   style={{ color: 'var(--text-muted)' }}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7C6.7 19.9 6.1 18 6.1 18c-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/>
                  </svg>
                  Andry-GitCrs
                </a>

                <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex gap-2 justify-start transition-colors hover:text-[var(--accent)]"
                   style={{ color: 'var(--text-muted)' }}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>

                <a href={PERSON.facebook} target="_blank" rel="noopener noreferrer"
                   className="flex gap-2 justify-start transition-colors hover:text-[var(--accent)]"
                   style={{ color: 'var(--text-muted)' }}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  Facebook
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

          {/* ── Right main ── */}
          <div className="lg:col-span-3 space-y-6">

            {/* Bio */}
            <Reveal className="card">
              <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Mon parcours</h2>
              <p className="leading-relaxed mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Étudiant en <strong style={{ color: 'var(--text)' }}>2ᵉ année de Génie Logiciel</strong> à l'Université d'Amorin'i Mania (2023–2025), je me suis rapidement passionné pour le développement web full-stack, basé à <strong style={{ color: 'var(--text)' }}>Ankilahila Fandriana, Madagascar</strong>.
              </p>
              <p className="leading-relaxed mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Mes projets m'ont permis de développer une expertise concrète dans la conception d'<strong style={{ color: 'var(--text)' }}>APIs RESTful robustes</strong>, aussi bien côté serveur (NestJS, Flask, Symfony) que côté client (Next.js, React, Vue.js).
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Je cherche un <strong style={{ color: 'var(--text)' }}>stage ou une opportunité</strong> pour contribuer à des projets réels et m'enrichir au sein d'une équipe professionnelle.
              </p>
            </Reveal>

            {/* Passions */}
            <Reveal delay={1} className="card">
              <h2 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--accent)' }}>Ce qui me passionne</h2>
              <div className="grid grid-cols-2 gap-3">
                {PASSIONS.map(f => (
                  <div key={f.title} className="p-4 rounded-xl" style={{ background: 'var(--accent-sub)' }}>
                    <div
                      className="w-7 h-7 mb-2"
                      style={{ color: 'var(--accent)' }}
                      dangerouslySetInnerHTML={{ __html: f.icon }}
                    />
                    <h4 className="text-sm font-semibold mb-1">{f.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Hobbies */}
            <Reveal delay={2} className="card">
              <h2 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--accent)' }}>Loisirs & Centres d'intérêt</h2>
              <div className="grid grid-cols-2 gap-3">
                {HOBBIES.map(h => (
                  <div key={h.title} className="flex items-start gap-3 p-3 rounded-xl border border-[var(--border)]">
                    <div
                      className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center"
                      style={{ background: 'var(--accent-sub)', color: 'var(--accent)' }}
                      dangerouslySetInnerHTML={{ __html: h.icon }}
                    />
                    <div>
                      <h4 className="text-sm font-semibold leading-tight">{h.title}</h4>
                      <p className="text-xs leading-relaxed mt-0.5" style={{ color: 'var(--text-muted)' }}>{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={3} className="card">
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

            <Reveal delay={4} className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">Voir mes projets →</Link>
              <a href={PERSON.cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Télécharger CV
              </a>
              <Link href="/contact" className="btn btn-ghost">Me contacter</Link>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}