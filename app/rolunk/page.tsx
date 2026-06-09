import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Rólunk | Hungary Gyaloglás',
  description: 'Ismerd meg a Hungary Gyaloglás portált, értékeinket és lépj velünk kapcsolatba.',
}

const values = [
  {
    title: 'Hitelességre törekszünk',
    desc: 'Kizárólag tényszerű, általánosan ismert információkat közlünk a sportgyaloglásról, minden hirdetési vagy kereskedelmi érdektől mentesen.',
  },
  {
    title: 'Hozzáférhetőség',
    desc: 'Célunk, hogy a sportgyaloglásról szóló információk mindenki számára elérhetők legyenek, legyen szó kezdőkről vagy haladókról.',
  },
  {
    title: 'A sport iránti tisztelet',
    desc: 'A sportgyaloglás egy komoly, olimpiai atlétikai ág, amelyet az összes szükséges szakmai tisztelettel mutatunk be.',
  },
]

export default function RolunkPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border/30 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Ismerd meg portálunkat
          </span>
          <h1
            className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Rólunk
          </h1>
        </div>
      </section>

      {/* About content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Description */}
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest text-primary"
                style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
              >
                Kik vagyunk
              </span>
              <h2
                className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              >
                A Hungary Gyaloglás portálról
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  A Hungary Gyaloglás egy nonprofit tájékoztató portál, amely a sportgyaloglásról szóló általános ismereteket teszi elérhetővé magyar nyelven.
                </p>
                <p>
                  Célunk, hogy a sportgyaloglás iránt érdeklődők — legyen szó kezdőkről, hobbisportolókról vagy tapasztaltabb versenyzőkről — egy helyen megtalálják a sport technikáira, szabályaira, történetére és felszerelésére vonatkozó alapvető információkat.
                </p>
                <p>
                  Az oldalon kizárólag általános tájékoztató jellegű tartalmak szerepelnek, márkanevektől, klubnevektől és kereskedelmi ajánlatoktól mentesen. Az információk közérdekűek és szabadon hozzáférhetők.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-0 divide-y divide-border/30">
              {values.map((v, i) => (
                <div key={i} className="py-8">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        id="kapcsolat"
        className="border-t border-border/30 bg-muted py-20"
        aria-labelledby="kapcsolat-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest text-primary"
                style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
              >
                Kapcsolatfelvétel
              </span>
              <h2
                id="kapcsolat-heading"
                className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              >
                Írj nekünk
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Kérdésed, javaslatod vagy visszajelzésed van? Töltsd ki az alábbi űrlap mezőit, és hamarosan válaszolunk a megadott e-mail-re.
              </p>
              <a
                href="mailto:info@hungarygyaloglas.com"
                className="mt-4 block text-sm text-primary underline-reveal hover:text-primary/80"
              >
                info@hungarygyaloglas.com
              </a>
            </div>

            {/* Client form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
