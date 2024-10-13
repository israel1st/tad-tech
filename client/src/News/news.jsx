import React from 'react';
import style from './news.css';

import { Link } from 'react-router-dom';

import { useRef, useEffect, useState } from 'react';


//Images
import neww from "./assets/new.png";

import axios from 'axios';


function News() {


    // const blogPosts = [
    //     { id: 1, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
    //     { id: 2, title: "HTML, CSS and Js", preview: neww, author: "Kolade John", duration: 6 },
    //     { id: 3, title: "ReactJs", preview: neww, author: "John Smash", duration: 10 },
    //     { id: 4, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
    //     { id: 5, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
    //     { id: 6, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
    //     { id: 7, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
    //     { id: 8, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },
    //     { id: 9, title: "Lorem ipsum news", preview: neww, author: "John Smash", duration: 5 },


    // ];

   

    const [blogPosts, setBlogPosts] = useState([]);

    const getNews = () => {
        axios.get("api/messages/fetchnews")
            .then((response) => {
                console.log(response)
                setBlogPosts(response.data.reverse());
            })
            .catch(err => {
                console.log(err)
            })
            
            ;
    };

 useEffect(() => {
        getNews()
    }, []);

    const newws = useRef();

   
    var zts = -3;



    useEffect(() => {
        const autScrll = () => {

            if (newws.current.scrollWidth - newws.current.scrollLeft <= newws.current.clientWidth * 1.25) {
                newws.current.scrollLeft = 0;
                zts = -3;

            } else {
                newws.current.scrollBy(300, 0);

                zts += 17.2;
        
            }


        };
        setInterval(autScrll, 3000);
    }, []);



    return (
        <div className='news' ref={newws}>


            {blogPosts.map(eachBlog => {
                return (
                    <Link key={eachBlog.id} className="news-1" to={`/news/${eachBlog.title.split(' ').join('-').toLowerCase()}`}>
                        <img src={eachBlog.image} alt=""></img>
                        <div>
                            <span>
                                {/* <button>Admin</button> */}
                                {/* {`.${eachBlog.duration}min`} */}
                            </span>
                            <h4>{eachBlog.title}</h4>
                            <p>{eachBlog.story.slice(0,70)}...</p>
                        </div>
                    </Link>
                )
            })}

{/* <button onClick={getNews}>get</button> */}
        </div>
    );

}

export default News;
