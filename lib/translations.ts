export type Locale = "en" | "ru";

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
        "CRM & internal tools",
        "Telegram bots & integrations",
        "Websites & web applications",
        "API & backend services",
        "Server setup & DevOps",
        "Mobile & desktop apps",
      ],
    },
    projects: {
      title: "Selected projects",
      allProjects: "All projects",
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
        "CRM и внутренние сервисы",
        "Telegram-боты и интеграции",
        "Сайты и веб-приложения",
        "API и бэкенд",
        "Серверы и DevOps",
        "Мобильные и десктоп-приложения",
      ],
    },
    projects: {
      title: "Избранные проекты",
      allProjects: "Все проекты",
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
} as const;

export type Translations = (typeof translations)[Locale];
