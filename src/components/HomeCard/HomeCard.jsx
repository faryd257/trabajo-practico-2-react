import { useNavigate } from "react-router-dom";
import "./HomeCard.css";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ categoria }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, image } = categoria;
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate("/Productos");
  };

  return (
    <div className="home-card" key={id}>
      <img className="home-card-imagen" src={image} alt={name} />
      <div className="home-card-info">
        <h2 className="home-card-titulo">{name}</h2>
        <p className="home-card-id">ID: {id}</p>
        <button className="home-card-boton" onClick={handleVerMas}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export { HomeCard };
