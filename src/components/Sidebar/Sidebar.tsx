import React from 'react';
import { FaHome, FaLevelUpAlt, FaRegChartBar, FaTh, FaUserAlt, FaWpforms } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => {
  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigation('/login');
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Link to="/login">Login</Link>
        <button onClick={logout}>Logout</button>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            <Link to="/dashboard">Dashboard</Link>
          </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaHome className="sidebarIcon" />
              <Link to="/home">Home</Link>
            </li>
            <li className="sidebarListItem">
              <FaRegChartBar className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FaLevelUpAlt className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">
            <Link to="/quickmenu">QuickMenu</Link>
          </h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
              <FaUserAlt className="sidebarIcon" />
              <Link to="/sortabletable">Employees</Link>
            </li>
            <li className="sidebarListItem">
              <FaUserAlt className="sidebarIcon" />
              <Link to="/users">Clients</Link>
            </li>
            <li className="sidebarListItem">
              <FaTh className="sidebarIcon" />
              <Link to="/products">Products</Link>
            </li>
            <li className="sidebarListItem">
              <FaWpforms className="sidebarIcon" />
              <Link to="/forms">Forms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
