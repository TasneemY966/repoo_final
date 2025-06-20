import React, { useEffect, useState } from "react";
import "./Security.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const api_url = "https://fakestoreapi.com/products"; // Example API, adjust as needed

  useEffect(() => {
    // Simulate fetching current password (replace with actual API call)
    axios.get(api_url)
      .then((response) => {
        // Example: Assume the first item's title is used as a placeholder for current password
        setCurrentPassword(response.data[0].title || "********"); // Placeholder
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Add logic to update password (e.g., API call)
      console.log("Password changed to:", newPassword);
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div className="settings-page2">
      {/* Header */}
      <header className="settings-header">
        <div id="signup_title2">
          <Link to="/home" className="signup-title2">
            <h2 className="signup-title2">LEARNQUEST</h2>
          </Link>
        </div>
        <div className="settings-search">
          <input type="text" placeholder="Search" id="search" />
          <button id="search-buttom">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="#765378">
              <rect x="0.00952148" y="0.36084" width="49.1207" height="49.1207" rx="24.5603" fill="#765378"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.8548 30.1829C33.678 27.8315 34.5372 24.8735 34.2577 21.9108C33.9782 18.948 32.581 16.2031 30.3502 14.2344C28.1195 12.2656 25.2228 11.2211 22.2495 11.3131C19.2762 11.4051 16.4496 12.6269 14.3448 14.7298C12.2382 16.8342 11.0129 19.663 10.9187 22.6398C10.8245 25.6165 11.8684 28.5172 13.8378 30.7506C15.8072 32.9841 18.5537 34.3823 21.5178 34.6603C24.4818 34.9383 27.4403 34.0752 29.7903 32.2468L29.8532 32.3126L36.0554 38.5187C36.1912 38.6546 36.3525 38.7624 36.53 38.836C36.7075 38.9095 36.8977 38.9474 37.0898 38.9474C37.2819 38.9474 37.4721 38.9095 37.6496 38.836C37.8271 38.7624 37.9884 38.6546 38.1242 38.5187C38.2601 38.3828 38.3678 38.2215 38.4413 38.0439C38.5149 37.8664 38.5527 37.6761 38.5527 37.4839C38.5527 37.2917 38.5149 37.1014 38.4413 36.9238C38.3678 36.7463 38.2601 36.5849 38.1242 36.449L31.9206 30.2444L31.8548 30.1829ZM28.8195 16.7995C29.645 17.612 30.3015 18.5799 30.7512 19.6475C31.2009 20.7151 31.4348 21.8612 31.4396 23.0197C31.4443 24.1782 31.2197 25.3261 30.7787 26.3974C30.3377 27.4686 29.6891 28.4418 28.8702 29.261C28.0514 30.0802 27.0785 30.7291 26.0077 31.1702C24.9369 31.6114 23.7894 31.8361 22.6314 31.8314C21.4734 31.8267 20.3277 31.5926 19.2606 31.1428C18.1934 30.6929 17.2258 30.0361 16.4137 29.2103C14.7906 27.5599 13.8852 25.3348 13.8946 23.0197C13.9041 20.7045 14.8276 18.4869 16.464 16.8498C18.1004 15.2128 20.3172 14.2889 22.6314 14.2795C24.9456 14.27 27.1698 15.1758 28.8195 16.7995Z" fill="white"/>
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
      <nav className="settings-tabs2">
        <Link to="/account" id="active2"><button className="active" id="active2">Account</button></Link>
        <Link to="/security" id="active2"><button className="active" id="active2">Security</button></Link>
      </nav>

      {/* Security Content */}
      <main className="security-content">
        <form className="security-form" onSubmit={handleSubmit}>
      
          
          <label>
             Password
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </label>
          <button type="submit" className="change-password-button">
            Change Password
          </button>
        </form>
      </main>

     
    </div>
  );
}