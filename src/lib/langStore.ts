export type Lang = 'ru' | 'ar';
const KEY = 'quiz_lang';

export const langStore = {
  get: (): Lang => {
    try { return (sessionStorage.getItem(KEY) as Lang) ?? 'ar' } catch { return 'ar' }
  },
  set: (lang: Lang) => {
    try { sessionStorage.setItem(KEY, lang) } catch {}
  },
};
