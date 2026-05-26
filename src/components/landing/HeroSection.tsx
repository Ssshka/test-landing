'use client'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import ExchangeBinance from '@web3icons/react/icons/exchanges/ExchangeBinance'
import ExchangeBybit from '@web3icons/react/icons/exchanges/ExchangeBybit'
import ExchangeOkx from '@web3icons/react/icons/exchanges/ExchangeOkx'
import { cn } from '@/lib/utils'
import type { Lang, LandingT, PaymentRowData } from '@/lib/landingI18n'
import { PaymentRow } from './PaymentRow'
import { StudentCard } from './StudentCard'
import { SignalCard } from './SignalCard'

interface Props {
  lang: Lang
  t: LandingT
  paymentRows: PaymentRowData[]
}

const EXCHANGES = [
  { Icon: ExchangeBinance, name: 'Binance', variant: 'branded' as const, cls: '' },
  { Icon: ExchangeBybit,   name: 'Bybit',   variant: 'branded' as const, cls: '' },
  { Icon: ExchangeOkx,     name: 'OKX',     variant: 'mono'    as const, cls: 'text-white' },
]

export function HeroSection({ lang, t, paymentRows }: Props) {
  const isAr = lang === 'ar'

  return (
    <>
      <div className={cn('mx-auto', 'max-w-5xl', 'pt-8', 'sm:pt-12', 'md:pt-16', 'pb-5', 'sm:pb-8', 'md:pb-10', 'text-center')}>
        <h1 className={cn('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-6xl', 'xl:text-7xl', 'font-semibold', 'tracking-tight', 'leading-[1.08]')}>
          {t.heroLine1}<br />{t.heroLine2}
        </h1>
        <p className={cn('mt-3', 'sm:mt-5', 'text-sm', 'sm:text-base', 'md:text-lg', 'text-muted-foreground', 'max-w-xl', 'mx-auto')}>{t.heroSub}</p>
      </div>

      <div className={cn('flex', 'mb-16', 'sm:mb-20', 'relative', 'justify-center', 'w-full', 'anim-up', 'anim-d300')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Vector 3093.svg" alt="" width={1240} height={50} className={cn('w-full', 'scale-[1.05]')} />
        <Link
          href={`/${lang}/quiz/1`}
          className={cn('rounded-full', 'absolute', 'top-2', 'sm:top-3', 'bg-primary', 'mx-auto', 'text-primary-foreground', 'px-5', 'sm:px-7', 'py-2', 'sm:py-3', 'text-sm', 'sm:text-base', 'font-medium', 'inline-flex', 'items-center', 'gap-2', 'hover:opacity-90', 'transition', 'shadow-lg')}
        >
          {t.cta}
          {isAr ? <ArrowLeft className={cn('h-4', 'w-4')} /> : <ArrowRight className={cn('h-4', 'w-4')} />}
        </Link>
      </div>

      <div className={cn('relative', 'mx-auto', 'mt-4')}>
        <div className={cn('flex', 'items-start', 'justify-between', 'gap-4', 'md:gap-6')}>
          <div className={cn('hidden', 'lg:block', 'shrink-0', 'anim-left', 'anim-d400')}><StudentCard lang={lang} /></div>

          <div className={cn('flex-1', 'min-w-0', 'flex', 'flex-col', 'gap-4', 'md:gap-5', 'anim-up', 'anim-d400')}>
            <div className={cn('relative', 'h-[185px]', 'sm:h-[210px]', 'md:h-[230px]')}>
              <div className={cn('absolute', 'inset-x-4', 'sm:inset-x-6', 'top-[85px]', 'sm:top-[100px]', 'scale-[0.95]', 'origin-top')}>
                <PaymentRow {...paymentRows[0]} incoming={t.incoming} confirmed={t.confirmed} />
              </div>
              <div className={cn('absolute', 'inset-x-2', 'sm:inset-x-3', 'top-[43px]', 'sm:top-[50px]', 'scale-[0.97]', 'origin-top')}>
                <PaymentRow {...paymentRows[1]} incoming={t.incoming} confirmed={t.confirmed} />
              </div>
              <div className={cn('absolute', 'inset-x-0', 'top-0')}>
                <PaymentRow {...paymentRows[2]} incoming={t.incoming} confirmed={t.confirmed} />
              </div>
            </div>

            <div className={cn('grid', 'grid-cols-3', 'gap-2.5')}>
              {EXCHANGES.map(({ Icon, name, variant, cls }, i) => (
                <div key={name} className={cn('flex', 'flex-col', 'items-center', 'gap-2', 'bg-[oklch(0.14_0_0)]', 'rounded-xl', 'px-2', 'py-3', 'transition-colors', 'duration-200', 'hover:bg-[oklch(0.19_0_0)]')}>
                  <Icon size={28} variant={variant} className={cls || undefined} />
                  <div className="text-center">
                    <div className={cn('text-xs', 'font-semibold', 'text-foreground')}>{name}</div>
                    <div className={cn('text-[10px]', 'text-muted-foreground', 'mt-0.5')}>{t.exDesc[i]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cn('hidden', 'lg:block', 'shrink-0', 'anim-right', 'anim-d400')}><SignalCard lang={lang} /></div>
        </div>
      </div>
    </>
  )
}
