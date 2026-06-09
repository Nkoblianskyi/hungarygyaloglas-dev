import Link from 'next/link'
import Image from 'next/image'

/* ── Section label ─────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-widest text-primary"
      style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
    >
      {children}
    </span>
  )
}

/* ── Stat item ─────────────────────────────────────── */
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 border-l border-border/40 pl-5">
      <span
        className="text-4xl font-800 text-foreground"
        style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
      >
        {value}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  )
}

/* ── Training tip preview item ─────────────────────── */
const tips = [
  { id: 'labpozicio', title: 'Lábpozíció és érintési technika', desc: 'A helyes sarokérintés és gördítő talajnyomás alapja a sérülésmentes teljesítménynek.' },
  { id: 'karmunka', title: 'Karmunka és törzsegyensúly', desc: 'A karok ritmikus mozgása energiát szabadít fel és segíti az egyenest haladást.' },
  { id: 'csipomozgas', title: 'Csípőmozgás és stride hossz', desc: 'Az optimális lépéshossz csípőrotációval érhető el, nem erőltetett nyújtással.' },
  { id: 'lelegzestechnika', title: 'Légzéstechnika intenzív tempónál', desc: 'Mély hasi légzés és ritmikus kifúvás szabályozza a versenyállapotot.' },
]

/* ── Achievement item ─────────────────────────────── */
const achievements = [
  { year: '1952', event: 'Helsinki Olimpia', result: '6. helyezés, 50 km-es gyaloglás' },
  { year: '1960', event: 'Róma Olimpia', result: 'Top 8 finálé, 20 km' },
  { year: '1983', event: 'Európai Bajnokság', result: 'Bronzérem, 50 km' },
  { year: '2004', event: 'Athén Olimpia', result: 'Részvétel, 20 km nők' },
  { year: '2016', event: 'Európai Kupagyőztes', result: 'Csapat dobogó, vegyes' },
  { year: '2023', event: 'Világ Atlétikai Bajnokság', result: 'Döntős részvétel' },
]

/* ── Blog preview ─────────────────────────────────── */
const blogPreviews = [
  { slug: 'gyaloglas-alapjai', title: 'A sportgyaloglás alapjai kezdőknek' },
  { slug: 'lelegzestechnika', title: 'Légzéstechnika hosszú távon' },
  { slug: 'cipo-valasztas', title: 'Megfelelő lábbeli kiválasztása' },
  { slug: 'hideg-ido-edzés', title: 'Edzés hideg időben: tanácsok' },
  { slug: 'verseny-felkeszules', title: 'Versenyre való felkészülés lépései' },
  { slug: 'taplalkozas-atleta', title: 'Táplálkozás sportgyaloglóknak' },
]

