javascript
import React, { useState } from 'react';

const Destinos = () => {
  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.', distancia: 9377 },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.', distancia: 7681 },
    { nome: 'Tóquio', descricao: 'A capital do Japão.', distancia: 18400 },
    { nome: 'Rio de Janeiro', descricao: 'Cidade maravilhosa.', distancia: 436 },
    { nome: 'Londres', descricao: 'A capital da Inglaterra.', distancia: 9350 },
    { nome: 'Roma', descricao: 'A cidade eterna.', distancia: 9211 },
    { nome: 'Sydney', descricao: 'A capital da Nova Gales do Sul.', distancia: 13851 },
    { nome: 'Cairo', descricao: 'A maior cidade do mundo árabe.', distancia: 10263 },
    { nome: 'Moscou', descricao: 'A capital da Rússia.', distancia: 11795 },
    { nome: 'Pequim', descricao: 'A capital da China.', distancia: 17856 }
  ]);


  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };
  
  return (
    <>
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
    </>
  );
};

export default Destinos;