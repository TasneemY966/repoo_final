import React, { useState } from 'react';
import './SettingsManagement.css';
import {SideNav} from './SideNav';

const SettingsManagement = () => {
  const [settings, setSettings] = useState({
    platformName: 'LearnQuest',
    logo: null,
    email: 'learn.quest@example.com',
    notifications: 'Turn On'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({
      ...settings,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSettings({
        ...settings,
        logo: file
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
 
  };

  return (
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        <h1 className='set-mng'>Settings Management</h1>
        
        <div className="settings-card">
          <form onSubmit={handleSubmit} className="settings-form">
            <div className="form-group">
              <label htmlFor="platformName" className='platform-label'>Platform name</label>
              <div className="input-with-icon">
                <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M6.92864 2.58252C5.57018 2.71691 4.65552 3.01902 3.97212 3.70346C2.74805 4.92961 2.74805 6.90375 2.74805 10.8531V15.041C2.74805 18.9893 2.74805 20.9644 3.97212 22.1916C5.19619 23.4188 7.16721 23.4178 11.1082 23.4178H13.199C17.14 23.4178 19.111 23.4178 20.3351 22.1916C21.4467 21.0769 21.5498 19.3612 21.5592 16.1015" stroke="#5D5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.108 7.79116L12.1528 11.4373C12.7362 12.5937 13.4686 12.8958 15.2885 13C16.7356 12.9646 17.5752 12.7937 18.292 12.1707C18.7805 11.7457 19.0014 11.105 19.1087 10.4674L19.4671 8.31204M22.0798 6.22851V11.4373M9.10256 5.63783C10.7558 4.26583 12.2289 3.5293 15.2844 2.71881C15.6291 2.6278 15.9917 2.6296 16.3355 2.72402C19.0399 3.46784 20.5005 4.12832 22.4569 5.5972C22.5403 5.65971 22.5653 5.77639 22.5069 5.86285C21.8683 6.80252 20.4422 7.56405 16.9439 8.92043C16.2153 9.2008 15.4077 9.19633 14.6822 8.90793C10.9569 7.42862 9.24424 6.63688 9.03588 5.81493C9.02911 5.78213 9.03178 5.74808 9.04358 5.71673C9.05538 5.68538 9.07583 5.65803 9.10256 5.63783Z" stroke="#5D5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></span>
                <input
                  type="text"
                  id="platformName"
                  name="platformName"
                  value={settings.platformName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label  className='platform-label'>Change the logo</label>
              <div className="file-input-container">
                <label htmlFor="logoFile"  className='platform-label'>
                  Choose File
                </label>
                <span className="file-name">
                  {settings.logo ? settings.logo.name : 'No file chosen'}
                </span>
                <input
                  type="file"
                  id="logoFile"
                  name="logo"
                  onChange={handleFileChange}
                  className="file-input"
                  accept="image/*"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email"  className='platform-label'>Email</label>
              <div className="input-with-icon">
                <span className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                  <path d="M16.8506 4.0542H4.91101C4.23246 4.0542 3.58171 4.30277 3.1019 4.74523C2.62209 5.18769 2.35254 5.78779 2.35254 6.41352V14.2779C2.35254 14.9037 2.62209 15.5038 3.1019 15.9462C3.58171 16.3887 4.23246 16.6373 4.91101 16.6373H16.8506C17.5291 16.6373 18.1799 16.3887 18.6597 15.9462C19.1395 15.5038 19.409 14.9037 19.409 14.2779V6.41352C19.409 5.78779 19.1395 5.18769 18.6597 4.74523C18.1799 4.30277 17.5291 4.0542 16.8506 4.0542ZM16.5009 5.62708L11.4863 10.2514C11.407 10.3251 11.3127 10.3836 11.2088 10.4235C11.1048 10.4634 10.9934 10.484 10.8808 10.484C10.7682 10.484 10.6567 10.4634 10.5528 10.4235C10.4489 10.3836 10.3546 10.3251 10.2753 10.2514L5.26067 5.62708H16.5009ZM17.7034 14.2779C17.7034 14.4865 17.6135 14.6865 17.4536 14.834C17.2937 14.9815 17.0767 15.0644 16.8506 15.0644H4.91101C4.68483 15.0644 4.46791 14.9815 4.30797 14.834C4.14804 14.6865 4.05819 14.4865 4.05819 14.2779V6.73596L9.07279 11.3602C9.55251 11.8021 10.2028 12.0502 10.8808 12.0502C11.5588 12.0502 12.2091 11.8021 12.6888 11.3602L17.7034 6.73596V14.2779Z" fill="#5D5A6F"/>
                </svg></span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="notifications"  className='platform-label'>Notifications</label>
              <div className="select-container">
                <span className="select-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M6 19.1299V10.1299C6 8.53858 6.63214 7.01246 7.75736 5.88724C8.88258 4.76202 10.4087 4.12988 12 4.12988C13.5913 4.12988 15.1174 4.76202 16.2426 5.88724C17.3679 7.01246 18 8.53858 18 10.1299V19.1299M6 19.1299H18M6 19.1299H4M18 19.1299H20M11 22.1299H13" stroke="#5D5A6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 4.12988C12.5523 4.12988 13 3.68217 13 3.12988C13 2.5776 12.5523 2.12988 12 2.12988C11.4477 2.12988 11 2.5776 11 3.12988C11 3.68217 11.4477 4.12988 12 4.12988Z" stroke="#5D5A6F" stroke-width="1.5"/>
              </svg></span>
                <select
                  id="notifications"
                  name="notifications"
                  value={settings.notifications}
                  onChange={handleChange}
                  className="form-control select"
                >
                  <option value="Turn On">Turn On</option>
                  <option value="Turn Off">Turn Off</option>
                </select>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn-save">Save</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export {SettingsManagement};