import React from "react";
import "./styles.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navigation">
        <p
          onClick={() => onRouteChange("signOut")}
          className="navigation-description"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="navigation">
        <p
          onClick={() => onRouteChange("signIn")}
          className="navigation-description"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="navigation-description"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
