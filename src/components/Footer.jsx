import React from "react";
import LibroReclamaciones from "./LibroReclamaciones"; // 👈 Importamos el componente
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Estilo Total. Todos los derechos reservados.</p>

      <div className="footer-links">
        <a href="#">Términos y Condiciones</a> |{" "}
        <a href="#">Política de Privacidad</a>
      </div>

      {/* 👇 Aquí está el Libro de Reclamaciones */}
      <LibroReclamaciones />
    </footer>
  );
}

export default Footer;
