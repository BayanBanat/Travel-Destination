import './Tours.css';
function Tours(props){
    return(
        <div id="tours">
            
            <h2>{props.toursName}</h2>
            <img  id='img' src={props.image}   alt={props.toursName} />
           
            
        </div>

    )
}
export default Tours;