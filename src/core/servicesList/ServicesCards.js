import React from 'react';
import './ServicesCards.css';

import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function ServicesCards() {
  return (
    <>
      <div id='servicesCards'>
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
          <div className='pricing__section'>
            {/* <Link to='\services' /> */}
            <div className='pricing__wrapper'>
              <h1 className='pricing__heading'>Services we offer ....</h1>
              <div className='pricing__container'>
                
                <Link to='servicesLearning' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                      <FaFire />
                    </div>
                    <h3>Learning</h3>
                    <ul className='pricing__container-features'>
                      <li>Main Components</li>
                      <li>Aquaponics Process</li>
                      <li>Best Suitable Crops</li>
                      <li>Benefits of Aquaponics</li>
                      <li>Drawbacks of Aquaponics</li>
                    </ul>                    
                  </div>
                </Link>

                <Link to='/servicesConsulting' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                      <BsXDiamondFill />
                    </div>
                    <h3>Consutling</h3>
                    <ul className='pricing__container-features'>
                      <li>Pre-requisites of Aquaponics</li>
                      <li>Seedling overview</li>
                      <li>Seasonal & Yearly  Crops</li>
                    </ul>
                  </div>
                </Link>

                <Link to='/servicesCards' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                      <GiCrystalize />
                    </div>
                    <h3>Delivery</h3>
                    <ul className='pricing__container-features'>
                      <li>Local Delivery</li>
                      <li>Fresh </li>
                    </ul>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
}
export default ServicesCards