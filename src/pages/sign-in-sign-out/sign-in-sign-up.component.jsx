import React from "react";

import SignInComponent from "./../../components/signin/sign-in.component";
import SignUp from './../../components/sign-up/sign-up.component';

import "./sign-in-sign-up.styles.scss";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up container">
      <SignInComponent />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
