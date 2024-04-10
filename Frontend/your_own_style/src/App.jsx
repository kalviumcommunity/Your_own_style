// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Forms from './components/Forms';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Navbar/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path='/Forms' element={<Forms/>} />

      </Routes>
    </Router>
  );
}

export default App;



