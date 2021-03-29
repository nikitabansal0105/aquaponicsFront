import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function ProductCards() {
    return (
        <>
            <div id="productCards">
                <div className='cards'>
                <h1>Check out the Produce of Aquaponics!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-9.jpg'
                                text='Aromatic Cilantro'
                                // label='Aromatic'
                                path='/productCilantro'                           
                            />
                            <CardItem
                                src='images/img-1.jpg'
                                text='Greeny leaves of Kale'
                                // label='Green leaves'
                                path='/productKale'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/img-3.jpg'
                                text='Freshness of Basil leaves'
                                // label='Freshness'
                                path='/productBasil'
                            />
                            <CardItem
                                src='images/img-8.jpg'
                                text='Nutritional WaterCress'
                                // label='Nutritional'
                                path='/productWaterCress'
                            />
                            <CardItem
                                src='images/img-6.jpg'
                                text='Vitamin K rich - Parsley'
                                // label='Vitamin'
                                path='/productParsley'
                            />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCards