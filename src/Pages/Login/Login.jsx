import { Layout } from "../../components/Layout/Layout"; 
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  return (
    <Layout>
      <div className="login-container">
        <h1>Iniciar Sesión</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
          </div>
          <button type="submit">Ingresar</button>
        </form>
    <p className="register-prompt">
  ¿No tienes cuenta?{" "}
  <Link to="/Registro" className="register-link">
    Regístrate aquí
  </Link>
</p>

      </div>
    </Layout>
  );
};

export { Login };
