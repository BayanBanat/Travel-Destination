import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar =()=>{
    return(
        <nav>
             <h1>Travel Destination</h1>
             {/* <input class="input" type='text' placeholder='search .......'></input> */}
            <Link to="/">Home</Link>
        </nav>
    )
}
export default Navbar; 

