import React from "react";
import "./css/SobreNosotros.css";

function SobreNosotros() {
  return (
    <div className="sobre-container">
      <h2 className="sobre-title">Sobre Nosotros</h2>
      <p className="sobre-text">
        <b>Estilo Total </b> es una tienda de ropa dedicada a ofrecer
        prendas de calidad para dama y niña. Nuestro compromiso es brindar moda
        accesible, elegante y actual.
      </p>
      <p className="sobre-text">
        Nos caracterizamos por la atención personalizada y por integrar
        tendencias modernas con el estilo clásico, asegurando que cada cliente
        encuentre la prenda ideal para su ocasión.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDwX9L2-kha2tPvQnB-DtVYypAFrTC3ulRA&s"
        alt="Sobre nosotros"
       className="sobre-img"
      />
    </div>
  );
}

export default SobreNosotros;
