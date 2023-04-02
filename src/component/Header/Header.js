import './Header.css';


function Header(){
    return(
        <div class="header">
           
        <h1>Travel Destination</h1>
        <input class="input" type='text' placeholder='search .......'></input>
        <ul>
                <li><a href="">Home</a></li>
                <li><a href='../Footer/Footer'>Contact</a></li>
                <li><a href="">More...</a></li>
               

            </ul>
        </div>
        
    );
};
export default Header;