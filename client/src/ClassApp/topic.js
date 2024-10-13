import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";

import axios from "axios";



import style from "./classapp.css";

import { FaImage, FaUsers, FaComment, FaTrash, FaCommentAlt } from "react-icons/fa";

// import { useCookies } from 'react-cookie';

function Topic(props) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        let dateFormat =
                            months[parseInt(props.date.slice(5, 7)) - 1]
                            + " "
                            + props.date.slice(8, 10)
                            + ", "
                            + props.date.slice(0, 4);

    const thisTopic = {
        id: props.id,
        message: props.title,
        class: props.class,
        messageArray: props.subs,
        date: dateFormat,
    }



    return (

        <div className="Topic">
            <h2>{thisTopic.message}</h2> <br />

            <h3>{thisTopic.date}</h3>

            {props.subs.map(eachsubmessage => {

                if (eachsubmessage.slice(0, 21) === "http://res.cloudinary") {
                    return (
                        <>
                            <img src={eachsubmessage} />
                        </>
                    )
                } else {
                    return (
                        <p
                            style={{ padding: "15px 10px", width: "100%", marginBottom: "15px" }}
                        >
                            {eachsubmessage}
                           
                        </p>
                    )
                }
            })}

         </div>


    )
}


export default Topic;