import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home.js';
import React from 'react';
import Navbar from './component/Navbar/Navbar';
import TourDetails from './component/TourDetails/TourDetails';
import Footer from './component/Footer/Footer';

const toursData = require("./data/data.json");





function App() {
  return (
    <div className="app">

    <Navbar />
    <Routes>
      <Route path='/' element={<Home id="home" data={toursData} />} />
      <Route path='/city/:id' element={<TourDetails />} />
      
    </Routes>
    <Footer />
    </div>

  )
}

export default App; 
