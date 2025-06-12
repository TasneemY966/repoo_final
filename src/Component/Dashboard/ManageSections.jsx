// ManageSections.jsx
import React, { useState } from 'react';
import './ManageSections.css';
import { SideNav } from './SideNav';
import {SectionFormPopup} from './SectionFormPopup';

const ManageSections = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Most Popular Courses",
      courses: ["OOP C++", "AI Developer", "Graphic Design", "UI/UX Design"]
    }
  ]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddSection = (sectionData) => {
    const newSection = {
      id: sections.length + 1,
      name: sectionData.name,
      courses: sectionData.selectedCourses
    };

    setSections([...sections, newSection]);
    console.log("New section added:", newSection);
  };

  return (
    <div className="dashboard-container">
      <SideNav />
      <main className="dashboard-content">
        <h1 className="section-title">Manage Sections</h1>
        
        <div className="action-buttons">
          <button className="create-section-btn" onClick={openPopup}>Create Section</button>
        </div>
        
        {sections.map(section => (
          <div className="section-card" key={section.id}>
            <h2 className="section-name">{section.name}</h2>
            <div className="courses-container">
              {section.courses.map((course, index) => (
                <div className="course-pill" key={index}>
                  {course}
                </div>
              ))}
              <button className="more-options-btn">⋮</button>
            </div>
          </div>
        ))}

        <SectionFormPopup 
          isOpen={isPopupOpen} 
          onClose={closePopup} 
          onSubmit={handleAddSection}
        />
      </main>
    </div>
  );
};

export {ManageSections};