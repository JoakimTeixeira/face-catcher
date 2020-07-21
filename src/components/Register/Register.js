import React, { Component } from "react";
import "../SignIn/SignIn.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = event => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <article className="container">
        <main className="signIn">
          <form onSubmit={this.onFormSubmit} className="signIn-form">
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
                  onChange={this.onNameChange}
                  required
                />
              </div>
              <div className="signIn-wrapper">
                <label className="signIn-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="signIn-input"
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.onEmailChange}
                  required
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
                  required
                />
              </div>
            </fieldset>
            <div className="signIn-wrapper">
              <input
                onClick={this.onSubmitRegister}
                className="signIn-input signIn-btn"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Register;
