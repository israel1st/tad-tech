import React from 'react';
import style from './ideas.css';
import { useRef } from 'react';
import pexels from './assets/pexels.png';
import rec from './assets/rec7.png';
import web3 from './assets/web3.jpg';
import gplay from './assets/gplay.png'

import caretas from './assets/vector-right.png';


function Ideas() {

    const ideaa = useRef();

    const scrll = () => {
        ideaa.current.scrollBy(240,0);
    };
    const scrllb = () => {
        ideaa.current.scrollBy(-240,0);
    };


    return (
        <div className='Ideas'>

            <h2>Our App Ideas</h2>

            <div className="idea-main">
                <div className='ideas-1'>
                    <img src={pexels} alt="" />
                </div>
                <div className='ideas-2' ref={ideaa}>
                    <div className='idea-card'>
                        <img src={web3}></img>
                        <h3>Web 3 App</h3>
                        <a href=""><img id='gplay' src={gplay} alt="" /></a>
                    </div>
                    <div className='idea-card' style={{animationDelay: "4.5s"}}>
                        <img src={web3}></img>
                        <h3>Web 3 App</h3>
                        <a href=""><img id='gplay' src={gplay} alt="" /></a>

                    </div>
                    <div className='idea-card'style={{animationDelay: "9s"}}>
                        <img src={web3}></img>
                        <h3>web2 App</h3>
                        <a href=""><img id='gplay' src={gplay} alt="" /></a>


                    </div>
                    <div className='idea-card' style={{animationDelay: "13.5s"}}>
                        <img src={web3}></img>
                        <h3>Webber App</h3>
                        <a href=""><img id='gplay' src={gplay} alt="" /></a>


                    </div>
                    

                </div>
                {/* <div className="caret-left" onClick={scrllb}>
                        <img src={caretas} alt="" />
                    </div>
                    <div className="caret-right" onClick={scrll}>
                    <img src={caretas} alt="" />
                </div> */}
            </div>

        </div>
    );

}

export default Ideas;
