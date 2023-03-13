import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './App.scss';

function App() {
  const navigate = useNavigate();
  const toSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <Button onClick={toSignin}>To signin</Button>
      </header>
    </div>
  );
}

export default App;
