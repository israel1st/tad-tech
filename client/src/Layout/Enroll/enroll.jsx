import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import style from './enroll.css';
import { useEffect } from 'react';


import mail from '../../Homepage/Certificate/assets/mail.png'

function Enroll() {


    const enroller = useRef();


    const linkStyle = {
        textDecoration: 'none',
        color: 'unset',
    }

    // const chck = () => {

    // console.log(enroller.current.getBoundingClientRect().top);
    // var fromTheTop = enroller.current.getBoundingClientRect().top;

    // if (window.pageYOffset > fromTheTop) {
    //     enroller.current.style.transform = 'translateX(0%)';
    // } else {
    //     enroller.current.style.transform = 'translateX(-100%)';
    // }
    //     };



    // useEffect(() => {

    //     window.removeEventListener('scroll', chck);
    //     window.addEventListener('scroll', chck, { passive: true });
    //     return () => window.removeEventListener('scroll', chck);
    // }, []);


    return (
        <div className='Enroll' ref={enroller}>
            <div className="enroll-1">
                <h1 className='tech'>GET STARTED</h1>
                <h2>Break into the tech industry like a pro</h2>
                <button> <Link style={linkStyle} to='/application'>Enroll now</Link></button>
                <br /> <br /> <br />
                <div className="enroll-1-form">
                       <h2>Subscribe to our newsletter</h2>
                <form>
                    <input type="email" placeholder='Your Email' />
                    <button>Send</button>
                </form>
                </div>
             
            </div>
            <div className="enroll-2 certificate-2">
                <img src={mail} alt="" />
                <h1>Subscribe to our newsletter</h1>
                <p>Register to receive exclusive updates from TAD Tech Creative</p>
                <form>
                    <input type="email" placeholder='Your Email' />
                    <button>Send</button>
                </form>
            </div>
        </div>
    );

}

export default Enroll;
