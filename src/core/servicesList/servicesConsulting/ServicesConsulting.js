import React from 'react'
import ServicesConsultingCards from './ServicesConsultingCards';

import Footer from '../../../footer/Footer';

function Services1() {
    return (
        <>
            <div id="servicesConsulting">
                <div className='Main-page'>
                    <div className='Process' style={{height: '400px'}}>
                        <img src='images/img-36.jpg' />
                    </div><br/>
                    <h1>AQUAPONICS CONSULTING</h1>
                </div>
            <ServicesConsultingCards />
            <Footer/>
            </div>
        </>
    )

}

export default Services1;