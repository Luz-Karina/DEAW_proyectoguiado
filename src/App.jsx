import React from 'react';
import Header from './components/Header';// Header
import Banner from './components/Banner';// Banner
import ListaProductos from "./components/ListaProductos";// ListaProductos
import ConctaForm from './components/ConctaForm';// ConctaForm
import ContentColumns from './components/ContentColumns'; //ContentColumns
import Footer from './components/Footer';// Footer


const App = () => {
    return (
        <>
            <Header/>
            <main>
                 <Banner/>
                 <ListaProductos/>
                 <ContentColumns/>
                 <ConctaForm/>
                 
            </main>
            <Footer/>
        </>
    );
};

export default App;
 
// ContentColumns


