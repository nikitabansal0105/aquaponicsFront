import React from 'react';
//import Layout from './Layout';
import HeroSection from './herosection/HeroSection';
import ProductCards from './productsList/ProductCards';
import ServicesCards from './servicesList/ServicesCards';
import Footer from '../footer/Footer';

function Home() {
    return (
        <>     
            {/* <Layout title="Aquaponics" description="Hello..." 
            style={{
                
            }}> */}
                <HeroSection />
                <ProductCards />
                <ServicesCards />
                <Footer/>
            {/* </Layout> */}
        </>
    );
}

export default Home;