import React from 'react';

import style from './form.css';


function Form(props) {

    return (
      

            <div className='contact-us-form'>
                <form action="">
                    <div className="firstlast" style={{display: props.nameShow}}>
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
                    <div className="email-add" style={{display: props.pswShow}}>
                        <label htmlFor="password" >Password</label> <br />
                        <input type="password" />
                    </div>
                    <div className="your-msg" style={{display: props.msgShow}}>
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="snd-btn">
                        <button>{props.buttonContent}</button>
                    </div>

                </form>
            </div>
    );

}

export default Form;
