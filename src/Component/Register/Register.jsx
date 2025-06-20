// import React, { useState } from 'react';
// import { Row, Col } from "react-bootstrap";
// import './Register.css';
// import axios from 'axios';
// import Joi from 'joi';



// export default function Register() {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     emailAddress: '',
//     password: '',
//     userConfPassword: ''
//   });

//   const [errorMessage, setErrorMessage] = useState("");  // لعرض رسالة الخطأ في حالة حدوثها
//   const[errorList,seterrorList]=useState([]);
  

  
//   function getUserData(eventInfo) {
//     let myUser = { ...user };
//     myUser[eventInfo.target.name] = eventInfo.target.value;
//     setUser(myUser);
//   }
//   // API
//   async function sendRegisterDataToApi() {
//     try {
//       let { data } = await axios.post('http://localhost:4000/register', user);
//       console.log(data);
//      // navigate("/login");  
//     } catch (error) {
//       setErrorMessage(error.response?.data || "An error occurred");
//     }
//   }
// //Validation
//   function validateRegisterForm(){

//   let scheme = Joi.object({
//     firstName:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
//     lastName:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
//     emailAddress:Joi.string().email({minDomainSegments: 2,tlds: {allow:['com','net']}}).required(),
//     passwordHash:Joi.string().pattern(new RegExp('^(?=.*[A-Z])(?=.*\\d).+$')).required(),
//     userConfPassword:Joi.string().valid(Joi.ref('passwordHash')).required()

//     });
//    return scheme.validate(user,{abortEarly:false});
 
// }
//   function submitRegisterForm(e) {
   
//         e.preventDefault();
   
//     if (user.password !== user.userConfPassword) {
//       setErrorMessage("Passwords do not match!");
//       return;
//     }

//        let validation= validateRegisterForm();

//        if(validation.error){
//         /////
//         seterrorList(validation.error.details )
//        }else{

//                sendRegisterDataToApi();
//        }
//   }

//   return (
//     <>

//       <div className="signup-container">
//       <div className="signup_logo">
          
//           <img src="midea/LEARNQUEST.svg" alt="LEARNQUEST" className="signup-logo"></img>
//         </div>
//         <div className="signup-card">
          
       
//           <form onSubmit={submitRegisterForm}>
//             <Col id="signup-form">
//               <Row> 
//                 <Col>
//                   <label htmlFor="firstName">First Name</label>
//                   <input
//                     onChange={getUserData}
//                     type="text"
//                     // className='form-control my-input my-2'
//                     name='firstName'
//                     id='firstName'
//                   />
//                 </Col>
//                 <Col>
//                   <label htmlFor="lastName">Last Name</label>
//                   <input
//                     onChange={getUserData}
//                     type="text"
//                     // className='form-control my-input my-2'
//                     name='lastName'
//                     id='lastName'
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <label htmlFor="emailAddress">Email</label>
//                   <input
//                     onChange={getUserData}
//                     type="text"
//                     // className='form-control my-input my-2'
//                     name='emailAddress'
//                     id='emailAddress'
//                   />
//                 </Col>
//                 <Col>
//                   <label htmlFor="password">Password</label>
//                   <input
//                     onChange={getUserData}
//                     type="password"
//                     // className='form-control my-input my-2'
//                     name='password'
//                     id='password'
//                   />
//                 </Col>
//                 <Col>
//                   <label htmlFor="userConfPassword">Confirm Password</label>
//                   <input
//                     onChange={getUserData}
//                     type="password"
//                     className='form-control my-input my-2'
//                     name='userConfPassword'
//                     id='userConfPassword'
//                   />
//                 </Col>
//               </Row>
//               {errorList.map((err,index)=> <div key={index} style={{ color: 'red' }}>{err.message}</div>)} 
//               {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* عرض رسالة الخطأ إذا كانت موجودة */}
//               <button type="submit" className="signup-button">Sign Up</button>
//             </Col>
//           </form>
//           <div className="signup-divider">
//             <span className="signup-line"></span>
//             <span className="signup-or">Or</span>
//             <span className="signup-line"></span>
//           </div>
          
//           <button className="signup-google">
            
//              Signup with Google
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
