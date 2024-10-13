

import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";



import style from "./classapp.css"

function ImageUpload(props) {

    const [error, setError] = useState();
    const [image, setImage] = useState();

    async function sendImg(e) {
        e.preventDefault();
        document.getElementById('img-modal').style.transform = "scale(0)"



        let imageUrl = "";
           
        const instance = axios.create()

        const data = new FormData()
        data.append("file", image);
        data.append("upload_preset", "eustaceuploads");
        data.append("cloud_name", "djrdbht1u");

        const res = await instance.post(
            "https://api.cloudinary.com/v1_1/djrdbht1u/image/upload/", 
            data
        )
            
                .then((res) => {
                  console.log("response");
                  console.log(res);
                  imageUrl = res.data.url;
                })
                .catch((err) => console.log(err));
            

        

        const submitPost = {
            image: imageUrl,
            topic: props.topic,
        };
        
        
        await axios.post("/api/messages/uploadimage", submitPost)
            .catch(err => {
                console.log(err.response)
            })

    }


return (
    <div className="imageupload">
        <h3>New Image</h3>
        <form
            onSubmit={sendImg}
        >
            <input
                type="file"
                name="picture-message"
                id="pictureMsg"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />

            <button
            className="send-image"
            >upload</button>
        </form>
    </div>
)

}


export default ImageUpload;