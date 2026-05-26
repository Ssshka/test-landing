import Image from 'next/image'
import avatarJames from '@/assets/avatar-james.jpg'
import { cn } from '@/lib/utils'
import type { Lang } from '@/lib/landingI18n'

const DAYS_RU = [
  { label: 'Пн', profit: 820, h: 55 },
  { label: 'Вт', profit: 1200, h: 75 },
  { label: 'Ср', profit: -340, h: 25 },
  { label: 'Чт', profit: 1100, h: 68 },
  { label: 'Пт', profit: 1500, h: 90 },
  { label: 'Сб', profit: 620, h: 40 },
  { label: 'Вс', profit: 380, h: 28 },
]

const DAYS_AR = [
  { label: 'إثن', profit: 820, h: 55 },
  { label: 'ثلا', profit: 1200, h: 75 },
  { label: 'أرب', profit: -340, h: 25 },
  { label: 'خمي', profit: 1100, h: 68 },
  { label: 'جمع', profit: 1500, h: 90 },
  { label: 'سبت', profit: 620, h: 40 },
  { label: 'أحد', profit: 380, h: 28 },
]

const LABELS = {
  ru: { name: 'Алексей М.', period: '3 мес. в программе', badge: 'Лучший ученик', week: 'Неделя', winRate: 'Win rate', trades: 'Сделки' },
  ar: { name: 'أليكسي م.', period: '3 أشهر في البرنامج', badge: 'أفضل طالب', week: 'الأسبوع', winRate: 'نسبة الربح', trades: 'الصفقات' },
}

export function StudentCard({ lang }: { lang: Lang }) {
  const days = lang === 'ar' ? DAYS_AR : DAYS_RU
  const lbl = LABELS[lang]
  const total = days.reduce((s, d) => s + d.profit, 0)

  return (
    <div className={cn('w-full', 'max-w-[280px]', 'rounded-2xl', 'bg-[oklch(0.16_0_0)]', 'p-4', 'shadow-2xl', 'transition-transform', 'duration-300', 'hover:scale-[1.01]')}>
      <div className={cn('flex', 'items-center', 'justify-between', 'mb-4')}>
        <div className={cn('flex', 'items-center', 'gap-2.5')}>
          <Image src={avatarJames} alt={lbl.name} width={36} height={36} className={cn('h-9', 'w-9', 'rounded-full', 'object-cover')} />
          <div>
            <div className={cn('text-sm', 'font-semibold', 'text-foreground')}>{lbl.name}</div>
            <div className={cn('text-[11px]', 'text-muted-foreground')}>{lbl.period}</div>
          </div>
        </div>
        <div className={cn('rounded-full', 'bg-emerald-500/10 px-2 pb-1 ml-3')}>
          <span className={cn('text-[10px]', 'font-semibold', 'text-emerald-400')}>{lbl.badge}</span>
        </div>
      </div>
      <div className={cn('flex', 'items-end', 'justify-between', 'gap-1.5', 'h-[72px]', 'mb-2')}>
        {days.map((d) => (
          <div key={d.label} className={cn('flex', 'flex-col', 'items-center', 'gap-1', 'flex-1')}>
            <div className={d.profit > 0 ? 'w-full rounded-t-sm bg-emerald-500' : 'w-full rounded-t-sm bg-red-500/70'} style={{ height: `${d.h}%` }} />
          </div>
        ))}
      </div>
      <div className={cn('flex', 'justify-between', 'mb-3')}>
        {days.map((d) => <div key={d.label} className={cn('flex-1', 'text-center', 'text-[9px]', 'text-muted-foreground/50')}>{d.label}</div>)}
      </div>
      <div className={cn('flex', 'items-center', 'justify-between', 'bg-[oklch(0.12_0_0)]', 'rounded-xl', 'px-3', 'py-2.5')}>
        <div>
          <div className={cn('text-[10px]', 'text-muted-foreground/60', 'mb-0.5')}>{lbl.week}</div>
          <div className={cn('text-base', 'font-bold', 'text-emerald-400')}>+${total.toLocaleString('en-US')}</div>
        </div>
        <div className={cn('h-8', 'w-px', 'bg-white/5')} />
        <div className="text-center">
          <div className={cn('text-[10px]', 'text-muted-foreground/60', 'mb-0.5')}>{lbl.winRate}</div>
          <div className={cn('text-base', 'font-bold', 'text-foreground')}>74%</div>
        </div>
        <div className={cn('h-8', 'w-px', 'bg-white/5')} />
        <div className="text-right">
          <div className={cn('text-[10px]', 'text-muted-foreground/60', 'mb-0.5')}>{lbl.trades}</div>
          <div className={cn('text-base', 'font-bold', 'text-foreground')}>34</div>
        </div>
      </div>
    </div>
  )
}
