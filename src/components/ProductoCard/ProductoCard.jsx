import { useNavigate } from "react-router-dom";
import "./ProductoCard.css";

// eslint-disable-next-line react/prop-types
const ProductoCard = ({ producto }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, price, description, images } = producto;
  const navigate = useNavigate();

  const handleComprar = () => {
    navigate("/login");
  };

  return (
    <div className="producto-card">
      <img src={images[0]} alt={title} className="producto-imagen" />
      <div className="producto-info">
        <span className="producto-id">ID: {id}</span>
        <h2 className="producto-titulo">{title}</h2>
        <p className="producto-descripcion">{description}</p>
        <p className="producto-precio">${price}</p>
        <button className="producto-boton" onClick={handleComprar}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export { ProductoCard };
