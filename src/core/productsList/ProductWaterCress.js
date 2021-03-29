import React from 'react';
import './ProductHerbs.css';
import Footer from '../../footer/Footer';

function ProductWaterCress() {
    return (
        <div className='main-page' id='productWaterCress'>
            <div className='hero-container' style={{height: '300px'}}>
                <img src='images/img-20.jpg'/>
                {/* <div className='Description'>
                    <h1>WaterCress</h1>
                    <p>
                    <b>Watercress or yellowcress is a species of aquatic flowering plant
                        in the cabbage family Brassicaceae. Its botanical name is Nasturtium
                        officinale. Watercress is a rapidly growing, perennial plant native
                      to Europe and Asia. It is one of the oldest known leaf vegetables 
                        consumed by humans</b></p>
                </div> */}
            </div>
            <div><br/>
                {/* <div>
                    <img className='herbsimage' src='images/img-19.jpg' />
                </div> */}
                <div>
                <h1>WaterCress</h1>
                    <p>
                    <b>Watercress or yellowcress is a species of aquatic flowering plant
                        in the cabbage family Brassicaceae. Its botanical name is Nasturtium
                        officinale. Watercress is a rapidly growing, perennial plant native
                      to Europe and Asia. It is one of the oldest known leaf vegetables 
                        consumed by humans</b></p><br/>
                    <h3>Nutritional Facts:</h3>
                    <p> The vitamins, minerals, and antioxidants in watercress can provide important health benefits.
                    For example, it is rich in vitamin A,also known as retinol which is important for keeping your
                        retinas healthy and your vision good. Getting enough vitamin A is also crucial to keeping
                        your organs healthy because it is critical for cell division.<br/><br/>

                        Watercress is also rich in vitamin C, which supports your immune system, helps you heal from
                        injuries, and supports healthy collagen production. </p>
                    <br />
                    <h3>Goes well with:</h3>
                    <p>WaterCress goes well with salads . smoothies ,soups , sandwiches, sauce and pesto </p>
                </div>
            </div>

            <div >
                <h1>RECIPES</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <div>
                        <h4>WaterCress Soup</h4>
                        <ul>
                            <li>1 onion diced</li>
                            <li>1 clove garlic, peeled and crushed</li>
                            <li>2 medium potatoes, peeled and sliced</li>
                            <li>2 bags watercress (170g)</li>
                            <li>1 vegetable stock cube</li>
                            <li>75ml double cream</li>
                            <li>30g unsalted butter</li>
                            <li>Salt and pepper</li>
                            <li>1 tbsp olive oil</li>
                            <li>1.5 litres boiling water</li>
                        </ul>
                    </div>
                <div className='info' id='recipe2'>
                    <h4>WaterCress Sandwhich</h4>
                    <ul>
                        <li>4 eggs</li>
                        <li>Good handful watercress, roughly chopped</li>
                        <li>6 thin slices of fresh white bread</li>
                        <li>Salt and white pepper</li>
                        <li>2 tbsp soft salted butter</li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductWaterCress;