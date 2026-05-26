import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Providers } from '@/components/Providers'

const SUPPORTED_LANGS = ['ru', 'ar'] as const
export type Lang = typeof SUPPORTED_LANGS[number]

const META: Record<Lang, { title: string; description: string }> = {
  ru: {
    title: 'CryptoMentor — Хочешь $10k/мес на крипте?',
    description: 'Живые торговые сессии, личный ментор и проверенные стратегии. 1200+ учеников уже зарабатывают на крипте.',
  },
  ar: {
    title: 'كريبتو مينتور — تريد $10k / شهر من الكريبتو؟',
    description: 'جلسات تداول مباشرة، مرشد شخصي واستراتيجيات محقّقة — من الصفر إلى دخل ثابت خلال 30 يوماً.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const meta = META[lang as Lang] ?? META.ru
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CryptoMentor' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.png'],
    },
  }
}

export function generateStaticParams() {
  return SUPPORTED_LANGS.map(lang => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound()

  const isAr = lang === 'ar'

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      lang={lang}
      style={isAr ? { fontFamily: 'var(--font-cairo), sans-serif' } : undefined}
      className="min-h-full flex flex-col"
    >
      <Providers>{children}</Providers>
    </div>
  )
}
