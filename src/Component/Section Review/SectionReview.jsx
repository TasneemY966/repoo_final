import React, { useState, useEffect } from "react";
import "./SectionReview.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import courseimgg from "../../Assets/frame-106.png";

export default function SectionReview() {
  const [sections, setSections] = useState([]);
  const [role, setRole] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [quizContent, setQuizContent] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sectionName = searchParams.get("section");

  useEffect(() => {
    fetchSections();
    const userRole = localStorage.getItem("role") || "";
    setRole(userRole);
  }, []);

  const fetchSections = async () => {
    try {
      const response = await fetch("https://api.example.com/sections", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setSections(data);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  const handleEdit = (id) => {
    if (role === "Admin" || role === "Instructor") {
      setQuizContent(prompt("Enter new quiz content:", sections.find(s => s.id === id)?.title || ""));
      if (quizContent) {
        handleSaveQuiz(id, quizContent);
      }
    }
  };

  const handleSaveQuiz = async (id, content) => {
    try {
      const response = await fetch(`https://api.example.com/sections/${id}/quiz`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ title: content, updatedAt: "2025-06-23T01:23:00Z" }), // Current date and time in ISO format
      });
      if (response.ok) {
        fetchSections(); // Refresh sections after update
      }
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  const handleDelete = (id) => {
    if (role === "Admin") {
      if (window.confirm("Are you sure you want to delete this section?")) {
        fetch(`https://api.example.com/sections/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }).then(() => fetchSections());
      }
    }
  };

  const handleAddVideos = () => {
    if (sectionName && (role === "Admin" || role === "Instructor")) {
      navigate(`/add-videos?section=${sectionName}`);
    }
  };

  const handleDone = () => {
    if (sectionName && (role === "Admin" || role === "Instructor")) {
      navigate("/publish");
    }
  };

  return (
    <Row className="lesson-body2">
      <Link to="/section" id="back-btn2">
        <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
      </Link>
      <Row className="white-box2">
        <h2 id="vid-title2">Section Review</h2>
        {sections.map((section, index) => (
          <Col id="body-section" key={section.id}>
            {index + 1}<img src={courseimgg} alt="imgg" id="courseee"/>
            <p>{section.title}</p>
            {(role === "Admin" || role === "Instructor") && (
              <button id="review-btn-course" onClick={() => handleEdit(section.id)}>
                Edit Quiz
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.5 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V13.5" stroke="#005DD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9608 7.78929 15.4695 8 16 8H20M13.378 15.626C13.5752 15.4288 13.7317 15.1946 13.8384 14.9369C13.9452 14.6792 14.0001 14.4029 14.0001 14.124C14.0001 13.8451 13.9452 13.5688 13.8384 13.3111C13.7317 13.0534 13.5752 12.8192 13.378 12.622C13.1807 12.4248 12.9466 12.2683 12.6889 12.1615C12.4311 12.0548 12.1549 11.9999 11.876 11.9999C11.597 11.9999 11.3208 12.0548 11.0631 12.1615C10.8054 12.2683 10.5712 12.4248 10.374 12.622L5.36398 17.634C5.12622 17.8716 4.9522 18.1653 4.85798 18.488L4.02098 21.358C3.99588 21.444 3.99437 21.5353 4.01662 21.6221C4.03887 21.7089 4.08404 21.7882 4.14742 21.8516C4.2108 21.9149 4.29006 21.9601 4.37689 21.9824C4.46372 22.0046 4.55493 22.0031 4.64098 21.978L7.51098 21.141C7.83364 21.0468 8.12735 20.8728 8.36498 20.635L13.378 15.626Z" stroke="#005DD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            )}
            {role === "Admin" && (
              <button id="del-btn-course" onClick={() => handleDelete(section.id)}>
                Delete
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M6 19.4998C6 20.5998 6.9 21.4998 8 21.4998H16C17.1 21.4998 18 20.5998 18 19.4998V7.49976H6V19.4998ZM19 4.49976H15.5L14.5 3.49976H9.5L8.5 4.49976H5V6.49976H19V4.49976Z" fill="#D72638"/>
                </svg>
              </button>
            )}
          </Col>
        ))}
        <Col id="last-two-btn2">
          {(role === "Admin" || role === "Instructor") && (
            <button id="btn-vid12" onClick={handleAddVideos}>Add Videos</button>
          )}
          <button id="btn-vid22" onClick={handleDone}>Done</button>
        </Col>
      </Row>
    </Row>
  );
}