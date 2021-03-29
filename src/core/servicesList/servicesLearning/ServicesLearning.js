import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';
import Footer from '../../../footer/Footer';

function ServicesLearning() {
    return (
        <>
            <div id='servicesLearning'>
                <div className='cards'>
                <h1>Every detail you should know about Aquaponics!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-26.jpg'
                                text='Main Components'
                                label='Components'
                                path='/mainComponents'
                            />
                            <CardItem
                                src='images/img-27.jpg'
                                text='Aquaponics Process'
                                label='Process'
                                path='/aquaponicsProcess'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-28.jpg'
                                text='Best Suitable crops'
                                label='Crops'
                                path='/bestSuitableCrops'
                            />
                            <CardItem
                                src='images/img-29.jpg'
                                text='Benefits of Aquaponics'
                                label='Benefits'
                                path='/aquaponicsBenefits'
                            />
                            <CardItem
                                src='images/img-30.jpg'
                                text='Drawbacks of Aquaponics'
                                label='Drawbacks'
                                path='/aquaponicsDrawbacks'
                            />
                        </ul>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default ServicesLearning;