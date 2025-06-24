// export default App;
import './App.css';
import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ProtectedRoute2 from './Component/ProtectedRoute2/ProtectedRoute2';

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
import  Video  from './Component/Video/Video';
import  Section from './Component/Section/Section';
import  MyLesson  from './Component/MyLesson/MyLesson';
import { Publish } from './Component/Publish/Publish';
import  SectionReview  from './Component/Section Review/SectionReview';
import  PublishTrack  from './Component/Publish track/PublishTrack';
import CourseDetails from './Component/Course_Details/Course_Details';
import { Dashboard } from './Component/Dashboard/Dashboard';
import { ManageCourses } from './Component/Dashboard/ManageCourses';
import { SettingsManagement } from './Component/Dashboard/SettingsManagement';
import { Notifications } from './Component/Dashboard/Notifications';
import { AddCourseForm } from './Component/Dashboard/AddCourseForm';
import { ManageUsers } from './Component/Dashboard/ManageUsers';
import { ManageInstructors } from './Component/Dashboard/ManageInstructors';
import { QuizQuestionPage } from './Component/QuizQuestionPage/QuizQuestionPage';
import { ManageSections } from './Component/Dashboard/ManageSections';
import AllVideos from './Component/All Videos/all-videos';

// Component_arwa from App.js
import UploadCourses from './Component/Upload Course/UploadCourses';
import Quizz from './Component/Final Quiz/quiz';
import Final_quiz from './Component/Final Quiz/Final_quiz';
import After_quiz from './Component/Final Quiz/After_quiz';
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
import LogOut from './Component/LogOut/LogOut';
import NotFound from './Component/NotFound/NotFound';

const test=1
// const routers = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },

//       { path: 'home', element: <ProtectedRoute2 userData={test}><Home /></ProtectedRoute2>  },
//       { path: 'about-us', element: <ProtectedRoute userData={test}><About_Us /></ProtectedRoute> },
//       { path: 'home-course', element: <ProtectedRoute2 userData={test} ><HomeCourses /></ProtectedRoute2> },
//       { path: 'tracks', element: <Tracks /> },
//       { path: 'my-learning', element: <My_learning /> },
//       { path: 'my-learning2', element: <My_learning2 /> },
//       { path: 'rate', element: <Rate /> },
//       { path: 'rate-instructor', element: <RateInstructor /> },
//       { path: 'leaderboard', element: <Leaderboard /> },
//       { path: 'track-courses', element: <Track_Courses /> },
//       { path: 'track-courses2', element: <Track_Courses2 /> },
//       { path: 'course-page', element: <CoursePage /> },
//       { path: 'course', element: <Course /> },
//       { path: 'video', element: <Video /> },
//       { path: 'account', element: <Account /> },
//       { path: 'profile', element: <ProfilePage /> },
//       { path: 'security', element: <Security /> },
//       // { path: 'api-test', element: <ApiComponent /> },
//     ],
//   },
//   // Routes outside Layout (e.g., Dashboard-related)
//   { path: 'dashboard', element: <Dashboard /> },
//   { path: 'manage-courses', element: <ManageCourses /> },
//   { path: 'settings-management', element: <SettingsManagement /> },
//   { path: 'notifications', element: <Notifications /> },
//   { path: 'add-course-form', element: <AddCourseForm /> },
//   { path: 'manage-users', element: <ManageUsers /> },
//   { path: 'manage-instructors', element: <ManageInstructors /> },
//   { path: 'manage-sections', element: <ManageSections /> },
//   { path: 'verify-email', element: <VerifyEmail /> },
//   { path: 'publish-track', element: <PublishTrack /> },
//   { path: 'quiz-question-page', element: <QuizQuestionPage /> },
//   { path: 'Quizz', element: <Quizz /> },
//   { path: 'Final_quiz', element: <Final_quiz /> },
//   { path: 'After_quiz', element: <After_quiz /> },
//   { path: 'itemdetails/:id/:mediaType', element: <itemDetails /> }, 
//   { path: 'course-details', element: <CourseDetails /> },
//   { path: 'sign-up', element: <SignUps /> },
//   // { path: 'login', element: <Login /> },
//   { path: 'login', element: <Login saveUserData={saveUserData} /> },
//   {path: 'logout', element: <LogOut setuserData={setuserData} /> },
//   { path: 'chat', element: <ChatPage /> },
//   { path: 'section', element: <Section /> },
//   { path: 'my-lesson', element: <MyLesson /> },
//   { path: 'publish', element: <Publish /> },
//   { path: 'section-review', element: <SectionReview /> },
//   { path: 'upload-course', element: <UploadCourses /> },

//   // Catch-all route for 404
//   { path: '*', element: <NotFound /> },
// ]);

// function App() {
//   const [userData, setuserData]= useState(null)

//   function saveUserData(){
//     let enc_token= localStorage.getItem('token');
//     let dec_token= jwtDecode(enc_token);
//     console.log(dec_token);
//     setuserData(dec_token);
//   }
//   return <RouterProvider router={routers} />;
  
// }
function App() {
  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let enc_token = localStorage.getItem('token');
    if (enc_token) {
      let dec_token = jwtDecode(enc_token);
      console.log(dec_token);
      setuserData(dec_token);
    }
  }

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <ProtectedRoute2 userData={userData}><Home /></ProtectedRoute2> },
        { path: 'about-us', element: <ProtectedRoute userData={userData}><About_Us /></ProtectedRoute> },
        { path: 'home-course', element: <ProtectedRoute2 userData={userData}><HomeCourses /></ProtectedRoute2> },
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
        { path: 'account', element: <Account /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'security', element: <Security /> },
        // { path: 'api-test', element: <ApiComponent /> },
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
    { path: 'Quizz', element: <Quizz /> },
    { path: 'Final_quiz', element: <Final_quiz /> },
    { path: 'After_quiz', element: <After_quiz /> },
    { path: 'itemdetails/:id/:mediaType', element: <itemDetails /> },
    { path: 'course-details', element: <CourseDetails /> },
    { path: 'sign-up', element: <SignUps /> },
    { path: 'login', element: <Login saveUserData={saveUserData} /> },
    { path: 'logout', element: <LogOut setuserData={setuserData} /> },
    { path: 'chat', element: <ChatPage /> },
    { path: 'section', element: <Section /> },
    { path: 'my-lesson', element: <MyLesson /> },
    { path: 'publish', element: <Publish /> },
    { path: 'section-review', element: <SectionReview /> },
    { path: 'upload-course', element: <UploadCourses /> },
    { path: 'all-video', element: <AllVideos /> },
    { path: '*', element: <NotFound /> },
  ]);

  return <RouterProvider router={routers} />;
}

// export default App;
export default App;



