import React from "react";
import { Button } from 'antd';
import { post } from '../../requests';

const Login = () => {
  const onClick = async () => {
    const resp = await post('http://confvinent.com:5000/api/test/ping', { abc: 123 });
    console.log(resp);
  };

  return (
    <div>
      <Button onClick={onClick}>test</Button>
    </div>
  );
};

export default Login;
