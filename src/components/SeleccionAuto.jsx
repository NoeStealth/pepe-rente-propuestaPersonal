import "./SeleccionAuto.css";

// Muestra todos los autos como botones. No guarda nada por sí mismo:
// recibe por props cuál está seleccionado (seleccionadoId) y una
// función (onSeleccionar) que avisa a la página cuando el usuario
// hace click en uno. Así el "estado" vive en un solo lugar: Reservacion.jsx.
function SeleccionAuto({ autos, seleccionadoId, onSeleccionar }) {
  return (
    <div className="seleccion-grid">
      {autos.map((auto) => {
        const activo = auto.id === seleccionadoId;

        return (
          <button
            key={auto.id}
            type="button"
            className={activo ? "opcion-auto activa" : "opcion-auto"}
            onClick={() => onSeleccionar(auto.id)}
          >
            <img src={auto.imagen} alt={auto.nombre} />
            <span className="opcion-nombre">{auto.nombre}</span>
            <span className="opcion-detalle">{auto.categoria}</span>
            {/* El "$" es solo el signo de pesos; lo que va entre llaves es JavaScript */}
            <span className="opcion-precio">${auto.tarifaDia} MXN / día</span>
          </button>
        );
      })}
    </div>
  );
}

export default SeleccionAuto;
