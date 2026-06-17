// =============================================
// MachLink China — Main JavaScript
// =============================================

// ---- Smooth Scroll ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- Mobile Menu ----
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// ---- Image Gallery ----
function initGallery() {
  const mainImg = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('[data-thumb]');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.src = thumb.getAttribute('data-thumb');
      mainImg.classList.add('img-flash');
      setTimeout(() => mainImg.classList.remove('img-flash'), 300);
      thumbs.forEach(t => t.classList.remove('ring-2', 'ring-orange-500'));
      thumb.classList.add('ring-2', 'ring-orange-500');
    });
  });
}

// ---- FAQ Accordion ----
function initFAQ() {
  const items = document.querySelectorAll('[data-faq]');
  items.forEach(item => {
    const q = item.querySelector('[data-faq-q]');
    const a = item.querySelector('[data-faq-a]');
    const icon = item.querySelector('[data-faq-icon]');
    if (q && a) {
      q.addEventListener('click', () => {
        const open = !a.classList.contains('hidden');
        document.querySelectorAll('[data-faq-a]').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('[data-faq-icon]').forEach(el => { if (el) el.textContent = '+'; });
        if (!open) {
          a.classList.remove('hidden');
          if (icon) icon.textContent = '−';
        }
      });
    }
  });
}

// ---- Scroll reveal ----
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ---- WhatsApp floating pulse ----
function initWAFloat() {
  const btn = document.getElementById('waFloat');
  if (!btn) return;
  setInterval(() => {
    btn.classList.add('scale-110');
    setTimeout(() => btn.classList.remove('scale-110'), 200);
  }, 3000);
}

// ---- Init all ----
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initGallery();
  initFAQ();
  initScrollReveal();
  initWAFloat();
});
