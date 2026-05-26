import { notFound } from 'next/navigation'
import { QuizStepClient } from './QuizStepClient'

const VALID_LANGS = ['ru', 'ar']
const VALID_STEPS = ['1', '2', '3', '4', '5']

export function generateStaticParams() {
  return VALID_LANGS.flatMap(lang =>
    VALID_STEPS.map(step => ({ lang, step }))
  )
}

export default async function QuizStepPage({
  params,
}: {
  params: Promise<{ lang: string; step: string }>
}) {
  const { lang, step } = await params
  if (!VALID_LANGS.includes(lang) || !VALID_STEPS.includes(step)) notFound()
  return <QuizStepClient lang={lang} step={step} />
}
