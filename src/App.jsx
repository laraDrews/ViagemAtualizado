import React, { useState } from 'react';
import Header from './Components/Main/Header';
import Footer from './Components/Main/Footer';
import Destino from './Components/Destino/Destino';
import FormDestino from './Components/Destino/FormDestino';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
	switch (paginaAtual) {
	  case 'Home':
		return <Home />;
	  case 'Destinos':
		return <Destinos />;
	  case 'Contato':
		return <Contato />;
	  default:
		return <Home />;
	}
  };


  return (
    <div className="App">
      <Header />
      
      <Footer />
    </div>
  );
}

export default App;