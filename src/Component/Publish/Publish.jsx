import React,{useState} from "react";
import "./Publish.css";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
const Confirmm=({isOpen,onClose})=>{
  if (!isOpen) return null;

    return(
        <div id="con-body">
            <h3 id="con-txt">Are you sure you want to publish the course? 
            It will be sent to the administration for review.</h3>
 
            <Col className="two-btn-con">
            <button id="ok-btn">OK</button>
            <button id="can-btn" onClick={onClose}>cancel</button>
            </Col>
        </div>
    )
};

const AddModule=({IsOpen,onClose})=>{
    if (!IsOpen) return null;
  
      return(
          <div id="con-body">
              <h3 id="con-txt">The course has been sent to the administration 
              for approval.</h3>
   
              <Col className="two-btn-con">
              <button id="ok-btn" onClick={onClose}>OK</button>
              
              </Col>
          </div>
      )
  };
const Publish=()=>{
    const [isConOpen, setIsConOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    return(
        <Row className="lesson-body2">
                    <Link to="/section" id="back-btn2">
                    <svg id="back-btn2" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path d="M18.1094 29.6875L7.42188 19L18.1094 8.3125M8.90625 19H30.5781" stroke="#765378" stroke-width="3.5625" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
                    </Link>
                    <Row className="white-box2">
                        <h2 id="vid-title2">Upload Course Content</h2>
        
                        <div className="row-item2">
                        <label id="label-vid2">Module Name
                        <input type="text" id="input-vid2"/>
                        </label>

                        <label id="label-vid2">Description
                        <input type="text" id="input-vid2"/>
                        </label>
                        </div>
                        <button id="del-btn">Delete
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M6 19.4998C6 20.5998 6.9 21.4998 8 21.4998H16C17.1 21.4998 18 20.5998 18 19.4998V7.49976H6V19.4998ZM19 4.49976H15.5L14.5 3.49976H9.5L8.5 4.49976H5V6.49976H19V4.49976Z" fill="#D72638"/>
                        </svg>
                        </button>

                        <button id="add-btn">Add Sections</button>
                        <Col id="last-two-btn2">
                            <button id="btn-vid12">Final Quiz
                            </button>
                            
                            <button id="btn-vid22" onClick={()=>setIsSuccessOpen(true)}>Add Module</button>

                        </Col>
                        <button id="btn-done" onClick={() => setIsConOpen(true)}>Done</button>
            <Confirmm isOpen={isConOpen} onClose={() => setIsConOpen(false)} />
            <AddModule IsOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />

        
                    </Row>
                </Row>
    )
}
export {Publish};