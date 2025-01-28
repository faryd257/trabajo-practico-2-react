import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ProductoCard } from "../../components/ProductoCard/ProductoCard";
import "./Productos.css";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();

        const filteredProductos = data
          .filter(
            (product) =>
              product.images?.[0] && 
              product.id !== 30 && 
              product.id !== 32 
          )
          .slice(0, 20)
          .map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            images: product.images.length > 0 ? product.images : ["https://via.placeholder.com/300"], // Imagen genérica
          }));

        setProductos(filteredProductos);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <Layout>
      <header className="productos-header">
        <div className="productos-header-content">
          <h1>Nuestros productos</h1>
          <p>Descubre una variedad de productos especialmente seleccionados para ti.</p>
        </div>
      </header>
      <section className="productos-list">
        {loading ? (
          <p className="loading-text">Cargando productos...</p>
        ) : productos.length > 0 ? (
          productos.map((producto) => <ProductoCard key={producto.id} producto={producto} />)
        ) : (
          <p className="no-productos">No hay productos disponibles con imágenes únicas.</p>
        )}
      </section>
    </Layout>
  );
};

export { Productos };
