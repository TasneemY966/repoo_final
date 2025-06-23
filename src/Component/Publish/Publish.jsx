// import React, { useState } from "react";
// import "./Publish.css";
// import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Confirm = ({ isOpen, onClose, onConfirm }) => {
//   if (!isOpen) return null;

//   return (
//     <div id="con-body">
//       <h3 id="con-txt">Are you sure you want to publish the course? 
//       It will be sent to the administration for review.</h3>
 
//       <Col className="two-btn-con">
//         <button id="ok-btn" onClick={onConfirm}>OK</button>
//         <button id="can-btn" onClick={onClose}>Cancel</button>
//       </Col>
//     </div>
//   );
// };

// const AddModule = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div id="con-body">
//       <h3 id="con-txt">The course has been sent to the administration 
//       for approval.</h3>
 
//       <Col className="two-btn-con">
//         <button id="ok-btn" onClick={onClose}>OK</button>
//       </Col>
//     </div>
//   );
// };

// const Publish = () => {
//   const [isConOpen, setIsConOpen] = useState(false);
//   const [isSuccessOpen, setIsSuccessOpen] = useState(false);
//   const [moduleName, setModuleName] = useState("");
//   const [description, setDescription] = useState("");

//   const handleAddModule = () => {
//     // Add logic to add module (e.g., API call)
//     if (moduleName.trim() && description.trim()) {
//       console.log("Module Added:", { moduleName, description });
//       setModuleName("");
//       setDescription("");
//       setIsSuccessOpen(true);
//     }
//   };

//   const handleConfirmPublish = () => {
//     // Add logic to publish course (e.g., API call)
//     console.log("Course Published for Review:", { moduleName, description });
//     setIsConOpen(false);
//     setIsSuccessOpen(true); // Show success message after confirmation
//   };

//   const handleDelete = () => {
//     // Add logic to delete module (e.g., API call)
//     console.log("Module Deleted");
//     setModuleName("");
//     setDescription("");
//   };

//   return (
//     <Row className="lesson-body2">
//       <Link to="/section" id="back-btn2">
//         <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
//           <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
//         </svg>
//       </Link>
//       <Row className="white-box2">
//         <h2 id="vid-title2">Upload Course Content</h2>

//         <div className="row-item2">
//           <label id="label-vid2">Module Name
//             <input
//               type="text"
//               id="input-vid2"
//               value={moduleName}
//               onChange={(e) => setModuleName(e.target.value)}
//             />
//           </label>

//           <label id="label-vid2">Description
//             <input
//               type="text"
//               id="input-vid2"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </label>
//         </div>
//         <button id="del-btn" onClick={handleDelete}>
//           Delete
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//             <path d="M6 19.4998C6 20.5998 6.9 21.4998 8 21.4998H16C17.1 21.4998 18 20.5998 18 19.4998V7.49976H6V19.4998ZM19 4.49976H15.5L14.5 3.49976H9.5L8.5 4.49976H5V6.49976H19V4.49976Z" fill="#D72638"/>
//           </svg>
//         </button>

//         <button id="add-btn">Add Sections</button>
//         <Col id="last-two-btn2">
//           <button id="btn-vid12">Final Quiz</button>
//           <button id="btn-vid22" onClick={handleAddModule}>Add Module</button>
//         </Col>
//         <button id="btn-done" onClick={() => setIsConOpen(true)}>Done</button>
//         <Confirm isOpen={isConOpen} onClose={() => setIsConOpen(false)} onConfirm={handleConfirmPublish} />
//         <AddModule isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
//       </Row>
//     </Row>
//   );
// };

// export { Publish };
import React, { useState, useEffect } from "react";
import "./Publish.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Confirm = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div id="con-body">
      <h3 id="con-txt">Are you sure you want to publish the course? 
      It will be sent to the administration for review.</h3>
      <Col className="two-btn-con">
        <button id="ok-btn" onClick={onConfirm}>OK</button>
        <button id="can-btn" onClick={onClose}>Cancel</button>
      </Col>
    </div>
  );
};

