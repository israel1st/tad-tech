import React from 'react';
import style from './learn.css';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


import preview from './assets/webinar.png';


function Learn(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [studentID, setStudentID] = useState();

    const [errors, setErrors] = useState({});




    const enterClass = (e) => {

e.preventDefault();

        axios
            .post("/api/users/enterclass", {
                studentID: studentID,
                email: email,

            })
            .then(res => {
                console.log(res.data.hasPaid);
                console.log(res.data.course);
                if (res.data.hasPaid) {
                    console.log(res.data.course.replace(/\s/g, '').toLowerCase());
                    navigate(`/class/${res.data.course.replace(/\s/g, '').toLowerCase()}`);
                }
            })
            .catch((err) => {
                console.log(err)
                setErrors(value => err.response.data)
            })


    }

    const discc = useRef();


    useEffect(() => {
        const scrll = () => {


            if (discc.current.scrollWidth - discc.current.scrollLeft <= discc.current.clientWidth * 1.25) {
                discc.current.scroll(0, 0);
            } else {
                discc.current.scrollBy(240, 0);
            }


        };

        setInterval(scrll, 5000);
    }, []);

    const scrllb = () => {
        discc.current.scrollBy(-240, 0);
    };

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(value => !value);
    }

    return (
        <div className='Learn'>

            {/* <div className="box-1" style={{ display: props.show }}>
                <div className='caption'>
                    <h1>Learn, <span className='tech'>Connect</span><br></br> and Discuss</h1>
                </div>
                <div className="discuss" ref={discc}>
                    <div className="discuss-1">
                        <p>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds</p>
                    </div>
                    <div className="discuss-1">
                        <p>Red dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds</p>
                    </div>
                    <div className="discuss-1">
                        <p>Green dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds</p>
                    </div>
                </div>

                <div className='d1'></div>
                <div className='d2'></div>
                <div className='d3'></div>
                <div className='d4'></div>
            </div> */}
            <div className="box-2">
                <div className='preview'>
                    <img src={preview}></img>
                </div>

                <div className='other'>
                    <h2>Our Scholarship Program</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, modi tempora. Voluptas assumenda officia quisquam. Quidem, similique magni culpa dolores consequatur cumque cupiditate ratione quibusdam eos quo.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure, consectetur sunt repudiandae voluptatum quasi architecto sit aliquam magni inventore! Molestias quia incidunt deleniti.</p>
                    <Link onClick={openModal}><button style={{ display: props.show }}>Apply here</button></Link>
                </div>
            </div>

            <div className="join-modal"
                style={{ transform: modal ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
            >
                <div className="modal-head">
                    <h3></h3><p onClick={() => { setModal(value => false); }} style={{ cursor: 'pointer', textAlign: 'right' }}>&#10006;</p>
                </div>
                <div className='contact-us-form' style={{ backgroundColor: "white" }}>
                    <form action="">

                        <div className="email-add">
                            <label htmlFor="email">Student ID</label> <br />

                            <input
                                type="number"
                                id="email"
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                            <p className='errors'>
                            {errors.idnotfound}
                        </p>
                        </div>
                        <div className="email-add" style={{ display: props.pswShow }}>
                            <label htmlFor="email" >Email</label> <br />
                            <input
                                type="text"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='errors'>
                            {errors.Email}
                            {errors.doesnotmatch}
                        </p>
                        </div>

                        <div className="snd-bttn">
                            <Link to="/application"><button>Register Course</button></Link>
                            <button onClick={enterClass}>Join Course</button>
                        </div>

                        <br />

                        <p
                            style={{ fontSize: "12px", color: "grey" }}
                        >Please, note you can't register for another class once you've signed up for this class
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default Learn;
