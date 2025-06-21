// export default App;
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
// import  ContactUs  from './Component/Contact Us/ContactUs';
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
// import Register from './Component/Register/Register';
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

  // { path: 'Register', element: <Register /> },

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