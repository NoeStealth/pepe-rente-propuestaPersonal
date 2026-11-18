# Pepe Rente un Auto — Propuesta Personal

Propuesta personal de mejora del sitio web de la empresa Pepe Rente un Auto (renta de autos en Guadalajara, Zapopan y Tlaquepaque). Es un proyecto académico de la materia Proyecto II (UDG CUCEI, Licenciatura en Desarrollo de Sistemas Web).

**No es el sitio oficial de la empresa.** Usa su contenido público como base y todo el código es propio.

## Tecnologías

- React 18 con Vite
- React Router (navegación entre páginas)
- CSS por componente, con modo claro y modo oscuro

## Cómo ejecutarlo

Requisito: Node.js (versión LTS).

```
npm install
npm run dev
```

Después abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Estructura

```
src/
├── data/         autos.js (autos con tarifa por día y pasajeros)
├── utils/        calcularRenta.js (validación de fechas, días y total)
├── components/   Header, Footer, Hero, MapaSection, AutosDestacados,
│                 CarCard, SeleccionAuto, SelectorFechas, Requisitos,
│                 FormasDePago y PromocionesTeaser
├── pages/        Home, Reservacion y PaginaEnConstruccion
├── App.jsx       rutas y estado del modo claro/oscuro
└── index.css     variables de color (tema) y estilos base
```

## Estado de los sprints (Scrum)

| Sprint | Historia | Estado |
| --- | --- | --- |
| 1 | HU-01 Header con menú de navegación | Completado |
| 2 | HU-02 Módulo de reservación | En progreso: tareas 2 a 6 completadas (12 de 15 días de esfuerzo estimado). Pendientes: wireframe formal y pruebas del flujo completo |
| 3 | HU-03 Calendario de disponibilidad | Planificado |
| 4 | HU-04 Pasarela de pago | Planificado |
| 5 | HU-05 Promociones | Planificado |
| 6 | HU-06 Términos y condiciones | Planificado |

## Definición de terminado

Una tarea se considera terminada cuando cumple todo lo siguiente:

- [ ] Funciona en escritorio y en móvil.
- [ ] Funciona en modo claro y en modo oscuro.
- [ ] No muestra errores en la consola del navegador.
- [ ] Su código está en este repositorio (commit con mensaje claro).
- [ ] Tiene una captura de pantalla como evidencia en la documentación.

## Notas

- Las tarifas de los autos son valores de ejemplo, no las tarifas reales de la empresa.
- Las imágenes de los autos y del banner son marcadores temporales.
- Las páginas Empresa, Autos en renta y Contacto todavía no existen (su opción del menú no lleva a ninguna página). Promociones y Términos son páginas en construcción.
- Autor: Noé Ponce Rodríguez.
