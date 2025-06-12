import React from "react";
import "./PublishTrack.css";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PublishTrack (){
   
    return(
       
        <Row className="lesson-body2">
            <Link to="/section" id="back-btn2">
            <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            </Link>
            <Row className="white-box2">
                <h2 id="vid-title2">Create New Track</h2>

                <Row className="row-track">
                <label id="label-track">Track Name
                <input type="text" id="input-track"/>
                </label>
                <label id="label-track">Track Description
                <input type="textArea" id="txtArea-track"/>
                </label>
                
                <label id="label-track">Cover
                <input type="file" id="input-track"/>
                </label>
                </Row>

                
                <button id="btn-done2">Next</button>

            </Row>
        </Row>
   
    )
};
