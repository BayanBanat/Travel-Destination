import './Tours.css';
import { Link } from 'react-router-dom';
import Tour from "./tour/Tour";
import React, { useState } from "react";
import TourDetails from '../TourDetails/TourDetails';

const Tours = (props) => {
  let s=props.toury
  const [selectedTour, setSelectedTour] = useState(null);

  const handleClick = (tour) => {
    setSelectedTour(tour);
  };
  
  return (
    <div className='container'>
    


<Tour touring={s}  />

    
      {selectedTour && <TourDetails tour={selectedTour} />}
    </div>
  );
};

export default Tours;  