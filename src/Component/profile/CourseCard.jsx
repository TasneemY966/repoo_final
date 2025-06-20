import React from "react";
import "./styles.css";

const CourseCard = ({ title, instructor, skills, completionDate, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-details">
        <h3>{title}</h3>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <p>Instructor: {instructor}</p>
        {completionDate && <p className="completion-date">Completed: {completionDate}</p>}
      </div>
    </div>
  );
};

export default CourseCard;