import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PaymentRowData } from '@/lib/landingI18n'

interface Props extends PaymentRowData {
  incoming: string
  confirmed: string
}

export function PaymentRow({ depth = 0, amount, bank, method, time, incoming, confirmed }: Props) {
  const cardBg = depth === 0 ? 'bg-[oklch(0.22_0_0)]' : depth === 1 ? 'bg-[oklch(0.19_0_0)]' : 'bg-[oklch(0.17_0_0)]'
  const badgeRing = depth === 0 ? 'ring-[oklch(0.22_0_0)]' : depth === 1 ? 'ring-[oklch(0.19_0_0)]' : 'ring-[oklch(0.17_0_0)]'
  return (
    <div className={`flex items-center gap-3 rounded-xl ${cardBg} px-3.5 py-3 shadow-xl ring-1 ring-white/5`}>
      <div className={cn('relative', 'shrink-0')}>
        <div className="h-10 w-10 rounded-xl overflow-hidden bg-white p-1">
          <Image src={bank.logoSrc} alt={bank.name} width={40} height={40} className="h-full w-full object-contain" />
        </div>
        <div className={`absolute -bottom-0.5 -right-0.5 h-[18px] w-[18px] rounded-full bg-emerald-500 flex items-center justify-center ring-2 ${badgeRing}`}>
          <Check className={cn('h-2.5', 'w-2.5', 'text-white', 'stroke-[3]')} />
        </div>
      </div>
      <div className={cn('flex-1', 'min-w-0')}>
        <div className={cn('flex', 'items-baseline', 'justify-between', 'gap-2')}>
          <span className={cn('text-sm', 'font-semibold', 'text-foreground')}>{incoming}</span>
          <span className={cn('text-sm', 'font-bold', 'text-emerald-400', 'shrink-0', 'whitespace-nowrap')}>+{amount} ₽</span>
        </div>
        <div className={cn('flex', 'items-center', 'justify-between', 'gap-2', 'mt-0.5')}>
          <span className={cn('text-[11px]', 'text-muted-foreground')}>{bank.name} · {method} · {time}</span>
          <div className={cn('flex', 'items-center', 'gap-1', 'shrink-0')}>
            <span className={cn('h-1.5', 'w-1.5', 'rounded-full', 'bg-emerald-500', 'inline-block')} />
            <span className={cn('text-[10px]', 'text-emerald-500/80', 'font-medium')}>{confirmed}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
