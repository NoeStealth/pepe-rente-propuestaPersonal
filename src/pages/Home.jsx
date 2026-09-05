import Hero from "../components/Hero";
import MapaSection from "../components/MapaSection";
import AutosDestacados from "../components/AutosDestacados";
import Requisitos from "../components/Requisitos";
import FormasDePago from "../components/FormasDePago";
import PromocionesTeaser from "../components/PromocionesTeaser";


function Home() {
  return (
    <>
      <Hero />
      <MapaSection />
      <AutosDestacados />
      <div className="wrap two-col">
        <Requisitos />
        <FormasDePago />
      </div>
      <PromocionesTeaser />
    </>
  );
}

export default Home;
