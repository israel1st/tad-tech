import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


import style from "./classapp.css";

import { FaUsers, FaComment } from "react-icons/fa";



import ClassMembers from "./classmembers";
import ClassQuestions from "./classquestions";
import ClassBody from "./classbody";
import PreviousTopics from "./prevclasses";

import { useCookies } from 'react-cookie';

function ClassApp(props) {


    const [members, setMembers] = useState(false);
    const [questions, setQuestions] = useState(false);



    const openMembers = () => {
        setMembers(value => !value);
    }
    const openQuestions = () => {
        setQuestions(value => !value);
    }



    return (
        <div className="ClassApp">

            <nav className="classapp-nav">
                {/* <Link to="/dashboard"><button><FaUser /></button></Link> */}
                <h3>{props.thisClass.name}</h3>
                <div>
                    <button onClick={openMembers}><FaUsers /></button>
                    <button onClick={openQuestions}><FaComment /></button>
                </div>
            </nav>
            <div className="classapp-body">
                <div className="class-members"
                    style={{ transform: members ? 'translateX(0%)' : null }}
                >
                    <ClassMembers />
                </div>
                

                <ClassBody
                thisClass={props.thisClass}
                pLanguage={props.pLanguage}
                topics={props.thisClass.topics}
                />

                <div className="class-questions"
                    style={{ transform: questions ? 'translateX(0%)' : null }}

                >
                    <ClassQuestions Dept={props.thisClass.name}/>
                    <PreviousTopics 
                    
                    thisClass={props.thisClass}/>
                </div>
    

            </div>
        </div>
    )
}


export default ClassApp;