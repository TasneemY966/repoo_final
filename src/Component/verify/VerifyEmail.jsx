

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./verifyEmail.css";


// function VerifyEmail() {
//   const [otp, setOtp] = useState(new Array(6).fill("")); // 6-digit OTP
//   const [error, setError] = useState(""); // Error message
//   const [loading, setLoading] = useState(false); // Loading state
//   const [resendLoading, setResendLoading] = useState(false); // Resend loading state
//   const [resendTimeout, setResendTimeout] = useState(null); // Resend timer
//   const navigate = useNavigate();

//   // Handle OTP input change
//   const handleChange = (element, index) => {
//     const value = element.value.replace(/\D/, ""); // Allow only numbers
//     if (value.length > 1) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to the next input field automatically
//     if (value && element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };

//   // Handle OTP submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const otpCode = otp.join("");
//     if (otpCode.length !== 6) {
//       setError("Please enter a 6-digit code");
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log("Sending OTP:", otpCode); // Debug log
//       const response = await axios.post("https://localhost:7217/api/Auth/verify-account", {
//         verificationCode: otpCode,
//       });

//       console.log("API Response:", response.data); // Debug log
//       if (response.data.success) {
//         setError("");
//         navigate("/home"); // Redirect to home after verification
//       }
//     } catch (err) {
//       console.error("API Error:", err.response?.data || err.message); // Debug log
//       const errorMsg = err.response?.data?.message || "Invalid or expired verification code";
//       setError(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle resend verification code
//   const handleResend = async () => {
//     if (resendTimeout) return; // Prevent multiple resends

//     setResendLoading(true);
//     setError("");

//     try {
//       console.log("Resending verification code"); // Debug log
//       const response = await axios.post("https://localhost:7217/api/Auth/resend-verification-code");

//       console.log("Resend Response:", response.data); // Debug log
//       if (response.data.success) {
//         setError("");
//         setResendTimeout(60); // Set 60-second cooldown
//       }
//     } catch (err) {
//       console.error("Resend Error:", err.response?.data || err.message); // Debug log
//       setError("Failed to resend verification code. Please try again later.");
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   // Resend timer countdown
//   useEffect(() => {
//     let timer;
//     if (resendTimeout && resendTimeout > 0) {
//       timer = setInterval(() => {
//         setResendTimeout((prev) => prev - 1);
//       }, 1000);
//     } else if (resendTimeout === 0) {
//       setResendTimeout(null);
//     }
//     return () => clearInterval(timer);
//   }, [resendTimeout]);

//   return (
//     < div className="verifyEmail">
//       <div className="verifyEmailContainer">
//         <h2 id="Enter-code">Enter the code</h2>
//         <p>
//           Enter the code that we sent to your email <span>******@gmail.com</span>.
//           Be careful not to share the code with anyone!
//         </p>

//         {/* Error Message */}
//         {error && <p className="error">{error}</p>}

//         <form className="otp-form" onSubmit={handleSubmit}>
//           {otp.map((value, index) => (
//             <input
//               key={index}
//               type="text"
//               className="otpInput"
//               value={value}
//               onChange={(e) => handleChange(e.target, index)}
//               onKeyDown={(e) => {
//                 if (e.key === "Backspace" && !value && e.target.previousSibling) {
//                   e.target.previousSibling.focus();
//                 }
//               }}
//               maxLength="1"
//               disabled={loading}
//             />
//           ))}
        
//           <center id="verify">
//             <button
//               type="submit"
//               className="verify-button"
//               id="verify"
//               disabled={loading || otp.join("").length !== 6}
//             >
//               {loading ? "Verifying..." : "Verify"}
//             </button>
//           </center>
//         </form>

//         <span id="received">
//           Have not received the OTP yet?{" "}
//           <span
//             id="resend-button"
//             onClick={handleResend}
//             style={{ cursor: resendTimeout ? "not-allowed" : "pointer", color: resendTimeout ? "#888" : "#000" }}
//           >
//             {resendLoading ? "Resending..." : resendTimeout ? `Resend in ${resendTimeout}s` : "Resend again"}
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default VerifyEmail;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./verifyEmail.css";

function VerifyEmail() {
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6-digit OTP
  const [error, setError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state
  const [resendLoading, setResendLoading] = useState(false); // Resend loading state
  const [resendTimeout, setResendTimeout] = useState(null); // Resend timer
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter a 6-digit code");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending OTP:", otpCode); // Debug log
      const response = await axios.post("https://localhost:7217/api/auth/verify-account", {
        verificationCode: otpCode,
      }, {
        withCredentials: true, // Ensure cookies are sent
      });

      console.log("API Response:", response.data); // Debug log
      if (response.data.success) {
        setError("");
        navigate("/home"); // Redirect to home after verification
      }
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message); // Debug log
      const errorMsg = err.response?.data?.message || "Invalid or expired verification code";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Handle resend verification code
  const handleResend = async () => {
    if (resendTimeout) return; // Prevent multiple resends

    setResendLoading(true);
    setError("");

    try {
      console.log("Resending verification code"); // Debug log
      const response = await axios.post("https://localhost:7217/api/Auth/resend-verification-code", {}, {
        withCredentials: true, // Ensure cookies are sent
      });

      console.log("Resend Response:", response.data); // Debug log
      if (response.data.success) {
        setError("");
        setResendTimeout(60); // Set 60-second cooldown
      }
    } catch (err) {
      console.error("Resend Error:", err.response?.data || err.message); // Debug log
      setError("Failed to resend verification code. Please try again later.");
    } finally {
      setResendLoading(false);
    }
  };

  // Resend timer countdown
  useEffect(() => {
    let timer;
    if (resendTimeout && resendTimeout > 0) {
      timer = setInterval(() => {
        setResendTimeout((prev) => prev - 1);
      }, 1000);
    } else if (resendTimeout === 0) {
      setResendTimeout(null);
    }
    return () => clearInterval(timer);
  }, [resendTimeout]);

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

        <form className="otp-form" onSubmit={handleSubmit}>
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
              disabled={loading}
            />
          ))}
          <center id="verify">
            <button
              type="submit"
              className="verify-button"
              id="verify"
              disabled={loading || otp.join("").length !== 6}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </center>
        </form>

        <span id="received">
          Have not received the OTP yet?{" "}
          <span
            id="resend-button"
            onClick={handleResend}
            style={{ cursor: resendTimeout ? "not-allowed" : "pointer", color: resendTimeout ? "#888" : "#000" }}
          >
            {resendLoading ? "Resending..." : resendTimeout ? `Resend in ${resendTimeout}s` : "Resend again"}
          </span>
        </span>
      </div>
    </div>
  );
}

export default VerifyEmail;