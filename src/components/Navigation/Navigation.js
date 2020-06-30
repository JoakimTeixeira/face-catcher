import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav className="navigation">
      <p
        onClick={() => onRouteChange("signIn")}
        className="navigation-description"
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
