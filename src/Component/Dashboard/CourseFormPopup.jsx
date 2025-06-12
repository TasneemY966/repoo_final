// CourseFormPopup.jsx
import React, { useState } from 'react';
import './CourseFormPopup.css';

const CourseFormPopup = ({ isOpen, onClose, courseData }) => {
  const [courseName, setCourseName] = useState(courseData?.name || '');
  const [price, setPrice] = useState(courseData?.price?.split(' ')[0] || '');
  const [discount, setDiscount] = useState(courseData?.discount?.split(' ')[0] || '0');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      courseName,
      price,
      discount
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content3">
        <div className="form-group">
          <label className='pop-labels'>Course name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="UI Design Principles"
            className='pop-input'
          />
        </div>

        <div className="form-group">
          <label className='pop-labels'>Price</label>
          <div className="input-with-suffix">
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="800"
              className='pop-input'
            />
            <span className="input-suffix">L.E</span>
          </div>
        </div>

        <div className="form-group">
          <label className='pop-labels'>Discount</label>
          <div className="input-with-suffix">
            <input
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="0"
              className='pop-input'
            />
            <span className="input-suffix">L.E</span>
          </div>
        </div>

        <button className="done-btn" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export {CourseFormPopup};