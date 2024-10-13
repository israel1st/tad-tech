import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { useState } from "react";

import React from 'react';


import './news.css';

import ht from "./assets/new.png";

function Post() {

    const [newsTitle, setNewsTitle] = useState("");
    const [newsBody, setNewsBody] = useState("");
    const [newsImg, setNewsImg] = useState("");
    const [count, setCount] = useState(1);

    const navigate = useNavigate();

    const [files, setFiles] = useState([]);
    function handleChange(e) {
        console.log(e.target.files);
        setFiles([...files, URL.createObjectURL(e.target.files[0])]);
        console.log(files);
        setCount(count => count + 1);
        setNewsBody(val => val + `\n<IMAGE ${count}>\n`);
        console.log(indices);
    }

    const [mainPrev, setMainPrev] = useState([]);
    function mainImg(e) {
        setNewsImg(e.target.files[0]);
        setMainPrev(URL.createObjectURL(e.target.files[0]));
    }


    async function postNews(e) {

        e.preventDefault();

        // let imageUrl = "";

        const instance = axios.create()

        const data = new FormData()
        data.append("file", newsImg);
        data.append("title", newsTitle);
        data.append("story", newsBody);
        // data.append("upload_preset", "eustaceuploads");
        // data.append("cloud_name", "djrdbht1u");

        // const res = await instance.post(
        //     "https://api.cloudinary.com/v1_1/djrdbht1u/image/upload/",
        //     data
        // )

        //     .then((res) => {
        //         console.log(res);
        //         imageUrl = res.data.url;
        //     })
        //     .catch((err) => console.log(err));


        //     let multipleUrl = [];

            // for (const file of files) {
            //     const dat = new FormData()
            //     dat.append("file", file);
            //     dat.append("upload_preset", "eustaceuploads");
            //     dat.append("cloud_name", "djrdbht1u");
            
            //     const ress = await instance.post("https://api.cloudinary.com/v1_1/djrdbht1u/image/upload/", dat)
            //         .then((res) => { multipleUrl.push(res.data.url) })
            //         .catch((err) => console.log(err));
            // }
            
            const thePost = {
                title: newsTitle,
                story: newsBody,
                // image: imageUrl,
                // imageArray: multipleUrl
            }


        await axios
            .post("/api/messages/postnews", data)
            .then(navigate(`/courses/webdevelopment`))
            .catch(err => {
                const errors = err.response.data;
                console.log(err.response.data)
            });

    };

    // var str = "I learned to play the Ukulele in Lebanon."
    var regex = /<IMAGE>/gi, result, indices = [];
    while ( (result = regex.exec(newsBody)) ) {
        indices.push(result.index);
    }
    // console.log(indices);


    return (
        <div className='contact-us-form postnews'>
            <form onSubmit={postNews}>

                <input type="text" placeholder="Title..." onChange={(e) => { setNewsTitle(value => e.target.value) }} /> <br /> <br />



                <textarea placeholder="News..." name="" id="" cols="30" rows="20" value={newsBody} onChange={(e) => { setNewsBody(value => e.target.value) }}>

                </textarea> <br />
                <img className="main-news-preview" src={mainPrev} /><br />

                <input type="file" name="" id="" accept="image/*" onChange={mainImg} /> <br />

                <button>Post</button>

            </form>


            <div className="news-img-previews">

                <input type="file" onChange={handleChange} />

                {
                    files.map(file => {
                        return (
                            <>
                                <img src={file} />
                                <b>IMAGE {files.indexOf(file) + 1}</b> <br /> <br />
                            </>
                        )
                    })
                }
            </div>

        </div>
    );

}

export default Post;
