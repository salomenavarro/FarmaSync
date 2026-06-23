/* ============================================
   FARMASYNC — JavaScript principal
   ============================================

   ¿QUÉ HACE ESTE ARCHIVO?
   Controla todas las interacciones de la página:
   clics, scroll, menús, acordeones, etc.

   ¿CÓMO ESTÁ ORGANIZADO?
   Cada funcionalidad tiene su propio bloque con comentario.
   Cuando le toque agregar algo nuevo, cada quien busca
   el bloque de su sección y escribe ahí.

   ¿QUÉ ES document.addEventListener('DOMContentLoaded')?
   Es como decirle al navegador: "antes de ejecutar cualquier
   cosa, asegúrate de que toda la página ya esté cargada".
   Todo el código va dentro de este bloque por esa razón.

   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

 // Navbar: Control del efecto Scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 20);
    });
  }

  // Navbar: Control del Menú Móvil e Inclusión de estados accesibles
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__mobile');

  if (toggle && mobileMenu && navbar) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('navbar__mobile--open');
      
      // Sincroniza atributos HTML para CSS y Lectores de pantalla
      toggle.setAttribute('aria-expanded', isOpen);
      navbar.setAttribute('data-open', isOpen);
    });

    // Cierra el menú al presionar un enlace interno
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('navbar__mobile--open');
        toggle.setAttribute('aria-expanded', 'false');
        navbar.setAttribute('data-open', 'false');
      });
    });
  }

});