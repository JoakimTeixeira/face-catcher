import React from "react";
import "../SignIn/SignIn.css";

const Register = ({ onRouteChange }) => {
  return (
    <article className="container">
      <main className="signIn">
        <div className="signIn-form">
          <fieldset className="signIn-fieldset">
            <legend className="signIn-legend">Register</legend>
            <div className="signIn-wrapper">
              <label className="signIn-label" htmlFor="name">
                Name
              </label>
              <input
                className="signIn-input"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="signIn-wrapper">
              <label className="signIn-label" htmlFor="password">
                Password
              </label>
              <input
                className="signIn-input"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="signIn-wrapper">
            <input
              onClick={() => onRouteChange("home")}
              className="signIn-input signIn-btn"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
