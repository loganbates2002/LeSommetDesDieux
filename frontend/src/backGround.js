import React, { useState, useEffect } from "react";
import './imageStyle.css'
import skyBackground from "./images/blueskybackground.png";
import mountainBackground from "./images/mountainthirdrange.png";
import mountainMiddle from "./images/mountainMiddle.png";
import mountainTop from "./images/mountainTop.png";

var topOffset = -200;
var middleOffset = -200;
var bottomOffset = -200;

const Background = () => {
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

return (
  <div>
    {(typeof axis.members === 'undefined') ? ( // if data.members is undefined then show loading message 
          <h1>Loading...</h1> 
        ) : (
          axis.members.map((member, index) => ( // if data.members is defined then map through data.members and show each member
            <p key={index}>{member}</p>
        ))
      )} 
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