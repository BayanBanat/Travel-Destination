import './TourDetails.css'


import { useState } from "react";
import { useParams } from "react-router-dom";
const dataDetails = require('../../data/data.json')

const TourDetails = () => {
  let { id } = useParams();

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {
        dataDetails.map(details => {
          if (details.id === id) {
            return (
              <div className="div">
                <h3>{details.name}</h3>
                <img src={details.image} />
                <p>{details.price}</p>
                <div>
                  {showMore ? (
                    <>
                      <p>{details.info}</p>
                      <button onClick={() => setShowMore(false)}>show less</button>
                    </>
                  ) : (
                    <>
                      <p>{details.info.slice(0, 150)}</p>
                      <button onClick={() => setShowMore(true)}>show More</button>
                    </>
                  )}
                </div>

              </div>
            )
          }
        })
      }
  

    </>


  )
}

export default TourDetails;

