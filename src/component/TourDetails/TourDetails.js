import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const TourDetail = ({ tours }) => {
  const { id } = useParams();
  const tour = tours.find((tour) => tour.id === parseInt(id)) || { name: "", image: "", info: "" };
  const { name, image, info } = tour;

  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tour-details">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{showMore ? info : info.slice(0, 150)}</p>
      <button onClick={toggleDescription}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default TourDetail

