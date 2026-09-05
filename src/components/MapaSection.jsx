import "./MapaSection.css";


function MapaSection() {
  return (
    <section className="map-section">
      <div className="wrap">
        <div className="map-frame">
          <iframe
            title="Ubicación Zapopan, Jalisco"
            src="https://www.google.com/maps?q=Zapopan,Jalisco,Mexico&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default MapaSection;
