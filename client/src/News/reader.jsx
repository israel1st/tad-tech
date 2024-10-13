import React from 'react';
import style from './news.css';

import { useRef, useEffect, useState } from 'react';


//Images
// import neww from "./assets/new.png";

import axios from 'axios';


function Reader(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var regex = /<IMAGE>/gi, result, indices = [];
    while ( (result = regex.exec(props.story)) ) {
        indices.push(result.index);
    }
    const b = props.story.split(" ");

    const [images, setImages] = useState([]);
//    const [images, setImages] = useState(["http://res.cloudinary.com/djrdbht1u/image/upload/v1677496907/myFolder%20/crm0ugw5ot3nyycuuavk.png",
//    "http://res.cloudinary.com/djrdbht1u/image/upload/v1677501522/myFolder%20/e0aiuafapjyn504ldrmh.png",
//    "http://res.cloudinary.com/djrdbht1u/image/upload/v1674473903/myFolder%20/wju5g6xygzqt9bssumjp.png",
//    "http://res.cloudinary.com/djrdbht1u/image/upload/v1674474203/myFolder%20/mok3gjfttbbuuexsetch.png"]);


    // const c = b.filter(function(item) { return b.indexOf(item) });
    const c = b.filter(function(item) { return item.includes("<IMAGE>") }).map(item => {return b.indexOf(item)});
    // const d = b.map(function(item) { return item.includes("<IMAGE>") ? <img src={props.image}/> : item; });
    const d = b.map(function(item) { return item.includes("<IMAGE>") ? <img src={images[c.indexOf(b.indexOf(item))]}/> : item; });


    //b.indexOf(item)
//    console.log(c);
 return (
        <div className='reader'>

            {/* <div className="reader-1">
                <img src={props.image} alt="" />
            </div> */}
            <div className="reader-2">
                <h1>{props.title}</h1>
                <img src={props.image} alt="" />
                {/* <p>{props.story}</p> */}
                <p>{d.map(t=>{
                    return(
                        <>{t} </>
                    )
                })}</p>

                <div>
                    <p>{props.date.slice(0, 10)}</p>
                    <p>by <b>Admin</b></p>
                </div>
            </div>

        </div>
    );

}

export default Reader;
