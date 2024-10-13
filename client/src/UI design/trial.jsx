//React
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
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



function CourseMobile() {


    const offeredCourses = [
        { id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5 },
        { id: 2, title: "Ethical Hacking Course", preview: ehack, rating: 4.5 },
        { id: 3, title: "Computer Diploma Course", preview: diploma, rating: 4.5 },
        { id: 4, title: "Web App Development Course", preview: webdev, rating: 4.5 },
        { id: 5, title: "Software Engineering Course", preview: softw, rating: 4.5 },
        { id: 6, title: "Android/IOS Development Course", preview: andr, rating: 4.5 },
        { id: 7, title: "Cyber Security Course", preview: cyber, rating: 4.5 },
        { id: 8, title: "Graphics Design UI/UX Course", preview: gdesign, rating: 4.5 },
        { id: 9, title: "CMS/BMS/Database MS Course", preview: dbase, rating: 4.5 },
        { id: 10, title: "Machine Learning Course", preview: machinee, rating: 4.5 },


    ];

    // const carrd = useRef();

    // const scrll = () => {
    //     carrd.current.scrollBy(240,0);
    // };

    // const scrllbck = () => {
    //     carrd.current.scrollBy(-240,0);
    // };


    const [checked, setChecked] = useState(false);
    const toggleChecked = () => setChecked(value => !value);

    return (
        <div className='CourseMobile'>
            {courseCategories.map(eachCat => {
                return (
                <div className='whole' style={{ height: isOpen === eachCat.id ? '500px' : '10.9vw' }}>
                    <div className='course-category'>
                        <h3>{eachCat.title}</h3>
                        <img src={caret} alt="" onClick={() => toggleChecked(eachCat.id)} style={{ transform: isOpen === eachCat.id ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </div>
                    <div className="draw">
                        <div className="course-cards">
                            {eachCat.content.map(eachCox => {
                                return (
                                    <div key={eachCox.id} className="course-card">
                                        <div>
                                            <img className='course-img' src={eachCox.preview} alt={eachCox.title}></img>
                                        </div>
                                        <span><h4>{eachCox.title}</h4><button className='rating'>&#9733; {eachCox.rating}</button></span>
                                        <button className='more'>Learn More <img src='' alt="" /></button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                )
            })
            }


            <div className='whole' style={{ height: isOpen === 1 ? '500px' : '10.9vw' }}>
                <div className='course-category'>
                    <h3>JavaScript</h3>
                    <img src={caret} alt="" onClick={() => toggleChecked(1)} style={{ transform: isOpen === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </div>
                <div className='draw'>
                    <div className="course-cards" ref={carrd}>
                        {offeredCourses.map(eachCourse => {
                            return (
                                <div key={eachCourse.id} className="course-card">
                                    <div>
                                        <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
                                    </div>
                                    <span><h4>{eachCourse.title}</h4><button className='rating'>&#9733; {eachCourse.rating}</button></span>
                                    <button className='more'>Learn More <img src='' alt="" /></button>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>

        </div>
    );

}

export default CourseMobile;
