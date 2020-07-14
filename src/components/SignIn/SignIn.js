import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  // Connect to API Rest using HTTP
  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data === "success") {
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="container">
        <main className="signIn">
          <div className="signIn-form">
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
                  onChange={this.onEmailChange}
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
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="signIn-wrapper">
              <input
                onClick={this.onSubmitSignIn}
                className="signIn-input signIn-btn"
                type="submit"
                value="Sign in"
              />
              <p onClick={() => onRouteChange("register")} className="register">
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
