import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/blog-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | Hungary Gyaloglás`,
    description: article.summary,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = articles.findIndex((a) => a.slug === slug)
  const prev = articles[currentIndex - 1] ?? null
  const next = articles[currentIndex + 1] ?? null

  return (
    <>
      {/* Header */}
      <section className="border-b border-border/30 bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="mb-8 inline-block text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            &larr; Vissza a bloghoz
          </Link>
          <span
            className="block text-xs font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.18em' }}
          >
            Blog
          </span>
          <h1
            className="mt-4 text-[clamp(1.8rem,4vw,3.5rem)] font-800 uppercase leading-tight tracking-tight text-foreground"
            style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}
          >
            {article.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section
        className="border-t border-border/30 py-12"
        aria-label="Cikkek közötti navigáció"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1 border-l-2 border-border/30 pl-4 transition-colors hover:border-primary"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  &larr; Előző cikk
                </span>
                <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end gap-1 border-r-2 border-border/30 pr-4 text-right transition-colors hover:border-primary"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Következő cikk &rarr;
                </span>
                <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
