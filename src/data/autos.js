// Arreglo de autos. Lo usan dos partes del sitio:
//  - El Home (AutosDestacados -> CarCard) para mostrar las tarjetas
//  - La página de Reservación (SeleccionAuto) para elegir el auto
//
// OJO: "tarifaDia" son valores de EJEMPLO para la propuesta, no las
// tarifas reales de la empresa.
//
// "imagen" usa un placeholder temporal. Cuando tengas fotos propias o
// libres de derechos, cambia solo esta URL.

const autos = [
  {
    id: 1,
    nombre: "Sedán compacto",
    categoria: "Económico · 4 puertas",
    pasajeros: 5,
    tarifaDia: 650,
    imagen: "https://placehold.co/300x180/e8dcc8/6b5d4f?text=Sedan",
  },
  {
    id: 2,
    nombre: "Hatchback",
    categoria: "Económico · 4 puertas",
    pasajeros: 5,
    tarifaDia: 600,
    imagen: "https://placehold.co/300x180/e8dcc8/6b5d4f?text=Hatchback",
  },
  {
    id: 3,
    nombre: "SUV",
    categoria: "Familiar · 5 puertas",
    pasajeros: 5,
    tarifaDia: 950,
    imagen: "https://placehold.co/300x180/e8dcc8/6b5d4f?text=SUV",
  },
  {
    id: 4,
    nombre: "Minivan",
    categoria: "Grupos grandes · 7 pasajeros",
    pasajeros: 7,
    tarifaDia: 1200,
    imagen: "https://placehold.co/300x180/e8dcc8/6b5d4f?text=Minivan",
  },
];

export default autos;
