import React, { useEffect, useRef, useState} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";

import { drawHand } from '../js/fpose';




function HandPose() {
    const webcamRef = useRef(null);
  const canvasRef = useRef(null);
 

  const runHandpose = async () => {
    const net = await handpose.load();
   
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
   
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

   
      const hand = await net.estimateHands(video);
    //   console.log(hand);

    
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(()=>{runHandpose()},[]);
  
  
    return (
    <>
    
     <div className="flex mt-16 mx-4">
          <div className="w-1/2">
                  <h1 className='text-5xl p-5'> Hand Pose </h1>
                    <p className='p-5 text-2xl'> Handpose models in TensorFlow.js are powerful tools for detecting and analyzing hand poses in images and videos </p> 
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
  )
}

export default HandPose