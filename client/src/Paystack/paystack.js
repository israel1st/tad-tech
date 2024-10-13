



// import { Outlet, Link } from "react-router-dom";

// import React from 'react';

import axios from 'axios';

import { useState } from 'react';

import { PaystackButton } from 'react-paystack';

import './paystack.css';

import {MdCheckCircleOutline} from 'react-icons/md';


function Paystack() {




    const publicKey = "pk_test_69571a1dd1c9b99d9a391a11b771523e03cffa08";
    const amount = 1000000; // Remember, set in kobo!
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [successfulPayment, setSuccessfulPayment] = useState(true);


    const updateUser = () => {
        axios
            .post("/api/users/updateuser", {
                id: "63ab0735e36d6cef61a576eb",
                // email: email,
                course: "Artificial Intelligence",
                duration: 25,
                studentID: Math.floor(Math.random() * 899999 + 100000),
                amountpaid: amount,
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
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

    return (
        <div className='Paystack'>



            <div className="checkout-form">
                <div className="checkout-field">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="checkout-field">
                    <label>Phone</label>
                    <input
                        type="text"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <PaystackButton className="paystack-button" {...componentProps} />
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

export default Paystack;

