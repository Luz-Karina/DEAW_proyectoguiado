import React, { useState } from 'react';
import Header from './components/Header'; // Header
import Banner from './components/Banner'; // Banner
import ConctaForm from './components/ConctaForm'; // ConctaForm
import ContentColumns from './components/ContentColumns'; // ContentColumns
import Noticias from "./components/Noticias"; // Noticias
import SobreNosotros from './components/SobreNosotros'; //SobreNosotros
import LibroReclamaciones from './components/LibroReclamaciones';
import Footer from './components/Footer'; // Footer


// Componentes de la tienda
import ProductList from './components/ProductList'; // ProductList
import Cart from './components/Cart'; // Cart 


const App = () => {
  // Estado que controla en qué página estamos
  const [currentPage, setCurrentPage] = useState("home");

  // Estado para guardar los items en el carrito
  const [cartItems, setCartItems] = useState([]);

  // Función que añade elementos al carrito
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Función que elimina elementos del carrito
  const handleRemoveToCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Funciones de navegación
  const handleNavigateToStore = () => setCurrentPage("store");
  const handleNavigateToHome = () => setCurrentPage("home");
  const handleNavigateToNoticias = () => setCurrentPage("noticias");
  const handleNavigateToSobre = () => setCurrentPage("sobre");


  return (
    <>
      <Header
        onNavigateToHome={handleNavigateToHome}
        onNavigateToStore={handleNavigateToStore}
        onNavigateToNoticias={handleNavigateToNoticias}
        onNavigateToSobre={handleNavigateToSobre}
        cartCount={cartItems.length}
      />

      <main>
        {currentPage === "store" ? (
          <>
            <ProductList onAddToCart={handleAddToCart} />
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveToCart}
            />
          </>
        ) : currentPage === "noticias" ? (
          <Noticias />
          ) : currentPage === "sobre" ? (
          <SobreNosotros />    
        ) : (
          <>
            <Banner />
            <ConctaForm />
            <ContentColumns />
          </>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default App;



