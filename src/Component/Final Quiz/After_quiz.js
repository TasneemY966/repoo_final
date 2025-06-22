import React from "react";
import "./Final_quiz.css";
import Navbars from "../Navbar/Navbar";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function After_quiz() {
  return (
    <Row>
      <Navbars/>
      <Col >
      {/* <center> */}
        <div className="quiz_name m-auto ">
          <p className="nameofquiz ">
            Module 1 Challenge: The basics of user experience design
        </p>
        </div>
        {/* </center> */}
        </Col>
        <Row><br /></Row>
        <Row><br /></Row>
        <Row><br /></Row>
        <Row><br /></Row>
        <Row><br /></Row>
        <Row className="m-auto">
        {/* <div className="quiz-content m-auto">  */}
          <Col className="quiz-content m-auto">
          <p className="sub-txt">Submit your assignment</p>
          <p id="time-txt" > Due<i className="time-txt">  February 24, 11:59 PM </i></p>
          <p id="time-txt" > Attempts<i className="time-txt">   3 every 24 hours </i></p>
          {/* <input type="time" name="time" id="time" value="time" /> */}
          </Col>
          <Col className="m-auto">
          <p id="time-txt" > Try Again</p>
          </Col>
          {/* </div> */}
        </Row>
        <Row><div className="line"></div></Row>
        <Row className="">
        {/* <div className="quiz-content m-auto">  */}
          <Col className="quiz-content m-auto">
          <p className="sub-txt">Receive grade</p>
          <p id="time-txt" > To Pass <i className="time-txt"> 80% or higher </i></p>
          </Col>
          
          <Col>  
          <p className="sub-txt">Your grade</p>
          <p id="time-txt" >76 % </p> 
           </Col>
           
          {/* </div> */}
        </Row>
      
      
    </Row>
  );
}
export default After_quiz;