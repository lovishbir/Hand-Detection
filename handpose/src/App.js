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
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
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
