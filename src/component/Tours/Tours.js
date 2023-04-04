import './Tours.css';
// import Tour from './Tour';
import { Link } from 'react-router-dom';

// import React from "react";
import Tour from "./tour/Tour";
import React, { useState } from "react";
import TourDetails from '../TourDetails/TourDetails';

const Tours = ({ tours }) => {
  const [selectedTour, setSelectedTour] = useState(null);

  const handleClick = (tour) => {
    setSelectedTour(tour);
  };
  
  return (
    <div className='container'>
    
      {tours.map((tour) => (

<Link to={`/city/${tour.id}`}>
<Tour tour={tour} onClick={() => handleClick(tour)} />
</Link>
         
            //  <Tour tour={tour} onClick={() => handleClick(tour)}/>

       
       
      ))}
      {selectedTour && <TourDetails tour={selectedTour} />}
    </div>
  );
};

export default Tours;  