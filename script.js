const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  if (menu) menu.textContent = '☰';
}));

// Lightweight, one-time reveal as sections come into view. Respects reduced-motion.
if ('IntersectionObserver' in window && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const targets = document.querySelectorAll('.section-head, .feature, .details-inner > div, .detail-grid article, .centered, .steps > div, .download-inner');
  targets.forEach((element) => element.classList.add('scroll-reveal'));
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -30px 0px' });
  targets.forEach((element) => observer.observe(element));
}
