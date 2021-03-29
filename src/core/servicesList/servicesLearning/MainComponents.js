import React from 'react';
import './MainComponents.css';

import Footer from '../../../footer/Footer';

function MainComponents() {
    return (
        <div className='servicesMainComponent' id="mainComponents">
            <img className="image" src="http://www.projectfeed1010.com/wp-content/uploads/2014/03/ap-8.jpg"/>
            <h1 style={{marginTop:"1%"}}>COMPONENTS OF AN AQUAPONICS SYSTEM</h1>
            <div className='details'>
                <h3>Plants :</h3>
                <p>The whole purpose of the aquaponics system is to grow plants
                in an environmentally sustainable way allowing for food security.
                The plants do not just receive all the benefits of the aquaponics
                system. They actually play a highly important role in maintaining 
                the overall cycle of the aquaponics system. They act as a natural
                filter for the water, absorbing the nitrates, therefore detoxifying
                the water allowing for recirculation back to the fish. The plants
                remove the need to clean waste accumulated in the fish tank because
                they use the waste, absorbing nutrients for growth, specifically
                nitrates, that can be toxic to the fish.<br/>

                The plants sit on a grow bed, a container that holds the nitrate rich
                water, and floats the growth base. At ISB, we are using cement
                mixing containers as our grow bed. Tip: make sure the grow bed
                container is opaque, preferably black. A clear or translucent
                container creates a potential for algae growth because of the
                light entering the container. Opaque containers create a much
                lesser chance of algae growth because they block light from
                entering the areas they cover. A lightweight, buoyant, base
                is needed to hold the plants upright. Insulation foam blocks
                work excellently because they are easy to cut holes in order
                to place the plants, and they are sturdy enough to hold their
                place. The grow base can be cut in order to just have room
                for the plants, or it can be cut to accommodate small net
                pots in order to allow for easier removal. It is necessary
                for the pots to be net style in order to allow maximum
                    water exposure and ample room for root growth. </p><br/>


                <h3>Fish -</h3>
                <p>This is the aquaculture component of the aquaponics system.
                The excretions from the fish are what eventually provide the
                nutrients needed to grow the plants. For every pound of fish,
                about two gallons of water are needed; for every gallon of water,
                there can be The fish tank is the area that needs to be the
                most maintained, just because they are living animals, which
                also means that they are one of the main indicators of overall
                    health of the system.
                    
                    <br/>Several factors have to be considered when selecting fish,
                especially because they are going to be living in a tank
                environment. In order to have maximum growth output, the
                fish needs to be able to live in high-density population
                conditions. Also rapid growth is optimal considering
                the growth of the plants is dependent on the waste
                excretion from the fish. The fish species also has to be
                    able to withstand living in an enclosed space (that is, the tank). 
                    
                    <br/>Tilapia is normally used because of these very standards. They can thrive in a tank environment, they grow rapidly, and they are a high-density living fish. Other common aquaponics fish are perch, catfish, trout, and hybrid striped bass.
                The one input (other than replenishing water because of evaporation) after the initial set-up of the aquaponics system, is the fish food. Depending on the fish species, feeding standards will differ. All the fish food has to be the type that is 
                able to float on the surface,</p><br/>

                <h3>Bacteria -</h3>
                <p>From first glance, it may seem that there are only two components
                of an aquaponics system: fish and plants. However, there is one
                other piece that without it, there would not be an aquaponics
                system. The bacteria play a highly integral part of the cycle.
                The bacteria are in between the fish and the plant stage. The
                bacteria are what transform the waste into the nutrients able
                to be absorbed by the plants. They do this through a process
                    known as nitrification..

                <br/>Nitrification is the process in which nitrogenous organic compounds
                are converted into nitrites, then nitrates. The first step is the
                conversion of ammonia to nitrite. This is done by Nitrosomas
                (in soil) and Nitrosoccus (in aquatic environments).
                The ammonia is oxidized by these bacteria into nitrites,
                which then flow to the second group of bacteria. Nitrobacter
                (in soil) and Nitrococcus (in aquatic environments) further
                oxidize the nitrites into nitrates. Once converted into nitrates,
                    the compounds are in a form that can be absorbed by the plants.

                <br/>These bacteria can be present in a biofilter. This is located in
                between the clarifier and the grow beds. It can also just be
                    present in the grow beds and/or the fish tank.</p>

                <p><b>Secondary Components of the Aquaponics System:</b></p>
                <p>aerator: constantly aerates the water allowing for more oxygen to enter the promoting better fish health, and more rapid plant growth.</p>
                <p>pipes: pipes (usually pvc) are what transport the water in between the various stages of the cycle.</p>
                <p>lights: the lights provide the radiant energy needed for plants to photosynthesize</p>
                <p>pump: the pump is the main electrical source that pushes the water.</p>
            </div>       
            <Footer/> 
        </div>
    );
}

export default MainComponents;