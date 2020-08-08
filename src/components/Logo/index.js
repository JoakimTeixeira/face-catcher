import React from "react";
import "./styles.css";
import faceId from "./face-id.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <section>
      <Tilt className="logo" options={{ max: 60 }}>
        <div className="logo-inner">
          <img src={faceId} alt="face id"></img>
        </div>
      </Tilt>
    </section>
  );
};

export default Logo;