/* ── Equipment facts ──────────────────────────────── */
const equipmentFacts = [
  { label: 'Cipőtalp vastagsága', fact: 'A versenycipő talpvastagsága legfeljebb 25 mm lehet.' },
  { label: 'Zoknitípusok', fact: 'Kompressziós zoknik csökkentik a lábfej fáradását hosszú versenyeken.' },
  { label: 'Sportruha anyaga', fact: 'Nedvességelvezető, légáteresztő szövetek ideálisak meleg időben.' },
  { label: 'Szívmonitor', fact: 'Mellkasi szívritmusmérők pontosabbak csuklóalapú verziókhoz képest.' },
  { label: 'Ivócsomagok', fact: 'A versenyeknél szabályozott az ivóállomások száma és elhelyezése.' },
]

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section
        className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-card clip-hero"
        aria-label="Főoldal hero"
      >
        {/* Large background typography */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[22vw] font-800 uppercase leading-none text-border/20 tracking-tighter"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            GYALOGLÁS
          </span>
        </div>

        {/* Diagonal accent line */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-primary"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
          <div className="max-w-3xl">
            <SectionLabel>Magyarország sportgyaloglási portálja</SectionLabel>
            <h1
              className="mt-4 text-pretty text-[clamp(3rem,8vw,7rem)] font-800 uppercase leading-[0.9] tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
            >
              Minden lépés
              <br />
              <span className="text-primary">számít.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A sportgyaloglás a teljesítmény és a fegyelem sportja. Fedezd fel a technikát, a szabályokat, Magyarország büszke történetét és a fejlődéshez szükséges tudnivalókat.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/technika"
                className="border border-primary bg-primary px-8 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Technikák
              </Link>
              <Link
                href="/tortenet"
                className="border border-border/50 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                Történet
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6">
            <StatItem value="50km" label="Leghosszabb olimpiai táv" />
            <StatItem value="1904" label="Olimpiai bemutató éve" />
            <StatItem value="20km" label="Modern standard táv" />
            <StatItem value=">120" label="Érintett ország" />
          </div>
        </div>
      </section>

      {/* ═══ TECHNIKA PREVIEW ════════════════════════════════ */}
      <section className="py-24" aria-labelledby="technika-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <SectionLabel>Edzési módszerek</SectionLabel>
              <h2
                id="technika-heading"
                className="mt-3 text-4xl font-800 uppercase leading-tight tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              >
                Technika &amp; Taktika
              </h2>
            </div>
            <Link
              href="/technika"
              className="hidden text-xs uppercase tracking-widest text-primary underline-reveal md:block"
            >
              Összes technika
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip, i) => (
              <Link
                key={tip.id}
                href={`/technika#${tip.id}`}
                className="group flex flex-col justify-between bg-card p-8 transition-colors hover:bg-muted"
              >
                <span
                  className="mb-6 text-5xl font-800 text-border/40 transition-colors group-hover:text-primary/30"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                    {tip.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{tip.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HISTORY PREVIEW ═════════════════════════════════ */}
      <section className="border-y border-border/30 bg-muted py-24" aria-labelledby="tortenet-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <SectionLabel>A sport múltja</SectionLabel>
              <h2
                id="tortenet-heading"
                className="mt-3 text-4xl font-800 uppercase leading-tight tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              >
                Magyar gyaloglás
                <br />
                <span className="text-primary">történelme</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                A sportgyaloglás az olimpiai atlétika egyik legrégebbi és legtechnikusabb ága. Magyarország több évtizedes részvétele az olimpiai mozgalomban mély nyomot hagyott a sport fejlődésében.
              </p>
              <Link
                href="/tortenet"
                className="mt-8 inline-block border border-border/50 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Teljes történet
              </Link>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex gap-6 border-b border-border/20 py-5 last:border-b-0"
                >
                  <span
                    className="w-12 shrink-0 text-sm font-700 text-primary"
                    style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}
                  >
                    {a.year}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">{a.event}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{a.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS ════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="eredmenyek-heading">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Büszkeségek</SectionLabel>
          <h2
            id="eredmenyek-heading"
            className="mt-3 text-4xl font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Magyar eredmények
          </h2>

          {/* Wide marquee of achievements */}
          <div className="mt-12 overflow-hidden border-y border-border/30 py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...achievements, ...achievements].map((a, i) => (
                <span
                  key={i}
                  className="mr-16 text-sm uppercase tracking-widest text-muted-foreground"
                >
                  <span className="text-primary">{a.year}</span>&nbsp;&nbsp;{a.event}&nbsp;&mdash;&nbsp;{a.result}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EQUIPMENT & FACTS ═══════════════════════════════ */}
      <section className="bg-muted py-24" aria-labelledby="felszereles-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <SectionLabel>Felszerelés &amp; Tények</SectionLabel>
            <h2
              id="felszereles-heading"
              className="mt-3 text-4xl font-800 uppercase leading-tight tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
            >
              Eszközök &amp; Egyedi tények
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border/30 md:grid-cols-3 lg:grid-cols-5">
            {equipmentFacts.map((ef, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-card p-8"
              >
                <span
                  className="text-3xl font-800 text-primary/40"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">{ef.label}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{ef.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RULES PREVIEW ═══════════════════════════════════ */}
      <section className="py-24" aria-labelledby="szabalyok-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionLabel>Versenyszabályzat</SectionLabel>
              <h2
                id="szabalyok-heading"
                className="mt-3 text-4xl font-800 uppercase leading-tight tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              >
                Szabályok
                <br />
                <span className="text-primary">&amp; Diszciplínák</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                A sportgyaloglás egyedi mozgásszabályai szigorú bírói felügyelet alatt állnak. A szabályok megismerése elengedhetetlen minden versenyzőnek.
              </p>
              <Link
                href="/szabalyok"
                className="mt-8 inline-block border border-border/50 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Teljes szabályzat
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-px bg-border/30 sm:grid-cols-2">
                {[
                  { rule: 'Folyamatos talajkontakt', desc: 'Az egyik lábnak mindig érintenie kell a talajt.' },
                  { rule: 'Nyújtott térd', desc: 'A mellső lábnak nyújtott térdállásban kell érintenie a talajt.' },
                  { rule: 'Figyelmeztető rendszer', desc: 'Három figyelmeztetés után a versenyző kizárható.' },
                  { rule: 'Bírák száma', desc: 'Legalább 6 bíró szükséges olimpiai versenyeken.' },
                ].map((r, i) => (
                  <div key={i} className="bg-muted p-8">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{r.rule}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOG PREVIEW ════════════════════════════════════ */}
      <section className="border-t border-border/30 bg-card py-24" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <SectionLabel>Legújabb írások</SectionLabel>
              <h2
                id="blog-heading"
                className="mt-3 text-4xl font-800 uppercase leading-tight tracking-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
              >
                Blog &amp; Cikkek
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden text-xs uppercase tracking-widest text-primary underline-reveal md:block"
            >
              Összes cikk
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border/30 md:grid-cols-2 lg:grid-cols-3">
            {blogPreviews.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between bg-background p-8 transition-colors hover:bg-muted"
              >
                <span
                  className="mb-6 text-4xl font-800 text-border/30 transition-colors group-hover:text-primary/20"
                  style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <span className="mt-4 text-xs uppercase tracking-widest text-primary">
                  Olvasás &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="kapcsolat-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            <SectionLabel>Kapcsolat</SectionLabel>
            <h2
              id="kapcsolat-heading"
              className="text-5xl font-800 uppercase leading-tight tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
            >
              Kérdésed van?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Ha kérdésed, javaslatod vagy visszajelzésed van, írj nekünk. Örömmel válaszolunk minden megkeresésre.
            </p>
            <Link
              href="/rolunk#kapcsolat"
              className="border border-primary bg-primary px-10 py-3.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Kapcsolatfelvétel
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
