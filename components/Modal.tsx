"use client";

import { Project } from "@/app/projects/page";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function Modal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const images = project.images ?? [];
  const [idx, setIdx] = useState(0);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, next, prev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b"
             style={{ borderColor: 'var(--border)' }}>
          <div>
            <span className="tag-muted text-xs mr-2">{project.role} · {project.type}</span>
            <h2 className="font-display text-xl font-semibold inline">{project.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-muted)', background: 'var(--bg-subtle)' }}
            aria-label="Fermer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Image area */}
        <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
          {images.length > 0 ? (
            <>
              <Image
                src={images[idx]}
                alt={`${project.name} screenshot ${idx + 1}`}
                fill
                className="object-contain"
                priority
              />

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', backdropFilter: 'blur(4px)' }}
                    aria-label="Image précédente"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', backdropFilter: 'blur(4px)' }}
                    aria-label="Image suivante"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>

                  {/* Counter */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium"
                       style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', backdropFilter: 'blur(4px)' }}>
                    {idx + 1} / {images.length}
                  </div>

                  {/* Dots */}
                  <div className="absolute bottom-3 right-4 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIdx(i)}
                        className="rounded-full transition-all"
                        style={{
                          width:   i === idx ? '20px' : '6px',
                          height:  '6px',
                          background: i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                        }}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            /* Placeholder quand pas d'images */
            <div className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: 'var(--accent-sub)' }}
            >
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Aucune capture disponible
              </p>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 px-6 py-3 overflow-x-auto border-t"
               style={{ borderColor: 'var(--border)' }}>
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="relative shrink-0 rounded-lg overflow-hidden transition-all"
                style={{
                  width: '72px', height: '48px',
                  border: `2px solid ${i === idx ? 'var(--accent)' : 'var(--border)'}`,
                  opacity: i === idx ? 1 : 0.55,
                }}
              >
                <Image src={src} alt={`thumb ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Footer info */}
        <div className="px-6 py-5 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="flex gap-3">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                 className="btn btn-primary py-2 px-4 text-sm">
                Voir le site ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="btn btn-ghost py-2 px-4 text-sm">
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}