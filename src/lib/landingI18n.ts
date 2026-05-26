export type Lang = 'ru' | 'ar'

export interface ReviewData {
  name: string
  period: string
  avatarBg: string
  avatarText: string
  result: string
  text: string
  wide: boolean
}

export interface PaymentRowData {
  depth: 0 | 1 | 2
  amount: string
  bank: { name: string; logoSrc: string }
  method: string
  time: string
}

export const T = {
  ru: {
    brand: 'CryptoMentor',
    login: 'Войти',
    signup: 'Записаться',
    heroLine1: 'Хочешь $10k/мес',
    heroLine2: 'на крипте?',
    heroSub: 'Живые торги, личный ментор и стратегии с результатом — с нуля до стабильного дохода за 30 дней.',
    cta: 'Пройти тест за 30 сек',
    incoming: 'Входящий перевод',
    confirmed: 'подтверждено',
    exDesc: ['Спот · Фьючерсы', 'Деривативы', 'Copy Trading'] as [string, string, string],
    reviewsChip: '1 200+ учеников',
    reviewsTitle: 'Реальные результаты учеников',
    reviewsSub: 'Не обещания — конкретные цифры',
    resultLabel: 'Результат',
    langToggle: 'عربي',
  },
  ar: {
    brand: 'كريبتو مينتور',
    login: 'تسجيل الدخول',
    signup: 'سجّل الآن',
    heroLine1: 'تريد $10k / شهر',
    heroLine2: 'من الكريبتو؟',
    heroSub: 'جلسات تداول مباشرة، مرشد شخصي واستراتيجيات محقّقة — من الصفر إلى دخل ثابت خلال 30 يوماً.',
    cta: 'أجب على الاختبار في 30 ثانية',
    incoming: 'تحويل وارد',
    confirmed: 'مؤكّد',
    exDesc: ['فوري · مستقبليات', 'مشتقات', 'تداول نسخ'] as [string, string, string],
    reviewsChip: '+1,200 طالب',
    reviewsTitle: 'نتائج حقيقية للطلاب',
    reviewsSub: 'ليست وعوداً — أرقام فعلية',
    resultLabel: 'النتيجة',
    langToggle: 'RU',
  },
} as const

export type LandingT = typeof T[Lang]

export const REVIEWS_RU: ReviewData[] = [
  { name: 'Алексей М.', period: '3 мес. в программе', avatarBg: 'bg-emerald-500/20', avatarText: 'text-emerald-400', result: '+$8 400 / мес', text: 'Пришёл с нулём, через месяц закрыл первую сотку. Сейчас стабильно выхожу на 8–10k. Живые торговые сессии — это огонь, видишь всё в режиме реального времени.', wide: true },
  { name: 'Дарья К.', period: '2 мес. в программе', avatarBg: 'bg-blue-500/20', avatarText: 'text-blue-400', result: '+$5 700 / мес', text: 'До этого пробовала несколько курсов — сплошная теория. Здесь с первого дня торгуем вживую. За второй месяц вышла на $5 700 чистыми.', wide: false },
  { name: 'Максим П.', period: '6 мес. в программе', avatarBg: 'bg-purple-500/20', avatarText: 'text-purple-400', result: '+$12 000 / мес', text: 'Начинал с $500, сейчас управляю депозитом $40k. Win rate вырос до 71%. Программа меняет мышление — торгуешь системно, без эмоций.', wide: false },
  { name: 'Игорь В.', period: '4 мес. в программе', avatarBg: 'bg-orange-500/20', avatarText: 'text-orange-400', result: '+$9 100 / мес', text: 'Скептически относился к таким программам, но результат убедил. Чёткие сигналы, живая поддержка 24/7. Уволился с основной работы на 3-м месяце.', wide: true },
  { name: 'Анна Л.', period: '3 мес. в программе', avatarBg: 'bg-pink-500/20', avatarText: 'text-pink-400', result: '+$6 300 / мес', text: 'Торгую неполный день, параллельно с работой. За последний месяц — $6 300, это больше зарплаты. Сигналы с чёткими уровнями, всё понятно.', wide: true },
  { name: 'Тимур А.', period: '1 мес. в программе', avatarBg: 'bg-cyan-500/20', avatarText: 'text-cyan-400', result: '+$2 200 в 1 мес.', text: 'Первый месяц — $2 200 с депозитом $3 000. Ожидал меньше, честно. Стратегии простые, но работают. Ментор разбирает каждую сделку лично.', wide: false },
]

