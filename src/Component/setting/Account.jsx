import React, { useEffect, useState } from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import axios from "axios";

export default function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const api_url = "https://fakestoreapi.com/products"; // Example API, adjust as needed

  useEffect(() => {
    // Simulate fetching user data (replace with actual API call)
    axios.get(api_url)
      .then((response) => {
        const userData = response.data[0] || {};
        setFirstName(userData.title.split(" ")[0] || "Alex"); // Example mapping
        setLastName(userData.title.split(" ")[1] || "Johnson"); // Example mapping
        setEmail(userData.email || "alex.johnson@example.com");
        setLocation(userData.location || ""); // Adjust based on API
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    // Add logic to save changes (e.g., API call)
    console.log("Saved:", { firstName, lastName, email, location });
  };

  const handleDelete = () => {
    // Add logic to delete account (e.g., API call with confirmation)
    console.log("Account deleted");
  };

  return (
    <div className="settings-page1">
      {/* Header */}
      <header className="settings-header">
        <div id="signup_title">
          <Link to="/home" className="signup-title">
            <h2 className="signup-title">LEARNQUEST</h2>
          </Link>
        </div>
        <div className="settings-search">
          <input type="text" placeholder="Search" id="search"/>
          <button id="search-buttom">
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
              <rect x="1.55157" y="0.666923" width="47.9511" height="47.9511" rx="23.9756" fill="#CDB4DB"/>
              <rect x="1.55157" y="0.666923" width="47.9511" height="47.9511" rx="23.9756" stroke="#EEE6F2" stroke-width="1.16954"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8111 29.9043C34.6343 27.5528 35.4935 24.5948 35.214 21.6321C34.9345 18.6693 33.5373 15.9244 31.3065 13.9557C29.0758 11.987 26.1791 10.9424 23.2058 11.0344C20.2325 11.1265 17.4059 12.3482 15.3011 14.4511C13.1945 16.5555 11.9692 19.3843 11.875 22.3611C11.7808 25.3378 12.8247 28.2385 14.7941 30.472C16.7635 32.7054 19.51 34.1036 22.4741 34.3816C25.4381 34.6596 28.3966 33.7965 30.7466 31.9681L30.8095 32.0339L37.0117 38.24C37.1475 38.3759 37.3088 38.4837 37.4863 38.5573C37.6638 38.6308 37.854 38.6687 38.0461 38.6687C38.2382 38.6687 38.4284 38.6308 38.6059 38.5573C38.7834 38.4837 38.9447 38.3759 39.0805 38.24C39.2164 38.1041 39.3241 37.9428 39.3976 37.7652C39.4712 37.5877 39.509 37.3974 39.509 37.2052C39.509 37.013 39.4712 36.8227 39.3976 36.6451C39.3241 36.4676 39.2164 36.3062 39.0805 36.1703L32.8769 29.9657L32.8111 29.9043ZM29.7758 16.5208C30.6013 17.3333 31.2578 18.3013 31.7075 19.3688C32.1572 20.4364 32.3911 21.5825 32.3959 22.741C32.4006 23.8995 32.176 25.0475 31.735 26.1187C31.294 27.1899 30.6454 28.1631 29.8265 28.9823C29.0077 29.8015 28.0348 30.4504 26.964 30.8916C25.8932 31.3327 24.7457 31.5574 23.5877 31.5527C22.4297 31.548 21.284 31.3139 20.2169 30.8641C19.1497 30.4142 18.1821 29.7574 17.37 28.9316C15.7469 27.2812 14.8415 25.0562 14.8509 22.741C14.8604 20.4259 15.7839 18.2082 17.4203 16.5712C19.0567 14.9341 21.2735 14.0102 23.5877 14.0008C25.9019 13.9914 28.1261 14.8971 29.7758 16.5208Z" fill="white"/>
            </svg>
          </button>
        </div>
        <div className="settings-icons">
          <i id="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
              <g clip-path="url(#clip0_79_211)">
                <path d="M37.9284 33.3897C36.8033 32.3868 35.8184 31.237 35 29.9714C34.1057 28.2247 33.5702 26.3166 33.425 24.3597V18.5964C33.4327 15.5229 32.3179 12.5524 30.2899 10.243C28.2619 7.93357 25.4604 6.44419 22.4117 6.05469V4.54969C22.4117 4.13661 22.2476 3.74046 21.9555 3.44837C21.6634 3.15628 21.2673 2.99219 20.8542 2.99219C20.4411 2.99219 20.045 3.15628 19.7529 3.44837C19.4608 3.74046 19.2967 4.13661 19.2967 4.54969V6.07802C16.2753 6.4956 13.5077 7.99399 11.5063 10.2956C9.50495 12.5973 8.40554 15.5463 8.41168 18.5964V24.3597C8.2665 26.3166 7.73097 28.2247 6.83668 29.9714C6.03271 31.2341 5.06358 32.3837 3.95502 33.3897C3.83057 33.499 3.73083 33.6336 3.66244 33.7845C3.59404 33.9353 3.55856 34.099 3.55835 34.2647V35.8514C3.55835 36.1608 3.68127 36.4575 3.90006 36.6763C4.11885 36.8951 4.4156 37.018 4.72502 37.018H37.1584C37.4678 37.018 37.7645 36.8951 37.9833 36.6763C38.2021 36.4575 38.325 36.1608 38.325 35.8514V34.2647C38.3248 34.099 38.2893 33.9353 38.2209 33.7845C38.1525 33.6336 38.0528 33.499 37.9284 33.3897ZM5.98502 34.6847C7.07025 33.6359 8.02594 32.4608 8.83168 31.1847C9.95844 29.0753 10.6151 26.747 10.7567 24.3597V18.5964C10.7104 17.2291 10.9398 15.8664 11.4311 14.5896C11.9224 13.3128 12.6656 12.1479 13.6165 11.1643C14.5673 10.1807 15.7064 9.39855 16.9659 8.86434C18.2254 8.33013 19.5794 8.05483 20.9475 8.05483C22.3156 8.05483 23.6697 8.33013 24.9291 8.86434C26.1886 9.39855 27.3277 10.1807 28.2786 11.1643C29.2294 12.1479 29.9727 13.3128 30.464 14.5896C30.9553 15.8664 31.1846 17.2291 31.1384 18.5964V24.3597C31.2799 26.747 31.9366 29.0753 33.0634 31.1847C33.8691 32.4608 34.8248 33.6359 35.91 34.6847H5.98502Z" fill="#939292"/>
                <path d="M21 40.9148C21.7349 40.8978 22.4401 40.6215 22.991 40.1347C23.5418 39.648 23.9028 38.982 24.01 38.2548H17.8733C17.9835 39.0018 18.3613 39.6834 18.9365 40.1727C19.5116 40.662 20.2449 40.9257 21 40.9148Z" fill="#939292"/>
              </g>
              <defs>
                <clipPath id="clip0_79_211">
                  <rect width="42" height="42" fill="white" transform="translate(0 0.921387)"/>
                </clipPath>
              </defs>
            </svg>
          </i>
          <i id="circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="63" viewBox="0 0 88 63" fill="none">
              <circle cx="31" cy="31.9214" r="31" fill="#D9D9D9"/>
              <path d="M86.2837 31.9214L88 33.6393L78.6463 42.9962C78.4965 43.1471 78.3182 43.2668 78.1219 43.3484C77.9256 43.4301 77.7151 43.4722 77.5024 43.4722C77.2898 43.4722 77.0793 43.4301 76.8829 43.3484C76.6866 43.2668 76.5084 43.1471 76.3585 42.9962L67 33.6393L68.7163 31.9231L77.5 40.7052L86.2837 31.9214Z" fill="#939292"/>
            </svg>
          </i>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="settings-tabs">
        <Link to="/account" id="active">
          <Button className="active" id="active">Account</Button>
        </Link>
        <Link to="/security" id="active">
          <Button className="active" id="active">Security</Button>
        </Link>
      </nav>

      {/* Account Section */}
      <main className="settings-content">
        <form className="account-form" onSubmit={handleSave}>
          <div className="form-row">
            <label>
              First name
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Alex"
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Johnson"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              E-mail
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.johnson@example.com"
              />
            </label>
            <label>
              Location
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
              </select>
            </label>
          </div>
          <button type="submit" className="save-button">Save</button>
          <hr/>
        </form>

        <div className="delete-account">
          <h3 id="del">Delete Account</h3>
          <p id="para">
            If you delete your account, your personal information will be wiped
            from the website's servers, all of your course activity will be
            anonymized, and any certificates earned will be deleted. This action
            cannot be undone!
          </p>
          <button className="delete-button" onClick={handleDelete}>Delete Account</button>
        </div>
      </main>

   
    </div>
  );
}