import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem('user', 'test');
    navigate('/dashboard');
  };
  return (
    <div className="login">
      <h2>Welcome to the login page!</h2>
      <p>Please Login to continue...</p>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
