import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{ border: '2px solid black', width: '350px', height: '300px', background: 'rgb(47,79,79)', border: 'none' }}>
      <h2 style={{ color: 'rgb(0,135,62)', textAlign: 'center' }}>SIGN IN</h2>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '250px' }}>
        <input style={{ height: '30px', border: 'none', background: 'rgba(211, 211, 211, 0.15)', marginBottom: '20px' }} type="text" placeholder="Username" />
        <input style={{ height: '30px', border: 'none', background: 'rgba(211, 211, 211, 0.15)' }} type="password" placeholder="Password" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', padding: '0 20px' }}>
        <Link to="/forgotpassword" style={{ color: 'white', textDecoration: 'none' }}>
          <h3>Forgot Password</h3>
        </Link>
        <h3 style={{ color: 'white' }}>Sign up</h3>
      </div>
      <Link to="/dashboard" >
        <button style={{ background: 'blue', height: '40px', width: '320px', margin: '20px auto', border: 'none', borderRadius: '20px', display: 'block' }}>Login</button>
      </Link>
    </div>
  );
};

export default Login;
