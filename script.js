(() => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const main = document.getElementById('main-content');

  if (!themeToggle || !menuToggle || !nav) return;

  const setThemeLabel = () => {
    const lightActive = body.classList.contains('light');
    themeToggle.textContent = lightActive ? 'Dark' : 'Light';
    themeToggle.setAttribute('aria-label', lightActive ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.setAttribute('aria-pressed', String(lightActive));
  };

  try {
    if (window.localStorage.getItem('kj-theme') === 'light') body.classList.add('light');
  } catch (_) {
    // The site remains usable when storage is unavailable.
  }
  setThemeLabel();

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    try {
      window.localStorage.setItem('kj-theme', body.classList.contains('light') ? 'light' : 'dark');
    } catch (_) {
      // Theme still changes for the current page when storage is unavailable.
    }
    setThemeLabel();
  });

  const setMenuOpen = (open) => {
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = open ? 'Close' : 'Menu';
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('open'));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  if (main) {
    document.querySelector('.skip-link')?.addEventListener('click', () => {
      main.focus({ preventScroll: true });
    });
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.project-card, .case-study, .timeline-item, .education-card, .recognition-card');
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    revealItems.forEach((item) => {
      item.classList.add('reveal-pending');
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
