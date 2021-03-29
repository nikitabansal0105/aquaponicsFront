import React from 'react';
import './AquaponicsProcess.css';
import Footer from '../../../footer/Footer';

function AquaponicsProcess() {
    return (
        <div className='main-page' id='aquaponicsProcess'>
            <img  src="images/img-32.jpg" style={{height: '300px'}}/>
            <h1 style={{marginTop:"1%"}}>THE PROCESS OF AQUAPONICS SYSTEM</h1>

            <div className='processDetails'>
                <p>Aquaponics is a combination of aquaculture and hydroponics into one
                ecosystem. Where an aquaculture system is the growing of fish
                and other aquatic animals under controlled conditions.
                Plus where a hydroponics system is the growing of plants
                without soil. A hydroponics system uses mineral nutrient
                water where the plants are held in place with an inert
                    medium like gravel, clay pebbles or growstone instead of soil.</p>

              
                <p> <b>The following steps are involved in an aquaponics process:</b></p>
              <p> <b> Step #1: </b>The aquaponics fish (i.e. fish grown in an aquaponics system) in the aquaculture part of the system (or fish tank) create waste matter mostly from defecating. This is the beginning of the nitrogen cycle.</p>
             <p> <b>  Step #2:</b> Water from the fish tank is pumped to the hydroponic part of the system (or plant container). This water is fed directly to the roots of the aquaponic plants (i.e. plants grown in an aquaponic system).</p>
             <p>   <b>Step #3:</b> Ammonia and ammonium are produced from the waste matter through the rotting process.</p>
                <p><b>  The next step in the process of aquaponics is the single most important step in an aquaponics system. Without which there would be a build up of ammonia and the fish would die. As a consequence the plants would also not survive</b></p>
                <p> <b>Step #4: </b>Nitrifying bacteria (also known as Nitrobacter and Nitrosomonas) oxidise the ammonia and ammonium to nitrite (NO2). This happens as part of a metabolic process known as nitrification. The nitrification process continues to oxidise the nitrite into nitrate (NO3). The nitrification process is the single most important process of an aquaponics system, as it lowers the pH of the water. This is important for the fish to survive. If the nitrification process were to stop, the dissolved ammonia would build up in the water. This would result in the water becoming very alkaline and would kill the fish.</p>
              <p><b>  Step #5:</b> These newly created nitrates are the main source of food for plants. Nitrates are needed for healthy plant growth. It is the roots of the aquaponic plants that take-up these nitrates. The main reason why aquaponics systems work so well is that the roots are in direct contact with this nitrate-rich water, aquaponic plants flourish as a result.</p>
              <p> <b> Step #6: </b>The cleaned water from the plant container (or hydroponic system), which has had the ammonia and nitrates removed, is pumped back to the fish tank (or aquaculture system).</p>
              <p> <b> Step #6: </b>The process of aquaponics starts once again and so forms a symbiotic circle of life</p>
            </div>



<Footer/>
        </div>
    );
}

export default AquaponicsProcess;