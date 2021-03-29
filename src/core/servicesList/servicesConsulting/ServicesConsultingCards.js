import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function ServicesConsultingCards() {
    return (
        <>
            <div id='servicesConsulting'>
                <div className='cards'>         
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-37.jpg'
                                text='Pre-requisites of Aquaponics'
                                label='Pre-requisites'
                                path='/preRequisite'
                            />
                            <CardItem
                                src='images/img-38.jpg'
                                text='Seedling Overview'
                                label='Seeds'
                                path='/seedlingOverview'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-39.jpg'
                                text='Quarterly/Yearly crops'
                                label='Crops'
                                path='/servicesCrops'
                            />
                        </ul>
                    </div>
                </div>
                </div>
            </div> 
        </>
    );
}

export default ServicesConsultingCards;