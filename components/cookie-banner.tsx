'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border/50 bg-card px-6 py-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground max-w-2xl">
          Ez a weboldal sütiket (cookie-kat) használ a működéshez és a felhasználói élmény javításához.
          Az oldal böngészésével hozzájárul a sütik használatához. Részletek:{' '}
          <Link href="/cookie-policy" className="underline hover:text-foreground">
            Cookie szabályzat
          </Link>{' '}
          és{' '}
          <Link href="/privacy-policy" className="underline hover:text-foreground">
            Adatvédelmi szabályzat
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="px-5 py-2 text-xs uppercase tracking-widest text-muted-foreground border border-border/50 hover:border-foreground/30 hover:text-foreground transition-colors"
          >
            Elutasítás
          </button>
          <button
            onClick={accept}
            className="bg-primary px-5 py-2 text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Elfogadás
          </button>
        </div>
      </div>
    </div>
  )
}
