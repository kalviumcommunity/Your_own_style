// App.js

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Forms from './components/Forms';
import Signup from './components/Signup';
import Top from './components/top';
import Modal from './components/Modal';
import Occasion from './components/Occasion';
import Landingpg from './components/Landingpg';





function App() {
  return (
    // <Router>

    //   <Routes>
    //     <Route path="/home" element={<Home/>} />
    //     <Route path='/top' element={<Top/>}/>
    //     <Route path='/Modal'element={<Modal/>}/>
    //     <Route path="/about" element={<AboutUs/>} />
    //     <Route path='/Forms' element={<Forms/>} />
    //     <Route path='/' element={<Signup/>}></Route>
    //     <Route path='/Occasion'  element={<Occasion />}/>
        
     
      


    //   </Routes>
    // </Router>
    <Landingpg/>
  );
}

export default App;



