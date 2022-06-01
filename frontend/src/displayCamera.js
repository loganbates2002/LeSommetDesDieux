import React, { useState } from "react";

const DisplayCamera = () => {
return (
  <div>
   <img
    src="http://localhost:4999/video_feed"
    alt="Video"
    height="200"
   />
  </div>
 );
};

export default DisplayCamera;