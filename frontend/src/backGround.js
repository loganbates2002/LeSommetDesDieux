import React, { useState, useEffect, useRef } from "react";
import './imageStyle.css'
import * as faceapi from "face-api.js";
import skyBackground from "./images/blueskybackground.png";
import mountainBackground from "./images/mountainthirdrange.png";
import mountainMiddle from "./images/mountainMiddle.png";
import mountainTop from "./images/mountainTop.png";

var topOffset = -200;
var middleOffset = -200;
var bottomOffset = -200;
var xAxis = 0;

const Background = () => {
  {/*}

  https://www.youtube.com/watch?v=wVK3HHbli7g // video of background


  const [axis, setAxis] = useState([{}])


  useEffect(() => {
    fetch("/members").then( //fetching members rout from backend
      res => res.json() // turn into json
    ).then(
      axis => {
        setAxis(axis) // set data to res using setData 
        console.log(axis)
      }
    )
  }, [])
*/}

  const imgRef = useRef();
  const canvasRef = useRef();

  const handleImage = async() => {
    const detections = await faceapi.detectAllFaces(
      imgRef.current,
      new faceapi.TinyFaceDetectorOptions())
      //.withFaceLandmarks()
      //.withFaceDescriptors();

      console.log(detections)
      if(detections[0]){
        xAxis = detections[0]._box._x
        console.log(xAxis)
      }
  }

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      ])
      .then(handleImage)
      .catch((e) => console.log(e));
    };

    imgRef.current && loadModels();
  }, []);
return (
  <div>
    {/*}
    {(typeof axis.members === 'undefined') ? ( // if data.members is undefined then show loading message 
          <h1>Loading...</h1> 
        ) : (
          axis.members.map((member, index) => ( // if data.members is defined then map through data.members and show each member
            <p key={index}>{member}</p>
        ))
      )} */}
    <img
      ref = {imgRef}
      src="http://localhost:4999/video_feed"
      alt="Video"
      width="540"
      height="250"
      crossOrigin='anonymous'
    />
    <canvas ref={canvasRef} width="940" height="250"/>

    <div className="image-stack">
      <img 
        style={{marginLeft: topOffset}}
        className="image-stack__item--top"
        src={mountainTop}
        alt="Mountain Top"
      />
      <img 
        style={{marginLeft: middleOffset}}
        className="image-stack__item--middle"
        src={mountainMiddle}
        alt="Mountain Middle"
      />
      <img 
        style={{marginLeft: bottomOffset}}
        className="image-stack__item--bottom"
        src={mountainBackground}
        alt="Mountain background"
      />
      <img 
        className="image-stack__item--sky"
        src={skyBackground}
        alt="Blue sky background"
      />
    </div>
  </div>
 );
};

export default Background;