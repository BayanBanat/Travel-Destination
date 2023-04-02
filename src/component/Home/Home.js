import Header from "../Header/Header.js";
import Tours from "../Tours/Tours.js";
import Footer from "../Footer/Footer.js";
import './Home.css';

const toursData = require("../../data/data.json");


function Home(props) {
    return (
        <>
            <Header />
            <div class="container">
                {
                    toursData.map(tours => {
                        return (
                            <Tours toursName={tours.name} image={tours.image} />
                        )

                    })
                }
            </div>


            <Footer />
        </>
    );
}
export default Home;