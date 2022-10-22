import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="nav-left">
          <span className="logo">Admin</span>
        </div>
        <div className="nav-right">
          <h3>
            <Link to="./worklist">WorkList</Link>
          </h3>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/14/10/57/bed-1979270_1280.jpg"
            alt=""
            className="navAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
