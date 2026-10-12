import { Link } from "react-router-dom";
import "./CarCard.css";

// Recibe un solo objeto "auto" como prop y pinta su tarjeta.
// Al hacer click, navega a /reservacion?auto=ID. Lo que va después del
// "?" se llama query string: así la página de Reservación sabe cuál
// auto venías viendo y lo deja preseleccionado.
function CarCard({ auto }) {
  return (
    <Link to={`/reservacion?auto=${auto.id}`} className="car-card">
      <img src={auto.imagen} alt={auto.nombre} />
      <div className="car-name">{auto.nombre}</div>
      <div className="car-cat">{auto.categoria}</div>
    </Link>
  );
}

export default CarCard;
