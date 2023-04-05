
import './Home.css';
import Tour from '../Tours/tour/Tour';
import Header from '../Header/Header';
import TourDetail from '../TourDetails/TourDetails';
import Footer from '../Footer/Footer'
import React from 'react';
import Tours from '../Tours/Tours';


function Home(props) {
    const dataRecieved = props.data;

    const [currentTourId, setCurrentTourId] = React.useState(null);
    const handleTourClick = (tourId) => {
        setCurrentTourId(tourId);
      };

    return (
        <>
            <Header />

            <div className="tour-list">
                {dataRecieved.map((tour) => (
                    <Tours key={tour.id} toury={tour} onClick={handleTourClick} />
                ))}
            </div>
            {currentTourId && (
                <TourDetail tour={dataRecieved.find((tour) => tour.id === currentTourId)} dataDetails={dataRecieved}/>
            )}


            <Footer />
        </>
    );
}
export default Home;
