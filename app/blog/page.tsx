import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog és Cikkek | Hungary Gyaloglás',
  description: 'Sportgyaloglással kapcsolatos cikkek, tippek és útmutatók.',
}

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border/30 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Legújabb írások
          </span>
          <h1
            className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            Blog
            <br />
            <span className="text-primary">&amp; Cikkek</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Szakértői cikkek sportgyaloglóknak: technikától a táplálkozáson át a versenyfelkészülésig.
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-20" aria-label="Cikkek listája">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-0 divide-y divide-border/30">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group grid grid-cols-1 gap-6 py-10 transition-colors hover:bg-muted lg:grid-cols-12 lg:gap-12 lg:px-6"
              >
                <div className="flex items-start gap-4 lg:col-span-2">
                  <span
                    className="text-5xl font-800 text-border/30 transition-colors group-hover:text-primary/30"
                    style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="text-lg font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
                </div>
                <div className="flex items-center lg:col-span-3 lg:justify-end">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Olvasás &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
