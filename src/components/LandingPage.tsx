'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { T, REVIEWS_RU, REVIEWS_AR, PAYMENT_ROWS_RU, PAYMENT_ROWS_AR } from '@/lib/landingI18n'
import type { Lang } from '@/lib/landingI18n'
import { HeroSection } from './landing/HeroSection'
import { ReviewCard } from './landing/ReviewCard'
import { useInView } from '@/hooks/use-in-view'

const TokensMarquee = dynamic(
  () => import('./landing/TokensMarquee').then(m => ({ default: m.TokensMarquee })),
  { ssr: false }
)

export function LandingPage({ lang }: { lang: Lang }) {
  const isAr = lang === 'ar'
  const t = T[lang]
  const reviews = isAr ? REVIEWS_AR : REVIEWS_RU
  const otherLang = isAr ? 'ru' : 'ar'
  const paymentRows = isAr ? PAYMENT_ROWS_AR : PAYMENT_ROWS_RU

  const [reviewsRef, reviewsInView] = useInView()

  return (
    <div className={cn('min-h-screen', 'bg-background', 'text-foreground')}>
      <div className={cn('mx-auto', 'max-w-7xl', 'border-x', 'border-border')}>

        <header className={cn('relative', 'px-4', 'sm:px-8', 'py-4', 'sm:py-6', 'flex', 'items-center', 'justify-between', 'border-b', 'border-border', 'anim-in')}>
          <div className={cn('text-xl', 'font-semibold', 'tracking-tight')}>{t.brand}</div>
          <div className={cn('flex', 'items-center', 'gap-2')}>
            <Link
              href={`/${otherLang}`}
              className={cn('rounded-md', 'border', 'border-border', 'px-3', 'py-1.5', 'text-xs', 'font-semibold', 'tracking-wide', 'hover:bg-secondary', 'transition')}
            >{t.langToggle}</Link>
          </div>
        </header>

        <main className={cn('relative', 'px-4', 'sm:px-6', 'md:px-8')}>
          <HeroSection lang={lang} t={t} paymentRows={[...paymentRows]} />

          <div>
            <TokensMarquee />
          </div>

          <section className={cn('mt-16', 'pb-20', 'sm:mt-24', 'sm:pb-28')}>
            <div ref={reviewsRef}>
              <div className={cn('mb-10', 'sm:mb-12', 'text-center', 'reveal', reviewsInView && 'in-view')}>
                <div className={cn('mb-4', 'inline-flex', 'items-center', 'gap-2', 'rounded-full', 'bg-emerald-500/10', 'px-3', 'py-1')}>
                  <span className={cn('inline-block', 'h-1.5', 'w-1.5', 'animate-pulse', 'rounded-full', 'bg-emerald-500')} />
                  <span className={cn('text-xs', 'font-medium', 'text-emerald-400')}>{t.reviewsChip}</span>
                </div>
                <h2 className={cn('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'font-semibold', 'tracking-tight')}>{t.reviewsTitle}</h2>
                <p className={cn('mt-3', 'text-xs', 'sm:text-sm', 'md:text-base', 'text-muted-foreground')}>{t.reviewsSub}</p>
              </div>
              <div className={cn('grid', 'grid-cols-1', 'gap-2', 'sm:grid-cols-2', 'lg:grid-cols-3')}>
                {reviews.map((r, i) => (
                  <div
                    key={r.name}
                    className={cn('reveal', reviewsInView && 'in-view')}
                    style={{ transitionDelay: reviewsInView ? `${i * 60}ms` : '0ms' }}
                  >
                    <ReviewCard {...r} resultLabel={t.resultLabel} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  )
}
