import React from 'react';

import Banner from '../Banner/Banner';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <h1 className='text-primary mt-2 text-center'>Medical Health Care</h1>
            <Banner></Banner>
            <Services></Services>
            
        </div>
    );
};

export default Home;