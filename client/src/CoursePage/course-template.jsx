import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import axios from 'axios';



import style from './course-template.css';


import cert from './assets/Certificate.png';
import clock from './assets/Clock.png';
import beginner from './assets/Beginner.png';
import bioo from '../Homepage/Testimonials/assets/profile.png';

import Enroll from '../Layout/Enroll/enroll';
import Courses from '../Homepage/Courses/courses';

import News from '../News/news';


function CourseTemplate(props) {

    const syllabus = [
        { week: 1, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)" },
        { week: 2, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)" },
        { week: 3, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)" },
        { week: 4, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)" },
        { week: 5, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)" },
        { week: 6, lesson: "Color Contrast", task: "Colors should pass the WCAG 2.1 Level AA (4.5:1)" },
    ]


    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [studentID, setStudentID] = useState();

    const [errors, setErrors] = useState({});




    const enterClass = (e) => {

e.preventDefault();

        axios
            .post("/api/users/enterclass", {
                studentID: studentID,
                email: email,

            })
            .then(res => {
                console.log(res.data.hasPaid);
                console.log(res.data.course);
                if (res.data.hasPaid) {
                    console.log(res.data.course.replace(/\s/g, '').toLowerCase());
                    navigate(`/class/${res.data.course.replace(/\s/g, '').toLowerCase()}`);
                }
            })
            .catch((err) => {
                console.log(err)
                setErrors(value => err.response.data)
            })


    }


    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(value => !value);
    }



    return (
        <div className='CyberSec' key={props.currCourse.id}>
            <div className="cyber-1">
                <div className="segment-1">
                    <h1>Introduction to {props.currCourse.name}</h1>

                    <div className="introduction">
                        <div className="frame">
                            <img src={props.curxPreview}></img>
                        </div>
                        <p>{props.currCourse.intro}</p>
                    </div>

                    <div className="course-details">
                        <div className='tails'>
                            <img src={clock} alt="" />
                            <div>
                                <h5>{props.currCourse.duration} weeks</h5>
                                <h5 style={{ fontWeight: 400 }}>3 - 6 hours per week</h5>
                            </div>
                        </div>
                        <div className='tails'>
                            <img src={beginner} alt="" />
                            <h5>Beginner level</h5>
                        </div>
                        <div className='tails'>
                            <img src={cert} alt="" />
                            <h5>Digital certificate</h5>
                        </div>

                    </div>

                    <div className="segment-2">
                        <div className="about-course">
                            <h3>About this Course</h3>
                            <p>sed odio lacus tempor elit lobortis, cursus tincidunt ullamcorper dui leo. quis viverra laoreet eget placerat scelerisque eget vitae porta massa psum quam vel Utfrtyuf jhfyhioooippk hgoootvg

                                orem. scelerisque non. non. ex varius Nullam amet, enim. non. in id amet, ipsum elit vitae ac

                            </p>
                            <p>sed odio lacus tempor elit lobortis, cursus tincidunt ullamcorper dui leo. quis viverra laoreet eget placerat scelerisque eget vitae porta massa psum quam vel Utfrtyuf jhfyhioooippk hgoootvg

                                orem. scelerisque non. non. ex varius Nullam amet, enim. non. in id amet, ipsum elit vitae ac

                            </p>
                            <p>sed odio lacus tempor elit lobortis, cursus tincidunt ullamcorper dui leo. quis viverra laoreet eget placerat scelerisque eget vitae porta massa psum quam vel Utfrtyuf jhfyhioooippk hgoootvg

                                orem. scelerisque non. non. ex varius Nullam amet, enim. non. in id amet, ipsum elit vitae ac

                            </p>

                            <div>
                                <h5>{props.currCourse.students} already enrolled on this course</h5>
                                <div className='soon'>
                                    <h4>Starts Soon</h4>
                                    <button onClick={openModal}>Join Course</button>
                                </div>
                            </div>
                        </div>
                        <div className="news-cat">
                            <h4>News categories</h4>
                            <News />
                        </div>
                    </div>

                    <div className="segment-3">
                        <h3>Syllabus</h3>
                        <table className='syllabus'>
                            {syllabus.map(eachWeek => {
                                return (
                                    <>
                                        <tr>
                                            <td>Week {eachWeek.week}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{eachWeek.lesson}</td>
                                            <td>{eachWeek.task}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </table>

                        <h3>Explore new skills</h3>
                        <p>Equip yourself with the essential skills, confidence and competence to assist you in your chosen industry.</p>

                        <h3>Who is this course for?</h3>
                        <p>This course is suitable for all skill levels and backgrounds. Whether you want to advance your career prospects, learn a new skill, or broaden your educational horizons this course will help you to gain a solid understanding of the core competencies required to drive a successful career in your chosen industry.</p>

                        {/* <h3>More courses you might like</h3> */}
                        <div className="extra-courses">
                            <Courses theHead="More courses you might like" headStyle="alt-h2" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="cyber-2">
                <h3>Reviews</h3>
                <div className="reviews">
                    <div className='review'>
                        <div className='person'>
                            <img src={bioo} alt="" />
                            <div>
                                <h5>Екатерина Лужецкая</h5>
                                <p>месяц назад</p>
                                <p className='rated'> &#11089; &#11089; &#11089; &#11089; &#11089; </p>
                            </div>
                        </div>
                        <p>Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были незначительные ошибки, но ребята сразу их исправляли. В целом все работает стабильно. Сотрудничаем дальше.</p>
                    </div>
                    <div className='review'>
                        <div className='person'>
                            <img src={bioo} alt="" />
                            <div>
                                <h5>Екатерина Лужецкая</h5>
                                <p>месяц назад</p>
                                <p> &arrow; </p>
                            </div>
                        </div>
                        <p>Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были незначительные ошибки, но ребята сразу их исправляли. В целом все работает стабильно. Сотрудничаем дальше.</p>
                    </div>
                    <div className='review'>
                        <div className='person'>
                            <img src={bioo} alt="" />
                            <div>
                                <h5>Екатерина Лужецкая</h5>
                                <p>месяц назад</p>
                                <p> &arrow; </p>
                            </div>
                        </div>
                        <p>Пишу отзыв спустя 4 месяца после сдачи проекта. В течении этого времени были незначительные ошибки, но ребята сразу их исправляли. В целом все работает стабильно. Сотрудничаем дальше.</p>
                    </div>
                </div>
            </div>

            <div className="join-modal"
                style={{ transform: modal ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
            >
                <div className="modal-head">
                    <h3></h3><p onClick={() => { setModal(value => false); }} style={{ cursor: 'pointer', textAlign: 'right' }}>&#10006;</p>
                </div>
                <div className='contact-us-form' style={{ backgroundColor: "white" }}>
                    <form action="">

                        <div className="email-add">
                            <label htmlFor="email">Student ID</label> <br />

                            <input
                                type="number"
                                id="email"
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                            <p className='errors'>
                            {errors.idnotfound}
                        </p>
                        </div>
                        <div className="email-add" style={{ display: props.pswShow }}>
                            <label htmlFor="email" >Email</label> <br />
                            <input
                                type="text"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='errors'>
                            {errors.Email}
                            {errors.doesnotmatch}
                        </p>
                        </div>

                        <div className="snd-bttn">
                            <Link to="/application"><button>Register Course</button></Link>
                            <button onClick={enterClass}>Join Course</button>
                        </div>

                        <br />

                        <p
                            style={{ fontSize: "12px", color: "grey" }}
                        >Please, note you can't register for another class once you've signed up for this class
                        </p>

                    </form>
                </div>
            </div>

            <Enroll />
        </div>
    );

}

export default CourseTemplate;
