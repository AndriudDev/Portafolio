

//! Animación de revelado con retraso escalonado
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


