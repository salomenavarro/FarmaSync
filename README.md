# FarmaSync — Landing Page

Sistema de Anticipación y Reserva de Medicamentos en Farmacias EPS.

## Estructura del proyecto

```
farmaSync/
├── index.html          ← HTML principal de la landing page
├── css/
│   ├── styles.css      ← Variables globales, reset y estilos base
│   ├── sections.css    ← CSS específico de cada sección
│   └── animations.css  ← @keyframes y clases de animación
├── js/
│   ├── animations.js   ← Inicialización de AOS (no tocar)
│   └── main.js         ← Lógica e interacciones
└── assets/             ← Imágenes e íconos
```

## Secciones y responsables

| Sección         | ID en HTML        | Responsable |
|-----------------|-------------------|-------------|
| Navbar          | `nav.navbar`      | Salome      |
| Hero            | `#hero`           | Salome      |
| Propuesta valor | `#propuesta`      | n/a    |
| Beneficios      | `#beneficios`     | Kevin       |
| Cómo funciona   | `#como_funciona`  | n/a    |
| Prueba social   | `#prueba_social`  | N/a    |
| FAQ             | `#faq`            | Nikoll      |
| Footer          | `#footer`         | n/a    |

## Paleta de colores (variables ya definidas en `styles.css`)

Esta es una propuestas, si gustan pueden cambiar el orden, sugerir cambios etc

| Variable           | Hex       | Uso                      |
|--------------------|-----------|--------------------------|
| `--color-primary`  | `#00A8A8` | Botones, acentos, CTA    |
| `--color-bg-main`  | `#FCFBDC` | Fondo general            |
| `--color-bg-alt`   | `#FFF8F0` | Secciones alternas       |
| `--color-text`     | `#374151` | Texto principal          |
| `--color-border`   | `#E5E7EB` | Bordes de tarjetas       |
| `--color-white`    | `#FFFFFF` | Fondo de tarjetas/navbar |

## Animaciones disponibles (AOS)

Agrega `data-aos="..."` a cualquier elemento HTML para que aparezca animado al hacer scroll:

- `fade-up` — aparece subiendo
- `fade-left` / `fade-right` — aparece desde los lados
- `zoom-in` — aparece creciendo

Para animar elementos en secuencia usa `data-aos-delay="100"`, `data-aos-delay="200"`, etc.

## ¿Cómo ver los cambios?

Abre `index.html` directamente en tu navegador (doble clic), o usa la extensión **Live Server** en VS Code.

---

## Instrucciones para Kevin — Sección Beneficios (`#beneficios`)

**Qué hay que hacer:** Diseñar y construir la sección de beneficios principales del sistema.

**Dónde trabajar:**
- HTML → dentro de `<section id="beneficios">` en `index.html`
- CSS → en el bloque `/* ── BENEFICIOS — Kevin */` dentro de `sections.css`

**Qué debe incluir la sección:**
- Un título y subtítulo que introduzcan los beneficios
- Mínimo 4 tarjetas o bloques, cada uno con un ícono, título corto y descripción breve


**Diseño:** libre. Puedes usar tarjetas, íconos emoji o SVG, grid o flex, el fondo que prefieras. Usa las variables de color del proyecto para mantener coherencia.

**Animaciones:** usa `data-aos` en las tarjetas para que aparezcan al hacer scroll. Si son varias en fila, ponles `data-aos-delay` escalonado para que entren una por una.



---

## Instrucciones para Nikoll — Sección FAQ (`#faq`)

**Qué hay que hacer:** Diseñar y construir la sección de preguntas frecuentes.

**Dónde trabajar:**
- HTML → dentro de `<section id="faq">` en `index.html`
- CSS → en el bloque `/* ── FAQ — Nikoll */` dentro de `sections.css`
- JS → dentro del `document.addEventListener('DOMContentLoaded', ...)` en `main.js`

**Qué debe incluir la sección:**
- Un título y subtítulo
- Mínimo 5 preguntas en 

**Diseño:** libre. Usa las variables de color del proyecto.

