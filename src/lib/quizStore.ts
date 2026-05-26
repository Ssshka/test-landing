export type QuizAnswers = {
  income?: string
  investment?: string
  experience?: string
  time?: string
  focus?: string
}

const KEY = 'quiz_answers'

export const quizStore = {
  get(): QuizAnswers {
    if (typeof window === 'undefined') return {}
    try { return JSON.parse(sessionStorage.getItem(KEY) || '{}') } catch { return {} }
  },
  set(key: keyof QuizAnswers, value: string) {
    if (typeof window === 'undefined') return
    sessionStorage.setItem(KEY, JSON.stringify({ ...quizStore.get(), [key]: value }))
  },
  clear() {
    if (typeof window === 'undefined') return
    sessionStorage.removeItem(KEY)
  },
}
