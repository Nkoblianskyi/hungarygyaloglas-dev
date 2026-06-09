import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Történet | Hungary Gyaloglás',
  description: 'A sportgyaloglás és a magyar gyaloglás történelme az olimpiai kezdetektől napjainkig.',
}

const timeline = [
  {
    period: '1904–1920',
    title: 'Az olimpiai kezdetek',
    text: 'A sportgyaloglás az 1904-es St. Louis-i olimpián szerepelt először hivatalos programként. A korai szabályrendszer még fejletlen volt, és a döntéshozatal bírói megítélésen alapult. Magyarország az első versenyeken figyelőként volt jelen, és fiatal atlétákat küldött külföldi tapasztalatszerzésre.',
  },
  {
    period: '1920–1945',
    title: 'Az alapok lerakása',
    text: 'A két világháború közötti időszakban az atlétikán belüli sportgyaloglás Közép-Európában különösen fejlődött. Magyar atlétikai szövetség keretein belül rendszeres versenyeket szerveztek, és az edzésmódszerek egységesítése megkezdődött. A 20 km-es és 50 km-es táv fokozatosan elfoglalta mai helyét.',
  },
  {
    period: '1945–1960',
    title: 'Az olimpiai szereplés kora',
    text: 'Az 1952-es helsinki olimpián Magyarország az 50 km-es gyaloglásban 6. helyen végzett, ami az addigi legjobb eredmény volt. A szovjet és európai sportrendszer által inspirált állami edzőprogramok szintjén emelkedett a felkészítés minősége. Rendszeres részvétel európai versenyeken és a keleti tömb bajnokságain.',
  },
  {
    period: '1960–1975',
    title: 'Módszertani fejlődés',
    text: 'A hatvanas évektől a tudományos alapú edzéstervezés vált meghatározóvá. A biomechanikai vizsgálatok és az intenzitásmérés bekerült a felkészítési rendszerbe. Magyar edző-szakemberek közreműködtek az európai módszertani csereprogramokban.',
  },
  {
    period: '1975–1990',
    title: 'Komoly versenyeredmények',
    text: 'Az 1983-as Európai Bajnokságon bronzérmet szerzett a magyar versenyző az 50 km-es számban. A nyolcvanas évek végén a nők gyaloglásában is megjelentek az első komolyabb eredmények. Rendszeres részvétel a Világ Gyaloglás Kupán (ma Race Walking Team Championship).',
  },
  {
    period: '1990–2005',
    title: 'Az átmenet és megújulás',
    text: 'A politikai változások után az sportszövetség finanszírozása átalakult. Az utánpótlás-nevelési programok újjáépültek. A 2004-es athéni olimpián nők is részt vehettek a 20 km-es versenyen, ami az egyenlő esélyek irányába tett fontos lépés volt.',
  },
  {
    period: '2005–2015',
    title: 'Modern korszak',
    text: 'A GPS technológia és a videóelemzés bevezetése forradalmasította az edzéstervezést. Magyarország fiatal versenyzői rendszeresen jutottak el európai és világ szintű versenyekre. A sport iránti érdeklődés megélénkült a szélesebb közönség körében is.',
  },
  {
    period: '2015–napjaink',
    title: 'A jelen kihívásai',
    text: 'A World Athletics szabályváltozásai (2020) érintették a versenyformátumokat. A vegyes váltó bevezetése (2020 Tokyo) új lehetőséget kínált. A 2023-as Budapesten megrendezett Világ Atlétikai Bajnokság közelebb hozta a sportot a hazai közönséghez, és gyaloglóink is képviseltették magukat.',
  },
]

const hungarianFacts = [
  'Magyarország az 1920-as évek óta képviselteti magát az olimpiai gyaloglószámokban.',
  'A 20 km-es és 50 km-es férfi szám mellett a nők is versenyeztek 20 km-en az olimpiákon.',
  'A Magyar Atlétikai Szövetség keretein belül a gyaloglás önálló szakbizottsággal rendelkezik.',
  'Az első hazai gyaloglóbajnokságot a XX. század elején rendezték meg.',
  'Magyarország aktív résztvevője az európai gyaloglásszövetségi eseményeknek.',
  'A hazai versenyrendszer több korosztályt (junior, U23, szenior) foglal magában.',
]

export default function TortenetPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border/30 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            A sport múltja
          </span>
          <h1
            className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Magyar gyaloglás
            <br />
            <span className="text-primary">Történelme</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Az olimpiai kezdetektől napjainkig — a magyarországi sportgyaloglás több évtizedes útja, eredményei és fejlődése.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" aria-label="Történeti idővonal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-0 h-full w-px bg-border/40 lg:left-[220px]"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="relative grid grid-cols-1 gap-6 py-12 pl-8 lg:grid-cols-[220px_1fr] lg:gap-16 lg:pl-0"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-[-4px] top-14 h-2 w-2 bg-primary lg:left-[217px]"
                    aria-hidden="true"
                  />

                  {/* Period */}
                  <div className="lg:pr-12 lg:text-right">
                    <span
                      className="text-sm font-700 uppercase tracking-wider text-primary"
                      style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:pl-12">
                    <h2 className="mb-3 text-lg font-semibold uppercase tracking-wide text-foreground">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hungarian facts */}
      <section className="border-t border-border/30 bg-muted py-20" aria-labelledby="tenyek-heading">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Tudtad?
          </span>
          <h2
            id="tenyek-heading"
            className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Tények Magyarországról
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-3">
            {hungarianFacts.map((fact, i) => (
              <div key={i} className="bg-card p-8">
                <span
                  className="mb-4 block text-4xl font-800 text-primary/30"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
