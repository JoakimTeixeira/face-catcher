import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <article className="container">
      <main className="signIn">
        <form className="signIn-form">
          <fieldset className="signIn-fieldset">
            <legend className="signIn-legend">Sign In</legend>
            <div className="signIn-wrapper">
              <label className="signIn-label" htmlFor="email-address">
                Email
              </label>
              <input
                className="signIn-input"
                type="email"
                name="email-address"
                id="email-address"
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
              value="Sign in"
            />
            <p className="register">Register</p>
          </div>
        </form>
      </main>
    </article>
  );
};

export default SignIn;
