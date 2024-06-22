import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function nome (nome:string, sobrenome:string): string {
    return (`${nome} ${sobrenome}`)

    
  }
  function media (prova1:number, prova2:number, prova3:number): number {
    return prova1 + prova2 + prova3 / 3
    
  }
  return (
    <div className="App">
      {media(1, 2, 3)}
      {nome('Luiz', 'Gustavo')}
    </div>
  );
}

export default App;

