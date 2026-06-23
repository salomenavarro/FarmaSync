# FarmaSync 💊✨

> "Inspirados en tu salud, enfocados en tu bienestar."

FarmaSync es una aplicación web diseñada para resolver una problemática recurrente de los pacientes afiliados a las EPS colombianas: desplazarse a farmacias sin saber si el medicamento recetado estará disponible. Esta situación genera desplazamientos innecesarios, interrupciones en tratamientos crónicos y sobrecarga en los puntos de atención farmacéutica, afectando especialmente a adultos mayores y personas con enfermedades crónicas.

Este repositorio contiene el código fuente de la **Landing Page oficial** de FarmaSync, estructurada y optimizada para presentar el ecosistema del proyecto, captar usuarios (pacientes, cuidadores y entidades de salud) y asegurar una experiencia digital intuitiva, responsive y orientada a la conversión.

---

## 👥 Información del Proyecto y Autores

* **Institución:** SENA - Centro de tecnología de la manufactura avanzada.
* **Programa:** Tecnólogo en Análisis y Desarrollo de Software (Ficha: 3223874).
* **Instructor Líder:** Paula Andrea Bolivar Uribe.
* **Ubicación:** Medellín, Colombia.
* **Fecha de Entrega:** 22 de junio del 2026.

### 🚀 Equipo de Desarrollo
* **Salome Navarro Pineda** — Gestión de diseño UX/UI, maquetación de Navbar y Hero Section, propuesta de valor.
* **Emiliano Florez Pelaez** — Desarrollo y diseño de la sección "Cómo funciona" y "Footer".
* **Kevin Mesa Delgado** — Estructuración y maquetación de la sección "Beneficios Principales" y "Prueba Social".
* **Danna Nikoll Barbosa Graciano** — Implementación y diseño del acordeón de Preguntas Frecuentes (FAQ).

---

## 🎯 Estructura de la Landing Page (Estrategia de Conversión)

El sitio web fue construido siguiendo estrictamente la estructura técnica e imprescindible para una página de aterrizaje eficaz:

* **1. Encabezado (Hero Section):** Incluye un título atractivo enfocado en reservar los medicamentos a tiempo, un subtítulo explicativo del beneficio principal y botones de llamada a la acción (CTA) directas.
* **2. Propuesta de Valor:** Explica con claridad qué hace el sistema, el problema de las filas que resuelve y qué diferencia a FarmaSync de la atención farmacéutica tradicional.
* **3. Beneficios Principales:** Presenta mediante tarjetas visuales ventajas clave como la consulta en tiempo real, reserva anticipada de medicamentos, notificaciones automáticas y acceso seguro.
* **4. Cómo Funciona:** Flujo visual paso a paso interactivo integrado con un mockup móvil simulado que muestra el recorrido del usuario desde su hogar hasta la farmacia.
* **5. Prueba Social:** Genera confianza mediante métricas de impacto estimadas (+1,000 usuarios atendidos, 98% menos filas) y testimonios de pacientes y regentes de farmacia.
* **6. Formulario de Conversión y CTAs:** Botones de acción distribuidos estratégicamente a lo largo de la página ("Reservar Ahora", "Registrarse", "Iniciar Sesión") para capturar la interacción de manera directa.
* **7. Preguntas Frecuentes (FAQ):** Un acordeón funcional diseñado para eliminar dudas comunes antes de la conversión sobre la vigencia de las reservas y validación de stock.
* **8. Información de Contacto y Footer:** Incluye redes sociales, canales de soporte y políticas de privacidad alineadas con la Ley 1581 de 2012 (Habeas Data) para la protección de datos personales en Colombia.

---

## 🛠️ Tecnologías y Recursos Utilizados

* **HTML5 Semántico:** Estructura limpia, organizada y accesible para lectores de pantalla y usabilidad general.
* **CSS3 Modular:** Estilos independientes por componentes utilizando Flexbox y CSS Grid para asegurar un diseño responsive adaptable a dispositivos móviles (mínimo 360px de ancho).
* **Font Awesome v6.7.2:** Librería de iconos vectoriales para el soporte visual de las características y beneficios.
* **AOS (Animate On Scroll) v2.3.1:** Biblioteca de JavaScript para animaciones dinámicas al hacer scroll en la página.

---

## 📁 Estructura del Código del Entregable

La arquitectura del proyecto está organizada de forma modular para garantizar un entorno de desarrollo limpio y facilitar el mantenimiento del diseño UX/UI y maquetación web:

```text
├── assets/
│   └── img/                    # Logotipos, mockups móviles e ilustraciones
├── css/
│   ├── styles.css              # Variables de color, tipografía global y reseteo CSS
│   ├── navbar.css              # Menú de navegación de escritorio y menú móvil interactivo
│   ├── hero.css                # Estilos del encabezado principal y títulos degradados
│   ├── propuesta.css           # Diseño de la línea de tiempo de la propuesta de valor
│   ├── beneficios.css          # Grid modular de las tarjetas de ventajas
│   ├── como-funciona.css       # Estructura del teléfono simulado y pasos del flujo
│   ├── prueba-social.css       # Estilos para testimonios, estrellas y métricas
│   ├── faq.css                 # Diseño y transiciones del acordeón de preguntas
│   ├── footer.css              # Pie de página moderno basado en columnas informativas
│   └── animations.css          # Configuración de efectos y keyframes personalizados
├── js/
│   ├── main.js                 # Lógica interactiva del menú móvil y las FAQs
│   └── animations.js           # Script de inicialización y configuración de AOS
└── index.html                  # Documento raíz de la Landing Page con la estructura semántica

--

## Instrucciones para Ejecución Local

git clone https://github.com/salomenavarro/FarmaSync.git

FarmaSync es un proyecto académico desarrollado bajo el marco de formación tecnológica del SENA. Todos los derechos reservados 2026.