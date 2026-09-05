import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const links = [
  { label: "Inicio", to: "/" },
  { label: "Empresa", to: "#" },
  { label: "Autos en renta", to: "#" },
  { label: "Reservación", to: "/reservacion" },
  { label: "Promociones", to: "/promociones" },
  { label: "Términos", to: "/terminos" },
  { label: "Contacto", to: "#" },
];

function Header({ isDark, toggleTheme }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar wrap">
        <Link to="/" className="logo">
          Pepe <span>¡Rente un auto!</span>
        </Link>

       
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                {link.to.startsWith("/") ? (
                  <Link to={link.to} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.to}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Cambiar modo claro/oscuro"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="12" y1="2" x2="12" y2="4"></line>
              <line x1="12" y1="20" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="4" y2="12"></line>
              <line x1="20" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
            </svg>
          </button>

          
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
