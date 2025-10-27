const body = document.querySelector('body');
const botao = document.getElementById('toggle-tema');

function toggleTema() {
  body.classList.toggle('escuro');
  const estaEscuro = body.classList.contains('escuro');
  if (estaEscuro) {
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
botao.addEventListener('click', function(e) {
  e.preventDefault();
  toggleTema();
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});