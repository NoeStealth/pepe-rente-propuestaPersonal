import autos from "../data/autos";
import CarCard from "./CarCard";
import "./AutosDestacados.css";

function AutosDestacados() {
  return (
    <section className="autos-bg">
      <div className="wrap">
        <div className="section-head">
          <h2>Autos destacados</h2>
          <p>Haz click sobre un auto para comenzar tu reservación.</p>
        </div>

        <div className="car-grid">
          {}
          {autos.map((auto) => (
            <CarCard key={auto.id} auto={auto} />
          ))}
        </div>

        <div className="ver-todos">
          <a href="#" className="btn">Ver todos los autos</a>
        </div>
      </div>
    </section>
  );
}

export default AutosDestacados;
