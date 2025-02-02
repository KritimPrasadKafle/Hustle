import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import DashBoard from './components/DashBoard';
import { Notification } from './components/Notification';
import PostComponent from './components/PostComponent';
import AddPost from './components/AddPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/notification" element={<Notification />} />
          <Route path="/dashboard/postComponent" element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;