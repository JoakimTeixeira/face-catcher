import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="face-wrapper">
      <img className="face-img" alt="" src={imageUrl} />
    </div>
  );
};

export default FaceRecognition;
