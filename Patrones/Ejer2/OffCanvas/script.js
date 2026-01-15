const menuBtn = document.getElementById('menuBtn');
const sidePanel = document.querySelector('.columna1');
const overlay = document.getElementById('overlay');

// Función para abrir/cerrar
function toggleMenu() {
  sidePanel.classList.toggle('open');
  overlay.classList.toggle('active');
}

// Eventos de clic
menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Soporte para gestos táctiles con Hammer.js
const mc = new Hammer(sidePanel);

// Si el usuario desliza hacia la izquierda sobre el menú, se cierra
mc.on("swipeleft", function() {
  if (sidePanel.classList.contains('open')) {
    toggleMenu();
  }
});