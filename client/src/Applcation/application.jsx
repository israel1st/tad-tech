import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCookies } from 'react-cookie';


import axios from 'axios';

import { PaystackButton } from 'react-paystack';


import {MdCheckCircleOutline} from 'react-icons/md';

import style from './application.css';

import courseData from "../CoursePage/coursedata/courseData.json";



function Application() {



    const [cookies, setCookie, removeCookie] = useCookies(['user']);

const [user, setUser] = useState([]);


    const getUser = () => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                setUser(response.data.filter(user => { return user.email === cookies.Email }));
            });
    };
    
    useEffect(() => {    
        getUser()
    }, []);

    useEffect(() => {       window.scrollTo(0, 0);     }, []);


    const linkStyle = {
        // textDecoration: 'none',
        color: '#2960ec',
    }

    const program = useRef();
    const [regular, setRegular] = useState(false);


    const Courss = Object.keys(courseData);

    const getProg = () => {
        console.log(program.current.value);
        if (program.current.value==="bootcamp") {
                setRegular(value => true);} else {
                    setRegular(value => false);
                }
        
    }
    

   
  

    const publicKey = "pk_test_69571a1dd1c9b99d9a391a11b771523e03cffa08";
    const email = cookies.Email;
    // const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    // const amount = 1000000; // Remember, set in kobo!
    const amount = Object.values(courseData).filter(a=>{return a.name === course})[0]?.amount*100; // Remember, set in kobo!
    const duration = Object.values(courseData).filter(a=>{return a.name === course})[0]?.duration; // Remember, set in kobo!

  

    // console.log(user[0]?._id);

    const [successfulPayment, setSuccessfulPayment] = useState(false);


    const updateUser = () => {
        axios
            .post("/api/users/updateuser", {
                id: user[0]?._id,
                // email: cookies.Email,
                course: course,
                duration: duration,
                studentID: Math.floor(Math.random() * 8999999999 + 1000000000),
                amountpaid: amount/100,
                hasPaid: true

            })
            .then(res => {console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
            setSuccessfulPayment(true)

    }


const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
            updateUser()
    },
    //   alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Payment Failed!!"),
  }


    return (
        <div className='Application'>

            <div className='contact-us-form'>
                <div className="app-form">

                    {/* <div className="firstlast">
                        <div className="firstn">
                            <label htmlFor="firstname">First Name</label> <br />
                            <input type="text" />
                        </div>
                        <div className="lastn">
                            <label htmlFor="lastname">Last Name</label> <br />
                            <input type="text" />
                        </div>
                    </div> */}
                    <div className="email-add">
                        <label htmlFor="name">Name</label> <br />
                        <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div className="email-add">
                        <label htmlFor="email">Email Address</label> <br />
                        <input
                        type="text"
                        id="email"
                        value={email}
                        readOnly
                        style={{backgroundColor: "lightgrey"}}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="email-add">
                        <label htmlFor="phone">Phone Number</label> <br />
                        <input
                        type="number"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </div>
                   
                    <div className="email-add">
                        <label htmlFor="" >Programme</label> <br />
                        <select onChange={getProg} ref={program}>
                            <option value="bootcamp">1-Month Bootcamp</option>
                            <option value="regular" selected>3-Month Regular Course</option>
                            <option value="scholarship">Scholarship</option>
                        </select>
                    </div>
                    <div className="email-add" style={{display: regular? "block": "none"}}>
                        <label htmlFor="" >Batch</label> <br />
                        <select>
                            <option value="">22 Dec - 22 Jan 2022 </option>
                        </select>
                    </div>
                    <div className="email-add">
                        <label htmlFor="" >Course</label> <br />

                        <select name="" id="" onChange={(e) => setCourse(e.target.value)}>
                            {Courss.map(eachCourse => {
                                return (

                                    <option value={courseData[eachCourse].name}>{courseData[eachCourse].name}</option>

                                )
                            })}
                        </select>



                    </div>

                    <div className="email-add">
                        <label htmlFor="phone">Amount to Pay</label> <br />
                        <input
                        type="number"
                        id="amount"
                        value={amount/100}
                        readOnly
                        style={{backgroundColor: "lightgrey"}}
                    />
                    </div>

                    <br /> <br />
                    <div className="snd-btn">
                    <PaystackButton className="paystack-button" {...componentProps} />
                    </div>

                </div>
            </div>

            
            <div className="join-modal"
                style={{ transform: successfulPayment ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
            >
                <div className="modal-head">
                    <h3></h3><p onClick={() => { setSuccessfulPayment(value => false); }} style={{ cursor: 'pointer', textAlign: 'right' }}>&#10006;</p>
                </div>
                <br/>
               <h2>
                Your payment was successful. </h2>
                <br/>
                <h1 style={{color: "lightgreen", fontSize: "45px"}}><MdCheckCircleOutline/></h1>
                <br/>

               <h4>Kindly, check your dashboard for your student ID and class details
               </h4>
               <br/>

            </div>
        </div>
    );

}

export default Application;
