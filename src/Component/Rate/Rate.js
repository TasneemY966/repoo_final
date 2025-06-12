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
function Rate({ value }) {
  return (
    <Row className="content-rate">
      <Row className="justify-content-md-center linkk-pages">
        <Col xs lg="2" className="link_course"><Link to="/Rate" id="link_course" >Course</Link></Col>
        <Col xs lg="2" className="link_Instructor"><Link to="/RateInstructor" id="link_Instructor">Instructor</Link> </Col>
      </Row>
      <Row>

        <div style={{ margin: "50px" }}>
          <h3 className="rate-course" >Rate Our Course</h3>
            <StarRating totalStars={5} />
        </div>
      </Row>
      <Row className="m-auto">
        <label htmlFor="comment" id="add-comment"> Add Comments</label>
        <textarea
          className="comment"
          id="comment"
          name="comment"
          placeholder="Write your comment here..."
        ></textarea>

      </Row>


      <Row className="done" >
        <button className="btn-done"><Link id="btn-done" to="/My-learning2">Done</Link></button>
      </Row>
    </Row>
  );
}
export default Rate;