import React, { useState } from 'react';
import './AddCourseForm.css';

const AddCourseForm = ({ onSubmit, onCancel }) => {
  const [courseData, setCourseData] = useState({
    name: '',
    price: '',
    discount: '0'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(courseData);
  };

  return (
    <div className="add-course-form-container">
      <form onSubmit={handleSubmit} className="add-course-form">
        <div className="form-group">
          <label htmlFor="courseName">Course name</label>
          <input
            type="text"
            id="courseName"
            name="name"
            value={courseData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="UI Design Principles"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <div className="price-input-container">
            <input
              type="number"
              id="price"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              className="form-control"
              placeholder="800"
              required
            />
            <span className="currency">L.E</span>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="discount">DisCount</label>
          <div className="price-input-container">
            <input
              type="number"
              id="discount"
              name="discount"
              value={courseData.discount}
              onChange={handleChange}
              className="form-control"
              placeholder="0"
            />
            <span className="currency">L.E</span>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-submit">Done</button>
        </div>
      </form>
    </div>
  );
};

export {AddCourseForm};