
import React, { useState } from 'react';
import './ManageUsers.css';
import { SideNav } from './SideNav';
import { UpdateUser } from './UpdateUser';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alex Johnson", email: "alex.johnson@example.com", registeredCourses: 4 },
    { id: 2, name: "John Smith", email: "jhon.smith@example.com", registeredCourses: 2 },
    { id: 3, name: "Sarah Johnson", email: "sarah.johnson@example.com", registeredCourses: 3 },
    { id: 4, name: "Michael Brown", email: "michael.brown@example.com", registeredCourses: 4 },
    { id: 5, name: "James Wilson", email: "james.wilson@example.com", registeredCourses: 5 },
    { id: 6, name: "Olivia Taylor", email: "olivia.taylor@example.com", registeredCourses: 1 },
    { id: 7, name: "William Thomas", email: "willian.thomas@example.com", registeredCourses: 3 },
    { id: 8, name: "Daniel Martinez", email: "daniel.martinez@example.com", registeredCourses: 4 },
    { id: 9, name: "Benjamin Harris", email: "benjamin.harris@example.com", registeredCourses: 5 },
    { id: 10, name: "Jude Cooper", email: "Jude.cooper@example.com", registeredCourses: 2 },
    { id: 11, name: "Daniel Martinez", email: "daniel.martinez@example.com", registeredCourses: 1 },
    { id: 12, name: "Alexander Clark", email: "alexander.clark@example.com", registeredCourses: 1 },
    { id: 13, name: "Mia Thompson", email: "mia.Thompson@example.com", registeredCourses: 3 },
    { id: 14, name: "Charlotte White", email: "charlotte.white@example.com", registeredCourses: 3 },
    { id: 15, name: "Jane Cooper", email: "Jane.cooper@example.com", registeredCourses: 4 }
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [actionMenuOpen, setActionMenuOpen] = useState(null);

  const handleActionClick = (userId) => {
    setActionMenuOpen(actionMenuOpen === userId ? null : userId);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
    setActionMenuOpen(null);
  };

  const handleSaveUser = (updatedUserData) => {
    if (Array.isArray(users)) {
      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, name: updatedUserData.name, email: updatedUserData.email } 
          : user
      ));
    }
    
    setShowUpdateModal(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      if (Array.isArray(users)) {
        setUsers(users.filter(user => user.id !== userId));
      }
    }
    setActionMenuOpen(null);
  };

  return (
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        <div className="header-container">
          <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">
              <i className="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                <rect x="1.16422" y="0.456213" width="34.1262" height="34.1262" rx="17.0631" fill="#CDB4DB"/>
                <rect x="1.16422" y="0.456213" width="34.1262" height="34.1262" rx="17.0631" stroke="#EEE6F2" strokeWidth="0.832347"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23.4105 21.264C24.708 19.5905 25.3195 17.4853 25.1206 15.3768C24.9217 13.2682 23.9273 11.3147 22.3397 9.91358C20.7521 8.51247 18.6906 7.76905 16.5745 7.83455C14.4585 7.90006 12.4468 8.76957 10.9488 10.2662C9.44957 11.7639 8.57757 13.7771 8.51052 15.8956C8.44348 18.0141 9.18644 20.0785 10.588 21.668C11.9896 23.2576 13.9443 24.2526 16.0538 24.4505C18.1632 24.6483 20.2688 24.034 21.9412 22.7328L21.986 22.7796L26.4 27.1965C26.4967 27.2932 26.6114 27.3699 26.7377 27.4222C26.8641 27.4746 26.9994 27.5015 27.1362 27.5015C27.2729 27.5015 27.4083 27.4746 27.5346 27.4222C27.6609 27.3699 27.7757 27.2932 27.8724 27.1965C27.969 27.0997 28.0457 26.9849 28.098 26.8586C28.1504 26.7322 28.1773 26.5968 28.1773 26.46C28.1773 26.3232 28.1504 26.1878 28.098 26.0614C28.0457 25.935 27.969 25.8202 27.8724 25.7235L23.4573 21.3077L23.4105 21.264ZM21.2503 11.7392C21.8378 12.3174 22.305 13.0063 22.6251 13.7661C22.9451 14.5259 23.1116 15.3415 23.115 16.166C23.1183 16.9905 22.9585 17.8075 22.6446 18.5698C22.3308 19.3322 21.8692 20.0249 21.2864 20.6079C20.7036 21.1909 20.0112 21.6527 19.2492 21.9666C18.4871 22.2806 17.6704 22.4405 16.8463 22.4372C16.0221 22.4338 15.2068 22.2672 14.4473 21.9471C13.6878 21.6269 12.9992 21.1595 12.4212 20.5718C11.2661 19.3972 10.6218 17.8137 10.6285 16.166C10.6352 14.5183 11.2924 12.9401 12.457 11.775C13.6216 10.6099 15.1993 9.9524 16.8463 9.94569C18.4933 9.93898 20.0762 10.5836 21.2503 11.7392Z" fill="white"/>
              </svg></i>
            </button>
          </div>
        </div>
        <div className="add-user-container">
          <h1 className='mng-user'>Manage Users</h1>
        </div>
        <div className="users-table">
          <div className="table-header">
            <div className="header-col id-col">#</div>
            <div className="header-col name-col">Name</div>
            <div className="header-col email-col">Email</div>
            <div className="header-col courses-col">Registered Courses</div>
            <div className="header-col actions-col">Actions</div>
          </div>
          {users.map(user => (
            <div className="user-row" key={user.id}>
              <div className="user-col id-col">{user.id}</div>
              <div className="user-col name-col">{user.name}</div>
              <div className="user-col email-col">{user.email}</div>
              <div className="user-col courses-col">{user.registeredCourses}</div>
              <div className="user-col actions-col">
                <button className="action-button" onClick={() => handleActionClick(user.id)}>⋮</button>
                {actionMenuOpen === user.id && (
                  <div className="action-menu">
                    <button onClick={() => handleEditUser(user)} id="btn_mng_user"> Edit  </button>
                    <button onClick={() => handleDeleteUser(user.id)} id="btn_mng_user"> Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      {showUpdateModal && (
        <UpdateUser 
          user={selectedUser}
          onClose={() => setShowUpdateModal(false)} 
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
};

export { ManageUsers };