export const REVIEWS_AR: ReviewData[] = [
  { name: 'محمد أ.', period: '3 أشهر في البرنامج', avatarBg: 'bg-emerald-500/20', avatarText: 'text-emerald-400', result: '+8,400$ / شهر', text: 'بدأت من الصفر وأغلقت المئة الأولى في الشهر الأول. الآن أحقق 8–10 آلاف دولار بثبات. الجلسات الحية مذهلة — كل شيء في الوقت الفعلي.', wide: true },
  { name: 'فاطمة ح.', period: 'شهران في البرنامج', avatarBg: 'bg-blue-500/20', avatarText: 'text-blue-400', result: '+5,700$ / شهر', text: 'جربت عدة دورات قبل هذا وكانت كلها نظرية. هنا نتداول فعلياً من اليوم الأول. في الشهر الثاني حققت 5,700$ صافية.', wide: false },
  { name: 'أحمد م.', period: '6 أشهر في البرنامج', avatarBg: 'bg-purple-500/20', avatarText: 'text-purple-400', result: '+12,000$ / شهر', text: 'بدأت بـ 500$، الآن أدير محفظة بـ 40,000$. معدل النجاح ارتفع إلى 71%. البرنامج يغير طريقة التفكير — تتداول بمنهجية بلا مشاعر.', wide: false },
  { name: 'خالد ع.', period: '4 أشهر في البرنامج', avatarBg: 'bg-orange-500/20', avatarText: 'text-orange-400', result: '+9,100$ / شهر', text: 'كنت متشككاً في البداية، لكن النتائج أقنعتني. إشارات واضحة ودعم مستمر 24/7. تركت وظيفتي الأساسية في الشهر الثالث.', wide: true },
  { name: 'نورة س.', period: '3 أشهر في البرنامج', avatarBg: 'bg-pink-500/20', avatarText: 'text-pink-400', result: '+6,300$ / شهر', text: 'أتداول بدوام جزئي بالتوازي مع عملي. الشهر الماضي ربحت 6,300$ — أكثر من راتبي. الإشارات واضحة مع مستويات محددة.', wide: true },
  { name: 'سارة ل.', period: 'شهر في البرنامج', avatarBg: 'bg-cyan-500/20', avatarText: 'text-cyan-400', result: '+2,200$ في شهر', text: 'الشهر الأول: 2,200$ بإيداع 3,000$. كنت أتوقع أقل بصراحة. الاستراتيجيات بسيطة لكنها تعمل. المرشد يحلل كل صفقة شخصياً.', wide: false },
]

export const PAYMENT_ROWS_RU: PaymentRowData[] = [
  { depth: 2, amount: '42 500', bank: { name: 'Альфа-Банк', logoSrc: '/pay/Alfa-Bank.svg' }, method: 'СБП', time: '3 минуты назад' },
  { depth: 1, amount: '118 000', bank: { name: 'Т-Банк', logoSrc: '/pay/T-Bank_EN_logo.svg' }, method: 'Карта', time: '1 минуту назад' },
  { depth: 0, amount: '87 000', bank: { name: 'Сбербанк', logoSrc: '/pay/SBER.ME.svg' }, method: 'СБП', time: 'только что' },
]

export const PAYMENT_ROWS_AR: PaymentRowData[] = [
  { depth: 2, amount: '42,500', bank: { name: 'ماده', logoSrc: '/pay/Mada_Logo.svg' }, method: 'بطاقة', time: 'منذ 3 دقائق' },
  { depth: 1, amount: '118,000', bank: { name: 'Apple Pay', logoSrc: '/pay/apple-pay-svgrepo-com.svg' }, method: 'دفع رقمي', time: 'منذ دقيقة' },
  { depth: 0, amount: '87,000', bank: { name: 'STC Pay', logoSrc: '/pay/Stc_pay.svg' }, method: 'تحويل', time: 'الآن' },
]
