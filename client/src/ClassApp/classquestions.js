import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";

import { Cookies, useCookies } from 'react-cookie';

import { FaCaretUp, FaCaretDown } from "react-icons/fa";




import style from "./classapp.css"

function ClassQuestions(props) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const [question, setQuestion] = useState("");

    const theQuestion = {
        question: question,
        Dept: props.Dept,
        name: cookies.FirstName + " " + cookies.LastName
    }
    const sendQuestion = (e) => {

        e.preventDefault();


        axios
            .post("/api/messages/sendquestion", theQuestion)
            .then(res => {
                console.log(res);
                questionOutput.push(res.data.question);
                // console.log(questionOutput);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        document.getElementById("qstn-box").value = "";
    };

    const onChange = (a) => {
        setQuestion(value => a);

    }

    const [questionOutput, setQuestionOutput] = useState([""]);

    const getQuestions = () => {
        axios.get("api/messages/fetchquestions")
            .then((response) => {
                setQuestionOutput(response.data.filter(forThisClass => { return forThisClass.class === props.Dept }).reverse());
                // console.log(response.data.filter(forThisClass => { return forThisClass.class === props.Dept }).reverse());
            });

    };

    useEffect(() => {
        getQuestions();
      }, [questionOutput]);


    const [answer, setAnswer] = useState("");


    const sendAnswer = (a) => {

        // e.preventDefault();


        axios
            .post("/api/messages/sendanswer", { id: questionOutput[a]._id, answer: answer})
            .then(res => {
                console.log(res);
                // questionOutput.push(res.data.question);
                // console.log(questionOutput);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

        document.getElementById("answ-box").value = "";
    };

    const orderedQuestions = [...new Set(questionOutput.map((val) => val.name))];
   

    const [expandComments, setExpandComments] = useState(0);

    return (
        <div className="classdiv">

            <form
            onSubmit={sendQuestion}
            noValidate
            style={{ display: cookies.Role === "instructor" ? "none" : "" }}
            >
                <textarea
                    rows="10" placeholder="Enter your question here"
                    id="qstn-box"
                    onChange={(e) => { onChange(e.target.value) }}
                >
                </textarea> <br />
                <button>Send</button>
            </form>

            <br /> <br />
            <div
            className="all-class-questions"
            style={{ height: cookies.Role === "instructor" ? "75vh" : "" }}
            >

            {/* {
                questionOutput.map(eachQuestion => {
                    return (
                            <div className="class-comment" key={questionOutput.indexOf(eachQuestion)}>
                                <h4>{eachQuestion.name}</h4> <br />
                                <p><b>Q: </b>{eachQuestion.question}</p>
                                <br />
                                <h4>Instructor</h4> <br />
                                <input
                                onChange={(e) => { setAnswer(e.target.value) }}
                                style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                                type="text" />
                                <button
                                onClick={() => { sendAnswer(questionOutput.indexOf(eachQuestion)) }}
                                style={{ display: cookies.Role === "instructor" ? "" : "none" }}

                               >
                                    reply
                                </button>
                                <p><b>A: </b>{eachQuestion.answer}</p>
                            </div>
                            
                    )
                })
            } */}


            {
                orderedQuestions.map(eachOne => {
                  const OQ2 =  questionOutput.filter(aa => {
                        return aa.name === eachOne
                    });
                return (
                    <div className="class-comment"
                    style={{height: expandComments===orderedQuestions.indexOf(eachOne)+1? "":"110px"}}
                    >
                    <h3>{eachOne}
                    <i 

                    onClick={
                        ()=>{
                            expandComments === orderedQuestions.indexOf(eachOne)+1?
                            setExpandComments(0) :
                            setExpandComments(orderedQuestions.indexOf(eachOne)+1)}}
                        >
                        {expandComments===orderedQuestions.indexOf(eachOne)+1? <FaCaretUp/> : <FaCaretDown/>}
                    </i></h3> <br/>

                    {OQ2.map(eOQ2=>{
                        return (
                        <>
                        <h4>Q</h4>
                        <p className="quest">{eOQ2.question}</p>
                                <br />
                                <h4 style={{textAlign: "right"}}>A</h4>
                                <form>
                                <input
                                onChange={(e) => { setAnswer(e.target.value) }}
                                style={{ display: cookies.Role === "instructor" ? "" : "none" }}
                                type="text"
                                id="qstn-box"
                                />
                                <button
                                onClick={() => { sendAnswer(questionOutput.indexOf(eOQ2)) }}
                                style={{ display: cookies.Role === "instructor" ? "" : "none" }}

                               >
                                    reply
                                </button>
                                </form>
                                <p className="ans">{eOQ2.answer}</p> <br/>
                        </>)
                    })}
                    </div>
                )

                })
            }

                        </div>



        </div>
    )
}


export default ClassQuestions;