// Elementos del DOM
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

// Solo activar menú en móvil
const isMobile = () => window.innerWidth < 768;

// Abrir menú (solo en móvil)
menuToggle.addEventListener('click', () => {
    if (isMobile()) {
        menu.classList.remove('-translate-y-full');
        menu.classList.add('translate-y-0');
    }
});

// Cerrar menú con el botón X
closeMenu.addEventListener('click', () => {
    menu.classList.add('-translate-y-full');
    menu.classList.remove('translate-y-0');
});

// Cerrar menú cuando se hace clic fuera del contenido
menu.addEventListener('click', (e) => {
    if (e.target === menu) {
        menu.classList.add('-translate-y-full');
        menu.classList.remove('translate-y-0');
    }
});

// Cerrar menú si se redimensiona a pantalla grande
window.addEventListener('resize', () => {
    if (!isMobile()) {
        menu.classList.add('-translate-y-full');
        menu.classList.remove('translate-y-0');
    }
});
