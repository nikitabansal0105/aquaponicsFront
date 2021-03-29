import React from 'react';
import './BestCrops.css';

import Footer from '../../../footer/Footer';

function BestSuitableCrops() {
    return (
        <div className='main-page' id="bestSuitableCrops">
            <div className="processimage" style={{height: '300px'}}>
                <img src="images/img-33.jpg"/>
            </div>
            <div className='Desc' id='ProcessDesc'>
                <h1><b>THE BEST SUITABLE AQUAPONICS CROPS</b></h1>
            </div>
            <div className='Details'>
                <p>Aquaponic gardening is mostly associated with leafy vegetables, herbs, some fruits like strawberries and tomatoes plus ornamental plants that grow above the soil. But there are some gardeners that can also grow aquaponic carrots and other root vegetables using this system.</p>
                <p><b>There are a number of considerations when choosing the type of vegetable to grow in an aquaponics system. These include the following factors::</b></p>
                <ul className="Checklist">

                   <li> Whether the plant will grow in an aquaponics system.</li>
                    <li>  The temperature of the air around the plant.</li>
                    <li>  The temperature of the water.</li>
                    <li>  The type of fish that are compatible with the plant.</li>
                    <li> Water pH levels.</li>
                    <li> The level of nutrient demand by the plants.</li>
                    <li> Space required for the type of plant.</li>
                    <li>  Whether the vegetable or fruit grows above or below ground.</li>
                    <li>  Speed of growth of the plant.</li>
                    <li>  What type of vegetables you like to eat.</li>
                    <li>  How readily available are the seeds or starter plants to get.</li>
                </ul> 


                <p><b>Fruits and vegetables suitable for aquaponics include the following:</b></p>
                <ul className='Cropslist'>
                    <li>Tomatoes</li>
                    <li> Leafy lettuces</li>
                    <li> Peppers</li>
                    <li> Cucumbers</li>
                    <li> Peas</li>
                    <li> Cabbages</li>
                   <li> Cauliflowers</li>
                    <li> Beans</li>
                    <li>Squash</li>
                    <li>Broccoli</li>
                    <li> Basil</li>
                    <li> Watercress</li>
                    <li>Strawberries</li>
                    <li> Ginger</li>
                    <li> Baby spinach</li>
                    <li> Radishes</li>
                    <li> Kale</li>
                    <li>Coriander</li>
                    <li> Fenugreek</li>
                    <li> Microgreens</li>
                    </ul>
            </div>
            <Footer/>
      </div>
    );
}

export default BestSuitableCrops;