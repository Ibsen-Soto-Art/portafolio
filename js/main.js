/* ============================================================
   Portafolio Ibsen Soto — JS vanilla
   Secciones: año footer, menú móvil, tema claro/oscuro,
   efecto typing en terminal, scroll reveal, formulario contacto.
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initMobileMenu();
  initThemeToggle();
  initTypingEffect();
  initScrollReveal();
  initHeaderShadowOnScroll();
  initScrollProgress();
  initScrollSpy();
  initStatCounters();
  initContactForm();
});

/* ---------- Año dinámico en footer ---------- */
function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------- Menú responsive ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.classList.toggle('is-active', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Toggle modo claro/oscuro ---------- */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');

  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ---------- Efecto typing en el bloque terminal del hero ---------- */
function initTypingEffect() {
  const target = document.getElementById('typing-target');
  if (!target) return;

  const stack = ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Docker', 'R'];
  const commandPrefix = 'stack --list ';

  if (prefersReducedMotion) {
    target.textContent = commandPrefix + stack[0];
    return;
  }

  let stackIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = stack[stackIndex];
    const full = commandPrefix + word;

    if (!deleting) {
      charIndex++;
      target.textContent = full.slice(0, charIndex);
      if (charIndex === full.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      target.textContent = full.slice(0, charIndex);
      if (charIndex <= 0) {
        deleting = false;
        stackIndex = (stackIndex + 1) % stack.length;
        setTimeout(tick, 300);
        return;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }

  tick();
}

/* ---------- Animaciones al hacer scroll (fade-in / slide-up, en cascada) ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const STAGGER_STEP_MS = 60;
  const STAGGER_MAX_MS = 300;

  // Escalona la entrada de elementos que comparten contenedor (grids de
  // skills, proyectos, certificaciones, timeline) para un efecto en cascada.
  const groups = new Map();
  items.forEach((el) => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach((siblings) => {
    if (siblings.length < 2) return;
    siblings.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * STAGGER_STEP_MS, STAGGER_MAX_MS) + 'ms';
    });
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Sombra del header al hacer scroll ---------- */
function initHeaderShadowOnScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8 ? '0 2px 12px rgba(0,0,0,0.06)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Barra de progreso de scroll ---------- */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  const onScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = progress + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
}

/* ---------- Indicador de sección activa en el nav ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.main-nav a[href^="#"]');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  const linkFor = (id) =>
    document.querySelector(`.main-nav a[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove('is-active'));
        const active = linkFor(entry.target.id);
        if (active) active.classList.add('is-active');
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------- Contador animado de la franja de estadísticas ---------- */
function initStatCounters() {
  const items = document.querySelectorAll('.stat-number[data-count-to]');
  if (!items.length) return;

  const animateCount = (el) => {
    const target = parseFloat(el.getAttribute('data-count-to'));
    const suffix = el.getAttribute('data-suffix') || '';

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    items.forEach(animateCount);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Formulario de contacto ----------
   Modo por defecto: mailto: (sin backend).
   Para usar Formspree:
     1. Cambia FORM_MODE a 'formspree'
     2. Define FORMSPREE_ENDPOINT con tu URL (https://formspree.io/f/XXXXX)
------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  if (!form) return;

  const FORM_MODE = 'mailto'; // 'mailto' | 'formspree'
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TU_ID';
  const CONTACT_EMAIL = 'ibsensotart23@gmail.com';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const dict = TRANSLATIONS[typeof getCurrentLang === 'function' ? getCurrentLang() : 'es'];

    if (FORM_MODE === 'mailto') {
      const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      note.textContent = dict['form.mailtoNote'];
    } else {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (response.ok) {
          note.textContent = dict['form.successNote'];
          form.reset();
        } else {
          note.textContent = dict['form.errorNote'] + ' ' + CONTACT_EMAIL;
        }
      } catch (err) {
        note.textContent = dict['form.errorNote'] + ' ' + CONTACT_EMAIL;
      }
    }
  });
}
