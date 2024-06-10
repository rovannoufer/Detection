import React, { useRef } from 'react';
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from '../js/pose';


function Pose() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runPosenet = async () => {
        const net = await posenet.load({
          inputResolution: { width: 640, height: 480 },
          scale: 0.8,
        });
        //
        setInterval(() => {
          detect(net);
        }, 100);
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
    
          
          const pose = await net.estimateSinglePose(video);
          
    
          drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
        }
      };


      const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;
    
        drawKeypoints(pose["keypoints"], 0.6, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
      };
    
      runPosenet();

  return (
    <>
    
    <div className="flex mt-16 mx-4">
         <div className="w-1/2">
                 <h1 className='text-5xl p-5'> Pose Estimation </h1>
                   <p className='p-5 text-2xl'>PoseNet is a machine learning model developed by Google that can estimate human body pose (or posture) 
                    from a single image or video frame works by detecting keypoints like your shoulder
                    ,elbows, hips, wrists, knees and ankles </p> 
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

export default Pose