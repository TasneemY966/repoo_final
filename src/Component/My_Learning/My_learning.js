import React from 'react';
import './My_learning.css';
import Navbars from '../Navbar/Navbar';
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function My_learning() {
  return (
    <>
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning" >Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_home"><Link to="/My-learning" id="link_home">My learning</Link> </Col>
        <Col className="link_learning"><Link to="/Leaderboard" id="link_learning">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <h4 id="My-learning-txt">My learning</h4>
      </Row>
      <Row className='btns'>
        <button className="btn-progress"><p id='btn-progress-txt'><Link id='btn-progress-txt' to="/My-learning">In Progress</Link></p></button>
        <button className="btn-complete"><p id='btn-complete-txt'><Link id='btn-complete-txt' to="/My-learning2">Complete</Link></p></button>
      </Row>
      <Row className="bordd">
        <Col><Card.Img className='card_img1' variant="top" /*src={product.image}*/ /></Col>
        <Col xs={6} className='m-auto content-progress'>  <Card.Body>
          <Card.Title className='card_title1'>OOP C++</Card.Title>
          {/* <ProgressBar className='prog-bar' now={30} /> */}
          <input type="range" />
          <p id='over-progress'>Overall Progress</p>
        </Card.Body>
        </Col>
        {/* <div id='line'></div> */}
        <Col className='content-next'>
                  <div id='line'></div>
                </Col>
        <Col className='content-next'>
          {/* <div id='line'></div> */}
          <p id='txt-next'> Next Up</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
            <path d="M15.8759 32.4059C15.5048 32.4059 15.1489 32.2584 14.8864 31.996C14.624 31.7336 14.4766 31.3776 14.4766 31.0065V14.2143C14.4767 13.9758 14.5377 13.7414 14.6539 13.5332C14.7701 13.325 14.9376 13.1499 15.1404 13.0246C15.3433 12.8992 15.5748 12.8278 15.813 12.8171C16.0511 12.8064 16.2881 12.8567 16.5014 12.9633L33.2937 21.3594C33.5258 21.4757 33.721 21.6543 33.8574 21.8753C33.9938 22.0962 34.066 22.3507 34.066 22.6104C34.066 22.87 33.9938 23.1246 33.8574 23.3455C33.721 23.5665 33.5258 23.7451 33.2937 23.8614L16.5014 32.2575C16.3073 32.3549 16.0931 32.4056 15.8759 32.4059ZM17.2753 16.4784V28.7424L29.5392 22.6104L17.2753 16.4784Z" fill="#1E1E1E" />
            <path d="M22.8722 5.81824C26.1934 5.81824 29.44 6.80308 32.2015 8.64824C34.9629 10.4934 37.1152 13.116 38.3862 16.1844C39.6572 19.2527 39.9897 22.6291 39.3418 25.8865C38.6938 29.1439 37.0945 32.1359 34.7461 34.4844C32.3977 36.8328 29.4056 38.4321 26.1482 39.0801C22.8908 39.728 19.5145 39.3954 16.4461 38.1245C13.3777 36.8535 10.7551 34.7012 8.90997 31.9397C7.06481 29.1783 6.07997 25.9317 6.07997 22.6105C6.07997 18.1569 7.84914 13.8857 10.9983 10.7366C14.1475 7.58741 18.4186 5.81824 22.8722 5.81824ZM22.8722 3.01953C18.9975 3.01953 15.2098 4.16852 11.9881 6.3212C8.76634 8.47388 6.25532 11.5336 4.77253 15.1133C3.28974 18.6931 2.90177 22.6322 3.65769 26.4325C4.41361 30.2327 6.27947 33.7235 9.01931 36.4634C11.7592 39.2032 15.2499 41.0691 19.0502 41.825C22.8505 42.5809 26.7896 42.1929 30.3693 40.7101C33.9491 39.2274 37.0088 36.7163 39.1615 33.4946C41.3142 30.2729 42.4631 26.4852 42.4631 22.6105C42.4631 17.4146 40.3991 12.4316 36.7251 8.75759C33.0511 5.08357 28.068 3.01953 22.8722 3.01953Z" fill="#1E1E1E" />
          </svg>
          <p id='txt-nxt-video'>C++ OOP - What is polymorphism in programming?</p>
          <p id='time-video'>Video . 10 min</p>
        </Col>
      </Row>
    </>
  );
}
export default My_learning;