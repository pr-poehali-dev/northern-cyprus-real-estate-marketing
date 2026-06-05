import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/532c82be-16bd-4878-ab03-bbb048fc4910/files/85ce58e2-bc80-4821-8436-2aee169f80b0.jpg';
const APARTMENT_IMG = 'https://cdn.poehali.dev/projects/532c82be-16bd-4878-ab03-bbb048fc4910/files/0ee2b244-e093-4610-9b92-835f98bb74e1.jpg';
const FAMILY_IMG = 'https://cdn.poehali.dev/projects/532c82be-16bd-4878-ab03-bbb048fc4910/files/127072f3-5645-4baa-9c46-7d81e129643c.jpg';

const QUIZ_STEPS = [
  {
    id: 1,
    question: 'Какова ваша главная цель?',
    subtitle: 'Это поможет нам подобрать идеальный вариант',
    options: [
      { icon: '🏠', label: 'Постоянное жильё', desc: 'Хочу переехать и жить' },
      { icon: '💰', label: 'Инвестиция', desc: 'Хочу сдавать и зарабатывать' },
      { icon: '🛂', label: 'ВНЖ / Паспорт', desc: 'Нужен вид на жительство' },
      { icon: '🌴', label: 'Сезонное жильё', desc: 'Приезжать на зиму/лето' },
    ],
  },
  {
    id: 2,
    question: 'С кем вы планируете переезд?',
    subtitle: 'Важно для подбора района и размера жилья',
    options: [
      { icon: '👤', label: 'Один / Одна', desc: 'Переезжаю самостоятельно' },
      { icon: '👫', label: 'Пара', desc: 'Вдвоём с партнёром' },
      { icon: '👨‍👩‍👧', label: 'Семья с детьми', desc: 'Нужна инфраструктура для детей' },
      { icon: '🏢', label: 'Бизнес-переезд', desc: 'Переезжаю с командой' },
    ],
  },
  {
    id: 3,
    question: 'Какой бюджет рассматриваете?',
    subtitle: 'Мы работаем с объектами от $75,000',
    options: [
      { icon: '💵', label: 'от $75 000', desc: 'Студия или апартамент' },
      { icon: '💶', label: '$100 000 – 200 000', desc: 'Квартира 1–2 комнаты' },
      { icon: '💷', label: '$200 000 – 400 000', desc: 'Просторная квартира или таунхаус' },
      { icon: '💎', label: 'от $400 000', desc: 'Вилла или премиальный объект' },
    ],
  },
  {
    id: 4,
    question: 'Когда планируете переезд?',
    subtitle: 'Это повлияет на скорость подготовки документов',
    options: [
      { icon: '⚡', label: 'Как можно скорее', desc: 'В течение 1–3 месяцев' },
      { icon: '📅', label: 'До конца года', desc: 'Есть 3–6 месяцев' },
      { icon: '🗓️', label: 'В следующем году', desc: 'Пока изучаю варианты' },
      { icon: '🤔', label: 'Ещё не решил(а)', desc: 'Хочу получить информацию' },
    ],
  },
  {
    id: 5,
    question: 'Что для вас важнее всего?',
    subtitle: 'Выберите главный приоритет',
    options: [
      { icon: '🏖️', label: 'Близость к морю', desc: 'Хочу жить у воды' },
      { icon: '🏫', label: 'Школа и садик', desc: 'Инфраструктура для детей' },
      { icon: '📈', label: 'Доходность', desc: 'Высокий % от аренды' },
      { icon: '🔒', label: 'Безопасность сделки', desc: 'Юридическая чистота' },
    ],
  },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.scroll-reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'rgba(10,22,40,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '12px 0',
      } : { padding: '20px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8cc7a)' }}>
            <span style={{ color: '#0a1628', fontSize: 12, fontWeight: 800 }}>CH</span>
          </div>
          <span className="font-cormorant text-xl font-semibold" style={{ color: '#e8cc7a' }}>
            CyprusHome
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Услуги', 'Объекты', 'О нас', 'Контакты'].map((item) => (
            <a key={item} href="#" className="font-golos text-sm transition-colors" style={{ color: 'rgba(240,230,200,0.65)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e8cc7a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,230,200,0.65)')}
            >
              {item}
            </a>
          ))}
        </div>
        <button className="btn-gold px-5 py-2.5 rounded-full font-golos text-sm font-bold">
          Консультация
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{
      background: 'radial-gradient(ellipse at 20% 50%, rgba(15,138,106,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(74,191,191,0.14) 0%, transparent 50%), linear-gradient(180deg, #0a1628 0%, #0d2137 100%)'
    }}>
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Северный Кипр" className="w-full h-full object-cover" style={{ opacity: 0.28 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,22,40,0.95) 30%, rgba(10,22,40,0.5) 70%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,22,40,1) 0%, transparent 40%)' }} />
      </div>

      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full animate-float" style={{ background: 'rgba(74,191,191,0.07)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full animate-float" style={{ background: 'rgba(201,168,76,0.07)', filter: 'blur(50px)', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-up" style={{ opacity: 0, animationDelay: '0.1s', background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(74,191,191,0.25)' }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#4abfbf' }} />
            <span className="font-golos text-sm" style={{ color: '#7dd9d9' }}>Агентство полного цикла · Северный Кипр</span>
          </div>

          <h1 className="font-cormorant font-light leading-tight mb-6 animate-fade-up" style={{ fontSize: 'clamp(42px,7vw,78px)', opacity: 0, animationDelay: '0.2s' }}>
            Переезд на<br />
            <span className="text-gradient-gold font-semibold">Северный Кипр</span><br />
            под ключ
          </h1>

          <p className="font-golos text-lg leading-relaxed mb-10 animate-fade-up" style={{ color: 'rgba(240,230,200,0.6)', maxWidth: 500, opacity: 0, animationDelay: '0.35s' }}>
            От перелёта до садика для ребёнка — берём на себя всё. Юридическая гарантия, ВНЖ за 4 недели, проверенные застройщики без посредников.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up" style={{ opacity: 0, animationDelay: '0.5s' }}>
            <button
              className="btn-gold px-8 py-4 rounded-2xl font-golos text-base font-bold flex items-center justify-center gap-3"
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calculator" size={20} />
              Рассчитать бюджет переезда
            </button>
            <button
              className="btn-outline-gold px-8 py-4 rounded-2xl font-golos text-base font-semibold flex items-center justify-center gap-3"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Play" size={18} />
              Смотреть объекты
            </button>
          </div>

          <div className="flex gap-10 animate-fade-up" style={{ opacity: 0, animationDelay: '0.65s' }}>
            {[
              { val: '340+', label: 'Семей переехало' },
              { val: '4 нед', label: 'Срок ВНЖ' },
              { val: '100%', label: 'Юрид. гарантия' },
            ].map((s) => (
              <div key={s.val}>
                <div className="font-cormorant text-3xl font-semibold text-gradient-gold">{s.val}</div>
                <div className="font-golos text-xs mt-1" style={{ color: 'rgba(240,230,200,0.45)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ opacity: 0, animationDelay: '1.2s' }}>
        <span className="font-golos text-xs tracking-widest uppercase" style={{ color: 'rgba(240,230,200,0.3)' }}>Листайте вниз</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-28" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0b1b30 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <span className="font-golos text-sm tracking-widest uppercase" style={{ color: '#4abfbf' }}>Почему CyprusHome</span>
          <h2 className="font-cormorant text-5xl font-light mt-3 mb-4">
            Мы не риэлторы.<br />
            <span className="text-gradient-gold">Мы ваши адвокаты</span>
          </h2>
          <p className="font-golos max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(240,230,200,0.5)' }}>
            Пока другие продают квадратные метры, мы продаём спокойствие. Никакого языкового барьера, никаких сюрпризов после подписания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: 'Shield', title: 'Без посредников', desc: 'Работаем напрямую с застройщиками ТРСК. Фиксируем цену в контракте до вашего прилёта — не дадим поднять её в аэропорту.', color: 'rgba(15,138,106,0.15)', accent: '#0f8a6a', delay: '0s' },
            { icon: 'FileCheck', title: 'Юридическая гарантия', desc: 'ВНЖ через земельный кадастр. Помогаем с ипотекой в местном банке под 5–7% годовых. Все документы на русском языке.', color: 'rgba(201,168,76,0.12)', accent: '#c9a84c', delay: '0.12s' },
            { icon: 'Heart', title: 'Адаптация 360°', desc: 'Встретим в аэропорту Эрджан, откроем счёт, запишем ребёнка в садик, подключим воду, свет и интернет. Вы просто заедете.', color: 'rgba(74,191,191,0.12)', accent: '#4abfbf', delay: '0.24s' },
          ].map((b) => (
            <div
              key={b.title}
              className="scroll-reveal stat-card rounded-3xl p-8 group hover:scale-[1.02] transition-all duration-300"
              style={{ background: 'rgba(10,22,40,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(201,168,76,0.15)', transitionDelay: b.delay }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: b.color, border: `1px solid ${b.accent}30` }}>
                <Icon name={b.icon} size={26} style={{ color: b.accent }} />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold mb-3">{b.title}</h3>
              <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(240,230,200,0.55)' }}>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <span className="font-golos text-sm tracking-widest uppercase" style={{ color: '#4abfbf' }}>4 шага</span>
            <h2 className="font-cormorant text-4xl font-light mt-3 mb-10">
              От звонка до<br />
              <span className="text-gradient-gold">ключей в руках</span>
            </h2>
            <div className="space-y-8">
              {[
                { n: '01', t: 'Консультация', d: 'Бесплатный разбор вашей ситуации, подбор района и типа жилья по бюджету' },
                { n: '02', t: 'Ознакомительный тур', d: 'Организуем перелёт и 3 дня просмотров — покажем лучшие объекты' },
                { n: '03', t: 'Сделка и ВНЖ', d: 'Подписание контракта, регистрация в кадастре, оформление вида на жительство' },
                { n: '04', t: 'Заселение', d: 'Встреча, открытие счёта, подключение услуг, устройство детей — под ключ' },
              ].map((step, i) => (
                <div key={step.n} className="flex gap-6 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:border-opacity-80"
                      style={{ background: 'rgba(13,33,55,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(201,168,76,0.35)' }}>
                      <span className="font-cormorant text-lg font-semibold" style={{ color: '#c9a84c' }}>{step.n}</span>
                    </div>
                    {i < 3 && <div className="absolute left-1/2 top-full w-px h-10 -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)' }} />}
                  </div>
                  <div className="pt-2">
                    <div className="font-golos font-semibold mb-1" style={{ color: 'rgba(240,230,200,0.9)' }}>{step.t}</div>
                    <div className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.45)' }}>{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative scroll-reveal">
            <img src={FAMILY_IMG} alt="Семья на Северном Кипре" className="w-full rounded-3xl object-cover" style={{ height: 480 }} />
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)' }} />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 flex items-center gap-4"
              style={{ background: 'rgba(10,22,40,0.8)', backdropFilter: 'blur(16px)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                <Icon name="Quote" size={16} style={{ color: '#c9a84c' }} />
              </div>
              <div>
                <p className="font-golos text-sm leading-snug" style={{ color: 'rgba(240,230,200,0.8)' }}>«Переехали с двумя детьми за 6 недель. Всё организовали сами — нам только паспорта понадобились»</p>
                <p className="font-golos text-xs mt-1" style={{ color: '#c9a84c' }}>Анна и Дмитрий, Москва → Кирения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (optIndex: number) => {
    setAnswers((prev) => ({ ...prev, [step]: optIndex }));
    setTimeout(() => {
      if (step < QUIZ_STEPS.length - 1) setStep(step + 1);
      else setSubmitted(true);
    }, 360);
  };

  const current = QUIZ_STEPS[step];

  return (
    <section id="quiz" className="py-28" style={{ background: 'linear-gradient(180deg, #0b1b30 0%, #0a1628 100%)' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
          <span className="font-golos text-sm tracking-widest uppercase" style={{ color: '#4abfbf' }}>Квиз — 2 минуты</span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mt-3 mb-4">
            Подберём <span className="text-gradient-gold">ваш идеальный</span><br />вариант
          </h2>
          <p className="font-golos" style={{ color: 'rgba(240,230,200,0.5)' }}>Ответьте на 5 вопросов — получите персональный расчёт и подборку объектов</p>
        </div>

        <div className="rounded-3xl p-8 md:p-12 scroll-reveal"
          style={{ background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(24px)', border: '1px solid rgba(201,168,76,0.18)' }}>
          {!submitted ? (
            <>
              <div className="flex items-center justify-between mb-3">
                <span className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.45)' }}>Вопрос {step + 1} из {QUIZ_STEPS.length}</span>
                <span className="font-golos text-sm font-semibold" style={{ color: '#c9a84c' }}>{Math.round((step / QUIZ_STEPS.length) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full mb-10" style={{ background: 'rgba(201,168,76,0.15)' }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(step / QUIZ_STEPS.length) * 100}%`, background: 'linear-gradient(90deg, #c9a84c, #e8cc7a)' }} />
              </div>

              <h3 className="font-cormorant text-3xl font-light mb-2">{current.question}</h3>
              <p className="font-golos text-sm mb-8" style={{ color: 'rgba(240,230,200,0.45)' }}>{current.subtitle}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="quiz-option text-left p-5 rounded-2xl transition-all"
                    style={{
                      border: answers[step] === i ? '1px solid #c9a84c' : '1px solid rgba(255,255,255,0.1)',
                      background: answers[step] === i ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)',
                    }}
                  >
                    <div className="text-2xl mb-2">{opt.icon}</div>
                    <div className="font-golos font-semibold text-sm mb-1" style={{ color: 'rgba(240,230,200,0.9)' }}>{opt.label}</div>
                    <div className="font-golos text-xs" style={{ color: 'rgba(240,230,200,0.4)' }}>{opt.desc}</div>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="mt-6 flex items-center gap-2 font-golos text-sm transition-colors" style={{ color: 'rgba(240,230,200,0.35)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240,230,200,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,230,200,0.35)')}
                >
                  <Icon name="ChevronLeft" size={16} />
                  Назад
                </button>
              )}
            </>
          ) : (
            <div className="text-center py-8 animate-scale-in">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(201,168,76,0.12)', border: '2px solid rgba(201,168,76,0.4)' }}>
                <Icon name="CheckCheck" size={36} style={{ color: '#c9a84c' }} />
              </div>
              <h3 className="font-cormorant text-3xl font-semibold mb-3">Отлично! Ваша подборка готова</h3>
              <p className="font-golos text-sm mb-8 max-w-md mx-auto" style={{ color: 'rgba(240,230,200,0.5)' }}>
                На основе ваших ответов мы подобрали 7 объектов и составили персональный план переезда. Оставьте контакт — отправим в WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-6">
                <input type="text" placeholder="Ваш телефон или WhatsApp"
                  className="flex-1 rounded-xl px-4 py-3 font-golos text-sm outline-none"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(240,230,200,0.9)' }}
                />
                <button className="btn-gold px-6 py-3 rounded-xl font-golos text-sm font-bold whitespace-nowrap">
                  Получить
                </button>
              </div>
              <button onClick={() => { setStep(0); setAnswers({}); setSubmitted(false); }}
                className="font-golos text-xs transition-colors" style={{ color: 'rgba(240,230,200,0.3)' }}>
                Пройти заново
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [budget, setBudget] = useState(150);
  const [people, setPeople] = useState(2);
  const [hasKids, setHasKids] = useState(false);
  const [needVnj, setNeedVnj] = useState(true);

  const propertyBudget = budget * 1000;
  const agencyFee = Math.round(propertyBudget * 0.03);
  const legalCost = needVnj ? 2500 : 1200;
  const vnzCost = needVnj ? 800 * people : 0;
  const movingCost = Math.round(people * 800 + (hasKids ? 600 : 0));
  const kidsSetup = hasKids ? 1200 : 0;
  const total = agencyFee + legalCost + vnzCost + movingCost + kidsSetup;
  const fmt = (n: number) => n.toLocaleString('ru-RU');

  return (
    <section id="calculator" className="py-28" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0c1f38 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="font-golos text-sm tracking-widest uppercase" style={{ color: '#4abfbf' }}>Калькулятор</span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mt-3 mb-4">
            Рассчитайте бюджет<br />
            <span className="text-gradient-gold">вашего переезда</span>
          </h2>
          <p className="font-golos" style={{ color: 'rgba(240,230,200,0.5)' }}>Ориентировочная стоимость всех расходов сверх цены недвижимости</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 scroll-reveal">
          <div className="rounded-3xl p-8 md:p-10 space-y-10" style={{ background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(24px)', border: '1px solid rgba(201,168,76,0.18)' }}>
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.65)' }}>Бюджет на недвижимость</label>
                <span className="font-cormorant text-2xl font-semibold text-gradient-gold">${fmt(budget)}к</span>
              </div>
              <input type="range" min={75} max={800} step={25} value={budget}
                onChange={(e) => setBudget(Number(e.target.value))} className="range-slider" />
              <div className="flex justify-between mt-2 font-golos text-xs" style={{ color: 'rgba(240,230,200,0.3)' }}>
                <span>$75k</span><span>$800k+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.65)' }}>Количество человек</label>
                <span className="font-cormorant text-2xl font-semibold text-gradient-gold">{people}</span>
              </div>
              <input type="range" min={1} max={6} step={1} value={people}
                onChange={(e) => setPeople(Number(e.target.value))} className="range-slider" />
              <div className="flex justify-between mt-2 font-golos text-xs" style={{ color: 'rgba(240,230,200,0.3)' }}>
                <span>1</span><span>6+</span>
              </div>
            </div>

            <div>
              <label className="font-golos text-sm block mb-4" style={{ color: 'rgba(240,230,200,0.65)' }}>Дополнительно</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'kids', label: '🧒 Дети', checked: hasKids, toggle: () => setHasKids(!hasKids) },
                  { key: 'vnz', label: '🛂 Нужен ВНЖ', checked: needVnj, toggle: () => setNeedVnj(!needVnj) },
                ].map((opt) => (
                  <button key={opt.key} onClick={opt.toggle}
                    className="p-4 rounded-2xl font-golos text-sm font-medium transition-all"
                    style={{
                      border: opt.checked ? '1px solid rgba(201,168,76,0.7)' : '1px solid rgba(255,255,255,0.1)',
                      background: opt.checked ? 'rgba(201,168,76,0.1)' : 'transparent',
                      color: opt.checked ? '#e8cc7a' : 'rgba(240,230,200,0.45)',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 md:p-10 flex flex-col" style={{ background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(24px)', border: '1px solid rgba(201,168,76,0.18)' }}>
            <div className="font-golos text-sm mb-6 tracking-wide uppercase" style={{ color: 'rgba(240,230,200,0.45)' }}>
              Расходы сверх стоимости жилья
            </div>
            <div className="flex-1 space-y-1">
              {[
                { label: 'Сопровождение агентства (3%)', val: agencyFee },
                { label: 'Юридическое оформление', val: legalCost },
                ...(needVnj ? [{ label: `ВНЖ × ${people} чел.`, val: vnzCost }] : []),
                { label: 'Перелёт и первый месяц', val: movingCost },
                ...(hasKids ? [{ label: 'Устройство детей (садик/школа)', val: kidsSetup }] : []),
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.6)' }}>{row.label}</span>
                  <span className="font-golos text-sm font-semibold" style={{ color: 'rgba(240,230,200,0.85)' }}>${fmt(row.val)}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.55)' }}>Итого доп. расходы</span>
                <span className="font-cormorant text-3xl font-semibold text-gradient-gold">${fmt(total)}</span>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-golos text-xs" style={{ color: 'rgba(240,230,200,0.35)' }}>Всего под ключ</span>
                <span className="font-golos text-sm font-semibold" style={{ color: 'rgba(240,230,200,0.65)' }}>${fmt(propertyBudget + total)}</span>
              </div>
              <button className="btn-gold w-full py-4 rounded-2xl font-golos text-base font-bold flex items-center justify-center gap-3">
                <Icon name="MessageCircle" size={20} />
                Получить точный расчёт
              </button>
              <p className="font-golos text-xs text-center mt-3" style={{ color: 'rgba(240,230,200,0.3)' }}>Бесплатная консультация · Без обязательств</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApartmentSection() {
  return (
    <section className="py-28" style={{ background: 'linear-gradient(180deg, #0c1f38 0%, #0a1628 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative scroll-reveal order-2 lg:order-1">
            <img src={APARTMENT_IMG} alt="Интерьер квартиры" className="w-full rounded-3xl object-cover" style={{ height: 460 }} />
            <div className="absolute -bottom-6 -right-4 rounded-2xl p-5 w-52"
              style={{ background: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(201,168,76,0.3)' }}>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="TrendingUp" size={16} style={{ color: '#0f8a6a' }} />
                <span className="font-golos text-xs" style={{ color: 'rgba(240,230,200,0.55)' }}>Прирост капитала</span>
              </div>
              <div className="font-cormorant text-3xl font-semibold text-gradient-gold">+42%</div>
              <div className="font-golos text-xs mt-1" style={{ color: 'rgba(240,230,200,0.4)' }}>За последние 3 года</div>
            </div>
          </div>
          <div className="scroll-reveal order-1 lg:order-2">
            <span className="font-golos text-sm tracking-widest uppercase" style={{ color: '#4abfbf' }}>Инвестиции</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mt-3 mb-6">
              Деньги, которые<br />
              <span className="text-gradient-gold">работают на вас</span>
            </h2>
            <p className="font-golos leading-relaxed mb-8" style={{ color: 'rgba(240,230,200,0.55)' }}>
              Северный Кипр — один из самых быстрорастущих рынков Средиземноморья. Доходность от туристической аренды достигает 8–12% годовых. ВНЖ оформляется при покупке от $75,000.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: 'Percent', val: '8–12%', label: 'Доходность от аренды' },
                { icon: 'Clock', val: '28 дней', label: 'Оформление ВНЖ' },
                { icon: 'DollarSign', val: 'от $75k', label: 'Порог входа' },
                { icon: 'Sun', val: '320', label: 'Солнечных дней в году' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-5 transition-all hover:scale-[1.02]"
                  style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(74,191,191,0.2)' }}>
                  <Icon name={s.icon} size={18} style={{ color: '#c9a84c', marginBottom: 10 }} />
                  <div className="font-cormorant text-2xl font-semibold" style={{ color: 'rgba(240,230,200,0.9)' }}>{s.val}</div>
                  <div className="font-golos text-xs mt-1" style={{ color: 'rgba(240,230,200,0.4)' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <button className="btn-gold px-8 py-4 rounded-2xl font-golos text-base font-bold flex items-center gap-3">
              <Icon name="Building2" size={20} />
              Смотреть объекты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d2137 0%, #0a1628 100%)' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.04 }}>
        <div className="font-cormorant font-bold select-none leading-none" style={{ fontSize: '20vw', color: '#c9a84c' }}>CY</div>
      </div>
      <div className="absolute top-16 left-16 w-72 h-72 rounded-full animate-float" style={{ background: 'rgba(201,168,76,0.06)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-16 right-16 w-56 h-56 rounded-full animate-float" style={{ background: 'rgba(74,191,191,0.08)', filter: 'blur(50px)', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center scroll-reveal">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(13,33,55,0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(74,191,191,0.25)' }}>
          <Icon name="Phone" size={14} style={{ color: '#c9a84c' }} />
          <span className="font-golos text-sm" style={{ color: 'rgba(240,230,200,0.65)' }}>Бесплатная консультация сегодня</span>
        </div>
        <h2 className="font-cormorant font-light mb-6" style={{ fontSize: 'clamp(38px,6vw,64px)' }}>
          Готовы сделать<br />
          <span className="text-gradient-gold">первый шаг?</span>
        </h2>
        <p className="font-golos text-lg leading-relaxed mb-12" style={{ color: 'rgba(240,230,200,0.5)' }}>
          Наш консультант разберёт вашу ситуацию, ответит на вопросы и составит план переезда — бесплатно и без давления.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
          <input type="text" placeholder="Ваш номер или WhatsApp"
            className="flex-1 rounded-2xl px-5 py-4 font-golos text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(240,230,200,0.9)' }}
          />
          <button className="btn-gold px-8 py-4 rounded-2xl font-golos text-base font-bold whitespace-nowrap">
            Перезвоните мне
          </button>
        </div>
        <p className="font-golos text-xs" style={{ color: 'rgba(240,230,200,0.25)' }}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Без спама.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12" style={{ background: '#060f1e', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c9a84c, #e8cc7a)' }}>
            <span style={{ color: '#0a1628', fontSize: 12, fontWeight: 800 }}>CH</span>
          </div>
          <span className="font-cormorant text-xl font-semibold" style={{ color: '#e8cc7a' }}>CyprusHome</span>
        </div>
        <p className="font-golos text-xs text-center" style={{ color: 'rgba(240,230,200,0.25)' }}>
          Агентство недвижимости на Северном Кипре · Работаем с 2018 года
        </p>
        <div className="flex gap-6">
          {['WhatsApp', 'Telegram', 'Instagram'].map((s) => (
            <a key={s} href="#" className="font-golos text-xs transition-colors" style={{ color: 'rgba(240,230,200,0.35)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,230,200,0.35)')}
            >{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen font-golos" style={{ background: '#0a1628' }}>
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <QuizSection />
      <CalculatorSection />
      <ApartmentSection />
      <CTASection />
      <Footer />
    </div>
  );
}
