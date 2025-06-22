
// import React, { useState } from "react";
// import "./Section.css";
// import { Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Section() {
//   const [sectionName, setSectionName] = useState("");
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [role, setRole] = useState(localStorage.getItem("role") || "");
//   const navigate = useNavigate();

//   const handleNewSection = async () => {
//     if (!sectionName.trim()) {
//       alert("Please enter a section name.");
//       return;
//     }

//     if (role !== "Admin" && role !== "Instructor") {
//       alert("Only Admin and Instructor roles can add sections.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://localhost:7217/api/sections/Create", {
//         name: sectionName,
//         createdAt: "2025-06-23T01:38:00Z", // Current date and time in ISO format
//       }, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       if (response.status === 200 || response.status === 201) {
//         setSectionName(""); // Clear input after successful creation
//         console.log("New Section Added:", sectionName);
//       } else {
//         console.error("Failed to create section");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleAddVideos = () => {
//     if (sectionName.trim() && (role === "Admin" || role === "Instructor")) {
//       navigate(`/section-review?section=${sectionName}`); // Navigate to section review with section name as query param
//       console.log("Add Videos to Section:", sectionName);
//     }
//   };

//   const handleDone = () => {
//     if (sectionName.trim() && (role === "Admin" || role === "Instructor")) {
//       console.log("Section Done:", sectionName);
//       navigate("/publish"); // Navigate back to publish page
//     }
//   };

//   return (
//     <Row className="lesson-body2">
//       <Link to="/publish" id="back-btn2">
//         <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
//           <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
//         </svg>
//       </Link>
//       <Row className="white-box2">
//         <h2 id="vid-title2">Add Sections</h2>

//         <div className="row-item2">
//           <label id="label-vid2">Section Name
//             <input
//               type="text"
//               id="input-vid2"
//               value={sectionName}
//               onChange={(e) => setSectionName(e.target.value)}
//               disabled={!(role === "Admin" || role === "Instructor")}
//             />
//           </label>
//         </div>

//         <Col id="last-two-btn2">
//           <button
//             id="btn-vid12"
//             onClick={handleNewSection}
//             disabled={!(role === "Admin" || role === "Instructor") || !sectionName.trim()}
//           >
//             New Section
//           </button>
//           <button
//             id="btn-vid22"
//             onClick={handleAddVideos}
//             disabled={!(role === "Admin" || role === "Instructor") || !sectionName.trim()}
//           >
//             Add Videos
//           </button>
//         </Col>
//         <button
//           id="btn-done"
//           onClick={handleDone}
//           disabled={!(role === "Admin" || role === "Instructor") || !sectionName.trim()}
//         >
//           Done
//         </button>
//       </Row>
//     </Row>
//   );
// }

import React, { useState } from "react";
   import "./Section.css";
   import { Row, Col } from "react-bootstrap";
   import { Link, useNavigate } from "react-router-dom";
   import axios from "axios";
   import { useToken } from "../tokenManager/tokenManager";
   import { useRole } from "../roleManager/roleManager";

   export default function Section() {
     const [sectionName, setSectionName] = useState("");
     const { token } = useToken();
     const { role } = useRole();
     const navigate = useNavigate();

     const handleNewSection = async () => {
       if (!sectionName.trim()) {
         alert("Please enter a section name.");
         return;
       }

       if (role !== "Admin" && role !== "Instructor") {
         alert("Only Admin and Instructor roles can add sections.");
         return;
       }

       try {
         const response = await axios.post("https://localhost:7217/api/sections/Create", {
           name: sectionName,
           createdAt: "2025-06-23T01:43:00Z", // Current date and time in ISO format
         }, {
           headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
         });
         if (response.status === 200 || response.status === 201) {
           setSectionName(""); // Clear input after successful creation
           console.log("New Section Added:", sectionName);
         } else {
           console.error("Failed to create section");
         }
       } catch (error) {
         console.error("Error:", error);
       }
     };

     const handleAddVideos = () => {
       if (sectionName.trim() && (role === "Admin" || role === "Instructor")) {
         navigate(`/section-review?section=${sectionName}`); // Navigate to section review with section name as query param
         console.log("Add Videos to Section:", sectionName);
       }
     };

     const handleDone = () => {
       if (sectionName.trim() && (role === "Admin" || role === "Instructor")) {
         console.log("Section Done:", sectionName);
         navigate("/publish"); // Navigate back to publish page
       }
     };

     return (
       <Row className="lesson-body2">
         <Link to="/publish" id="back-btn2">
           <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
             <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
           </svg>
         </Link>
         <Row className="white-box2">
           <h2 id="vid-title2">Add Sections</h2>

           <div className="row-item2">
             <label id="label-vid2">Section Name
               <input
                 type="text"
                 id="input-vid2"
                 value={sectionName}
                 onChange={(e) => setSectionName(e.target.value)}
                 disabled={!(role === "Admin" || role === "Instructor")}
               />
             </label>
           </div>

           <Col id="last-two-btn2">
             <button
               id="btn-vid12"
               onClick={handleNewSection}
               disabled={!(role === "Admin" || role === "Instructor") || !sectionName.trim()}
             >
               New Section
             </button>
             <button
               id="btn-vid22"
               onClick={handleAddVideos}
               disabled={!(role === "Admin" || role === "Instructor") || !sectionName.trim()}
             >
               Add Videos
             </button>
           </Col>
           <button
             id="btn-done"
             onClick={handleDone}
             disabled={!(role === "Admin" || role === "Instructor") || !sectionName.trim()}
           >
             Done
           </button>
         </Row>
       </Row>
     );
   }