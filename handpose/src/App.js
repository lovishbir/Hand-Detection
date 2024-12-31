// Install Dependencies
// Import Dependencies
// Setup Webcam and canvas
// Define references to those
// Loaf Handpose
// Detect function
// Drawing utilities from tensorflow]
// Draw functions



//import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from "react-webcam";
import React, {useRef} from 'react';

import {drawHand} from "./utilities"

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () =>{
    const net = await handpose.load()
    console.log('Handpose model loaded.')
    // Loop and Detect hands
    setInterval(() =>{
      detect(net)
    }, 100)
  };

  const detect = async (net) =>{
    // Check if the data is available
    if (
      typeof webcamRef.current !== "undefined" && 
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){
    // Get the video properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video height and width
      webcamRef.current.video.width =videoWidth;
      webcamRef.current.video.height = videoHeight;
    
    // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

    // Make Detections
    const hand = await net.estimateHands(video);
    console.log(hand);
    
    // Draw the Mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
      } 
    }

  React.useEffect(() => {
    runHandpose();
  })

  
  //const [capturing, setCapturing] = useState(false);
  //const [imgSrc, setImgSrc] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
       <Webcam ref = {webcamRef}
       stule = {{
        position: "absolute",
        marginLeft:"auto",
        marginRight:"auto",
        left:0,
        right:0,
        textAlign:"center",
        zIndex:9,
        width: "640",
        height: "480"
       }}
       />
       <canvas 
        ref = {canvasRef} 
        style={{
          position: "absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right:0,
          textAlign:"center",
          zIndex:9,
          width: "640",
          height: "480"
        }}
        />
      </header>
    </div>
  );
}

export default App;
