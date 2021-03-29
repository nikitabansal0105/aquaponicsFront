import React from 'react';

function HeroSection() {
    return (
        <div 
        style={{
            backgroundImage: "url('images/hero.jpg')" ,
            backgroundsize: 'cover',
            backgroundRepeat: 'no-repeat',
            margin: '2% 18% 0% 18%',
            height: '70vh',
    width: '100%',
    display: 'flex',
    //flexDirection: 'column',
    justifyContent: 'left',
    //alignItems: 'center'
        }}
        >
<div 
style={{
    //marginTop: '20%', 
    //textAlign: 'center'
}}
>
    <h1 style={{
                //color: '#fff',
                fontSize: '60px',
                fontWeight: 'bold',
            }}>60 days - <br/>Seedling to the Table</h1>
                <h6 style={{
                    //color: '#fff',
                    fontSize: '32px',
                    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                }}>What are you waiting for...</h6></div>
            
                    {/* <div className='hero-btns'>
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                            Watch Aquaponics <i className='far fa-play-circle' /></Button>
                    </div> */}
         </div>
     );
}

export default HeroSection