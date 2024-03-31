import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel style={{ width: "900px", height: "500px", borderRadius: "30px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Carousel.Item interval={3000}>
        <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/11/11/Pictures/recognition-holding-female-doctor-stethoscope-surgery-uniform_270dcba8-03f9-11ea-8324-1e09595151a0.jpg" alt="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "0px 0px 20px 20px", padding: "20px" }}>
          <h3 style={{ color: "white", fontSize: "2rem" }}>Catch the expression</h3>
          <p style={{ color: "white", fontSize: "1.2rem" }}>Capturing Emotions: The Art of Face Detection</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="./img1.png" alt="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "0px 0px 20px 20px", padding: "20px" }}>
          <h3 style={{ color: "white", fontSize: "2rem" }}>Get started....!</h3>
          <p style={{ color: "white", fontSize: "1.2rem" }}>Unlocking the Potential of Face Analysis</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="./img2.png" alt="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "0px 0px 20px 20px", padding: "20px" }}>
          <h3 style={{ color: "white", fontSize: "2rem" }}>Upload the Image</h3>
          <p style={{ color: "white", fontSize: "1.2rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="./img3.png" alt="" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "0px 0px 20px 20px", padding: "20px" }}>
          <h3 style={{ color: "white", fontSize: "2rem" }}>Catch the expression</h3>
          <p style={{ color: "white", fontSize: "1.2rem" }}>Capturing Emotions: The Art of Face Detection</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
