import React from 'react';
import videoSource from '../intro-video.mp4';

const ContentColumns = () => {
    return (
        <section className="content-columns" id="catalogo">
            <div className="video-container">
                <h4>Descubre lo Último en Gaming</h4>
                <video controls muted loop>
                    <source src={videoSource} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
            <div className="category-menu">
                <h4>Explora por Categoría</h4>
                <ul>
                    <li><a href="#ropa-mujer">Ropa para Mujer</a></li>
                   <li><a href="#ropa-ninas">Ropa para Niñas</a></li>
                   <li><a href="#novedades">Novedades</a></li>
                   <li><a href="#tendencias">Tendencias</a></li>
                   <li><a href="#ofertas">Ofertas Especiales</a></li>
                   <li><a href="#colecciones-exclusivas">Colecciones Exclusivas</a></li>
                   <li><a href="#rebajas">Rebajas</a></li>
                   <li><a href="#accesorios">Accesorios</a></li>
                   
                </ul>
            </div>
        </section>
    );
};

export default ContentColumns;