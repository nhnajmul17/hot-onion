import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Category from '../Caterories/Category/Category';

const Home = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Banner></Banner>
            <Category></Category>
            <Footer></Footer>



        </div>
    );
};

export default Home;