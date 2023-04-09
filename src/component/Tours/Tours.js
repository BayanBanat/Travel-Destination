import './Tours.css';
import { Link } from 'react-router-dom';
import Tour from "./tour/Tour";

const Tours = (props) => {

  return (
    <div className='cardParent'>
    {
        props.data.map(tour => {
          return(
          <div className='card' key={tour.id}>

          <Link to={`/city/${tour.id}`}>

          <Tour image={tour.image} name={tour.name}/>
          
          </Link>


          </div>

          )

        })
      }
    </div>
    
      
    
  );
};

export default Tours;  