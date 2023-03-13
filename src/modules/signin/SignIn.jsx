import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Space, Input, Checkbox } from 'antd';
import {
  emailChange,
  passwordChange,
  rememberMeChange,
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

  const onSignIn = () => {
    dispatch(signInThunk());
  };

  const onEmailChagne = e => {
    dispatch(emailChange(e.target.value));
  };

  const onPasswordChange = e => {
    dispatch(passwordChange(e.target.value));
  }

  return (
    <div className="signin_page">
      <Container className="signin_card">
        <Space className="signin_space" direction="vertical" size={20}>
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
          />
          <Checkbox onChange={rememberMeChange}>Remember me</Checkbox>
          <Button loading={signingIn} className="signin_btn" type="primary" onClick={onSignIn}>SIGN IN</Button>
          <Space className="signin_space space_between">
            <Button className="signin_link-btn" type="link">Forgot Password?</Button>
            <Button className="signin_link-btn" type="link">Create Account</Button>
          </Space>
        </Space>
      </Container>
    </div>
  );
};

export default SignIn;
