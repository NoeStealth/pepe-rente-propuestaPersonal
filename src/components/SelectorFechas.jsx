import { hoyISO, formatoFecha } from "../utils/calcularRenta";
import "./SelectorFechas.css";

// Dos campos de fecha. No guarda nada por sí mismo: recibe por props las
// fechas actuales (recogida, devolucion) y dos funciones que avisan a la
// página cuando el usuario cambia una fecha. El estado vive en Reservacion.jsx.
// "fechasNoDisponibles" es una lista opcional (AAAA-MM-DD). Si trae fechas,
// se muestran como aviso; si está vacía, no se muestra nada.
function SelectorFechas({
  recogida,
  devolucion,
  onCambiarRecogida,
  onCambiarDevolucion,
  fechasNoDisponibles = [],
}) {
  const hoy = hoyISO();

  return (
    <div className="selector-fechas">
      <div className="campo-fecha">
        <label htmlFor="fecha-recogida">Fecha de recogida</label>
        <input
          id="fecha-recogida"
          type="date"
          min={hoy}
          value={recogida}
          onChange={(evento) => onCambiarRecogida(evento.target.value)}
        />
      </div>

      <div className="campo-fecha">
        <label htmlFor="fecha-devolucion">Fecha de devolución</label>
        <input
          id="fecha-devolucion"
          type="date"
          min={recogida || hoy}
          value={devolucion}
          onChange={(evento) => onCambiarDevolucion(evento.target.value)}
        />
      </div>

      {fechasNoDisponibles.length > 0 && (
        <p className="aviso-fechas">
          Fechas no disponibles: {fechasNoDisponibles.map(formatoFecha).join(", ")}
        </p>
      )}
    </div>
  );
}

export default SelectorFechas;
