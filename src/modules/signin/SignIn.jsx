import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Input } from 'antd';
import {
  emailChange,
  passwordChange,
  signInThunk,
  stateSelector,
} from './signInSlice';
import Container from '../../components/container/Container';
import './SignIn.scss';

const SignIn = () => {
  const {
    signingIn,
    emailValid,
    passwordValid,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignIn = () => {
    dispatch(signInThunk());
  };

  const onEmailChagne = e => {
    dispatch(emailChange(e.target.value));
  };

  const onPasswordChange = e => {
    dispatch(passwordChange(e.target.value));
  }

  const toSignUp = () => {
    navigate('/signup');
  };

  return (
    <Container className="signin_card">
      <Space className="fill-parent" direction="vertical" size={20}>
        <div className="signin_title">Sign In</div>
        <Input
          onChange={onEmailChagne}
          onBlur={onEmailChagne}
          placeholder="Email"
          status={emailValid ? '': 'error'}
        />
        <Input
          onChange={onPasswordChange}
          onBlur={onPasswordChange}
          placeholder='Password'
          type="password"
          status={passwordValid ? '': 'error'}
          onPressEnter={onSignIn}
        />
        <Button loading={signingIn} className="fill-parent" type="primary" onClick={onSignIn}>SIGN IN</Button>
        <Space className="fill-parent space-between">
          <Button className="signin_link-btn" type="link" onClick={toForgotpassword}>Forgot Password?</Button>
          <Button className="signin_link-btn" type="link" onClick={toSignUp}>Create Account</Button>
        </Space>
      </Space>
    </Container>
  );
};

export default SignIn;
