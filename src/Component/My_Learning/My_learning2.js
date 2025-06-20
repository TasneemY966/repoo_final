
import React, { useEffect, useState } from "react";
import "./My_learning.css";
import Navbars from "../Navbar/Navbar";
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function My_learning2() {
  const [courses, setCourses] = useState([]);
  const api_url = "https://fakestoreapi.com/products"; // Example API, adjust as needed

  useEffect(() => {
    axios.get(api_url)
      .then((response) => {
        // Simulate completed course data, adjust mapping based on your API response
        const courseData = response.data.map(item => ({
          id: item.id,
          title: item.title,
          image: "https://via.placeholder.com/120", // Placeholder image
        }));
        setCourses(courseData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning">Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_home"><Link to="/My-learning" id="link_home">My learning</Link> </Col>
        <Col className="link_Leaderboard"><Link to="/Leaderboard" id="link_Leaderboard">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <h4 id="My-learning-txt">My learning</h4>
      </Row>
      <Row className="btns">
        <button className="btn-complete"><p id="btn-complete-txt"><Link id="btn-complete-txt" to="/My-learning">In Progress</Link></p></button>
        <button className="btn-progress"><p id="btn-progress-txt"><Link id="btn-progress-txt" to="/My-learning2">Complete</Link></p></button>
      </Row>
      {courses.map((course) => (
        <Row key={course.id} className="bordd">
          <Col>
            <Card.Img className="card_img2" variant="top" src={course.image} />
          </Col>
          <Col xs={6} className="m-auto content-progress">
            <Card.Body>
              <Card.Title className="card_title1">{course.title}</Card.Title>
              <div className="content-checkbox">
                <input type="checkbox" id="check" checked />
                <p className="txt-checkbox">Great Work! You have passed all requirements.</p>
              </div>
            </Card.Body>
          </Col>
          <Col className="content-next">
            <div id="line"></div>
          </Col>
          <Col>
            <div className="ratee">
              <button className="rate"><Link id="btn-progress-txt" to={`/rate/${course.id}`}>Rate</Link></button>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
}

export default My_learning2;