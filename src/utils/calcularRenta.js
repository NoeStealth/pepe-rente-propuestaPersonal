// Funciones de apoyo para la reservación. Son funciones "puras": reciben
// datos y regresan un resultado, sin tocar la pantalla. Por eso son fáciles
// de entender y de probar por separado.

// Fecha de hoy en formato "AAAA-MM-DD", el mismo que usa <input type="date">.
export function hoyISO() {
  const ahora = new Date();
  const anio = ahora.getFullYear();
  const mes = String(ahora.getMonth() + 1).padStart(2, "0");
  const dia = String(ahora.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
}

// Regresa un texto con el problema de las fechas, o "" si todo está bien.
// Como las fechas son texto con formato AAAA-MM-DD, se pueden comparar
// directamente con < y >: "2026-10-20" < "2026-10-25" es verdadero.
export function validarFechas(recogida, devolucion) {
  if (recogida && recogida < hoyISO()) {
    return "La fecha de recogida no puede ser anterior a hoy.";
  }
  if (recogida && devolucion && devolucion < recogida) {
    return "La fecha de devolución no puede ser anterior a la de recogida.";
  }
  return "";
}

// Días de renta entre la recogida y la devolución.
// Si recoges y devuelves el mismo día, cuenta como 1 día.
export function calcularDias(recogida, devolucion) {
  const msPorDia = 24 * 60 * 60 * 1000;
  const diferencia = (new Date(devolucion) - new Date(recogida)) / msPorDia;
  return Math.max(1, Math.round(diferencia));
}

// Total estimado = tarifa por día x número de días.
export function calcularTotal(tarifaDia, dias) {
  return tarifaDia * dias;
}

// 4750 -> "$4,750 MXN"
export function formatoPesos(cantidad) {
  return `$${cantidad.toLocaleString("es-MX")} MXN`;
}

// "2026-10-20" -> "20/10/2026"
export function formatoFecha(iso) {
  const [anio, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${anio}`;
}
