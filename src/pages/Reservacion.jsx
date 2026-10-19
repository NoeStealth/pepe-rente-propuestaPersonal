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
  const error = validarFechas(recogida, devolucion);
  const fechasListas = recogida !== "" && devolucion !== "" && error === "";
  const dias = fechasListas ? calcularDias(recogida, devolucion) : 0;
  const total =
    autoSeleccionado && fechasListas
      ? calcularTotal(autoSeleccionado.tarifaDia, dias)
      : 0;

  return (
    <div className="wrap reservacion">
      <h1>Reservación</h1>

      <h2 className="paso-titulo">Paso 1 de 3 · Elige tu auto</h2>
      <SeleccionAuto
        autos={autos}
        seleccionadoId={autoSeleccionadoId}
        onSeleccionar={setAutoSeleccionadoId}
      />

      <h2 className="paso-titulo">Paso 2 de 3 · Elige tus fechas</h2>
      <SelectorFechas
        recogida={recogida}
        devolucion={devolucion}
        onCambiarRecogida={setRecogida}
        onCambiarDevolucion={setDevolucion}
      />

      <div className="resumen-parcial">
        <h2>Tu selección</h2>

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

        <p className="pendiente">
          El carrito (editar y eliminar) se desarrolla en la siguiente tarea del
          Sprint 2.
        </p>
      </div>
    </div>
  );
}

export default Reservacion;
