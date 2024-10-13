import React from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';

import axios from 'axios';

import { useCookies } from 'react-cookie';

import style from './navbar.css';
import logo from './assets/newLogo.png';
import profile from '../../Homepage/Testimonials/assets/profile1.jpg';
import vector from './assets/vector.png';
import search from './assets/searchr.png';
import closee from './assets/close.png';

import { FaUser, FaArrowDown, FaCog, FaCogs } from 'react-icons/fa';

import courseData from "../../CoursePage/coursedata/courseData.json";


function Navbar() {

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const isAuthenticated = (cookies.isAuthenticated === 'true');

  const setAuthToken = token => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  //   Log user out
  useEffect(() => {
    // document.querySelector(".App").style.opacity = 0;
  }, []);
  const logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    setCookie('isAuthenticated', false, { path: '/' });
    removeCookie('FirstName', { path: '/' });
    removeCookie('LastName', { path: '/' });
    removeCookie('Email', { path: '/' });
    removeCookie('Role', { path: '/' });
    window.location.reload();
  };

  const [user, setUser] = useState([]);


  const getUser = (a, b) => {
    axios.get("api/users/fetchusers")
      .then((response) => {
        setUser(response.data.filter(user => { return user.email === cookies.Email }));
      });
  };

  useEffect(() => {
    getUser()
  }, []);



  const offeredCourses = [
    { id: 1, title: "Artificial Intelligence", rating: 4.5, link: "artificialintelligence" },
    { id: 2, title: "Ethical Hacking", rating: 4.5, link: "ethicalhacking" },
    { id: 3, title: "Computer Diploma", rating: 4.5, link: "computerdiploma" },
    { id: 4, title: "Web App Development", rating: 4.5, link: "webdevelopment" },
    { id: 5, title: "Software Engineering", rating: 4.5, link: "softwareengineering" },
    { id: 6, title: "Android/IOS Development", rating: 4.5, link: "androidiosdevelopment" },
    { id: 7, title: "Cyber Security", rating: 4.5, link: "cybersecurity" },
    { id: 8, title: "Graphics Design UI/UX", rating: 4.5, link: "graphicsdesign" },
    { id: 9, title: "CMS/BMS/Database MS", rating: 4.5, link: "databasecourse" },
    { id: 10, title: "Machine Learning", rating: 4.5, link: "machinelearning" },
  ];

  const offeredServices = [
    { id: 1, title: "ICT Training Centre", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 2, title: "Drop Shipping Services", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 3, title: "Web Design and Hosting", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 4, title: "Business Development", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 5, title: "Penetration Testing", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 6, title: "Business Branding", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 7, title: "Data Analysis", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 8, title: "Graphics Design", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 9, title: "Android/IOS Development", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 10, title: "Product Design UI/UX", about: "Progressively incentivize coperative systems through technically sound functionalities" },
    { id: 11, title: "Content Management System", about: "Progressively incentivize coperative systems through technically sound functionalities" },


  ];

  const [openMobile, setopenMobile] = useState(false);
  const [navBarr, setnavBarr] = useState(false);
  const [cmobNavDrop, setcmobNavDrop] = useState(false);
  const [smobNavDrop, setsmobNavDrop] = useState(false);
  const [amobNavDrop, setamobNavDrop] = useState(false);

  const newSearch = () => {
    setnavBarr(value => !value);
  }

  const openMenu = () => {
    setopenMobile(value => !value);
  }

  const closeMenu = () => {
    setopenMobile(value => false);
    window.scrollTo(0, 0);
  }

  const cmobDrop = () => {
    setcmobNavDrop(value => !value);
    if (smobNavDrop) { setsmobNavDrop(value => false); }
    if (amobNavDrop) { setamobNavDrop(value => false); }
  }


  const smobDrop = () => {
    setsmobNavDrop(value => !value);
    if (cmobNavDrop) { setcmobNavDrop(value => false); }
    if (amobNavDrop) { setamobNavDrop(value => false); }
  }

  const amobDrop = () => {
    setamobNavDrop(value => !value);
    if (smobNavDrop) { setsmobNavDrop(value => false); }
    if (cmobNavDrop) { setcmobNavDrop(value => false); }
  }



  //Search Function
  const [query, setQuery] = useState('');
  const [foundQuery, setFoundQuery] = useState([]);

  const handleInputChange = event => {
    setQuery(event.target.value);

    setFoundQuery(Object.values(courseData).filter(el => {
      return el.name.toLowerCase().includes(query.toLowerCase());
    }));

    if (query === "") {
      setFoundQuery([])
    }
    // console.log(query, foundQuery)

  };



  // console.log(Object.values(courseData).filter(el=>{
  // return el.name.toLowerCase().includes("ethic".toLowerCase());
  // }));

  const linkStyle = {
    textDecoration: 'none',
    color: 'unset',
  }

  return (
    <div className='Navbar'>
      <nav style={{ height: navBarr ? '110px' : '62px' }}>
        <Link style={linkStyle} to="/" onClick={closeMenu}>
          {/* <img className='logo' src={logo} /> */}
          <h3 className='logotxt'>TAD <span className='tech'>Tech</span></h3>
        </Link>
        {/* &nbsp;  &nbsp; */}
        <img src={navBarr ? closee : search} alt="" className='mob-search' onClick={newSearch} />
        <div className='items'>
          <ul>
            <li className='coux'><Link onClick={closeMenu} className='nav-link' to="/courses">Courses</Link> <MdKeyboardArrowDown className='vector' /></li>
            <div className="drop-courses">
              <div className="dc-1">
                <h2>Courses</h2>
              </div>
              <div className="dc-2">
                {offeredCourses.map(eachCourse => {
                  return (
                    <Link to={`/courses/${eachCourse.link}`}>{eachCourse.title}</Link>
                  )
                })}
              </div>

            </div>
            <li className='servx'><Link className='nav-link' to="/services">Our Services</Link> <MdKeyboardArrowDown className='vector' /></li>
            <div className="drop-services">
              <div className="dc-1">
                <h2>Services</h2>
              </div>
              <div className="dc-2">
                {offeredServices.map(eachService => {
                  return (
                    <Link to={`/services`}>{eachService.title}</Link>
                  )
                })}
              </div>
            </div>
            <li className='applyx'><Link className='nav-link' to="/application">Apply For</Link> <MdKeyboardArrowDown className='vector' /></li>
            <div className="drop-apply">
              <div className="dc-1">
                <h2>Apply for</h2>
              </div>
              <div className="dc-3">
                <Link className='nav-link' to="/application">1-Month Bootcamp</Link> <br />
                <Link className='nav-link' to="/application">3-Month Regular Course</Link> <br />
                <Link className='nav-link' to="/application">Scholarship</Link>

              </div>
            </div>
          </ul>
        </div>
        <div className='search big-search'>
          <input
            type='text'
            placeholder='Search courses'
            onKeyUp={handleInputChange}
            onChange={handleInputChange}
          ></input>
          <img className='search-icon' src={search} onClick={closeMenu}></img>

          <div className="search-result">
            {
              foundQuery.length === 0 && query !== "" ? <p className="search-result-not-found"><i>'{query}'..</i> does not match any term</p> :
                foundQuery.map(found => {
                  return (
                    <Link to={`/courses/${found.name.replace(/\s/g, '').toLowerCase()}`} className="search-result-link">{found.name}</Link>
                  )
                })
            }
          </div>

        </div>



        <div className='nav-btn'
        >
          <button
            style={{ display: isAuthenticated ? "none" : "" }}
            className='sign gone'><Link style={{ color: 'unset', textDecoration: 'none' }} to="/signin">Sign In</Link></button>
          <button
            style={{ display: isAuthenticated ? "none" : "" }}
            className="gone"
          ><Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Register</Link></button>
          <Link style={{ display: isAuthenticated ? "block" : "none" }} className='nav-dp'>
          {
                user[0]?.profileimage? <img src={`/files/${user[0]?.profileimage}`} /> : <h1 className='dp-alt'>{cookies.FirstName?.slice(0,1)}{cookies.LastName?.slice(0,1)}</h1>
              }
            </Link>
          {/* <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><button
            style={{ display: isAuthenticated ? "" : "none", marginRight: "10px" }}
          ><FaCogs /></button>
          </Link> */}
          <div className="cogs-drop">
            <Link className='cogs-prof' style={{ textDecoration: 'none', color: 'unset' }} to="/dashboard">
              
              
              {
                user[0]?.profileimage? <img src={`/files/${user[0]?.profileimage}`} /> : <h1 className='dp-alt2'>{cookies.FirstName?.slice(0,1)}{cookies.LastName?.slice(0,1)}</h1>
              }
              {/* <img src={`/files/${user[0]?.profileimage}`} /> */}
              <div>
                <h3>{cookies.FirstName} {cookies.LastName}</h3>
                <p>{cookies.Email}</p>
              </div>
            </Link> <hr />
            <Link style={{ textDecoration: 'none', color: 'unset' }} to="/mylearning">My Learning</Link> <hr />
            <Link style={{ textDecoration: 'none', color: 'unset' }} to="/dashboard">Messages</Link> <hr />
            <Link style={{ textDecoration: 'none', color: 'unset' }} to="/editprofile">Edit Profile</Link> <hr />
            <Link style={{ textDecoration: 'none', color: 'unset' }} to="/dashboard">FAQs</Link> <hr />
            <Link style={{ textDecoration: 'none', color: 'unset' }} to="/contactus">Help</Link> <hr />
            <Link style={{ textDecoration: 'none', color: 'unset' }} onClick={logoutUser}>Logout</Link>
          </div>
          <Link style={{ textDecoration: 'none', color: 'white', }} to="/admin"><button
            style={{ display: cookies.Email === "eustacedyke@gmail.com" ? "" : "none", marginRight: "10px" }}
            className="align-admin gone"
          >Admin</button>
          </Link>
          {/* <button
            style={{ display: isAuthenticated ? "" : "none" }}
            onClick={logoutUser}
          >Log Out</button> */}
        </div>
        <div className={openMobile ? 'hamburger change' : 'hamburger'} onClick={openMenu}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>

        <div className='search' id='search2'>
          <input type='text' placeholder='Search courses' onKeyUp={handleInputChange} onChange={handleInputChange}></input>
          <img className='search-icon' src={search} onClick={closeMenu}></img>

          <div className="search-result">

            {
              foundQuery.length === 0 && query !== "" ? <p className="search-result-not-found"><i>'{query}'..</i> does not match any term</p> :
                foundQuery.map(found => {
                  return (
                    <Link to={`/courses/${found.name.replace(/\s/g, '').toLowerCase()}`} className="search-result-link">{found.name}</Link>
                  )
                })
            }
          </div>
        </div>
      </nav>

      <div className={openMobile ? 'mobile inView' : 'mobile'}>

        <h3><Link style={{ fontWeight: 'bold', fontSize: '18px' }} to="/courses" onClick={closeMenu}>Courses</Link><img src={vector} onClick={cmobDrop} style={{ transform: cmobNavDrop ? "rotate(180deg)" : "rotate(0deg)" }}></img></h3>
        <h3><Link style={{ fontWeight: 'bold', fontSize: '18px' }} to="/services" onClick={closeMenu}>Services</Link><img src={vector} onClick={smobDrop} style={{ transform: smobNavDrop ? "rotate(180deg)" : "rotate(0deg)" }}></img></h3>
        <h3><Link style={{ fontWeight: 'bold', fontSize: '18px' }} to="/application" onClick={closeMenu}>Apply</Link><img src={vector} onClick={amobDrop} style={{ transform: amobNavDrop ? "rotate(180deg)" : "rotate(0deg)" }}></img></h3>
        <Link style={linkStyle} to="/aboutus" onClick={closeMenu}><h3>About Us</h3></Link>
        <Link style={linkStyle} to="/contactus" onClick={closeMenu}><h3>Contact Us</h3></Link>
        <div className='nav-btn'>
          <Link style={linkStyle} to="/signin" onClick={closeMenu}>
            <button style={{ display: isAuthenticated ? "none" : "block" }}>Sign In</button>
          </Link>
          <Link style={{ linkStyle }} to="/signup" onClick={closeMenu}>
            <button style={{ display: isAuthenticated ? "none" : "block" }}>Register</button>
          </Link>
          {/* <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard" onClick={closeMenu}><button
            style={{ display: isAuthenticated ? "block" : "none" }}
          ><FaUser /></button>
          </Link> */}
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/admin" onClick={closeMenu}><button
            style={{ display: cookies.Email === "eustacedyke@gmail.com" ? "" : "none" }}
          >Admin</button>
          </Link>
          {/* <button
            style={{ display: isAuthenticated ? "block" : "none" }}
            onClick={logoutUser}
          >Log Out</button> */}
        </div>
        <div className='mobile-course-drop' style={{ height: cmobNavDrop ? "370px" : "0px" }}>
          {offeredCourses.map(eachCourse => {
            return (
              <Link onClick={closeMenu} to={`/courses/${eachCourse.link}`}>{eachCourse.title}</Link>
            )
          })}
        </div>
        <div className='mobile-service-drop' style={{ height: smobNavDrop ? "400px" : "0px" }}>

          {offeredServices.map(eachService => {
            return (
              <Link onClick={closeMenu} to={`/services`}>{eachService.title}</Link>
            )
          })}
        </div>
        <div className='mobile-apply-drop' style={{ height: amobNavDrop ? "110px" : "0px" }}>

          <Link onClick={closeMenu} to="/application">1-Month Bootcamp</Link> <br />
          <Link onClick={closeMenu} to="/application">3-Month Regular Course</Link> <br />
          <Link onClick={closeMenu} to="/applicationg">Scholarship</Link>
        </div>
      </div>



    </div>
  );
}


export default Navbar;
