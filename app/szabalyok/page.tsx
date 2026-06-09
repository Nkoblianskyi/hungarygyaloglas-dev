import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Szabályok és Diszciplínák | Hungary Gyaloglás',
  description: 'A sportgyaloglás teljes szabályrendszere, versenyszámok és a bírálati eljárás leírása.',
}

const coreRules = [
  {
    id: 'R1',
    title: 'Folyamatos talajkontakt',
    detail: 'A sportgyaloglás alapszabálya szerint az egyik lábnak mindig érintenie kell a talajt. A bírák emberi szemmel figyelik ezt a feltételt. Amennyiben mindkét láb egyszerre elválik a talajtól (lebegés), az szabálysértésnek minősül.',
  },
  {
    id: 'R2',
    title: 'Nyújtott térd kötelezettség',
    detail: 'Amikor az előre lendített láb talajtérintést végez, a térdnek teljesen ki kell nyújtva lennie. A térd meghajlítása az érintés pillanatától a testsúly átvételéig szabálysértést jelent. Ez az egyik leggyakrabban büntetett technikai hiba.',
  },
  {
    id: 'R3',
    title: 'A figyelmeztető rendszer',
    detail: 'Egy bíró legfeljebb egy figyelmezetőt (show card) adhat ki ugyanannak a versenyzőnek. Háromnál több különböző bírótól kapott figyelmeztető esetén a versenyző diszkvalifikálható. A sárga lap figyelmeztetés, a piros lap diszkvalifikáció.',
  },
  {
    id: 'R4',
    title: 'A bírói létszám és szerepkörök',
    detail: 'Olimpiai és vilájbajnoki versenyeken legalább 6 bíró köteles jelen lenni, köztük egy főbíró (Chief Judge). A bírák a pálya különböző pontjain helyezkednek el. A főbíró dönt a diszkvalifikációkról a beérkezett figyelmeztető lapok alapján.',
  },
  {
    id: 'R5',
    title: 'Diszkvalifikáció folyamata',
    detail: 'A kizárás előtt a versenyző értesítést kap. Stadionban végzett versenyszakaszon a versenyzőnek meg kell állnia és elhagynia kell a pályát a kizáráskor. Az óvás benyújtásának pontos feltételei a World Athletics Versenyszabályzatában találhatók.',
  },
]

const disciplines = [
  { distance: '20 km (férfi)', level: 'Olimpiai', format: 'Úton (körpálya)' },
  { distance: '20 km (nő)', level: 'Olimpiai', format: 'Úton (körpálya)' },
  { distance: '35 km (férfi)', level: 'Olimpiai 2024+', format: 'Úton' },
  { distance: '35 km (nő)', level: 'Olimpiai 2024+', format: 'Úton' },
  { distance: '50 km (férfi)', level: 'Világ szint', format: 'Úton' },
  { distance: '10 000 m (férfi)', level: 'Pálya', format: 'Stadionpálya' },
  { distance: '10 000 m (nő)', level: 'Pálya', format: 'Stadionpálya' },
  { distance: 'Vegyes váltó 4×1500 m', level: 'Olimpiai', format: 'Pálya/Stadion' },
  { distance: '5000 m (junior)', level: 'Korosztályos', format: 'Pálya' },
  { distance: '10 km (utcai)', level: 'Hazai versenyrendszer', format: 'Úton' },
]

const judgeProcess = [
  { step: '1', action: 'Megfigyelés', desc: 'A bíró megfigyeli a versenyző technikáját a kijelölt pályaszakaszon.' },
  { step: '2', action: 'Figyelmeztető lap', desc: 'Szabálysértés gyanúja esetén sárga figyelmeztető lapot (show card) mutat a versenyzőnek.' },
  { step: '3', action: 'Feljegyzés', desc: 'A bíró dokumentálja a figyelmeztetőt és az ok kódját (R = lebegés, B = hajlított térd).' },
  { step: '4', action: 'Főbíró értesítés', desc: 'A figyelmeztetők a főbíróhoz kerülnek, aki összesíti a beérkező lapokat.' },
  { step: '5', action: 'Diszkvalifikáció', desc: 'Három különböző bírótól érkező piros lap után a főbíró kizárja a versenyzőt.' },
]

export default function SzabalyokPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border/30 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Versenyszabályzat
          </span>
          <h1
            className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Szabályok
            <br />
            <span className="text-primary">&amp; Diszciplínák</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A sportgyaloglás versenyszabályzatának átfogó ismertetése: az alap technikai követelményektől a bírálati eljárásig.
          </p>
        </div>
      </section>

      {/* Core rules */}
      <section className="py-20" aria-label="Alapszabályok">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Technikai előírások
          </span>
          <h2
            className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Alapszabályok
          </h2>

          <div className="mt-12 flex flex-col gap-0 divide-y divide-border/30">
            {coreRules.map((rule) => (
              <div key={rule.id} className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-12">
                <div className="flex items-center gap-4 lg:col-span-3">
                  <span
                    className="shrink-0 text-5xl font-800 text-border/30"
                    style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                    aria-hidden="true"
                  >
                    {rule.id}
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-9">
                  {rule.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="border-y border-border/30 bg-muted py-20" aria-labelledby="tavolsagok-heading">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Versenyszámok
          </span>
          <h2
            id="tavolsagok-heading"
            className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Diszciplínák és Távolságok
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Versenyszámok táblázata">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Távolság
                  </th>
                  <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Szint
                  </th>
                  <th className="py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Helyszín
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {disciplines.map((d) => (
                  <tr key={d.distance} className="hover:bg-card transition-colors">
                    <td className="py-4 pr-8 font-semibold text-foreground">{d.distance}</td>
                    <td className="py-4 pr-8 text-primary text-xs font-medium uppercase tracking-wider">{d.level}</td>
                    <td className="py-4 text-muted-foreground">{d.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Judge process */}
      <section className="py-20" aria-labelledby="biralat-heading">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Bírói eljárás
          </span>
          <h2
            id="biralat-heading"
            className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            A Bírálat Folyamata
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border/30 md:grid-cols-5">
            {judgeProcess.map((j) => (
              <div key={j.step} className="flex flex-col gap-4 bg-card p-8">
                <span
                  className="text-4xl font-800 text-primary/30"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                  aria-hidden="true"
                >
                  {j.step}
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">{j.action}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
