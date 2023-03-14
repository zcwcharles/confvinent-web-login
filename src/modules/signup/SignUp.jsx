import React from "react";
import { useDispatch } from "react-redux";
import { Space, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import {
  firstNameChange,
  lastNameChange,
  emailChange,
  organizationChange,
  addressChange,
  passwordChange,
  reEnterPasswordChange,
  signUpThunk,
} from './signUpSlice';
import Container from "../../components/container/Container";
import './SignUp.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toSignIn = () => {
    navigate('/');
  };
  
  const onFirstNameChange = e => {
    dispatch(firstNameChange(e.target.value));
  };

  const onLastNameChange = e => {
    dispatch(lastNameChange(e.target.value));
  };

  const onEmailChange = e => {
    dispatch(emailChange(e.target.value));
  };

  const onOrganizationChange = e => {
    dispatch(organizationChange(e.target.value));
  };

  const onAddressChange = e => {
    dispatch(addressChange(e.target.value));
  };

  const onPasswordChange = e => {
    dispatch(passwordChange(e.target.value));
  };

  const onReEnterPasswordChange = e => {
    dispatch(reEnterPasswordChange(e.target.value));
  };

  const onSignUpClick = () => {
    dispatch(signUpThunk());
  }

  return (
    <Container className="signup_card">
      <Space className="fill-parent" direction="vertical" size={20}>
      < div className="signup_title">Sign Up</div>
        <Space className="fill-parent space-between">
          <Input onChange={onFirstNameChange} placeholder="First Name (required)" />
          <Input onChange={onLastNameChange} placeholder="Last Name (required)" />
        </Space>
        <Input onChange={onEmailChange} placeholder="Email (required)" />
        <Input onChange={onOrganizationChange} placeholder="Organization (required)" />
        <Input onChange={onAddressChange} placeholder="Address" />
        <Input onChange={onPasswordChange} placeholder="Password (required)" type="password" />
        <Input onChange={onReEnterPasswordChange} placeholder="Re-Enter passowrd (required)" type="password" />
        <Button className="fill-parent" type="primary" onClick={onSignUpClick}>SIGN UP</Button>
        <Button className="signin_link-btn" type="link" onClick={toSignIn}>To Sign In</Button>
      </Space>
    </Container>
  );
};

export default SignUp;
