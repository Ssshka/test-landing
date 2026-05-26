import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReviewData } from '@/lib/landingI18n'

interface Props extends ReviewData {
  resultLabel: string
}

export function ReviewCard({ name, period, avatarBg, avatarText, result, text, wide, resultLabel }: Props) {
  const initials = name.split(' ').map(p => p[0]).join('').slice(0, 2)
  return (
    <div className={cn('rounded-2xl', 'bg-[oklch(0.18_0_0)]', 'p-5', 'ring-1', 'ring-white/5', 'flex', 'flex-col', 'gap-3', wide && 'lg:col-span-2', 'transition-transform', 'duration-300', 'ease-out', 'hover:scale-[1.015]')}>
      <div className={cn('flex', 'items-center', 'gap-3')}>
        <div className={cn('flex', 'h-9', 'w-9', 'shrink-0', 'items-center', 'justify-center', 'rounded-full', avatarBg)}>
          <span className={cn('text-xs', 'font-medium', avatarText)}>{initials}</span>
        </div>
        <div>
          <div className={cn('text-sm', 'font-medium', 'text-foreground')}>{name}</div>
          <div className={cn('text-[11px]', 'text-muted-foreground/70')}>{period}</div>
        </div>
      </div>
      <div className={cn('flex', 'items-center', 'gap-0.5')}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn('h-2.5', 'w-2.5', 'fill-emerald-400', 'text-emerald-400')} />
        ))}
      </div>
      <p className={cn('flex-1', 'text-[13px]', 'font-light', 'leading-relaxed', 'text-muted-foreground')}>&quot;{text}&quot;</p>
      <div className={cn('flex', 'items-center', 'justify-between', 'border-t', 'border-white/5', 'pt-3')}>
        <span className={cn('text-[11px]', 'text-muted-foreground/60')}>{resultLabel}</span>
        <span className={cn('text-sm', 'font-medium', 'text-emerald-400')}>{result}</span>
      </div>
    </div>
  )
}
