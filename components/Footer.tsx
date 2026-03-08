import Link from 'next/link';
import { NAV_LINKS, PERSON } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div>
            <Link href="/" className="font-display text-2xl font-semibold" style={{ color: 'var(--text)' }}>
              andry<span style={{ color: 'var(--accent)' }}>.</span>ink
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Développeur Full-Stack basé à Madagascar.<br/>Disponible pour des opportunités de stage.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Navigation</p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Contact</p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${PERSON.email}`} className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                {PERSON.email}
              </a>
              <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                github.com/Andry-GitCrs
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--border)]">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} ANDRIANAIVO Noé — Licence MIT
          </p>
          <a
            href={PERSON.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
