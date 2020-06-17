import React from "react";
import "./Logo.css";
import faceId from "./face-id.png";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div>
      <Tilt className="logo" options={{ max: 60 }}>
        <div className="logo-inner">
          <img src={faceId} alt="face id"></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
