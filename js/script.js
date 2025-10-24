// Detecta scroll para animaciones fade-in
/* const sections = document.querySelectorAll('section');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top; // posición superior del elemento
    if (top < triggerBottom) {
      section.classList.add('visible');

      // Animar títulos letra por letra
      const titles = section.querySelectorAll('h2, h1'); // Selecciona h2, h1 y titulo
      titles.forEach(title => { // Animar cada título
        if (!title.classList.contains('title-anim')) { // Evita reanimar
          title.classList.add('title-anim');
          const letters = title.textContent.split('');
          title.textContent = '';
          letters.forEach((letter, i) => { //
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`; // más rápido y más sutil
            title.appendChild(span);
          });
        }
      });
    }
  });
} 

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
*/

// Animación de revelado con retraso escalonado
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = windowHeight * 0.9; // 20% desde abajo

    if (elementTop < triggerPoint && !el.classList.contains('active')) {
      // Delay escalonado en milisegundos
      setTimeout(() => {
        el.classList.add('active');
      }, index * 150); // 150ms entre cada elemento
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



/* //! LIGHTING */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const html = card.getAttribute('data-body');
      lightboxContent.innerHTML = html || '<p>Sin contenido.</p>';
      lightbox.classList.add('show');
    });
  });

  // Cerrar al hacer clic fuera del contenido
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
      lightboxContent.innerHTML = '';
    }
  });

  lightboxClose.addEventListener('click', (e) => {
    
      lightbox.classList.remove('show');
      lightboxContent.innerHTML = '';
    
  });


});


