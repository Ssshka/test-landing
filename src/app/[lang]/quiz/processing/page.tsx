'use client'
import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { quizI18n } from '@/lib/quizI18n'
import type { Lang } from '@/lib/langStore'

export default function ProcessingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params)
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [msgIdx, setMsgIdx] = useState(0)

  const t = quizI18n[lang as Lang].processing
  const { messages, note } = t

  useEffect(() => {
    const total = 4200
    const tick = 50
    let elapsed = 0

    const interval = setInterval(() => {
      elapsed += tick
      const p = Math.min((elapsed / total) * 100, 100)
      setProgress(p)
      setMsgIdx(Math.min(Math.floor((p / 100) * messages.length), messages.length - 1))

      if (elapsed >= total) {
        clearInterval(interval)
        setTimeout(() => router.push(`/${lang}/quiz/result`), 400)
      }
    }, tick)

    return () => clearInterval(interval)
  }, [router, lang, messages.length])

  const circumference = 2 * Math.PI * 44
  const dash = circumference - (progress / 100) * circumference

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col items-center text-center gap-8">

        <div className="relative h-32 w-32">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="oklch(0.18 0 0)" strokeWidth="6" />
            <circle
              cx="50" cy="50" r="44"
              fill="none"
              stroke="#34d399"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dash}
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{Math.round(progress)}%</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground min-h-[2rem] transition-all">
            {messages[msgIdx]}
          </h2>
          <p className="text-sm text-muted-foreground">{note}</p>
        </div>

        <div className="w-full space-y-2">
          {messages.map((msg, i) => {
            const stepProgress = (i + 1) / messages.length
            const isDone = progress / 100 >= stepProgress
            const isActive = msgIdx === i
            return (
              <div
                key={msg}
                className={`flex items-center gap-3 text-start transition-opacity duration-300 ${isDone || isActive ? 'opacity-100' : 'opacity-30'}`}
              >
                <div className={`h-4 w-4 rounded-full shrink-0 flex items-center justify-center transition-colors duration-300
                  ${isDone ? 'bg-emerald-500' : isActive ? 'bg-emerald-500/40' : 'bg-[oklch(0.20_0_0)]'}`}>
                  {isDone && (
                    <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 10 10">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${isActive ? 'text-foreground font-medium' : isDone ? 'text-muted-foreground' : 'text-muted-foreground/40'}`}>
                  {msg}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
