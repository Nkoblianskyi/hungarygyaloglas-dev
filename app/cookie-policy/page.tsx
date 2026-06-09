import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Szabályzat | Hungary Gyaloglás',
  description: 'A hungarygyaloglas.com sütihasználati szabályzata.',
}

const updatedDate = new Date().toLocaleDateString('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const sections = [
  {
    title: 'Mi az a süti?',
    text: 'A süti (cookie) egy kis méretű szöveges fájl, amelyet az Ön böngészője tárol az eszközén, amikor egy weboldalt látogat meg. A sütik lehetővé teszik, hogy a weboldal felismerje az Ön böngészőjét visszatérő látogatáskor, és tárolja bizonyos preferenciáit.',
  },
  {
    title: 'Milyen sütiket használunk?',
    text: 'Weboldalunk kizárólag alapvető funkcionális sütiket (szükséges sütik) alkalmaz. Ezek a sütik nélkülözhetetlenek az oldal alapvető működéséhez, például a cookie-hozzájárulás megjegyzéséhez. Elemző, marketing vagy nyomkövető sütiket nem alkalmazunk.',
  },
  {
    title: 'Szükséges sütik',
    text: 'A szükséges sütik az oldal zavartalan működéséhez elengedhetetlenek. Ilyen süti például a cookie-hozzájárulás státuszát tároló érték (localStorage), amelyet az Ön eszközén tárunk el annak érdekében, hogy ne kelljen minden látogatáskor újra megjeleníteni a hozzájárulási sávot.',
  },
  {
    title: 'Sütikezelés irányítása',
    text: 'Böngészője beállításain keresztül bármikor törölheti a tárolt sütiket, és letilthatja azok fogadását. Felhívjuk azonban figyelmét, hogy a sütik letiltása az oldal egyes funkcióinak működését befolyásolhatja.',
  },
  {
    title: 'Változások a szabályzatban',
    text: 'Fenntartjuk a jogot a sütihasználati szabályzat módosítására. A változások az oldalon való közzétételkor lépnek érvénybe. Az utolsó módosítás dátumát minden esetben feltüntetjük.',
  },
  {
    title: 'Kapcsolat',
    text: 'A sütihasználattal kapcsolatos kérdéseivel forduljon hozzánk bizalommal az info@hungarygyaloglas.com e-mail-címen.',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <section className="border-b border-border/30 bg-card py-20">
        <div className="mx-auto max-w-4xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Jogi dokumentum
          </span>
          <h1
            className="mt-4 text-[clamp(2rem,5vw,4rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Cookie Szabályzat
          </h1>
          <p className="mt-4 text-xs text-muted-foreground">
            Utolsó frissítés:{' '}
            <time dateTime={new Date().toISOString().split('T')[0]}>{updatedDate}</time>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-0 divide-y divide-border/20">
            {sections.map((s, i) => (
              <div key={i} className="py-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
