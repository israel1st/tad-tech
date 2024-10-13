
//React
import React from 'react';
import style from './team.css';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

//Images
// import step1 from './assets/step1.png';


function Team() {

    

        const teamm = useRef();
    
        const scrll = () => {
    
    
            if (teamm.current.scrollWidth - teamm.current.scrollLeft <= teamm.current.clientWidth * 1.25) {
                teamm.current.scroll(0,0);
            } else {
                teamm.current.scrollBy(240,0);
            }
            
        };
    
        useEffect(() => {
            setInterval (scrll, 6500);

        }, []);

    return (
        <div className='Team'>
            <h2>~ Team Members ~</h2>
            <div className="members" ref={teamm}>
                <div className="member">
                    <div>
                        <h3>Chilli Mili</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
                <div className="member">
                    <div>
                        <h3>Chilli Mili</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
                <div className="member">
                    <div>
                        <h3>Chilli Mili</h3>
                        <p>CEO & Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Team;
