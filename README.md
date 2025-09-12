
# Bienvenido al curso de Desarrollo e Implementación de Entornos y Aplicaciones Web
#  Estilo Total 

##  Introducción
**Estilo Total** es una aplicación web desarrollada con **React + Vite** que funciona como una tienda virtual de ropa para dama y niña.  
El objetivo del proyecto es brindar una plataforma moderna, accesible y fácil de usar, donde los clientes puedan explorar el catálogo de productos, añadir artículos al carrito y conocer más sobre la marca.

---

## Objetivos del Proyecto
- Desarrollar una tienda online intuitiva y responsiva.  
- Implementar un carrito de compras que permita añadir y eliminar productos.  
- Incluir secciones informativas: **Inicio, Catálogo, Noticias, Sobre Nosotros y Contacto**.  
- Cumplir con la normativa peruana agregando un **Libro de Reclamaciones digital**.  

## Funcionalidades
**Inicio**: Banner, formulario de contacto y secciones de información.  
**Catálogo**: Lista de productos con opción de añadir al carrito.  
**Carrito**: Ver productos seleccionados y eliminar los que no desees.  
**Noticias**: Sección con novedades, ofertas y lanzamientos.  
**Sobre Nosotros**: Presentación de la tienda, misión y valores.  
**Libro de Reclamaciones**: Modal accesible desde el footer para registrar reclamos o quejas.  
**Responsive Design**: Adaptado a dispositivos móviles, tablets y PC.  

## Guía de Uso

### 1. Instalación y ejecución
1. Descarga o clona este proyecto en tu computadora.  
2. Abre la carpeta en tu editor de código (ej: VS Code).  
3. Instala las dependencias necesarias con:  
   ```bash
   npm install
4. Ejecuta el proyecto en modo desarrollo:
   npm run dev
5. Abre tu navegador en la dirección que aparece en la terminal (generalmente http://localhost:5173).

# 2. Navegación dentro de la aplicación

Inicio → Muestra el banner principal, un formulario de contacto y secciones informativas.

Catálogo → Lista de productos disponibles (ropa de dama y niña). Desde aquí puedes:

Ver los productos con nombre, imagen y precio.

Añadir productos al carrito.

Carrito → Revisa los productos seleccionados y elimina los que no quieras antes de confirmar la compra.

Noticias → Revisa novedades, promociones y colecciones nuevas.

Sobre Nosotros → Conoce la misión y visión de la tienda.

Libro de Reclamaciones → Ubicado en el footer, abre un formulario digital para registrar reclamos o quejas, cumpliendo con la normativa peruana.

# 3 Compatibilidad
El sitio es responsive, por lo que puede usarse desde computadoras, tablets y celulares sin perder funcionalidad ni diseño.

# Conclusiones
Este proyecto permitió aplicar conceptos de Desarrollo Web con React, gestión de estados, enrutamiento básico y diseño responsive.
Además, se integraron buenas prácticas como separar los componentes y estilos en carpetas organizadas, y añadir un Libro de Reclamaciones digital, cumpliendo con la normativa vigente en Perú.




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
