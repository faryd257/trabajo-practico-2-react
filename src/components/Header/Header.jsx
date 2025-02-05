import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header>
      <div className="logo">
        <img src="/2.jpg" alt="logo" />
      </div>
      <button className="menu-icono" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </button>
      <nav className={menuAbierto ? "menu abierto" : "menu"}>
        <ul>
          <li>
            <Link to="/" onClick={cerrarMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Productos" onClick={cerrarMenu}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/Login" onClick={cerrarMenu}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/Registro" onClick={cerrarMenu}>
              Registro
            </Link>
          </li>
        </ul>
        <button className="cerrar-menu" onClick={cerrarMenu}>
          Cerrar
        </button>
      </nav>
    </header>
  );
};

export { Header };
