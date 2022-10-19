import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Filters from './Pages/Filters'
import ErrorView from './Pages/ErrorView';
import SingleProduct from './Pages/SingleProduct';
import UserContext from './contexts/UserContext';
import { useState } from 'react';


function App() {

  const [ state, setState ] = useState(false);
  const user = {
    id: 1,
    name: 'Luis',
    favoriteDriks: [ 'beer', 'gin' ]
  }



  const data = { user, state, setState };

  return (
    <UserContext.Provider value={ data } >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/filtros' element={<Filters />} />
          <Route path='/producto/:name' element={<SingleProduct />} />
          <Route path='*' element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
