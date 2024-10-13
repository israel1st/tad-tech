import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";

import axios from "axios";



import style from "./classapp.css";

import { FaImage, FaUsers, FaComment, FaTrash, FaCommentAlt } from "react-icons/fa";

// import { useCookies } from 'react-cookie';

function PreviousTopics (props) {

    // const [cookies, setCookie, removeCookie] = useCookies(['user']);
    


   
    const [instructorMessages, setInstructorMessages] = useState([]);

   
    const getMessages = () => {
        axios.get("api/messages/fetchmessages")
            .then((response) => {
                setInstructorMessages(response.data.filter(forThisClass => { return forThisClass.class === props.thisClass.name }).reverse());
            });

    };


    useEffect(() => {
        getMessages();
    }, [instructorMessages]);

    

    return (


       
            
            <div className="p-tops">
                <h2>Previous Topics</h2> <br/>

                {
                    instructorMessages.map(imessage => {

                        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        let dateFormat =
                            months[parseInt(imessage.date.slice(5, 7)) - 1]
                            + " "
                            + imessage.date.slice(8, 10)
                            + ", "
                            + imessage.date.slice(0, 4);

                        return (<div className="">
                            
                            <>


                            <Link to={`${imessage.message.split(' ').join('-').toLowerCase()}`}>{imessage.message}</Link> <br/>
                                

                                
                                <b>{dateFormat}  {imessage.date.slice(11,16)}</b>

                                <br/> <br/>
                            </>
                        </div>
                        )
                    })
                }

            </div>
                
     
    )
}


export default PreviousTopics;