'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_LINKS, PERSON } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const path     = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-semibold text-xl tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          andry<span style={{ color: 'var(--accent)' }}>.</span>ink
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                path === l.href
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${
                  path === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PERSON.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost hidden md:inline-flex py-1.5 px-4 text-xs"
          >
            CV
          </a>
          <ThemeToggle />
          {/* Hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            aria-label="Menu"
          >
            {open ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[var(--border)] py-4 px-5 flex flex-col gap-4"
          style={{ background: 'var(--bg)' }}
        >
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-base font-medium transition-colors ${
                path === l.href ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href={PERSON.cvPath} target="_blank" rel="noopener noreferrer"
             className="btn btn-ghost w-fit text-xs mt-1">
            Télécharger le CV
          </a>
        </div>
      )}
    </header>
  );
}