const AddModule = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="con-body">
      <h3 id="con-txt">The course has been sent to the administration 
      for approval.</h3>
      <Col className="two-btn-con">
        <button id="ok-btn" onClick={onClose}>OK</button>
      </Col>
    </div>
  );
};

const Publish = () => {
  const [isConOpen, setIsConOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [description, setDescription] = useState("");
  const [modules, setModules] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing modules if needed
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const response = await fetch("https://api.example.com/modules", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setModules(data);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  const handleAddModule = async () => {
    if (moduleName.trim() && description.trim() && (role === "Admin" || role === "Instructor")) {
      const newModule = { moduleName, description };
      try {
        const response = await fetch("https://api.example.com/modules", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify(newModule),
        });
        if (response.ok) {
          setModules([...modules, newModule]);
          setModuleName("");
          setDescription("");
          setIsSuccessOpen(true);
        }
      } catch (error) {
        console.error("Error adding module:", error);
      }
    }
  };

  const handleConfirmPublish = async () => {
    if (role === "Admin" || role === "Instructor") {
      try {
        const response = await fetch("https://api.example.com/courses/publish", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ modules }),
        });
        if (response.ok) {
          setIsConOpen(false);
          setIsSuccessOpen(true);
        }
      } catch (error) {
        console.error("Error publishing course:", error);
      }
    }
  };

  const handleDelete = async (index) => {
    if (role === "Admin") {
      if (window.confirm("Are you sure you want to delete this module?")) {
        try {
          const moduleId = modules[index].id; // Assuming each module has an id
          await fetch(`https://api.example.com/modules/${moduleId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          const updatedModules = modules.filter((_, i) => i !== index);
          setModules(updatedModules);
        } catch (error) {
          console.error("Error deleting module:", error);
        }
      }
    }
  };

  return (
    <Row className="lesson-body2">
      <Link to="/home-course" id="back-btn2">
        <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
      </Link>
      <Row className="white-box2">
        <h2 id="vid-title2">Upload Course Content</h2>
        {modules.map((module, index) => (
          <div className="row-item2" key={index}>
            <label id="label-vid2">Module Name
              <input
                type="text"
                id="input-vid2"
                value={module.moduleName}
                disabled
              />
            </label>
            <label id="label-vid2">Description
              <input
                type="text"
                id="input-vid2"
                value={module.description}
                disabled
              />
            </label>
            {role === "Admin" && (
              <button id="del-btn" onClick={() => handleDelete(index)}>
                Delete
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M6 19.4998C6 20.5998 6.9 21.4998 8 21.4998H16C17.1 21.4998 18 20.5998 18 19.4998V7.49976H6V19.4998ZM19 4.49976H15.5L14.5 3.49976H9.5L8.5 4.49976H5V6.49976H19V4.49976Z" fill="#D72638"/>
                </svg>
              </button>
            )}
          </div>
        ))}
        {(role === "Admin" || role === "Instructor") && (
          <div className="row-item2">
            <label id="label-vid2">Module Name
              <input
                type="text"
                id="input-vid2"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
              />
            </label>
            <label id="label-vid2">Description
              <input
                type="text"
                id="input-vid2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
        )}
        <button id="add-btn">Add Sections</button>
        <Col id="last-two-btn2">
          <button id="btn-vid12">Final Quiz</button>
          {(role === "Admin" || role === "Instructor") && (
            <button id="btn-vid22" onClick={handleAddModule} disabled={!moduleName.trim() || !description.trim()}>
              Add Module
            </button>
          )}
        </Col>
        {(role === "Admin" || role === "Instructor") && (
          <button id="btn-done" onClick={() => setIsConOpen(true)} disabled={modules.length === 0}>
            Done
          </button>
        )}
        <Confirm isOpen={isConOpen} onClose={() => setIsConOpen(false)} onConfirm={handleConfirmPublish} />
        <AddModule isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
      </Row>
    </Row>
  );
};

export { Publish };