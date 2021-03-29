import React from 'react';
import './ProductHerbs.css';
import Footer from '../../footer/Footer';

function ProductParsley() {
    return (
        <div className='main-page' id='productParsley'>
            <div className='hero-container' style={{height: '300px'}}>
                <img src='images/img-18.jpg'/>
                {/* <div className='Description'>
                    <h1>Parsley</h1>
                    <p>
                    <b> Parsley or garden parsley is a species of flowering plant in the
                        family Apiaceae that is native to the central and eastern Mediterranean
                        region, but has naturalized elsewhere in Europe, and is widely cultivated
                        as an herb, and a vegetable.</b>
                    </p>
                </div> */}
            </div>
            <div><br/>
                {/* <div>
                    <img className='herbsimage' src='images/img-19.jpg' />
                </div> */}
                <div>
                <h1>Parsley</h1>
                    <p>
                    <b> Parsley or garden parsley is a species of flowering plant in the
                        family Apiaceae that is native to the central and eastern Mediterranean
                        region, but has naturalized elsewhere in Europe, and is widely cultivated
                        as an herb, and a vegetable.</b>
                    </p><br/>
                    <h3>Nutritional Facts:</h3>
                    <p>Parsley is one of low calorific herb. 100 g of fresh leaves
                    carry just 36 calories. Additionally, its leaves hold zero
                    cholesterol and fat, but rich in antioxidants, vitamins,
                    minerals, and dietary fiber. On the whole, the herb helps
                    in controlling blood cholesterol and may offer protection
                    against free radical-mediated injury and cancers.</p>
                    <br />
                    <h3>Goes well with:</h3>
                    <p>It can go on salad, pesto, sauce</p>
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
                        <h4>Parsley Salad</h4>
                        <ul>
                            <li>3 cups uncooked chickpeas</li>
                            <li> 4 cloves garlic, smashed</li>
                            <li> Salt and freshly ground black pepper</li>
                            <li> 1 large red onion, sliced very thin</li>
                            <li> 1 tablespoon sumac</li>
                            <li> 1 teaspoon chili powder</li >
                            <li> 1 teaspoon salt</li >
                            <li> 1 bunch Italian parsley, leaves finely chopped</li >
                            <li> 1 large lemon, juiced(about 3 tablespoons)</li >
                            <li> 2 tablespoons extra - virgin olive oil</li >
                            <li> 2 tablespoons pomegranate syrup</li >
                            <li> 5 to 6 sprigs fresh mint</li >
                        </ul>
                    </div>
                <div className='info' id='recipe2'>
                    <h4>Parsley Pesto</h4>
                    <ul>
                        <li>1/2 cup toasted pine nuts</li >
                        <li> 1/2 cup grated pecorino romano, plus extra to serve</li >
                        <li> 4 cups parsley leaves (tightly packed)</li >
                        <li>3/4 cup olive oil</li >
                        <li> Salt and pepper, to taste</li >
                    </ul>
                </div>
                </div>
            </div>
            <Footer/>
        </div>       
    );
}

export default ProductParsley;