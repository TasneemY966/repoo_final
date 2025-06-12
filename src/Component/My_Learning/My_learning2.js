import React from 'react';
import './My_learning.css';
import Navbars from '../Navbar/Navbar';
import { Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
function My_learning2() {
  return (
    <>
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning" >Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_home"><Link to="/My-learning" id="link_home">My learning</Link> </Col>
        <Col className="link_Leaderboard"><Link to="/Leaderboard" id="link_Leaderboard">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <h4 id="My-learning-txt">My learning</h4>
      </Row>
      <Row className='btns'>
        <button className="btn-complete"><p id='btn-complete-txt'><Link id='btn-complete-txt' to="/My-learning">In Progress</Link></p></button>
        <button className="btn-progress"><p id='btn-progress-txt'><Link id='btn-progress-txt' to="/My-learning2">Complete</Link></p></button>
      </Row>
      <Row className="bordd">
        <Col>
        <Card.Img className='card_img2' variant="top" /*src={product.image}*/ />
        </Col>
        <Col xs={6} className='m-auto content-progress'> 
         <Card.Body>
          <Card.Title className='card_title1'>Programming in C++</Card.Title>
          <div className='content-checkbox'>
            <input type="checkbox" id='check' checked />
            <p className='txt-checkbox'>Great Work! You have passed all requirements.</p>
          </div> 
        </Card.Body>
        </Col>
        <Col className='content-next'>
          <div id='line'></div>
        </Col>
        <Col>
          {/* <center> */}
          <div className='ratee'>
            <button className="rate"><Link id='btn-progress-txt' to="/Rate">Rate</Link></button>
          </div>
          {/* </center> */}
        </Col>
      </Row>
    </>
  );
}
export default My_learning2;