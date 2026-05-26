'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center gap-6">
      <div className="space-y-2">
        <p className="text-4xl font-bold text-red-400">Ошибка</p>
        <h1 className="text-2xl font-semibold tracking-tight">Что-то пошло не так</h1>
        <p className="text-sm text-muted-foreground">{error.message || 'Попробуйте обновить страницу.'}</p>
      </div>
      <button
        onClick={reset}
        className="rounded-full bg-emerald-500 text-black font-semibold px-6 py-2.5 text-sm hover:bg-emerald-400 transition-colors"
      >
        Попробовать снова
      </button>
    </div>
  )
}
