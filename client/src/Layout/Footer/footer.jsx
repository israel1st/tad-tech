//React
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//Style
import style from './footer.css';

//Icons
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import phone from './assets/phone.png';
import location from './assets/location.png';
import mail from './assets/mail.png';


function Footer() {

    const footerr = useRef();

    // const chck = () => {
        
    // var fromTheTop = footerr.current.getBoundingClientRect().top;

    
    // if (window.pageYOffset > fromTheTop) {
    //     footerr.current.style.transform = 'translateX(0%)';
    // } else {
    //     footerr.current.style.transform = 'translateX(-100%)';
    // }

    // console.log(window.pageYOffset);
    // console.log(footerr.current.getBoundingClientRect().top);

    //     };

    //     useEffect(() => {
   
    //         window.removeEventListener('scroll', chck);
    //         window.addEventListener('scroll', chck, { passive: true });
    //         return () => window.removeEventListener('scroll', chck);
    //     }, []);

    const goUp = () => {
        window.scrollTo(0,0);
      }


    return (
        <div className='Footer' ref={footerr}>
            <div className="footer-1">
                <ul>
                    <li><h5>Company Info</h5></li> <br />
                    <li><Link onClick={goUp} to="/aboutus">About Us</Link></li>
                    <li><Link onClick={goUp} to="/contactus">Contact</Link></li>
                    <li><Link onClick={goUp} to="/courses">Courses</Link></li>
                </ul>
                <ul>
                    <li><h5>Explore</h5></li> <br />
                    <li><Link onClick={goUp} to="/services">Services</Link></li>
                    <li><Link onClick={goUp} to="/application">Apply For</Link></li>
                    <li><Link onClick={goUp} to="/courses">Courses</Link></li>
                    <li><Link onClick={goUp} to="/courses">FAQs</Link></li>
                    <li><Link onClick={goUp} to="/">Join Us</Link></li>
                </ul>
                <ul>
                    <li><h5>Get In Touch</h5></li> <br />
                    <li><a href="tel:+2348030426679"><img src={phone} alt="" />+234 803 042 6679, +234 915 505 4181</a></li>
                    <li><a href=""><img src={location} alt="" />50 Apara Link Road, Rumuigbo PH</a></li>
                    <li><a href="mailto:tadcreativenetwork@gmail.com"><img src={mail} alt="" />Tadcreativenetwork@gmail.com</a></li>
                </ul>
                
            </div>
            <div className="footer-2">
                <p>&copy; TAD Tech by Tad Creative Network. All rights reserved</p>
                <div className="socials">
                    <a><img src={facebook} alt="facebook" /></a>
                    <a><img src={instagram} alt="instagram" /></a>
                    <a><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
    );

}

export default Footer;
