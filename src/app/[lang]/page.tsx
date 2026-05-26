import { notFound } from 'next/navigation'
import { LandingPage } from '@/components/LandingPage'
import type { Lang } from './layout'

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!['ru', 'ar'].includes(lang)) notFound()
  return <LandingPage lang={lang as Lang} />
}
