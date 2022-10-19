import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Filters from './Pages/Filters'
import ErrorView from './Pages/ErrorView';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/filtros' element={<Filters />} />
        <Route path='/producto/:name' element={<SingleProduct />} />
        <Route path='*' element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
