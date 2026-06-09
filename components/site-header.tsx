'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/technika', label: 'Technika' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          {/* Logo + Wordmark */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Hungary Gyaloglás főoldal">
            <svg
              width="26"
              height="26"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              {/* Outer circle */}
              <circle cx="14" cy="14" r="13" stroke="oklch(0.52 0.22 27)" strokeWidth="1.5" />
              {/* Stride path */}
              <path
                d="M7 21 L11 10 L16 17 L20 7"
                stroke="oklch(0.52 0.22 27)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="20" cy="7" r="2" fill="oklch(0.52 0.22 27)" />
            </svg>
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-xl uppercase tracking-widest text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, letterSpacing: '0.12em' }}
              >
                Hungary
              </span>
              <span
                className="text-xl uppercase text-primary"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 600, letterSpacing: '0.08em' }}
              >
                Gyaloglás
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Főmenü">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`underline-reveal text-xs font-medium uppercase tracking-widest transition-colors hover:text-foreground ${
                  pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-foreground transition-transform duration-200 ${open ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-transform duration-200 ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-background pt-14 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil navigáció"
        >
          <nav className="flex flex-col divide-y divide-border/30 px-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-5 text-base font-semibold uppercase tracking-widest transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                }`}
                style={{ fontFamily: 'var(--font-barlow)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-border/30 px-6 py-8">
            <a
              href="mailto:info@hungarygyaloglas.com"
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              info@hungarygyaloglas.com
            </a>
          </div>
        </div>
      )}
    </>
  )
}
