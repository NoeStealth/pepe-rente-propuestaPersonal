import "./Footer.css";


const links = [
  { label: "Inicio", href: "#" },
  { label: "Empresa", href: "#" },
  { label: "Autos en renta", href: "#" },
  { label: "Reservación", href: "#" },
  { label: "Promociones", href: "#" },
  { label: "Términos", href: "#" },
  { label: "Contacto", href: "#" },
];

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Pepe Rente un Auto</h4>
            <p>
              Operadora Turística De Occidente, S.A. De C.V.
              <br />
              Av. Vallarta 3997, Don Bosco Vallarta
              <br />
              C.P. 45049, Zapopan, Jalisco
            </p>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href="tel:+523331223316">333-122-3316</a>
            <a href="tel:+523331221354">333-122-1354</a>
            <a href="https://api.whatsapp.com/send?phone=523330774887">
              WhatsApp 333-077-4887
            </a>
            <a href="mailto:contacto@peperenteunauto.com">
              contacto@peperenteunauto.com
            </a>
          </div>
          <div className="footer-col">
            <h4>Horario</h4>
            <p>
              Lunes a sábado
              <br />
              9:00–14:00 y 16:00–19:00
              <br />
              Domingo 9:00–12:00
            </p>
          </div>
        </div>

        <ul className="fmenu">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="foot-bottom">
          Propuesta personal de mejora · Inspirada en el sitio público de
          Pepe Rente un Auto · Proyecto académico
        </div>
      </div>
    </footer>
  );
}

export default Footer;
