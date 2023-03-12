import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './App.scss';

function App() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <Button onClick={toLogin}>To login</Button>
      </header>
    </div>
  );
}

export default App;
