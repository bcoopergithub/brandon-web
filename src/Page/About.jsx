import React from "react";
import Layout from '../component/Background';
import { createPopper } from "@popperjs/core";


function About(props) {


  return (
    
   <>
   <Layout></Layout>
   <div className="h-full flex justify-center content-center">
   <div className="flex flex-col justify-center">
  <p className = "text-3xl text-center mb-3">Royal Women Hospital</p>
  <iframe
  width="800"
  height="650"
  style={{border:0,borderRadius:"10px"}}
//   loading="lazy"
  allowFullScreen
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBHjb_zh7t6r6c9zEvWf4RvYBU8qFoDF4U&q=The+Royal+Women's+Hospital,melbourne+VIC&zoom=18">
</iframe>

  </div>
  </div>
   </>
   
  );
}

export default About;
