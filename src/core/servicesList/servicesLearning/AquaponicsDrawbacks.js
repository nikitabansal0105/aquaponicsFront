import React from 'react';
import Footer from '../../../footer/Footer';

function AquaponicsDrawbacks() {
    return (
        <div className='main-page' id="aquaponicsDrawbacks">
            <div className="processimage" style={{height: '300px'}}>
                <img src="images/img-35.jpg"/>
            </div>
            <div className='Desc' id='ProcessDesc'>
                <h1><b>THE DRAWBACKS OF AQUAPONICS</b></h1>
            </div>
            <div className='Details'>

                <p><b>The main disadvantages of an aquaponics system:</b></p>
                <ul className="Checklist">

                    <li><b>High start-up costs:</b> An aquaponics system can involve a high upfront investment. Whether that iss for the aquaponics technology and equipment or for the necessary training you will need. However, to create a home DIY aquaponics system you can build this at very low cost indeed.</li>
                    <li><b>Reliance on electricity:</b> An aquaponics system is reliant on the use of electricity. Electric is what powers the filtration system and water pump. Therefore, if you were to suffer from a power cut, this could lead to a failure of the whole ecosystem and in turn could lead to a loss of fish or plants or both.</li>
                   <li> <b>The system can be complex: </b>There are a number of variables involved in the configuration of an aquaponics system. This includes the construction of the system. It includes choosing the right plants and fish which compliment each other. You need to choose fish and plants that are able live together in a single ecosystem. You need to consider the aquatic conditions for the fish, whilst keeping an eye on the plant environmental factors too.</li>
                  <li> <b> Having to kill the fish: </b>If you arere like me and you are an animal softy then you will find it difficult to kill your aquaponics fish when it comes to harvesting them. So if you dont relish the thought of killing fish, what is the answer? Well you can use your aquaponics system to just grow fruit and vegetables instead. But you will still need fish for your aquaponics ecosystem to work, so keep ornamental fish or gold fish instead of fish you can eat.</li>
                </ul>



            </div>
            <Footer/>
        </div>
    );
}

export default AquaponicsDrawbacks;