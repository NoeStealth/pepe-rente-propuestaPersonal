import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Guadalajara · Zapopan · Tlaquepaque</div>
          <h1>Renta tu próximo auto sin complicaciones</h1>
          <p>
            55 años ofreciendo unidades recientes y en óptimas condiciones,
            con atención rápida y trato directo. Reserva en línea o
            visítanos.
          </p>
          <a href="#" className="btn">Ver autos disponibles</a>
        </div>
        <div className="hero-visual">[ foto a futuro ]</div>
      </div>
    </section>
  );
}

export default Hero;
