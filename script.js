// Smooth scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .skill-card, .project-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Navbar background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 50
    ? 'var(--border)'
    : 'transparent';
});

// Typewriter effect in hero
const heroP = document.querySelector('.hero p');
if (heroP) {
  const text = heroP.textContent;
  heroP.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      heroP.textContent += text.charAt(i);
      i++;
      setTimeout(type, 25);
    }
  };
  setTimeout(type, 600);
}

// Active nav link highlight
const sections = document.querySelectorAll('.section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--text)' : '';
  });
});
