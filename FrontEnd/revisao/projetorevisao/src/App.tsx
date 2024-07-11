
import './App.css';
import Home from './paginas/home';
import QuemSomos from './paginas/quemSomos';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/quemsomos' element={<QuemSomos/>} />
       
      </Routes>
      
    </div>
  );
}

export default App;
