import './Tours.css';
function Tours(props){
    return(
        <div id="tours">
           <a href=''>
           <h2>{props.toursName}</h2>
            <img  id='img' src={props.image}   alt={props.toursName} />
            </a> 
            
           
            
        </div>

    )
}
export default Tours;