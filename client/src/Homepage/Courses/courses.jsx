//React
import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

//Style
import style from './courses.css';

//Images
import artificial from '../../CoursePage/coursedata/images/artificial.png';
import andr from '../../CoursePage/coursedata/images/androidcourse.png';
import cyber from '../../CoursePage/coursedata/images/cyber.png';
import dbase from '../../CoursePage/coursedata/images/database.png';
import diploma from '../../CoursePage/coursedata/images/diploma.png';
import gdesign from '../../CoursePage/coursedata/images/gdesign.png';
import ehack from '../../CoursePage/coursedata/images/hacking.png';
import machinee from '../../CoursePage/coursedata/images/machine.png';
import softw from '../../CoursePage/coursedata/images/software.png';
import webdev from '../../CoursePage/coursedata/images/webdev.png';

//Icons
import arrow from './assets/vector-right.png';
import { useState } from 'react';



function Courses(props) {


    const offeredCourses = [
        { id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5, link: "artificialintelligence" },
        { id: 2, title: "Ethical Hacking Course", preview: ehack, rating: 4.5, link: "ethicalhacking" },
        { id: 3, title: "Computer Diploma Course", preview: diploma, rating: 4.5, link: "computerdiploma" },
        { id: 4, title: "Web App Development Course", preview: webdev, rating: 4.5, link: "webdevelopment" },
        { id: 5, title: "Software Engineering Course", preview: softw, rating: 4.5, link: "softwareengineering" },
        { id: 6, title: "Android/IOS Development Course", preview: andr, rating: 4.5, link: "androidiosdevelopment" },
        { id: 7, title: "Cyber Security Course", preview: cyber, rating: 4.5, link: "cybersecurity" },
        { id: 8, title: "Graphics Design UI/UX Course", preview: gdesign, rating: 4.5, link: "graphicsdesign" },
        { id: 9, title: "CMS/BMS/Database MS Course", preview: dbase, rating: 4.5, link: "databasecourse" },
        { id: 10, title: "Machine Learning Course", preview: machinee, rating: 4.5, link: "machinelearning" },
    ];

    const carrd = useRef();
    const indicate = useRef();

    const scrll = () => {
        carrd.current.scrollBy(240, 0);
    };

    const scrllbck = () => {
        carrd.current.scrollBy(-240, 0);
    };


    var zts = -3;
    // const [zts, setZts] = useState(-3);

    const jumpto = (a) => {
        zts = -3 + (24.5 * a);
        // setZts(-3 + (24.5*a));
        indicate.current.style.marginLeft = `${zts}px`;
        carrd.current.scroll(200 * a, 0);

        // setZys(val => !val)
        // console.log(zys);
    }


    const autScrll = () => {

        if (carrd.current.scrollWidth - carrd.current.scrollLeft <= carrd.current.clientWidth * 1) {
            carrd.current.scroll(0, 0);
            zts = -3;
            // setZts(-3);
            indicate.current.style.marginLeft = `${zts}px`;

        } else {
            carrd.current.scrollBy(250, 0);

            zts += 24.5;
            // setZts(val => val + 24.5);
            indicate.current.style.marginLeft = `${zts}px`;
            console.log(carrd.current.scrollWidth - carrd.current.scrollLeft, zts);
        }


    };
    useEffect(() => {

        const interval = setInterval(autScrll, 3000);
        return () => clearInterval(interval);

    }, [zts]);


    const linkStyle = {
        textDecoration: 'none',
        color: 'unset',
    }

    return (
        <div className='Courses'>

            <h2 className={props.headStyle}>{props.theHead}</h2>

            <div className="course-cards" ref={carrd}>
                {offeredCourses.map(eachCourse => {
                    return (
                        <div key={eachCourse.id} className="course-card">
                            <div>
                                <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
                            </div>
                            <div className="EOC">
                            <span><h4>{eachCourse.title.toUpperCase()}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam accusamus at quibusdam nostrum.</p>
                            </span>
                            <button className='rating'>&#9733; {eachCourse.rating}</button>

                            {/* <hr /> */}
                            <div>
                            <Link style={linkStyle} to={`/courses/${eachCourse.link}`}><button className='more'>LEARN MORE</button></Link>
                            <Link style={linkStyle} to={`/courses/${eachCourse.link}`}><button style={{ color: "white", backgroundColor: "#f07c08" }} className='more'>REGISTER</button></Link>
                       </div>
                       </div>
                       </div>
                    )
                })}

            </div>

            {/* <button onClick={()=>{jumpto(3)}}>brfygvuyhru</button> */}
            {/* <div className="arrow-b">
                <img onClick={scrllbck} src={arrow} alt="" />
            </div>

            <div className="arrow">
                <img onClick={scrll} src={arrow} alt="" />
            </div> */}

            {/* <div className="all">
             <Link to="/courses"><button>View all courses</button></Link>
            </div> */}
            <div className="ind-container">
                <div className='indicator-serv'>
                    <div className='c7' ref={indicate}></div>
                    {offeredCourses.slice(0, offeredCourses.length - 2).map(eachCourse => {
                        return (
                            <div key={eachCourse.id} className="c2"></div>
                        )
                    })
                    }
                </div>
            </div>


        </div>
    );

}

export default Courses;
