import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'
import SiteHeader from '@/components/site-header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Hungary Gyaloglás — Sportgyaloglás Magyarországon',
  description:
    'Magyarország sportgyaloglási portálja. Technikák, edzéstervek, versenyek, szabályok és a magyar gyaloglás dicső története.',
  keywords: ['gyaloglás', 'sportgyaloglás', 'Magyarország', 'atlétika', 'edzés'],
  openGraph: {
    title: 'Hungary Gyaloglás',
    description: 'Magyarország sportgyaloglási portálja',
    locale: 'hu_HU',
    type: 'website',
  },
}

const navLinks = [
  { href: '/technika', label: 'Technika' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${barlowCondensed.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* HEADER */}
        <SiteHeader />

        {/* PAGE CONTENT */}
        <main className="pt-14">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-border/40 bg-card">
          {/* Ticker tape */}
          <div className="overflow-hidden border-b border-border/30 py-2.5">
            <div className="flex animate-ticker whitespace-nowrap">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="mr-12 text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  Sportgyaloglás&nbsp;·&nbsp;Magyarország&nbsp;·&nbsp;Atlétika&nbsp;·&nbsp;Technika&nbsp;·&nbsp;Edzés&nbsp;·&nbsp;Verseny&nbsp;·&nbsp;Rekordok&nbsp;·&nbsp;Szabályok
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              {/* Left — brand */}
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-2xl font-800 uppercase tracking-widest text-foreground"
                    style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                  >
                    Hungary
                  </span>
                  <span
                    className="text-2xl font-600 uppercase tracking-widest text-primary"
                    style={{ fontFamily: 'var(--font-barlow)', fontWeight: 600 }}
                  >
                    Gyaloglás
                  </span>
                </div>
                <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                  Magyarország sportgyaloglási portálja. Általános tájékoztatás a sportgyaloglásról, technikákról és a magyar gyaloglás történetéről.
                </p>
              </div>

              {/* Right — nav */}
              <nav
                className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs"
                aria-label="Lábléc navigáció"
              >
                {[...navLinks, { href: '/cookie-policy', label: 'Cookie szabályzat' }, { href: '/privacy-policy', label: 'Adatvédelem' }].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="underline-reveal uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 flex flex-col gap-2 border-t border-border/30 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
              <span>&copy; {new Date().getFullYear()} hungarygyaloglas.com &mdash; Minden jog fenntartva.</span>
              <a
                href="mailto:info@hungarygyaloglas.com"
                className="underline-reveal hover:text-foreground"
              >
                info@hungarygyaloglas.com
              </a>
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  )
}
