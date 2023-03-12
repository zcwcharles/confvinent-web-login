import React from 'react';
import { Counter } from './components/counter/Counter';
import Login from './modules/login/Login';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Login />
      </header>
    </div>
  );
}

export default App;
