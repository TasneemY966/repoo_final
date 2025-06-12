import React from 'react';
import './Notifications.css';
import {SideNav} from './SideNav';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'course-request',
      title: 'A new request to raise a training course',
      content: 'Lecturer Ahmed Mohamed requested to upload a course: User Interface Design',
      actions: ['review', 'accept', 'reject']
    }
    // Add more notifications as needed
  ];

  const handleAction = (notificationId, action) => {
    console.log(`Action ${action} for notification ${notificationId}`);
    // Implement your action handling logic here
  };

  return (
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        {/* <h1>Notifications</h1> */}
        
        <div className="notifications-container">
          {notifications.map(notification => (
            <div className="notification-card" key={notification.id}>
              <div className="notification-content">
                <h3 className='note-content'>{notification.title}</h3>
                <p className="notification-details">
                  {notification.type === 'course-request' && 'Lecturer '}
                  <strong>{notification.content.split(' ')[1]} {notification.content.split(' ')[2]}</strong>
                  {notification.type === 'course-request' && ' requested to upload a course: '}
                  <strong>{notification.content.split(': ')[1]}</strong>
                </p>
              </div>
              
              <div className="notification-actions">
                {notification.actions.includes('review') && (
                  <button 
                    className="action-btn review-btn"
                    onClick={() => handleAction(notification.id, 'review')}
                  >
                    Review <i className="icon-review"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.5 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V13.5" stroke="#005DD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9608 7.78929 15.4695 8 16 8H20M13.378 15.626C13.5752 15.4288 13.7317 15.1946 13.8384 14.9369C13.9452 14.6792 14.0001 14.4029 14.0001 14.124C14.0001 13.8451 13.9452 13.5688 13.8384 13.3111C13.7317 13.0534 13.5752 12.8192 13.378 12.622C13.1807 12.4248 12.9466 12.2683 12.6889 12.1615C12.4311 12.0548 12.1549 11.9999 11.876 11.9999C11.597 11.9999 11.3208 12.0548 11.0631 12.1615C10.8054 12.2683 10.5712 12.4248 10.374 12.622L5.36398 17.634C5.12622 17.8716 4.9522 18.1653 4.85798 18.488L4.02098 21.358C3.99588 21.444 3.99437 21.5353 4.01662 21.6221C4.03887 21.7089 4.08404 21.7882 4.14742 21.8516C4.2108 21.9149 4.29006 21.9601 4.37689 21.9824C4.46372 22.0046 4.55493 22.0031 4.64098 21.978L7.51098 21.141C7.83364 21.0468 8.12735 20.8728 8.36498 20.635L13.378 15.626Z" stroke="#005DD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg></i>
                  </button>
                )}
                
                {notification.actions.includes('accept') && (
                  <button 
                    className="action-btn accept-btn"
                    onClick={() => handleAction(notification.id, 'accept')}
                  >
                    Accept <i className="icon-accept"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM17.371 8.835C17.4178 8.78681 17.4544 8.72968 17.4786 8.66703C17.5028 8.60439 17.5142 8.5375 17.512 8.47037C17.5098 8.40324 17.4941 8.33725 17.4658 8.27632C17.4375 8.21539 17.3973 8.16078 17.3474 8.11575C17.2976 8.07072 17.2392 8.03619 17.1757 8.01423C17.1123 7.99227 17.045 7.98331 16.978 7.98791C16.911 7.99251 16.8456 8.01056 16.7857 8.04098C16.7259 8.07141 16.6727 8.11359 16.6295 8.165L10.64 14.7835L7.345 11.638C7.24912 11.5464 7.12077 11.4966 6.98819 11.4996C6.8556 11.5026 6.72963 11.5581 6.638 11.654C6.54637 11.7499 6.49657 11.8782 6.49958 12.0108C6.50258 12.1434 6.55812 12.2694 6.654 12.361L10.321 15.861L10.6925 16.216L11.037 15.835L17.371 8.835Z" fill="#319F43"/>
                          </svg></i>
                  </button>
                )}
                
                {notification.actions.includes('reject') && (
                  <button 
                    className="action-btn reject-btn"
                    onClick={() => handleAction(notification.id, 'reject')}
                  >
                    Reject <i className="icon-reject"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM8.111 15.889C8.01726 15.7952 7.96461 15.6681 7.96461 15.5355C7.96461 15.4029 8.01726 15.2758 8.111 15.182L11.293 12L8.111 8.818C8.01992 8.7237 7.96952 8.5974 7.97066 8.4663C7.9718 8.3352 8.02439 8.20979 8.11709 8.11709C8.20979 8.02439 8.3352 7.9718 8.4663 7.97066C8.5974 7.96952 8.7237 8.01992 8.818 8.111L12 11.293L15.182 8.111C15.2763 8.01992 15.4026 7.96952 15.5337 7.97066C15.6648 7.9718 15.7902 8.02439 15.8829 8.11709C15.9756 8.20979 16.0282 8.3352 16.0293 8.4663C16.0305 8.5974 15.9801 8.7237 15.889 8.818L12.707 12L15.889 15.182C15.9801 15.2763 16.0305 15.4026 16.0293 15.5337C16.0282 15.6648 15.9756 15.7902 15.8829 15.8829C15.7902 15.9756 15.6648 16.0282 15.5337 16.0293C15.4026 16.0305 15.2763 15.9801 15.182 15.889L12 12.707L8.818 15.889C8.72424 15.9827 8.59708 16.0354 8.4645 16.0354C8.33192 16.0354 8.20476 15.9827 8.111 15.889Z" fill="#D72638"/>
                    </svg></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export {Notifications};