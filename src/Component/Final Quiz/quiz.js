
import React from "react";
import "./quiz.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Quizz() {
  return (
    // <center>
  <Col >  
  <Link to="/video">
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square" />
    </svg></Link>
      <p className="name-quiz">    Module 1 Challenge: The basics of user experience design</p>
      <br/>
      <br />
    <Col className="col-auto">
      <ol>
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer1" id="answer" value="A" />
          <label htmlFor="answer1A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer" value="B" />
          <label htmlFor="answer1B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer" value="C" />
          <label htmlFor="answer1C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer1" id="answer" value="D" />
          <label htmlFor="answer1D" className="answer-txt"> Assuit</label>
        </div>
        {/* <br/> */}
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer2" id="answer" value="A" />
          <label htmlFor="answer2A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer2" id="answer" value="B" />
          <label htmlFor="answer2B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer2" id="answer" value="C" />
          <label htmlFor="answer2C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer2" id="answer" value="D" />
          <label htmlFor="answer2D" className="answer-txt"> Assuit</label>
        </div>
        {/* <br/> */}
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer3" id="answer" value="A" />
          <label htmlFor="answer3A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer3" id="answer" value="B" />
          <label htmlFor="answer3B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer3" id="answer" value="C" />
          <label htmlFor="answer3C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer3" id="answer" value="D" />
          <label htmlFor="answer3D" className="answer-txt"> Assuit</label>
        </div>
        {/* <br/> */}
        <li>
          <p className="ques-txt">What is the capital of France?</p></li>
        <div>
          <input type="radio" name="answer4" id="answer" value="A" />
          <label htmlFor="answer4A" className="answer-txt"> New York</label>
        </div>
        <div>
          <input type="radio" name="answer4" id="answer" value="B" />
          <label htmlFor="answer4B" className="answer-txt"> London</label>
        </div>
        <div>
          <input type="radio" name="answer4" id="answer" value="C" />
          <label htmlFor="answer4C" className="answer-txt"> Paris</label>
        </div>
        <div>
          <input type="radio" name="answer4" id="answer" value="D" />
          <label htmlFor="answer4D" className="answer-txt"> Assuit</label>
        </div>
      </ol>
      <Link to="/After_quiz" className="sub-btn">
      <button type="submit" className="btn-submitt">Submit</button>
      </Link>
    </Col>
  </Col>
    // </center> 
  );
}
export default Quizz;