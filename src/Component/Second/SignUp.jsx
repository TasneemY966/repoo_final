import React, { useState } from "react";
import "./SignUp.css";
import { Row, Col} from "react-bootstrap";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import google from "../../Assets/google_icon.png";




export default function SignUps() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 
  return (
    <div className="signup-container">
      <div id="signup_title"> 
        <Link to="/home" className="signup-title">
      <h2 className="signup-title">LEARNQUEST</h2></Link>
      </div>
      <div className="signup-card">
        
        <form >
          <Col id="signup-form">
          <Row>   
           <Col>
            <label>First name</label>
            <input name="firstName" id="input_field"  value={formData.fname}  onChange={handleChange} required />
            {errors.fname && <small className="error">{errors.fname}</small>}
            </Col>
            
            
            <Col>
            <label>Last name</label>
            <input name="lastName"id="input_field"  value={formData.lname} onChange={handleChange} required />
            {errors.lname && <small className="error">{errors.lname}</small>}
            </Col>
          </Row>
          <Row >
          <Col>
          <label> Email</label>
          <input name="email" id="input_field"type="email"  value={formData.email} onChange={handleChange} required />
          {errors.email && ( <small className="error">{errors.email}</small> )}
          </Col>
          <Col>
          <label>Password</label>
          <input name="password" id="input_field" type="password" value={formData.password} onChange={handleChange} required />
         
          {errors.password && (  <small className="error">{errors.password}</small> )} </Col>
          </Row>
          <div id="agree_button">
           <input type="checkbox" id="agree" name="agree"  checked={formData.agree} onChange={handleChange}/>
            <span id="agree-text">
              I agree to the <span className="terms">Terms & Conditions</span>
            </span>
            </div>
          <button type="submit" className="signup-button" >Sign Up</button>
          </Col>
          </form>
          {message && <p style={{ color: "green" }}>{message}</p>}

          <p id="signup-text">Already have an account? 
           
            <Link to="/login" id="signup-terms">
                 Sign in
              </Link>
           </p>


          <div className="signup-divider">
            <span className="signup-line"></span>
            <span className="signup-or">Or</span>
            <span className="signup-line"></span>
          </div>

          <button className="signup-google">
            <img src={google} alt="google" id="google-img" />
             Signup with Google
          </button>
        
      </div>
    </div>
  );
 
}

// export { SignUps };
