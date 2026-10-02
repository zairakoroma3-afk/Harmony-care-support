const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
  });
});
