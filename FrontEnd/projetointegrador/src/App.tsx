import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home';
import Sobre from './paginas/sobre'
import Notfound from './paginas/notfound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='*' element={<Notfound/>} />
      
      </Routes>
     
    </div>
  );
}

export default App;
