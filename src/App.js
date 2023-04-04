import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home.js';
import React from 'react';
import TourDetails from './component/TourDetails/TourDetails';
const toursData = require("./data/data.json");





function App() {
  return (
    <div className="app">
    <Home id="home" data={toursData} />
    <Routes>
      <Route path='/' element="Home" ></Route>
      <Route path='/city/:id' element={TourDetails} ></Route>
      
    </Routes>
    </div>

  )
}

export default App; 
