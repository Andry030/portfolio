import type { Metadata } from 'next';
import { Cormorant, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

// ── Fonts ─────────────────────────────────────────────────────────
const cormorant = Cormorant({
  subsets:  ['latin'],
  variable: '--font-cormorant',
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  variable: '--font-jakarta',
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
});

// ── Metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://andry.ink'),
  title: {
    default:  'ANDRIANAIVO Noé — Développeur Full-Stack',
    template: '%s | andry.ink',
  },
  description:
    "Portfolio de ANDRIANAIVO Noé, développeur Full-Stack basé à Madagascar. Spécialiste APIs REST, NestJS, Flask, Next.js, PostgreSQL.",
  keywords: ['développeur', 'full-stack', 'NestJS', 'Flask', 'Next.js', 'Madagascar', 'API REST', 'stage'],
  authors: [{ name: 'ANDRIANAIVO Noé', url: 'https://andry.ink' }],
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
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type':    'Person',
              name:       'ANDRIANAIVO Noé',
              jobTitle:   'Développeur Full-Stack',
              email:      'andrianaivonoe403@gmail.com',
              telephone:  '+261344180507',
              url:        'https://andry.ink',
              sameAs:     ['https://github.com/Andry-GitCrs'],
              address:    { '@type': 'PostalAddress', addressLocality: 'Fandriana', addressCountry: 'MG' },
            }),
          }}
        />
      </head>
      <body className="grain font-sans min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
