import React from 'react';

import Signin from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';

import './signin-signup.styles.scss';

const SigninSignupPage = () => {
  return (
    <div className="signin-signup">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninSignupPage;
