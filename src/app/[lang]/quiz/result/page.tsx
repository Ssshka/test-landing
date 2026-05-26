'use client'
import { use, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { quizStore, type QuizAnswers } from '@/lib/quizStore'
import { quizI18n } from '@/lib/quizI18n'
import avatarJames from '@/assets/avatar-james.jpg'
import { cn } from '@/lib/utils'
import type { Lang } from '@/lib/langStore'

export default function ResultPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [visible, setVisible] = useState(false)

  const t = quizI18n[lang as Lang].result

  useEffect(() => {
    setAnswers(quizStore.get())
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <div
      className={`min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-12 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={cn('w-full', 'max-w-md', 'flex', 'flex-col', 'items-center', 'text-center', 'gap-6')}>

        <div className="space-y-3">
          <h1 className={cn('text-3xl', 'sm:text-4xl', 'font-bold', 'tracking-tight', 'leading-tight')}>
            {t.title[0]}<br />{t.title[1]}
          </h1>
          <p className={cn('text-muted-foreground', 'text-sm', 'sm:text-base')}>{t.sub}</p>
        </div>

        <div className={cn('w-full', 'bg-[oklch(0.13_0_0)]', 'rounded-2xl', 'p-5', 'space-y-4')}>
          <div className={cn('flex', 'items-center', 'gap-4')}>
            <div className="relative shrink-0">
              <img src={avatarJames.src} alt="Manager" className={cn('h-16', 'w-16', 'rounded-full', 'object-cover')} />
              <span className={cn('absolute', '-bottom-0.5', '-right-0.5', 'h-4', 'w-4', 'rounded-full', 'bg-emerald-500', 'ring-2', 'ring-[oklch(0.13_0_0)]')} />
            </div>
            <div className="text-start">
              <div className={cn('text-base', 'font-bold', 'text-foreground')}>{t.managerName}</div>
              <div className={cn('text-xs', 'text-muted-foreground', 'mt-0.5')}>{t.managerTitle}</div>
              <div className={cn('flex', 'items-center', 'gap-0.5', 'mt-1.5')}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={cn('h-3', 'w-3', 'fill-amber-400', 'text-amber-400')} />
                ))}
                <span className={cn('text-[11px]', 'text-muted-foreground', 'ms-1')}>{t.rating}</span>
              </div>
            </div>
          </div>

          <div className={cn('h-px', 'bg-white/5')} />

          <div className={cn('flex', 'flex-wrap', 'gap-2')}>
            {t.specs.map(tag => (
              <span key={tag} className={cn('rounded-lg', 'bg-[oklch(0.19_0_0)]', 'px-2.5', 'py-1', 'text-[11px]', 'text-muted-foreground')}>{tag}</span>
            ))}
          </div>

          <div className={cn('h-px', 'bg-white/5')} />

          {Object.keys(answers).length > 0 && (
            <div className={cn('grid', 'grid-cols-2', 'gap-2', 'text-start')}>
              {answers.income && (
                <div className={cn('bg-[oklch(0.17_0_0)]', 'rounded-xl', 'px-3', 'py-2')}>
                  <div className={cn('text-[10px]', 'text-muted-foreground/60', 'mb-0.5')}>{t.incomeLbl}</div>
                  <div className={cn('text-sm', 'font-semibold', 'text-emerald-400')}>{t.incomeMap[answers.income] ?? answers.income}</div>
                </div>
              )}
              {answers.experience && (
                <div className={cn('bg-[oklch(0.17_0_0)]', 'rounded-xl', 'px-3', 'py-2')}>
                  <div className={cn('text-[10px]', 'text-muted-foreground/60', 'mb-0.5')}>{t.expLbl}</div>
                  <div className={cn('text-sm', 'font-semibold', 'text-foreground')}>{t.expMap[answers.experience] ?? answers.experience}</div>
                </div>
              )}
              {answers.focus && (
                <div className={cn('bg-[oklch(0.17_0_0)]', 'rounded-xl', 'px-3', 'py-2', 'col-span-2')}>
                  <div className={cn('text-[10px]', 'text-muted-foreground/60', 'mb-0.5')}>{t.focusLbl}</div>
                  <div className={cn('text-sm', 'font-semibold', 'text-foreground')}>{t.focusMap[answers.focus] ?? answers.focus}</div>
                </div>
              )}
            </div>
          )}
        </div>

        <a
          href={process.env.NEXT_PUBLIC_TELEGRAM_URL ?? 'https://t.me/cryptomentor'}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('w-full', 'flex', 'items-center', 'justify-center', 'gap-2.5', 'rounded-2xl', 'bg-emerald-500', 'text-black', 'font-bold', 'text-base', 'px-6', 'py-4', 'hover:bg-emerald-400', 'active:scale-[0.98]', 'transition-all', 'shadow-[0_0_32px_rgba(52,211,153,0.25)]')}
        >
          {t.cta}
          <ArrowRight className={cn('h-5', 'w-5')} />
        </a>

        <Link href={`/${lang}`} className={cn('text-sm', 'text-muted-foreground', 'hover:text-foreground', 'transition-colors')}>
          {t.back}
        </Link>
      </div>
    </div>
  )
}
