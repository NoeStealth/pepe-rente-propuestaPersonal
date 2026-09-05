import { Link } from "react-router-dom";
import "./CarCard.css";


function CarCard({ auto }) {
  return (
    <Link to="/reservacion" className="car-card">
      <img src={auto.imagen} alt={auto.nombre} />
      <div className="car-name">{auto.nombre}</div>
      <div className="car-cat">{auto.categoria}</div>
    </Link>
  );
}

export default CarCard;
