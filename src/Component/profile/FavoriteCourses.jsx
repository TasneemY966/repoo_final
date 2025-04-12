import React from "react";
import "./styles.css";
import CourseCard from "./CourseCard";

const FavoriteCourses = ({ courses }) => {
  return (
    <div className="favorite-courses">
      <h3>Favorite Courses</h3>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCourses;
