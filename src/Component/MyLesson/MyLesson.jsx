import React, { useState } from "react";
import "./MyLesson.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function MyLesson() {
  const [videoName, setVideoName] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [file, setFile] = useState(null);
  const [captionFile, setCaptionFile] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sectionName = searchParams.get("section");

  const handleGenerateQuiz = async () => {
    if (!videoName.trim() || !videoFile || !(role === "Admin" || role === "Instructor")) {
      alert("Please fill all fields and ensure you have Admin or Instructor role.");
      return;
    }

    const formData = new FormData();
    formData.append("videoName", videoName);
    formData.append("videoFile", videoFile);
    formData.append("file", file);
    formData.append("captionFile", captionFile);

    try {
      const response = await fetch("https://api.example.com/lessons/generate-quiz", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (response.ok) {
        console.log("Quiz Generated for:", { videoName, videoFile });
        alert("Quiz generated successfully!");
      } else {
        console.error("Failed to generate quiz");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDone = async () => {
    if (!videoName.trim() || !videoFile || !(role === "Admin" || role === "Instructor")) {
      alert("Please fill all fields and ensure you have Admin or Instructor role.");
      return;
    }

    const formData = new FormData();
    formData.append("videoName", videoName);
    formData.append("videoFile", videoFile);
    formData.append("file", file);
    formData.append("captionFile", captionFile);
    formData.append("sectionName", sectionName);
    formData.append("uploadedAt", "2025-06-23T01:26:00Z"); // Current date and time in ISO format

    try {
      const response = await fetch("https://api.example.com/lessons", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (response.ok) {
        console.log("Video Uploaded:", { videoName, videoFile, file, captionFile });
        navigate(`/section-review?section=${sectionName}`); // Navigate back to section review
      } else {
        console.error("Failed to upload video");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Row className="lesson-body">
      <Link to={`/section-review?section=${sectionName}`} id="back-btn">
        <svg id="back-btn" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
      </Link>
      <Row className="white-box">
        <h2 id="vid-title">Upload Video</h2>

        <div className="row-item">
          <label id="label-vid">Video Name
            <input
              type="text"
              id="input-vid"
              placeholder="Vid"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>

          <label id="label-vid">Video
            <input
              type="file"
              id="input-vid"
              onChange={(e) => setVideoFile(e.target.files[0])}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>

          <label id="label-vid">File
            <input
              type="file"
              id="input-vid"
              onChange={(e) => setFile(e.target.files[0])}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>

          <label id="label-vid">Caption File
            <input
              type="file"
              id="input-vid"
              onChange={(e) => setCaptionFile(e.target.files[0])}
              disabled={!(role === "Admin" || role === "Instructor")}
            />
          </label>
        </div>

        <Col id="last-two-btn">
          <button
            id="btn-vid1"
            onClick={handleGenerateQuiz}
            disabled={!(role === "Admin" || role === "Instructor") || !videoName.trim() || !videoFile}
          >
            Generate Quiz
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
              <path d="M17.7274 10.4947C18.2351 9.987 18.2351 9.16388 17.7274 8.6562L9.45425 0.383051C8.94657 -0.124631 8.12345 -0.124631 7.61577 0.383051C7.10809 0.890732 7.10809 1.71385 7.61577 2.22153L14.9697 9.57544L7.61577 16.9294C7.10809 17.437 7.10809 18.2601 7.61577 18.7678C8.12345 19.2755 8.94657 19.2755 9.45425 18.7678L17.7274 10.4947ZM0.780762 10.8754L16.8082 10.8754V8.27544L0.780762 8.27544L0.780762 10.8754Z" fill="black"/>
            </svg>
          </button>
          <button
            id="btn-vid2"
            onClick={handleDone}
            disabled={!(role === "Admin" || role === "Instructor") || !videoName.trim() || !videoFile}
          >
            Done
          </button>
        </Col>
      </Row>
    </Row>
  );
}