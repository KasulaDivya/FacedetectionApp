import React, { useState, useEffect, useRef } from 'react';
import * as faceapi from "face-api.js";
import Spinner from './spinner';
//import './apps.css'; // Import CSS file for styling

function Newpost({ image }) {
  const { url } = image;
  const imgRef = useRef();
  const canvasRef = useRef();
  const [expressions, setExpressions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state

  const handleImage = async () => {
    const detections = await faceapi.detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    const canvas = canvasRef.current;
    canvas.innerHTML = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvas, { width: 500, height: 500 });
    const resized = faceapi.resizeResults(detections, { width: 500, height: 500 });

    faceapi.draw.drawDetections(canvas, resized);
    faceapi.draw.drawFaceExpressions(canvas, resized);

    if (resized.length > 0) {
      setExpressions(resized[0].expressions);
    }
    setIsLoading(false); // Set loading state to false after handling image
  };

  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        ]);
        handleImage();
      } catch (error) {
        console.log("Error loading models:", error);
        setIsLoading(false); // Set loading state to false if there's an error
      }
    };

    imgRef.current && loadModels();
  }, []);

  const goBack = () => {
    window.location.reload();
  };

  return (
    <div className='container'>
      <div className='left'>
        <img ref={imgRef} crossOrigin="anonymous" src={url} alt="" className="image" width={500} height={500} />
        {isLoading ? <Spinner /> : null}
 {/* Display loading indicator */}
        <canvas ref={canvasRef} width={500} height={500} className="canvas" />
      </div>
      <div className='right'>
        <h2>Detected Expressions</h2>
        <ul>
          {Object.entries(expressions).map(([expression, probability]) => (
            <li key={expression}>
              {`${expression}: ${Math.round(probability * 100)}%`}
            </li>
          ))}
        </ul>
        <button onClick={goBack}>Go back</button>
      </div>
    </div>
  );
}

export default Newpost;




