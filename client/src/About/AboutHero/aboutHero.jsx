import React from 'react';
import style from './aboutHero.css';



//Images
// import logo from "../Layout/Navigation/assets/newLogo.png";


function AboutHero() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
      }

    return (
        <div className='AboutHero'>
           <div className='ah-first'>
                <div>
                    <hr />
                    <h5>ABOUT US</h5>
                </div>
                <h1>
                    Lorem Ipsum is simply dummy text of the printing
                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
           </div>
           <div className='ah-second'>

           </div>
        </div>
    );

}

export default AboutHero;
