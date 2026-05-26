'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  TrendingUp, BarChart2, Zap, Gem,
  Coins, DollarSign, CreditCard, Landmark,
  BookOpen, Target,
  Clock, Timer, Sun, Shuffle,
  ArrowLeftRight, TrendingDown, Copy, Layers,
} from 'lucide-react'
import { QuizLayout } from '@/components/QuizLayout'
import { quizStore, type QuizAnswers } from '@/lib/quizStore'
import { quizI18n } from '@/lib/quizI18n'
import { cn } from '@/lib/utils'
import type { Lang } from '@/lib/langStore'

type LucideIcon = React.ComponentType<{ className?: string }>

interface StepConfig {
  storeKey: keyof QuizAnswers
  values: string[]
  icons: LucideIcon[]
  selectedClass: string
  i18nKey: 'q1' | 'q2' | 'q3' | 'q4' | 'q5'
}

export const STEP_CONFIGS: Record<string, StepConfig> = {
  '1': {
    storeKey: 'income',
    values: ['1k', '3k', '5k', '10k+'],
    icons: [TrendingUp, BarChart2, Zap, Gem],
    selectedClass: 'bg-emerald-500/15 ring-2 ring-emerald-500 scale-[0.97]',
    i18nKey: 'q1',
  },
  '2': {
    storeKey: 'investment',
    values: ['100', '500', '1000', '5000+'],
    icons: [Coins, DollarSign, CreditCard, Landmark],
    selectedClass: 'bg-violet-500/15 ring-2 ring-violet-500 scale-[0.97]',
    i18nKey: 'q2',
  },
  '3': {
    storeKey: 'experience',
    values: ['beginner', 'middle', 'advanced', 'expert'],
    icons: [BookOpen, BarChart2, Zap, Target],
    selectedClass: 'bg-sky-500/15 ring-2 ring-sky-500 scale-[0.97]',
    i18nKey: 'q3',
  },
  '4': {
    storeKey: 'time',
    values: ['1h', '3h', 'fullday', 'flexible'],
    icons: [Clock, Timer, Sun, Shuffle],
    selectedClass: 'bg-orange-500/15 ring-2 ring-orange-500 scale-[0.97]',
    i18nKey: 'q4',
  },
  '5': {
    storeKey: 'focus',
    values: ['spot', 'futures', 'copy', 'passive'],
    icons: [ArrowLeftRight, TrendingDown, Copy, Layers],
    selectedClass: 'bg-emerald-500/15 ring-2 ring-emerald-500 scale-[0.97]',
    i18nKey: 'q5',
  },
}

export function QuizStepClient({ lang, step }: { lang: string; step: string }) {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  const config = STEP_CONFIGS[step]!
  const stepNum = parseInt(step, 10)
  const q = quizI18n[lang as Lang][config.i18nKey]
  const backTo = stepNum === 1 ? `/${lang}` : `/${lang}/quiz/${stepNum - 1}`
  const nextPath = stepNum < 5 ? `/${lang}/quiz/${stepNum + 1}` : `/${lang}/quiz/processing`

  const handleSelect = (value: string) => {
    setSelected(value)
    quizStore.set(config.storeKey, value)
    setTimeout(() => router.push(nextPath), 260)
  }

  return (
    <QuizLayout step={stepNum} total={5} backTo={backTo} lang={lang as Lang}>
      <div className={cn('text-center', 'mb-6', 'sm:mb-8')}>
        <h2 className={cn('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'font-bold', 'tracking-tight', 'leading-tight')}>
          {q.title[0]}<br />{q.title[1]}
        </h2>
        <p className={cn('mt-2', 'sm:mt-3', 'text-xs', 'sm:text-sm', 'md:text-base', 'text-muted-foreground')}>{q.sub}</p>
      </div>

      <div className={cn('grid', 'grid-cols-2', 'gap-2', 'sm:gap-3')}>
        {config.values.map((value, i) => {
          const Icon = config.icons[i]
          const [label, sub] = q.opts[i]
          return (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              className={`text-start rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-200 cursor-pointer outline-none
                ${selected === value
                  ? config.selectedClass
                  : 'bg-[oklch(0.13_0_0)] hover:bg-[oklch(0.19_0_0)] hover:scale-[1.02] active:scale-[0.98]'
                }`}
            >
              <div className={cn('h-8', 'w-8', 'sm:h-9', 'sm:w-9', 'rounded-xl', 'bg-[oklch(0.20_0_0)]', 'flex', 'items-center', 'justify-center', 'mb-2', 'sm:mb-3')}>
                <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-muted-foreground" />
              </div>
              <div className={cn('text-sm', 'sm:text-base', 'md:text-lg', 'font-bold', 'text-foreground', 'leading-snug')}>{label}</div>
              <div className={cn('text-[11px]', 'sm:text-xs', 'text-muted-foreground', 'mt-1', 'leading-relaxed')}>{sub}</div>
            </button>
          )
        })}
      </div>
    </QuizLayout>
  )
}
