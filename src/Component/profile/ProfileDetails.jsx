import React ,{ useState } from "react";
import "./styles.css";
import "./model.css"
import {  Row} from 'react-bootstrap';
// import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Row className="modal-overlay">
      <div className="modal-content">
        <h2 id="header-details">Personal details</h2>
        <p id="txt-profile">Add your personal details as you would like it to appear on your profile.</p>
        <div className="profile-img2"></div>
        <Row className="two-btns">
        <button id ="change-btn">Change</button>
        <button id ="remove-btn">Remove</button>
        </Row>
        <label id="profile-label">First name</label>
        <input type="text" placeholder="Name" id="profile-input"/>

        <label id="profile-label">Last name</label>
        <input type="text" placeholder="Name" id="profile-input"/>

        <label id="profile-label">Email</label>
        <input type="text" placeholder="Email" id="profile-input"/>

        <Row className="btns-save-close">
        <button id ="save-btn">Save</button>

        <button id ="close-btn" onClick={onClose}>Close</button>
        </Row>
      </div>
    </Row>
  );
};

const ProfileDetails = ({ name, email, profileImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
        <div className="profile-details">
          <Row className="profile-pin">
            <h3 id="personal">Personal details</h3>
            
            <svg onClick={() => setIsModalOpen(true)} xmlns="http://www.w3.org/2000/svg" id="Pin" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M14.06 9.22505L14.98 10.145L5.92 19.205H5V18.285L14.06 9.22505ZM17.66 3.20505C17.41 3.20505 17.15 3.30505 16.96 3.49505L15.13 5.32505L18.88 9.07505L20.71 7.24505C20.8027 7.15253 20.8762 7.04265 20.9264 6.92167C20.9766 6.8007 21.0024 6.67102 21.0024 6.54005C21.0024 6.40908 20.9766 6.2794 20.9264 6.15842C20.8762 6.03745 20.8027 5.92756 20.71 5.83505L18.37 3.49505C18.17 3.29505 17.92 3.20505 17.66 3.20505ZM14.06 6.39505L3 17.455V21.205H6.75L17.81 10.145L14.06 6.39505Z" fill="#765378"/>
            </svg>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


            {/* <svg xmlns="http://www.w3.org/2000/svg" id="Pin" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M14.06 9.22505L14.98 10.145L5.92 19.205H5V18.285L14.06 9.22505ZM17.66 3.20505C17.41 3.20505 17.15 3.30505 16.96 3.49505L15.13 5.32505L18.88 9.07505L20.71 7.24505C20.8027 7.15253 20.8762 7.04265 20.9264 6.92167C20.9766 6.8007 21.0024 6.67102 21.0024 6.54005C21.0024 6.40908 20.9766 6.2794 20.9264 6.15842C20.8762 6.03745 20.8027 5.92756 20.71 5.83505L18.37 3.49505C18.17 3.29505 17.92 3.20505 17.66 3.20505ZM14.06 6.39505L3 17.455V21.205H6.75L17.81 10.145L14.06 6.39505Z" fill="#765378"/>
            </svg> */}
            
          </Row>
          <div className="profile-image">
            {/* <img src={profileImage} alt="Profile" className="profile" /> */}
            {/* <img src={profileImage1} alt="Profile" className="profile" /> */}
          </div>
          <h2 id="name-alex">{name}</h2>
          <p>
            <strong>Email:</strong> <br />
            {email}
          </p>
        </div>
      );
};

export default ProfileDetails;
