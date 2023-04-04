// import { useState } from "react";

// const Tour = (tour) => {
//     const [showMore, setShowMore] = useState(false);
//   const { image, name, description } = tour;
//   const handleShowMore = () => {
//     setShowMore(!showMore);
//   }
//   return (
//     <div>
//       <img src={image} alt={name} />
//       <h2>{name}</h2>
//       <p>
//         {showMore ? description : `${description.substring(0, 50)}...`}
//         <button onClick={handleShowMore}>
//           {showMore ? 'See Less' : 'See More'}
//         </button>
//       </p>
//     </div>
//   );
    
    
// }

import React from "react";
import { Link } from "react-router-dom";
import './Tour.css';
import TourDetail from "../../TourDetails/TourDetails";

const Tour = ( props ) => {
  const { id,name, image,info } = props.tour;
  // const id=props.key;

  return (
    <>
    <Link to={`/city/${id}`} >
    <div className="card" >
      <img src={image} alt={name} />
      <div className="card-info">
        <h4>{name}</h4>
      </div>

     
     
    </div>
    </Link>
    </>
    
  );
};

export default Tour; 