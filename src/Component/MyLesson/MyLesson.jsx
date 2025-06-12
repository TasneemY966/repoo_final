import React from "react";
import "./MyLesson.css";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function MyLesson (){
    return(
        <Row className="lesson-body">
            <Link to="/section" id="back-btn">
            <svg id="back-btn" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            </Link>
            <Row className="white-box">
                <h2 id="vid-title">Upload Video</h2>

                <div className="row-item">
                <label id="label-vid">Video Name
                <input type="text" id="input-vid" placeholder="Vid"/>

                </label>

                <label id="label-vid">Video
                <input type="file" id="input-vid" placeholder="Vid"/>

                </label>

                <label id="label-vid">File
                <input type="file" id="input-vid" placeholder="Vid"/>

                </label>

                <label id="label-vid">Caption File
                <input type="file" id="input-vid" placeholder="Vid"/>

                </label>
                </div>

                <Col id="last-two-btn">
                    <button id="btn-vid1">Generate Quiz
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                    <path d="M17.7274 10.4947C18.2351 9.987 18.2351 9.16388 17.7274 8.6562L9.45425 0.383051C8.94657 -0.124631 8.12345 -0.124631 7.61577 0.383051C7.10809 0.890732 7.10809 1.71385 7.61577 2.22153L14.9697 9.57544L7.61577 16.9294C7.10809 17.437 7.10809 18.2601 7.61577 18.7678C8.12345 19.2755 8.94657 19.2755 9.45425 18.7678L17.7274 10.4947ZM0.780762 10.8754L16.8082 10.8754V8.27544L0.780762 8.27544L0.780762 10.8754Z" fill="black"/>
                    </svg>
                    </button>
                    <button id="btn-vid2">Done</button>
                </Col>
            </Row>
        </Row>
    )
}
