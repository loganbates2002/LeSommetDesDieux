import React, { useState } from "react";

const DisplayCamera = () => {
return (
  <div style={{textAllign: 'center'}}>
   <img
    src="http://localhost:4999/video_feed"
    alt="Video"
    height="250"
   />
  </div>
 );
};

export default DisplayCamera;