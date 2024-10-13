import React from 'react';

import style from './contact.css';

//Icons
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import linkedin from './assets/linkedin.png';

//Components
import Form from '../Form/form';


function Contact() {

    return (
        <div className='Contact'>
            <div className="contactHero">
                <div className='ah-first'>
                    <div>
                        <hr />
                        <h5>CONTACT US</h5>
                    </div>
                    <h1>
                        We'd Love to hear from you
                    </h1>
                    <p>
                        Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details
                    </p>
                </div>
                <div className='ah-first'>
                    <h4>Let's talk!</h4>
                    <p>+234 803 042 6679, +234 915 505 4181</p>

                    <h4>Email Address</h4>
                    <p>Tadcreativenetwork@gmail.com</p>
                    <h4>Office</h4>
                    <p>50 Apara Link Road, Rumuigbo PH</p>
                    <div className='space'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>

            <div className='contact-us-form'>
                <form action="">
                    <div className="firstlast">
                        <div className="firstn">
                            <label htmlFor="firstname">First Name</label> <br />
                            <input type="text" />
                        </div>
                        <div className="lastn">
                            <label htmlFor="lastname">Last Name</label> <br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className="email-add">
                        <label htmlFor="email">Email Address</label> <br />
                        <input type="email" />
                    </div>
                    <div className="your-msg">
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="snd-btn">
                        <button>Submit</button>
                    </div>

                </form>
            </div>


            <div className="maprouter">
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=50%20Apara%20Link%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
        </div>
    );

}

export default Contact;
