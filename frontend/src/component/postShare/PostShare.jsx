import React, { useRef, useState } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes
} from "@iconscout/react-unicons";

const PostShare = () => {
    const [image,setImage]=useState(null)
    const imageRef=useRef()

    const onImageChange=(e)=>{
        console.log(e)
        if(e.target.files && e.target.files[0]){
            let img=e.target.files[0];
            setImage({
                image:URL.createObjectURL(img)
            })
        }
    }

  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOption">
          <div className="option"
          style={{color:'var(--photo)'}}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" 
          style={{color:'var(--video)'}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" 
          style={{color:'var(--location)'}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option"
          style={{color:'var(--shedule)'}}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button">
            Share
          </button>
          <div style={{display:'none'}}>
            <input type='file' name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {
            image && (
                <div className="previewImage">
                    <UilTimes onClick={()=>setImage(null)}/>
                    <img src={image.image} alt='' />
                </div>
            )
        }
      </div>
    </div>
  );
};

export default PostShare;
