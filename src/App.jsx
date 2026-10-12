import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaginaEnConstruccion from "./pages/PaginaEnConstruccion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservacion from "./pages/Reservacion";
function App() {
  
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <BrowserRouter>
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reservacion"
          element={<Reservacion />}
        />
        <Route
          path="/promociones"
          element={<PaginaEnConstruccion titulo="Promociones" />}
        />
        <Route
          path="/terminos"
          element={<PaginaEnConstruccion titulo="Términos y Condiciones" />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
