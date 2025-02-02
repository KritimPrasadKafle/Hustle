import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import DashBoard from './components/DashBoard';
import { Notification } from './components/Notification';
import PostComponent from './components/PostComponent';
import AddPost from './components/AddPost';
import CreatePost from './components/CreatePost';
import Render, { Props } from './components/Render.jsx'
import UseEffect from './components/UseEffect';
import ItemList, { Check } from './components/ItemList.jsx';
import FocusInput from './components/UseRef.jsx'
import Checking from './components/UnOptimalRerender.jsx'
import CheckPoint from './components/ContextAPI.jsx';
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
          <Route path="/dashboard/createPost" element={<CreatePost />} />
          <Route path="/dashboard/useEffect" element={<UseEffect />} />
          <Route path="/dashboard/props" element={<Props />} />
          <Route path="/dashboard/iterate"
            element={<Check />} />
          <Route path="/dashboard/reference" element={<FocusInput />} />
          <Route path="/dashboard/checking" element={<Checking />} />
          <Route path="/dashboard/context" element={<CheckPoint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;