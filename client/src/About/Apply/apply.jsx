import React from 'react';
import style from './apply.css';
import {Link} from 'react-router-dom';

//Images
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import step4 from './assets/step4.png';

function Apply() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
    }

    return (
        <div className='Apply'>
            <h2>How to Apply</h2>
            <p>You can apply for a scholarship easily in just a few steps</p>

            <div className="applications">
                <div className="applicant">
                    <img src={step1} alt="" />
                    <h3>Click on Apply</h3>
                    <p>Click on the apply button to start the application process</p>
                </div>
                <div className="applicant">
                    <img src={step2} alt="" />
                    <h3>Log In/Sign Up</h3>
                    <p>Login if you already have an account. If you don't have an account, sign up to create one</p>
                </div>
                <div className="applicant">
                    <img src={step3} alt="" />
                    <h3>Fill the Forms</h3>
                    <p>Fill all the forms presented with precise and credible information</p>
                </div>
                <div className="applicant">
                    <img src={step4} alt="" />
                    <h3>Submit Form</h3>
                    <p>Click on the submit button after filling the forms with the needed data</p>
                </div>
            </div>
            
               <Link to="/application"><button>Apply here</button></Link> 
            
        </div>
    );

}

export default Apply;
