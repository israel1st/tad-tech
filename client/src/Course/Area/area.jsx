

import React from 'react';
import { Link } from 'react-router-dom';
import style from './area.css';
import artificial from './assets/artificial.png';
import arrow from './assets/vector-right.png';

//Images
import andr from '../../CoursePage/coursedata/images/androidcourse.png';
import cyber from '../../CoursePage/coursedata/images/cyber.png';
import dbase from '../../CoursePage/coursedata/images/database.png';
import diploma from '../../CoursePage/coursedata/images/diploma.png';
import gdesign from '../../CoursePage/coursedata/images/gdesign.png';
import ehack from '../../CoursePage/coursedata/images/hacking.png';
import machinee from '../../CoursePage/coursedata/images/machine.png';
import softw from '../../CoursePage/coursedata/images/software.png';
import webdev from '../../CoursePage/coursedata/images/webdev.png';



function Area() {

    const offeredCourses = [
        {id: 1, title: "Artificial Intelligence Course", preview: artificial, rating: 4.5, link: "artificialintelligence"},
        {id: 2, title: "Ethical Hacking Course", preview: ehack, rating: 4.5, link: "ethicalhacking"},
        {id: 3, title: "Computer Diploma Course", preview: diploma, rating: 4.5, link: "computerdiploma"},
        {id: 4, title: "Web App Development Course", preview: webdev, rating: 4.5, link: "webdevelopment"},
        {id: 5, title: "Software Engineering Course", preview: softw, rating: 4.5, link: "softwareengineering"},
        {id: 6, title: "Android/IOS Development Course", preview: andr, rating: 4.5, link: "androidiosdevelopment"},
        {id: 7, title: "Cyber Security Course", preview: cyber, rating: 4.5, link: "cybersecurity"},
        {id: 8, title: "Graphics Design UI/UX Course", preview: gdesign, rating: 4.5, link: "graphicsdesign"},
        {id: 9, title: "CMS/BMS/Database MS Course", preview: dbase, rating: 4.5, link: "databasecourse"},
        {id: 10, title: "Machine Learning Course", preview: machinee, rating: 4.5, link: "machinelearning"},
       ];

    return (
        <div className='Area'>

           <h2>Explore Our Courses</h2>

           

            <div className="main-course">

                {offeredCourses.map(eachCourse => {
                    return (
                        <div key={eachCourse.id} className="course-card">
                            <img className='course-img' src={eachCourse.preview} alt={eachCourse.title}></img>
                            <span><h4>{eachCourse.title}</h4><button className='rating'>&#9733; {eachCourse.rating}</button></span>
                            <Link style={{ textDecoration: 'none' }} to={`/courses/${eachCourse.link}`}><button className='more'>Learn More</button></Link>
                        </div>
                    )
                })}

                
            </div>
        </div>
    );

}

export default Area;