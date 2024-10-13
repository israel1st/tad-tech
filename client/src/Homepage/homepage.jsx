
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BsFillChatDotsFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

import { IoMdSend } from "react-icons/io";
import { BsArrowRight } from 'react-icons/bs';

import style from './homepage.css';

import Hero from './Hero/hero';
import Services from './Services/services';
import Ideas from './Ideas/ideas';
import Learn from './Learn/learn';
import Courses from './Courses/courses';
import Testimonials from './Testimonials/testimonials';
import Certificate from './Certificate/certificate';
import Enroll from '../Layout/Enroll/enroll';
import CourseMobile from './CourseMobile/coursemobile';

import ServiceHero from '../Service/ServiceHero/serviceHero';


//Images
import webdez from '../Service/ServiceHero/assets/webdesign.png';
import graphdez from '../Service/ServiceHero/assets/graphdesign.png';
import analyt from '../Service/ServiceHero/assets/analytics.png';
import arti from '../Service/ServiceHero/assets/arti.png';
import cybrr from '../Service/ServiceHero/assets/cybrr.png';
import drops from '../Service/ServiceHero/assets/drops.png';
import hckng from '../Service/ServiceHero/assets/hckng.png';
import iandroid from '../Service/ServiceHero/assets/iandroid.png';
import webber from '../Service/ServiceHero/assets/webber.png';

import cybb from '../CoursePage/coursedata/icons/cybb.png';
import dbicon from '../CoursePage/coursedata/icons/dbicon.png';
import diplo from '../CoursePage/coursedata/icons/diplo.png';
import soft from '../CoursePage/coursedata/icons/soft.png';


//icons
import learner from './assets/learn.png';
import servi from './assets/servi.png';
import appr from './assets/apps.png';
import oneone from './assets/chat.webp';
import editorial from './assets/editorial.png';


