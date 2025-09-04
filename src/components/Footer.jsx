import React, {useState} from "react";
import libroRecl from '../img/librorecl.jpg';
const Footer = () => {
   return(
        <>
        <footer>
        <div className="footer-left">
            <p>&copy; 2025 Estilo Total. Todos los derechos reservados.</p>
            <p><a href="#">Términos y Condiciones</a> | <a href="#">Política de Privacidad</a></p>
        </div>
        <div className="footer-right">
            <a href="#"><img src = {libroRecl} alt="Libro de Reclamaciones"/></a>
        </div>
        </footer>
        
        </>
    );
    };
    
    export default Footer;
    