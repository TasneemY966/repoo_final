import React from 'react';
import './Dashboard.css';
import './common.css';
import {SideNav} from './SideNav';


const Dashboard = () => {
  return (
    <>
    
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        <div className="welcome-section">
          <h1 className='welcome'>Welcome to the Admin Dashboard</h1>
          <p className='here-txt'>Here, you can manage users, courses, and generate reports.</p>
          
          <div className="stats-container">
            <div className="stat-card">
              <h3>Total Users</h3>
              <div className="stat-value">88</div>
            </div>
            
            <div className="stat-card">
              <h3>Total Courses</h3>
              <div className="stat-value">6</div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export  {Dashboard};