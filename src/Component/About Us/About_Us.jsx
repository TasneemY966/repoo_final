import React from "react";
import { Navbar, NavDropdown, Button, Form, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import img from "../../Assets/about1.png";
import img1 from "../../Assets/about-innov1.png";
import img2 from "../../Assets/about-innov2.png";
import img3 from "../../Assets/about-innov3.png";
import './about_Us.css';
export default function About_Us ()  {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navv">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/home" id="link"className="home">Home</Link>
            <Link to="/about-us" id="link"className="home">About Us</Link>

          </Nav>
          <img></img>
          <Button id="but-join" variant="light" size="sm"><Link to="/sign-up" id="link"className="home">Join Us</Link>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
              <path d="M25.3782 12.1904C25.9542 11.6144 25.9542 10.6805 25.3782 10.1046L15.9921 0.718388C15.4161 0.142406 14.4822 0.142406 13.9063 0.718388C13.3303 1.29437 13.3303 2.22822 13.9063 2.8042L22.2495 11.1475L13.9063 19.4907C13.3303 20.0667 13.3303 21.0006 13.9063 21.5765C14.4822 22.1525 15.4161 22.1525 15.9921 21.5765L25.3782 12.1904ZM0.62793 12.6224H24.3353V9.67257H0.62793V12.6224Z" fill="black" />
            </svg>
          </Button>{' '}
          <Button className="but1" id="but-contact">Contact Us
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
              <path d="M25.3782 12.1904C25.9542 11.6144 25.9542 10.6805 25.3782 10.1046L15.9921 0.718388C15.4161 0.142406 14.4822 0.142406 13.9063 0.718388C13.3303 1.29437 13.3303 2.22822 13.9063 2.8042L22.2495 11.1475L13.9063 19.4907C13.3303 20.0667 13.3303 21.0006 13.9063 21.5765C14.4822 22.1525 15.4161 22.1525 15.9921 21.5765L25.3782 12.1904ZM0.62793 12.6224H24.3353V9.67257H0.62793V12.6224Z" fill="black" />
            </svg>
          </Button>{' '}
         
        </Container>
      </Navbar>
      <Row>
        <img src={img} alt="" id="first-img" />
      </Row>
      <Row className="meet">
        <h2 id="meet">Meet Our Innovators</h2>
        <p id="txt-meet">The passionate team driving the future of programming education.</p>
        <Col><img src={img1} alt="" id="img-invo" /><h4>Clara</h4><p id="job-title">Job Title</p></Col>
        <Col><img src={img2} alt="" id="img-invo" /><h4>Ahmed</h4><p id="job-title">Job Title</p></Col>
        <Col><img src={img3} alt="" id="img-invo" /><h4>Mariam</h4><p id="job-title">Job Title</p></Col>
      </Row>
      <Row className="video">
      <Col md={6}>
      <center>
      <h3 id="our">Experience Our <br />Creative Journey</h3>
      <p id="txt-video">Dive into the heart of Top Programming and see how we transform ideas into reality through innovative design and technology.</p>
      </center></Col>
        <Col md={6} id="imm">
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
          <path d="M22.8716 46.2206C22.3411 46.2206 21.8324 46.0099 21.4574 45.6348C21.0823 45.2598 20.8716 44.751 20.8716 44.2206V20.2206C20.8718 19.8798 20.959 19.5447 21.1251 19.2472C21.2911 18.9496 21.5305 18.6993 21.8204 18.5202C22.1103 18.3411 22.4412 18.239 22.7816 18.2237C23.122 18.2084 23.4607 18.2803 23.7656 18.4326L47.7656 30.4326C48.0973 30.5989 48.3763 30.8542 48.5713 31.17C48.7662 31.4857 48.8694 31.8495 48.8694 32.2206C48.8694 32.5917 48.7662 32.9555 48.5713 33.2713C48.3763 33.587 48.0973 33.8423 47.7656 34.0086L23.7656 46.0086C23.4881 46.1477 23.182 46.2203 22.8716 46.2206ZM24.8716 23.4566V40.9846L42.3996 32.2206L24.8716 23.4566Z" fill="#9F9595" />
          <path d="M32.8716 8.2207C37.6183 8.2207 42.2585 9.62828 46.2053 12.2654C50.1521 14.9026 53.2282 18.6509 55.0447 23.0363C56.8612 27.4217 57.3365 32.2473 56.4104 36.9029C55.4844 41.5584 53.1986 45.8348 49.8422 49.1913C46.4857 52.5477 42.2093 54.8335 37.5538 55.7595C32.8982 56.6856 28.0726 56.2103 23.6872 54.3938C19.3018 52.5773 15.5535 49.5012 12.9163 45.5544C10.2792 41.6076 8.87159 36.9675 8.87159 32.2207C8.87159 25.8555 11.4002 19.751 15.901 15.2501C20.4019 10.7493 26.5064 8.2207 32.8716 8.2207ZM32.8716 4.2207C27.3337 4.2207 21.9202 5.86287 17.3156 8.93955C12.7111 12.0162 9.12222 16.3892 7.00297 21.5056C4.88371 26.6219 4.32922 32.2518 5.40961 37.6832C6.48999 43.1147 9.15673 48.1038 13.0726 52.0197C16.9885 55.9356 21.9776 58.6023 27.4091 59.6827C32.8405 60.7631 38.4704 60.2086 43.5867 58.0893C48.7031 55.9701 53.0761 52.3812 56.1527 47.7767C59.2294 43.1721 60.8716 37.7586 60.8716 32.2207C60.8716 24.7946 57.9216 17.6727 52.6706 12.4217C47.4196 7.17069 40.2977 4.2207 32.8716 4.2207Z" fill="#9F9595" />
        </svg>
        </Col>
        
      </Row>
      <Row className="meet">
        <Row>
          <p id="our-journey">OUR JOURNEY</p>
          <h2 id="meet2">Building the Future of Programming Education</h2>
        <p id="txt-prog">Learn about our development process and our commitment to enhancing learning experiences.</p>
        </Row>
        <Col className="steps"><p id="step">STEP 1</p>
        <p id="txt-step">Inception</p>
        <p id="txt-step2">The idea of using AI to transform programming education was born.</p>
        </Col>
        <Col className="steps"><p id="step">STEP 2</p>
        <p id="txt-step">Development</p>
        <p id="txt-step2">Creating an engaging platform with interactive features and real-time assistance.</p>
        </Col>
        <Col className="steps"><p id="step">STEP 3</p>
        <p id="txt-step">Expansion</p>
        <p id="txt-step2">Continuously innovating and expanding our offerings to meet theneeds of learners worldwide.</p>
        </Col>
      </Row>
    </>
  )
}

