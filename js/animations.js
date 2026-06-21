/* ============================================
   FARMASYNC — Inicialización de AOS
   ============================================

   ¿QUÉ HACE ESTE ARCHIVO?
   Arranca la librería AOS una sola vez para toda la página.
   AOS necesita esto para saber cuándo revisar si un elemento
   entró a la pantalla y disparar su animación.

   ¿CUÁNDO TOCARLO?
   Solo si quieren cambiar cómo se comportan TODAS las
   animaciones de scroll a la vez. Por ejemplo, si quieren
   que todas sean más lentas o más rápidas.

   ¿QUÉ SIGNIFICA CADA OPCIÓN?

   duration: 600
     Duración de cada animación en milisegundos.
     600ms = 0.6 segundos. Subir = más lento, bajar = más rápido.

   easing: 'ease-out'
     Ritmo de la animación. 'ease-out' significa que empieza
     rápido y termina lento, que se siente más natural.
     Otras opciones: 'ease-in', 'linear', 'ease-in-out'

   once: true
     La animación ocurre solo la primera vez que el elemento
     aparece en pantalla. Si fuera false, cada vez que el
     usuario sube y baja volvería a animarse.

   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* DOMContentLoaded significa: "espera a que el HTML esté
     completamente cargado antes de ejecutar este código".
     Sin esto AOS buscaría los elementos data-aos antes de
     que existan y no encontraría nada. */

  AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
  });
});