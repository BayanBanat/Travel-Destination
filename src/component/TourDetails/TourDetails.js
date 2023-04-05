import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const TourDetails = (props) => {
  const { id } = useParams();
  const { name,image, info } = props.details;

  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
      <div className="tour-details">
        <p>{showMore ? info : info.slice(0, 150)}</p>
        <button onClick={toggleDescription}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>

  );
};

export default TourDetails

