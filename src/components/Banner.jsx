import React, {useState} from "react";
import imgbanner from '../img/banner.jpg';

const Banner = () => {
   return(
        <>
        <section className="hero" id="inicio">
            <img src={imgbanner} alt="Estilo Total Banner"/>
            <div className="hero-text">
                <h2>¡Renueva tu Estilo!</h2>
                <p>¡Renueva tu armario con lo último en moda para ella! 
                Dale vida a tu estilo con prendas únicas y llenas de personalidad.</p>

            </div>
        </section>
        
        </>
    );
    };

    export default Banner;