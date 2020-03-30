import React, { Component } from "react";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "./../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      })
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="sign-in-email"
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            id="sign-in-password"
            type="password"
            name="password"
            label="Password"
            handleChange={this.handleChange}
            value={password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
