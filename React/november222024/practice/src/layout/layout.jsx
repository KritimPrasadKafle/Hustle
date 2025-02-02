import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ background: 'rgb(160,156,230)', padding: '20px', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px' }}>
      <Outlet />
    </div>
  );
};

export default Layout;
