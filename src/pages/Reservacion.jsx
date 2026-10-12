import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import autos from "../data/autos";
import SeleccionAuto from "../components/SeleccionAuto";
import "./Reservacion.css";

function Reservacion() {
  // Lee el "?auto=3" de la URL. Si el usuario llegó desde una tarjeta del
  // Home, ese número es el id del auto. Si no hay nada, queda en null.
  const [searchParams] = useSearchParams();
  const autoInicial = Number(searchParams.get("auto")) || null;

  // Estado: id del auto elegido. Arranca con el de la URL (si lo hay).
  const [autoSeleccionadoId, setAutoSeleccionadoId] = useState(autoInicial);

  // Busca en el arreglo el auto completo que corresponde a ese id.
  const autoSeleccionado = autos.find((auto) => auto.id === autoSeleccionadoId);

  return (
    <div className="wrap reservacion">
      <h1>Reservación</h1>
      <p className="reservacion-sub">Paso 1 de 3 · Elige tu auto</p>

      <SeleccionAuto
        autos={autos}
        seleccionadoId={autoSeleccionadoId}
        onSeleccionar={setAutoSeleccionadoId}
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
        <p className="pendiente">
          Los siguientes pasos (fechas de renta, cálculo del total y carrito)
          se desarrollan en las siguientes tareas del Sprint 2.
        </p>
      </div>
    </div>
  );
}

export default Reservacion;
