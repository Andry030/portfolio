'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { PERSON } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle');
  const [honey, setHoney]   = useState('');

  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honey) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? 'ok' : 'error');
      if (res.ok) setForm({ name:'', email:'', subject:'', message:'' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 pt-32 pb-24">
        <Reveal><p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>Contact</p></Reveal>
        <Reveal delay={1}>
          <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 600 }}>Travaillons ensemble</h1>
        </Reveal>
        <Reveal delay={2} className="mb-14 text-base leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Ouvert aux opportunités de stage et aux collaborations.
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left info */}
          <div className="lg:col-span-2 space-y-5">
            <Reveal className="card">
              <span className="badge-open mb-4 inline-flex"><span className="badge-dot" />Disponible</span>
              <h3 className="font-display text-lg font-semibold mb-2">Cherche un stage</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Étudiant en 2ᵉ année, je cherche une opportunité de stage en développement web.
              </p>
            </Reveal>

            <Reveal delay={1} className="card space-y-4">
              <h3 className="font-display text-lg font-semibold">Coordonnées</h3>

              {[
                { icon: '✉', label: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
                { icon: '📞', label: 'Tél.', value: PERSON.phone[0], href: `tel:${PERSON.phone[0].replace(/\s/g,'')}` },
                { icon: '📍', label: 'Lieu', value: PERSON.location, href: undefined },
                { icon: '🐙', label: 'GitHub', value: 'Andry-GitCrs', href: PERSON.github },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0"
                       style={{ background: 'var(--accent-sub)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                         rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                         className="text-sm transition-colors hover:text-[var(--accent)]">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={2} className="card" style={{ borderColor: 'var(--accent)', background: 'var(--accent-sub)' }}>
              <p className="text-2xl mb-2">⏱</p>
              <h3 className="font-semibold text-sm mb-1">Réponse rapide</h3>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Généralement sous 24–48h.</p>
            </Reveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <Reveal className="card">
              <h2 className="font-display text-xl font-semibold mb-6">Envoyer un message</h2>

              {status === 'ok' && (
                <div className="mb-5 p-4 rounded-xl text-sm font-medium"
                     style={{ background: 'rgba(34,197,94,0.1)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>
                  ✓ Message envoyé ! Je vous répondrai sous 24–48h.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-5 p-4 rounded-xl text-sm font-medium"
                     style={{ background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)' }}>
                  ✗ Erreur lors de l'envoi. Écrivez directement à {PERSON.email}
                </div>
              )}

              <form onSubmit={submit} noValidate>
                {/* Honeypot */}
                <div style={{ display:'none' }} aria-hidden>
                  <input tabIndex={-1} autoComplete="off" value={honey} onChange={e => setHoney(e.target.value)} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="label" htmlFor="name">Nom *</label>
                    <input className="input" id="name" name="name" required placeholder="Jean Dupont"
                           value={form.name} onChange={change} />
                  </div>
                  <div>
                    <label className="label" htmlFor="email">Email *</label>
                    <input className="input" id="email" name="email" type="email" required placeholder="vous@exemple.com"
                           value={form.email} onChange={change} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="label" htmlFor="subject">Sujet *</label>
                  <input className="input" id="subject" name="subject" required placeholder="Stage, collaboration, question…"
                         value={form.subject} onChange={change} />
                </div>

                <div className="mb-6">
                  <label className="label" htmlFor="message">Message *</label>
                  <textarea className="input" id="message" name="message" required
                             placeholder="Décrivez votre projet ou besoin…"
                             value={form.message} onChange={change} />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary w-full justify-center"
                  style={{ fontSize: '0.95rem', padding: '0.9rem' }}
                >
                  {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
                  {status !== 'loading' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  )}
                </button>

                <p className="text-center text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                  Données non partagées. ·{' '}
                  <a href="/resume.pdf" target="_blank" className="hover:text-[var(--accent)] transition-colors">
                    Télécharger le CV
                  </a>
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
