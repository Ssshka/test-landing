'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { type Lang } from '@/lib/langStore'
import { quizI18n } from '@/lib/quizI18n'

interface Props {
  step: number
  total: number
  backTo: string
  children: React.ReactNode
  lang: Lang
}

export function QuizLayout({ step, total, backTo, children, lang }: Props) {
  const isAr = lang === 'ar'
  const t = quizI18n[lang]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="px-4 pt-6 pb-2 flex items-center gap-4 mx-auto w-full max-w-2xl">
        <Link
          href={backTo}
          className="h-9 w-9 rounded-full bg-[oklch(0.14_0_0)] flex items-center justify-center shrink-0 hover:bg-[oklch(0.20_0_0)] transition-colors"
        >
          {isAr
            ? <ArrowRight className="h-4 w-4 text-muted-foreground" />
            : <ArrowLeft className="h-4 w-4 text-muted-foreground" />
          }
        </Link>
        <div className="flex-1">
          <div className="flex justify-between text-[11px] text-muted-foreground mb-1.5">
            <span>{t.stepOf(step, total)}</span>
            <span>{Math.round((step / total) * 100)}%</span>
          </div>
          <div className="h-1 bg-[oklch(0.18_0_0)] rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${(step / total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">{children}</div>
      </div>
    </div>
  )
}
