'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CONTENT = {
  ru: { title: 'Страница не найдена', sub: 'Такой страницы не существует или она была удалена.', btn: 'На главную' },
  ar: { title: 'الصفحة غير موجودة', sub: 'هذه الصفحة غير موجودة أو تم حذفها.', btn: 'الصفحة الرئيسية' },
}

export default function NotFound() {
  const pathname = usePathname()
  const lang = pathname?.startsWith('/ar') ? 'ar' : 'ru'
  const t = CONTENT[lang]

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center gap-6"
    >
      <div className="space-y-2">
        <p className="text-6xl font-bold text-emerald-500">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">{t.title}</h1>
        <p className="text-sm text-muted-foreground">{t.sub}</p>
      </div>
      <Link
        href={`/${lang}`}
        className="rounded-full bg-emerald-500 text-black font-semibold px-6 py-2.5 text-sm hover:bg-emerald-400 transition-colors"
      >
        {t.btn}
      </Link>
    </div>
  )
}
