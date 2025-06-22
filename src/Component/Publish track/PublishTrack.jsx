
import React, { useState } from "react";
import "./PublishTrack.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function PublishTrack() {
  const [trackName, setTrackName] = useState("");
  const [trackDescription, setTrackDescription] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const navigate = useNavigate();

  const handleNext = async () => {
    if (!trackName.trim() || !trackDescription.trim() || !coverFile) {
      alert("Please fill all fields and upload a cover file.");
      return;
    }

    if (role !== "Admin" && role !== "Instructor") {
      alert("Only Admin and Instructor roles can create tracks.");
      return;
    }

    const formData = new FormData();
    formData.append("trackName", trackName);
    formData.append("trackDescription", trackDescription);
    formData.append("coverFile", coverFile);

    try {
      const response = await fetch("https://api.example.com/tracks", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (response.ok) {
        navigate("/publish"); // Navigate to publish page after successful creation
      } else {
        console.error("Failed to create track");
      }
    } catch (error) {
      console.error("Error:", error);
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
        <h2 id="vid-title2">Create New Track</h2>

        <Row className="row-track">
          <label id="label-track">Track Name
            <input
              type="text"
              id="input-track"
              value={trackName}
              onChange={(e) => setTrackName(e.target.value)}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>
          <label id="label-track">Track Description
            <textarea
              id="txtArea-track"
              value={trackDescription}
              onChange={(e) => setTrackDescription(e.target.value)}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>
          
          <label id="label-track">Cover
            <input
              type="file"
              id="input-track"
              onChange={(e) => setCoverFile(e.target.files[0])}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>
        </Row>

        <button
          id="btn-done2"
          onClick={handleNext}
          disabled={!(role === "Admin" || role === "Instructor") || !trackName.trim() || !trackDescription.trim() || !coverFile}
        >
          Next
        </button>
      </Row>
    </Row>
  );
}