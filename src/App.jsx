// import './App.css';

// import {LoginPage} from  './Component/First/login';
// import { Home } from './Component/Home/HomePage';
// import {SignUps} from  './Component/Second/SignUp';
// import {VerifyEmail} from  './Component/verify/VerifyEmail';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import {Account} from "./Component/setting/Account";
// import {Security} from "./Component/setting/security";
// import {ChatPage} from "./Component/chat/Chatpage";
// import {ProfilePage} from "./Component/profile/ProfilePage"
// import {About_Us} from "./Component/About Us/About_Us";
// import {CoursePage} from "./Component/Course Page/CoursePage";
// import {Course} from "./Component/Course/Course";
// import {ContactUs} from "./Component/Contact Us/ContactUs";
// import {Video} from "./Component/Video/Video";

// import {Section} from "./Component/Section/Section";
// import {MyLesson} from "./Component/MyLesson/MyLesson";
// import {Publish} from "./Component/Publish/Publish";
// import {SectionReview} from "./Component/Section Review/SectionReview";
// import {PublishTrack} from "./Component/Publish track/PublishTrack";
// import {Dashboard} from "./Component/Dashboard/Dashboard";
// import {ManageCourses} from "./Component/Dashboard/ManageCourses";
// import {SettingsManagement} from "./Component/Dashboard/SettingsManagement";
// import {Notifications} from "./Component/Dashboard/Notifications";
// import {AddCourseForm} from "./Component/Dashboard/AddCourseForm";
// import {ManageUsers} from "./Component/Dashboard/ManageUsers";
// import {ManageInstructors} from "./Component/Dashboard/ManageInstructors";
// import {QuizQuestionPage} from "./Component/QuizQuestionPage/QuizQuestionPage";
// import {ManageSections} from "./Component/Dashboard/ManageSections";
// function App() {
//   return (
   
//     <BrowserRouter>
//     <Routes>
//         {/* Route for HomePage Page */}
//         <Route path='/home' element={<Home/>}/>

//         {/* Route for About_Us Page */}
//         <Route path='/About_Us' element={<About_Us/>}/>

//         {/* <Route index element={<SignUps/>}/> */}

//         <Route index element={<Home/>}/>
        

//         {/* Route for Sign-Up Page */}
//         <Route path="/SignUp" element={<SignUps/>} />

//         {/* Route for Login Page */}
//         <Route path="/login" element={<LoginPage/>} />

//         {/* Route for Account Page */}
//         <Route path="/account" element={<Account/>} />

//         {/* Route for Login Page */}
//         <Route path="/security" element={<Security/>} />

        
//          {/* Route for /verify-email/:token */}
//         <Route path="/verify-email" element={<VerifyEmail/>} />

         
//           {/* Route for Chat Page */}
//          <Route path="/chat" element={<ChatPage/>} />

//          {/* Route for ProfilePage Page */}
//          <Route path="/profile" element={<ProfilePage/>} />

//          {/* Route for CoursePage Page */}
//          <Route path="/CoursePage" element={<CoursePage/>} />

//          {/* Route for ContactUs Page */}
//          <Route path="/ContactUs" element={<ContactUs/>} />
        
//         {/* Route for Course Page */}
//         <Route path="/Course" element={<Course/>} />

//         {/* Route for Section Page */}
//         <Route path="/Section" element={<Section/>} />

//         {/* Route for Video Page */}
//         <Route path="/Video" element={<Video/>} />

//         {/* Route for Lesson Page */}
//         <Route path="/MyLesson" element={<MyLesson/>} />

//       {/* Route for Publish Page */}
//       <Route path="/Publish" element={<Publish/>} />


       

//         {/* Route for SectionReview Page */}
//         <Route path="/SectionReview" element={<SectionReview/>} />

//         {/* Route for PublishTrack Page */}
//         <Route path="/PublishTrack" element={<PublishTrack/>} />

//         {/* Route for Dashboard pages */}
//         <Route path="/Dashboard" element={<Dashboard/>} />
//         <Route path="/ManageCourses" element={<ManageCourses/>} />
//         <Route path="/SettingsManagement" element={<SettingsManagement/>} />
//         <Route path="/Notifications" element={<Notifications/>} />
//         <Route path="/AddCourseForm" element={<AddCourseForm/>} />
//         <Route path="/ManageUsers" element={<ManageUsers/>} />
//         <Route path="/ManageInstructors" element={<ManageInstructors/>} />
//         <Route path="/ManageSections" element={<ManageSections/>} />

//         <Route path="/QuizQuestionPage" element={<QuizQuestionPage/>} />
//         {/* Route for QuizQuestionPage Page */}
        
        
//     </Routes>
//     </BrowserRouter>
   
        
   
