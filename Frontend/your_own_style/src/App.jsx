// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Landingpg from './components/Landingpg';
import Signup from './components/Signup';
import Home from './components/Home';





function App() {
  return (
      <Router>

        <Routes>

         <Route path='/' element={<Landingpg/>} />
           <Route path='/signup' element={<Signup/>}></Route>
           <Route path='/Home' element={<Home/>}></Route>
      
        
     
      


        </Routes>
       </Router>
    
  );
}

export default App;



