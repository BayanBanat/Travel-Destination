import './Home.css';

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
                    <Tour key={tour.id} tour={tour} onClick={handleTourClick} />
                ))}
            </div>
            {currentTourId && (
                <TourDetail tour={dataRecieved.find((tour) => tour.id === currentTourId)} />
            )}


            <Footer />
        </>
    );
}
export default Home;
