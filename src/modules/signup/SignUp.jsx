import React from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Form } from "antd";
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from './signUpSlice';
import Container from "../../components/container/Container";
import './SignUp.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = React.useRef(null);

  const onFinish = (values) => {
    dispatch(signUpThunk(values))
  }

  const passwordMatchingRule = {
    validateTrigger: ['onChange'],
    validator: () => {
      if (formRef.current.getFieldValue('rePassword') === formRef.current.getFieldValue('password')) {
        return Promise.resolve()
      }
      return Promise.reject('Password and Re-Enter password are not the same!')
    }
  };

  const toSignIn = () => {
    navigate('/');
  };

  return (
    <Container className="signup_card">
      <div className="signup_title">Sign Up</div>
      <Form ref={formRef} labelCol={{span: 10}} onFinish={onFinish}>
        <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="organization" label="Organization" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }, passwordMatchingRule]} dependencies={['rePassword']}>
          <Input type="password" />
        </Form.Item>
        <Form.Item name="rePassword" label="Re-Enter passowrd" rules={[{ required: true }, passwordMatchingRule]} dependencies={['password']}>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button className="fill-parent" type="primary" htmlType="submit">SIGN UP</Button>
        </Form.Item>
      </Form>
      <Button className="signin_link-btn" type="link" onClick={toSignIn}>To Sign In</Button>
    </Container>
  );
};

export default SignUp;
