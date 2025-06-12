import React from "react";
import "./SectionReview.css";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import courseimgg from "../../Assets/frame-106.png";

export default function SectionReview () {
    return(
        <Row className="lesson-body2">
                    <Link to="./Section" id="back-btn2">
                    <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
                    </Link>
                    <Row className="white-box2">
                        <h2 id="vid-title2">Section Review</h2>
                        <Col id="body-section">
                            1<img src={courseimgg} alt="imgg" id="courseee"/>
                            <p>what is UI UX ?</p>

                            <button id="review-btn-course">Edit Quiz
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.5 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V13.5" stroke="#005DD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9608 7.78929 15.4695 8 16 8H20M13.378 15.626C13.5752 15.4288 13.7317 15.1946 13.8384 14.9369C13.9452 14.6792 14.0001 14.4029 14.0001 14.124C14.0001 13.8451 13.9452 13.5688 13.8384 13.3111C13.7317 13.0534 13.5752 12.8192 13.378 12.622C13.1807 12.4248 12.9466 12.2683 12.6889 12.1615C12.4311 12.0548 12.1549 11.9999 11.876 11.9999C11.597 11.9999 11.3208 12.0548 11.0631 12.1615C10.8054 12.2683 10.5712 12.4248 10.374 12.622L5.36398 17.634C5.12622 17.8716 4.9522 18.1653 4.85798 18.488L4.02098 21.358C3.99588 21.444 3.99437 21.5353 4.01662 21.6221C4.03887 21.7089 4.08404 21.7882 4.14742 21.8516C4.2108 21.9149 4.29006 21.9601 4.37689 21.9824C4.46372 22.0046 4.55493 22.0031 4.64098 21.978L7.51098 21.141C7.83364 21.0468 8.12735 20.8728 8.36498 20.635L13.378 15.626Z" stroke="#005DD1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                            <button id="del-btn-course">Delete
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M6 19.4998C6 20.5998 6.9 21.4998 8 21.4998H16C17.1 21.4998 18 20.5998 18 19.4998V7.49976H6V19.4998ZM19 4.49976H15.5L14.5 3.49976H9.5L8.5 4.49976H5V6.49976H19V4.49976Z" fill="#D72638"/>
                        </svg>
                        </button>

                        
                        </Col>
        
                        <Col id="last-two-btn2">
                            <button id="btn-vid12">Add Videos
                            </button>
                            <button id="btn-vid22">Done</button>
                        </Col>
                       
        
                    </Row>
                </Row>
    )
};
