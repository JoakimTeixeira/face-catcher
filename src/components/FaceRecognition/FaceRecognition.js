import React, { Fragment } from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="face-center">
      <div className="face-wrapper">
        <img id="inputImage" className="face-img" alt="" src={imageUrl} />
        <div
          className="face-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
