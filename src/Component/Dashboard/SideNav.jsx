import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="nav-header">
        <h2 className='dash'>Dashboard</h2>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/manage-users" className="nav-link">Manage Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/manage-instructors" className="nav-link">Manage Instructors</Link>
        </li>
        <li className="nav-item">
          <Link to="/manage-courses" className="nav-link">Manage Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/notifications" className="nav-link">Notifications</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings-management" className="nav-link">Settings Management</Link>
        </li>
        <li className="nav-item">
          <Link to="/manage-sections" className="nav-link">Sections</Link>
        </li>
      </ul>
    </nav>
  );
};

export {SideNav};