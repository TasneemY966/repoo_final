// SectionFormPopup.jsx
import React, { useState } from 'react';
import './SectionFormPopup.css';

const SectionFormPopup = ({ isOpen, onClose, onSubmit }) => {
  const [sectionName, setSectionName] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sample available courses
  const availableCourses = [
    "OOP C++", 
    "AI Developer", 
    "Graphic Design", 
    "UI/UX Design", 
    "HTML", 
    "CSS", 
    "JavaScript", 
    "SQL", 
    "Python", 
    "UX Design"
  ];

  const handleSubmit = () => {
    onSubmit({
      name: sectionName,
      selectedCourses: selectedCourses
    });
    resetForm();
    onClose();
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setSectionName('');
    setSelectedCourses([]);
    setDropdownOpen(false);
  };

  const toggleCourse = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const removeCourse = (course) => {
    setSelectedCourses(selectedCourses.filter(c => c !== course));
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="form-group">
          <label className='sec-lab2'>Section name</label>
          <input
            type="text"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
            placeholder="Get Start With"
            className="section-name-input"
          />
        </div>

        <div className="form-group">
          <div className="dropdown-container">
            <div 
              className="dropdown-header" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={`dropdown-placeholder ${selectedCourses.length > 0 ? 'has-value' : ''}`}>
                Choose Course
              </span>
              <span className="dropdown-arrow">▼</span>
            </div>
            
            {dropdownOpen && (
              <div className="dropdown-menu">
                {availableCourses.filter(course => !selectedCourses.includes(course)).map((course, index) => (
                  <div 
                    key={index} 
                    className="dropdown-item"
                    onClick={() => {
                      toggleCourse(course);
                      setDropdownOpen(false);
                    }}
                  >
                    {course}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="selected-courses">
          {selectedCourses.map((course, index) => (
            <div className="course-tag" key={index}>
              {course}
              <button className="remove-course-btn" onClick={() => removeCourse(course)}>✕</button>
            </div>
          ))}
        </div>

        <div className="button-group2">
          <button className="cancel-btn2" onClick={handleCancel}>
            cancel
          </button>
          <button className="save-btn2" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export {SectionFormPopup};