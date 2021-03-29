import React from 'react';
import './ServicesCrops.css';

import Footer from '../../../footer/Footer';

function ServiceCrops() {
    return (
        <div className='main-page' id="servicesCrops" >
            <div className="processimage" style={{height: '300px'}}>
                <img src="images/img-28.jpg" />
            </div>
            <div style={{margin: '0% 2%'}}>
            <div className='Desc' id='ProcessDesc'>
                <h1><b>THE QUARTERLY/YEARLY PRODUCE OF AQUAPONICS</b></h1>
            </div>
            <div className='Details'>
                <p>Almost all plants can be grown in an aquaponic system. However, different plants have different needs and thrive under different conditions.The amount of sunlight, temperature, and rain are all important in growing a healthy plant. If you decide to grow outdoors, choose a variety of vegetables that will grow best in your climate. 

                You could always use a greenhouse or grow indoors, but you need to find plants that do well inside with limited or artificial sunlight. It is best to choose a plant that thrives in your climate, as this will also lower the electricity cost in maintaining your system. 

Here are some crops that grow in a warm or colder climate. You can either follow the climate requirements for these plants or use a greenhouse to regulate the temperature and stay with the few aquaponics plants you prefer.</p>
                <h1 className="coldhot">Cold Crops</h1>
                <br />
                <br/>
                <table className='checklist1' id='checklist2'>
                    <tbody>
                        <tr>
                    
                    <td>Beets	</td>
                    <td>Brussels sprouts</td>	
                    <td>Cabbage	 </td>
                    <td>Carrots	</td>
                    <td>Cauliflower</td>	
                            <td>Herbs	</td>
                        </tr>
                        <tr className="tt">
                    <td>Horseradish	</td>
                    <td>Onions	</td>
                    <td>Potatoes</td>	
                    <td>Radicchio</td>	
                    <td>Sweet potatoes</td>	
                            <td>Winter squash</td>
                        </tr>
                    </tbody>
                    </table>
                <h1 className="coldhot">Warm Crops</h1>
                <br />
                <br />
                <table className='checklist1' id='checklist2'>
                    <tbody>
                        <tr>

                    <td>Artichoke</td>
                    <td>	Cardoon</td>
                    <td> Chives</td>
                            <td>        Garlic</td>
                        </tr>
                        <tr className='tt'>
                    <td>Parsley</td>
                    <td>	Parsnip</td>
                    <td>Shallot</td>
                            <td>Sludge</td>
                            </tr>

                    </tbody></table>

                <br />
                <br />
                <h4 className='guidelines'><b><u><center>Vegetable Production GuideLines</center></u></b></h4>
               
               <br />

                <h4 id="leafy greens">LEAFY GREENS</h4>
                <p>Gorgeously fresh and with a multitude of uses, leafy greens are an excellent choice for any system, especially smaller ones due to their low nutritional requirement and size.</p>
                         
                <h2>Lettuce</h2>
                <img  id="Consult-img"  src="https://i0.wp.com/www.aquaponicsdiyer.com/wp-content/uploads/lettuce-plant-for-aquaponics.jpg?resize=150%2C150&amp;ssl=1" />

                <ul className='info1' >
                    <li>pH: 6.0 to 7.0</li>
                    <li> Plant spacing: 18 to 30 cm (20 to 25 heads/m2)</li>
                    <li> Germination time and temperature: 3 to 7 days; 13 to 21 degree Celsius</li>
                    <li> Growth time: 24 to 32 days (longer for some varieties)</li>
                    <li>Temperature: 15 to 22 degree Celcius (flowering over 24 degree Celcius)</li>
                    <li>Light exposure: full sun (light shading in warm temperatures)</li>
                    <li>Plant height and width: 20 to 30 cm; 25 to 35 cm</li>
                    <li>Recommended aquaponic method: media bed, NFT and DWC</li>

                </ul>

                <br />
                <h2>Swiss Chard</h2>
                <img id="Consult-img" src="https://i2.wp.com/www.aquaponicsdiyer.com/wp-content/uploads/swiss-chard-plant-for-aquaponics.jpg?resize=150%2C150&amp;ssl=1" />
                <ul className='info1' >
                    <li>pH:  6 to 7.5 </li>
                    <li> Plant spacing: 30cm (15 to 20 plants/m2) </li>
                    <li> Germination time and temperature: 4 to 5 days; 25 to 30 degree Celsius optimal</li>
                    <li>   Growth time: 25 to 35 degree Celsius</li>
                    <li>   Temperature: 16 to 24 degree Celsius</li>
                    <li>   Light exposure: full sun (partial shade for temperatures > 26 degree Celsius)</li>
                    <li>   Plant height and width: 30 to 60 cm; 30 to 40 cm</li>
                    <li>   Recommended aquaponic method: media beds, NFT pipes and DWC</li>

                </ul>

                <br />

                <h4 id="herbs">Herbs</h4>
                <p>With powerful aromas and characteristic tastes, herbs are fantastically versatile plants that can be grown in pretty much any system no matter how small. For either medicinal, visual or gastronomic use, you really cant miss the chance to grow them!</p>

                <h2>Basil</h2>
                <img id="Consult-img" src="https://i1.wp.com/www.aquaponicsdiyer.com/wp-content/uploads/basil-plant-for-aquaponics.jpg?resize=150%2C150&amp;ssl=1"/> 
                <ul className='info1' >
                    <li>pH: 5.5 to 6.5</li>
                   <li> Plant spacing: 15 to 25 cm (8 to 40 plants/m2 )</li>
                   <li> Germination time and temperature: 6 to 7 days with temperatures at 20 to 25 degree Celsius</li>
                   <li> Growth time: 5 to 6 weeks (start harvesting when plant is 15 cm)</li>
                   <li> Temperature: 18 to 30 degree Celsius, optimal 20 to 25 degree Celsius</li>
                  <li>  Light exposure: Sunny or slightly sheltered</li>
                  <li>  Plant height and width: 30 to 70 cm; 30 cm</li>
                  <li>  Recommended aquaponic method: media beds, NFT and DWC</li>

                </ul>
                <br />
                <h2>Parsley</h2>
                <img id="Consult-img"  src="https://i2.wp.com/www.aquaponicsdiyer.com/wp-content/uploads/parsley-plant-for-aquaponics.jpg?resize=150%2C150&amp;ssl=1" />
                <ul className='info1' >
                    <li>pH: 6 to 7</li>
                  <li>  Plant spacing: 15 to 30 cm (10 to 15 plants/m2)</li>
                    <li>  Germination time and temperature: 8 to 10 days; 20 to 25 degree Celsius</li>
                     <li> Growth time: 20 to 30 days after transplant</li>
                    <li>  Temperature: 15 to 25 degree Celsius</li>
                     <li> Light exposure: full sun; partial shade at > 25 degree Celsius</li>
                     <li> Plant height and width: 30 to 60 cm; 30 to 40 cm</li>
                     <li> Recommended aquaponic method: media beds, NFT and DWC</li>

                </ul>
                <br />

                <h4 id="vegetables">Vegetables</h4>
                <p>The largest, most useful and giving you the chance to cook some rich meals, vegetables are an aquaponic gardeners dream. Although they require large systems and great nutritional value, they are more than worth it!</p>

                <h2>Broccoli</h2>
                <img id="Consult-img"  src="https://i1.wp.com/www.aquaponicsdiyer.com/wp-content/uploads/broccoli-plant-for-aquaponics.jpg?resize=150%2C150&amp;ssl=1" / >
                <ul className='info1' >
                        <li>pH:  6 to 7</li>
                      <li>  Plant spacing: 40 to 70 cm (3 to 5 plants/m2)</li>
                      <li> Germination time and temperature: 4 to 6 days; 25 degree Celsius</li>
                      <li>  Growth time: 60 to 100 days from transplant</li>
                      <li>  Average daily temperature: 13 to 18 degree Celsius</li>
                      <li>  Light exposure: full sun; can tolerate partial shade but will mature slowly</li >
       <li> Plant height and width: 30 to 60 cm; 30 to 60 cm</li >
       <li> Recommended aquaponic method: media beds</li >

                </ul>

                <br />

                <h2>Cabbage</h2>
                <img id="Consult-img" src="https://i2.wp.com/www.aquaponicsdiyer.com/wp-content/uploads/cabbage-plant-for-aquaponics.jpg?resize=150%2C150&amp;ssl=1" />
                <ul className='info1' >
                    <li>pH: 6 to 7.2</li>
                    <li>Plant spacing: 60 to 80 cm (4 to 8 plants/m2)</li>
                    <li> Germination time and temperature: 4 to 7 days; 8 to 29 degree Celsius</li>
                    <li> Growth time: 45 to 70 days from transplanting (depending on varieties and season)</li>
                    <li> Ideal temperature: 15 to 20 degree Celsius(growth stops at > 25 degree Celsius)</li>
                    <li> Light exposure: full sun</li>
                    <li> Plant height and width: 30 to 60 cm; 30 to 60 cm</li>
                    <li> Recommended aquaponic method: media beds (not suitable for newly established aquaponic units)</li>

                </ul>

                <br />

                <h2>Peas and Beans</h2>
                <img id="Consult-img" src="/images/img-47.jpg" />
                <ul className='info1' >
                    <li> pH: 5.5 to 7.0</li>
                    <li> Plant spacing: 10 to 30 cm dependent on variety (bush varieties 20 to 40 plants/m2 ,climbing varieties 10 to 12 plants/m2 )</li>
                    <li> Germination time and temperature: 8 to 10 days; 21 to 26 degree Celsius</li>
                    <li>  Growth time: 50 to 110 days to reach maturity depending onvariety</li>
                    <li>  Temperature: 16 to 18 degree Celsius night, 22 to 26 degree Celsius day</li>
                    <li>  Light exposure: full sun</li>
                    <li>  Plant height and width: 60 to 250 cm (climbing); 60 to 80 cm (bush)</li>
                    <li>  Recommended aquaponic method: media bed</li>

                </ul>

                <br />

                <h2>Tomatoes</h2>
                <img id="Consult-img" src="/images/img-2.jpg" />
                <ul className='info1' >
                    <li> pH: 5.5 to 6.5</li>
                    <li>Plant spacing: 40 to 60 cm (3 to 5 plants/m2)</li>
                    <li> Germination time and temperature: 4 to 6 days; 20 to 30 degree Celsius</li>
                    <li> Growth time: 50 to 70 days till first harvest; fruiting 90 to 120 days up to 8 to 10 months</li>
                            
                    <li> Temperatures: 13 to 16 degree Celsius night, 22 to 26 degree Celsius day</li>
                    <li>Light exposure: full sun</li>
                    <li>Plant height and width: 60 to 180 cm; 60 to 80 cm</li>
                    <li>Recommended aquaponic method: media beds and DWC</li>

                </ul>

                <br />
            </div>


            </div>
<Footer/>
        </div>
    );
}

export default ServiceCrops;