import React, {useState} from "react";
import logo from '../img/LOGO1.png';

const Header = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handletongleMenu = () => {
        setIsSidebarActive(!isSidebarActive);
    
        
    };

    return(
        <>
        <header>
        <div className="logo">
            <img src={logo} alt="Estilo Total Logo"/>
            <h1>Estilo Total</h1>
        </div>
        <nav className="main-nav">
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="Catalogo">Catálogo</a></li>
                <li><a href="#ofertas">Ofertas</a></li>
                <li><a href="#nosotros">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
        <button className="menu-toggle" aria-label="Abrir menú">☰</button>
        </header>
    <aside className="sidebar">
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#catalogo">Catálogo</a></li>
                <li><a href="#ofertas">Ofertas</a></li>
                <li><a href="#nosotros">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </aside>

   
    

        </>
    );
};

export default Header