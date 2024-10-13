import React from 'react';
import style from './serviceBody.css';
import { useRef } from 'react';



//Images

import thisImg from '../../CoursePage/coursedata/images/cyber.png';
import prof from '../../Homepage/Testimonials/assets/profile.png';

function ServiceBody() {

    const serviceTestimonials = [
        { id: 1, name: "Small Yefessah", title: "CEO, Ifringwa", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
        { id: 2, name: "Djamilia Malak", title: "Co-Founder, RabaKabya", Pimage: prof, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, reiciendis blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit." },

    ];

    const carrd = useRef();
    const indicate = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240,0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240,0);
    };

    return (
        <div className='ServiceBody'>
            <div className="sbody-1">
                <h1>Our Services</h1>
                <p>With our awesome team, we offer a variety of services from UI/UX design to business branding. Our
                    goal is to help you on your road to create your product
                </p>
                <div>
                    <button>
                        Let's Talk &#128172;
                    </button>
                    <span><h5>Check our Projects</h5> &rarr;</span>
                </div>
            </div>
            <div className="sbody-2">
                <div className='get1'>
                    <h4>ICT Training Center</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error mollitia nemo accusantium deleniti quos natus maiores ipsam!
                    </p>
                </div>
                <div className='get2'>
                    <img src={thisImg} alt="" />
                </div>
            </div>
            <div className="sbody-3">
                <h2>Learn, <span className="tech">Connect</span> and Discuss</h2>
                <div className="sframe">
                    <iframe src="https://www.youtube.com/embed/bJzb-RuUcMU" frameBorder="0"></iframe>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus.</p>
                        <ul>
                            <li>Lorem ipsum is simply</li>
                            <li>Lorem ipsum is simply</li>
                            <li>Lorem ipsum is simply</li>
                            <li>Lorem ipsum is simply</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sbody-4">
                <h5>
                    Testimonial
                </h5>

                <h2>
                    You still hesitate about working with us? <br />
                    Check what they say about us
                </h2>

                <div className="sTest" ref={carrd}>

                    {serviceTestimonials.map(eachServiceTest => {
                        return (
                            <div key={eachServiceTest.id} className="tester">
                                <p>{eachServiceTest.comment}</p>
                                <div className="in-tester">
                                    <img src={eachServiceTest.Pimage} alt={eachServiceTest.name} />
                                    <div>
                                        <h5>{eachServiceTest.name}</h5>
                                        <p>{eachServiceTest.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>

                <div className="sbutton">
                    <button onClick={scrllbck}>&larr;</button>
                    <button onClick={scrll}>&rarr;</button>
                </div>
            </div>



        </div>
    );

}

export default ServiceBody;
