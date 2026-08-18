/* ============================================================
   Portafolio Ibsen Soto — i18n (ES / EN)
   Diccionario + aplicación de idioma sobre elementos [data-i18n].
   ============================================================ */

const TRANSLATIONS = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.education': 'Formación',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.openMenu': 'Abrir menú',
    'theme.toggle': 'Cambiar modo claro/oscuro',

    'hero.role1': 'Desarrollador de Software · Biólogo',
    'hero.role2': '— Aprendiz Tecnólogo ADSO (SENA)',
    'hero.pitch': `Desarrollador de software con base científica: combino el rigor analítico de la
      Biología con desarrollo web full-stack para construir soluciones confiables,
      bien documentadas y orientadas a resolver problemas reales.`,
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV',
    'hero.ctaContact': 'Contactar',
    'hero.photoAlt': 'Foto profesional de Ibsen Alexis Soto Artunduaga',
    'hero.terminalAria': 'Bloque de tecnologías estilo terminal',
    'hero.terminalOut': 'Ibsen Soto — Fullstack Developer &amp; Biólogo',

    'about.tag': '01 · Perfil',
    'about.title': 'Sobre mí',
    'about.p1': `Soy <strong>biólogo profesional</strong> egresado de la Universidad de la Amazonía
      (23 de agosto de 2023, promedio 4.10/5.0, Tarjeta Profesional de Biólogo) y actualmente
      curso la <strong>Tecnología en Análisis y Desarrollo de Software (ADSO)</strong> del SENA,
      con inicio de etapa productiva el 11 de noviembre de 2026.`,
    'about.p2': `Mi formación científica no es un dato anecdótico: la investigación de campo me entrenó
      en <strong>pensamiento analítico</strong>, diseño metodológico, recolección rigurosa de
      datos y comunicación técnica precisa. Esas mismas competencias las aplico hoy al desarrollo
      de software — desde levantar requisitos con la formalidad de un SRS (IEEE 830) hasta
      documentar arquitecturas y modelar bases de datos con criterio.`,
    'about.p3': `Antes de dar el salto al desarrollo, trabajé como <strong>Gestor de Proyectos en AT Ingenieros
      Consultores S.A.S.</strong>, planificando cronogramas, coordinando equipos interdisciplinarios
      y liderando proyectos de conservación ambiental. Esa experiencia en gestión se traduce
      directamente en habilidades blandas transferibles a la gestión de proyectos de software:
      planeación, comunicación con stakeholders y trabajo bajo objetivos.`,
    'about.h1title': 'Rigor científico',
    'about.h1desc': 'Metodología de investigación aplicada a levantamiento de requisitos y análisis de datos.',
    'about.h2title': 'Documentación seria',
    'about.h2desc': 'SRS bajo IEEE 830, UML, arquitectura de software desde el primer día del proyecto.',
    'about.h3title': 'Gestión de proyectos',
    'about.h3desc': 'Experiencia real coordinando equipos, cronogramas y objetivos multidisciplinares.',
    'about.stat1': 'Proyectos en producción',
    'about.stat2': 'Cobertura de tests en proVida',
    'about.stat3': 'Certificación PHP — SENA',
    'about.stat4': 'Promedio en Biología',

    'skills.tag': '02 · Stack',
    'skills.title': 'Tecnologías y habilidades',
    'skills.cat1': 'Desarrollo web',
    'skills.cat2': 'Bases de datos e infraestructura',
    'skills.cat3': 'Documentación y arquitectura',
    'skills.cat4': 'Programación y datos',
    'skills.cat5': 'Herramientas',
    'skills.cat6': 'Habilidades profesionales',
    'skills.useCases': 'Casos de uso',
    'skills.softwareArch': 'Arquitectura de software',
    'skills.rLang': 'Lenguaje R',
    'skills.dataAnalysis': 'Análisis de datos',
    'skills.dataViz': 'Visualización de información',
    'skills.softProjectMgmt': 'Gestión de proyectos',
    'skills.softTeamwork': 'Trabajo en equipo',
    'skills.softComm': 'Comunicación efectiva',
    'skills.softProblem': 'Resolución de problemas',
    'skills.softAnalytical': 'Pensamiento analítico',
    'skills.softLearning': 'Aprendizaje autónomo',

    'projects.tag': '03 · Trabajo',
    'projects.title': 'Proyectos destacados',
    'projects.subtitle': 'Aplicaciones en producción y proyectos de arquitectura/documentación.',
    'status.live': 'En producción',
    'status.group': 'Proyecto grupal',

    'proj.compraylisto.desc1': `Plataforma de e-commerce en producción, construida en PHP/MySQL con arquitectura
      MVC personalizada. Roles de acceso diferenciados (Visitante, Gestor, Administrador),
      importación/exportación de datos en Excel y envío de correos transaccionales con PHPMailer.`,
    'proj.compraylisto.desc2': `<strong>Auditoría de seguridad propia:</strong> revisión del repositorio detectando
      vulnerabilidades como contraseñas en texto plano, ausencia de protección CSRF y
      endpoints sin autenticación — evidencia de conciencia en buenas prácticas de seguridad.`,
    'proj.compraylisto.role': 'Rol: desarrollador full-stack',

    'proj.provida.desc1': `Simulador de vida digital inspirado en Avida (Michigan State University),
      construido desde cero en Python: organismos digitales autorreplicantes corren
      sobre una máquina virtual propia, compiten por CPU y memoria, mutan al copiarse,
      y resuelven tareas lógicas para obtener más ciclos de ejecución.`,
    'proj.provida.desc2': `<strong>Hallazgo verificado con datos:</strong> partiendo de un empate 50/50, el
      genotipo con ventaja metabólica termina dominando el 100% de una población de 225
      organismos en 100 000 turnos — con un control nulo que confirma que no es azar.
      79 pruebas automatizadas, 100% de cobertura.`,
    'proj.provida.role': 'Rol: diseño y desarrollo end-to-end (VM, motor evolutivo, demo en vivo), con enfoque de biólogo en el diseño experimental',

    'proj.faceco.desc1': `SaaS de facturación electrónica para microempresarios, orientado al cumplimiento
      normativo DIAN (UBL 2.1, CUFE con SHA-384). SRS con 63 requisitos y plan de desarrollo
      de 12 fases, sobre stack PHP/Laravel/MySQL con entorno Docker.`,
    'proj.faceco.role': 'Rol: desarrollador full-stack &amp; documentación técnica',

    'proj.pantallas.title': 'Sistema de gestión — pantallascinetshop.com',
    'proj.pantallas.desc1': `Aplicación web (Laravel + MySQL) para digitalizar la gestión operativa de un negocio
      propio de reventa de cuentas de streaming, en reemplazo de un sistema manual basado
      en hojas de cálculo. Incluye documentación completa: SRS, arquitectura, base de datos
      y diagramas UML.`,
    'proj.pantallas.role': 'Rol: desarrollador full-stack &amp; propietario del producto',

    'proj.juicios.title': 'Sistema de Gestión de Juicios Evaluativos — SENA',
    'proj.juicios.desc1': `Aplicación administrativa que reemplaza los reportes en Excel del SENA por una base
      de datos relacional real. Gestiona el ciclo completo de formación de aprendices —
      matrícula, fichas, resultados de aprendizaje y juicios evaluativos (Aprobado / No
      Aprobado / Por evaluar) — e incluye un dashboard analítico centrado en deserción y
      avance académico.`,
    'proj.juicios.desc2': `Construida en <strong>PHP puro (sin framework)</strong> con acceso a datos vía PDO
      y prepared statements, importación masiva desde exportaciones de Sofía Plus y PDFs
      de proyecto formativo, y autenticación propia con bcrypt y roles (admin/evaluador).
      Desplegada en producción con Docker detrás de Nginx.`,
    'proj.juicios.role': 'Rol: desarrollador full-stack (backend, base de datos, seguridad y despliegue)',

    'proj.speak.desc1': `Plataforma web para práctica de inglés dirigida a aprendices ADSO del SENA. Desarrollo
      full-stack colaborativo: HTML, CSS y JavaScript/TypeScript en el frontend, con Prisma
      para el modelado de la base de datos. Trabajo en equipo con control de versiones en Git/GitHub.`,
    'proj.speak.role': 'Rol: desarrollador frontend &amp; modelado de datos',

    'btn.viewProject': 'Ver proyecto ↗',
    'btn.viewRepo': 'Ver repositorio ↗',
    'btn.viewLive': 'Simulación en vivo ↗',

    'edu.tag': '04 · Formación',
    'edu.title': 'Formación académica',
    'edu.adso.date': 'En formación — etapa productiva desde nov. 2026',
    'edu.adso.title': 'Tecnólogo en Análisis y Desarrollo de Software (ADSO)',
    'edu.adso.desc': 'Formación en desarrollo de software, bases de datos, ingeniería de requisitos y trabajo colaborativo con control de versiones.',
    'edu.bio.date': 'Graduado — 23 de agosto de 2023',
    'edu.bio.title': 'Profesional en Biología',
    'edu.bio.institution': 'Universidad de la Amazonía · Promedio 4.10/5.0 · Tarjeta Profesional de Biólogo (Resolución 13, 1 dic 2023)',
    'edu.bio.desc': `Trabajo de grado: <em>«Peces de Importancia Económica para los Pescadores Locales de
      Puerto Arango, Corregimiento de Venecia, Municipio de Florencia – Caquetá»</em>.
      Investigación de campo con encuestas semiestructuradas y determinación taxonómica de
      16 especies ícticas — base sólida en metodología de investigación y análisis de datos.`,
    'edu.biotec.title': 'Estudios en Biotecnología (1 semestre)',
    'edu.bach.title': 'Bachiller Académico con Profundización en Ciencias Naturales',
    'edu.certHeading': 'Certificaciones y formación complementaria',
    'edu.cert1.title': 'Desarrollo de Aplicaciones Web con PHP',
    'edu.cert1.meta': 'SENA, Centro Tecnológico de la Amazonia · 80 horas · 23 sept. 2025',
    'edu.cert2.title': 'Inglés Básico – Nivel 3',
    'edu.cert2.meta': 'SENA, Centro Tecnológico de la Amazonia · 48 horas · 17 jun. 2026',
    'edu.cert3.title': 'Inglés Básico – Nivel 1',
    'edu.cert3.meta': 'SENA, Centro Tecnológico de la Amazonia · 48 horas · 6 ago. 2026',

    'exp.tag': '05 · Experiencia',
    'exp.title': 'Experiencia laboral',
    'exp.role': 'Gestor de Proyectos',
    'exp.date': '5 ene. 2023 – 15 ene. 2024',
    'exp.desc': `Planificación y ejecución de proyectos de conservación ambiental: elaboración de
      cronogramas, coordinación de equipos interdisciplinarios, gestión ambiental y
      comunicación con múltiples partes interesadas.`,
    'exp.tag1': 'Liderazgo',
    'exp.tag2': 'Gestión de información',
    'exp.tag3': 'Planeación estratégica',
    'exp.tag4': 'Trabajo bajo objetivos',
    'exp.tag5': 'Adaptación',

    'contact.tag': '06 · Contacto',
    'contact.title': 'Hablemos',
    'contact.subtitle': `Disponible para vincularme a etapa productiva / práctica profesional desde
      <strong> noviembre de 2026</strong>, y abierto a oportunidades como desarrollador
      de software o analista programador.`,
    'form.name': 'Nombre',
    'form.email': 'Correo',
    'form.message': 'Mensaje',
    'form.submit': 'Enviar mensaje',
    'form.mailtoNote': 'Se abrirá tu cliente de correo para enviar el mensaje.',
    'form.successNote': '¡Mensaje enviado! Te responderé pronto.',
    'form.errorNote': 'Ocurrió un error al enviar. Intenta escribir directamente a',

    'footer.rights': 'Ibsen Alexis Soto Artunduaga. Todos los derechos reservados.',
    'footer.email': 'Correo',

    'meta.title': 'Ibsen Soto — Desarrollador de Software &amp; Biólogo',
    'meta.description': 'Portafolio profesional de Ibsen Alexis Soto Artunduaga, desarrollador de software (PHP, Laravel, MySQL, PostgreSQL, Docker) y biólogo. Aprendiz Tecnólogo ADSO — SENA.',
    'meta.ogDescription': 'Desarrollador de software con base científica: PHP, Laravel, MySQL, PostgreSQL, Docker. Proyectos en producción y formación como Tecnólogo ADSO (SENA).',
    'meta.twitterDescription': 'Portafolio profesional: proyectos web en producción, stack PHP/Laravel/MySQL/PostgreSQL/Docker.',
    'meta.locale': 'es_CO',
    'meta.htmlLang': 'es-CO',
  },

  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.openMenu': 'Open menu',
    'theme.toggle': 'Toggle light/dark mode',

    'hero.role1': 'Software Developer · Biologist',
    'hero.role2': '— ADSO Technologist Apprentice (SENA)',
    'hero.pitch': `Software developer with a scientific foundation: I combine the analytical rigor of
      Biology with full-stack web development to build reliable, well-documented
      solutions aimed at solving real problems.`,
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',
    'hero.ctaContact': 'Get in touch',
    'hero.photoAlt': 'Professional photo of Ibsen Alexis Soto Artunduaga',
    'hero.terminalAria': 'Terminal-style tech stack block',
    'hero.terminalOut': 'Ibsen Soto — Fullstack Developer &amp; Biologist',

    'about.tag': '01 · Profile',
    'about.title': 'About me',
    'about.p1': `I'm a <strong>professional biologist</strong>, graduated from Universidad de la Amazonía
      (August 23, 2023, GPA 4.10/5.0, Professional Biologist License), and I'm currently
      studying the <strong>Software Analysis and Development Technology (ADSO)</strong> program at SENA,
      with on-the-job training starting November 11, 2026.`,
    'about.p2': `My scientific background isn't just a footnote: field research trained me
      in <strong>analytical thinking</strong>, methodological design, rigorous data
      collection, and precise technical communication. I apply those same skills to software
      development today — from gathering requirements with the formality of an SRS (IEEE 830)
      to documenting architectures and modeling databases with judgment.`,
    'about.p3': `Before making the leap into development, I worked as a <strong>Project Manager at AT Ingenieros
      Consultores S.A.S.</strong>, planning schedules, coordinating interdisciplinary teams,
      and leading environmental conservation projects. That management experience translates
      directly into soft skills transferable to software project management:
      planning, stakeholder communication, and goal-driven work.`,
    'about.h1title': 'Scientific rigor',
    'about.h1desc': 'Research methodology applied to requirements gathering and data analysis.',
    'about.h2title': 'Thorough documentation',
    'about.h2desc': 'SRS under IEEE 830, UML, and software architecture from day one of the project.',
    'about.h3title': 'Project management',
    'about.h3desc': 'Real experience coordinating teams, schedules, and multidisciplinary goals.',
    'about.stat1': 'Production projects',
    'about.stat2': 'Test coverage in proVida',
    'about.stat3': 'PHP certification — SENA',
    'about.stat4': 'Biology GPA',

    'skills.tag': '02 · Stack',
    'skills.title': 'Technologies & skills',
    'skills.cat1': 'Web development',
    'skills.cat2': 'Databases & infrastructure',
    'skills.cat3': 'Documentation & architecture',
    'skills.cat4': 'Programming & data',
    'skills.cat5': 'Tools',
    'skills.cat6': 'Professional skills',
    'skills.useCases': 'Use cases',
    'skills.softwareArch': 'Software architecture',
    'skills.rLang': 'R language',
    'skills.dataAnalysis': 'Data analysis',
    'skills.dataViz': 'Information visualization',
    'skills.softProjectMgmt': 'Project management',
    'skills.softTeamwork': 'Teamwork',
    'skills.softComm': 'Effective communication',
    'skills.softProblem': 'Problem solving',
    'skills.softAnalytical': 'Analytical thinking',
    'skills.softLearning': 'Self-directed learning',

    'projects.tag': '03 · Work',
    'projects.title': 'Featured projects',
    'projects.subtitle': 'Production applications and architecture/documentation projects.',
    'status.live': 'In production',
    'status.group': 'Group project',

    'proj.compraylisto.desc1': `E-commerce platform in production, built with PHP/MySQL on a custom
      MVC architecture. Differentiated access roles (Visitor, Manager, Admin),
      Excel data import/export, and transactional emails with PHPMailer.`,
    'proj.compraylisto.desc2': `<strong>Self-driven security audit:</strong> reviewed the repository and flagged
      vulnerabilities such as plaintext passwords, missing CSRF protection, and
      unauthenticated endpoints — evidence of security best-practice awareness.`,
    'proj.compraylisto.role': 'Role: full-stack developer',

    'proj.provida.desc1': `Digital-life simulator inspired by Avida (Michigan State University),
      built from scratch in Python: self-replicating digital organisms run on a custom
      virtual machine, compete for CPU and memory, mutate as they copy themselves,
      and solve logic tasks to earn extra execution cycles.`,
    'proj.provida.desc2': `<strong>Data-verified finding:</strong> starting from a 50/50 tie, the
      genotype with a metabolic edge ends up dominating 100% of a 225-organism population
      within 100,000 updates — with a null control confirming it isn't chance.
      79 automated tests, 100% coverage.`,
    'proj.provida.role': "Role: end-to-end design & development (VM, evolution engine, live demo), with a biologist's approach to experimental design",

    'proj.faceco.desc1': `Electronic invoicing SaaS for microentrepreneurs, built for DIAN regulatory
      compliance (UBL 2.1, CUFE with SHA-384). SRS with 63 requirements and a 12-phase
      development plan, on a PHP/Laravel/MySQL stack with a Docker setup.`,
    'proj.faceco.role': 'Role: full-stack developer &amp; technical documentation',

    'proj.pantallas.title': 'Management system — pantallascinetshop.com',
    'proj.pantallas.desc1': `Web application (Laravel + MySQL) to digitize the operations of my own
      streaming-account resale business, replacing a manual spreadsheet-based
      system. Includes full documentation: SRS, architecture, database,
      and UML diagrams.`,
    'proj.pantallas.role': 'Role: full-stack developer &amp; product owner',

    'proj.juicios.title': 'Evaluation Records Management System — SENA',
    'proj.juicios.desc1': `Administrative application that replaces SENA's Excel-based reports with a
      real relational database. Manages the full apprentice training lifecycle —
      enrollment, cohorts, learning outcomes, and evaluation judgments (Passed / Not
      Passed / Pending) — and includes an analytics dashboard focused on dropout
      and academic progress.`,
    'proj.juicios.desc2': `Built in <strong>pure PHP (no framework)</strong> with data access via PDO
      and prepared statements, bulk import from Sofía Plus exports and training-plan
      PDFs, and custom authentication with bcrypt and roles (admin/evaluator).
      Deployed to production with Docker behind Nginx.`,
    'proj.juicios.role': 'Role: full-stack developer (backend, database, security & deployment)',

    'proj.speak.desc1': `Web platform for English practice aimed at SENA ADSO apprentices. Collaborative
      full-stack development: HTML, CSS, and JavaScript/TypeScript on the frontend, with
      Prisma for database modeling. Teamwork with Git/GitHub version control.`,
    'proj.speak.role': 'Role: frontend developer &amp; data modeling',

    'btn.viewProject': 'View project ↗',
    'btn.viewRepo': 'View repository ↗',
    'btn.viewLive': 'Live simulation ↗',

    'edu.tag': '04 · Education',
    'edu.title': 'Academic background',
    'edu.adso.date': 'In progress — on-the-job training starts Nov. 2026',
    'edu.adso.title': 'Software Analysis & Development Technologist (ADSO)',
    'edu.adso.desc': 'Training in software development, databases, requirements engineering, and collaborative work with version control.',
    'edu.bio.date': 'Graduated — August 23, 2023',
    'edu.bio.title': 'Professional Degree in Biology',
    'edu.bio.institution': 'Universidad de la Amazonía · GPA 4.10/5.0 · Professional Biologist License (Resolution 13, Dec 1, 2023)',
    'edu.bio.desc': `Undergraduate thesis: <em>«Peces de Importancia Económica para los Pescadores Locales de
      Puerto Arango, Corregimiento de Venecia, Municipio de Florencia – Caquetá»</em>
      (Fish of Economic Importance for Local Fishermen of Puerto Arango, Florencia – Caquetá).
      Field research with semi-structured surveys and taxonomic identification of
      16 fish species — a solid foundation in research methodology and data analysis.`,
    'edu.biotec.title': 'Biotechnology studies (1 semester)',
    'edu.bach.title': 'Academic High School Diploma, Natural Sciences Emphasis',
    'edu.certHeading': 'Certifications & continuing education',
    'edu.cert1.title': 'Web Application Development with PHP',
    'edu.cert1.meta': 'SENA, Centro Tecnológico de la Amazonia · 80 hours · Sept. 23, 2025',
    'edu.cert2.title': 'Basic English – Level 3',
    'edu.cert2.meta': 'SENA, Centro Tecnológico de la Amazonia · 48 hours · June 17, 2026',
    'edu.cert3.title': 'Basic English – Level 1',
    'edu.cert3.meta': 'SENA, Centro Tecnológico de la Amazonia · 48 hours · Aug. 6, 2026',

    'exp.tag': '05 · Experience',
    'exp.title': 'Work experience',
    'exp.role': 'Project Manager',
    'exp.date': 'Jan. 5, 2023 – Jan. 15, 2024',
    'exp.desc': `Planning and execution of environmental conservation projects: building
      schedules, coordinating interdisciplinary teams, environmental management, and
      communication with multiple stakeholders.`,
    'exp.tag1': 'Leadership',
    'exp.tag2': 'Information management',
    'exp.tag3': 'Strategic planning',
    'exp.tag4': 'Goal-driven work',
    'exp.tag5': 'Adaptability',

    'contact.tag': '06 · Contact',
    'contact.title': "Let's talk",
    'contact.subtitle': `Available for on-the-job training / professional practice starting
      <strong> November 2026</strong>, and open to opportunities as a software
      developer or programmer analyst.`,
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.submit': 'Send message',
    'form.mailtoNote': 'Your email client will open to send the message.',
    'form.successNote': 'Message sent! I\'ll get back to you soon.',
    'form.errorNote': 'Something went wrong sending it. Try writing directly to',

    'footer.rights': 'Ibsen Alexis Soto Artunduaga. All rights reserved.',
    'footer.email': 'Email',

    'meta.title': 'Ibsen Soto — Software Developer &amp; Biologist',
    'meta.description': 'Professional portfolio of Ibsen Alexis Soto Artunduaga, software developer (PHP, Laravel, MySQL, PostgreSQL, Docker) and biologist. ADSO Technologist Apprentice — SENA.',
    'meta.ogDescription': 'Software developer with a scientific foundation: PHP, Laravel, MySQL, PostgreSQL, Docker. Production projects and ADSO Technologist training (SENA).',
    'meta.twitterDescription': 'Professional portfolio: production web projects, PHP/Laravel/MySQL/PostgreSQL/Docker stack.',
    'meta.locale': 'en_US',
    'meta.htmlLang': 'en',
  },
};

const LANG_STORAGE_KEY = 'lang';

function getCurrentLang() {
  return document.documentElement.getAttribute('data-lang') || 'es';
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = dict['meta.htmlLang'];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
  });

  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.innerHTML = dict['meta.title'];
    document.title = pageTitle.textContent;
  }

  const setMeta = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('content', dict[key]);
  };
  setMeta('meta-description', 'meta.description');
  setMeta('og-title', 'meta.title');
  setMeta('og-description', 'meta.ogDescription');
  setMeta('og-locale', 'meta.locale');
  setMeta('twitter-title', 'meta.title');
  setMeta('twitter-description', 'meta.twitterDescription');

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = lang === 'es' ? 'ES' : 'EN';

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function initLanguageToggle() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  const initialLang = stored === 'en' ? 'en' : 'es';
  applyLanguage(initialLang);

  const langBtn = document.getElementById('lang-toggle');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    applyLanguage(getCurrentLang() === 'es' ? 'en' : 'es');
  });
}

document.addEventListener('DOMContentLoaded', initLanguageToggle);
