
// import React, { useState } from "react";
// import "./SignUp.css";
// import { Row, Col } from "react-bootstrap";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import google from "../../Assets/google_icon.png";

// export default function SignUps() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//     agree: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.lastName) newErrors.lastName = "Last name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
//     if (formData.password !== formData.confirmpassword) newErrors.confirmpassword = "Passwords do not match";
//     if (!formData.agree) newErrors.agree = "You must agree to the terms and conditions";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);
//     setErrors({});
//     setMessage("");

//     try {
//       const response = await axios.post("https://localhost:7217/api/auth/signup", {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         emailAddress: formData.email,
//         password: formData.password,
//         userConfPassword: formData.confirmpassword,
//       }, {
//         withCredentials: true, // Allow cookies to be sent
//       });

//       if (response.data.success) {
//         // Set email cookie for verification
//         document.cookie = `EmailForVerification=${encodeURIComponent(formData.email)}; path=/; secure; samesite=strict; max-age=900`; // 15-minute expiration
//         console.log("Cookie set:", document.cookie); // Debug log
//         setMessage("Verification code sent! Please check your email.");
//         setTimeout(() => navigate("/verify-email"), 2000); // Redirect after 2 seconds
//       }
//     } catch (error) {
//       const errorMsg = error.response?.data?.message || "An error occurred during signup.";
//       setMessage(errorMsg);
//       setErrors({ general: errorMsg });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div id="signup_title">
//         <Link to="/home" className="signup-title">
//           <h2 className="signup-title">LEARNQUEST</h2>
//         </Link>
//       </div>
//       <div className="signup-card">
//         <form onSubmit={handleSubmit}>
//           <Col id="signup-form">
//             <Row>
//               <Col>
//                 <label>First name</label>
//                 <input name="firstName" id="input_field" value={formData.firstName} onChange={handleChange} required />
//                 {errors.firstName && <small className="error">{errors.firstName}</small>}
//               </Col>
//               <Col>
//                 <label>Last name</label>
//                 <input name="lastName" id="input_field" value={formData.lastName} onChange={handleChange} required />
//                 {errors.lastName && <small className="error">{errors.lastName}</small>}
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <label>Email</label>
//                 <input name="email" id="input_field" type="email" value={formData.email} onChange={handleChange} required />
//                 {errors.email && <small className="error">{errors.email}</small>}
//               </Col>
//               <Col>
//                 <label>Password</label>
//                 <input name="password" id="input_field" type="password" value={formData.password} onChange={handleChange} required />
//                 {errors.password && <small className="error">{errors.password}</small>}
//               </Col>
//               <Col>
//                 <label>Confirm Password</label>
//                 <input name="confirmpassword" id="input_field" type="password" value={formData.confirmpassword} onChange={handleChange} required />
//                 {errors.confirmpassword && <small className="error">{errors.confirmpassword}</small>}
//               </Col>
//             </Row>
//             <div id="agree_button">
//               <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} />
//               <span id="agree-text">
//                 I agree to the <span className="terms">Terms & Conditions</span>
//               </span>
//               {errors.agree && <small className="error">{errors.agree}</small>}
//             </div>
//             <button type="submit" className="signup-button" disabled={isLoading}>
//               {isLoading ? "Signing Up..." : "Sign Up"}
//             </button>
//           </Col>
//         </form>
//         {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
//         {message && <p style={{ color: "green" }}>{message}</p>}

//         <p id="signup-text">
//           Already have an account?{" "}
//           <Link to="/login" id="signup-terms">
//             Sign in
//           </Link>
//         </p>

//         <div className="signup-divider">
//           <span className="signup-line"></span>
//           <span className="signup-or">Or</span>
//           <span className="signup-line"></span>
//         </div>

//         <button className="signup-google">
//           <img src={google} alt="google" id="google-img" />
//           Signup with Google
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./SignUp.css";
// import { Row, Col } from "react-bootstrap";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import google from "../../Assets/google_icon.png";

// export default function SignUps() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//     agree: false,
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.lastName) newErrors.lastName = "Last name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
//     if (formData.password !== formData.confirmpassword) newErrors.confirmpassword = "Passwords do not match";
//     if (!formData.agree) newErrors.agree = "You must agree to the terms and conditions";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);
//     setErrors({});
//     setMessage("");

//     try {
//       const response = await axios.post("https://localhost:7217/api/Auth/signup", {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         emailAddress: formData.email,
//         password: formData.password,
//         userConfPassword: formData.confirmpassword,
//       }, {
//         withCredentials: true, // Allow cookies to be sent
//       });

