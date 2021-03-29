import React from 'react';
import './ProductHerbs.css';
import Footer from '../../footer/Footer';

function ProductKale() {
    return (
        <div className='main-page' id='productKale'>
            <div className='hero-container' style={{height: '300px'}}>
                <img src='images/img-18.jpg'/>
                {/* <div className='Description'>
                    <h1>Kale</h1>
                    <p>
                    <b>Kale is a green, leafy, cruciferous vegetable that is rich in nutrients.
                It may offer a range of health benefits for the whole body.</b>
                    </p>
                </div> */}
            </div>
            <div><br/>
                {/* <div>
                    <img className='herbsimage' src='images/img-17.jpg' />
                </div> */}
                <div>
                <h1>Kale</h1>
                    <p>
                    <b>Kale is a green, leafy, cruciferous vegetable that is rich in nutrients.
                It may offer a range of health benefits for the whole body.</b>
                    </p><br/>
                    <h3>Nutritional Facts:</h3>
                    <p>Kale is a source of the carotenoids, lutein and zeaxanthin (tables).
                    As with broccoli and other cruciferous vegetables, kale contains
                    glucosinolate compounds, such as glucoraphanin, which contributes
                    to the formation of sulforaphane,[17] a compound under preliminary
                     research for its potential to affect human health beneficially.</p>
                    <br />
                    <h3>Goes well with:</h3>
                    <p>It can go on salad, pesto, soup, eggs and lasagna </p>
                </div>
            </div>

            <div >
                <h1>RECIPES</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    // alignContent: 'stretch',
                    // alignItems: 'stretch'
                }}>
                    <div>
                        <h4>Kale Salad</h4>
                        <ul>
                            <li>¾ cup farro</li>
                            <li>1 pound sweet potatoes, peeled and sliced into 1” cubes</li>
                            <li>1 to 2 tablespoons olive oil, plus more for drizzling</li>
                            <li>2 teaspoons ground sumac</li>
                            <li>Salt, to taste</li>
                            <li>Freshly ground black pepper, to taste</li>
                            <li>1 bunch Tuscan kale,ribs removed and chopped into bite-sized pieces</li>
                            <li>1 small red onion, halved and thinly sliced</li>
                            <li> 2 tablespoons red wine vinegar</li>
                            <li>2 tablespoons sugar or honey or maple syrup</li>
                            <li> 1 medium lemon and 1 handful fresh mint leaves</li>
                            <li> 3 tablespoons roughly chopped hazelnuts</li >
                        </ul>
                    </div>
                <div className='info' id='recipe2'>
                    <h4>Kale Guacamole</h4>
                    <ul>
                        <li>3 to 4 big leaves of curly green kale</li>
                        <li>medium ripe avocados, halved and pitted</li>
                        <li>3 tablespoons lime juice , divided, to taste</li>
                        <li> ¾ teaspoon kosher salt, to taste</li>
                        <li> ⅓ cup roughly chopped red onion</li>
                        <li> ¼ cup roughly chopped fresh cilantro, lightly packed</li>
                        <li> 1 small jalapeño, seeds and membranes removed, roughly chopped</li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductKale;