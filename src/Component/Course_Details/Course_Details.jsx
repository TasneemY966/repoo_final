import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import "./Course_Details.css";
import { Link, useNavigate } from "react-router-dom";


export default function Course_Details() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    courseName: "",
    description: "",
    skills: "",
    userLevel: "",
    cover: null,
  });
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (role !== "Admin" && role !== "Instructor") {
      alert("Only Admin and Instructor roles can create courses.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const response = await fetch("https://api.example.com/courses", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });
      if (response.ok) {
        navigate("/publish");
      } else {
        console.error("Failed to create course");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setValidated(true);
  };

  return (
    <>
      <div className="Parent">
        <div className="child">
          <div className="cont-child">
            <p className="det-new-course">Create New Course</p>
            <Form
              className="form-group"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <label htmlFor="courseName" className="label">
                Course Name
              </label>
              <input
                id="courseName"
                name="courseName"
                type="text"
                className="form-control inputs"
                required
                value={formData.courseName}
                onChange={handleChange}
              />

              <label htmlFor="description" className="label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                type="text"
                className="form-control inputs input-desc"
                required
                value={formData.description}
                onChange={handleChange}
              />

              <label htmlFor="skills" className="label">
                Skills
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                className="form-control inputs"
                required
                value={formData.skills}
                onChange={handleChange}
              />

              <label htmlFor="userLevel" className="label">
                User Level
              </label>
              <input
                id="userLevel"
                name="userLevel"
                type="text"
                className="form-control inputs"
                required
                value={formData.userLevel}
                onChange={handleChange}
              />

              <label htmlFor="cover" className="label">
                Cover
              </label>
              <input
                id="cover"
                name="cover"
                type="file"
                className="form-control inputs"
                required
                onChange={handleChange}
              />

              <Link className="link-start" to={role === "Admin" || role === "Instructor" ? "/publish" : "#"}>
                <button
                  type="submit"
                  className="next"
                  disabled={!(role === "Admin" || role === "Instructor")}
                >
                  <i id="next">Next</i>
                </button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
      
    </>
  );
}