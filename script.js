// Piccola interazione JS: menu mobile + form finto mailto
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
  });
}

// Gestione form (mailto fallback, nessun backend richiesto)
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
    // TODO: sostituisci con la tua email
    const to = 'info@tua-azienda.it';
    window.location.href = `mailto:${to}?subject=Richiesta dal sito&body=${body}`;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Sto aprendo il tuo client email…';
  });
}
