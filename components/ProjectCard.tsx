"use client";

import { Project } from "@/app/projects/page";
import Reveal from "./Reveal";
import Image from "next/image";

export default function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const hasImages = project.images && project.images.length > 0;
  const thumb     = hasImages ? project.images![0] : null;

  return (
    <Reveal key={project.id} delay={(index % 2) as 0|1} className="card flex flex-col group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="tag-muted text-xs mb-2 block">{project.role} · {project.type}</span>
          <h2 className="font-display text-2xl font-semibold">{project.name}</h2>
        </div>
        {project.status === 'wip' && (
          <span className="badge-open text-xs py-0.5 px-2 shrink-0">
            <span className="badge-dot" />En cours
          </span>
        )}
      </div>

      {/* Thumbnail — cliquable → modal */}
      <button
        onClick={onOpen}
        className="relative w-full rounded-xl overflow-hidden mb-5 cursor-pointer"
        style={{ aspectRatio: '16/9', background: 'var(--accent-sub)' }}
        aria-label={`Voir les captures de ${project.name}`}
      >
        {thumb ? (
          <>
            <Image
              src={thumb}
              alt={`${project.name} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ background: 'rgba(0,0,0,0.5)' }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                   style={{ background: 'var(--accent)' }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                </svg>
                {project.images!.length > 1 ? `${project.images!.length} captures` : 'Voir'}
              </div>
            </div>
            {/* Image count badge */}
            {project.images!.length > 1 && (
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                   style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
                1 / {project.images!.length}
              </div>
            )}
          </>
        ) : (
          /* No image placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>404 Not Found</span>
          </div>
        )}
      </button>

      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="flex gap-3 mt-auto pt-2">
        <button
          onClick={onOpen}
          className="btn btn-ghost py-2 px-4 text-sm"
        >
          Captures →
        </button>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
             className="btn btn-primary py-2 px-4 text-sm">
            Voir le site ↗
          </a>
        )}
        {project.github && !project.link && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
             className="btn btn-primary py-2 px-4 text-sm">
            GitHub →
          </a>
        )}
      </div>
    </Reveal>
  );
}