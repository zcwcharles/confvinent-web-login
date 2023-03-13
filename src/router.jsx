import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import SignIn from './modules/signin/SignIn';

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
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default Router;
