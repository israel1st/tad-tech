//React
import React from 'react';
import { useRef, useEffect } from 'react';

//Style
import style from './services.css';


//Images
import ictt from './assets/ICT.png';
import androidd from './assets/android.png';
import brandingg from './assets/branding.png';
import businezz from './assets/business.png';
import cmss from './assets/CMS.png';
import datta from './assets/data.png';
import dezign from './assets/design.png';
import graphicc from './assets/graphics.png';
import hostingg from './assets/hosting.png';
import ptt from './assets/PT.png';
import shipping from './assets/shipping.png';


//Icons
import arrow from './assets/vector-right.png';


function Services() {


    const offeredServices = [
        { id: 1, title: "ICT Training Centre", preview: ictt, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 2, title: "Drop Shipping Services", preview: shipping, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 3, title: "Web Design and Hosting", preview: hostingg, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 4, title: "Business Development", preview: businezz, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 5, title: "Penetration Testing", preview: ptt, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 6, title: "Business Branding", preview: brandingg, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 7, title: "Data Analysis", preview: datta, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 8, title: "Graphics Design", preview: graphicc, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 9, title: "Android/IOS Development", preview: androidd, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 10, title: "Product Design UI/UX", preview: dezign, about: "Progressively incentivize coperative systems through technically sound functionalities" },
        { id: 11, title: "Content Management System", preview: cmss, about: "Progressively incentivize coperative systems through technically sound functionalities" },


    ];

    const carrd = useRef();

    const indicate = useRef();


    const scrll = () => {
        carrd.current.scrollBy(350, 0);
    };
    const scrllb = () => {
        carrd.current.scrollBy(-350, 0);
    };

    var zts = -3;



    useEffect(() => {
        const autScrll = () => {

            if (carrd.current.scrollWidth - carrd.current.scrollLeft <= carrd.current.clientWidth * 1.25) {
                carrd.current.scroll(0, 0);
                zts = -3;
                indicate.current.style.marginLeft = `${zts}px`;

            } else {
                carrd.current.scrollBy(500, 0);

                zts += 17.2;
                indicate.current.style.marginLeft = `${zts}px`;
                // indicate.current.style.backgroundColor = `red`;
            }


        };
        setInterval(autScrll, 3000);
    }, []);






    return (
        <div className='Services'>

            <h2>Our Services</h2>

            <div className="cards" ref={carrd}>
                {offeredServices.map(eachService => {
                    return (
                        <div key={eachService.id} className="card">
                            <div>
                                <img src={eachService.preview} alt={eachService.title}></img>
                            </div>
                            <h4>{eachService.title}</h4>
                            <p>{eachService.about}</p>
                        </div>
                    )
                })
                }
            </div>

            <div className="ind-container">
                <div className='indicator-serv'>
                    <div className='c7' ref={indicate}></div>
                    {offeredServices.map(eachService => {
                        return (
                            <div key={eachService.id} className="c2"></div>
                        )
                    })
                    }
                </div>
            </div>


            <div className="arrowb">
                <img onClick={scrllb} src={arrow} alt="" />
            </div>
            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div>
        </div>
    );

}

export default Services;
