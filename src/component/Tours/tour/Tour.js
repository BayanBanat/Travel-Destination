

import { Link } from "react-router-dom";
import './Tour.css';
import TourDetails from "../../TourDetails/TourDetails";
import React, { useState } from "react";

const Tour = ( props ) => {


  const { id,name, image,info } = props.touring;
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>

    <Link to={`/city/${id}`}>
    <div className="card" >
      <img src={image} alt={name} />
      <div className="card-info">
        <h4>{name}</h4>
      </div>
      {showDetails && <TourDetails details={props.touring} />}
      <button onClick={handleClick}>View Details</button>
    </div>
    </Link>
    </>
    
  );
};

export default Tour; 