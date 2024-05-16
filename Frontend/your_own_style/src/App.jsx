// App.js

import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Landingpg from './components/Landingpg';
import Signup from './components/Signup';
import Home from './components/Home';
import Casual from './components/Casual'
import Tops from './components/Tops';





function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpg/>} />
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Casual' element={<Casual/>}></Route>
          <Route path='/Tops' element={<Tops/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;



