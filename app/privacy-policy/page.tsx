import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatvédelmi Szabályzat | Hungary Gyaloglás',
  description: 'A hungarygyaloglas.com adatvédelmi és adatkezelési szabályzata.',
}

const updatedDate = new Date().toLocaleDateString('hu-HU', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const sections = [
  {
    title: 'Adatkezelő',
    text: 'Az adatkezelő: hungarygyaloglas.com weboldal üzemeltetője. Kapcsolat: info@hungarygyaloglas.com.',
  },
  {
    title: 'Kezelt személyes adatok köre',
    text: 'Kizárólag a kapcsolatfelvételi űrlap kitöltésekor megadott adatokat kezeljük: teljes név és e-mail-cím. Más személyes adatot nem gyűjtünk.',
  },
  {
    title: 'Adatkezelés célja',
    text: 'A megadott adatokat kizárólag az Ön megkeresésének megválaszolása céljából kezeljük. Az adatokat más célra nem használjuk, harmadik félnek nem adjuk át.',
  },
  {
    title: 'Adatkezelés jogalapja',
    text: 'Az adatkezelés jogalapja az Ön önkéntes, tájékozott hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), amelyet az űrlap elküldésekor a jelölőnégyzet bejelölésével ad meg.',
  },
  {
    title: 'Adatmegőrzési idő',
    text: 'Az adatokat a kommunikáció lezárását követő 90 napon belül töröljük, kivéve, ha jogszabályi kötelezettség hosszabb megőrzést ír elő.',
  },
  {
    title: 'Érintetti jogok',
    text: 'Önnek joga van: hozzáférni az adataihoz, kérni azok helyesbítését vagy törlését, korlátozni az adatkezelést, visszavonni a hozzájárulását bármikor, adathordozhatósághoz. Kérelmét az info@hungarygyaloglas.com-ra küldheti.',
  },
  {
    title: 'Adatbiztonság',
    text: 'Minden szükséges technikai és szervezési intézkedést megteszünk az adatok védelme érdekében. Az adatokat titkosított csatornán fogadjuk, és biztonságos környezetben tároljuk.',
  },
  {
    title: 'Panasztétel',
    text: 'Ha úgy véli, hogy adatkezelésünk nem felel meg a vonatkozó jogszabályoknak, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, ugyfelszolgalat@naih.hu).',
  },
  {
    title: 'Változások',
    text: 'Fenntartjuk a jogot jelen szabályzat módosítására. A módosítások az oldalon való közzétételkor lépnek hatályba. A legutóbbi módosítás dátumát mindig feltüntetjük.',
  },
]

export default function PrivacyPolicyPage() {
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
            Adatvédelmi Szabályzat
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
