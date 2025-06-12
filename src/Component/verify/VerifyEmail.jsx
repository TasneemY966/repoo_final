import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './verifyEmail.css';


function VerifyEmail  () {
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6-digit OTP
  const [error, setError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
 
  // Handle OTP input change
  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ""); // Allow only numbers
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field automatically
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Handle OTP submission


  return (
    <div id="Body">
      
    <div className="verifyEmailContainer">
      <h2 id="Enter-code">Enter the code</h2>
      <p>
        Enter the code that we sent to your email <span>******@gmail.com</span>.
        Be careful not to share the code with anyone!
      </p>

       {/* Error Message */}
       {error && <p className="error">{error}</p>}

      <form  className="otp-form">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            className="otpInput"
            value={value}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !value && e.target.previousSibling) {
                e.target.previousSibling.focus();
              }
            }}
            maxLength="1"
          />
        ))}
          
      </form>

      <center id='verify'>
        <button type="submit" className="verify-button" id="verify" disabled={loading}>
          Verify
        </button>
        </center>

      <span id="received">
        Have not received the OTP yet?{" "}
        <span id="resend-button" >
          Resend again
        </span>
      </span>
    </div>
    </div>
  );
};

export default VerifyEmail;


