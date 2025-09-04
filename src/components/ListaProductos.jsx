import { useState } from "react";

// Productos con imagen, nombre y precio
const productosIniciales = [
  {
    id: 1,
    nombre: "Top dama básico",
    precio: 39.9,
    imagen: "/src/assets/top-dama.jpg",
  },
  {
    id: 2,
    nombre: "Vestido niña flores",
    precio: 79.9,
    imagen: "/src/assets/vestido-nina.jpg",
  },
];

const nuevosProductos = [
  {
    id: 3,
    nombre: "Blusa dama",
    precio: 69.9,
    imagen: "/src/assets/blusa-dama.jpg",
  },
  {
    id: 4,
    nombre: "Leggins niña",
    precio: 49.0,
    imagen: "/src/assets/leggins-nina.jpg",
  },
  {
    id: 5,
    nombre: "Falda dama",
    precio: 89.0,
    imagen: "/src/assets/falda-dama.jpg",
  },
];

export default function ListaProductos() {
  const [productos, setProductos] = useState(productosIniciales);

  const agregar = () => {
  const existentes = new Set(productos.map(p => p.id));
  const disponibles = nuevosProductos.filter(p => !existentes.has(p.id));
  if (disponibles.length === 0) return;
  const cuantos = productos.length % 2 === 0 ? 3 : 2;
  const lote = disponibles.slice(0, cuantos);
  setProductos(prev => [...prev, ...lote]);


  };

  return (
    <div>
      <h2>Productos Estilo-Total</h2>
      <button onClick={agregar}>Agregar productos</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "16px", marginTop: "16px" }}>
        {productos.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "8px", textAlign: "center", background: "#fff" }}>
            <img src={p.imagen} alt={p.nombre} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h4 style={{ margin: "8px 0" }}>{p.nombre}</h4>
            <p>S/ {p.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

