

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import style from './admin.css';

import courseData from "../CoursePage/coursedata/courseData.json";




function Admin() {


    const [students, setStudents] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [paidStudents, setPaidStudents] = useState([]);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [duration, setDuration] = useState('');
    const [studentID, setStudentID] = useState('');
    const [amountpaid, setAmountpaid] = useState('');

    // console.log(studentID);
    const [dashDisplay, setDashDisplay] = useState(1);



    const getUsers = (a, b, c) => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                // console.log(response.data);
                setStudents(response.data.filter(students => { return students.role === "student" }).reverse());
                setPaidStudents(response.data.filter(students => { return students.role === "student" && students.hasPaid }).reverse());
                setInstructors(response.data.filter(instructors => { return instructors.role === "instructor" }).reverse());
            });

        document.getElementById(a).style.display = "none";
        document.getElementById(b).style.display = "block";
        document.getElementById(c).style.display = "none";
    };

    const deleteUser = (a) => {



        axios
            .post("/api/users/deleteuser", { id: a })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

    }

    const [adminEdit, setAdminEdit] = useState(0);
    const [adminDelete, setAdminDelete] = useState(0);


    const updateUser = (a) => {
        axios
            .post("/api/users/updateuser", {
                id: a,
                firstname: firstname,
                lastname: lastname,
                email: email,
                course: course,
                duration: duration,
                studentID: studentID,
                amountpaid: amountpaid,

            })
            .then(res => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setAdminEdit(0)

    }

    useEffect(() => {
        getUsers('instructor-data', 'student-data', 'paid-student-data')
    }, []);

    const Courss = Object.keys(courseData);

    // console.log((Math.floor(Math.random() * 8999999999 + 1000000000)))

    const linkStyle = {
        textDecoration: 'none',
        color: 'unset',
        textAlign: "center"
      }


    return (
        <div className='Admin'>
            <div className='admin-a'>
                <div className='get-users'>
                    <button onClick={() => { getUsers('instructor-data', 'student-data', 'paid-student-data') }}>All Students</button>
                    <hr /> <br />
                    <button onClick={() => { getUsers('instructor-data','paid-student-data', 'student-data') }}>Paid Students</button>
                    <hr /> <br />
                    <button onClick={() => { getUsers('student-data', 'instructor-data', 'paid-student-data') }}>Instructors</button>
                    <hr /> <br />
                    <Link className='admin-link' to="/post" >Post News</Link>
                    <hr />

                </div>
            </div>

            <div className='admin-b'>
                <div id='student-data'>
                    <h2>Students</h2>
                    {/* <button onClick={()=>{setStudents(students.filter(a => { return a.date.slice(0,4) === "2022" }).reverse())}}>filter</button> */}
                    <table className='std-table'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date Registered</th>
                            <th>Course</th>
                            <th>Course Duration</th>
                            <th>Student ID</th>
                            <th>Amount Paid</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                        {students.map(student => {
                            return (
                                <tr>
                                    <td>{student.firstname} {student.lastname}
                                        <input
                                            onChange={(e) => { setFirstname(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='first name' />
                                        <input
                                            onChange={(e) => { setLastname(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='last name' />
                                    </td>
                                    <td>{student.email}
                                        <input
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='email' placeholder='email' />
                                    </td>
                                    <td>{student.date.slice(0, 10)}</td>
                                    <td>{student.course}
                                        <select
                                            onChange={(e) => { setCourse(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit'>
                                            <option value="">Choose a course</option>
                                            {/* <option value="Web Development">Web Development</option>
                                            <option value="Graphics Design">Graphics Design</option>
                                            <option value="Python">Python</option> */}
                                            {Courss.map(eachCourse => {
                                                return (

                                                    <option value={courseData[eachCourse].name}>{courseData[eachCourse].name}</option>

                                                )
                                            })}
                                        </select>
                                    </td>
                                    <td>{student.duration} weeks
                                        <input
                                            onChange={(e) => { setDuration(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='number' placeholder='duration' />
                                    </td>
                                    <td>{student.studentID}
                                        <input
                                            value={studentID}
                                            // onChange={(e)=>{setStudentID(e.target.value)}}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='student id' />
                                        <button
                                            onClick={(e) => { setStudentID(Math.floor(Math.random() * 8999999999 + 1000000000)) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='student id'>
                                            Generate ID
                                        </button>
                                        {/* <p>{studentID}</p> */}
                                    </td>
                                    <td>{student.amountpaid}
                                        <input
                                            onChange={(e) => { setAmountpaid(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='number' placeholder='amount' />
                                    </td>
                                    <td>{student.date.slice(0, 4)}</td>
                                    <td className='actions'>
                                        <button style={{ display: adminEdit === students.indexOf(student) + 1 ? "none" : "" }} onClick={() => { setAdminDelete(students.indexOf(student) + 1) }}>Delete</button>
                                        {
                                            adminEdit === students.indexOf(student) + 1 ? <>
                                                <button onClick={() => { updateUser(student._id) }}>Update</button>
                                                <button onClick={() => { setAdminEdit(0) }}>Cancel</button>
                                            </> : <button onClick={() => { setAdminEdit(students.indexOf(student) + 1); setAdminDelete(0) }}>Edit</button>

                                        }

                                        <div className='delete-modal'
                                            style={{ display: adminDelete === students.indexOf(student) + 1 ? "" : "none" }}
                                        >
                                            <p>Are you sure you want to delete this user?</p>
                                            <h5><i>"{student.firstname} {student.lastname}"</i></h5> <br />
                                            <button onClick={() => { setAdminDelete(0) }}>No</button> <br />
                                            <button onClick={() => { deleteUser(student._id) }}>Yes</button>
                                        </div>


                                    </td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>



                <div id='paid-student-data'>
                    <h2>Paid Students</h2>
                    {/* <button onClick={()=>{setStudents(students.filter(a => { return a.date.slice(0,4) === "2022" }).reverse())}}>filter</button> */}
                    <table className='std-table'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date Registered</th>
                            <th>Course</th>
                            <th>Course Duration</th>
                            <th>Student ID</th>
                            <th>Amount Paid</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                        {paidStudents.map(student => {
                            return (
                                <tr>
                                    <td>{student.firstname} {student.lastname}
                                        <input
                                            onChange={(e) => { setFirstname(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='first name' />
                                        <input
                                            onChange={(e) => { setLastname(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='last name' />
                                    </td>
                                    <td>{student.email}
                                        <input
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='email' placeholder='email' />
                                    </td>
                                    <td>{student.date.slice(0, 10)}</td>
                                    <td>{student.course}
                                        <select
                                            onChange={(e) => { setCourse(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit'>
                                            <option value="">Choose a course</option>
                                            {/* <option value="Web Development">Web Development</option>
                                            <option value="Graphics Design">Graphics Design</option>
                                            <option value="Python">Python</option> */}
                                            {Courss.map(eachCourse => {
                                                return (

                                                    <option value={courseData[eachCourse].name}>{courseData[eachCourse].name}</option>

                                                )
                                            })}
                                        </select>
                                    </td>
                                    <td>{student.duration} weeks
                                        <input
                                            onChange={(e) => { setDuration(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='number' placeholder='duration' />
                                    </td>
                                    <td>{student.studentID}
                                        <input
                                            value={studentID}
                                            // onChange={(e)=>{setStudentID(e.target.value)}}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='student id' />
                                        <button
                                            onClick={(e) => { setStudentID(Math.floor(Math.random() * 8999999999 + 1000000000)) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='student id'>
                                            Generate ID
                                        </button>
                                        {/* <p>{studentID}</p> */}
                                    </td>
                                    <td>{student.amountpaid}
                                        <input
                                            onChange={(e) => { setAmountpaid(e.target.value) }}
                                            style={{ display: adminEdit === students.indexOf(student) + 1 ? "" : "none" }} className='admin-edit' type='number' placeholder='amount' />
                                    </td>
                                    <td>{student.date.slice(0, 4)}</td>
                                    <td className='actions'>
                                        <button style={{ display: adminEdit === students.indexOf(student) + 1 ? "none" : "" }} onClick={() => { setAdminDelete(students.indexOf(student) + 1) }}>Delete</button>
                                        {
                                            adminEdit === students.indexOf(student) + 1 ? <>
                                                <button onClick={() => { updateUser(student._id) }}>Update</button>
                                                <button onClick={() => { setAdminEdit(0) }}>Cancel</button>
                                            </> : <button onClick={() => { setAdminEdit(students.indexOf(student) + 1); setAdminDelete(0) }}>Edit</button>

                                        }

                                        <div className='delete-modal'
                                            style={{ display: adminDelete === students.indexOf(student) + 1 ? "" : "none" }}
                                        >
                                            <p>Are you sure you want to delete this user?</p>
                                            <h5><i>"{student.firstname} {student.lastname}"</i></h5> <br />
                                            <button onClick={() => { setAdminDelete(0) }}>No</button> <br />
                                            <button onClick={() => { deleteUser(student._id) }}>Yes</button>
                                        </div>


                                    </td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>


                <div id='instructor-data'>
                    <h2>Instructors</h2>
                    {/* <button onClick={()=>{setStudents(students.filter(a => { return a.date.slice(0,4) === "2022" }).reverse())}}>filter</button> */}
                    <table className='std-table'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date Registered</th>
                            <th>Course</th>
                            <th>Course Duration</th>
                            {/* <th>Student ID</th> */}
                            {/* <th>Amount Paid</th> */}
                            {/* <th>Year</th> */}
                            <th>Actions</th>
                        </tr>
                        {instructors.map(instructor => {
                            return (
                                <tr>
                                    <td>{instructor.firstname} {instructor.lastname}
                                        <input
                                            onChange={(e) => { setFirstname(e.target.value) }}
                                            style={{ display: adminEdit === instructors.indexOf(instructor) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='first name' />
                                        <input
                                            onChange={(e) => { setLastname(e.target.value) }}
                                            style={{ display: adminEdit === instructors.indexOf(instructor) + 1 ? "" : "none" }} className='admin-edit' type='text' placeholder='last name' />
                                    </td>
                                    <td>{instructor.email}
                                        {instructors.indexOf(instructor)}
                                        <input
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            style={{ display: adminEdit === instructors.indexOf(instructor) + 1 ? "" : "none" }} className='admin-edit' type='email' placeholder='email' />
                                    </td>
                                    <td>{instructor.date.slice(0, 10)}</td>
                                    <td>{instructor.course}
                                        <select
                                            onChange={(e) => { setCourse(e.target.value) }}
                                            style={{ display: adminEdit === instructors.indexOf(instructor) + 1 ? "" : "none" }} className='admin-edit'>
                                            <option value="">Choose a course</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Graphics Design">Graphics Design</option>
                                            <option value="Python">Python</option>
                                        </select>
                                    </td>
                                    <td>{instructor.duration} weeks
                                        <input
                                            onChange={(e) => { setDuration(e.target.value) }}
                                            style={{ display: adminEdit === instructors.indexOf(instructor) + 1 ? "" : "none" }} className='admin-edit' type='number' placeholder='duration' />
                                    </td>

                                    <td>
                                        <button style={{ display: adminEdit === instructors.indexOf(instructor) + 1 ? "none" : "" }} onClick={() => { setAdminDelete(instructors.indexOf(instructor) + 1) }}>delete</button>
                                        {
                                            adminEdit === instructors.indexOf(instructor) + 1 ? <>
                                                <button onClick={() => { updateUser(instructor._id) }}>Update</button>
                                                <button onClick={() => { setAdminEdit(0) }}>Cancel</button>
                                            </> : <button onClick={() => { setAdminEdit(instructors.indexOf(instructor) + 1); setAdminDelete(0) }}>Edit</button>

                                        }

                                        <div className='delete-modal'
                                            style={{ display: adminDelete === instructors.indexOf(instructor) + 1 ? "" : "none" }}
                                        >
                                            <p>Are you sure you want to delete this user?</p>
                                            <h5><i>"{instructor.firstname} {instructor.lastname}"</i></h5> <br />
                                            <button onClick={() => { setAdminDelete(0) }}>No</button> &nbsp; &nbsp;
                                            <button onClick={() => { deleteUser(instructor._id) }}>Yes</button>
                                        </div>


                                    </td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>

            </div>
        </div>
    );

}

export default Admin;
