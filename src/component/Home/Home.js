
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import React from 'react';
import Tours from '../Tours/Tours';


function Home(props) {
    // const dataRecieved = props.data;

    return (
        <>
            <Header />

            <Tours data={props.data} />

            <Footer/>
           


           
        </>
    );
}
export default Home;
