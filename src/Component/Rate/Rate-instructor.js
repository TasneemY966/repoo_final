import React, { useState } from "react";
import "./Rate.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ display: "flex", gap: "15px", fontSize: "90px", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              color: starValue <= (hover || rating) ? "#765378" : "#FFF",
              transition: "color 0.6s"
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
function RateInstructor({ value }) {
  return (
    <Row className="content-rate">
      <Row className="justify-content-md-center link-pages">
        <Col xs lg="2" className="link_Instructor"><Link to="/Rate" id="link_Instructor" >Course</Link></Col>
        <Col xs lg="2" className="link_course"><Link to="/RateInstructor" id="link_course">Instructor</Link> </Col>
      </Row>
      <Row>

        <div style={{ margin: "50px" }}>
          <h3 className="rate-course" >Rate Instructor</h3>
            <StarRating totalStars={5} />
        </div>
      </Row>
      <Row className="done" >
        <button className="btn-done"><Link id="btn-done" to="/My-learning2">Done</Link></button>
      </Row>
    </Row>
  );
}
export default RateInstructor;