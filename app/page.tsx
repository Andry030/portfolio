import type { Metadata } from 'next';
import HomePage from './home';


export const metadata: Metadata = {
  title: 'ANDRIANAIVO Noé — Développeur Full-Stack | andry.ink',
  description:
    "Portfolio de ANDRIANAIVO Noé, développeur Full-Stack. Spécialiste APIs REST, NestJS, Flask, Next.js, PostgreSQL.",
  keywords: ['Andry dev', 'andry.ink', 'full-stack', 'NestJS', 'Flask', 'Next.js', 'Madagascar', 'API REST', 'stage'],
  openGraph: {
    type:        'website',
    locale:      'fr_FR',
    url:         'https://andry.ink',
    siteName:    'andry.ink',
    title:       'ANDRIANAIVO Noé — Développeur Full-Stack',
    description: 'Développeur Full-Stack passionné basé à Madagascar.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'ANDRIANAIVO Noé — Développeur Full-Stack',
    description: 'Développeur Full-Stack passionné basé à Madagascar.',
    images:      ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
};


export default function Index() {
  return <HomePage/>
}
