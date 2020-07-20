import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <section className="detect">
      <p> This magic app will detect faces in your pictures. Give it a try. </p>
      <div className="detect-form">
        <input className="detect-input" type="text" onChange={onInputChange} />
        <button className="detect-btn" onClick={onPictureSubmit}>
          Detect
        </button>
      </div>
    </section>
  );
};

export default ImageLinkForm;
