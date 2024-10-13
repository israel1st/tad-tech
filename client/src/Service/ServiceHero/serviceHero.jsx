import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './serviceHero.css';


//Images
import webdez from './assets/webdesign.png';
import graphdez from './assets/graphdesign.png';

//Icons
import iconn from './assets/vector-right.png';
import locate from './assets/locate.png';
import gridd from './assets/grid.png';
import person from './assets/person.png';



function ServiceHero(props) {

    const heroTags = [
        { id: 1, title: "Business Branding", icon: webdez },
        { id: 2, title: "Graphics Design", icon: graphdez },
        { id: 3, title: "Web Design and Hosting", icon: webdez },
        { id: 4, title: "Business Development", icon: webdez },
        { id: 5, title: "ICT Training", icon: webdez },
        { id: 6, title: "Drop Shipping", icon: webdez },
        { id: 7, title: "Data Analysis", icon: webdez },
        { id: 8, title: "Content Management System", icon: webdez },


    ];

   
   
    const carrd = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };
    

    
    useEffect(() => {    
    const autScrll = () => {

        if (carrd.current.scrollWidth - carrd.current.scrollLeft <= carrd.current.clientWidth * 1.2) {
            carrd.current.scroll(0,0);

        } else {
            carrd.current.scrollBy(305,0);
        }
            
        
    };

    setInterval (autScrll, 3000);

}, []);

const linkStyle = {
    color: "unset",
    textDecoration: "none"
}


    return (
        <div className='ServiceHero'>
            <div className={props.theBG}>

                <div className="inner-banner"></div>
                <div className='headline'>
                    <div className="map">
                        <div className='map-1'><h1>Become Tech Savy By Learning With Us1</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatibus.</p></div>
                        <div className='map-2'><h1>Become Tech Savy By Learning With Us1</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatibus.</p></div>
                        <div className='map-3'><h1>Become Tech Savy By Learning With Us1</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatibus.</p></div>
                        {/* <h1 className='map-2'>Become Tech Savy By Learning With Us2</h1>
                        <h1 className='map-3'>Become Tech Savy By Learning With Us3</h1> */}
                    </div>
                    <div className="intro-small">
                        {/* <p className='p1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatibus.</p>
                        <p className='p2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatibus.</p>
                        <p className='p3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatibus.</p> */}
                    </div>
                </div>
                <div className='bgg'></div>

                <div className="design-a"></div>
                <div className="design-b"></div>

                <div className="serve-courses" ref={carrd}>

                    {props.theTags.map(eachHeroTag => {
                        return (
                            <Link to={eachHeroTag.link} style={linkStyle} key={eachHeroTag.id} className="sCourse">
                                <img src={eachHeroTag.icon} alt="" />
                                <h4>{eachHeroTag.title}</h4>
                            </Link>
                        )
                    })}


                </div>


            </div>
            <div className="service-stats">
                <div className="service-stat">
                    <img src={person} alt="" />
                    <div>
                        <h4>90+</h4>
                        <p>Clients</p>
                    </div>
                </div>
                <div className="service-stat">
                    <img src={locate} alt="" />
                    <div>
                        <h4>30+</h4>
                        <p>Countries</p>
                    </div>
                </div>
                <div className="service-stat">
                    <img src={gridd} alt="" />
                    <div>
                        <h4>50+</h4>
                        <p>Projects</p>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ServiceHero;
