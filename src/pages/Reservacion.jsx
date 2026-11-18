import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import autos from "../data/autos";
import SeleccionAuto from "../components/SeleccionAuto";
import SelectorFechas from "../components/SelectorFechas";
import {
  validarFechas,
  calcularDias,
  calcularTotal,
  formatoPesos,
  formatoFecha,
} from "../utils/calcularRenta";
import "./Reservacion.css";

// Fechas en que el auto no está disponible (AAAA-MM-DD).
// Por ahora está vacía: el calendario de disponibilidad es la historia HU-03.
const FECHAS_NO_DISPONIBLES = [];

// Lleva la pantalla suavemente hasta un paso (por su id).
function irA(idSeccion) {
  const elemento = document.getElementById(idSeccion);
  if (elemento && elemento.scrollIntoView) {
    elemento.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Reservacion() {
  // Lee el "?auto=3" de la URL. Si el usuario llegó desde una tarjeta del
  // Home, ese número es el id del auto. Si no hay nada, queda en null.
  const [searchParams] = useSearchParams();
  const autoInicial = Number(searchParams.get("auto")) || null;

  // Estado de la página: lo que el usuario ha elegido hasta ahora.
  const [autoSeleccionadoId, setAutoSeleccionadoId] = useState(autoInicial);
  const [recogida, setRecogida] = useState("");
  const [devolucion, setDevolucion] = useState("");

  // Busca en el arreglo el auto completo que corresponde a ese id.
  const autoSeleccionado = autos.find((auto) => auto.id === autoSeleccionadoId);

  // Datos que se calculan a partir del estado. No se guardan con useState:
  // se recalculan cada vez que algo cambia.
  const error = validarFechas(recogida, devolucion, FECHAS_NO_DISPONIBLES);
  const fechasListas = recogida !== "" && devolucion !== "" && error === "";
  const dias = fechasListas ? calcularDias(recogida, devolucion) : 0;
  const total =
    autoSeleccionado && fechasListas
      ? calcularTotal(autoSeleccionado.tarifaDia, dias)
      : 0;

  // Hay algo que editar o eliminar si ya se eligió auto o alguna fecha.
  const hayAlgunaSeleccion = Boolean(autoSeleccionado) || recogida !== "" || devolucion !== "";

  // Elimina la selección: deja la página como al inicio.
  function eliminarSeleccion() {
    setAutoSeleccionadoId(null);
    setRecogida("");
    setDevolucion("");
  }

  return (
    <div className="wrap reservacion">
      <h1>Reservación</h1>

      <h2 className="paso-titulo" id="paso-1">Paso 1 de 3 · Elige tu auto</h2>
      <SeleccionAuto
        autos={autos}
        seleccionadoId={autoSeleccionadoId}
        onSeleccionar={setAutoSeleccionadoId}
      />

      <h2 className="paso-titulo" id="paso-2">Paso 2 de 3 · Elige tus fechas</h2>
      <SelectorFechas
        recogida={recogida}
        devolucion={devolucion}
        onCambiarRecogida={setRecogida}
        onCambiarDevolucion={setDevolucion}
        fechasNoDisponibles={FECHAS_NO_DISPONIBLES}
      />

      <h2 className="paso-titulo" id="paso-3">Paso 3 de 3 · Resumen de tu reservación</h2>
      <div className="resumen-parcial">
        {autoSeleccionado ? (
          <p>
            {autoSeleccionado.nombre} · ${autoSeleccionado.tarifaDia} MXN por día
          </p>
        ) : (
          <p>Todavía no has elegido un auto.</p>
        )}

        {error && <p className="error">{error}</p>}

        {fechasListas && (
          <p>
            Del {formatoFecha(recogida)} al {formatoFecha(devolucion)} · {dias}{" "}
            {dias === 1 ? "día" : "días"}
          </p>
        )}

        {autoSeleccionado && fechasListas && (
          <p className="total">Total estimado: {formatoPesos(total)}</p>
        )}

        {!fechasListas && !error && (
          <p className="pendiente">
            Elige la fecha de recogida y la de devolución para calcular el total.
          </p>
        )}

        {hayAlgunaSeleccion && (
          <div className="acciones-resumen">
            <button type="button" className="btn-secundario" onClick={() => irA("paso-1")}>
              Cambiar auto
            </button>
            <button type="button" className="btn-secundario" onClick={() => irA("paso-2")}>
              Cambiar fechas
            </button>
            <button type="button" className="btn-eliminar" onClick={eliminarSeleccion}>
              Eliminar selección
            </button>
          </div>
        )}

        <p className="pendiente">
          El pago en línea se desarrolla en el Sprint 4.
        </p>
      </div>
    </div>
  );
}

export default Reservacion;
