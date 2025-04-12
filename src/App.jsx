import './App.css';

import {LoginPage} from  './Component/First/login';
import { Home } from './Component/Home/HomePage';
import {SignUps} from  './Component/Second/SignUp';
import {VerifyEmail} from  './Component/verify/VerifyEmail';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {Account} from "./Component/setting/Account";
import {Security} from "./Component/setting/security";
import {ChatPage} from "./Component/chat/Chatpage";
import {ProfilePage} from "./Component/profile/ProfilePage"
import {About_Us} from "./Component/About Us/About_Us";
import {CoursePage} from "./Component/Course Page/CoursePage";
import {Course} from "./Component/Course/Course";
import {ContactUs} from "./Component/Contact Us/ContactUs";
import {Video} from "./Component/Video/Video";

import {Section} from "./Component/Section/Section";
import {MyLesson} from "./Component/MyLesson/MyLesson";
import {Publish} from "./Component/Publish/Publish";
import {SectionReview} from "./Component/Section Review/SectionReview";
import {PublishTrack} from "./Component/Publish track/PublishTrack";
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        {/* Route for HomePage Page */}
        <Route path='/home' element={<Home/>}/>

        {/* Route for About_Us Page */}
        <Route path='/About_Us' element={<About_Us/>}/>

        {/* <Route index element={<SignUps/>}/> */}

        <Route index element={<Home/>}/>
        

        {/* Route for Sign-Up Page */}
        <Route path="/SignUp" element={<SignUps/>} />

        {/* Route for Login Page */}
        <Route path="/login" element={<LoginPage/>} />

        {/* Route for Account Page */}
        <Route path="/account" element={<Account/>} />

        {/* Route for Login Page */}
        <Route path="/security" element={<Security/>} />

        
         {/* Route for /verify-email/:token */}
        <Route path="/verify-email" element={<VerifyEmail/>} />

         
          {/* Route for Chat Page */}
         <Route path="/chat" element={<ChatPage/>} />

         {/* Route for ProfilePage Page */}
         <Route path="/profile" element={<ProfilePage/>} />

         {/* Route for CoursePage Page */}
         <Route path="/CoursePage" element={<CoursePage/>} />

         {/* Route for ContactUs Page */}
         <Route path="/ContactUs" element={<ContactUs/>} />
        
        {/* Route for Course Page */}
        <Route path="/Course" element={<Course/>} />

        {/* Route for Section Page */}
        <Route path="/Section" element={<Section/>} />

        {/* Route for Video Page */}
        <Route path="/Video" element={<Video/>} />

        {/* Route for Lesson Page */}
        <Route path="/MyLesson" element={<MyLesson/>} />

      {/* Route for Publish Page */}
      <Route path="/Publish" element={<Publish/>} />


       

        {/* Route for SectionReview Page */}
        <Route path="/SectionReview" element={<SectionReview/>} />

        {/* Route for PublishTrack Page */}
        <Route path="/PublishTrack" element={<PublishTrack/>} />
    </Routes>
    </BrowserRouter>
   
        
   
  );
}


export default App;
