
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "../js/utilities";
import './App.css'
import { NavLink } from "react-router-dom";

function Detect() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
 
  const runCoco = async () => {
    // console.log(webcamRef)
    const net = await cocossd.load();
  
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    console.log(webcamRef.current);
    
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx); 
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (

    <>
    
     <div className="flex mt-16 mx-4">
          <div className="w-1/2">
                  <h1 className='text-5xl p-5'> Object Detection </h1>
                    <p className='p-5 text-2xl'>Object detection is a technique that uses neural networks 
                      to localize and classify objects in images. This computer vision task has a wide range of applications, 
                      from medical imaging to self-driving cars. Object detection is a computer vision task that aims to locate objects in digital images </p> 
           </div>
       <div>
       <Webcam
              ref={webcamRef}
              muted={true} 
              style={{
                
                position: "absolute",
                right: 15,
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
    
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                right: 15,
                zindex: 8,
                width: 640,
                height: 480,
              }}
            /> 
       </div> 
     </div>
    </>
  
  );
}

export default Detect;