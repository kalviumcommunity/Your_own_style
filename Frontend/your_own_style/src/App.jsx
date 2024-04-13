// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Forms from './components/Forms';
import Signup from './components/Signup';
import Top from './components/top';




function App() {
  return (
    <Router>

      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='/top' element={<Top/>}/>
        <Route path="/about" element={<AboutUs/>} />
        <Route path='/Forms' element={<Forms/>} />
        <Route path='/' element={<Signup/>}></Route>
      


      </Routes>
    </Router>
  );
}

export default App;



