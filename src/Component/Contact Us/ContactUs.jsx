import React from "react";
import "./ContactUs.css";
import { Link} from "react-router-dom";

export default function ContactUs () {
    // const navigate = useNavigate();
  return (
    <div className="settings-page3">
      {/* Header */}
      <div className="settings-header3">
      <div id="signup_title3"> 
      <Link to="/home" className="signup-title3">
      <h2 className="signup-title3">LEARNQUEST</h2>
      </Link>
      </div>
        
      </div>
        <p id="Contact_Us">Contact Us</p>
        <p id="paragraph3">Contact us about anything related to our company or services.We'll do our best to get back to you as soon as possible.</p>
      {/* Account Section */}
      <main className="settings-content3">
        <form className="account-form">
       
          <div className="form-row3">
            <label >
              First name
              <input type="text" placeholder="Alex" />
            </label>
            <label >
              Last name
              <input type="text" placeholder="Johnson" />
            </label>
          </div>
          
          <div className="form-row3">
            <label>
              E-mail
              <input type="email" placeholder="Alex.Johnson@gmail.com" />
            </label>
            <label>
            Phone Number
            <input type="number" placeholder="+20" />

            </label>
          </div>
          <div className="form-row4">
            <label>
              <span className="subject_label">Subject</span>       
                <input type="text"  className="subject"/>
            </label>
            <label>
            <span className="Questions">Questions</span>
            <textarea type="text" className="question"/>
            </label>
          </div>
          {/* <button type="submit" className="save-button">Save</button> */}

        </form>
        <div className="submit-button">
          <button className="submit-btn">Submit</button>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="settings-footer-con">
        <div className="footer-links">
          <a href="#about" id="link">About Us</a>
          <a href="#courses" id="link">Courses</a>
          <a href="#contact" id="link">Contact</a>
          <a href="#review" id="link"> Review</a>
        </div>
        <div className="social-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M14.9207 2.48682C13.2878 2.48682 11.671 2.80843 10.1624 3.43329C8.6539 4.05815 7.2832 4.97402 6.12861 6.12861C3.79681 8.46041 2.48682 11.623 2.48682 14.9207C2.48682 20.4164 6.05534 25.0791 10.9916 26.7328C11.6133 26.8323 11.8122 26.4469 11.8122 26.1112V24.0098C8.36803 24.7559 7.63444 22.3437 7.63444 22.3437C7.06248 20.9014 6.25428 20.5159 6.25428 20.5159C5.1228 19.745 6.34131 19.7699 6.34131 19.7699C7.5847 19.8569 8.24369 21.0506 8.24369 21.0506C9.32544 22.9405 11.1532 22.381 11.8619 22.0826C11.9739 21.2744 12.2971 20.7273 12.6453 20.4164C9.88496 20.1056 6.98787 19.0363 6.98787 14.299C6.98787 12.9188 7.46036 11.8122 8.26856 10.9294C8.14422 10.6186 7.70904 9.32544 8.3929 7.64687C8.3929 7.64687 9.43735 7.31116 11.8122 8.91512C12.7945 8.64158 13.8638 8.50481 14.9207 8.50481C15.9776 8.50481 17.0469 8.64158 18.0291 8.91512C20.404 7.31116 21.4485 7.64687 21.4485 7.64687C22.1323 9.32544 21.6971 10.6186 21.5728 10.9294C22.381 11.8122 22.8535 12.9188 22.8535 14.299C22.8535 19.0487 19.944 20.0932 17.1712 20.404C17.6188 20.7895 18.0291 21.5479 18.0291 22.7043V26.1112C18.0291 26.4469 18.2281 26.8448 18.8622 26.7328C23.7985 25.0667 27.3545 20.4164 27.3545 14.9207C27.3545 13.2878 27.0329 11.671 26.4081 10.1624C25.7832 8.6539 24.8673 7.2832 23.7127 6.12861C22.5582 4.97402 21.1875 4.05815 19.6789 3.43329C18.1704 2.80843 16.5535 2.48682 14.9207 2.48682Z" fill="white"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
        <path d="M28.2276 14.9207C28.2276 8.05719 22.6572 2.48682 15.7937 2.48682C8.93023 2.48682 3.35986 8.05719 3.35986 14.9207C3.35986 20.9387 7.63711 25.9495 13.307 27.1059V18.6508H10.8202V14.9207H13.307V11.8122C13.307 9.41248 15.2591 7.46036 17.6588 7.46036H20.7673V11.1905H18.2805C17.5966 11.1905 17.0371 11.75 17.0371 12.4339V14.9207H20.7673V18.6508H17.0371V27.2924C23.3162 26.6707 28.2276 21.3739 28.2276 14.9207Z" fill="white"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clip-path="url(#clip0_80_300)">
            <mask id="mask0_80_300"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <path d="M0.436768 0.920654H27.4368V27.9207H0.436768V0.920654Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_80_300)">
            <path d="M21.6993 2.18591H25.8399L16.7949 12.5501L27.4368 26.6556H19.1053L12.5752 18.1024L5.11162 26.6556H0.967125L10.6408 15.5663L0.436768 2.18784H8.98034L14.8741 10.0043L21.6993 2.18591ZM20.2432 24.1716H22.5382L7.72677 4.5407H5.26591L20.2432 24.1716Z" fill="white"/>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_80_300">
            <rect width="27" height="27" fill="white" transform="translate(0.436768 0.920654)"/>
            </clipPath>
        </defs>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M9.85715 2.48682H20.3016C24.2804 2.48682 27.5132 5.71962 27.5132 9.69846V20.1429C27.5132 22.0555 26.7534 23.8899 25.401 25.2423C24.0485 26.5947 22.2142 27.3545 20.3016 27.3545H9.85715C5.87831 27.3545 2.64551 24.1217 2.64551 20.1429V9.69846C2.64551 7.78581 3.4053 5.9515 4.75775 4.59906C6.11019 3.24661 7.9445 2.48682 9.85715 2.48682ZM9.60847 4.97359C8.42131 4.97359 7.28277 5.44519 6.44333 6.28464C5.60388 7.12408 5.13228 8.26262 5.13228 9.44978V20.3916C5.13228 22.8659 7.13413 24.8678 9.60847 24.8678H20.5503C21.7374 24.8678 22.876 24.3962 23.7154 23.5567C24.5549 22.7173 25.0265 21.5787 25.0265 20.3916V9.44978C25.0265 6.97544 23.0246 4.97359 20.5503 4.97359H9.60847ZM21.6071 6.83867C22.0194 6.83867 22.4147 7.00242 22.7062 7.29389C22.9976 7.58537 23.1614 7.98069 23.1614 8.3929C23.1614 8.80511 22.9976 9.20043 22.7062 9.49191C22.4147 9.78338 22.0194 9.94713 21.6071 9.94713C21.1949 9.94713 20.7996 9.78338 20.5081 9.49191C20.2167 9.20043 20.0529 8.80511 20.0529 8.3929C20.0529 7.98069 20.2167 7.58537 20.5081 7.29389C20.7996 7.00242 21.1949 6.83867 21.6071 6.83867ZM15.0794 8.70375C16.7282 8.70375 18.3095 9.35874 19.4754 10.5246C20.6413 11.6905 21.2963 13.2718 21.2963 14.9207C21.2963 16.5695 20.6413 18.1508 19.4754 19.3167C18.3095 20.4826 16.7282 21.1376 15.0794 21.1376C13.4305 21.1376 11.8492 20.4826 10.6833 19.3167C9.51744 18.1508 8.86244 16.5695 8.86244 14.9207C8.86244 13.2718 9.51744 11.6905 10.6833 10.5246C11.8492 9.35874 13.4305 8.70375 15.0794 8.70375ZM15.0794 11.1905C14.0901 11.1905 13.1413 11.5835 12.4417 12.2831C11.7422 12.9826 11.3492 13.9314 11.3492 14.9207C11.3492 15.91 11.7422 16.8588 12.4417 17.5583C13.1413 18.2578 14.0901 18.6508 15.0794 18.6508C16.0687 18.6508 17.0175 18.2578 17.717 17.5583C18.4165 16.8588 18.8095 15.91 18.8095 14.9207C18.8095 13.9314 18.4165 12.9826 17.717 12.2831C17.0175 11.5835 16.0687 11.1905 15.0794 11.1905Z" fill="white"/>
        </svg>
        </div>
        <p id="copy">&copy; 2024 Top Programming, Empowering Future Coders</p>
      </footer> */}
    </div>
  );
};


