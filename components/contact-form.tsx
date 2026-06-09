'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'A név megadása kötelező.'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Kérjük érvényes e-mail-t adjon meg.'
    if (!formData.message.trim() || formData.message.trim().length < 10)
      errs.message = 'Az üzenet legalább 10 karakter legyen.'
    if (!formData.consent) errs.consent = 'Az adatkezelési hozzájárulás szükséges.'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <>
      {/* Success popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="mx-4 flex max-w-md flex-col gap-6 border border-border bg-card p-10">
            <div
              className="text-4xl font-800 uppercase text-primary"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              aria-hidden="true"
            >
              &#x2713;
            </div>
            <h2
              id="popup-title"
              className="text-2xl font-800 uppercase tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
            >
              Üzenet elküldve
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Köszönjük megkeresését! Üzenetét megkaptuk, és hamarosan válaszolunk a megadott e-mail-re.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', message: '', consent: false })
                setErrors({})
              }}
              className="self-start border border-border/50 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-6"
        aria-label="Kapcsolati űrlap"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Teljes név <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className="border border-border/50 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Teljes neve"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-destructive">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            E-mail <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className="border border-border/50 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="pelda@email.hu"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-destructive">
              {errors.email}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Üzenet <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
            className="resize-none border border-border/50 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Üzenet szövege..."
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span id="message-error" className="text-xs text-destructive">
              {errors.message}
            </span>
          )}
        </div>

        {/* Consent */}
        <div className="flex flex-col gap-2">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData((p) => ({ ...p, consent: e.target.checked }))}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span className="text-xs leading-relaxed text-muted-foreground">
              Hozzájárulok, hogy adataimat a kapcsolatfelvétel céljából kezeljék az{' '}
              <Link href="/privacy-policy" className="underline hover:text-foreground">
                adatvédelmi szabályzatban
              </Link>{' '}
              foglaltak szerint. <span className="text-primary">*</span>
            </span>
          </label>
          {errors.consent && (
            <span id="consent-error" className="text-xs text-destructive">
              {errors.consent}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="self-start border border-primary bg-primary px-10 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {loading ? 'Küldés...' : 'Üzenet küldése'}
        </button>
      </form>
    </>
  )
}
