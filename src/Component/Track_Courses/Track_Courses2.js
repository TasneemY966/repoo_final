import { Col, Row } from "react-bootstrap";
import Navbars from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import './Track_Courses.css';

function Track_Courses2() {
  return (
    <>
      <Navbars />
      <Row className="intro_roadmap">
        <p id="nameoftrack">Frontend Roadmap using HTML / CSS / JS</p>
        <p id="roadmaptxt">Master front-end web development with our HTML, CSS and JS roadmap. Start with HTML and CSS for static sites. Learn JavaScript for dynamic sites. Improve your skills with practical examples and projects.</p>
        <div className="numofcourses" >
          <svg id="totalcourses" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M7.01398 2C5.70998 2.129 4.83198 2.419 4.17598 3.076C3.00098 4.253 3.00098 6.148 3.00098 9.939V13.959C3.00098 17.749 3.00098 19.645 4.17598 20.823C5.35098 22.001 7.24298 22 11.026 22H13.033C16.816 22 18.708 22 19.883 20.823C20.95 19.753 21.049 18.106 21.058 14.977" stroke="#765378" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.0257 7.00017L12.0287 10.5002C12.5887 11.6102 13.2917 11.9002 15.0387 12.0002C16.4277 11.9662 17.2337 11.8022 17.9217 11.2042C18.3907 10.7962 18.6027 10.1812 18.7057 9.56917L19.0497 7.50017M21.5577 5.50017V10.5002M9.10071 4.93317C10.6877 3.61617 12.1017 2.90917 15.0347 2.13117C15.3656 2.04381 15.7137 2.04553 16.0437 2.13617C18.6397 2.85017 20.0417 3.48417 21.9197 4.89417C21.9997 4.95417 22.0237 5.06617 21.9677 5.14917C21.3547 6.05117 19.9857 6.78217 16.6277 8.08417C15.9283 8.35329 15.1531 8.34901 14.4567 8.07217C10.8807 6.65217 9.23671 5.89217 9.03671 5.10317C9.03021 5.07168 9.03278 5.03899 9.0441 5.0089C9.05543 4.97881 9.07506 4.95255 9.10071 4.93317Z" stroke="#765378" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p id="numofcourses">Total Courses: 3</p>
        </div>
      </Row>
      <Row className="roadmap-content">
        <Col className="roadmapcourses row-cols-md-auto" md={8} >
          {/* <div > */}
          <Row>
            <Col>
              <table>
                <dl>
                  <dt className="nameofcourse">HTML
                    <ul>
                      <li className="hourofcourse">6 Hours to complete</li>
                    </ul>
                  </dt>

                </dl>

              </table></Col>
            <Col className="col-auto resume completed-course" >
              <svg id="complete-course" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect width="18" height="18" rx="9" fill="#CDB4DB" />
                <path d="M2.25 8.8125L3.9375 7.125L7.3125 10.5L14.0625 3.75L15.75 5.4375L7.3125 13.875L2.25 8.8125Z" fill="#D9D9D9" />
              </svg>
              <p id="complete-txt"> Complete</p>
            </Col>
            <label className="linee" />
          </Row>
          <Row>
            <Col>
              <table>
                <dl>
                  <dt className="nameofcourse">CSS
                    <ul>
                      <li className="hourofcourse">4 Hours to complete</li>
                    </ul>
                  </dt>

                </dl>

              </table>
            </Col>
            <Col className="col-auto resume" >
              <button className="btn-resume"><Link id="btn-resume" to="/My-learning2">Done</Link></button>
            </Col>
            <label className="linee" />
          </Row>
          <Row>
            <Col>
              <table>

                <dl>
                  <dt className="nameofcourse">Java Script
                    <ul>
                      <li className="hourofcourse">4 Hours to complete</li>
                    </ul>
                  </dt>
                </dl>

              </table>
            </Col>
            <label className="linee" />
          </Row>
          <Row >
            <Col>
            <table>
              <dl>
                <dt className="nameofcourse">Final Test& Quiz
                  <ul>
                    <li className="hourofcourse">1 Hours</li>
                  </ul>
                </dt>

              </dl>

            </table>
            </Col>
          </Row>
          {/* </div> */}
        </Col>
        <Col md={3} className="done2 ms-auto startroadmap" >
          {/* <div className="done2" > */}
          <Link to="" className="starttrack"><button className="startbtn">Continue</button></Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
            <g clip-path="url(#clip0_1026_1021)">
              <path d="M26.3122 10.2629L16.3379 13.3341C14.9904 13.749 14.3159 13.9566 14.0239 14.5045C13.7318 15.0524 13.9359 15.7272 14.343 17.0786L14.4404 17.4033C14.8481 18.7538 15.052 19.4308 14.76 19.9787C14.4679 20.5266 13.7926 20.7338 12.4433 21.1477L7.13965 22.7749M26.3122 10.2629L21.4034 7.64616M26.3122 10.2629L23.6785 15.2035" stroke="#765378" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1026_1021">
                <rect width="24.0722" height="24.0722" fill="white" transform="translate(0 21.2424) rotate(-61.9393)" />
              </clipPath>
            </defs>
          </svg>
          <p className="num-enrol-roadmap">20k+ learners enrolled already</p>
          <div className="numofcourses-roadmap ms-auto" >
            <svg id="totalcourses" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M7.01398 2C5.70998 2.129 4.83198 2.419 4.17598 3.076C3.00098 4.253 3.00098 6.148 3.00098 9.939V13.959C3.00098 17.749 3.00098 19.645 4.17598 20.823C5.35098 22.001 7.24298 22 11.026 22H13.033C16.816 22 18.708 22 19.883 20.823C20.95 19.753 21.049 18.106 21.058 14.977" stroke="#765378" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.0257 7.00017L12.0287 10.5002C12.5887 11.6102 13.2917 11.9002 15.0387 12.0002C16.4277 11.9662 17.2337 11.8022 17.9217 11.2042C18.3907 10.7962 18.6027 10.1812 18.7057 9.56917L19.0497 7.50017M21.5577 5.50017V10.5002M9.10071 4.93317C10.6877 3.61617 12.1017 2.90917 15.0347 2.13117C15.3656 2.04381 15.7137 2.04553 16.0437 2.13617C18.6397 2.85017 20.0417 3.48417 21.9197 4.89417C21.9997 4.95417 22.0237 5.06617 21.9677 5.14917C21.3547 6.05117 19.9857 6.78217 16.6277 8.08417C15.9283 8.35329 15.1531 8.34901 14.4567 8.07217C10.8807 6.65217 9.23671 5.89217 9.03671 5.10317C9.03021 5.07168 9.03278 5.03899 9.0441 5.0089C9.05543 4.97881 9.07506 4.95255 9.10071 4.93317Z" stroke="#765378" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p id="num-courses-roadmap">3 Courses</p>
          </div>
          {/* <button className="btn-done"><Link id="btn-done" to="/My-learning2">Done</Link></button> */}
          {/* </div> */}
        </Col>
        {/* <Link to="/chat" id="chatbot">
                <img src={image3} alt="Learning" id="chatbot"/>
                </Link> */}
      </Row>
    </>
  );
}
export default Track_Courses2;