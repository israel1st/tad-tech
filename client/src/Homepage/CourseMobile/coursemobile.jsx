//React
import React from 'react';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

//Style
import style from './coursemobile.css';

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
import caret from './assets/vector.png';
import arrow from './assets/vector-right.png';




function CourseMobile() {


    const offeredCourses = [
        { id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5, category: "javascript", link: "artificialintelligence" },
        { id: 2, title: "Ethical Hacking Course", preview: ehack, rating: 4.5, category: "datascience", link: "ethicalhacking" },
        { id: 3, title: "Computer Diploma Course", preview: diploma, rating: 4.5, category: "datascience", link: "computerdiploma" },
        { id: 4, title: "Web App Development Course", preview: webdev, rating: 4.7, category: "javascript", link: "webdevelopment" },
        { id: 5, title: "Software Engineering Course", preview: softw, rating: 4.5, category: "excel", link: "softwareengineering" },
        { id: 6, title: "Android/IOS Development Course", preview: andr, rating: 4.5, category: "excel", link: "androidiosdevelopment" },
        { id: 7, title: "Cyber Security Course", preview: cyber, rating: 4.7, category: "excel", link: "cybersecurity" },
        { id: 8, title: "Graphics Design UI/UX Course", preview: gdesign, rating: 4.5, category: "javascript", link: "graphicsdesign" },
        { id: 9, title: "CMS/BMS/Database MS Course", preview: dbase, rating: 4.7, category: "datascience", link: "databasecourse" },
        { id: 10, title: "Machine Learning Course", preview: machinee, rating: 4.5, category: "javascript", link: "machinelearning" },


    ];


    // To filter the categories
    var javaScript = offeredCourses.filter(obj => {
        return obj.category === "javascript"
    })

    var dataScience = offeredCourses.filter(obj => {
        return obj.category === "datascience"
    })

    var excelCourse = offeredCourses.filter(obj => {
        return obj.category === "excel"
    })


    const courseCategories = [
        {
            id: 1,
            title: "Javascript",
            content: javaScript,

        },

        {
            id: 2,
            title: "Excel",
            content: excelCourse,

        },

        {
            id: 3,
            title: "Data Science",
            content: dataScience,

        },

        {
            id: 4,
            title: "Python",
            content: dataScience,

        },

        {
            id: 5,
            title: "Design",
            content: dataScience,

        },


    ]


    // courseCategories.map(eachCat => {
    useEffect(() => {
        // document.querySelector(".Layout").style.opacity = 0;
    }, []);
    // })



    const [checked, setChecked] = useState(0);
    const [isOpen, setisOpen] = useState(0);




    const toggleChecked = (a) => {
        setChecked(value => a);

        if (checked === a && isOpen === a) {
            setisOpen(value => 0);

            // setisOpen(value => a);
        }
        else {
            setisOpen(value => a);
        }


    }

    const carrd = useRef([]);



    const autScrll = () => {

        if (checked > 0) {
            if (carrd.current[checked].scrollWidth - carrd.current[checked].scrollLeft <= carrd.current.clientWidth * 1.25) {
                carrd.current[checked].scroll(0, 0);

            } else {
                carrd.current[checked].scrollBy(200, 0);
                // carrd.current[checked].style.border = '2px solid red';
            }
        }

    };

    setInterval(autScrll, 6000);


    const linkStyle = {
        textDecoration: 'none',
        color: 'unset',
    }

    return (
        <div className='CourseMobile'>

            <h2>Explore Our Courses</h2>

            {courseCategories.map(eachCat => {
                return (
                    <div className={isOpen === eachCat.id ? 'whole gettr' : 'whole'} style={{ height: isOpen === eachCat.id ? '500px' : '10.9vw' }}>
                        <div className='course-category'>
                            <h3>{eachCat.title}</h3>
                            <img src={caret} alt="" onClick={() => toggleChecked(eachCat.id)} style={{ transform: isOpen === eachCat.id ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </div>
                        <div className="draw">
                            <div className="course-cards" ref={(element) => { carrd.current[eachCat.id] = element }}>
                                {eachCat.content.map(eachCox => {
                                    return (
                                        <div key={eachCox.id} className="course-card">
                                            <div>
                                                <img className='course-img' src={eachCox.preview} alt={eachCox.title}></img>
                                            </div>
                                            <div className="EOC">
                                                <span><h4>{eachCox.title.toUpperCase()}</h4><button className='rating'>&#9733; {eachCox.rating}</button></span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsam accusamus at quibusdam nostrum.</p>
                                            </div>
                                            <Link style={linkStyle} to={`/courses/${eachCox.link}`}><button className='more'>LEARN MORE</button></Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                )
            })
            }




        </div>
    );

}

export default CourseMobile;
