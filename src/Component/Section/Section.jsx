import React from "react";
import "./Section.css";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Section (){
    return(
        <Row className="lesson-body2">
            <Link to="/section" id="back-btn2">
            <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            </Link>
            <Row className="white-box2">
                <h2 id="vid-title2">Add Sections</h2>

                <div className="row-item2">
                <label id="label-vid2">Section Name
                <input type="text" id="input-vid2"/>
                </label>
                </div>

                <Col id="last-two-btn2">
                    <button id="btn-vid12">New Section
                    </button>
                    <button id="btn-vid22">Add Videos</button>
                </Col>
                <button id="btn-done">Done</button>

            </Row>
        </Row>
    )
}
