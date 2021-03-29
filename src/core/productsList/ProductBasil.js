import React from 'react';
import './ProductHerbs.css';
import Footer from '../../footer/Footer';

function ProductBasil() {
    return (
        <div className='main-page' id='productBasil'>
            <div className='hero-container' style={{height: '300px'}}>
                <img src='images/img-18.jpg'/>
                {/* <div className='Description'>
                    <h1>Basil</h1>
                    <p>
                    <b>Basil, also called great basil, is a culinary herb of the family
                    Lamiaceae. Basil is native to tropical regions from central Africa to 
                    Southeast Asia. It is a tender plant, and is used in cuisines worldwide</b>
                    </p>
                </div> */}
            </div>
            <div><br/>
                {/* <div>
                    <img className='herbsimage' src='images/img-19.jpg' />
                </div> */}
                <div>
                <h1>Basil</h1>
                    <p>
                    <b>Basil, also called great basil, is a culinary herb of the family
                    Lamiaceae. Basil is native to tropical regions from central Africa to 
                    Southeast Asia. It is a tender plant, and is used in cuisines worldwide</b>
                    </p><br/>
                    <h3>Nutritional Facts:</h3>
                    <p> Basil is an excellent source of vitamin K, manganese, iron,
                    vitamin A, and vitamin C. It's also a good source of calcium,
                    magnesium, and omega-3 fatty acids. Basil isn't simply for
                    internal use. When basil's oils are extracted to make an
                    essential oil, it is used for treating cuts, wounds, and
                    skin infections </p>
                    <br />
                    <h3>Goes well with:</h3>
                    <p>It is used for cooking, such as in tomato sauce, pesto, or vinegars.
                    It also can be sprinkled over salads and sliced tomatoes </p>
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
                        <h4>Tomato Basil Sauce</h4>
                        <ul>
                            <li>8 pounds tomatoes, seeded and diced </li>
                            <li>¼ cup chopped fresh basil</li>
                            <li> 1 large onion, minced</li>
                            <li>3 cloves garlic, minced</li>
                            <li> ½ cup olive oil</li>
                            <li> salt and pepper to taste</li>
                        </ul>
                    </div>
                <div className='info' id='recipe2'>
                    <h4>Basil Vinegar</h4>
                    <ul>
                        <li>4 cloves garlic halved</li>
                        <li>1 cup fresh basil chopped</li>
                        <li>2 cup white vinegar</li>
                    </ul>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProductBasil;