import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technika és Edzési Tervek | Hungary Gyaloglás',
  description: 'Sportgyaloglási technikák, edzési tervek és taktikai útmutatók magyar gyaloglóknak.',
}

const techniques = [
  {
    id: 'labpozicio',
    title: 'Lábpozíció és talajérintési technika',
    content: `A helyes talajérintés a sportgyaloglás alapköve. A saroknak kell először érintenie a talajt, majd a súlynak fokozatosan kell gördülnie a lábfej külső élén keresztül a lábujjakig. Ez az úgynevezett "sarok-gördülés" technika biztosítja a folyamatos talajkontaktust, ami az egyik alapvető szabály.

A lábujjak felfelé tartása (dorziflexió) az érintés pillanatában védi a bokaízületet és megakadályozza a "lebegés" benyomását, ami büntetést vonhat maga után. A talpak ideális szöge érintéskor körülbelül 15-20 fok.

Edzési javaslat: Napi 10-15 perces lasított technikagyakorlat tükör előtt vagy videofelvételen ellenőrizve gyorsítja a helyes automatizálást.`,
  },
  {
    id: 'karmunka',
    title: 'Karmunka és törzsegyensúly',
    content: `A karok mozgása ellensúlyozza a lábak ritmusát. A könyöknek 90 fokos szögben kell tartani, az alkaroknak párhuzamosan a haladás irányával kell mozogniuk. A csuklók ne keresztezzék a test középvonalát.

A helyes karmunka 5-8%-kal növeli a sebesség hatékonyságát az izommunka optimalizálásával. Az erős törzs stabilitást biztosít és csökkenti az energiapazarló oldalirányú mozgásokat.

Erősítési gyakorlatok: Plank variációk (elülső és oldalsó), törzs-rotációs ellenállásos munkák, felső hát erősítés egykezes súlyzóval.`,
  },
  {
    id: 'csipomozgas',
    title: 'Csípőmozgás és stride hossz optimalizálás',
    content: `A sportgyaloglás megkülönböztető jegye az aktív csípőrotáció. A csípő előre-hátralendülése 5-12 cm-rel növeli az effektív lépéshosszat anélkül, hogy a szabályokat sértő "ugrósnak" tűnő mozgást produkálna.

Az optimális lépéshossz személyenként változik, de általánosságban a testmagasság 80-90%-a körül mozog gyors tempónál. A túl rövid lépés "forgós" hatást okoz, a túl hosszú viszont növeli a büntetési kockázatot.

Gyakorlat: Jelölt pályán különböző lépéshosszakat bejárva videóelemzéssel meghatározható az egyéni optimum.`,
  },
  {
    id: 'lelegzestechnika',
    title: 'Légzéstechnika intenzív tempónál',
    content: `Versenytempónál a légzés ritmusa kritikus. Az ideális légzési ritmus 2:2 (két lépés be, két ki) könnyű tempónál, és 2:1 vagy 1:1 erős iramban. A mély, hasi légzés hatékonyabb, mint a sekély mellkasi légzés.

Tartós versenyterhelés esetén a kilégzés megnyújtása (1:3 arány) segíti az oxigénfelhasználás hatékonyságát. Hegyvidéki edzés vagy alacsonyabb oxigénkoncentráció melletti felkészülés javítja az aerob kapacitást.

Légzőgyakorlatok: Diafragmatikus légzés fekve 5 percig, majd állva, majd sétálás közben alkalmazva.`,
  },
  {
    id: 'mentalis',
    title: 'Mentális felkészítés és tempóérzék',
    content: `A hosszú versenyek 40-60%-a mentális teljesítmény. A tempóérzék fejlesztése GPS nélkül, pusztán test érzet alapján az egyik legfontosabb képesség. Rendszeres "vak" tempógyakorlatok fejlesztik ezt a képességet.

Vizualizáció: A verseny előtt 5-10 percig végzett mentális átjátszás szignifikánsan csökkenti a versenyideg-szintet és javítja a rajt utáni technikai kivitelezést.

Fókusztechnikák: Egységre bontott verseny (5 km-enkénti szegmensek), belső párbeszéd ("folyamatos érintés", "nyújtott térd") segítik a koncentrációt.`,
  },
  {
    id: 'edzestervek',
    title: 'Edzéstervek kezdőktől haladóig',
    content: `Kezdő szint (0-6 hónap): Heti 4-5 alkalom, 45-60 perces sétagyakorlat. Cél a helyes technika automatizálása, nem a sebesség. Hetente egy technikafókuszú edzés tükörgel vagy videóval.

Közepes szint (6-18 hónap): Heti 5-6 alkalom, 60-90 perc. Intervallum edzések bevezetése (4×1 km gyorsan, 2 perc pihenővel), egy hosszabb futás (15-20 km lassú tempón).

Haladó szint (18+ hónap): Heti 6-7 alkalom, akár 120 km/hét volumen. Speciális terep, magaslati edzőtáborok, verseny-specifikus tempómunka és mentális felkészítés kombinálása.`,
  },
]

const trainingPlans = [
  { week: '1-2. hét', focus: 'Alaptechnika', volume: '30-40 km' },
  { week: '3-4. hét', focus: 'Állóképesség növelés', volume: '45-55 km' },
  { week: '5-6. hét', focus: 'Tempómunka bevezetés', volume: '50-60 km' },
  { week: '7-8. hét', focus: 'Versenyspecifikus munka', volume: '55-65 km' },
  { week: '9-10. hét', focus: 'Terhelés csökkentés', volume: '35-45 km' },
  { week: '11-12. hét', focus: 'Verseny felkészülés', volume: '25-35 km' },
]

export default function TechnikaPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border/30 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Edzési módszerek
          </span>
          <h1
            className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Technika &amp;
            <br />
            <span className="text-primary">Tréning Tervek</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Részletes útmutatók a sportgyaloglás helyes végrehajtásához, az edzéstervezéshez és a versenyfelkészüléshez.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20" aria-label="Technikák">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-0 divide-y divide-border/30">
            {techniques.map((tech, i) => (
              <div
                key={tech.id}
                id={tech.id}
                className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-12"
              >
                <div className="flex items-start gap-4 lg:col-span-4">
                  <span
                    className="shrink-0 text-6xl font-800 text-border/30"
                    style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-lg font-semibold uppercase tracking-wide text-foreground">
                    {tech.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  {tech.content.split('\n\n').map((para, j) => (
                    <p key={j} className="mb-4 text-sm leading-relaxed text-muted-foreground last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training plan table */}
      <section className="border-t border-border/30 bg-muted py-20" aria-labelledby="edzesterv-heading">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            12 hetes terv
          </span>
          <h2
            id="edzesterv-heading"
            className="mt-3 text-3xl font-800 uppercase tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Versenyfelkészülési menetrend
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-sm" aria-label="Edzésterv táblázat">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Időszak
                  </th>
                  <th className="py-4 pr-8 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Fókusz
                  </th>
                  <th className="py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Heti volumen
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20">
                {trainingPlans.map((plan) => (
                  <tr key={plan.week} className="group hover:bg-card transition-colors">
                    <td className="py-5 pr-8 font-semibold text-foreground">{plan.week}</td>
                    <td className="py-5 pr-8 text-muted-foreground">{plan.focus}</td>
                    <td className="py-5 text-primary" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 600 }}>
                      {plan.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
