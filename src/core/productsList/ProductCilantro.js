import React from 'react';
import './ProductHerbs.css';
import Footer from '../../footer/Footer';

function ProductCilantro() {
    return (   
        <div className='main-page' id='productCilantro'>
            <div className='hero-container' style={{height: '300px'}}>
                <img src='images/img-18.jpg'/>
                {/* <div className='Description'>
                    <h1>Cilantro</h1>
                    <p>
                    <b>Cilantro (Coriandrum sativum L) is part of the Apiaceae family, which contains 3,700 species, including carrots, celery, and parsley.
                        All parts of the plant are edible, but people most commonly use the fresh leaves and dried seeds in cooking.
                        Cilantro has been a part of global cuisine for a long time.</b>
                    </p>
                </div> */}
            </div>
            <div><br/>
                {/* <div>
                    <img className='herbsimage' src='images/img-9.jpg' />
                </div> */}
                <div>
                <h1>Cilantro</h1>
                    <p>
                    <b>Cilantro (Coriandrum sativum L) is part of the Apiaceae family, which contains 3,700 species, including carrots, celery, and parsley.
                        All parts of the plant are edible, but people most commonly use the fresh leaves and dried seeds in cooking.
                        Cilantro has been a part of global cuisine for a long time.</b>
                    </p>
                    <h3>Nutritional Facts:</h3>
                    <p>Cilantro is very low in saturated fat and cholesterol,
                        and the caloric value is nearly nonexistent. It is a
                        good source of dietary fiber, vitamins A, C, E, K,
                        calcium, iron, potassium, and magnesium. Just
                        a cup of fresh cilantro provides 270 IU
                        of Vitamin A, and 16% of the daily value
                        recommended of vitamin K. </p>
                    <br />
                    <h3>Goes well with:</h3>
                    <p>It can go on salads, salsa, chutney, pesto, sauces, dips, and dressings</p>
                </div>
            </div>

            <div >
                <h1>RECIPES</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexFlow: 'row wrap'
                    // alignContent: 'stretch',
                    // alignItems: 'stretch'
                }}>
                    <div>
                        <h4>Cilantro Pesto</h4>
                        <ul>
                            <li>1 cup chopped cilantro</li>
                            <li>1 cup raw walnuts</li>
                            <li>2 tablespoons fresh lemon juice</li>
                            <li>1 tablespoon extra virgin olive oil</li>
                            <li>1 tablespoon minced garlic</li>
                        </ul>
                    </div>
                <div className='info' id='recipe2'>
                    <h4>Cilantro Garlic Sauce</h4>
                    <ul>
                        <li>12 ounces full-fat sour cream</li>
                        <li>2 cloves garlic, or more to taste</li>
                        <li>1/4 cup chopped cilantro</li>
                        <li>3 tablespoons extra virgin olive oil</li>
                        <li>1 lime, squeezed (2 tablespoons lime juice)</li>
                        <li>Salt to taste</li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );    
}

export default ProductCilantro;