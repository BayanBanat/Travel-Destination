import Header from "../Header/Header.js";
import Tours from "../Tours/Tours.js";
import Footer from "../Footer/Footer.js";

import './Home.css';

function Home(props) {
    const dataRecieved=props.data;
    return (
        <>
            <Header />
            <div class="container">
                {
                    dataRecieved.map(tours => {
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