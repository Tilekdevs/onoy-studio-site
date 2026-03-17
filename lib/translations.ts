export type Locale = "en" | "ru" | "ky";

export const translations = {
  en: {
    nav: {
      about: "About us",
      projects: "Projects",
      faq: "FAQ",
      pricing: "Pricing",
      language: "Language",
      contact: "Contact us",
    },
    hero: {
      title: "Onoy",
      subtitle: "Full-cycle development. From idea to production.",
    },
    about: {
      title: "About us",
      intro:
        "We are a development studio that builds digital products for businesses and startups. We take on the full cycle: from concept and design to deployment and support.",
      body: "Our team combines experience in enterprise systems and fast product development. We work with CRM, automation, Telegram bots, web and mobile applications, and infrastructure. We prefer fixed deadlines and clear budgets so you can plan ahead.",
      listTitle: "Why work with us",
      list: [
        "Fixed price and timeline for each stage",
        "Direct communication with developers",
        "Modern stack and documented code",
        "Support after launch",
      ],
    },
    projectTypes: {
      title: "What we build",
      items: [
        {
          title: "CRM & internal tools",
          description:
            "Custom CRM systems, admin panels and internal tools tailored to your workflows.",
        },
        {
          title: "Telegram bots & integrations",
          description:
            "Bots for automation, notifications, and integrations with external services.",
        },
        {
          title: "Websites & web applications",
          description:
            "Landing pages, corporate sites, and full-featured web applications.",
        },
        {
          title: "API & backend services",
          description:
            "REST and GraphQL APIs, microservices, and scalable backend systems.",
        },
        {
          title: "Server setup & DevOps",
          description:
            "Server provisioning, CI/CD pipelines, Docker, and cloud infrastructure.",
        },
        {
          title: "Mobile & desktop apps",
          description:
            "Cross-platform mobile and desktop applications for all major platforms.",
        },
      ],
    },
    projects: {
      title: "Selected projects",
      allProjects: "All projects",
      back: "← Back",
      modalDesc: "Who needs this: companies that want to automate processes and cut manual work. Describe your task — we'll tell you if this approach fits.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "How long does a project take?",
          a: "Depends on scope. A landing page or bot — 1–2 weeks. A CRM or web app — 4–10 weeks. We give a fixed timeline before we start.",
        },
        {
          q: "How is the price formed?",
          a: "We quote per project, not by the hour. After a brief you get a fixed price with no surprises. Payment is split into milestones.",
        },
        {
          q: "Do you work with startups and small businesses?",
          a: "Yes. We work with both startups from idea stage and established businesses that need automation or new features.",
        },
        {
          q: "What if I need changes after launch?",
          a: "We provide support after delivery. Bug fixes are free within the warranty period. New features are quoted separately.",
        },
        {
          q: "How do I communicate with the team?",
          a: "You talk directly with developers, no middlemen. We work in Telegram or any messenger you prefer, with regular updates.",
        },
        {
          q: "Do you sign an NDA?",
          a: "Yes. We sign an NDA before starting any work if needed. Your code and business data stay confidential.",
        },
      ],
    },
    pricing: {
      intro: "We quote per project. Describe your task and we will send a fixed price and timeline.",
      cta: "Get a quote",
    },
    specialists: {
      title: "Our specialists",
      items: [
        "Backend developers",
        "Frontend developers",
        "DevOps engineers",
        "UI/UX designers",
        "Project managers",
      ],
    },
    contact: {
      title: "Contact us",
      subtitle: "Describe your task and we will get back to you.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      telegramWhatsapp: "Telegram or WhatsApp",
      telegramWhatsappPlaceholder: "@username or +1234567890",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Thank you for your request. We have received it and will get back to you soon.",
      successDetail: "We will contact you by email or via Telegram/WhatsApp if you left your contact.",
      error: "Something went wrong. Try again or write to us directly.",
      cancel: "Cancel",
    },
    footer: "© 2026 Onoy apps",
  },
  ru: {
    nav: {
      about: "О нас",
      projects: "Проекты",
      faq: "FAQ",
      pricing: "Цены",
      language: "Язык",
      contact: "Связаться с нами",
    },
    about: {
      title: "О нас",
      intro:
        "Мы — студия разработки, которая создаёт цифровые продукты для бизнеса и стартапов. Берём полный цикл: от идеи и дизайна до запуска и поддержки.",
      body: "В команде совмещаем опыт в корпоративных системах и быстрой разработке продуктов. Делаем CRM, автоматизацию, Telegram-боты, веб и мобильные приложения, инфраструктуру. Работаем с фиксированными сроками и бюджетом, чтобы вы могли планировать.",
      listTitle: "Почему мы",
      list: [
        "Фикс по цене и срокам на каждом этапе",
        "Прямое общение с разработчиками",
        "Современный стек и документированный код",
        "Поддержка после запуска",
      ],
    },
    hero: {
      title: "Onoy",
      subtitle: "Разработка под ключ. От идеи до продакшена.",
    },
    projectTypes: {
      title: "Что мы делаем",
      items: [
        {
          title: "CRM и внутренние сервисы",
          description:
            "CRM-системы, административные панели и внутренние инструменты под ваши процессы.",
        },
        {
          title: "Telegram-боты и интеграции",
          description:
            "Боты для автоматизации, уведомлений и интеграций со сторонними сервисами.",
        },
        {
          title: "Сайты и веб-приложения",
          description:
            "Лендинги, корпоративные сайты и полноценные веб-приложения.",
        },
        {
          title: "API и бэкенд",
          description:
            "REST и GraphQL API, микросервисы и масштабируемые бэкенд-системы.",
        },
        {
          title: "Серверы и DevOps",
          description:
            "Настройка серверов, CI/CD-пайплайны, Docker и облачная инфраструктура.",
        },
        {
          title: "Мобильные и десктоп-приложения",
          description:
            "Кроссплатформенные мобильные и десктоп-приложения для всех платформ.",
        },
      ],
    },
    projects: {
      title: "Избранные проекты",
      allProjects: "Все проекты",
      back: "← Назад",
      modalDesc: "Кому это нужно: компаниям, которые хотят автоматизировать процессы и убрать ручную рутину. Опишите свою задачу — мы подскажем, подходит ли вам такой подход.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Сколько времени займёт проект?",
          a: "Зависит от объёма. Лендинг или бот — 1–2 недели. CRM или веб-приложение — 4–10 недель. Перед стартом даём фиксированный срок.",
        },
        {
          q: "Как формируется цена?",
          a: "Считаем по проекту, не по часам. После брифа получаете фиксированную цену без сюрпризов. Оплата разбивается на этапы.",
        },
        {
          q: "Работаете ли со стартапами и малым бизнесом?",
          a: "Да. Работаем как со стартапами на стадии идеи, так и с компаниями, которым нужна автоматизация или новые функции.",
        },
        {
          q: "Что если нужны правки после запуска?",
          a: "После сдачи предоставляем поддержку. Исправление багов — бесплатно в гарантийный период. Новые функции оговариваются отдельно.",
        },
        {
          q: "Как проходит общение с командой?",
          a: "Напрямую с разработчиками, без посредников. Работаем в Telegram или любом удобном мессенджере, с регулярными обновлениями.",
        },
        {
          q: "Подписываете ли NDA?",
          a: "Да. Подписываем NDA перед началом работ по запросу. Ваш код и данные остаются конфиденциальными.",
        },
      ],
    },
    pricing: {
      intro: "Считаем стоимость под проект. Опишите задачу — пришлём фикс и сроки.",
      cta: "Получить расчёт",
    },
    specialists: {
      title: "Наши специалисты",
      items: [
        "Бэкенд-разработчики",
        "Фронтенд-разработчики",
        "DevOps-инженеры",
        "UI/UX дизайнеры",
        "Менеджеры проектов",
      ],
    },
    contact: {
      title: "Связаться с нами",
      subtitle: "Опишите задачу — мы свяжемся с вами.",
      name: "Имя",
      email: "Email",
      phone: "Телефон",
      telegramWhatsapp: "Telegram или WhatsApp",
      telegramWhatsappPlaceholder: "@username или +79991234567",
      message: "Сообщение",
      send: "Отправить",
      sending: "Отправка…",
      success: "Спасибо, что оставили заявку. Мы получили её и свяжемся с вами в ближайшее время.",
      successDetail: "Мы напишем на почту или в Telegram/WhatsApp, если вы указали контакт.",
      error: "Ошибка отправки. Попробуйте ещё раз или напишите нам напрямую.",
      cancel: "Закрыть",
    },
    footer: "© 2026 Onoy apps",
  },
  ky: {
    nav: {
      about: "Биз жөнүндө",
      projects: "Долбоорлор",
      faq: "FAQ",
      pricing: "Баа",
      language: "Тил",
      contact: "Байланыш",
    },
    hero: {
      title: "Onoy",
      subtitle: "Толук циклдүү иштеп чыгуу. Идеядан продакшенге чейин.",
    },
    about: {
      title: "Биз жөнүндө",
      intro:
        "Биз — бизнес жана стартаптар үчүн санарип продукттарды түзгөн иштеп чыгуу студиясыбыз. Толук цикл: идея, дизайн, иштеп чыгуу, ишке киргизүү жана колдоо.",
      body: "Командада корпоративдик системалардагы тажрыйбаны жана тез продукт иштеп чыгууну айкалыштырабыз. CRM, автоматташтыруу, Telegram-боттор, веб жана мобилдик колдонмолор, инфраструктура. Так мөөнөт жана бюджет менен иштейбиз — пландоо оңой болот.",
      listTitle: "Эмне үчүн биз",
      list: [
        "Ар бир этапта баа жана мөөнөт фикстелет",
        "Иштеп чыгуучулар менен түз байланыш",
        "Заманбап стек жана документтелген код",
        "Ишке киргенден кийин колдоо",
      ],
    },
    projectTypes: {
      title: "Эмне курабыз",
      items: [
        {
          title: "CRM жана ички инструменттер",
          description:
            "Процессиңизге ылайык CRM-системалар, админ панелдер жана ички инструменттер.",
        },
        {
          title: "Telegram-боттор жана интеграциялар",
          description:
            "Автоматташтыруу, билдирүү жана тышкы сервистер менен интеграция үчүн боттор.",
        },
        {
          title: "Сайттар жана веб-колдонмолор",
          description:
            "Лендингдер, корпоративдик сайттар жана толук функционалдуу веб-колдонмолор.",
        },
        {
          title: "API жана бэкенд",
          description:
            "REST/GraphQL API, микросервис жана масштабдалуучу бэкенд системалар.",
        },
        {
          title: "Сервер жана DevOps",
          description:
            "Сервер даярдоо, CI/CD, Docker жана булут инфраструктурасы.",
        },
        {
          title: "Мобилдик жана десктоп колдонмолор",
          description:
            "Бардык платформалар үчүн кроссплатформалык мобилдик/десктоп колдонмолор.",
        },
      ],
    },
    projects: {
      title: "Тандалган долбоорлор",
      allProjects: "Бардык долбоорлор",
      back: "← Артка",
      modalDesc:
        "Кимге керек: процесстерди автоматташтырып, кол эмгегин азайткысы келген компанияларга. Тапшырмаңызды сүрөттөп бериңиз — ылайыктуубу айтып беребиз.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Долбоор канча убакыт алат?",
          a: "Көлөмүнө жараша. Лендинг же бот — 1–2 жума. CRM же веб-колдонмо — 4–10 жума. Баштоодо так мөөнөт беребиз.",
        },
        {
          q: "Баасы кантип эсептелет?",
          a: "Саат эмес, долбоор боюнча эсептейбиз. Кыска брифтен кийин фикс баа аласыз. Төлөм этаптарга бөлүнөт.",
        },
        {
          q: "Стартаптар менен иштейсиздерби?",
          a: "Ооба. Идея стадиясынан баштап, даяр бизнеске чейин иштейбиз.",
        },
        {
          q: "Ишке киргенден кийин өзгөртүү керек болсо?",
          a: "Колдоо көрсөтөбүз. Кепилдик мөөнөтүндө баг-фикистер акысыз. Жаңы функциялар өзүнчө бааланат.",
        },
        {
          q: "Команда менен байланыш кандай?",
          a: "Ортомчу жок — иштеп чыгуучулар менен түз сүйлөшөсүз. Telegram же ыңгайлуу мессенжерде иштейбиз.",
        },
        {
          q: "NDA кол коёсуздарбы?",
          a: "Ооба. Сурам боюнча иш баштаар алдында NDAга кол коёбуз.",
        },
      ],
    },
    pricing: {
      intro:
        "Бааны долбоорго жараша эсептейбиз. Тапшырмаңызды сүрөттөп бериңиз — фикс баа жана мөөнөт жиберебиз.",
      cta: "Эсептөө алуу",
    },
    specialists: {
      title: "Адистер",
      items: [
        "Backend иштеп чыгуучулар",
        "Frontend иштеп чыгуучулар",
        "DevOps инженерлер",
        "UI/UX дизайнерлер",
        "Долбоор менеджерлер",
      ],
    },
    contact: {
      title: "Байланыш",
      subtitle: "Тапшырмаңызды сүрөттөп бериңиз — биз жооп беребиз.",
      name: "Аты",
      email: "Email",
      phone: "Телефон",
      telegramWhatsapp: "Telegram же WhatsApp",
      telegramWhatsappPlaceholder: "@username же +996...",
      message: "Билдирүү",
      send: "Жөнөтүү",
      sending: "Жөнөтүлүүдө…",
      success: "Рахмат! Сурооңузду алдык жана жакын арада байланышабыз.",
      successDetail:
        "Email аркылуу же Telegram/WhatsApp'тан (калтырсаңыз) жазабыз.",
      error: "Ката кетти. Дагы аракет кылыңыз же түз жазыңыз.",
      cancel: "Жабуу",
    },
    footer: "© 2026 Onoy apps",
  },
} as const;

export type Translations = (typeof translations)[Locale];
