import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Lang } from '@/lib/landingI18n'

const LABELS = {
  ru: { direction: 'Лонг · Спот', live: 'LIVE', entry: 'Вход', stop: 'Стоп', since: 'Открыто 2 ч. назад' },
  ar: { direction: 'شراء · فوري', live: 'مباشر', entry: 'الدخول', stop: 'الإيقاف', since: 'مفتوحة منذ ساعتين' },
}

export function SignalCard({ lang }: { lang: Lang }) {
  const lbl = LABELS[lang]

  return (
    <div className={cn('w-full', 'max-w-[300px]', 'rounded-2xl', 'bg-[oklch(0.16_0_0)]', 'p-5', 'shadow-2xl', 'ring-1', 'ring-white/5', 'transition-transform', 'duration-300', 'hover:scale-[1.01]')}>
      <div className={cn('flex', 'items-center', 'justify-between', 'mb-4')}>
        <div className={cn('flex', 'items-center', 'gap-2.5')}>
          <svg viewBox="0 0 80 36" className={cn('h-9', 'w-20')} fill="none">
            <polyline points="0,30 10,26 18,28 28,18 36,22 46,10 56,14 64,6 72,9 80,4" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="0,30 10,26 18,28 28,18 36,22 46,10 56,14 64,6 72,9 80,4 80,36 0,36" fill="url(#sg)" opacity="0.15" />
            <defs>
              <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div>
            <div className={cn('text-sm', 'font-bold', 'text-foreground')}>BTC / USDT</div>
            <div className={cn('text-[11px]', 'text-emerald-400', 'font-medium')}>{lbl.direction}</div>
          </div>
        </div>
        <div className={cn('flex', 'items-center', 'gap-1.5', 'rounded-full', 'bg-red-500/10', 'px-2.5', 'py-1 ml-3')}>
          <span className={cn('h-1.5', 'w-1.5', 'rounded-full', 'bg-red-500', 'animate-pulse', 'inline-block')} />
          <span className={cn('text-[10px]', 'text-red-400', 'font-semibold', 'tracking-wide')}>{lbl.live}</span>
        </div>
      </div>
      <div className={cn('space-y-2.5', 'text-[12px]')}>
        <div className={cn('flex', 'items-center', 'justify-between', 'text-muted-foreground')}>
          <span>{lbl.entry}</span>
          <span className={cn('font-mono', 'font-semibold', 'text-foreground')}>$96 400</span>
        </div>
        <div className={cn('h-px', 'bg-white/5')} />
        <div className={cn('flex', 'items-center', 'justify-between')}>
          <div className={cn('flex', 'items-center', 'gap-1.5')}>
            <CheckCircle2 className={cn('h-3.5', 'w-3.5', 'text-emerald-500')} />
            <span className="text-muted-foreground">TP1</span>
          </div>
          <div className={cn('flex', 'items-center', 'gap-2')}>
            <span className={cn('font-mono', 'text-foreground')}>$98 200</span>
            <span className={cn('text-emerald-400', 'font-semibold')}>+1.9%</span>
          </div>
        </div>
        <div className={cn('flex', 'items-center', 'justify-between')}>
          <div className={cn('flex', 'items-center', 'gap-1.5')}>
            <CheckCircle2 className={cn('h-3.5', 'w-3.5', 'text-emerald-500')} />
            <span className="text-muted-foreground">TP2</span>
          </div>
          <div className={cn('flex', 'items-center', 'gap-2')}>
            <span className={cn('font-mono', 'text-foreground')}>$101 000</span>
            <span className={cn('text-emerald-400', 'font-semibold')}>+4.8%</span>
          </div>
        </div>
        <div className={cn('flex', 'items-center', 'justify-between', 'opacity-50')}>
          <div className={cn('flex', 'items-center', 'gap-1.5')}>
            <div className={cn('h-3.5', 'w-3.5', 'rounded-full', 'border', 'border-muted-foreground/40', 'flex', 'items-center', 'justify-center')}>
              <div className={cn('h-1.5', 'w-1.5', 'rounded-full', 'bg-muted-foreground/40')} />
            </div>
            <span className="text-muted-foreground">TP3</span>
          </div>
          <div className={cn('flex', 'items-center', 'gap-2')}>
            <span className={cn('font-mono', 'text-foreground')}>$105 500</span>
            <span className="text-muted-foreground">+9.4%</span>
          </div>
        </div>
        <div className={cn('h-px', 'bg-white/5')} />
        <div className={cn('flex', 'items-center', 'justify-between', 'text-muted-foreground')}>
          <span>{lbl.stop}</span>
          <div className={cn('flex', 'items-center', 'gap-2')}>
            <span className="font-mono">$94 200</span>
            <span className="text-red-400/70">−2.3%</span>
          </div>
        </div>
      </div>
      <div className={cn('mt-4', 'pt-3', 'border-t', 'border-white/5', 'flex', 'items-center', 'justify-between')}>
        <span className={cn('text-[11px]', 'text-muted-foreground')}>{lbl.since}</span>
        <span className={cn('text-[12px]', 'font-bold', 'text-emerald-400')}>+$4 280</span>
      </div>
    </div>
  )
}
