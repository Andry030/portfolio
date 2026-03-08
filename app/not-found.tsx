import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center text-center px-5">
        <div>
          <div className="font-display font-bold leading-none mb-0"
               style={{ fontSize: 'clamp(6rem,20vw,10rem)', color: 'var(--accent)', opacity: 0.15 }}>
            404
          </div>
          <h1 className="font-display text-3xl font-semibold mb-4 -mt-6">Page introuvable</h1>
          <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Cette page n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn btn-primary">← Retour à l'accueil</Link>
            <Link href="/projects" className="btn btn-ghost">Voir les projets</Link>
          </div>
        </div>
      </main>
    </>
  );
}
