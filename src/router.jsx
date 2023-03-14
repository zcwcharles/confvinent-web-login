import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import SignIn from './modules/signin/SignIn';
import SignUp from './modules/signup/SignUp';

const Router = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7286D3',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default Router;
