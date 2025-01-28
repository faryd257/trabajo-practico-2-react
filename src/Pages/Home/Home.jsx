import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { HomeCard } from "../../components/HomeCard/HomeCard";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        const productosUnicos = data.filter(
          (categoria) => categoria.image && categoria.image.trim() !== ""
        );
        setProductos(productosUnicos.slice(0, 4));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Layout>
      <header className="home-header">
        <div className="home-banner">
          <h1>¡Bienvenidos a Nuestra Tienda Online!</h1>
          <p>Descubre nuestras categorías más destacadas y encuentra productos que se ajustan a tus necesidades.</p>
        </div>
      </header>

      <section className="home-list">
        {productos.length > 0 ? (
          productos.map((categoria) => <HomeCard key={categoria.id} categoria={categoria} />)
        ) : (
          <p className="loading">Cargando categorías...</p>
        )}
      </section>

      <div className="home-ver-mas">
        <Link to="/Productos" className="home-boton-mas">
          Más productos
        </Link>
      </div>

      <section className="home-info">
        <h2>¿Por qué elegirnos?</h2>
        <p>En nuestra tienda, priorizamos la calidad y satisfacción del cliente. Ofrecemos productos únicos y exclusivos de distintas categorías para que encuentres justo lo que necesitas.</p>
        <p>Navega por nuestras categorías y aprovecha ofertas especiales. ¡Tu próxima compra está a solo un clic de distancia!</p>
      </section>
    </Layout>
  );
};

export { Home };