function Homepage() {

  const learnn = [
    { id: 1, title: "Web Development", icon: webber, link: "/courses/webdevelopment" },
    { id: 2, title: "Artificial Intelligence", icon: arti, link: "/courses/artificialintelligence" },
    { id: 3, title: "Ethical Hacking", icon: hckng, link: "/courses/ethicalhacking" },
    { id: 4, title: "Android/IOS Course", icon: iandroid, link: "/courses/androidiosdevelopment" },

    { id: 5, title: "Computer Diploma Course", icon: diplo, link: "/courses/computerdiploma" },
    { id: 6, title: "Software Engineering Course", icon: soft, link: "/courses/softwareengineering" },
    { id: 7, title: "Cyber Security Course", icon: cybb, link: "/courses/cybersecurity" },
    { id: 8, title: "Graphics Design UI/UX Course", icon: graphdez, link: "/courses/graphicsdesign" },
    { id: 9, title: "Database MS Course", icon: dbicon, link: "/courses/databasecourse" },



  ];
  const offerss = [
    { id: 1, title: "Graphics Design", icon: graphdez },
    { id: 2, title: "Web Design and Hosting", icon: webdez },

    { id: 3, title: "ICT Training Centre", icon: analyt },
    { id: 4, title: "Business Development", icon: analyt },

    { id: 5, title: "Business Branding", icon: analyt },
    { id: 6, title: "Android/IOS Development", icon: analyt },
    { id: 7, title: "Content Management System", icon: analyt },

    { id: 8, title: "Data Analysis", icon: analyt },

    { id: 9, title: "Drop Shipping", icon: drops },




  ];
  const otherss = [
    { id: 1, title: "Cryptovest", icon: webber },
    { id: 2, title: "Graphics Design", icon: graphdez },
    { id: 3, title: "Web Design and Hosting", icon: webdez },
    { id: 4, title: "Drop Shipping", icon: drops },
    { id: 5, title: "Data Analysis", icon: analyt },
    { id: 6, title: "Artificial Intelligence", icon: arti },
    { id: 7, title: "Ethical Hacking", icon: hckng },
    { id: 8, title: "Android/IOS Course", icon: iandroid },
    { id: 9, title: "Android/IOS Course", icon: iandroid },


  ];



  var [deezTags, setDeezTags] = useState(learnn);
  var [styl, setStyl] = useState(1);

  const showLearn = () => {
    setDeezTags(learnn);
    setStyl(value => 1)
  }
  const showServices = () => {
    setDeezTags(offerss);
    setStyl(value => 2)
  }
  const showOthers = () => {
    setDeezTags(otherss);
    setStyl(value => 3)
  }

  const [chatModal, setChatModal] = useState(false);
  const [chat, setChat] = useState(false);


  useEffect(() => {
    setTimeout(() => { setChat(true) }, 3000)
  }, []);

  return (
    <div className="Homepage">

      <div className="filterr">
        <div className="filterr-box">
          <p onClick={showLearn} style={{ background: styl === 1 ? "black" : "none", color: styl === 1 ? "white" : "black" }}>
            <img src={learner} style={{ filter: styl === 1 ? "invert(100)" : "invert(0)" }} alt="" />
            Learn</p>
          <p onClick={showServices} style={{ background: styl === 2 ? "black" : "none", color: styl === 2 ? "white" : "black" }}>
            <img src={servi} style={{ filter: styl === 2 ? "invert(100)" : "invert(0)" }} alt="" />
            Services</p>
          <p onClick={showOthers} style={{ background: styl === 3 ? "black" : "none", color: styl === 3 ? "white" : "black" }}>
            <img src={appr} style={{ filter: styl === 3 ? "invert(100)" : "invert(0)" }} alt="" />
            Apps</p>
        </div>
      </div>

      <TiMessages style={{ display: chat ? "" : "none" }} className='chat-pop-up' onClick={() => { setChatModal(val => !val) }} />
      {/* <div className="pop-up-modal">
  <form action="">
    <input type="text" placeholder='Name' /> <br />
    <input type="email" placeholder='Email'/> <br />
    <input type="text" placeholder='Subject'/> <br />
    <textarea placeholder='Message...' name="" id="" cols="30" rows="10"></textarea>
    <button>Send</button>
  </form>
</div> */}

      <div className="pop-up-modal"
        style={{ display: chat ? "" : "none" }}
      >

        <fieldset>
          <p className='kuloz' onClick={() => { setChat(false) }}>&#10006;</p>

          <div>
            <h4 style={{ textAlign: "left" }}>Chat with us</h4>
            <p style={{ textAlign: "left", color: "grey", fontSize: "smaller" }}>Hello, is there anything I can help you with today?</p>
            <img src={oneone} />
            {/* <p className='me-chat'>Hey, there</p>
    <p className='you-chat'>Hey, there</p>
    <p className='me-chat'>Hey, there</p>
    <p className='you-chat'>Hey, there</p> */}
          </div>
          <form action="">
            <input type="text" placeholder='Message' style={{ width: "76%" }} />
            <IoMdSend className='xend' />
          </form>

        </fieldset>
      </div>
      <ServiceHero theTags={deezTags} theBG="service-banner2" />

      {/* <Hero/> */}

      {/* <Services/> */}

      {/* <Ideas/> */}

      <div className="homeCourses">
        <Courses theHead="Explore Our Courses" headStyle="Courses-h2" />
      </div>

      <div className="homeCoursesMobile">
        <CourseMobile />
      </div>

      <Learn />
      <Testimonials />

      <div className="home-about">
      <div className="home-about1">
        <div>
          <h3>TAD <span className='tech'>Tech</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolores velit suscipit, quis earum officia?</p>
          <br /> <br />
          <Link to="/aboutus" className='ha-li'>ABOUT US &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <BsArrowRight/></Link>
        </div>
        <div className='ha-ab'>
          <img src={editorial} alt="" />
        </div>

      </div>
      </div>


      <Certificate />
      <Enroll />

    </div>
  );
}

export default Homepage;
