import React from 'react';
import style from './about.css';

//Components
import AboutHero from './AboutHero/aboutHero';
import WhyWork from './WhyWork/whyWork';
import Learn from '../Homepage/Learn/learn';
import Apply from './Apply/apply';
import Team from './Team/team';
import Ideas from '../Homepage/Ideas/ideas';
import Enroll from '../Layout/Enroll/enroll';

//Images
// import logo from "../Layout/Navigation/assets/newLogo.png";


function About() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#f78b26'
    }

    return (
        <div className='About'>
            <AboutHero />
            <WhyWork />

            <div className="about2">
                <div className="about-2bg">

                </div>
                <div className="about-2txt">
                    <h2>
                        Lorem Ipsum is simply dummy text of the printing and types
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi modi aut temporibus odio facere! Ex debitis dolor sit voluptatibus
                        impedit autem nam cumque pariatur ad quibusdam vero maiores dolores, ipsa nihil
                        distinctio soluta laudantium fugiat placeat? Praesentium odio numquam
                        ut debitis quas illo libero dolores.
                        Blanditiis dolores illo quam nemo.
                    </p>
                </div>
            </div>

            <Learn show="none"/>
            <Apply/>
            <Team/>
            <Ideas/>
            <Enroll/>

        </div>
    );

}

export default About;