//       if (response.data.success) {
//         // Set email cookie for verification
//         document.cookie = `EmailForVerification=${encodeURIComponent(formData.email)}; path=/; max-age=900`; // 15 دقيقة// 15-minute expiration
//         console.log("Cookie set:", document.cookie); // Debug log
//         setMessage("Verification code sent! Please check your email.");
//         setTimeout(() => navigate("/verify-email"), 2000); // Redirect after 2 seconds
//       }
//     } catch (error) {
//       const errorMsg = error.response?.data?.message || "An error occurred during signup.";
//       setMessage(errorMsg);
//       setErrors({ general: errorMsg });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div id="signup_title">
//         <Link to="/home" className="signup-title">
//           <h2 className="signup-title">LEARNQUEST</h2>
//         </Link>
//       </div>
//       <div className="signup-card">
//         <form onSubmit={handleSubmit}>
//           <Col id="signup-form">
//             <Row>
//               <Col>
//                 <label>First name</label>
//                 <input name="firstName" id="input_field" value={formData.firstName} onChange={handleChange} required />
//                 {errors.firstName && <small className="error">{errors.firstName}</small>}
//               </Col>
//               <Col>
//                 <label>Last name</label>
//                 <input name="lastName" id="input_field" value={formData.lastName} onChange={handleChange} required />
//                 {errors.lastName && <small className="error">{errors.lastName}</small>}
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <label>Email</label>
//                 <input name="email" id="input_field" type="email" value={formData.email} onChange={handleChange} required />
//                 {errors.email && <small className="error">{errors.email}</small>}
//               </Col>
//               <Col>
//                 <label>Password</label>
//                 <input name="password" id="input_field" type="password" value={formData.password} onChange={handleChange} required />
//                 {errors.password && <small className="error">{errors.password}</small>}
//               </Col>
//               <Col>
//                 <label>Confirm Password</label>
//                 <input name="confirmpassword" id="input_field" type="password" value={formData.confirmpassword} onChange={handleChange} required />
//                 {errors.confirmpassword && <small className="error">{errors.confirmpassword}</small>}
//               </Col>
//             </Row>
//             <div id="agree_button">
//               <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange} />
//               <span id="agree-text">
//                 I agree to the <span className="terms">Terms & Conditions</span>
//               </span>
//               {errors.agree && <small className="error">{errors.agree}</small>}
//             </div>
//             <button type="submit" className="signup-button" disabled={isLoading}>
//               {isLoading ? "Signing Up..." : "Sign Up"}
//             </button>
//           </Col>
//         </form>
//         {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
//         {message && <p style={{ color: "green" }}>{message}</p>}

//         <p id="signup-text">
//           Already have an account?{" "}
//           <Link to="/login" id="signup-terms">
//             Sign in
//           </Link>
//         </p>

//         <div className="signup-divider">
//           <span className="signup-line"></span>
//           <span className="signup-or">Or</span>
//           <span className="signup-line"></span>
//         </div>

//         <button className="signup-google">
//           <img src={google} alt="google" id="google-img" />
//           Signup with Google
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./SignUp.css";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import google from "../../Assets/google_icon.png";
//import Cookies from "js-cookie";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    agree: false,
  });
  const [isLoading, setIsLoading] = useState(false);
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) 
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmpassword) 
      newErrors.confirmpassword = "Passwords do not match";
    if (!formData.agree) 
      newErrors.agree = "You must agree to the terms and conditions";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    setMessage("");

    try {
      const response = await axios.post(
        "https://localhost:7217/api/Auth/signup",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailAddress: formData.email,
          password: formData.password,
          userConfPassword: formData.confirmpassword,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        // تعيين الكوكي بدون استخدام المكتبة
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (15 * 60 * 1000)); // 15 دقيقة
        document.cookie = `EmailForVerification=${encodeURIComponent(formData.email)}; expires=${expirationDate.toUTCString()}; path=/; secure; samesite=strict`;
        
        setMessage("Verification code sent! Please check your email.");
        setTimeout(() => navigate("/verify-email"), 2000);
      }
    }catch (error) {
      const errorMsg = error.response?.data?.message || "An error occurred during signup.";
      setMessage(errorMsg);
      setErrors({ general: errorMsg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div id="signup_title">
        <Link to="/home" className="signup-title">
          <h2 className="signup-title">LEARNQUEST</h2>
        </Link>
      </div>
      <div className="signup-card">
        <form onSubmit={handleSubmit}>
          <Col id="signup-form">
            <Row>
              <Col>
                <label>First name</label>
                <input 
                  name="firstName" 
                  id="input_field" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                />
                {errors.firstName && <small className="error">{errors.firstName}</small>}
              </Col>
              <Col>
                <label>Last name</label>
                <input 
                  name="lastName" 
                  id="input_field" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                />
                {errors.lastName && <small className="error">{errors.lastName}</small>}
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Email</label>
                <input 
                  name="email" 
                  id="input_field" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </Col>
              <Col>
                <label>Password</label>
                <input 
                  name="password" 
                  id="input_field" 
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                />
                {errors.password && <small className="error">{errors.password}</small>}
              </Col>
              <Col>
                <label>Confirm Password</label>
                <input 
                  name="confirmpassword" 
                  id="input_field" 
                  type="password" 
                  value={formData.confirmpassword} 
                  onChange={handleChange} 
                  required 
                />
                {errors.confirmpassword && <small className="error">{errors.confirmpassword}</small>}
              </Col>
            </Row>
            <div id="agree_button">
              <input 
                type="checkbox" 
                id="agree" 
                name="agree" 
                checked={formData.agree} 
                onChange={handleChange} 
              />
              <span id="agree-text">
                I agree to the <span className="terms">Terms & Conditions</span>
              </span>
              {errors.agree && <small className="error">{errors.agree}</small>}
            </div>
            <button type="submit" className="signup-button" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </Col>
        </form>
        {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}

        <p id="signup-text">
          Already have an account?{" "}
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