//   );
// }


// export default App;
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg'; // Imported from App.js, if needed
import { getData } from './Component/api/api';
import { useEffect, useState } from 'react';
 // Importing API function to fetch data
// Component_tasneem from App.jsx 
import  Login  from './Component/First/login';
import  Home  from './Component/Home/HomePage';
import  SignUps  from './Component/Second/SignUp';
import  VerifyEmail  from './Component/verify/VerifyEmail';
import  About_Us  from './Component/About Us/About_Us';
import  Account  from './Component/setting/Account';
import  Security  from './Component/setting/security';
import  ChatPage  from './Component/chat/Chatpage';
import  ProfilePage  from './Component/profile/ProfilePage';
import  CoursePage  from './Component/Course Page/CoursePage';
import  Course  from './Component/Course/Course';
import  ContactUs  from './Component/Contact Us/ContactUs';
import  Video  from './Component/Video/Video';
import  Section from './Component/Section/Section';
import  MyLesson  from './Component/MyLesson/MyLesson';
import { Publish } from './Component/Publish/Publish';
import  SectionReview  from './Component/Section Review/SectionReview';
import  PublishTrack  from './Component/Publish track/PublishTrack';
import { Dashboard } from './Component/Dashboard/Dashboard';
import { ManageCourses } from './Component/Dashboard/ManageCourses';
import { SettingsManagement } from './Component/Dashboard/SettingsManagement';
import { Notifications } from './Component/Dashboard/Notifications';
import { AddCourseForm } from './Component/Dashboard/AddCourseForm';
import { ManageUsers } from './Component/Dashboard/ManageUsers';
import { ManageInstructors } from './Component/Dashboard/ManageInstructors';
import { QuizQuestionPage } from './Component/QuizQuestionPage/QuizQuestionPage';
import { ManageSections } from './Component/Dashboard/ManageSections';

// Component_arwa from App.js
import Layout from './Component/Layout/Layout';
import HomeCourses from './Component/Home_Courses/home_courses';
import Tracks from './Component/Tracks/Tracks';
import My_learning from './Component/My_Learning/My_learning';
import My_learning2 from './Component/My_Learning/My_learning2';
import Rate from './Component/Rate/Rate';
import RateInstructor from './Component/Rate/Rate-instructor';
import Leaderboard from './Component/Leaderboard/Leaderboard';
import Track_Courses from './Component/Track_Courses/Track_Courses';
import Track_Courses2 from './Component/Track_Courses/Track_Courses2';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Register/Register';
// import itemDetails from './Component/ItemDetails/itemDetails';
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about-us', element: <About_Us /> },
      { path: 'home-course', element: <HomeCourses /> },
      { path: 'tracks', element: <Tracks /> },
      { path: 'my-learning', element: <My_learning /> },
      { path: 'my-learning2', element: <My_learning2 /> },
      { path: 'rate', element: <Rate /> },
      { path: 'rate-instructor', element: <RateInstructor /> },
      { path: 'leaderboard', element: <Leaderboard /> },
      { path: 'track-courses', element: <Track_Courses /> },
      { path: 'track-courses2', element: <Track_Courses2 /> },
      { path: 'course-page', element: <CoursePage /> },
      { path: 'course', element: <Course /> },
      { path: 'video', element: <Video /> },
      // { path: 'contact-us', element: <ContactUs /> }, تم الحذف
      { path: 'account', element: <Account /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'security', element: <Security /> },
    ],
  },
  // Routes outside Layout (e.g., Dashboard-related)
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'manage-courses', element: <ManageCourses /> },
  { path: 'settings-management', element: <SettingsManagement /> },
  { path: 'notifications', element: <Notifications /> },
  { path: 'add-course-form', element: <AddCourseForm /> },
  { path: 'manage-users', element: <ManageUsers /> },
  { path: 'manage-instructors', element: <ManageInstructors /> },
  { path: 'manage-sections', element: <ManageSections /> },
  { path: 'verify-email', element: <VerifyEmail /> },
  { path: 'publish-track', element: <PublishTrack /> },
  { path: 'quiz-question-page', element: <QuizQuestionPage /> },

  { path: 'Register', element: <Register /> },

  { path: 'itemdetails/:id/:mediaType', element: <itemDetails /> },

  { path: 'sign-up', element: <SignUps /> },
  { path: 'login', element: <Login /> },
  { path: 'chat', element: <ChatPage /> },
  { path: 'section', element: <Section /> },
  { path: 'my-lesson', element: <MyLesson /> },
  { path: 'publish', element: <Publish /> },
  { path: 'section-review', element: <SectionReview /> },
  // Catch-all route for 404
  { path: '*', element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={routers} />;
  
}

export default App;